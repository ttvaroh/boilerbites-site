import React from 'react'

interface BackgroundProps {
  children: React.ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0d0d0d]">
      {children}
    </div>
  )
}

