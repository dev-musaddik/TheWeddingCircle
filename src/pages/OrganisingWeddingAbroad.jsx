import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, Users, Plane, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const OrganisingWeddingAbroad = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Organise a Wedding Abroad",
    "description": "Learn how to organise a wedding abroad, from timelines and logistics to working with venues and suppliers internationally.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Start Planning 12-18 Months in Advance",
        "text": "Begin your destination wedding planning early to secure venues and manage logistics"
      },
      {
        "@type": "HowToStep",
        "name": "Research Legal Requirements",
        "text": "Understand documentation and legal requirements for your chosen destination"
      },
      {
        "@type": "HowToStep",
        "name": "Coordinate with International Vendors",
        "text": "Work with venues and suppliers who understand your cultural and logistical needs"
      }
    ]
  };

  return (
    <div className="animate-fade-in">
      <SEO 
        title="Organising a Wedding Abroad | Wedding Circle"
        description="Learn how to organise a wedding abroad, from timelines and logistics to working with venues and suppliers internationally."
        keywords="organising a wedding abroad, how to organise a destination wedding, destination wedding planning, wedding abroad requirements, planning a wedding overseas"
        canonicalUrl="https://theweddingcircle.com/organising-a-wedding-abroad"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 via-primary to-gray-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">How to Organise a Wedding Abroad</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Learn how to organise a wedding abroad, from timelines and logistics to working with venues and suppliers internationally.
          </p>
        </div>
      </section>

      {/* What Organising a Wedding Abroad Really Involves */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">What Organising a Wedding Abroad Really Involves</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Organising a wedding abroad is not just "booking a venue and showing up."
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            It requires coordination across time zones, understanding legal requirements, managing international vendors, planning guest logistics, and navigating cultural differences.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            The couples who succeed are the ones who start early, ask the right questions, and work with people who understand the complexities.
          </p>
        </div>
      </section>

      {/* Timelines: When to Start and Why */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Timelines: When to Start and Why</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-sm">
              <div className="flex items-start gap-6">
                <Calendar className="h-12 w-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif mb-3">12-18 Months Before</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    This is when you should start. Premium venues book out 12-24 months in advance, especially in peak season.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Research destinations and venues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Set realistic budget</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Book venue site visits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Understand legal requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm">
              <div className="flex items-start gap-6">
                <Calendar className="h-12 w-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif mb-3">9-12 Months Before</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Confirm venue and pay deposit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Book accommodation blocks for guests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Hire wedding planner (if using one)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Send save-the-dates to guests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm">
              <div className="flex items-start gap-6">
                <Calendar className="h-12 w-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif mb-3">6-9 Months Before</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Book vendors (photographer, catering, décor)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Finalize guest list and send invitations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Start legal documentation process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm">
              <div className="flex items-start gap-6">
                <Calendar className="h-12 w-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif mb-3">3-6 Months Before</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Finalize all vendor contracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Create guest information packs (travel, accommodation, itinerary)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Plan additional events (welcome dinner, farewell brunch)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm">
              <div className="flex items-start gap-6">
                <Calendar className="h-12 w-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif mb-3">1-3 Months Before</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Confirm final guest count</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Complete all legal documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Finalize timeline and run-of-show</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Arrange final payments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Cultural Considerations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12">Legal & Cultural Considerations</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Every country has different legal requirements for marriage. Some are straightforward, others require months of paperwork.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-serif mb-3">Europe</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Requirements vary by country. France and Italy require residency periods. Portugal and Spain are more flexible.
              </p>
              <p className="text-sm text-gray-500">
                Many couples do legal ceremony at home, symbolic ceremony abroad.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-serif mb-3">Middle East (Dubai/UAE)</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Non-Muslim couples can marry in UAE with proper documentation. Requirements include passports, birth certificates, and divorce decrees (if applicable).
              </p>
              <p className="text-sm text-gray-500">
                Cultural sensitivity is essential for South Asian weddings.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-serif mb-3">Caribbean</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Generally straightforward. Most islands require 1-3 day residency before ceremony.
              </p>
              <p className="text-sm text-gray-500">
                Popular for legal + symbolic ceremonies combined.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-serif mb-3">Asia (Bali, Thailand)</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Legal marriages can be complex. Most couples opt for symbolic ceremonies with legal marriage at home.
              </p>
              <p className="text-sm text-gray-500">
                Beautiful settings, but plan for symbolic only.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-yellow-50 p-6 rounded-sm flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <p className="text-gray-700">
              <strong>Important:</strong> Legal requirements change frequently. Always verify current requirements with the venue, local authorities, or a wedding planner 3-6 months before your wedding.
            </p>
          </div>
        </div>
      </section>

      {/* Working With Venues and Suppliers Abroad */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Working With Venues and Suppliers Abroad</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Communication is Everything</h3>
              <p className="text-gray-600 leading-relaxed">
                Time zones, language barriers, and email delays can complicate planning. Use video calls, WhatsApp, and clear written agreements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Understand What's Included</h3>
              <p className="text-gray-600 leading-relaxed">
                Venue packages vary wildly. Some include everything (catering, décor, coordination). Others are just the space. Get itemized quotes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Cultural Understanding Matters</h3>
              <p className="text-gray-600 leading-relaxed">
                Not all venues understand South Asian weddings—timing, food requirements, ceremony logistics. Confirm they have experience or are willing to learn.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Visit Before You Book</h3>
              <p className="text-gray-600 leading-relaxed">
                Photos lie. Service quality, venue feel, and logistical realities only become clear in person. Budget for a site visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Experience & Travel Planning */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Guest Experience & Travel Planning</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Your guests are traveling for you. Make their experience seamless and enjoyable.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Plane className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif mb-2">Provide Clear Information Early</h3>
                <p className="text-gray-600 leading-relaxed">
                  Send detailed guest packs with travel options, accommodation recommendations, visa requirements, and itinerary.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif mb-2">Negotiate Group Rates</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work with hotels to secure room blocks at discounted rates. Guests appreciate the savings and convenience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif mb-2">Plan Additional Events</h3>
                <p className="text-gray-600 leading-relaxed">
                  Welcome dinners, group activities, and farewell brunches make the trip feel like a celebration, not just a wedding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges (and how they're solved) */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-12">Common Challenges (and How They're Solved)</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3 text-red-600">Challenge: Language Barriers</h3>
              <p className="text-gray-600 mb-3">Miscommunication with vendors can lead to wrong orders, missed details, and frustration.</p>
              <p className="text-gray-700"><strong>Solution:</strong> Hire a bilingual planner or work with venues that have English-speaking coordinators.</p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3 text-red-600">Challenge: Guest Drop-Outs</h3>
              <p className="text-gray-600 mb-3">Expect 30-50% of invited guests to decline due to travel, cost, or timing.</p>
              <p className="text-gray-700"><strong>Solution:</strong> Build flexibility into your guest count and budget. Don't overcommit early.</p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3 text-red-600">Challenge: Weather Contingencies</h3>
              <p className="text-gray-600 mb-3">Outdoor venues are beautiful but risky without backup plans.</p>
              <p className="text-gray-700"><strong>Solution:</strong> Confirm indoor alternatives and weather policies with your venue upfront.</p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3 text-red-600">Challenge: Hidden Costs</h3>
              <p className="text-gray-600 mb-3">Service charges, taxes, and vendor fees add up quickly.</p>
              <p className="text-gray-700"><strong>Solution:</strong> Request itemized quotes and ask about ALL potential fees before signing contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Many Weddings Fail Without Guidance */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Why Many Weddings Fail Without Guidance</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Destination weddings are complex. Without proper guidance, couples face:
          </p>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <span>Budget overruns due to hidden costs and poor planning</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <span>Venue disappointment when reality doesn't match photos</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <span>Cultural misunderstandings with venues and vendors</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <span>Legal complications and last-minute documentation issues</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <span>Guest experience problems (poor accommodation, unclear logistics)</span>
            </li>
          </ul>
          <p className="text-lg text-gray-600 mt-8 leading-relaxed">
            These aren't rare exceptions. They're common outcomes when couples try to navigate destination weddings without proper support.
          </p>
        </div>
      </section>

      {/* Wedding Circle's Role in Supporting the Process */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Wedding Circle's Role in Supporting the Process</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            We exist to help couples navigate the complexities of organising a wedding abroad with clarity, confidence, and realistic expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <FileText className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-serif mb-3">Real-World Guidance</h3>
              <p className="text-gray-300 leading-relaxed">
                We share practical insights based on experience, not generic advice.
              </p>
            </div>
            <div>
              <Users className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-serif mb-3">Vetted Connections</h3>
              <p className="text-gray-300 leading-relaxed">
                We connect you with venues and planners who understand your needs.
              </p>
            </div>
            <div>
              <CheckCircle className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-serif mb-3">Expectation Setting</h3>
              <p className="text-gray-300 leading-relaxed">
                We help you understand what's realistic before you commit.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-10 py-4 bg-accent text-primary font-medium hover:bg-white transition-colors uppercase tracking-widest rounded-sm"
            >
              Get Guidance <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganisingWeddingAbroad;
