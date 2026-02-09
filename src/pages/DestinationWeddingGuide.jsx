import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Globe, Users, Calendar, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const DestinationWeddingGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Destination Wedding Guide",
    "description": "Comprehensive guide to planning a destination wedding. Learn everything from choosing venues to managing guests for your perfect wedding abroad.",
    "author": {
      "@type": "Organization",
      "name": "Wedding Circle"
    }
  };

  return (
    <div className="animate-fade-in">
      <SEO 
        title="Destination Wedding Guide | Wedding Circle"
        description="Explore our destination wedding guide covering planning, expectations and possibilities for couples looking to create a meaningful wedding experience."
        keywords="destination wedding guide, destination wedding planning, planning a destination wedding, wedding abroad guide"
        canonicalUrl="https://theweddingcircle.com/destination-wedding-guide"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-gray-900 to-gray-800 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">The Destination Wedding Guide</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore planning, expectations and possibilities for couples looking to create a meaningful wedding experience.
          </p>
        </div>
      </section>

      {/* What Is a Destination Wedding? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">What Is a Destination Wedding?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            A destination wedding is any wedding held away from the couple's hometown—whether that's in another country, a different region, or simply a location that requires travel for most guests.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            But it's more than just location. It's about creating an experience—a multi-day celebration in a meaningful place that reflects who you are as a couple.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            It's about bringing your closest people together in a setting that feels intentional, intimate, and unforgettable.
          </p>
        </div>
      </section>

      {/* Why Couples Choose Destination Weddings Today */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">Why Couples Choose Destination Weddings Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-sm">
              <Heart className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Intimacy Over Scale</h3>
              <p className="text-gray-600 leading-relaxed">
                Smaller guest lists mean deeper connections. Destination weddings naturally filter to your closest circle.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <Globe className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Experience Over Tradition</h3>
              <p className="text-gray-600 leading-relaxed">
                Couples want something that feels personal and meaningful, not just what's expected.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <Users className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Quality Time With Guests</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-day celebrations allow for real moments with the people who matter most.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">A Sense of Place</h3>
              <p className="text-gray-600 leading-relaxed">
                The location becomes part of your story—a place that holds meaning for you as a couple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Destination Weddings */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12">Types of Destination Weddings</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-3">Luxury Destination Weddings</h3>
              <p className="text-gray-600 leading-relaxed">
                High-end venues, premium service, and curated experiences. Think exclusive châteaux, five-star resorts, and bespoke planning.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-3">Cultural Destination Weddings</h3>
              <p className="text-gray-600 leading-relaxed">
                Weddings that honor heritage and tradition in global settings—such as South Asian weddings in European or Middle Eastern venues.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-3">Intimate Destination Weddings</h3>
              <p className="text-gray-600 leading-relaxed">
                Small celebrations (20-50 guests) focused on connection, simplicity, and meaningful moments.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-2xl font-serif mb-3">Experiential Destination Weddings</h3>
              <p className="text-gray-600 leading-relaxed">
                Weddings built around shared experiences—adventure activities, culinary journeys, or immersive cultural events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Misconceptions */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Common Misconceptions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3 text-accent">❌ "Destination weddings are always cheaper"</h3>
              <p className="text-gray-600 leading-relaxed">
                Not necessarily. While smaller guest lists can reduce costs, luxury venues, travel logistics, and extended celebrations can add up. Budget expectations need to be realistic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3 text-accent">❌ "It's easier because the venue does everything"</h3>
              <p className="text-gray-600 leading-relaxed">
                Venues provide infrastructure, but you still need coordination, cultural understanding, and often external vendors. Planning from afar requires more, not less, organization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3 text-accent">❌ "Everyone will come"</h3>
              <p className="text-gray-600 leading-relaxed">
                Expect 50-70% attendance. Travel, cost, and timing will impact who can join. This is normal and part of the filtering process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3 text-accent">❌ "You can plan it in 6 months"</h3>
              <p className="text-gray-600 leading-relaxed">
                Most destination weddings require 12-18 months of planning. Legal requirements, venue availability, and guest travel all need time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Couples Usually Get Wrong */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">What Couples Usually Get Wrong</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif mb-3">Underestimating the Budget</h3>
              <p className="text-gray-600 leading-relaxed">
                Couples often focus on venue cost alone, forgetting travel, accommodation, extended events, and hidden fees. A realistic budget includes everything.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">Choosing a Venue Without Visiting</h3>
              <p className="text-gray-600 leading-relaxed">
                Photos don't tell the full story. The feel of a space, service quality, and logistical realities only become clear in person.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">Ignoring Cultural Requirements</h3>
              <p className="text-gray-600 leading-relaxed">
                Not all venues understand cultural needs—whether it's food, timing, or ceremony requirements. This needs to be confirmed upfront.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3">Not Planning for Guest Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Your guests are traveling for you. Accommodation, transport, activities, and clear communication are essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Thinking About Your Destination Wedding */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-8">How to Start Thinking About Your Destination Wedding</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-serif mb-2">Define Your Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  What kind of experience do you want? Intimate or grand? Cultural or contemporary? Beach or heritage?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-serif mb-2">Set a Realistic Budget</h3>
                <p className="text-gray-600 leading-relaxed">
                  Understand what destination weddings actually cost in your chosen region. Budget transparency is key.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-serif mb-2">Research Destinations & Venues</h3>
                <p className="text-gray-600 leading-relaxed">
                  Look beyond Pinterest. Understand legal requirements, cultural fit, and logistical realities.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-serif mb-2">Consider Your Guests</h3>
                <p className="text-gray-600 leading-relaxed">
                  Who will realistically attend? What will they need? How can you make their experience seamless?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Wedding Circle Helps You Navigate This */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">How Wedding Circle Helps You Navigate This</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Wedding Circle exists to bridge the gap between vision and reality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-xl font-serif mb-3 text-accent">Education</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide real-world guidance on budgets, timelines, and expectations—not generic advice.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3 text-accent">Curation</h3>
              <p className="text-gray-600 leading-relaxed">
                We connect you with venues that match your vision, budget, and cultural requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-3 text-accent">Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Through showcases and venue experiences, we help you feel the space before committing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-8">Next Steps</h2>
          <p className="text-lg text-gray-300 mb-10">
            Continue your destination wedding journey with these resources:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/destination-wedding-cost-abroad" 
              className="p-6 bg-white text-primary rounded-sm hover:bg-accent hover:text-white transition-colors group"
            >
              <Calendar className="h-10 w-10 mx-auto mb-4 text-accent group-hover:text-white" />
              <h3 className="text-xl font-serif mb-2">Understand Costs</h3>
              <p className="text-sm text-gray-600 group-hover:text-white">Realistic budget expectations</p>
            </Link>
            <Link 
              to="/organising-a-wedding-abroad" 
              className="p-6 bg-white text-primary rounded-sm hover:bg-accent hover:text-white transition-colors group"
            >
              <Users className="h-10 w-10 mx-auto mb-4 text-accent group-hover:text-white" />
              <h3 className="text-xl font-serif mb-2">Learn How to Organise</h3>
              <p className="text-sm text-gray-600 group-hover:text-white">Practical planning guidance</p>
            </Link>
            <Link 
              to="/luxury-wedding-venues-beach-destination" 
              className="p-6 bg-white text-primary rounded-sm hover:bg-accent hover:text-white transition-colors group"
            >
              <MapPin className="h-10 w-10 mx-auto mb-4 text-accent group-hover:text-white" />
              <h3 className="text-xl font-serif mb-2">Explore Venues</h3>
              <p className="text-sm text-gray-600 group-hover:text-white">Curated venue collection</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationWeddingGuide;
