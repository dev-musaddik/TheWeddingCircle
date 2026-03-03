import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wedding Circle",
    "description": "Wedding Circle is built on years of global wedding experience, connecting brides, venues and industry professionals worldwide"
  };

  return (
    <div className="animate-fade-in">
      <SEO 
        title="About Wedding Circle | A Global Wedding Space"
        description="Wedding Circle is built on years of global wedding experience, connecting brides, venues and industry professionals worldwide."
        keywords="about wedding circle, global wedding space, wedding industry professionals, destination wedding experts"
        canonicalUrl="https://theweddingcircle.com/about"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-hero.png"
            alt="The Wedding Circle team consulting on a luxury destination wedding"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-accent"></div>
            <span className="mx-4 text-accent text-xs tracking-[0.3em] uppercase font-light">Our Story</span>
            <div className="h-px w-12 bg-accent"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">About Wedding Circle</h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Built on years of global wedding experience, connecting brides, venues and industry professionals worldwide.
          </p>
        </div>
      </section>

      {/* Why Wedding Circle Exists */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8 text-center">Why Wedding Circle Exists</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The Wedding Circle exists to realign expectations, vision, and opportunity across the entire wedding ecosystem.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We saw a fundamental problem: couples want something different, but lack clarity and guidance. Meanwhile, incredible venues globally struggle to access the right clients.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Wedding Circle bridges this gap through experience, education, and strategic curation—creating a space where the right people find each other.
          </p>
        </div>
      </section>

      {/* The Founder's Experience & Perspective */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-serif mb-6">The Founder's Experience</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Wedding Circle is built on years of hands-on experience across weddings, fashion, and event production—spanning South Asian weddings in global destinations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              This isn't theory. It's real-world insight from someone who has navigated the complexities of cultural requirements, venue logistics, and client expectations across continents.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The vision is simple: create a curated ecosystem where couples, venues, and industry professionals connect through shared values of excellence, authenticity, and experience.
            </p>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=800" 
              alt="Luxury wedding experience" 
              className="w-full h-72 object-cover rounded-sm shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800" 
              alt="Destination wedding venue" 
              className="w-full h-72 object-cover rounded-sm shadow-lg mt-8"
            />
          </div>
        </div>
      </section>

      {/* What Wedding Circle Stands For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16">What Wedding Circle Stands For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 hover-lift bg-secondary rounded-sm">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We curate only the finest venues and professionals who meet our exacting standards.
              </p>
            </div>
            <div className="text-center p-6 hover-lift bg-secondary rounded-sm">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Experience</h3>
              <p className="text-gray-600 text-sm">
                Shaped by years of hands-on expertise across weddings, fashion, and event production.
              </p>
            </div>
            <div className="text-center p-6 hover-lift bg-secondary rounded-sm">
              <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Global Vision</h3>
              <p className="text-gray-600 text-sm">
                Bridging South Asian weddings with European, Middle Eastern, and global destinations.
              </p>
            </div>
            <div className="text-center p-6 hover-lift bg-secondary rounded-sm">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Community</h3>
              <p className="text-gray-600 text-sm">
                Building authentic connections between couples, venues, and industry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network & Cultural Insight */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-4">Global Network & Cultural Insight</h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
            Wedding Circle specializes in bridging South Asian weddings with global destinations—understanding both the cultural requirements and the venue capabilities needed to deliver exceptional experiences.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-sm overflow-hidden shadow-lg">
              <img
                src="/south-asian-wedding.png"
                alt="South Asian destination wedding at a luxury European venue"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800'; }}
              />
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="text-xl font-serif mb-4 text-accent">Cultural Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  We train venues on cultural requirements, positioning, and service standards needed to host high-value international clients, especially South Asian weddings.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="text-xl font-serif mb-4 text-accent">Global Connections</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our network spans Europe, the Middle East, Asia, and beyond—connecting couples with venues that truly understand their needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision for the Wedding Industry */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-8">The Vision for the Wedding Industry</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We envision a wedding industry where couples have clarity, venues have access, and professionals have community.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Where expectations are realistic, connections are meaningful, and experiences are unforgettable.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Wedding Circle is building that future—one curated connection at a time.
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Who We Work With</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6 py-4 bg-white rounded-sm">
              <h3 className="text-xl font-serif mb-2">Discerning Couples</h3>
              <p className="text-gray-600">
                Couples who value quality over quantity, experience over packages, and authenticity over trends.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4 bg-white rounded-sm">
              <h3 className="text-xl font-serif mb-2">Unique Venues</h3>
              <p className="text-gray-600">
                Venues that offer something special—whether it's location, heritage, service, or cultural understanding.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4 bg-white rounded-sm">
              <h3 className="text-xl font-serif mb-2">Industry Professionals</h3>
              <p className="text-gray-600">
                Planners, photographers, and brands who share our commitment to excellence and authentic connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Wedding Circle Ethos */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">The Wedding Circle Ethos</h2>
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-3 text-accent">Curation Over Crowdsourcing</h3>
              <p className="text-gray-600 leading-relaxed">
                This is not a crowdsourced platform. Every venue, planner, and brand in The Circle is personally vetted and aligned with our vision of excellence.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-3 text-accent">Experience Over Listings</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just show venues. We create immersive experiences—destination weekends, bridal retreats, and styled showcases—so couples can truly feel the space before committing.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-3 text-accent">Connection Over Transactions</h3>
              <p className="text-gray-600 leading-relaxed">
                We build relationships across the entire ecosystem, creating a true community where the right people find each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Join the Circle?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether you're a couple seeking the perfect venue, a venue looking to expand your reach, or an industry professional wanting to collaborate, we'd love to hear from you.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-accent text-primary font-medium hover:bg-white transition-colors uppercase tracking-widest rounded-sm"
          >
            Connect With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
