'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

type ValidationError = {
  field: 'password' | 'confirmPassword' | 'general'
  message: string
}

type PasswordRequirement = {
  label: string
  met: boolean
}

// Security constants
const MAX_PASSWORD_LENGTH = 128 // Prevent DoS attacks
const MIN_PASSWORD_LENGTH = 8
const RATE_LIMIT_MS = 2000 // Minimum time between submissions (2 seconds)

function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'verifying' | 'form' | 'success' | 'error'>('verifying')
  const [error, setError] = useState<string | null>(null)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState<ValidationError | null>(null)
  
  // Security: Store token hash and track verification state
  const tokenHashRef = useRef<string | null>(null)
  const tokenVerifiedRef = useRef<boolean>(false)
  const [isTokenVerified, setIsTokenVerified] = useState<boolean>(false)
  const lastSubmissionTimeRef = useRef<number>(0)

  // Password requirements with maximum length check
  const passwordRequirements: PasswordRequirement[] = [
    { label: `At least ${MIN_PASSWORD_LENGTH} characters`, met: password.length >= MIN_PASSWORD_LENGTH },
    { label: `Maximum ${MAX_PASSWORD_LENGTH} characters`, met: password.length <= MAX_PASSWORD_LENGTH },
  ]

  const isPasswordValid = passwordRequirements.every(req => req.met)
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0

  // Security: Verify token on mount and store it
  useEffect(() => {
    const verifyToken = async () => {
      const tokenHash = searchParams.get('token_hash')
      const type = searchParams.get('type')

      // Security: Validate token format and type
      if (!tokenHash || type !== 'recovery') {
        setError('This password reset link is invalid or has expired. Please request a new one.')
        setStatus('error')
        return
      }

      // Security: Validate token hash format (should be a valid hash string)
      if (tokenHash.length < 20 || tokenHash.length > 500) {
        setError('This password reset link is invalid or has expired. Please request a new one.')
        setStatus('error')
        return
      }

      try {
        // Security: Verify the token with Supabase - this establishes a recovery session
        const { data, error: verifyError } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: 'recovery',
        })

        if (verifyError || !data) {
          setError('This password reset link is invalid or has expired. Please request a new one.')
          setStatus('error')
          return
        }

        tokenHashRef.current = tokenHash
        tokenVerifiedRef.current = true
        setIsTokenVerified(true)

        // Token is valid, show form
        setStatus('form')
      } catch (err) {
        console.error('Error verifying token:', err)
        setError('An error occurred. Please try again.')
        setStatus('error')
      }
    }

    verifyToken()
  }, [searchParams])

  // Security: Re-verify token and session before password update
  const verifySessionBeforeUpdate = async (): Promise<boolean> => {
    if (!tokenHashRef.current || !tokenVerifiedRef.current) {
      return false
    }

    try {
      // Security: Check if we have an active recovery session
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        const { data, error: verifyError } = await supabase.auth.verifyOtp({
          token_hash: tokenHashRef.current,
          type: 'recovery',
        })

        if (verifyError || !data) {
          return false
        }
      }

      return true
    } catch (err) {
      console.error('Error verifying session:', err)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError(null)
    setError(null)

    // Security: Rate limiting - prevent rapid submissions
    const now = Date.now()
    const timeSinceLastSubmission = now - lastSubmissionTimeRef.current
    if (timeSinceLastSubmission < RATE_LIMIT_MS) {
      setError('Please wait a moment before trying again.')
      return
    }

    if (!tokenVerifiedRef.current || !tokenHashRef.current) {
      setError('This password reset link is invalid or has expired. Please request a new one.')
      setStatus('error')
      return
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      setValidationError({
        field: 'password',
        message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
      })
      return
    }

    // Security: Validate maximum password length to prevent DoS
    if (password.length > MAX_PASSWORD_LENGTH) {
      setValidationError({
        field: 'password',
        message: `Password must be no more than ${MAX_PASSWORD_LENGTH} characters`,
      })
      return
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      setValidationError({
        field: 'confirmPassword',
        message: 'Passwords do not match',
      })
      return
    }

    // Validate password strength
    if (!isPasswordValid) {
      const unmetRequirement = passwordRequirements.find(req => !req.met)
      setValidationError({
        field: 'password',
        message: unmetRequirement ? `Password must ${unmetRequirement.label.toLowerCase()}` : 'Password does not meet requirements',
      })
      return
    }

    setIsSubmitting(true)
    lastSubmissionTimeRef.current = now

    try {
      // Security: Re-verify session before updating password
      const sessionValid = await verifySessionBeforeUpdate()
      if (!sessionValid) {
        setError('This password reset link is invalid or has expired. Please request a new one.')
        setStatus('error')
        setIsSubmitting(false)
        return
      }

      // Security: Update password - Supabase will validate the recovery session server-side
      const { error: updateError } = await supabase.auth.updateUser({
        password: password,
      })

      if (updateError) {
        // Security: Sanitize error messages to prevent information leakage
        const errorMessage = updateError.message.toLowerCase()
        if (errorMessage.includes('token') || errorMessage.includes('expired') || errorMessage.includes('invalid')) {
          setError('This password reset link is invalid or has expired. Please request a new one.')
        } else if (errorMessage.includes('rate limit') || errorMessage.includes('too many')) {
          setError('Too many attempts. Please wait a moment and try again.')
        } else {
          setError('An error occurred while updating your password. Please try again.')
        }
        setIsSubmitting(false)
        return
      }

      // Security: Clear token references after successful update
      tokenHashRef.current = null
      tokenVerifiedRef.current = false
      setIsTokenVerified(false)

      // Success!
      setStatus('success')
    } catch (err) {
      console.error('Error updating password:', err)
      setError('An error occurred. Please try again.')
      setIsSubmitting(false)
    }
  }

  if (status === 'verifying') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-purdueBlack-100/50 backdrop-blur-sm border border-purdueGold/20 rounded-lg p-8 md:p-12 max-w-md w-full text-center">
          <div className="animate-spin w-12 h-12 mx-auto mb-6 border-4 border-purdueGold border-t-transparent rounded-full"></div>
          <h1 className="text-2xl md:text-3xl font-sora font-bold text-purdueGold mb-4">
            Verifying Reset Link
          </h1>
          <p className="text-warmWhite/70 font-sora">
            Please wait while we verify your password reset link...
          </p>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-purdueBlack-100/50 backdrop-blur-sm border border-purdueGold/20 rounded-lg p-8 md:p-12 max-w-md w-full text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30">
            <svg
              className="w-10 h-10 text-red-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <h1 className="text-2xl md:text-3xl font-sora font-bold text-red-400 mb-4">
            Invalid Reset Link
          </h1>
          <p className="text-warmWhite/70 font-sora mb-6">
            {error || 'This password reset link is invalid or has expired. Please request a new one.'}
          </p>
          <Link
            href="/"
            className="inline-block bg-purdueGold text-purdueBlack-200 px-8 py-3 rounded-lg font-sora font-semibold hover:bg-purdueGold/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-purdueBlack-100/50 backdrop-blur-sm border border-purdueGold/20 rounded-lg p-8 md:p-12 max-w-md w-full text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto mb-6 bg-purdueGold rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-purdueBlack-200"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl md:text-3xl font-sora font-bold text-purdueGold mb-4">
            Password Reset Successful!
          </h1>
          <p className="text-warmWhite/70 font-sora mb-6">
            Your password has been reset successfully! You can now sign in to BoilerBites with your new password.
          </p>

          {/* Open App Button */}
          <a
            href="boilerbites://signin"
            className="inline-block bg-purdueGold text-purdueBlack-200 px-8 py-3 rounded-lg font-sora font-semibold hover:bg-purdueGold/90 transition-colors mb-4 w-full"
          >
            Open BoilerBites App
          </a>

          {/* Sign In Link */}
          <div className="mt-4">
            <Link
              href="/"
              className="text-warmWhite/70 hover:text-purdueGold transition-colors font-sora text-sm"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Form state
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-purdueBlack-100/50 backdrop-blur-sm border border-purdueGold/20 rounded-lg p-8 md:p-12 max-w-md w-full">
        <h1 className="text-2xl md:text-3xl font-sora font-bold text-purdueGold mb-2 text-center">
          Reset Your Password
        </h1>
        <p className="text-warmWhite/70 font-sora mb-6 text-center text-sm">
          Enter your new password below
        </p>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 font-sora text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password Field */}
          <div>
            <label htmlFor="password" className="block text-warmWhite/90 font-sora font-medium mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                maxLength={MAX_PASSWORD_LENGTH}
                onChange={(e) => {
                  // Security: Enforce maximum length
                  const newValue = e.target.value.slice(0, MAX_PASSWORD_LENGTH)
                  setPassword(newValue)
                  setValidationError(null)
                }}
                className={`w-full px-4 py-3 bg-purdueBlack-200 border rounded-lg font-sora text-warmWhite placeholder-warmWhite/40 focus:outline-none focus:ring-2 transition-colors ${
                  validationError?.field === 'password'
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-purdueGold/30 focus:ring-purdueGold/50 focus:border-purdueGold'
                }`}
                placeholder="Enter new password"
                aria-label="New password"
                aria-invalid={validationError?.field === 'password'}
                aria-describedby={validationError?.field === 'password' ? 'password-error' : 'password-requirements'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-warmWhite/60 hover:text-warmWhite transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            {validationError?.field === 'password' && (
              <p id="password-error" className="mt-2 text-sm text-red-400 font-sora">
                {validationError.message}
              </p>
            )}
            <div id="password-requirements" className="mt-2 space-y-1">
              {passwordRequirements.map((req, index) => (
                <div key={index} className="flex items-center text-sm font-sora">
                  <span className={`mr-2 ${req.met ? 'text-green-400' : 'text-warmWhite/40'}`}>
                    {req.met ? '✓' : '○'}
                  </span>
                  <span className={req.met ? 'text-green-400' : 'text-warmWhite/60'}>
                    {req.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-warmWhite/90 font-sora font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                maxLength={MAX_PASSWORD_LENGTH}
                onChange={(e) => {
                  // Security: Enforce maximum length
                  const newValue = e.target.value.slice(0, MAX_PASSWORD_LENGTH)
                  setConfirmPassword(newValue)
                  setValidationError(null)
                }}
                className={`w-full px-4 py-3 bg-purdueBlack-200 border rounded-lg font-sora text-warmWhite placeholder-warmWhite/40 focus:outline-none focus:ring-2 transition-colors ${
                  validationError?.field === 'confirmPassword'
                    ? 'border-red-500 focus:ring-red-500/50'
                    : passwordsMatch && confirmPassword.length > 0
                    ? 'border-green-500/50 focus:ring-green-500/50'
                    : 'border-purdueGold/30 focus:ring-purdueGold/50 focus:border-purdueGold'
                }`}
                placeholder="Confirm new password"
                aria-label="Confirm new password"
                aria-invalid={validationError?.field === 'confirmPassword'}
                aria-describedby={validationError?.field === 'confirmPassword' ? 'confirm-password-error' : undefined}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-warmWhite/60 hover:text-warmWhite transition-colors"
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            {validationError?.field === 'confirmPassword' && (
              <p id="confirm-password-error" className="mt-2 text-sm text-red-400 font-sora">
                {validationError.message}
              </p>
            )}
            {passwordsMatch && confirmPassword.length > 0 && !validationError && (
              <p className="mt-2 text-sm text-green-400 font-sora">Passwords match</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isPasswordValid || !passwordsMatch || isSubmitting || !isTokenVerified}
            className="w-full bg-purdueGold text-purdueBlack-200 px-8 py-3 rounded-lg font-sora font-semibold hover:bg-purdueGold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purdueGold"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Resetting Password...
              </span>
            ) : (
              'Reset Password'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-warmWhite/70 hover:text-purdueGold transition-colors font-sora text-sm"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

// Loading fallback component
function ResetPasswordLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-purdueBlack-100/50 backdrop-blur-sm border border-purdueGold/20 rounded-lg p-8 md:p-12 max-w-md w-full text-center">
        <div className="animate-spin w-12 h-12 mx-auto mb-6 border-4 border-purdueGold border-t-transparent rounded-full"></div>
        <h1 className="text-2xl md:text-3xl font-sora font-bold text-purdueGold mb-4">
          Loading...
        </h1>
        <p className="text-warmWhite/70 font-sora">
          Please wait...
        </p>
      </div>
    </div>
  )
}

// Default export with Suspense boundary
export default function ResetPassword() {
  return (
    <Suspense fallback={<ResetPasswordLoading />}>
      <ResetPasswordForm />
    </Suspense>
  )
}
