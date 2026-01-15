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
      const type = hashParams.get('type')
      
      if (accessToken && type) {
        // This is an email confirmation redirect - redirect to confirmation page
        // Use window.location to preserve hash fragments (Next.js router doesn't handle hashes well)
        window.location.href = `/email-confirmed${window.location.hash}`
      }
    }
  }, [pathname])

  return null
}
