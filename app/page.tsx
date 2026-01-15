import Link from 'next/link'

export default function Home() {
  const features = [
    {
      title: 'Real-time Menu Data',
      description: 'Access live dining hall menus with up-to-date information on all available items.',
    },
    {
      title: 'Advanced Search',
      description: 'Search across dining halls with filters for allergens, dietary preferences, and nutrition goals.',
    },
    {
      title: 'Nutrition Tracking',
      description: 'Track your daily calories and macronutrients with detailed progress visualization.',
    },
    {
      title: 'Favorites System',
      description: 'Save your frequently eaten items for quick access and easy logging.',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-sora font-bold text-purdueGold mb-6">
          BoilerBites
        </h1>
        <p className="text-xl md:text-2xl text-warmWhite/90 font-sora mb-8 max-w-2xl mx-auto">
          Track your dining hall calories with precision and style
        </p>
        <p className="text-lg text-warmWhite/70 font-sora mb-12 max-w-xl mx-auto">
          A modern app for Purdue students to track nutrition from campus dining halls.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/us/app/boilerbites-purdue-dining/id6754264626"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purdueGold text-purdueBlack-200 px-8 py-3 rounded-lg font-sora font-semibold hover:bg-purdueGold/90 transition-colors"
          >
            Download on the App Store
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-sora font-bold text-purdueGold text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-6 hover:border-purdueGold/40 transition-colors"
            >
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">
                {feature.title}
              </h3>
              <p className="text-warmWhite/70 font-sora">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-sora font-bold text-purdueGold mb-4">
            Ready to Start Tracking?
          </h2>
          <p className="text-warmWhite/70 font-sora mb-6">
            Download BoilerBites today and take control of your nutrition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/boilerbites-purdue-dining/id6754264626"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purdueGold text-purdueBlack-200 px-8 py-3 rounded-lg font-sora font-semibold hover:bg-purdueGold/90 transition-colors"
            >
              Get Started
            </a>
            <Link
              href="/about"
              className="border border-purdueGold text-purdueGold px-8 py-3 rounded-lg font-sora font-semibold hover:bg-purdueGold/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

