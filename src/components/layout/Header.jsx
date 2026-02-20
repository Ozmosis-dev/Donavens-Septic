import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className="fixed w-full z-50 bg-black shadow-header py-4 transition-all duration-300">
      {/* Top Bar - Desktop Only */}
      <div className="hidden md:block border-b border-gray-800 pb-2 mb-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-300">
          <div className="flex space-x-6">
            <span className="flex items-center"><MapPin size={14} className="mr-1 text-accent" /> Serving Newton, Rockdale, & Monroe Counties</span>
            <span className="flex items-center"><Clock size={14} className="mr-1 text-accent" /> 24/7 Emergency Service Available</span>
          </div>
          <div className="flex items-center font-bold text-white">
            <Phone size={14} className="mr-1 fill-current" /> Call Now: (770) 722-3264
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="https://donavensseptic.com/wp-content/uploads/2024/07/don_sep_pubm-logo.png" 
            alt="Donaven's Septic & Plumbing" 
            className="h-16 md:h-20 w-auto" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link 
            to="/" 
            className={`font-heading font-semibold text-sm uppercase tracking-wide hover:text-accent transition-colors ${location.pathname === '/' ? 'text-accent' : 'text-white'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`font-heading font-semibold text-sm uppercase tracking-wide hover:text-accent transition-colors ${location.pathname === '/about' ? 'text-accent' : 'text-white'}`}
          >
            About
          </Link>
          
          {/* Services Dropdown Trigger (Simplified for this iteration to link to main services page, or hover menu could be added) */}
          <Link 
            to="/services" 
            className={`font-heading font-semibold text-sm uppercase tracking-wide hover:text-accent transition-colors ${location.pathname.includes('/services') ? 'text-accent' : 'text-white'}`}
          >
            Services
          </Link>

          <Link 
            to="/locations" 
            className={`font-heading font-semibold text-sm uppercase tracking-wide hover:text-accent transition-colors ${location.pathname.includes('/locations') ? 'text-accent' : 'text-white'}`}
          >
            Areas We Serve
          </Link>
          
          <Link 
            to="/contact" 
            className={`font-heading font-semibold text-sm uppercase tracking-wide hover:text-accent transition-colors ${location.pathname === '/contact' ? 'text-accent' : 'text-white'}`}
          >
            Contact
          </Link>

          <Button to="/contact" variant="primary" className="py-2 px-4 text-sm whitespace-nowrap bg-accent hover:bg-accent-hover text-white">
            Get Free Estimate
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black shadow-lg border-t border-gray-800 py-4 px-4 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
          <Link to="/" className="font-heading font-bold text-lg py-2 border-b border-gray-800 text-white hover:text-accent">Home</Link>
          <Link to="/about" className="font-heading font-bold text-lg py-2 border-b border-gray-800 text-white hover:text-accent">About</Link>
          
          <div className="py-2 border-b border-gray-800">
            <button 
              onClick={() => toggleDropdown('services')}
              className="flex items-center justify-between w-full font-heading font-bold text-lg text-white hover:text-accent"
            >
              <span>Services</span>
              <ChevronDown size={20} className={`transform transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'services' && (
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link to="/services" className="text-gray-400 hover:text-white py-1">All Services</Link>
                <Link to="/services/septic-pumping" className="text-gray-400 hover:text-white py-1">Septic Pumping</Link>
                <Link to="/services/septic-installation" className="text-gray-400 hover:text-white py-1">Septic Installation</Link>
                <Link to="/services/septic-repairs" className="text-gray-400 hover:text-white py-1">Septic Repairs</Link>
              </div>
            )}
          </div>

          <Link to="/locations" className="font-heading font-bold text-lg py-2 border-b border-gray-800 text-white hover:text-accent">Areas We Serve</Link>
          <Link to="/contact" className="font-heading font-bold text-lg py-2 border-b border-gray-800 text-white hover:text-accent">Contact</Link>
          
          <Button to="/contact" variant="primary" className="w-full mt-4 bg-accent hover:bg-accent-hover text-white">
            Get Free Estimate
          </Button>
          <div className="pt-4 flex flex-col space-y-2 text-sm text-gray-400">
            <a href="tel:770-722-3264" className="flex items-center font-bold text-white"><Phone size={16} className="mr-2" /> (770) 722-3264</a>
            <span className="flex items-center"><MapPin size={16} className="mr-2" /> Covington, GA</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
