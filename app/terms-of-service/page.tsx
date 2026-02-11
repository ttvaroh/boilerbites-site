export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-sora font-bold text-purdueGold mb-6">
          Terms of Service
        </h1>
        <p className="text-xl text-warmWhite/90 font-sora max-w-3xl mx-auto">
          Last Updated: February 9, 2026
        </p>
      </section>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            1. Agreement to Terms
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <p className="text-warmWhite/80 font-sora text-lg leading-relaxed mb-4">
              Welcome to BoilerBites. By downloading, accessing, or using the BoilerBites mobile application
              ("App" or "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not
              agree to these Terms, do not use the App.
            </p>
            <p className="text-warmWhite/80 font-sora">
              Contact: <a href="mailto:ttvaroh@icloud.com" className="text-purdueGold hover:underline">ttvaroh@icloud.com</a>
            </p>
          </div>
        </section>

        {/* Description of Service */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            2. Description of Service
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-4">
            <p className="text-warmWhite/80 font-sora">
              BoilerBites provides a nutrition and food-tracking application that allows you to:
            </p>
            <ul className="space-y-2 text-warmWhite/80 font-sora ml-4">
              <li>• View dining hall menus and nutrition information</li>
              <li>• Log food consumption and track daily nutrition</li>
              <li>• Set and monitor nutrition goals</li>
              <li>• Save favorite items and manage preferences (e.g., allergens)</li>
              <li>• Optionally sync your food log to Apple Health or Fitbit</li>
            </ul>
            <p className="text-warmWhite/80 font-sora">
              Menu data may be sourced from third parties. We do not guarantee availability, accuracy, or
              completeness of menu or nutrition information.
            </p>
          </div>
        </section>

        {/* Account & Eligibility */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            3. Account & Eligibility
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-4">
            <p className="text-warmWhite/80 font-sora">
              You must create an account to use certain features. You agree to:
            </p>
            <ul className="space-y-2 text-warmWhite/80 font-sora ml-4">
              <li>• Provide accurate and current registration information</li>
              <li>• Maintain the security of your password and account</li>
              <li>• Accept responsibility for all activity under your account</li>
              <li>• Notify us promptly of any unauthorized use</li>
            </ul>
            <p className="text-warmWhite/80 font-sora">
              You must be at least 13 years of age to use the Service. If you are under 18, you should have
              your parent or guardian review these Terms with you.
            </p>
          </div>
        </section>

        {/* Acceptable Use */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            4. Acceptable Use
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-4">
            <p className="text-warmWhite/80 font-sora">You agree not to:</p>
            <ul className="space-y-2 text-warmWhite/80 font-sora ml-4">
              <li>• Use the Service for any illegal purpose or in violation of any laws</li>
              <li>• Attempt to gain unauthorized access to the Service, other accounts, or our systems</li>
              <li>• Use the Service to harass, abuse, or harm others</li>
              <li>• Scrape, reverse-engineer, or automate access to the Service in an unauthorized manner</li>
              <li>• Interfere with or disrupt the Service or servers or networks connected to the Service</li>
              <li>• Use the Service to transmit malware or harmful code</li>
            </ul>
            <p className="text-warmWhite/80 font-sora">
              We may suspend or terminate your account if we believe you have violated these Terms or
              acceptable use.
            </p>
          </div>
        </section>

        {/* Health Features & Disclaimers */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            5. Health Features & Not Medical Advice
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">5.1 Optional Health App Sync</h3>
              <p className="text-warmWhite/80 font-sora">
                You may choose to connect Apple Health or Fitbit to sync your BoilerBites food log to those
                apps. Sync is optional and can be disabled or disconnected at any time. Use of third-party
                health apps is subject to their respective terms and privacy policies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">5.2 Not Medical or Dietary Advice</h3>
              <p className="text-warmWhite/80 font-sora">
                The Service is for informational and personal tracking purposes only. It does not provide
                medical, nutritional, or dietary advice. Nutrition and calorie data may be estimates. Always
                consult a qualified healthcare or nutrition professional for medical conditions, diets, or
                health-related decisions. We are not liable for any decisions you make based on information
                in the App.
              </p>
            </div>
            <div className="bg-purdueGold/10 border border-purdueGold/30 rounded-lg p-4">
              <p className="text-warmWhite/90 font-sora font-semibold">
                ⚠️ If you have or suspect a medical condition, or are on a prescribed diet, consult your
                doctor before relying on this app for nutrition decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            6. Intellectual Property
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <p className="text-warmWhite/80 font-sora">
              The App, including its design, text, graphics, logos, and software (excluding third-party content
              and menu data), is owned by or licensed to BoilerBites. You may not copy, modify, distribute, or
              create derivative works without our permission. You retain ownership of any content you submit
              (e.g., food entries); you grant us a license to use it to operate and provide the Service.
            </p>
          </div>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            7. Third-Party Services & Links
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <p className="text-warmWhite/80 font-sora mb-4">
              The Service may use or link to third-party services (e.g., authentication, nutrition APIs,
              Apple Health, Fitbit). Your use of those services is subject to their terms and policies. We
              are not responsible for third-party services, their availability, or their handling of your
              data.
            </p>
            <p className="text-warmWhite/80 font-sora">
              Menu and nutrition data may come from dining providers or other sources. We do not guarantee
              accuracy or endorse third-party content.
            </p>
          </div>
        </section>

        {/* Disclaimers */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            8. Disclaimers
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <p className="text-warmWhite/80 font-sora uppercase mb-2">The Service is provided "as is" and "as available."</p>
            <ul className="space-y-2 text-warmWhite/80 font-sora ml-4">
              <li>• We do not warrant that the Service will be uninterrupted, error-free, or secure</li>
              <li>• We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose</li>
              <li>• Nutrition and menu information may contain errors or be outdated</li>
              <li>• You use the Service at your own risk</li>
            </ul>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            9. Limitation of Liability
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <p className="text-warmWhite/80 font-sora mb-4">
              To the maximum extent permitted by law, BoilerBites and its operators shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages, or for loss of profits,
              data, or goodwill, arising from your use of or inability to use the Service.
            </p>
            <p className="text-warmWhite/80 font-sora">
              Our total liability for any claims arising from these Terms or the Service shall not exceed the
              amount you paid us in the twelve (12) months preceding the claim, or one hundred dollars ($100),
              whichever is greater. Some jurisdictions do not allow certain limitations; in such cases, our
              liability will be limited to the fullest extent permitted by law.
            </p>
          </div>
        </section>

        {/* Indemnification */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            10. Indemnification
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <p className="text-warmWhite/80 font-sora">
              You agree to indemnify, defend, and hold harmless BoilerBites and its operators from any
              claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from your
              use of the Service, your violation of these Terms, or your violation of any rights of another.
            </p>
          </div>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            11. Termination
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-4">
            <p className="text-warmWhite/80 font-sora">
              You may stop using the Service and delete your account at any time. We may suspend or
              terminate your access to the Service, with or without notice, for any reason, including
              violation of these Terms.
            </p>
            <p className="text-warmWhite/80 font-sora">
              Upon termination, your right to use the Service ceases. Sections that by their nature should
              survive (e.g., disclaimers, limitation of liability, indemnification, governing law) will
              survive termination.
            </p>
          </div>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            12. Changes to Terms
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <ul className="space-y-3 text-warmWhite/80 font-sora">
              <li>• We may update these Terms from time to time</li>
              <li>• Material changes may be communicated via the App or email; the "Last Updated" date will be revised</li>
              <li>• Continued use of the Service after changes constitutes acceptance of the updated Terms</li>
              <li>• If you do not agree to updated Terms, you must stop using the Service</li>
            </ul>
          </div>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            13. Governing Law & Disputes
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <p className="text-warmWhite/80 font-sora">
              These Terms are governed by the laws of the State of Indiana, United States, without regard to
              conflict of law principles. Any dispute arising from these Terms or the Service shall be
              resolved in the state or federal courts located in Indiana. You consent to personal
              jurisdiction in such courts.
            </p>
          </div>
        </section>

        {/* General */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            14. General
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-4">
            <p className="text-warmWhite/80 font-sora">
              If any provision of these Terms is held invalid or unenforceable, the remaining provisions
              remain in effect. Our failure to enforce any right or provision does not waive that right or
              provision. These Terms constitute the entire agreement between you and BoilerBites regarding
              the Service and supersede any prior agreements.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            15. Contact Us
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <p className="text-warmWhite/80 font-sora mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <p className="text-warmWhite/80 font-sora">
              Email: <a href="mailto:ttvaroh@icloud.com" className="text-purdueGold hover:underline">ttvaroh@icloud.com</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
