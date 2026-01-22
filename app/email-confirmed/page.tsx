'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function EmailConfirmed() {
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying')
  const [hasToken, setHasToken] = useState(false)

  useEffect(() => {
    // Supabase processes email verification server-side before redirecting.
    // When the user lands on this page, verification is already complete.
    // The token may appear in hash fragments (e.g., #access_token=...&type=signup)
    
    // Check hash fragments first (Supabase often uses this format)
    let token: string | null = null
    let type: string | null = null
    
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashParams = new URLSearchParams(window.location.hash.substring(1))
      token = hashParams.get('access_token') || hashParams.get('token')
      type = hashParams.get('type')
    }
    
    // Also check query parameters (fallback)
    if (!token && typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      token = urlParams.get('token') || urlParams.get('access_token')
      type = urlParams.get('type') || type
    }

    // SECURITY: If this is a recovery token, redirect to reset-password page
    // This should not happen if AuthRedirectHandler is working, but as a safety check:
    if (type === 'recovery') {
      window.location.href = `/reset-password${window.location.hash}`
      return
    }

    // If we're on the confirmation page, Supabase has already verified the email
    // (Supabase wouldn't redirect here unless verification succeeded)
    // So we show success regardless of whether we see the token in the URL
    if (token && type && type !== 'recovery') {
      setHasToken(true)
      setStatus('success')
    } else if (typeof window !== 'undefined' && (window.location.pathname === '/email-confirmed' || window.location.pathname === '/email-confirmed/')) {
      // We're on the confirmation page - Supabase redirected here after successful verification
      // The token was processed server-side, so it may not be in the URL
      // But only if it's not a recovery type
      if (type !== 'recovery') {
        setHasToken(true)
        setStatus('success')
      } else {
        // Recovery token ended up here - redirect to reset-password
        window.location.href = `/reset-password${window.location.hash}`
      }
    } else {
      // Not on confirmation page and no token - this is an error
      setHasToken(false)
      setStatus('error')
    }
  }, [])

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

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-sora font-bold text-purdueGold mb-4">
          Email Verified!
        </h1>

        {/* Description */}
        <p className="text-lg text-warmWhite/80 font-sora mb-6">
          Your email has been successfully verified. You can now sign in to BoilerBites.
        </p>

        {/* Status Message */}
        <div
          className={`mb-6 p-4 rounded-lg font-sora text-sm ${
            status === 'success'
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : status === 'error'
              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
              : 'bg-purdueGold/10 text-purdueGold border border-purdueGold/30'
          }`}
        >
          {status === 'verifying' && 'Verifying...'}
          {status === 'success' && 'Verification successful!'}
          {status === 'error' && 'No verification token found.'}
        </div>

        {/* Open App Button */}
        <a
          href="boilerbites://"
          className="inline-block bg-purdueGold text-purdueBlack-200 px-8 py-3 rounded-lg font-sora font-semibold hover:bg-purdueGold/90 transition-colors mb-4"
        >
          Open BoilerBites App
        </a>

        {/* Back to Home Link */}
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
