import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary via-accent to-secondary text-text p-4">
      {/* Hero Section */}
      <section className="w-full max-w-2xl text-center py-12" aria-labelledby="hero-title">
        <h1 id="hero-title" className="text-5xl font-heading text-primary mb-4 drop-shadow-lg">PartyFarm</h1>
        <p className="text-xl font-body text-secondary mb-6">Book private farmhouses for unforgettable events and parties!</p>
        <Image
          src="/farm-hero-placeholder.png"
          alt="Illustration of a fun party at a farmhouse"
          width={320}
          height={180}
          className="mx-auto mb-6 rounded-xl shadow-2xl border-4 border-accent"
        />
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-green-400 via-primary to-green-600 text-background font-heading text-lg px-8 py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-200 border-2 border-white"
          aria-label="Chat with us on WhatsApp"
        >
          🎉 Chat with us on WhatsApp
        </a>
      </section>
      {/* Features Section */}
      <section className="w-full max-w-2xl py-12 text-center" aria-labelledby="features-title">
        <h2 id="features-title" className="text-3xl font-heading text-primary mb-6 drop-shadow">Why PartyFarm?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white/70 rounded-xl p-6 shadow-md">
            <span className="text-5xl mb-2" aria-hidden="true">🎉</span>
            <h3 className="text-xl font-heading mb-2">Memorable Events</h3>
            <p className="font-body text-text">We make every party unforgettable with unique farm experiences.</p>
          </div>
          <div className="flex flex-col items-center bg-white/70 rounded-xl p-6 shadow-md">
            <span className="text-5xl mb-2" aria-hidden="true">🏡</span>
            <h3 className="text-xl font-heading mb-2">Private Farmhouses</h3>
            <p className="font-body text-text">Choose from a curated list of beautiful, private farmhouses.</p>
          </div>
          <div className="flex flex-col items-center bg-white/70 rounded-xl p-6 shadow-md">
            <span className="text-5xl mb-2" aria-hidden="true">💬</span>
            <h3 className="text-xl font-heading mb-2">Easy Booking</h3>
            <p className="font-body text-text">Book instantly and chat with us for personalized recommendations.</p>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full max-w-2xl py-12 text-center" aria-labelledby="faq-title">
        <h2 id="faq-title" className="text-3xl font-heading text-primary mb-6 drop-shadow">FAQs</h2>
        <div className="space-y-6">
          <div className="bg-accent/30 rounded-xl p-4 shadow">
            <h4 className="font-heading text-lg mb-2">How do I book a farmhouse?</h4>
            <p className="font-body">Just hit the WhatsApp button and tell us your party plans. We’ll handle the rest!</p>
          </div>
          <div className="bg-accent/30 rounded-xl p-4 shadow">
            <h4 className="font-heading text-lg mb-2">Can I visit before booking?</h4>
            <p className="font-body">Absolutely! We’ll arrange a fun tour for you and your friends.</p>
          </div>
          <div className="bg-accent/30 rounded-xl p-4 shadow">
            <h4 className="font-heading text-lg mb-2">Is it safe and private?</h4>
            <p className="font-body">Yes! All our farmhouses are vetted for safety and privacy. Your party, your rules!</p>
          </div>
        </div>
      </section>

      {/* ...other sections will go here... */}
    </main>
  );
}
