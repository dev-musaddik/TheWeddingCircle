import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Globe, Users, Building2, Palmtree, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const DubaiWeddingPackages = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dubai Destination Wedding Experiences",
    "description": "Explore Dubai wedding packages featuring luxury venues, cultural expertise and curated destination wedding experiences",
    "provider": {
      "@type": "Organization",
      "name": "Wedding Circle"
    }
  };

  return (
    <div className="animate-fade-in">
      <SEO 
        title="Dubai Wedding Packages | Wedding Circle"
        description="Explore Dubai wedding packages featuring luxury venues, cultural expertise and curated destination wedding experiences."
        keywords="dubai wedding packages, luxury wedding dubai, destination wedding dubai, dubai wedding planner, dubai wedding services, wedding in dubai cost"
        canonicalUrl="https://theweddingcircle.com/dubai-wedding-packages"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury destination wedding experience in Dubai" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white animate-slide-up">
          <h1 className="text-6xl md:text-7xl font-serif mb-6 drop-shadow-lg">Dubai Destination Wedding Experiences</h1>
          <p className="text-2xl md:text-3xl text-gray-100 mb-8 leading-relaxed drop-shadow-md">
            Where modern luxury meets timeless tradition
          </p>
        </div>
      </section>

      {/* Why Dubai for Destination Weddings */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Why Dubai for Destination Weddings</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Dubai has emerged as one of the world's premier destination wedding locations—combining world-class infrastructure, cultural understanding, and unmatched luxury.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            For South Asian weddings specifically, Dubai offers something unique: venues and vendors who understand the requirements, scale, and cultural nuances of multi-day celebrations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-6 rounded-sm">
              <Globe className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Global Accessibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Dubai is a global hub with direct flights from every major city. Guests from UK, India, US, and beyond can reach it easily.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-sm">
              <Building2 className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">World-Class Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                Five-star hotels, state-of-the-art venues, and professional event services at the highest international standards.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-sm">
              <Users className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Cultural Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Dubai's wedding industry understands South Asian celebrations—from catering to timing to ceremony logistics.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-sm">
              <Star className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Year-Round Destination</h3>
              <p className="text-gray-600 leading-relaxed">
                Perfect weather from October to April makes Dubai ideal for winter weddings when Europe is cold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Styles That Work Best in Dubai */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Wedding Styles That Work Best in Dubai</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-sm">
              <h3 className="text-2xl font-serif mb-4 text-accent">Grand South Asian Weddings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dubai excels at large-scale, multi-day South Asian celebrations. Venues understand the requirements for Mehndi, Sangeet, ceremony, and reception events.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Guest Count:</strong> 200-500+ | <strong>Duration:</strong> 3-5 days
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <h3 className="text-2xl font-serif mb-4 text-accent">Luxury Beach Weddings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beachfront resorts on the Palm or Jumeirah Beach offer stunning ocean views with five-star service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Guest Count:</strong> 80-200 | <strong>Duration:</strong> 2-3 days
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <h3 className="text-2xl font-serif mb-4 text-accent">Contemporary Urban Weddings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Rooftop venues, modern hotels, and architectural spaces in the heart of Dubai's skyline.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Guest Count:</strong> 100-250 | <strong>Duration:</strong> 2-3 days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural & Legal Considerations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Cultural & Legal Considerations</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif mb-3">Legal Requirements</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Non-Muslim couples can legally marry in Dubai with proper documentation (passports, birth certificates, divorce decrees if applicable).
              </p>
              <p className="text-gray-600 leading-relaxed">
                Many couples opt for a legal ceremony at home and a symbolic celebration in Dubai.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">Cultural Sensitivity</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dubai is cosmopolitan and welcoming, but cultural respect is important. Venues understand this balance and help navigate it.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Alcohol licensing, dress codes, and public displays of affection are areas to be mindful of.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">South Asian Wedding Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Dubai's wedding industry has extensive experience with South Asian celebrations—understanding timing, catering, décor, and ceremony requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Venues in Dubai */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Types of Venues in Dubai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-sm text-center hover-lift">
              <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Iconic Hotels</h3>
              <p className="text-gray-600 text-sm">
                Burj Al Arab, Atlantis, Armani Hotel—world-renowned luxury
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm text-center hover-lift">
              <Palmtree className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Beachfront Resorts</h3>
              <p className="text-gray-600 text-sm">
                Palm Jumeirah, Jumeirah Beach—ocean views and luxury service
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm text-center hover-lift">
              <Star className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Desert Palaces</h3>
              <p className="text-gray-600 text-sm">
                Al Maha, Bab Al Shams—Arabian heritage meets modern luxury
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm text-center hover-lift">
              <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Contemporary Spaces</h3>
              <p className="text-gray-600 text-sm">
                Rooftop venues, modern event spaces, architectural landmarks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Expectations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Budget Expectations</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Dubai weddings range from premium to ultra-luxury. Here's what to expect:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-sm">
              <h3 className="text-2xl font-serif mb-4">Intimate Celebration</h3>
              <p className="text-gray-600 mb-4">50-80 guests | 2 days</p>
              <p className="text-3xl font-serif text-accent mb-4">$60,000 - $100,000</p>
              <p className="text-sm text-gray-600">Quality venues with good service</p>
            </div>
            <div className="bg-secondary p-8 rounded-sm border-2 border-accent">
              <h3 className="text-2xl font-serif mb-4">Luxury Wedding</h3>
              <p className="text-gray-600 mb-4">150-250 guests | 3-4 days</p>
              <p className="text-3xl font-serif text-accent mb-4">$150,000 - $300,000</p>
              <p className="text-sm text-gray-600">Five-star venues, premium service</p>
            </div>
            <div className="bg-secondary p-8 rounded-sm">
              <h3 className="text-2xl font-serif mb-4">Grand Celebration</h3>
              <p className="text-gray-600 mb-4">300-500+ guests | 4-5 days</p>
              <p className="text-3xl font-serif text-accent mb-4">$400,000+</p>
              <p className="text-sm text-gray-600">Iconic venues, bespoke everything</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Experience & Logistics */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Guest Experience & Logistics</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Dubai makes guest logistics easier than most destinations—world-class infrastructure, easy visa access, and abundant accommodation options.
          </p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Visa & Travel</h3>
              <p className="text-gray-600 leading-relaxed">
                Most nationalities get visa-on-arrival or e-visa. Direct flights from every major city make travel convenient.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Accommodation</h3>
              <p className="text-gray-600 leading-relaxed">
                From budget hotels to ultra-luxury resorts, Dubai has options for every guest. Negotiate group rates for your wedding block.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Activities & Entertainment</h3>
              <p className="text-gray-600 leading-relaxed">
                Desert safaris, yacht experiences, shopping, and world-class dining give guests plenty to do beyond the wedding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Wedding Experiences by Wedding Circle */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Dubai Wedding Experiences by Wedding Circle</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Wedding Circle specializes in Dubai destination weddings—leveraging our network, cultural expertise, and venue relationships to create exceptional experiences.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We don't sell packages. We facilitate connections, provide guidance, and help you navigate the Dubai wedding landscape with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <Star className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Venue Curation</h3>
              <p className="text-gray-600 leading-relaxed">
                We connect you with venues that match your vision, budget, and cultural requirements.
              </p>
            </div>
            <div>
              <Users className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Vendor Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to trusted planners, caterers, and vendors who understand South Asian weddings.
              </p>
            </div>
            <div>
              <Globe className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">On-Ground Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Guidance on logistics, cultural considerations, and realistic budget expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connecting Brides & Venues in Dubai */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Connecting Brides & Venues in Dubai</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            Wedding Circle exists to bridge the gap between couples seeking exceptional Dubai weddings and venues that can deliver them.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            Whether you're planning an intimate celebration or a grand multi-day event, we help you find the right venue, set realistic expectations, and navigate the process with confidence.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-10 py-4 bg-accent text-primary font-medium hover:bg-white transition-colors uppercase tracking-widest rounded-sm"
          >
            Discuss Your Dubai Wedding <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DubaiWeddingPackages;
