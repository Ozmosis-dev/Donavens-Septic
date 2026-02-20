import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="https://donavensseptic.com/wp-content/uploads/2024/07/don_sep_pubm-logo.png" 
                alt="Donaven's Septic & Plumbing" 
                className="h-16 w-auto bg-white/90 p-1 rounded" 
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-body">
              North Georgia's trusted source for complete residential and commercial septic services. Family-owned and operated since 2004.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Donavens-septic-and-plumbing-service/100068618421140/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-body">
              <li><Link to="/services/septic-installation" className="hover:text-white transition-colors">Septic Installation</Link></li>
              <li><Link to="/services/septic-repairs" className="hover:text-white transition-colors">Septic Repairs</Link></li>
              <li><Link to="/services/septic-pumping" className="hover:text-white transition-colors">Septic Tank Pumping</Link></li>
              <li><Link to="/services/aerobic-systems" className="hover:text-white transition-colors">Aerobic Systems</Link></li>
              <li><Link to="/services/sewer-lines" className="hover:text-white transition-colors">Sewer Lines</Link></li>
              <li><Link to="/services/water-lines" className="hover:text-white transition-colors">Water Lines</Link></li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-accent">Service Areas</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-body">
              <li><Link to="/locations/covington" className="hover:text-white transition-colors">Covington, GA</Link></li>
              <li><Link to="/locations/conyers" className="hover:text-white transition-colors">Conyers, GA</Link></li>
              <li><Link to="/locations/monroe" className="hover:text-white transition-colors">Monroe, GA</Link></li>
              <li><Link to="/locations/oxford" className="hover:text-white transition-colors">Oxford, GA</Link></li>
              <li><Link to="/locations/social-circle" className="hover:text-white transition-colors">Social Circle, GA</Link></li>
              <li><Link to="/locations/loganville" className="hover:text-white transition-colors">Loganville, GA</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-body">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span>Covington, GA<br />Serving East Metro Atlanta</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-accent flex-shrink-0" />
                <a href="tel:770-722-3264" className="hover:text-white text-lg font-bold">(770) 722-3264</a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon-Fri: 8am - 6pm</p>
                  <p>Sat: 9am - 2pm</p>
                  <p className="text-accent font-bold mt-1">24/7 Emergency Service</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-body">
          <p>&copy; {currentYear} Donaven's Septic & Plumbing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
