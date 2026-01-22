'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AuthRedirectHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if we're on the home page and have Supabase auth tokens in the hash
    if (pathname === '/' && typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1)
      const hashParams = new URLSearchParams(hash)
      
      // Check if this is a Supabase auth callback (has access_token and type)
      const accessToken = hashParams.get('access_token')
      const refreshToken = hashParams.get('refresh_token')
      const type = hashParams.get('type')
      
      if (accessToken && type) {
        // CRITICAL: Check the type to route to the correct page
        // Supabase auth types:
        // - 'recovery': Password reset flow
        // - 'signup': New user email verification
        // - 'email': Email verification (general)
        // - 'email_change': Email change verification
        // - 'invite': User invitation (treat as email confirmation)
        if (type === 'recovery') {
          // Password reset - redirect to reset-password page
          // Use window.location to preserve hash fragments (Next.js router doesn't handle hashes well)
          window.location.href = `/reset-password${window.location.hash}`
        } else if (type === 'signup' || type === 'email_change' || type === 'email' || type === 'invite') {
          // Email confirmation flows - redirect to email-confirmed page
          // These include: new signups, email changes, general email verification, and invitations
          window.location.href = `/email-confirmed${window.location.hash}`
        } else {
          // Unknown type - default to email-confirmed for backwards compatibility
          // This ensures existing email confirmation flows continue to work
          window.location.href = `/email-confirmed${window.location.hash}`
        }
      }
    }
  }, [pathname])

  return null
}
