'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function EmailConfirmed() {
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying')
  const [hasToken, setHasToken] = useState(false)

  useEffect(() => {
    // Extract token and type from URL
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    const type = urlParams.get('type')

    if (token && type) {
      setHasToken(true)
      // The verification is handled by Supabase when the user lands on this page
      // Supabase processes the token automatically via the redirect
      setStatus('success')
    } else {
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
