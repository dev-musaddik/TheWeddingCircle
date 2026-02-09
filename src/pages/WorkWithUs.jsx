import React from 'react';
import { Briefcase, Share2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkWithUs = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Partner With The Circle</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
            Collaborate with a network that values quality, innovation, and authentic connection.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm hover-lift rounded-sm">
                <Briefcase className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-serif mb-2">For Planners</h3>
                <p className="text-gray-600 mb-6">Gain exclusive access to pre-vetted, trained venues that understand your clients' high standards.</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-accent hover:text-primary font-medium text-sm transition-colors border-b border-accent hover:border-primary"
                >
                  Join the Network →
                </Link>
            </div>
            <div className="bg-white p-8 shadow-sm hover-lift rounded-sm">
                <Share2 className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-serif mb-2">For Brands</h3>
                <p className="text-gray-600 mb-6">Position your fashion or lifestyle brand within immersive wedding experiences, not just magazine ads.</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-accent hover:text-primary font-medium text-sm transition-colors border-b border-accent hover:border-primary"
                >
                  Partner for an Event →
                </Link>
            </div>
            <div className="bg-white p-8 shadow-sm hover-lift rounded-sm">
                <Layers className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-serif mb-2">Emerging Businesses</h3>
                <p className="text-gray-600 mb-6">Get the guidance and visibility needed to scale in the luxury wedding market.</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-accent hover:text-primary font-medium text-sm transition-colors border-b border-accent hover:border-primary"
                >
                  Apply for Mentorship →
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;
