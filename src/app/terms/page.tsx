import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions - PartyFarm',
  description: 'Terms and Conditions for PartyFarm - Premium farmhouse booking platform. Understand our booking policies and service terms.',
}

export default function TermsAndConditions() {
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

      {/* Terms Content */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">Terms &amp; Conditions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms and conditions carefully before using PartyFarm&apos;s booking services.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: July 23, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            
            {/* Agreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using PartyFarm&apos;s services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
              <p className="mb-4">
                PartyFarm reserves the right to modify these terms at any time. We will notify you of significant changes through our website or email.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">2. Our Services</h2>
              <p className="mb-4">PartyFarm provides:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Online platform to browse and book premium farmhouses</li>
                <li>Venue matching services based on your requirements</li>
                <li>Customer support for booking inquiries and assistance</li>
                <li>Event planning guidance and recommendations</li>
                <li>Coordination between customers and venue owners</li>
              </ul>
              <p className="mb-4">
                <strong>Important:</strong> PartyFarm acts as an intermediary between customers and venue owners. We facilitate bookings but do not own the farmhouses.
              </p>
            </div>

            {/* Booking Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">3. Booking Process &amp; Policies</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Booking Confirmation</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>All bookings are subject to venue availability</li>
                <li>Booking confirmation requires advance payment as specified</li>
                <li>You will receive written confirmation via email or WhatsApp</li>
                <li>Bookings are confirmed only after payment processing</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Terms</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Advance payment: 30-50% of total booking amount</li>
                <li>Balance payment: Due 24-48 hours before event date</li>
                <li>Security deposit: May be required for certain venues</li>
                <li>All payments are processed through secure gateways</li>
                <li>Additional charges may apply for extra services</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cancellation Policy</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>15+ days before event:</strong> 80% refund (processing fee applies)</li>
                <li><strong>7-14 days before event:</strong> 50% refund</li>
                <li><strong>3-6 days before event:</strong> 25% refund</li>
                <li><strong>Less than 3 days:</strong> No refund</li>
                <li><strong>Weather/emergency cancellations:</strong> Case-by-case evaluation</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Your Responsibilities</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Before the Event</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide accurate information about guest count and requirements</li>
                <li>Complete all payments on time</li>
                <li>Coordinate with our team for special arrangements</li>
                <li>Obtain necessary permits if required for your event type</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">During the Event</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Respect venue rules and property</li>
                <li>Ensure guest behavior is appropriate and lawful</li>
                <li>Stay within agreed guest limits</li>
                <li>Follow safety guidelines and instructions</li>
                <li>Report any damages or issues immediately</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Prohibited Activities</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Illegal activities or substance abuse</li>
                <li>Excessive noise that disturbs neighbors</li>
                <li>Damage to property or surroundings</li>
                <li>Exceeding maximum guest capacity</li>
                <li>Unauthorized modifications to venue setup</li>
              </ul>
            </div>

            {/* Venue Owners */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Venue Partner Responsibilities</h2>
              <p className="mb-4">Our venue partners commit to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Maintain property in good condition and cleanliness</li>
                <li>Provide accurate descriptions and amenities</li>
                <li>Honor confirmed bookings and pricing</li>
                <li>Ensure basic safety and security measures</li>
                <li>Respond promptly to customer inquiries</li>
                <li>Resolve any issues during events</li>
              </ul>
            </div>

            {/* Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Liability &amp; Insurance</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer Liability</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>You are responsible for your guests&apos; actions and behavior</li>
                <li>Any damages caused during your event are your responsibility</li>
                <li>You must compensate for property damage or loss</li>
                <li>Security deposits may be used to cover damages</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">PartyFarm&apos;s Liability</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>We facilitate bookings but don&apos;t own or control venues</li>
                <li>Venue conditions and safety are primarily the owner&apos;s responsibility</li>
                <li>We provide assistance but cannot guarantee specific outcomes</li>
                <li>Our liability is limited to the booking amount paid</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Insurance Recommendations</h3>
              <p className="mb-4">
                We strongly recommend customers consider event insurance for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Personal liability coverage</li>
                <li>Property damage protection</li>
                <li>Event cancellation coverage</li>
                <li>Weather-related contingencies</li>
              </ul>
            </div>

            {/* Force Majeure */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Force Majeure</h2>
              <p className="mb-4">
                Neither party is liable for failures due to circumstances beyond reasonable control, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Natural disasters (earthquakes, floods, severe weather)</li>
                <li>Government restrictions or legal requirements</li>
                <li>Public health emergencies</li>
                <li>Infrastructure failures (power, internet, transportation)</li>
                <li>Acts of terrorism or civil unrest</li>
              </ul>
              <p className="mb-4">
                In such cases, we will work with you to reschedule or provide alternative solutions.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">8. Dispute Resolution</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Resolution Process</h3>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li><strong>Direct Communication:</strong> Contact our support team first</li>
                <li><strong>Mediation:</strong> We&apos;ll mediate between parties to find solutions</li>
                <li><strong>Escalation:</strong> Unresolved issues may require external mediation</li>
                <li><strong>Legal Action:</strong> As a last resort, subject to local jurisdiction</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer Support</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <p className="mb-2"><strong>Phone:</strong> +91 7240509191</p>
                <p className="mb-2"><strong>WhatsApp:</strong> 
                  <a 
                    href="https://wa.me/917240509191?text=Hi%20PartyFarm!%20I%20need%20help%20with%20my%20booking." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline ml-2"
                  >
                    Chat with support
                  </a>
                </p>
                <p><strong>Email:</strong> support@partyfarm.com</p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">9. Intellectual Property</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>PartyFarm&apos;s website, logo, and content are our intellectual property</li>
                <li>You may not reproduce or distribute our content without permission</li>
                <li>User-generated content may be used for promotional purposes</li>
                <li>We respect others&apos; intellectual property rights</li>
              </ul>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">10. Privacy &amp; Data Protection</h2>
              <p className="mb-4">
                Your privacy is important to us. Our data collection and usage practices are detailed in our{' '}
                <a href="/privacy" className="text-green-600 hover:text-green-800 underline">
                  Privacy Policy
                </a>
                . Key points:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>We collect only necessary information for bookings</li>
                <li>Your data is protected with industry-standard security</li>
                <li>We don&apos;t sell personal information to third parties</li>
                <li>You can request data deletion or modification</li>
              </ul>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">11. Modifications to Terms</h2>
              <p className="mb-4">
                PartyFarm may update these terms periodically. We will:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Post updated terms on our website</li>
                <li>Notify existing customers of significant changes</li>
                <li>Provide reasonable notice before changes take effect</li>
                <li>Consider your continued use as acceptance of new terms</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">12. Governing Law</h2>
              <p className="mb-4">
                These terms are governed by Indian law. Any legal disputes will be subject to the jurisdiction of courts in [Your City/State]. For international customers, we&apos;ll attempt to resolve issues through online mediation first.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">13. Contact Information</h2>
              <p className="mb-4">
                For questions about these terms or any legal matters:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Legal Inquiries:</strong> legal@partyfarm.com</p>
                <p className="mb-2"><strong>General Support:</strong> support@partyfarm.com</p>
                <p className="mb-2"><strong>Phone:</strong> +91 7240509191</p>
                <p className="mb-2"><strong>WhatsApp:</strong> 
                  <a 
                    href="https://wa.me/917240509191?text=Hi%20PartyFarm!%20I%20have%20questions%20about%20your%20terms%20and%20conditions." 
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
