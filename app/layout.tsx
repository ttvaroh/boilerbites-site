import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Background from '@/components/Background'
import AuthRedirectHandler from '@/components/AuthRedirectHandler'

export const metadata: Metadata = {
  title: 'BoilerBites - Track Your Dining Hall Calories',
  description: 'Track your dining hall calories with precision and style. A modern app for Purdue students to track nutrition from campus dining halls.',
  keywords: ['Purdue', 'dining hall', 'nutrition', 'calorie tracking', 'food tracking'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthRedirectHandler />
        <Background>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Background>
      </body>
    </html>
  )
}

