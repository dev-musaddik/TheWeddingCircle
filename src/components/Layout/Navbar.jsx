import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [planningOpen, setPlanningOpen] = useState(false);
  const [venuesOpen, setVenuesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Logo Image */}
              <img 
                src="/logo.png" 
                alt="The Wedding Circle Logo" 
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {/* Logo Text - Hidden on small screens */}
              <span className="hidden sm:block text-xl md:text-2xl font-serif text-primary group-hover:text-accent transition-colors">
                The Wedding Circle
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Planning Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setPlanningOpen(true)}
              onMouseLeave={() => setPlanningOpen(false)}
            >
              <Link to="/planning" className="flex items-center text-gray-700 hover:text-accent transition-colors font-medium">
                Planning <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {planningOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-sm py-2 animate-fade-in">
                  <Link to="/destination-wedding-guide" className="block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors">
                    Destination Wedding Guide
                  </Link>
                  <Link to="/destination-wedding-cost-abroad" className="block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors">
                    Wedding Cost & Budget
                  </Link>
                  <Link to="/organising-a-wedding-abroad" className="block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors">
                    Organising Abroad
                  </Link>
                </div>
              )}
            </div>

            {/* Venues Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setVenuesOpen(true)}
              onMouseLeave={() => setVenuesOpen(false)}
            >
              <Link to="/venues" className="flex items-center text-gray-700 hover:text-accent transition-colors font-medium">
                Venues <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {venuesOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-sm py-2 animate-fade-in">
                  <Link to="/luxury-wedding-venues-beach-destination" className="block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors">
                    Luxury Venues
                  </Link>
                  <Link to="/dubai-wedding-packages" className="block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors">
                    Dubai Weddings
                  </Link>
                  <Link to="/for-venues" className="block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors">
                    For Venue Owners
                  </Link>
                </div>
              )}
            </div>

            <Link to="/wedding-masterclass" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Masterclass
            </Link>
            <Link to="/insights" className="text-gray-700 hover:text-accent transition-colors font-medium">
              Insights
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-accent transition-colors font-medium">
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-accent text-white font-medium hover:bg-primary transition-colors rounded-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-secondary hover:text-accent transition-colors rounded-sm" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <div className="px-3 py-2 text-sm font-bold text-gray-500">Planning</div>
            <Link to="/destination-wedding-guide" className="block px-6 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors rounded-sm" onClick={() => setIsOpen(false)}>
              Wedding Guide
            </Link>
            <Link to="/destination-wedding-cost-abroad" className="block px-6 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors rounded-sm" onClick={() => setIsOpen(false)}>
              Cost & Budget
            </Link>
            <Link to="/organising-a-wedding-abroad" className="block px-6 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors rounded-sm" onClick={() => setIsOpen(false)}>
              Organising Abroad
            </Link>
            <div className="px-3 py-2 text-sm font-bold text-gray-500">Venues</div>
            <Link to="/luxury-wedding-venues-beach-destination" className="block px-6 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors rounded-sm" onClick={() => setIsOpen(false)}>
              Luxury Venues
            </Link>
            <Link to="/dubai-wedding-packages" className="block px-6 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors rounded-sm" onClick={() => setIsOpen(false)}>
              Dubai Weddings
            </Link>
            <Link to="/for-venues" className="block px-6 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-accent transition-colors rounded-sm" onClick={() => setIsOpen(false)}>
              For Venue Owners
            </Link>
            <Link to="/wedding-masterclass" className="block px-3 py-2 text-gray-700 hover:bg-secondary hover:text-accent transition-colors rounded-sm" onClick={() => setIsOpen(false)}>
              Masterclass
            </Link>
            <Link to="/insights" className="block px-3 py-2 text-gray-700 hover:bg-secondary hover:text-accent transition-colors rounded-sm" onClick={() => setIsOpen(false)}>
              Insights
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-secondary hover:text-accent transition-colors rounded-sm" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="block px-3 py-2 bg-accent text-white hover:bg-primary transition-colors rounded-sm" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
