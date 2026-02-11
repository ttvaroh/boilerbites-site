export default function Privacy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-sora font-bold text-purdueGold mb-6">
          Privacy Policy
        </h1>
        <p className="text-xl text-warmWhite/90 font-sora max-w-3xl mx-auto">
          Last Updated: February 11, 2026
        </p>
      </section>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            1. Introduction & Contact Information
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <p className="text-warmWhite/80 font-sora text-lg leading-relaxed mb-4">
              BoilerBites ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our mobile
              application.
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">Contact Information</h3>
              <p className="text-warmWhite/80 font-sora">
                Email: <a href="mailto:ttvaroh@icloud.com" className="text-purdueGold hover:underline">ttvaroh@icloud.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            2. Information We Collect
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">2.1 Account Information</h3>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• <strong>Email Address</strong>: Collected during sign-up for account creation and authentication</li>
                <li>• <strong>Full Name</strong>: Collected during registration or profile editing</li>
                <li>• <strong>Password</strong>: Stored securely by Supabase (hashed, not in plain text)</li>
                <li>• <strong>Authentication Tokens</strong>: Session tokens stored locally on device via AsyncStorage</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">2.2 Health & Nutrition Data</h3>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• <strong>Food Entries</strong>: What foods you consume, quantities, meal times, and dates</li>
                <li>• <strong>Nutrition Goals</strong>: Daily calorie, protein, carbohydrate, and fat goals</li>
                <li>• <strong>Nutrition Preferences</strong>: Allergen information (dairy, gluten, nuts, soy, eggs, shellfish, fish, peanuts)</li>
                <li>• <strong>Daily Nutrition Tracking</strong>: Consumed calories and macronutrients per day</li>
                <li>• <strong>Favorite Items</strong>: Food items you mark as favorites</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">2.3 Usage Data</h3>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• <strong>Search Queries</strong>: Food search terms sent to FatSecret API (via proxy)</li>
                <li>• <strong>Barcode Scans</strong>: Product barcodes scanned for nutrition lookup (sent to FatSecret API)</li>
                <li>• <strong>App Usage</strong>: Basic app functionality usage (handled by Expo platform)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">2.4 Device Information</h3>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• <strong>Camera Access</strong>: Used only for barcode scanning (no images stored)</li>
                <li>• <strong>Device Information</strong>: Basic device info for app functionality (via Expo)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">2.5 Third-Party Authentication Data</h3>
              <p className="text-warmWhite/80 font-sora mb-2">
                If using Purdue.edu sign-in, Microsoft/Azure AD provides:
              </p>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• Email address</li>
                <li>• Profile information (name, email)</li>
                <li>• Authentication tokens</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">2.6 Health App Connection & Sync Data (Optional)</h3>
              <p className="text-warmWhite/80 font-sora mb-2">
                If you choose to connect Apple Health or Fitbit, we collect and use the following only to sync your BoilerBites food logs to the health app:
              </p>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• <strong>Connection status</strong>: Whether you have connected Apple Health or Fitbit, and whether auto-sync is enabled</li>
                <li>• <strong>Fitbit</strong>: OAuth tokens (access and refresh) stored securely so we can send your logged foods to your Fitbit food log. We do not read your existing Fitbit activity or health data.</li>
                <li>• <strong>Apple Health</strong>: We only <em>write</em> dietary data (calories, protein, carbs, fat, etc.) for foods you log in BoilerBites. We do not read your other Health app data. Permission is requested on-device and can be revoked in iOS Settings.</li>
                <li>• <strong>Sync records</strong>: We store which BoilerBites food entry IDs were synced to which external log IDs (e.g., Fitbit log ID) so we can update or remove them when you edit or delete entries in BoilerBites.</li>
              </ul>
              <p className="text-warmWhite/80 font-sora mt-2">
                Health app connection is optional. Disconnecting in the app or revoking permissions in your device or Fitbit account stops all sync and use of this data.
              </p>
            </div>

            <div className="bg-purdueGold/10 border border-purdueGold/30 rounded-lg p-4 mt-4">
              <p className="text-warmWhite/90 font-sora font-semibold">
                ⚠️ Important Note: Camera access is used ONLY for barcode scanning. No photos or images are stored or transmitted.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            3. How We Use Your Information
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-4">
            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">Account Management</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora ml-4">
                <li>• Create and manage your user account</li>
                <li>• Authenticate your identity</li>
                <li>• Provide password reset functionality</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">Core App Functionality</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora ml-4">
                <li>• Track your daily nutrition intake</li>
                <li>• Store your food entries and favorites</li>
                <li>• Calculate nutrition goals and progress</li>
                <li>• Filter menu items based on your allergen preferences</li>
                <li>• Provide personalized dining hall menu information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">Search & Discovery</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora ml-4">
                <li>• Process food search queries through FatSecret API</li>
                <li>• Look up nutrition information for scanned barcodes</li>
                <li>• Display relevant food items and nutrition data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">Health App Sync (Optional)</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora ml-4">
                <li>• Send your BoilerBites food entries (name, calories, macros, meal type, date) to Apple Health or Fitbit when you have connected and enabled sync</li>
                <li>• Update or remove entries in the health app when you edit or delete them in BoilerBites</li>
                <li>• Store connection and sync metadata only as needed to keep health app logs in sync with your BoilerBites diary</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">Service Improvement</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora ml-4">
                <li>• Improve app functionality and user experience</li>
                <li>• Fix bugs and technical issues</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Storage & Security */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            4. Data Storage & Security
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">4.1 Where Data is Stored</h3>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• <strong>Supabase Database</strong>: All user data (profile, food entries, nutrition tracking, favorites), health app connection status, and sync metadata (e.g., Fitbit log IDs linked to your food entries) are stored in Supabase's secure PostgreSQL database</li>
                <li>• <strong>Local Device Storage</strong>: Authentication tokens stored locally via AsyncStorage for session management</li>
                <li>• <strong>Supabase Authentication</strong>: User credentials and authentication data managed by Supabase</li>
                <li>• <strong>Fitbit</strong>: When connected, we send only the food log data you create in BoilerBites to Fitbit; we do not store your Fitbit health or activity data on our servers</li>
                <li>• <strong>Apple Health</strong>: Dietary data we write is stored in the Health app on your device only; we do not receive or store your Health app data on our servers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">4.2 Security Measures</h3>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• <strong>Encryption</strong>: Data transmitted using HTTPS/TLS encryption</li>
                <li>• <strong>Authentication</strong>: Secure password hashing (handled by Supabase)</li>
                <li>• <strong>Row Level Security (RLS)</strong>: Database-level security ensuring users can only access their own data</li>
                <li>• <strong>Secure Tokens</strong>: Authentication tokens stored securely on device</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            5. Third-Party Services & Data Sharing
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">5.1 Supabase</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora">
                <li>• <strong>Purpose</strong>: Backend services (authentication, database, hosting)</li>
                <li>• <strong>Data Shared</strong>: All user account data, food entries, nutrition tracking, preferences</li>
                <li>• <strong>Privacy Policy</strong>: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purdueGold hover:underline">https://supabase.com/privacy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">5.2 Microsoft Azure AD</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora">
                <li>• <strong>Purpose</strong>: OAuth authentication for Purdue.edu email sign-in</li>
                <li>• <strong>Data Shared</strong>: Email address, profile information (only during authentication)</li>
                <li>• <strong>Privacy Policy</strong>: <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-purdueGold hover:underline">https://privacy.microsoft.com/privacystatement</a></li>
                <li>• <strong>Note</strong>: Only used if user chooses "Sign in with Purdue.edu"</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">5.3 FatSecret API</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora">
                <li>• <strong>Purpose</strong>: Nutrition database for food search and barcode lookup</li>
                <li>• <strong>Data Shared</strong>: Food search queries and product barcodes (GTIN-13 format)</li>
                <li>• <strong>Privacy Policy</strong>: <a href="https://www.fatsecret.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purdueGold hover:underline">https://www.fatsecret.com/privacy</a></li>
                <li>• <strong>Note</strong>: Search queries and barcodes are sent via Oracle Cloud proxy server</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">5.4 Oracle Cloud Infrastructure</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora">
                <li>• <strong>Purpose</strong>: Proxy server for FatSecret API calls (required for IP whitelisting)</li>
                <li>• <strong>Data Shared</strong>: Food search queries and barcodes (passed through, not stored)</li>
                <li>• <strong>Privacy Policy</strong>: <a href="https://www.oracle.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-purdueGold hover:underline">https://www.oracle.com/legal/privacy/</a></li>
                <li>• <strong>Note</strong>: Acts as a pass-through proxy; does not store user data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">5.5 Expo</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora">
                <li>• <strong>Purpose</strong>: App development platform, updates, and basic analytics</li>
                <li>• <strong>Data Shared</strong>: Basic usage metrics, crash reports (if enabled)</li>
                <li>• <strong>Privacy Policy</strong>: <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-purdueGold hover:underline">https://expo.dev/privacy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">5.6 Fitbit (Optional)</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora">
                <li>• <strong>Purpose</strong>: Sync your BoilerBites food log to your Fitbit food log so you can see your nutrition in the Fitbit app</li>
                <li>• <strong>Data Shared</strong>: Food name, calories, macronutrients, meal type, and date for entries you add, edit, or delete in BoilerBites. OAuth tokens are stored so we can perform sync on your behalf.</li>
                <li>• <strong>Privacy Policy</strong>: <a href="https://www.fitbit.com/global/us/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-purdueGold hover:underline">https://www.fitbit.com/global/us/legal/privacy-policy</a></li>
                <li>• <strong>Note</strong>: Only used if you connect Fitbit in the app. You can disconnect at any time in BoilerBites or in your Fitbit account.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-2">5.7 Apple Health (Optional)</h3>
              <ul className="space-y-1 text-warmWhite/80 font-sora">
                <li>• <strong>Purpose</strong>: Write dietary nutrition data (calories, protein, carbs, fat, etc.) for foods you log in BoilerBites into the Health app on your iPhone</li>
                <li>• <strong>Data Shared</strong>: Data is written to Health on your device only; we do not send your Health data to our servers. We only send the dietary entries you create in BoilerBites to the Health app.</li>
                <li>• <strong>Privacy Policy</strong>: Apple Health data is governed by Apple's privacy practices. See <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-purdueGold hover:underline">https://www.apple.com/legal/privacy/</a></li>
                <li>• <strong>Note</strong>: Only used if you enable Apple Health in the app. You can revoke access in iOS Settings → Privacy & Security → Health → BoilerBites.</li>
              </ul>
            </div>

            <div className="bg-purdueGold/10 border border-purdueGold/30 rounded-lg p-4 mt-4">
              <p className="text-warmWhite/90 font-sora font-semibold">
                ⚠️ Important: We do NOT sell your personal data to third parties. Data is only shared with the services listed above to provide app functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            6. Data Retention
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <ul className="space-y-3 text-warmWhite/80 font-sora">
              <li>• <strong>Account Data</strong>: Retained while your account is active</li>
              <li>• <strong>Food Entries</strong>: Retained until you delete them or your account is deleted</li>
              <li>• <strong>Nutrition Tracking</strong>: Historical data retained for progress tracking</li>
              <li>• <strong>Health App Connections</strong>: Connection and sync metadata retained until you disconnect the health app or delete your account</li>
              <li>• <strong>Deletion</strong>: You can delete your account at any time, which will delete all associated data, including health app connection and sync records</li>
            </ul>
          </div>
        </section>

        {/* Your Rights & Choices */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            7. Your Rights & Choices
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">7.1 Access & Control</h3>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• <strong>View Your Data</strong>: Access your profile, food entries, and nutrition data through the app</li>
                <li>• <strong>Edit Your Data</strong>: Update your profile, nutrition goals, and preferences in-app</li>
                <li>• <strong>Delete Data</strong>: Delete individual food entries or your entire account</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">7.2 Account Deletion</h3>
              <p className="text-warmWhite/80 font-sora mb-2">You can delete your account at any time. Account deletion will remove:</p>
              <ul className="space-y-1 text-warmWhite/80 font-sora ml-4">
                <li>• Your profile information</li>
                <li>• All food entries</li>
                <li>• Nutrition tracking data</li>
                <li>• Favorite items</li>
                <li>• Nutrition preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">7.3 Camera Permission</h3>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• Camera access is optional and only needed for barcode scanning</li>
                <li>• You can revoke camera permission in device settings</li>
                <li>• App will continue to function without camera access (manual food entry still available)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">7.4 Authentication Options</h3>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• You can choose between email/password or Azure AD (Purdue.edu) authentication</li>
                <li>• You can switch authentication methods (contact support for assistance)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-sora font-semibold text-purdueGold mb-3">7.5 Health App Connections</h3>
              <ul className="space-y-2 text-warmWhite/80 font-sora">
                <li>• <strong>Disconnect anytime</strong>: In the app, go to Health Connections and disconnect Apple Health or Fitbit. This stops all syncing and we will no longer send data to that service.</li>
                <li>• <strong>Fitbit</strong>: You can also revoke BoilerBites access in your Fitbit account settings</li>
                <li>• <strong>Apple Health</strong>: You can revoke BoilerBites' access to Health in iOS Settings → Privacy & Security → Health → BoilerBites</li>
                <li>• Disconnecting or revoking does not delete data already sent to the health app; you may need to remove those entries in the Fitbit or Health app if desired</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            8. Children's Privacy
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <ul className="space-y-3 text-warmWhite/80 font-sora">
              <li>• <strong>Age Requirement</strong>: BoilerBites is not intended for users under 13 years of age</li>
              <li>• <strong>COPPA Compliance</strong>: We do not knowingly collect personal information from children under 13</li>
              <li>• <strong>If you discover a child under 13 has provided information</strong>: Contact us immediately to have it removed</li>
            </ul>
          </div>
        </section>

        {/* California Privacy Rights */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            9. California Privacy Rights (CCPA)
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <p className="text-warmWhite/80 font-sora mb-3">
              If applicable, California residents have specific rights regarding their personal information:
            </p>
            <ul className="space-y-2 text-warmWhite/80 font-sora">
              <li>• Right to know what personal information is collected</li>
              <li>• Right to delete personal information</li>
              <li>• Right to opt-out of sale of personal information (we do not sell data)</li>
            </ul>
          </div>
        </section>

        {/* International Users */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            10. International Users
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <ul className="space-y-3 text-warmWhite/80 font-sora">
              <li>• <strong>Data Location</strong>: Data is stored in Supabase's cloud infrastructure (location may vary)</li>
              <li>• <strong>GDPR</strong>: If you are in the EU, you have additional rights under GDPR</li>
              <li>• <strong>Data Transfer</strong>: Data may be transferred to and processed in countries outside your jurisdiction</li>
            </ul>
          </div>
        </section>

        {/* Changes to Privacy Policy */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            11. Changes to Privacy Policy
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <ul className="space-y-3 text-warmWhite/80 font-sora">
              <li>• We may update this privacy policy from time to time</li>
              <li>• Material changes will be notified through the app or email</li>
              <li>• Continued use of the app after changes constitutes acceptance</li>
            </ul>
          </div>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            12. Contact Us
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <p className="text-warmWhite/80 font-sora mb-4">
              For privacy concerns or questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-warmWhite/80 font-sora">
              Email: <a href="mailto:ttvaroh@icloud.com" className="text-purdueGold hover:underline">ttvaroh@icloud.com</a>
            </p>
          </div>
        </section>

        {/* Important Notes */}
        <section>
          <h2 className="text-3xl font-sora font-bold text-purdueGold mb-4">
            Important Notes
          </h2>
          <div className="bg-purdueBlack-100/50 border border-purdueGold/20 rounded-lg p-8">
            <ul className="space-y-3 text-warmWhite/80 font-sora">
              <li>• <strong>Camera Usage</strong>: Camera is ONLY used for barcode scanning, no images stored</li>
              <li>• <strong>No Location Tracking</strong>: The app does NOT collect location data (only dining hall preferences)</li>
              <li>• <strong>No Advertising</strong>: The app does NOT show ads or use advertising networks</li>
              <li>• <strong>No Cross-App Tracking</strong>: We do NOT track users across other apps or websites</li>
              <li>• <strong>Health Data</strong>: Apple Health and Fitbit integration is optional. We only send your BoilerBites food logs to the health app you connect; we do not read your existing health or activity data from those apps for any other purpose.</li>
              <li>• <strong>Data Minimization</strong>: We only collect data necessary for app functionality</li>
              <li>• <strong>User Control</strong>: Users can delete their data and disconnect health apps at any time</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

