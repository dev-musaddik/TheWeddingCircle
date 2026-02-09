import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <img 
                src="/logo.png" 
                alt="The Wedding Circle Logo" 
                className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              A global wedding space connecting brides, venues and industry experts through curated experiences, education and inspiration.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:info@theweddingcircle.com" className="text-gray-300 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Planning Links */}
          <div>
            <h3 className="text-accent font-serif text-lg mb-6">Planning</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/destination-wedding-guide" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Destination Wedding Guide
                </Link>
              </li>
              <li>
                <Link to="/destination-wedding-cost-abroad" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Wedding Cost & Budget
                </Link>
              </li>
              <li>
                <Link to="/organising-a-wedding-abroad" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Organising Abroad
                </Link>
              </li>
              <li>
                <Link to="/wedding-masterclass" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Masterclass
                </Link>
              </li>
            </ul>
          </div>

          {/* Venues Links */}
          <div>
            <h3 className="text-accent font-serif text-lg mb-6">Venues</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/luxury-wedding-venues-beach-destination" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Luxury Venues
                </Link>
              </li>
              <li>
                <Link to="/dubai-wedding-packages" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Dubai Weddings
                </Link>
              </li>
              <li>
                <Link to="/for-venues" className="text-gray-300 hover:text-white transition-colors text-sm">
                  For Venue Owners
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-accent font-serif text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-2">
              <div className="flex items-start text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@theweddingcircle.com" className="hover:text-white transition-colors">
                  info@theweddingcircle.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} The Wedding Circle. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
