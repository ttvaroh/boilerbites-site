export default function About() {
  const keyFeatures = [
    'Real-time menu data from all Purdue dining halls',
    'Advanced search with allergen and dietary filters',
    'Comprehensive nutrition tracking with macro breakdown',
    'Favorites system for quick access to frequent items',
    'Custom food entries for personalized tracking',
    'Beautiful dark theme with Purdue Gold accents',
  ]

  const techStack = [
    'React Native & Expo',
    'Supabase (Backend & Database)',
    'TypeScript',
    'Tailwind CSS / NativeWind',
    'FatSecret Nutrition API',
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-sora font-bold text-purdueGold mb-6">
          About BoilerBites
        </h1>
        <p className="text-xl text-warmWhite/90 font-sora max-w-3xl mx-auto">
          A modern nutrition tracking app designed specifically for Purdue University students
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-sora font-bold text-purdueGold mb-6">
          Our Mission
        </h2>
        <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
          <p className="text-warmWhite/80 font-sora text-lg leading-relaxed mb-4">
            BoilerBites was created to help Purdue students make informed decisions about their nutrition
            while dining on campus. We provide convenient access to real-time dining hall menus and understand
            that tracking calories and nutrients can be challenging, especially when eating at dining halls
            with constantly changing menus.
          </p>
          <p className="text-warmWhite/80 font-sora text-lg leading-relaxed">
            Our goal is to provide a simple, beautiful, and accurate way to track your nutrition, helping
            you maintain a healthy lifestyle throughout your college journey.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-sora font-bold text-purdueGold mb-6">
          Key Features
        </h2>
        <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
          <ul className="space-y-4">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purdueGold mr-3 font-bold">•</span>
                <span className="text-warmWhite/80 font-sora">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-sora font-bold text-purdueGold mb-6">
          Technology Stack
        </h2>
        <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
          <p className="text-warmWhite/80 font-sora text-lg mb-4">
            BoilerBites is built with modern technologies to ensure a fast, reliable, and beautiful experience:
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-purdueGold/20 text-purdueGold border border-purdueGold/30 px-4 py-2 rounded-lg font-sora text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* App Overview */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-sora font-bold text-purdueGold mb-6">
          App Overview
        </h2>
        <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-6">
          <div>
            <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">
              Home Screen
            </h3>
            <p className="text-warmWhite/80 font-sora">
              Browse all Purdue dining halls with real-time status indicators showing current meal hours
              and availability. Quick navigation to each dining hall's menu.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">
              Search & Discovery
            </h3>
            <p className="text-warmWhite/80 font-sora">
              Search across multiple nutrition databases with advanced filtering options. Filter by allergens,
              dietary preferences, calorie range, and more.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">
              Nutrition Diary
            </h3>
            <p className="text-warmWhite/80 font-sora">
              Track your daily nutrition with visual progress bars, meal organization, and detailed macro
              breakdowns. View and edit entries for any date.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">
              Authentication
            </h3>
            <p className="text-warmWhite/80 font-sora">
              Sign in with your Purdue.edu email account using Azure AD OAuth, or use traditional email/password
              authentication. Your data is securely stored and synced across devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

