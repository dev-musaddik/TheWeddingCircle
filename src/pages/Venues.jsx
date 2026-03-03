import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Globe, ArrowRight, CheckCircle, Building, Waves, TreePine, Wine } from 'lucide-react';
import SEO from '../components/SEO';

const Venues = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Luxury Wedding Venues | The Wedding Circle",
    "description": "Discover hand-curated luxury wedding venues worldwide. From beach destinations to historic châteaux, find your perfect wedding location with The Wedding Circle.",
    "publisher": {
      "@type": "Organization",
      "name": "The Wedding Circle"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theweddingcircle.com/" },
        { "@type": "ListItem", "position": 2, "name": "Venues", "item": "https://theweddingcircle.com/venues" }
      ]
    }
  };

  const venueCategories = [
    {
      icon: <Building className="h-10 w-10 text-accent" />,
      title: 'Luxury Venues Worldwide',
      description: 'Our curated global collection of exceptional wedding venues — from European châteaux to Caribbean resorts. Every venue personally vetted for quality, service, and cultural understanding.',
      link: '/luxury-wedding-venues-beach-destination',
      linkText: 'Browse All Venues',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c3e7?auto=format&fit=crop&q=80&w=700',
      highlights: ['12 curated venues', 'Multiple regions & styles', 'Price range indicators', 'Cultural suitability ratings']
    },
    {
      icon: <Globe className="h-10 w-10 text-accent" />,
      title: 'Dubai Wedding Packages',
      description: 'One of the world\'s most spectacular destinations for luxury destination weddings. Discover exclusive Dubai venues, packages, and everything you need for a flawless celebration.',
      link: '/dubai-wedding-packages',
      linkText: 'Explore Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=700',
      highlights: ['5-star hotel partnerships', 'South Asian wedding expertise', 'All-inclusive packages', 'Year-round sunshine']
    },
    {
      icon: <Star className="h-10 w-10 text-accent" />,
      title: 'For Venue Owners',
      description: 'Are you a venue looking to attract discerning destination wedding couples? Learn how to join the Wedding Circle collection and connect with our global community.',
      link: '/for-venues',
      linkText: 'Partner with Us',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=700',
      highlights: ['Join our curated collection', 'Reach international couples', 'Cultural training support', 'Exclusive partnership']
    }
  ];

  const venueStyles = [
    { icon: <Waves className="h-8 w-8 text-accent" />, style: 'Beach & Coastal', desc: 'Cliffside villas, beachfront resorts, and oceanfront estates with breathtaking natural beauty.', count: '4 venues' },
    { icon: <Building className="h-8 w-8 text-accent" />, style: 'Historic & Heritage', desc: 'Châteaux, palaces, and historic estates with generations of grandeur and architectural splendour.', count: '4 venues' },
    { icon: <Star className="h-8 w-8 text-accent" />, style: 'Luxury Resort', desc: 'All-inclusive five-star resorts offering world-class service, facilities, and cultural expertise.', count: '2 venues' },
    { icon: <Wine className="h-8 w-8 text-accent" />, style: 'Vineyard & Countryside', desc: 'Rolling hills, wine cellars, and rural estates for authentic, immersive celebrations.', count: '1 venue' },
    { icon: <TreePine className="h-8 w-8 text-accent" />, style: 'Tropical & Jungle', desc: 'Lush rainforests, exotic landscapes, and nature-immersed venues for adventurous couples.', count: '2 venues' },
  ];

  const regions = [
    { name: 'Europe', flag: '🇪🇺', countries: 'France, Greece, Italy, Portugal', count: '5 venues' },
    { name: 'Caribbean', flag: '🏝️', countries: 'Jamaica, Turks & Caicos, St. Lucia', count: '3 venues' },
    { name: 'Middle East', flag: '🇦🇪', countries: 'UAE (Dubai)', count: '1 venue' },
    { name: 'Asia', flag: '🌏', countries: 'Bali, Japan', count: '2 venues' },
    { name: 'Africa', flag: '🌍', countries: 'Morocco', count: '1 venue' },
  ];

  const curationSteps = [
    { step: '01', title: 'Personal Site Visits', text: 'Every venue is visited in person. We meet the teams, experience the spaces, and assess quality first-hand.' },
    { step: '02', title: 'Cultural Assessment', text: 'We confirm the venue understands South Asian and multi-cultural wedding requirements — catering, timing, ceremonies.' },
    { step: '03', title: 'Service Standards Review', text: 'Responsiveness, professionalism, and ability to deliver exceptional experiences are rigorously evaluated.' },
    { step: '04', title: 'Ongoing Relationship', text: 'We maintain active relationships with every venue, ensuring standards are upheld for every couple we connect.' }
  ];

  return (
    <div className="animate-fade-in">
      <SEO
        title="Luxury Wedding Venues Worldwide"
        description="Discover hand-curated luxury wedding venues worldwide. Beach destinations, historic châteaux, Dubai packages, and more — every venue personally vetted by The Wedding Circle."
        keywords="luxury wedding venues, destination wedding venues, beach wedding venues, historic wedding venues, Dubai wedding venues, wedding venues abroad, luxury wedding venue hire, destination wedding locations worldwide"
        canonicalUrl="https://theweddingcircle.com/venues"
        ogImage="https://theweddingcircle.com/venues-hero.png"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/venues-hero.png"
            alt="Luxury wedding venue - curated destination wedding venues worldwide"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&q=80&w=2000'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-accent"></div>
            <span className="mx-4 text-accent text-xs tracking-[0.3em] uppercase font-light">Curated Globally</span>
            <div className="h-px w-12 bg-accent"></div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
            Exceptional Venues<br />
            <span className="text-accent">Curated for You</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10">
            We don't list every venue. We connect you with the right ones — personally vetted, culturally aware, and chosen for their ability to deliver an extraordinary experience.
          </p>
          <Link
            to="/luxury-wedding-venues-beach-destination"
            className="inline-flex items-center px-10 py-4 bg-accent text-primary font-medium hover:bg-white transition-colors uppercase tracking-widest rounded-sm"
          >
            Browse Venues <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Not a Directory. A Curated Collection.</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Traditional venue directories list thousands of options and leave couples overwhelmed. We take the opposite approach — curating a small, exceptional collection of venues that we know, trust, and confidently recommend.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're dreaming of a French château, a Caribbean beach, a Dubai palace, or a Balinese jungle retreat — every venue in our collection has been personally visited and approved.
          </p>
        </div>
      </section>

      {/* Venue Categories */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">Explore Our Venues</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Three ways to discover and access our curated venue collection.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {venueCategories.map((cat, index) => (
              <div key={index} className="bg-white rounded-sm overflow-hidden shadow-sm hover-lift flex flex-col">
                <div className="h-56 overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">{cat.icon}</div>
                  <h3 className="text-2xl font-serif mb-4">{cat.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{cat.description}</p>
                  <ul className="space-y-2 mb-8">
                    {cat.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={cat.link}
                    className="inline-flex items-center text-accent font-medium border-b border-accent hover:text-primary hover:border-primary transition-colors mt-auto"
                  >
                    {cat.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Styles */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">Venue Styles</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            From dramatic coastal cliffs to lush tropical retreats, our collection spans every aesthetic.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venueStyles.map((v, index) => (
              <div key={index} className="bg-secondary p-6 rounded-sm hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  {v.icon}
                  <div>
                    <h3 className="text-lg font-serif">{v.style}</h3>
                    <span className="text-xs text-accent font-bold tracking-widest uppercase">{v.count}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
            <div className="bg-secondary p-6 rounded-sm hover-lift flex items-center justify-center">
              <Link
                to="/luxury-wedding-venues-beach-destination"
                className="text-center"
              >
                <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                <span className="text-lg font-serif block mb-1">Browse All Styles</span>
                <span className="text-accent text-sm inline-flex items-center">View Collection <ArrowRight className="ml-1 h-4 w-4" /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">Global Regions We Cover</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our curated venues span 5 regions across 4 continents.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm text-center hover-lift">
                <div className="text-4xl mb-3">{region.flag}</div>
                <h3 className="text-xl font-serif mb-1">{region.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{region.countries}</p>
                <span className="text-xs font-bold tracking-widest uppercase text-accent">{region.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curation Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">How We Curate Our Venues</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Every venue in our collection passes a rigorous, personal vetting process. We don't add venues we wouldn't recommend to our own families.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curationSteps.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 text-4xl font-serif text-accent opacity-40 leading-none">{item.step}</div>
                <div>
                  <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Find Your Perfect Venue</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            Browse our curated collection of luxury destination wedding venues, or get in touch to discuss your specific vision and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/luxury-wedding-venues-beach-destination"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-medium hover:bg-white transition-colors uppercase tracking-widest rounded-sm"
            >
              Browse All Venues <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border border-white text-white font-medium hover:bg-white hover:text-primary transition-colors uppercase tracking-widest rounded-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Venues;
