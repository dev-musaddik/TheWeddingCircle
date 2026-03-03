import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Users, Building2, Briefcase, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'bride',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for reaching out. We\'ll be in touch within 48 hours.'
        });
        setFormData({ name: '', email: '', phone: '', type: 'bride', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try emailing us directly at hello@weddingcircle.com'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <SEO 
        title="Connect with Wedding Circle"
        description="Connect with Wedding Circle to explore collaborations, curated wedding experiences and opportunities within the global wedding industry."
        keywords="contact wedding circle, connect wedding circle, wedding collaborations, destination wedding enquiry"
        canonicalUrl="https://theweddingcircle.com/contact"
      />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/contact-hero.png"
            alt="Wedding Circle contact - luxury wedding stationery"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1513866064536-3eff1e05c2e1?auto=format&fit=crop&q=80&w=2000'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-accent"></div>
            <span className="mx-4 text-accent text-xs tracking-[0.3em] uppercase font-light">Get in Touch</span>
            <div className="h-px w-12 bg-accent"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Connect with Wedding Circle</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We're here to start conversations, not sales. Tell us about your vision, needs, or collaboration ideas.
          </p>
        </div>
      </section>

      <div className="bg-secondary py-20 px-4">
        {/* Who Should Get in Touch */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-serif text-center mb-12">Who Should Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-sm text-center hover-lift">
            <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-serif mb-3">Brides</h3>
            <p className="text-gray-600 text-sm">
              Couples seeking guidance, curated venues, and clarity on destination weddings
            </p>
          </div>
          <div className="bg-white p-6 rounded-sm text-center hover-lift">
            <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-serif mb-3">Venues</h3>
            <p className="text-gray-600 text-sm">
              Unique venues looking to connect with discerning couples globally
            </p>
          </div>
          <div className="bg-white p-6 rounded-sm text-center hover-lift">
            <Briefcase className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-serif mb-3">Brands</h3>
            <p className="text-gray-600 text-sm">
              Wedding brands seeking collaboration and community within the Circle
            </p>
          </div>
          <div className="bg-white p-6 rounded-sm text-center hover-lift">
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-serif mb-3">Industry Professionals</h3>
            <p className="text-gray-600 text-sm">
              Planners, photographers, and experts wanting to join the network
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white p-12 shadow-lg rounded-sm animate-slide-up">
        <h2 className="text-2xl font-serif mb-8 text-center">Get in Touch</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
              placeholder="Full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
              placeholder="+44 123 456 7890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              I am a... *
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
            >
              <option value="bride">Bride / Couple</option>
              <option value="venue">Venue Owner / Manager</option>
              <option value="brand">Wedding Brand</option>
              <option value="professional">Industry Professional</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none"
              placeholder="Tell us about your vision, needs, or how you'd like to collaborate..."
            />
          </div>

          {status.message && (
            <div className={`p-4 rounded-sm flex items-start gap-3 ${
              status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              )}
              <p className="text-sm">{status.message}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-primary text-white font-medium hover:bg-accent hover:text-primary transition-colors uppercase tracking-widest rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* What Happens After You Reach Out */}
      <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-sm">
        <h2 className="text-2xl font-serif mb-6 text-center">What Happens Next</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <h3 className="font-medium mb-1">We Review Your Message</h3>
              <p className="text-gray-600 text-sm">Our team reads every enquiry personally to understand your needs.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <h3 className="font-medium mb-1">We Respond Within 48 Hours</h3>
              <p className="text-gray-600 text-sm">You'll hear from us within two business days with next steps.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <h3 className="font-medium mb-1">We Start the Conversation</h3>
              <p className="text-gray-600 text-sm">Whether it's a call, meeting, or curated introduction—we'll guide you from there.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
