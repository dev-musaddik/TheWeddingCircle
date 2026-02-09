import React from 'react';
import { TrendingUp, Users, Award, Target, Zap, Shield } from 'lucide-react';

const ForVenues = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-br from-primary via-gray-900 to-gray-800 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Elevate Your Venue</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-8 leading-relaxed">
            Strategic consultancy and positioning to connect you with high-value, international clients.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="animate-slide-in-left">
                <h2 className="text-4xl font-serif mb-6">Beyond Listings</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    The Wedding Circle is not a directory. We are a strategic partner for your growth. We help you unlock new markets, specifically targeting:
                </p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <span className="text-gray-700">South Asian Destination Weddings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <span className="text-gray-700">Luxury European Clients</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <span className="text-gray-700">Middle Eastern Celebrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <span className="text-gray-700">High-Budget Corporate Activations</span>
                    </li>
                </ul>
             </div>
             <div className="grid grid-cols-1 gap-6 animate-slide-in-right">
                 <div className="flex items-start p-6 bg-secondary rounded-sm hover-lift">
                     <TrendingUp className="h-8 w-8 text-accent mt-1 mr-4 flex-shrink-0" />
                     <div>
                         <h3 className="text-xl font-bold mb-2">Consultancy & Training</h3>
                         <p className="text-gray-600 text-sm leading-relaxed">We train your team on cultural nuances and service standards expected by global clients.</p>
                     </div>
                 </div>
                 <div className="flex items-start p-6 bg-secondary rounded-sm hover-lift">
                     <Users className="h-8 w-8 text-accent mt-1 mr-4 flex-shrink-0" />
                     <div>
                         <h3 className="text-xl font-bold mb-2">Curated Showcases</h3>
                         <p className="text-gray-600 text-sm leading-relaxed">Host experiential events for top planners and influencers, not just open days.</p>
                     </div>
                 </div>
                 <div className="flex items-start p-6 bg-secondary rounded-sm hover-lift">
                     <Award className="h-8 w-8 text-accent mt-1 mr-4 flex-shrink-0" />
                     <div>
                         <h3 className="text-xl font-bold mb-2">Brand Positioning</h3>
                         <p className="text-gray-600 text-sm leading-relaxed">Re-align your marketing visuals and voice to attract the right clientele.</p>
                     </div>
                 </div>
             </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm text-center hover-lift">
              <Target className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Targeted Client Access</h3>
              <p className="text-gray-600 text-sm">Connect with couples who are actively seeking your type of venue, not just browsing.</p>
            </div>
            <div className="bg-white p-8 rounded-sm text-center hover-lift">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Market Intelligence</h3>
              <p className="text-gray-600 text-sm">Gain insights into pricing, trends, and client expectations across different markets.</p>
            </div>
            <div className="bg-white p-8 rounded-sm text-center hover-lift">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-3">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">We pre-qualify clients and ensure they understand your venue's value proposition.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForVenues;
