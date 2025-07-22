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

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 lg:px-8 relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-green-50/90 z-0"></div>
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container mx-auto text-center relative z-10">
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
            <a 
              href="https://wa.me/917240509191?text=Hi%20PartyFarm!%20I'm%20interested%20in%20booking%20a%20farmhouse%20for%20my%20event.%20Can%20you%20help%20me?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-xl px-10 py-5 inline-flex items-center justify-center"
            >
              📱 Chat on WhatsApp
            </a>
          </div>
          
          {/* Featured Venue Preview */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-200 to-blue-200 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">🏡</div>
                      <p className="text-sm">Luxury Farmhouse</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-green-200 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">🌿</div>
                      <p className="text-sm">Garden Paradise</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-200 to-blue-200 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">🎪</div>
                      <p className="text-sm">Event Venue</p>
                    </div>
                  </div>
                </div>
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
                <a 
                  href="https://wa.me/917240509191?text=Hi%20PartyFarm!%20I'm%20interested%20in%20your%20services.%20Can%20you%20tell%20me%20more%20about%20your%20farmhouse%20options?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-xl px-10 py-5 inline-flex items-center justify-center"
                >
                  Get Started Today
                </a>
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
            <a 
              href="tel:+917240509191"
              className="btn-primary bg-green-500 hover:bg-green-600 text-xl px-10 py-5 inline-flex items-center justify-center"
            >
              📞 Call Us Now
            </a>
            <a 
              href="https://wa.me/917240509191?text=Hi%20PartyFarm!%20I'm%20ready%20to%20book%20a%20farmhouse%20for%20my%20event.%20Please%20help%20me%20get%20started!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary border-white text-white hover:bg-white hover:text-gray-800 text-xl px-10 py-5 inline-flex items-center justify-center"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Got questions? We&apos;ve got answers! Here&apos;s everything you need to know about booking your perfect farmhouse celebration.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                    How do I book a farmhouse with PartyFarm?
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Super easy! Just click any &quot;WhatsApp Chat&quot; button on our site or call us directly. Tell us your event date, guest count, and preferences. We&apos;ll show you the perfect farmhouse options and handle everything from there! 🎉
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                    Can I visit the farmhouse before booking?
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Absolutely! We encourage site visits. We can arrange a quick tour so you can see the venue, check out amenities, and ensure it&apos;s perfect for your celebration. Many of our clients love this personal touch! 🏡
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                    What&apos;s included in the farmhouse booking?
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Each farmhouse comes with basic amenities like seating, lighting, and restrooms. We can also arrange catering, decoration, music systems, games, and entertainment. Just tell us what you need for your perfect party! 🎪
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                    How far in advance should I book?
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We recommend booking 2-4 weeks in advance, especially for weekends and holidays. But don&apos;t worry if you&apos;re planning last-minute - we often have great options available and love helping with urgent celebrations! ⏰
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                    Is PartyFarm safe and reliable?
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Safety is our top priority! All our farmhouses are personally verified, well-maintained, and have proper security arrangements. Plus, our team is available 24/7 to ensure your event goes smoothly. Your celebration, our responsibility! 🛡️
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">
                    What if weather affects my outdoor event?
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Most of our farmhouses have both indoor and covered outdoor spaces. We always have backup plans for weather concerns and will work with you to ensure your event is amazing regardless of the weather! ☀️🌧️
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-gray-600 mb-8">Still have questions? We&apos;re here to help!</p>
            <a 
              href="https://wa.me/917240509191?text=Hi%20PartyFarm!%20I%20have%20some%20questions%20about%20booking%20a%20farmhouse.%20Can%20you%20help%20me?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-xl px-10 py-5 inline-flex items-center justify-center"
            >
              💬 Ask Us Anything
            </a>
          </div>
        </div>
      </section>

      {/* Venue Gallery Section */}
      <section id="venues" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">Our Premium Venues</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our collection of handpicked farmhouses, each offering unique charm and modern amenities for your perfect celebration.
            </p>
          </div>
          
          {/* Main Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Venue 1 - Large Featured */}
            <div className="md:col-span-2 lg:col-span-2 group cursor-pointer">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🏡</div>
                    <p className="text-xl font-semibold">Luxury Garden Farmhouse</p>
                    <p className="text-sm mt-2">Perfect for 50-100 guests</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-sm font-semibold text-gray-800">Starting ₹15,000/day</p>
                </div>
              </div>
            </div>
            
            {/* Venue 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🌿</div>
                    <p className="text-lg font-semibold">Serene Retreat</p>
                    <p className="text-xs mt-1">20-40 guests</p>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <p className="text-xs font-semibold text-gray-800">₹8,000/day</p>
                </div>
              </div>
            </div>
            
            {/* Venue 3 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🎪</div>
                    <p className="text-lg font-semibold">Event Paradise</p>
                    <p className="text-xs mt-1">100+ guests</p>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <p className="text-xs font-semibold text-gray-800">₹25,000/day</p>
                </div>
              </div>
            </div>
            
            {/* Venue 4 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🏖️</div>
                    <p className="text-lg font-semibold">Poolside Villa</p>
                    <p className="text-xs mt-1">30-60 guests</p>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <p className="text-xs font-semibold text-gray-800">₹18,000/day</p>
                </div>
              </div>
            </div>
            
            {/* Venue 5 - Large Featured */}
            <div className="md:col-span-2 group cursor-pointer">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🌄</div>
                    <p className="text-xl font-semibold">Mountain View Estate</p>
                    <p className="text-sm mt-2">Perfect for corporate retreats • 80-150 guests</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-sm font-semibold text-gray-800">Starting ₹30,000/day</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA for Gallery */}
          <div className="text-center">
            <a 
              href="https://wa.me/917240509191?text=Hi%20PartyFarm!%20I'd%20like%20to%20see%20more%20venue%20options%20and%20photos.%20Can%20you%20share%20your%20complete%20gallery?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-xl px-10 py-5 inline-flex items-center justify-center"
            >
              📸 View Full Gallery
            </a>
          </div>

            {/* Venue 1 - Large Featured */}
            <div className="md:col-span-2 lg:col-span-2 group cursor-pointer">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🏡</div>
                    <p className="text-xl font-semibold">Luxury Garden Farmhouse</p>
                    <p className="text-sm mt-2">Perfect for 50-100 guests</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-sm font-semibold text-gray-800">Starting ₹15,000/day</p>
                </div>
              </div>
            </div>
            
            {/* Venue 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🌿</div>
                    <p className="text-lg font-semibold">Serene Retreat</p>
                    <p className="text-xs mt-1">20-40 guests</p>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <p className="text-xs font-semibold text-gray-800">₹8,000/day</p>
                </div>
              </div>
            </div>
            
            {/* Venue 3 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🎪</div>
                    <p className="text-lg font-semibold">Event Paradise</p>
                    <p className="text-xs mt-1">100+ guests</p>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <p className="text-xs font-semibold text-gray-800">₹25,000/day</p>
                </div>
              </div>
            </div>
            
            {/* Venue 4 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🏖️</div>
                    <p className="text-lg font-semibold">Poolside Villa</p>
                    <p className="text-xs mt-1">30-60 guests</p>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <p className="text-xs font-semibold text-gray-800">₹18,000/day</p>
                </div>
              </div>
            </div>
            
            {/* Venue 5 - Large Featured */}
            <div className="md:col-span-2 group cursor-pointer">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🌄</div>
                    <p className="text-xl font-semibold">Mountain View Estate</p>
                    <p className="text-sm mt-2">Perfect for corporate retreats • 80-150 guests</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-sm font-semibold text-gray-800">Starting ₹30,000/day</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA for Gallery */}
          <div className="text-center">
            <a 
              href="https://wa.me/917240509191?text=Hi%20PartyFarm!%20I'd%20like%20to%20see%20more%20venue%20options%20and%20photos.%20Can%20you%20share%20your%20complete%20gallery?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-xl px-10 py-5 inline-flex items-center justify-center"
            >
              📸 View Full Gallery
            </a>
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
                <li><a href="#features" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#venues" className="hover:text-white transition-colors">Our Venues</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>
                  <a href="tel:+917240509191" className="hover:text-white transition-colors">
                    📞 +91 724050 9191
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/917240509191?text=Hi%20PartyFarm!%20I'm%20interested%20in%20your%20farmhouse%20booking%20services." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    💬 WhatsApp Chat
                  </a>
                </li>
                <li>📧 hello@partyfarm.com</li>
                <li>🌐 https://partyfarm.in</li>
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
