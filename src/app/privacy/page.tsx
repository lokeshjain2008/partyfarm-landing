import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - PartyFarm',
  description: 'Privacy Policy for PartyFarm - Premium farmhouse booking platform. Learn how we protect your personal information and data.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏡</span>
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors">
              PartyFarm
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-600 hover:text-gray-800 transition-colors">Features</Link>
            <Link href="/#venues" className="text-gray-600 hover:text-gray-800 transition-colors">Venues</Link>
            <Link href="/#faq" className="text-gray-600 hover:text-gray-800 transition-colors">FAQ</Link>
            <Link href="/#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</Link>
          </div>
          <a 
            href="https://wa.me/917240509191?text=Hi%20PartyFarm!%20I%20want%20to%20book%20a%20farmhouse.%20Can%20you%20show%20me%20available%20options?" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy is important to us. This policy explains how PartyFarm collects, uses, and protects your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: July 23, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            
            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Information We Collect</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
              <p className="mb-6">
                When you book a farmhouse or contact us, we may collect:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Name and contact details (phone number, email address)</li>
                <li>Event details (date, guest count, special requirements)</li>
                <li>Location preferences and venue requirements</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Communication history and preferences</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Website usage data and analytics</li>
                <li>Device information and browser type</li>
                <li>IP address and location data (when permitted)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">2. How We Use Your Information</h2>
              <p className="mb-4">We use your personal information to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Process bookings:</strong> Match you with suitable farmhouses and manage reservations</li>
                <li><strong>Communicate:</strong> Send booking confirmations, updates, and respond to inquiries</li>
                <li><strong>Improve services:</strong> Analyze usage patterns to enhance our platform</li>
                <li><strong>Customer support:</strong> Provide assistance and resolve any issues</li>
                <li><strong>Marketing:</strong> Send promotional content (only with your consent)</li>
                <li><strong>Legal compliance:</strong> Meet regulatory requirements and protect our rights</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">3. Information Sharing</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Venue owners:</strong> Share necessary details to confirm bookings</li>
                <li><strong>Service providers:</strong> Payment processors, communication platforms, and analytics tools</li>
                <li><strong>Legal authorities:</strong> When required by law or to protect rights and safety</li>
                <li><strong>Business transfers:</strong> In case of merger, acquisition, or sale of assets</li>
              </ul>
              <p className="mb-4">
                <strong>We never sell your personal information</strong> to third parties for their marketing purposes.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Data Security</h2>
              <p className="mb-4">We implement industry-standard security measures:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>SSL encryption for all data transmissions</li>
                <li>Secure servers and data storage</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Staff training on data protection practices</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correct:</strong> Update or correct inaccurate information</li>
                <li><strong>Delete:</strong> Request deletion of your personal data</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Data portability:</strong> Receive your data in a portable format</li>
                <li><strong>Object:</strong> Object to processing of your personal information</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:privacy@partyfarm.com" className="text-green-600 hover:text-green-800 underline">
                  privacy@partyfarm.com
                </a>
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Cookies and Tracking</h2>
              <p className="mb-4">We use cookies to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Improve website functionality and user experience</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="mb-4">
                You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Data Retention</h2>
              <p className="mb-4">We retain your personal information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>For as long as necessary to provide our services</li>
                <li>For 3 years after your last booking for customer service purposes</li>
                <li>As required by law or for legitimate business interests</li>
                <li>Until you request deletion (subject to legal requirements)</li>
              </ul>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">8. Third-Party Services</h2>
              <p className="mb-4">Our website may contain links to third-party services:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>WhatsApp for customer communication</li>
                <li>Payment gateways for secure transactions</li>
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms</li>
              </ul>
              <p className="mb-4">
                These third parties have their own privacy policies. We&apos;re not responsible for their practices.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">9. Children&apos;s Privacy</h2>
              <p className="mb-4">
                Our services are not intended for children under 13. We don&apos;t knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">10. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this privacy policy periodically. We&apos;ll notify you of significant changes by:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications for material changes</li>
                <li>Updating the &quot;Last updated&quot; date at the top</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">11. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this privacy policy or our data practices, contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> privacy@partyfarm.com</p>
                <p className="mb-2"><strong>Phone:</strong> +91 7240509191</p>
                <p className="mb-2"><strong>WhatsApp:</strong> 
                  <a 
                    href="https://wa.me/917240509191?text=Hi%20PartyFarm!%20I%20have%20questions%20about%20your%20privacy%20policy." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline ml-2"
                  >
                    Chat with us
                  </a>
                </p>
                <p><strong>Website:</strong> https://partyfarm.in</p>
              </div>
            </div>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link 
              href="/"
              className="btn-primary text-xl px-10 py-5 inline-flex items-center justify-center"
            >
              🏠 Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-3xl">🏡</span>
            <span className="text-2xl font-bold">PartyFarm</span>
          </div>
          <p className="text-gray-400 mb-6">Making your happy moments memorable</p>
          <div className="flex justify-center space-x-6">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400">
            <p>&copy; 2025 PartyFarm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
