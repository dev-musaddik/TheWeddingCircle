import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Heart, Globe, Users, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error('Backend connection error:', err));
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wedding Circle",
    "description": "A global wedding space connecting brides, venues and industry experts through curated experiences, education and inspiration",
    "url": "https://theweddingcircle.com"
  };

  return (
    <div className="bg-secondary">
      <SEO 
        title="Destination Wedding | Wedding Circle"
        description="Wedding Circle is a global wedding space connecting brides, venues and industry experts through curated experiences, education and inspiration."
        keywords="destination wedding, wedding circle, luxury wedding venues, destination wedding planner, global wedding space"
        canonicalUrl="https://theweddingcircle.com"
        structuredData={structuredData}
      />

      {/* Hero: What Wedding Circle Is */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Container - Replace the src with your video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1519167758481-83f29da8c3e7?auto=format&fit=crop&q=80&w=2000"
          >
            {/* Replace this with your video source */}
            <source src="/hero_section_video.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f29da8c3e7?auto=format&fit=crop&q=80&w=2000" 
              alt="Destination wedding curated by Wedding Circle" 
              className="w-full h-full object-cover"
            />
          </video>
          {/* Enhanced gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
          {/* Decorative line above title */}
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <div className="h-px w-16 bg-accent"></div>
            <div className="mx-4 text-accent text-sm tracking-[0.3em] uppercase font-light">Welcome to</div>
            <div className="h-px w-16 bg-accent"></div>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight animate-slide-up" 
              style={{ animationDelay: '0.2s' }}>
            A Global Space for<br />
            <span className="text-accent">Destination Weddings</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle text-lg md:text-2xl lg:text-3xl font-light mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" 
             style={{ animationDelay: '0.4s' }}>
            Connecting brides, venues and industry experts through<br className="hidden md:block" />
            curated experiences, education and inspiration
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/destination-wedding-guide" 
              className="group relative px-12 py-5 bg-accent text-primary font-semibold hover:bg-white transition-all duration-300 uppercase tracking-[0.2em] text-sm overflow-hidden"
            >
              <span className="relative z-10">Explore the Guide</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link 
              to="/luxury-wedding-venues-beach-destination" 
              className="group relative px-12 py-5 border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-[0.2em] text-sm backdrop-blur-sm"
            >
              <span className="relative z-10">Discover Venues</span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem in the Wedding Industry */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">The Problem</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Couples want something different, but lack clarity, guidance, and realistic expectations around budgets, venues, and experiences.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Meanwhile, incredible venues globally struggle to access the right clients.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            The wedding industry is fragmented. Information is scattered. Expectations are misaligned. And the gap between vision and reality leaves couples overwhelmed and venues underutilized.
          </p>
        </div>
      </section>

      {/* Cinematic Image Break */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/home-ceremony.png"
          alt="Luxury outdoor destination wedding ceremony setup - rows of chairs overlooking the ocean"
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
          <div className="text-white text-center w-full pb-12 px-4">
            <p className="text-xl md:text-2xl font-serif italic text-gray-200 max-w-3xl mx-auto">
              "A destination wedding isn't a product you buy. It's an experience you create."
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Wedding Circle Different */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">What Makes Wedding Circle Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-white rounded-sm hover-lift">
              <Heart className="h-14 w-14 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">Curation, Not Listings</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't list every venue. We curate the right ones. Every venue, planner, and experience is personally vetted and aligned with our vision of excellence.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-sm hover-lift">
              <Award className="h-14 w-14 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">Experience, Not Theory</h3>
              <p className="text-gray-600 leading-relaxed">
                Built on years of hands-on expertise across weddings, fashion, and event production. We share real-world insight, not generic advice.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-sm hover-lift">
              <Users className="h-14 w-14 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-serif mb-4">Connection, Not Transactions</h3>
              <p className="text-gray-600 leading-relaxed">
                We build relationships across the entire ecosystem—brides, venues, planners, and industry professionals—creating a true community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who the Wedding Circle Is For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Who the Wedding Circle Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-4">For Brides</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Couples seeking clarity, guidance, and access to curated venues that match their vision and budget.
              </p>
              <Link to="/destination-wedding-guide" className="text-accent hover:text-primary font-medium inline-flex items-center">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-4">For Venues</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Unique venues looking to connect with discerning couples and expand their reach in the global wedding market.
              </p>
              <Link to="/for-venues" className="text-accent hover:text-primary font-medium inline-flex items-center">
                Join the Circle <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-4">For Industry Professionals</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Planners, photographers, and brands seeking collaboration and connection within a curated community.
              </p>
              <Link to="/contact" className="text-accent hover:text-primary font-medium inline-flex items-center">
                Connect With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Weddings as Experiences */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-primary to-gray-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Experiences, Not Packages</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            A destination wedding isn't a product you buy. It's an experience you create.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Wedding Circle exists to help you understand what's possible, set realistic expectations, and connect with the right venues and professionals who can bring your vision to life. We don't sell packages. We facilitate meaningful connections and provide the guidance you need to make informed decisions.
          </p>
        </div>
      </section>

      {/* Curated Venues & Global Reach */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">Curated Venues & Global Reach</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
            From beach destinations to heritage estates, we connect you with venues that match your vision, cultural requirements, and budget.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-secondary rounded-sm hover-lift">
              <MapPin className="h-10 w-10 text-accent mx-auto mb-3" />
              <h4 className="font-serif text-lg mb-2">Europe</h4>
              <p className="text-sm text-gray-600">Italy, France, Portugal, Greece</p>
            </div>
            <div className="text-center p-6 bg-secondary rounded-sm hover-lift">
              <MapPin className="h-10 w-10 text-accent mx-auto mb-3" />
              <h4 className="font-serif text-lg mb-2">Middle East</h4>
              <p className="text-sm text-gray-600">Dubai, UAE</p>
            </div>
            <div className="text-center p-6 bg-secondary rounded-sm hover-lift">
              <MapPin className="h-10 w-10 text-accent mx-auto mb-3" />
              <h4 className="font-serif text-lg mb-2">Asia</h4>
              <p className="text-sm text-gray-600">Bali, Thailand</p>
            </div>
            <div className="text-center p-6 bg-secondary rounded-sm hover-lift">
              <MapPin className="h-10 w-10 text-accent mx-auto mb-3" />
              <h4 className="font-serif text-lg mb-2">Caribbean</h4>
              <p className="text-sm text-gray-600">Emerging destinations</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/luxury-wedding-venues-beach-destination" 
              className="inline-block px-10 py-4 bg-primary text-white font-medium hover:bg-accent hover:text-primary transition-colors uppercase tracking-widest rounded-sm"
            >
              Explore Curated Venues
            </Link>
          </div>
        </div>
      </section>

      {/* How the Wedding Circle Connects People */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">How the Wedding Circle Connects People</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-2xl font-serif mb-3">Education & Guidance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Through our guides, masterclasses, and real-world insights, we help couples understand what destination weddings truly involve—budgets, logistics, and expectations.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-2xl font-serif mb-3">Curated Introductions</h3>
                <p className="text-gray-600 leading-relaxed">
                  We connect couples with venues and professionals who are the right fit—culturally, aesthetically, and practically.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-2xl font-serif mb-3">Experiential Showcases</h3>
                <p className="text-gray-600 leading-relaxed">
                  Through destination weekends, venue experiences, and styled showcases, we create opportunities for couples to truly feel a space before committing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations / Experiences */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">Featured Destinations & Experiences</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore curated venues and upcoming experiences designed to inspire and inform your destination wedding journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/dubai-wedding-packages" className="group hover-lift">
              <div className="h-72 overflow-hidden rounded-sm mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800" 
                  alt="Dubai destination wedding"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">Dubai Weddings</h3>
              <p className="text-gray-600 text-sm">Luxury meets tradition in the UAE's most iconic destination</p>
            </Link>
            <Link to="/luxury-wedding-venues-beach-destination" className="group hover-lift">
              <div className="h-72 overflow-hidden rounded-sm mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800" 
                  alt="European luxury wedding venue"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">European Elegance</h3>
              <p className="text-gray-600 text-sm">Historic châteaux, coastal villas, and vineyard estates</p>
            </Link>
            <Link to="/wedding-masterclass" className="group hover-lift">
              <div className="h-72 overflow-hidden rounded-sm mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800" 
                  alt="Wedding masterclass experience"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">Wedding Experiences</h3>
              <p className="text-gray-600 text-sm">Masterclasses, showcases, and destination discovery weekends</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Invitation to Explore the Circle (Soft CTA) */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Explore the Wedding Circle</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Whether you're a couple beginning your destination wedding journey, a venue seeking the right clients, or an industry professional looking to collaborate—we invite you to explore what Wedding Circle offers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/about" 
              className="px-10 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-primary transition-colors uppercase tracking-widest rounded-sm"
            >
              Learn Our Story
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-accent text-primary font-medium hover:bg-white transition-colors uppercase tracking-widest rounded-sm"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
