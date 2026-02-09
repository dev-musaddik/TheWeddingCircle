import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Filter, ArrowRight, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const LuxuryWeddingVenues = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('all');

  const venues = [
    {
      id: 1,
      name: "Château de Versailles Gardens",
      location: "France",
      region: "europe",
      style: "historic",
      capacity: "150-300",
      priceRange: "$$$$",
      highlights: ["UNESCO Heritage", "Royal Gardens", "Multi-Day Events"],
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
      description: "Historic French château with manicured gardens and regal interiors perfect for grand celebrations"
    },
    {
      id: 2,
      name: "Santorini Cliffside Villa",
      location: "Greece",
      region: "europe",
      style: "beach",
      capacity: "50-100",
      priceRange: "$$$",
      highlights: ["Sunset Views", "Intimate Setting", "Caldera Views"],
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800",
      description: "Stunning Aegean views with whitewashed architecture and unforgettable sunset ceremonies"
    },
    {
      id: 3,
      name: "Dubai Palm Resort",
      location: "UAE",
      region: "middle-east",
      style: "luxury-resort",
      capacity: "200-500",
      priceRange: "$$$$",
      highlights: ["South Asian Expertise", "All-Inclusive", "Beach Access"],
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
      description: "Five-star beachfront resort with world-class facilities and extensive South Asian wedding experience"
    },
    {
      id: 4,
      name: "Tuscan Vineyard Estate",
      location: "Italy",
      region: "europe",
      style: "vineyard",
      capacity: "80-150",
      priceRange: "$$$",
      highlights: ["Wine Tasting", "Countryside Views", "Authentic Cuisine"],
      image: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?auto=format&fit=crop&q=80&w=800",
      description: "Rolling hills, wine cellars, and authentic Italian countryside charm with exceptional hospitality"
    },
    {
      id: 5,
      name: "Bali Jungle Retreat",
      location: "Indonesia",
      region: "asia",
      style: "tropical",
      capacity: "30-80",
      priceRange: "$$",
      highlights: ["Jungle Setting", "Cultural Ceremonies", "Wellness Spa"],
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
      description: "Lush tropical setting with traditional Balinese architecture and authentic cultural ceremonies"
    },
    {
      id: 6,
      name: "Portuguese Coastal Palace",
      location: "Portugal",
      region: "europe",
      style: "historic",
      capacity: "100-200",
      priceRange: "$$$",
      highlights: ["Ocean Views", "Historic Architecture", "Exclusive Use"],
      image: "https://images.unsplash.com/photo-1519167758481-83f29da8c3e7?auto=format&fit=crop&q=80&w=800",
      description: "Historic palace overlooking the Atlantic with European elegance and modern amenities"
    },
    {
      id: 7,
      name: "Jamaica Beachfront Villa",
      location: "Jamaica",
      region: "caribbean",
      style: "beach",
      capacity: "40-80",
      priceRange: "$$",
      highlights: ["Private Beach", "Tropical Paradise", "Reggae Vibes"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
      description: "Private beachfront villa with turquoise waters, white sand, and authentic Caribbean hospitality"
    },
    {
      id: 8,
      name: "Turks & Caicos Luxury Resort",
      location: "Turks & Caicos",
      region: "caribbean",
      style: "luxury-resort",
      capacity: "100-250",
      priceRange: "$$$$",
      highlights: ["World-Class Service", "Crystal Waters", "All-Inclusive"],
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
      description: "Ultra-luxury Caribbean resort with pristine beaches and exceptional service standards"
    },
    {
      id: 9,
      name: "Marrakech Riad Palace",
      location: "Morocco",
      region: "africa",
      style: "historic",
      capacity: "60-120",
      priceRange: "$$",
      highlights: ["Moroccan Architecture", "Rooftop Terrace", "Cultural Immersion"],
      image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&q=80&w=800",
      description: "Traditional Moroccan riad with stunning tilework, courtyards, and authentic cultural experiences"
    },
    {
      id: 10,
      name: "Amalfi Coast Cliffside Hotel",
      location: "Italy",
      region: "europe",
      style: "beach",
      capacity: "70-140",
      priceRange: "$$$$",
      highlights: ["Mediterranean Views", "Michelin Dining", "Coastal Elegance"],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      description: "Dramatic cliffside setting with breathtaking Mediterranean views and world-class Italian cuisine"
    },
    {
      id: 11,
      name: "Kyoto Temple Garden",
      location: "Japan",
      region: "asia",
      style: "historic",
      capacity: "30-60",
      priceRange: "$$$",
      highlights: ["Zen Gardens", "Traditional Ceremonies", "Cultural Heritage"],
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=800",
      description: "Serene Japanese temple garden with traditional architecture and authentic cultural ceremonies"
    },
    {
      id: 12,
      name: "St. Lucia Rainforest Resort",
      location: "St. Lucia",
      region: "caribbean",
      style: "tropical",
      capacity: "50-100",
      priceRange: "$$$",
      highlights: ["Piton Views", "Rainforest Setting", "Luxury Spa"],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
      description: "Spectacular rainforest resort with iconic Piton mountain views and Caribbean luxury"
    }
  ];

  const filteredVenues = venues.filter(venue => {
    const regionMatch = selectedRegion === 'all' || venue.region === selectedRegion;
    const styleMatch = selectedStyle === 'all' || venue.style === selectedStyle;
    return regionMatch && styleMatch;
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Luxury Wedding Venues Worldwide",
    "description": "Discover luxury wedding venues worldwide, from beach destination weddings to iconic heritage locations curated by Wedding Circle",
    "numberOfItems": venues.length
  };

  return (
    <div className="animate-fade-in">
      <SEO 
        title="Luxury Wedding Venues Worldwide | Wedding Circle"
        description="Discover luxury wedding venues worldwide, from beach destination weddings to iconic heritage locations curated by Wedding Circle."
        keywords="luxury wedding venues, destination wedding venues, beach destination wedding, unique wedding venues abroad, luxury wedding venues europe, destination wedding locations"
        canonicalUrl="https://theweddingcircle.com/luxury-wedding-venues-beach-destination"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury destination wedding venue curated by Wedding Circle" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 drop-shadow-lg">Luxury Wedding Venues for Destination Weddings</h1>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-md">
            Hand-picked destinations that match your vision and exceed your expectations
          </p>
        </div>
      </section>

      {/* Discover Luxury Wedding Venues Worldwide */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Discover Luxury Wedding Venues Worldwide</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Wedding Circle curates a collection of exceptional venues across the globe—each personally vetted for quality, service, and cultural understanding.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We don't list every venue. We connect you with the right ones.
          </p>
        </div>
      </section>

      {/* What Makes a Venue Right for Your Wedding */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">What Makes a Venue Right for Your Wedding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-sm">
              <Star className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Aesthetic & Vision Alignment</h3>
              <p className="text-gray-600 leading-relaxed">
                The venue should reflect your style—whether that's historic elegance, modern minimalism, or tropical romance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <Globe className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Cultural Understanding</h3>
              <p className="text-gray-600 leading-relaxed">
                For South Asian weddings, the venue must understand multi-day celebrations, specific catering needs, and ceremony requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Location & Accessibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Consider guest travel, airport proximity, and local accommodation options. Convenience matters.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <Star className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Service Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Exceptional service, experienced coordinators, and attention to detail separate good venues from great ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beach, Heritage, Urban & Resort Venues */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Venue Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-3">Beach Destinations</h3>
              <p className="text-gray-600 leading-relaxed">
                Coastal villas, beachfront resorts, and cliffside venues offering stunning ocean views and natural beauty.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-3">Heritage & Historic</h3>
              <p className="text-gray-600 leading-relaxed">
                Châteaux, palaces, and historic estates with architectural grandeur and timeless elegance.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-3">Urban Luxury</h3>
              <p className="text-gray-600 leading-relaxed">
                Five-star hotels, rooftop venues, and contemporary spaces in iconic cities like Dubai, Paris, and Barcelona.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-3">Resort & Vineyard</h3>
              <p className="text-gray-600 leading-relaxed">
                All-inclusive resorts, vineyard estates, and countryside retreats offering immersive experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Suitability for Destination Weddings */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Cultural Suitability for Destination Weddings</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Not all venues understand the requirements of South Asian weddings—multi-day celebrations, specific catering, ceremony logistics, and timing.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Wedding Circle specializes in connecting couples with venues that either have experience or are willing to learn and adapt.
          </p>
          <div className="bg-white p-8 rounded-sm">
            <h3 className="text-xl font-serif mb-4 text-accent">What We Look For</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Experience hosting South Asian or multi-cultural weddings</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Flexibility with timing, décor, and ceremony requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Catering teams capable of authentic cuisine</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Understanding of cultural sensitivities and traditions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Emerging & Undiscovered Venues */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Emerging & Undiscovered Venues</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Beyond the well-known destinations, Wedding Circle uncovers hidden gems—venues that offer something unique without the crowds or premium pricing of over-saturated markets.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Portugal, Albania, Morocco, and lesser-known regions of Italy and Greece offer exceptional value and authenticity.
          </p>
        </div>
      </section>

      {/* Filtering & Featured Locations */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Featured Locations & Regions</h2>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-accent" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              >
                <option value="all">All Regions</option>
                <option value="europe">Europe</option>
                <option value="middle-east">Middle East</option>
                <option value="asia">Asia</option>
                <option value="caribbean">Caribbean</option>
                <option value="africa">Africa</option>
              </select>
            </div>
            <div>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              >
                <option value="all">All Styles</option>
                <option value="beach">Beach</option>
                <option value="historic">Historic</option>
                <option value="luxury-resort">Luxury Resort</option>
                <option value="vineyard">Vineyard</option>
                <option value="tropical">Tropical</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-bold text-accent">{filteredVenues.length}</span> {filteredVenues.length === 1 ? 'venue' : 'venues'}
            </p>
          </div>

          {/* Venue Grid */}
          {filteredVenues.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVenues.map(venue => (
                <div key={venue.id} className="bg-white rounded-sm overflow-hidden hover-lift shadow-sm">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={venue.image} 
                      alt={venue.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                      {venue.priceRange}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-accent text-white px-3 py-1 rounded-full uppercase tracking-wide">Curated</span>
                      <span className="text-sm text-gray-500">{venue.capacity} guests</span>
                    </div>
                    <h3 className="text-xl font-serif mb-2 hover:text-accent transition-colors">{venue.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-accent" />
                      {venue.location}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{venue.description}</p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {venue.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-secondary text-gray-700 px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <Link 
                      to="/contact" 
                      className="text-accent hover:text-primary font-medium text-sm inline-flex items-center border-b border-accent hover:border-primary transition-colors"
                    >
                      Enquire Now <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">No venues match your current filters</p>
              <button
                onClick={() => {
                  setSelectedRegion('all');
                  setSelectedStyle('all');
                }}
                className="text-accent hover:text-primary font-medium underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How Wedding Circle Curates Venues */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8 text-center">How Wedding Circle Curates Venues</h2>
          <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
            Every venue in our collection is personally vetted. We don't list venues we haven't experienced or wouldn't recommend to our own family.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-serif mb-2">Personal Site Visits</h3>
                <p className="text-gray-600 leading-relaxed">
                  We visit every venue, meet the teams, and assess service quality, logistics, and cultural understanding.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-serif mb-2">Cultural Compatibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  We confirm the venue can accommodate South Asian weddings—catering, timing, ceremonies, and multi-day events.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-serif mb-2">Service Standards</h3>
                <p className="text-gray-600 leading-relaxed">
                  We assess responsiveness, professionalism, and the venue's ability to deliver on promises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Experiences & Showcases */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Venue Experiences & Showcases</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            We don't just show you venues online. We create opportunities for you to experience them—through destination weekends, styled showcases, and curated visits.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            Feel the space. Meet the team. Understand the possibilities. Then decide.
          </p>
          <Link 
            to="/wedding-masterclass" 
            className="inline-flex items-center px-10 py-4 bg-accent text-primary font-medium hover:bg-white transition-colors uppercase tracking-widest rounded-sm"
          >
            Explore Experiences <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LuxuryWeddingVenues;
