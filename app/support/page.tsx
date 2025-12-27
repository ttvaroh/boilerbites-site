'use client'

import { useState } from 'react'

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How do I download BoilerBites?',
      answer: 'BoilerBites is available on the App Store for iOS. Search for "BoilerBites" or use the download link on our homepage.',
    },
    {
      question: 'Is BoilerBites free to use?',
      answer: 'Yes! BoilerBites is completely free to use. There are no subscription fees or in-app purchases required to access all features.',
    },
    {
      question: 'Do I need a Purdue email to use the app?',
      answer: 'While you can sign in with your Purdue.edu email using Azure AD OAuth, you can also create an account using any email address with traditional email/password authentication.',
    },
    {
      question: 'How accurate is the nutrition information?',
      answer: 'Nutrition data comes directly from Purdue dining hall menus and the FatSecret nutrition database. We strive to provide the most accurate information available, but please note that actual values may vary slightly.',
    },
    {
      question: 'Can I track custom foods?',
      answer: 'Yes! BoilerBites allows you to create custom food entries with full nutrition information. You can also create custom meals by combining multiple items.',
    },
    {
      question: 'How do I report missing nutrition data?',
      answer: 'If you find an item with missing nutrition information, you can report it directly from the item detail page. We review all reports and work to update the database.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, all user data is securely stored using Supabase with industry-standard encryption. Your personal information and nutrition data are protected and never shared with third parties.',
    },
    {
      question: 'Can I use BoilerBites offline?',
      answer: 'While BoilerBites requires an internet connection to fetch menu data and sync your entries, you can view previously loaded data offline. We recommend connecting to the internet for the best experience.',
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-sora font-bold text-purdueGold mb-6">
          Support
        </h1>
        <p className="text-xl text-warmWhite/90 font-sora max-w-2xl mx-auto">
          We're here to help! Find answers to common questions or get in touch with our support team.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-sora font-bold text-purdueGold mb-6">
          Get in Touch
        </h2>
        <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">
                Email Support & Feature Requests
              </h3>
              <p className="text-warmWhite/80 font-sora mb-2">
                Have a question or feature request? Send us an email:
              </p>
              <a
                href="mailto:ttvaroh@icloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmWhite/80 font-sora hover:text-purdueGold transition-colors"
              >
                ttvaroh@icloud.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">
                Response Time
              </h3>
              <p className="text-warmWhite/80 font-sora">
                We typically respond to support requests within 24-48 hours. For urgent issues, please
                include "URGENT" in your email subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-sora font-bold text-purdueGold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purdueBlack-100/70 transition-colors"
              >
                <span className="text-warmWhite font-sora font-semibold pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-purdueGold flex-shrink-0 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 border-t border-purdueGold/20">
                  <p className="text-warmWhite/80 font-sora leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Help Resources */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-sora font-bold text-purdueGold mb-6">
          Help Resources
        </h2>
        <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">
                Documentation
              </h3>
              <p className="text-warmWhite/80 font-sora mb-2">
                Check out our README and version history on GitHub for detailed technical documentation:
              </p>
              <a
                href="https://github.com/ttvaroh/boilerbites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purdueGold font-sora hover:underline"
              >
                github.com/ttvaroh/boilerbites
              </a>
            </div>
            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">
                Community
              </h3>
              <p className="text-warmWhite/80 font-sora mb-2">
                Join discussions, share feedback, and connect with other users on our Discord server:
              </p>
              <a
                href="https://discord.gg/4MNhXMdNqP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purdueGold font-sora hover:underline"
              >
                discord.gg/4MNhXMdNqP
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

