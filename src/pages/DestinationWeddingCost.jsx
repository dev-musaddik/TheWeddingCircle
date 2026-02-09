import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, TrendingUp, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const DestinationWeddingCost = () => {
  const [guestCount, setGuestCount] = useState(100);
  const [destination, setDestination] = useState('europe');

  const costEstimates = {
    europe: { base: 50000, perGuest: 300 },
    dubai: { base: 60000, perGuest: 350 },
    caribbean: { base: 45000, perGuest: 280 },
    asia: { base: 40000, perGuest: 250 }
  };

  const calculateEstimate = () => {
    const { base, perGuest } = costEstimates[destination];
    return base + (guestCount * perGuest);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Destination Wedding Cost & Planning Abroad",
    "description": "Understand destination wedding costs and how to organise a wedding abroad, with clear guidance on budgets, venues and expectations.",
    "author": {
      "@type": "Organization",
      "name": "Wedding Circle"
    }
  };

  return (
    <div className="animate-fade-in">
      <SEO 
        title="Destination Wedding Cost & Planning Abroad | Wedding Circle"
        description="Understand destination wedding costs and how to organise a wedding abroad, with clear guidance on budgets, venues and expectations."
        keywords="destination wedding cost, destination wedding cost abroad, luxury wedding cost, wedding abroad cost, organising a wedding abroad, destination wedding budget"
        canonicalUrl="https://theweddingcircle.com/destination-wedding-cost-abroad"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent via-yellow-600 to-orange-600 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Destination Wedding Cost & Planning Abroad</h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Understand destination wedding costs and how to organise a wedding abroad, with clear guidance on budgets, venues and expectations.
          </p>
        </div>
      </section>

      {/* Realistic Destination Wedding Costs Explained */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Realistic Destination Wedding Costs Explained</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            One of the biggest mistakes couples make is underestimating what a destination wedding actually costs.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The venue fee is just the beginning. When you factor in travel, accommodation, extended events, vendors, and hidden costs—the total can be significantly higher than expected.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Budget transparency is essential. Wedding Circle exists to help you set realistic expectations from the start.
          </p>
        </div>
      </section>

      {/* Interactive Cost Calculator */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-sm shadow-lg">
          <h2 className="text-3xl font-serif mb-8 text-center">Estimate Your Destination Wedding Cost</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Number of Guests: {guestCount}
              </label>
              <input
                type="range"
                min="30"
                max="300"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Destination Region
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              >
                <option value="europe">Europe (Italy, France, Portugal, Greece)</option>
                <option value="dubai">Dubai & Middle East</option>
                <option value="caribbean">Caribbean</option>
                <option value="asia">Asia (Bali, Thailand)</option>
              </select>
            </div>
            <div className="bg-accent bg-opacity-10 p-6 rounded-sm text-center">
              <p className="text-sm text-gray-600 mb-2">Estimated Total Cost</p>
              <p className="text-4xl font-serif text-accent">
                ${calculateEstimate().toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-2">This is a baseline estimate. Actual costs vary based on venue, season, and services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Impacts the Cost Most */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">What Impacts the Cost Most</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-serif mb-3">Venue & Location</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium venues in high-demand destinations (Dubai, Santorini, Tuscany) command higher fees. Exclusivity costs more.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-serif mb-3">Guest Count</h3>
              <p className="text-gray-600 leading-relaxed">
                Every guest adds accommodation, meals, and travel logistics. Smaller weddings (30-80) are often more cost-effective per person.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-serif mb-3">Season & Timing</h3>
              <p className="text-gray-600 leading-relaxed">
                Peak season (summer in Europe, winter in Dubai) increases costs by 30-50%. Off-peak offers better value.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-serif mb-3">Cultural Requirements</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-day South Asian weddings with specific catering, décor, and ceremony needs require specialized vendors and higher budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury vs Premium Destination Weddings */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Luxury vs Premium Destination Weddings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-sm">
              <h3 className="text-2xl font-serif mb-4 text-accent">Premium Destination Weddings</h3>
              <p className="text-gray-600 mb-4">$40,000 - $80,000</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>50-100 guests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Quality venues with good service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Standard catering and décor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>2-3 day celebration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-sm border-2 border-accent">
              <h3 className="text-2xl font-serif mb-4 text-accent">Luxury Destination Weddings</h3>
              <p className="text-gray-600 mb-4">$100,000 - $300,000+</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>80-200+ guests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Exclusive venues (châteaux, five-star resorts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Bespoke catering, décor, and entertainment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>3-5 day multi-event celebration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Costs Couples Don't Expect */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-12">Hidden Costs Couples Don't Expect</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-red-50 p-6 rounded-sm">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-serif mb-2 text-red-900">Travel & Accommodation for Couple</h3>
                <p className="text-gray-700">Multiple venue visits, planning trips, and extended stays add up quickly.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50 p-6 rounded-sm">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-serif mb-2 text-red-900">Vendor Travel & Accommodation</h3>
                <p className="text-gray-700">If bringing your own photographer, planner, or makeup artist—you cover their costs too.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50 p-6 rounded-sm">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-serif mb-2 text-red-900">Import Fees & Taxes</h3>
                <p className="text-gray-700">Bringing in specific items (décor, outfits, favors) can incur customs fees.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50 p-6 rounded-sm">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-serif mb-2 text-red-900">Legal & Documentation Costs</h3>
                <p className="text-gray-700">Translations, notarizations, and legal requirements vary by country.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50 p-6 rounded-sm">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-serif mb-2 text-red-900">Currency Fluctuations</h3>
                <p className="text-gray-700">Exchange rates can shift significantly between booking and payment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-red-50 p-6 rounded-sm">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-serif mb-2 text-red-900">Last-Minute Changes</h3>
                <p className="text-gray-700">Guest count changes, weather contingencies, and timeline adjustments all add costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Costs When Getting Married Abroad */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">Planning Costs When Getting Married Abroad</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Beyond the wedding day itself, planning from afar requires investment in coordination, communication, and expertise.
          </p>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-2">Wedding Planner / Coordinator</h3>
              <p className="text-gray-600">$5,000 - $20,000+ depending on scope and experience</p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-2">Venue Site Visits</h3>
              <p className="text-gray-600">$2,000 - $5,000 per trip (flights, accommodation, meals)</p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-2">Legal & Administrative</h3>
              <p className="text-gray-600">$500 - $2,000 for documentation, translations, and legal fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Examples by Wedding Style */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Cost Examples by Wedding Style</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-sm">
              <h3 className="text-2xl font-serif mb-4">Intimate Beach Wedding</h3>
              <p className="text-gray-600 mb-4">30-50 guests | 2 days</p>
              <p className="text-3xl font-serif text-accent mb-4">$35,000 - $60,000</p>
              <p className="text-sm text-gray-600">Greece, Portugal, or Caribbean</p>
            </div>
            <div className="bg-secondary p-8 rounded-sm border-2 border-accent">
              <h3 className="text-2xl font-serif mb-4">Luxury European Wedding</h3>
              <p className="text-gray-600 mb-4">100-150 guests | 3 days</p>
              <p className="text-3xl font-serif text-accent mb-4">$120,000 - $200,000</p>
              <p className="text-sm text-gray-600">Tuscany, French Riviera, or Château</p>
            </div>
            <div className="bg-secondary p-8 rounded-sm">
              <h3 className="text-2xl font-serif mb-4">Grand Dubai Wedding</h3>
              <p className="text-gray-600 mb-4">200-300 guests | 4 days</p>
              <p className="text-3xl font-serif text-accent mb-4">$200,000 - $400,000+</p>
              <p className="text-sm text-gray-600">Five-star resorts or palace venues</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Budget Correctly From the Start */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">How to Budget Correctly From the Start</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-serif mb-2">Start With Total Budget, Not Venue Cost</h3>
                <p className="text-gray-600 leading-relaxed">
                  Determine what you can realistically spend overall, then work backwards to allocate to venue, travel, vendors, etc.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-serif mb-2">Add 20% Contingency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Things change. Costs creep. Always budget 20% more than your initial estimate.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-serif mb-2">Get Detailed Quotes Early</h3>
                <p className="text-gray-600 leading-relaxed">
                  Don't rely on estimates. Get itemized quotes from venues and vendors before committing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-serif mb-2">Factor in All Travel Costs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your travel, vendor travel, planning trips—include everything in your budget from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Wedding Circle Helps Set Expectations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">How Wedding Circle Helps Set Expectations</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Budget transparency is at the heart of what we do. We help couples understand realistic costs before they fall in love with a venue they can't afford.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <TrendingUp className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Realistic Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                We share real-world costs based on experience, not marketing fluff.
              </p>
            </div>
            <div>
              <DollarSign className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Budget-Matched Venues</h3>
              <p className="text-gray-600 leading-relaxed">
                We connect you with venues that fit your actual budget, not aspirational ones.
              </p>
            </div>
            <div>
              <CheckCircle className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">No Hidden Surprises</h3>
              <p className="text-gray-600 leading-relaxed">
                We help you ask the right questions to uncover all costs upfront.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-10 py-4 bg-primary text-white font-medium hover:bg-accent hover:text-primary transition-colors uppercase tracking-widest rounded-sm"
            >
              Discuss Your Budget <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationWeddingCost;
