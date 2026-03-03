import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, DollarSign, Globe, ArrowRight, CheckCircle, Calendar, Users, MapPin, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const Planning = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Destination Wedding Planning | The Wedding Circle",
    "description": "Complete destination wedding planning hub. Guides, costs, budgets, and expert advice for planning your perfect wedding abroad.",
    "publisher": {
      "@type": "Organization",
      "name": "The Wedding Circle"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theweddingcircle.com/" },
        { "@type": "ListItem", "position": 2, "name": "Planning", "item": "https://theweddingcircle.com/planning" }
      ]
    }
  };

  const guides = [
    {
      icon: <BookOpen className="h-10 w-10 text-accent" />,
      title: 'Destination Wedding Guide',
      description: 'Everything you need to know before you begin — from choosing a country to understanding what a destination wedding really involves.',
      link: '/destination-wedding-guide',
      linkText: 'Read the Guide',
      highlights: ['What is a destination wedding?', 'Types of celebrations', 'Common pitfalls to avoid', 'How to start planning']
    },
    {
      icon: <DollarSign className="h-10 w-10 text-accent" />,
      title: 'Wedding Cost & Budget',
      description: 'Realistic budget breakdowns by region and wedding size. Understand where the money goes and how to plan financially.',
      link: '/destination-wedding-cost-abroad',
      linkText: 'Explore Budgets',
      highlights: ['Regional cost breakdowns', 'Budget planning tools', 'Hidden costs to know', 'Cost-saving strategies']
    },
    {
      icon: <Globe className="h-10 w-10 text-accent" />,
      title: 'Organising a Wedding Abroad',
      description: 'Step-by-step guidance on the logistics of planning your wedding in a foreign country — the timeline, vendors, and legalities.',
      link: '/organising-a-wedding-abroad',
      linkText: 'Learn How It Works',
      highlights: ['18-month timeline', 'Legal requirements', 'Finding local vendors', 'Guest coordination']
    }
  ];

  const steps = [
    { number: '01', title: 'Define Your Vision', text: 'Start with the feeling you want to create. Intimate or grand? Cultural or contemporary? Beach or heritage?' },
    { number: '02', title: 'Set a Realistic Budget', text: 'Understand full costs — venue, travel, accommodation, extended events. Be honest about what you can invest.' },
    { number: '03', title: 'Choose Your Destination', text: 'Match the location to your vision. Consider guest travel, legal requirements, and cultural alignment.' },
    { number: '04', title: 'Curate Your Vendor Team', text: 'Find specialists who understand destination weddings — coordinators, photographers, and caterers who travel.' },
    { number: '05', title: 'Plan Guest Experience', text: 'Your guests are traveling for you. Make their journey seamless with clear communication and curated activities.' },
    { number: '06', title: 'Enjoy the Process', text: 'Planning a destination wedding should feel exciting. Lean into the adventure and trust your preparation.' }
  ];

  return (
    <div className="animate-fade-in">
      <SEO
        title="Destination Wedding Planning Hub"
        description="Your complete guide to planning a destination wedding. Expert advice on budgets, timelines, venues, and logistics for couples dreaming of a wedding abroad."
        keywords="destination wedding planning, how to plan a destination wedding, destination wedding guide, wedding abroad planning, destination wedding cost, organising wedding abroad, luxury destination wedding planning"
        canonicalUrl="https://theweddingcircle.com/planning"
        ogImage="https://theweddingcircle.com/planning-hero.png"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/planning-hero.png"
            alt="Destination wedding planning - couple planning their dream wedding abroad"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=2000'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-accent"></div>
            <span className="mx-4 text-accent text-xs tracking-[0.3em] uppercase font-light">Wedding Circle</span>
            <div className="h-px w-12 bg-accent"></div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
            Plan Your Dream<br />
            <span className="text-accent">Destination Wedding</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10">
            Expert guidance, realistic budgets, and step-by-step planning for couples who want more than just a venue — they want an experience.
          </p>
          <Link
            to="/destination-wedding-guide"
            className="inline-flex items-center px-10 py-4 bg-accent text-primary font-medium hover:bg-white transition-colors uppercase tracking-widest rounded-sm"
          >
            Start Planning <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Planning a Destination Wedding is Different</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            It's not just about choosing a beautiful location. A destination wedding requires careful coordination across timezones, legal systems, cultural considerations, and guest logistics — all while creating something truly unforgettable.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Wedding Circle gives you the knowledge, resources, and curated connections to navigate every stage of planning with confidence.
          </p>
        </div>
      </section>

      {/* Planning Guides */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">Our Planning Guides</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Three comprehensive resources covering everything from initial vision to wedding-day execution.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-sm shadow-sm p-8 flex flex-col hover-lift">
                <div className="mb-6">{guide.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{guide.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{guide.description}</p>
                <ul className="space-y-2 mb-8">
                  {guide.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={guide.link}
                  className="inline-flex items-center text-accent font-medium border-b border-accent hover:text-primary hover:border-primary transition-colors mt-auto"
                >
                  {guide.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Steps */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">The Planning Journey</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            A high-level roadmap for planning your destination wedding from vision to celebration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 text-4xl font-serif text-accent opacity-40 leading-none">{step.number}</div>
                <div>
                  <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Couples Work with Wedding Circle */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Why Couples Plan with Wedding Circle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="h-8 w-8 text-accent" />, title: 'Curated Knowledge', text: 'Real-world guidance built from direct experience with destination weddings globally.' },
              { icon: <MapPin className="h-8 w-8 text-accent" />, title: 'Vetted Connections', text: 'Access to venues and vendors we personally know and trust across every region.' },
              { icon: <Users className="h-8 w-8 text-accent" />, title: 'Cultural Expertise', text: 'Specialists in South Asian and multi-cultural destination celebrations.' },
              { icon: <Calendar className="h-8 w-8 text-accent" />, title: 'End-to-End Support', text: 'From initial inspiration to wedding day, we\'re with you through every decision.' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Ready to Begin?</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            Start with our destination wedding guide — the most comprehensive free resource for couples planning a wedding abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/destination-wedding-guide"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-medium hover:bg-white transition-colors uppercase tracking-widest rounded-sm"
            >
              Read the Full Guide <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border border-white text-white font-medium hover:bg-white hover:text-primary transition-colors uppercase tracking-widest rounded-sm"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planning;
