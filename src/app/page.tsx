export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏡</span>
            <span className="text-2xl font-bold text-gray-800">PartyFarm</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-800 transition-colors">Features</a>
            <a href="#venues" className="text-gray-600 hover:text-gray-800 transition-colors">Venues</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-800 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
          </div>
          <button className="btn-primary">Book Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 mb-8 leading-tight">
            Unforgettable Events at
            <span className="gradient-text block">Premium Farmhouses</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 mx-auto leading-relaxed">
            Transform your celebrations into extraordinary experiences. From intimate family gatherings to grand corporate events, discover the perfect venue for your special moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="btn-primary text-xl px-10 py-5">
              🎉 Start Planning Your Event
            </button>
            <button className="btn-secondary text-xl px-10 py-5">
              📱 Chat on WhatsApp
            </button>
          </div>
          <div className="relative mx-auto mt-6">
            <div className="aspect-video bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl shadow-2xl border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl mb-6 block">🏡</span>
                <p className="text-gray-600 text-2xl">Beautiful Farmhouse Preview</p>
                <p className="text-gray-500 text-lg mt-3">(Hero image placeholder)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-24 bg-gray-800 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-4">500+</div>
              <div className="text-gray-300 text-lg">Happy Events</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-4">50+</div>
              <div className="text-gray-300 text-lg">Premium Venues</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-4">5⭐</div>
              <div className="text-gray-300 text-lg">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-4">24/7</div>
              <div className="text-gray-300 text-lg">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">What We Do</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We connect you with the most beautiful and well-equipped farmhouses for your special events. 
              Every venue is handpicked and verified to ensure your celebration is nothing short of perfect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="card p-10 lg:p-12 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl lg:text-7xl mb-8">🎪</div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">Family Celebrations</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Birthday parties, anniversaries, family reunions, and festivals. Create lasting memories 
                with your loved ones in beautiful, private settings designed for joy and togetherness.
              </p>
            </div>
            
            <div className="card p-10 lg:p-12 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl lg:text-7xl mb-8">🏢</div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">Corporate Events</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Team building, company retreats, product launches, and conferences. Professional venues 
                with modern amenities to make your business events successful and memorable.
              </p>
            </div>
            
            <div className="card p-10 lg:p-12 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl lg:text-7xl mb-8">🎉</div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">Youth Parties</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Bachelor parties, graduation celebrations, and friend gatherings. Trendy venues with 
                music systems, gaming areas, and party amenities for the ultimate fun experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 xl:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-12">
                Why PartyFarm is the Best Choice for Your Events
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">Curated Premium Venues</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">Handpicked farmhouses with modern amenities, beautiful landscapes, and perfect ambiance for any occasion.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">End-to-End Service</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">From venue selection to event planning, catering coordination, and decoration setup - we handle everything.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">Flexible Packages</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">Customizable packages for any budget and group size, with transparent pricing and no hidden costs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">24/7 Support</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">Dedicated event coordinators available round-the-clock to ensure your event runs smoothly.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <button className="btn-primary text-xl px-10 py-5">Get Started Today</button>
                <button className="btn-secondary text-xl px-10 py-5">Learn More</button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl shadow-2xl border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-9xl lg:text-[10rem] mb-6 block">🌟</span>
                  <p className="text-gray-600 text-2xl">Premium Experience</p>
                  <p className="text-gray-500 text-lg mt-3">(Feature image placeholder)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Ready to Host Your Perfect Event?</h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of satisfied customers who have created unforgettable memories with PartyFarm. 
            Start planning your dream event today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-primary bg-green-500 hover:bg-green-600 text-xl px-10 py-5">
              📞 Call Us Now
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-gray-800 text-xl px-10 py-5">
              💬 WhatsApp Chat
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-3xl">🏡</span>
                <span className="text-2xl font-bold">PartyFarm</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Creating unforgettable events at premium farmhouses across the region.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>Family Celebrations</li>
                <li>Corporate Events</li>
                <li>Youth Parties</li>
                <li>Event Planning</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>About Us</li>
                <li>Our Venues</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>📞 +91 XXXXX XXXXX</li>
                <li>💬 WhatsApp Chat</li>
                <li>📧 hello@partyfarm.com</li>
                <li>🌐 www.partyfarm.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-lg">
            <p>&copy; 2025 PartyFarm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
