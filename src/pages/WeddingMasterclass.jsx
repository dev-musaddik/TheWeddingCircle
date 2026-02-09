import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Award, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const WeddingMasterclass = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "The Wedding Circle Wedding Masterclass",
    "description": "The Wedding Circle Masterclass shares real-world insight, experience and guidance on organising destination weddings and events",
    "organizer": {
      "@type": "Organization",
      "name": "Wedding Circle"
    }
  };

  return (
    <div className="animate-fade-in">
      <SEO 
        title="Wedding Masterclass & Experiences | Wedding Circle"
        description="The Wedding Circle Masterclass shares real-world insight, experience and guidance on organising destination weddings and events."
        keywords="wedding masterclass, wedding planning education, destination wedding planning education, luxury wedding planning guidance, wedding planning course"
        canonicalUrl="https://theweddingcircle.com/wedding-masterclass"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary to-black text-white py-32 px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-block px-6 py-2 bg-accent text-primary rounded-full text-sm font-bold mb-6">
            EXPERIENTIAL LEARNING
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">The Wedding Circle Wedding Masterclass</h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Real-world insight, experience and guidance on organising destination weddings
          </p>
        </div>
      </section>

      {/* What the Wedding Circle Experience Is */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">What the Wedding Circle Experience Is</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The Wedding Circle Masterclass isn't a traditional course. It's an experiential learning journey designed to give you real-world insight into destination wedding planning.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We don't teach theory. We share experience—what actually works, what couples get wrong, and how to navigate the complexities of planning a wedding abroad.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            This is for couples who want clarity, confidence, and access to the right people and places.
          </p>
        </div>
      </section>

      {/* Learning Through Real Experiences (not theory) */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Learning Through Real Experiences (Not Theory)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-sm">
              <Award className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Real-World Insight</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from years of hands-on experience across weddings, fashion, and event production—not generic advice from someone who's never done it.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <Users className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Case Studies & Examples</h3>
              <p className="text-gray-600 leading-relaxed">
                Understand what worked, what didn't, and why—through real weddings, real budgets, and real challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <Star className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Practical Frameworks</h3>
              <p className="text-gray-600 leading-relaxed">
                Walk away with tools you can actually use—budget templates, vendor questions, timeline frameworks, and decision-making guides.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <Calendar className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Live Q&A Sessions</h3>
              <p className="text-gray-600 leading-relaxed">
                Ask your specific questions and get personalized guidance based on your vision, budget, and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Showcases & Venue Experiences */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Wedding Showcases & Venue Experiences</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Beyond the masterclass, Wedding Circle creates opportunities to experience venues firsthand—through styled showcases, venue tours, and curated events.
          </p>
          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-3">Styled Venue Showcases</h3>
              <p className="text-gray-600 leading-relaxed">
                See venues brought to life with décor, styling, and setup—so you can visualize your wedding before committing.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-3">Exclusive Venue Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Private tours of curated venues with the opportunity to meet venue teams, ask questions, and understand capabilities.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-3">Vendor Introductions</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with trusted planners, photographers, caterers, and vendors who understand South Asian weddings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Discovery Weekends */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Destination Discovery Weekends</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Wedding Circle organizes destination discovery weekends—immersive experiences where couples visit multiple venues, meet vendors, and experience destinations firsthand.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Think of it as a curated venue tour combined with education, networking, and inspiration.
          </p>
          <div className="bg-white p-8 rounded-sm text-left">
            <h3 className="text-2xl font-serif mb-6 text-center">What's Included</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Private venue tours at 3-5 curated locations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Meet venue teams and ask detailed questions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Vendor introductions (planners, photographers, caterers)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Group sessions on budgeting, logistics, and planning</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Networking with other couples and industry professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Curated dining and cultural experiences</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Who This Is For</h2>
          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Couples Planning Destination Weddings</h3>
              <p className="text-gray-600 leading-relaxed">
                You want clarity on budgets, timelines, and logistics. You want to avoid common mistakes and make informed decisions.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Couples Seeking Venue Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                You're overwhelmed by options and want curated recommendations that match your vision, budget, and cultural requirements.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Couples Who Value Experience Over Packages</h3>
              <p className="text-gray-600 leading-relaxed">
                You don't want a cookie-cutter package. You want to understand the landscape and create something meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Gain From Being Part of the Circle */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">What You Gain From Being Part of the Circle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Clarity & Confidence</h3>
              <p className="text-gray-600 leading-relaxed">
                Understand what's realistic, what to expect, and how to navigate the process.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Access to Curated Venues</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with venues that match your vision and understand your cultural needs.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Trusted Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to vetted planners, vendors, and professionals who deliver excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">How to Get Involved</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The Wedding Circle Masterclass and experiences are invitation-based and limited in enrollment.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            If you're serious about planning a destination wedding and want real guidance, reach out to express your interest.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-10 py-4 bg-primary text-white font-medium hover:bg-accent hover:text-primary transition-colors uppercase tracking-widest rounded-sm"
          >
            Express Interest <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Upcoming Experiences / Invitations */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Upcoming Experiences</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            Wedding Circle regularly hosts masterclass sessions, venue showcases, and destination discovery weekends.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            Join our community to receive invitations to upcoming experiences and stay connected with the Wedding Circle ecosystem.
          </p>
          <div className="bg-white bg-opacity-10 p-8 rounded-sm">
            <p className="text-lg mb-6">Interested in being notified about upcoming events?</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-10 py-4 bg-accent text-primary font-medium hover:bg-white transition-colors uppercase tracking-widest rounded-sm"
            >
              Stay Connected <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingMasterclass;
