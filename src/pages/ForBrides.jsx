import React from 'react';
import { Camera, MapPin, Sparkles } from 'lucide-react';

const ForBrides = () => {
  return (
    <div className="animate-fade-in">
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/for-brides-hero.png"
            alt="Bride at luxury European destination wedding venue"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=2000'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-accent"></div>
            <span className="mx-4 text-accent text-xs tracking-[0.3em] uppercase font-light">For Couples</span>
            <div className="h-px w-12 bg-accent"></div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6">Experience Your Vision</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-200 leading-relaxed">
            Detailed guidance and curated experiences to help you find the perfect venue without the overwhelm.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 border-2 border-gray-100 rounded-sm hover-lift hover:border-accent transition-all group">
                <MapPin className="h-12 w-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif mb-4">Venue Discovery</h3>
                <p className="text-gray-600 leading-relaxed">Explore venues that match your specific style, budget, and cultural requirements. Every venue is personally vetted and trained.</p>
            </div>
            <div className="p-10 border-2 border-gray-100 rounded-sm hover-lift hover:border-accent transition-all group">
                <Sparkles className="h-12 w-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif mb-4">Immersive Experiences</h3>
                <p className="text-gray-600 leading-relaxed">Don't just view a listing. Attend showcases and retreats to truly feel the space before making your decision.</p>
            </div>
            <div className="p-10 border-2 border-gray-100 rounded-sm hover-lift hover:border-accent transition-all group">
                <Camera className="h-12 w-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif mb-4">Real Vision</h3>
                <p className="text-gray-600 leading-relaxed">See real weddings and styled shoots to understand exactly what is possible at each venue.</p>
            </div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Why Brides Choose The Circle</h2>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            We understand that planning a wedding—especially a destination or South Asian wedding—can feel overwhelming. 
            That's why we've built a platform that prioritizes clarity, transparency, and authentic experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h4 className="font-serif text-xl mb-3 text-accent">Budget Transparency</h4>
              <p className="text-gray-600">No hidden costs. We help you understand realistic budgets for your vision from day one.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h4 className="font-serif text-xl mb-3 text-accent">Cultural Expertise</h4>
              <p className="text-gray-600">Our venues are trained on South Asian wedding requirements, from multi-day events to specific cultural needs.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h4 className="font-serif text-xl mb-3 text-accent">Personalized Guidance</h4>
              <p className="text-gray-600">Work with experts who understand your vision and can guide you to the perfect match.</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <h4 className="font-serif text-xl mb-3 text-accent">Global Network</h4>
              <p className="text-gray-600">Access incredible venues across Europe, Middle East, and beyond—not just the usual suspects.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForBrides;
