import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-purdueGold/20 bg-purdueBlack-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-sora font-bold text-purdueGold mb-4">
              BoilerBites
            </h3>
            <p className="text-warmWhite/70 text-sm font-sora">
              Track your dining hall calories with precision and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-purdueGold font-sora font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-warmWhite/70 hover:text-purdueGold transition-colors font-sora text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-warmWhite/70 hover:text-purdueGold transition-colors font-sora text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-warmWhite/70 hover:text-purdueGold transition-colors font-sora text-sm"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-purdueGold font-sora font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@boilerbites.app"
                  className="text-warmWhite/70 hover:text-purdueGold transition-colors font-sora text-sm"
                >
                  support@boilerbites.app
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/boilerbites/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warmWhite/70 hover:text-purdueGold transition-colors font-sora text-sm"
                >
                  GitHub Issues
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purdueGold/20 text-center">
          <p className="text-warmWhite/50 text-sm font-sora">
            © {currentYear} BoilerBites. Made with ❤️ for Purdue students.
          </p>
        </div>
      </div>
    </footer>
  )
}

