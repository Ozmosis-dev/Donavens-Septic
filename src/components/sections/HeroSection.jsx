import React from 'react';
import Button from '../ui/Button';
import { Star, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-primary-dark text-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://donavensseptic.com/wp-content/uploads/2024/06/septic-system-overview-1-1024x768.jpg" 
          alt="Septic system overview" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/55 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 uppercase">
            Septic & Plumbing Services <span className="text-accent">You Can Trust</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl font-medium">
            Donaven's has been serving Newton, Rockdale & Monroe Counties since 2004. Licensed, insured, and ready when you need us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button to="/contact" variant="primary" className="text-lg px-8 py-4 shadow-xl shadow-accent/20 uppercase tracking-wide rounded-btn font-bold">
              Schedule Septic Service
            </Button>
            <Button to="tel:770-722-3264" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-accent hover:border-accent hover:text-white uppercase tracking-wide rounded-btn font-bold bg-transparent">
              Call Now: (770) 722-3264
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base font-medium text-white items-center">
            <div className="flex items-center">
              <div className="flex text-accent mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span>154 Google Reviews</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center">
              <Clock size={18} className="text-accent mr-2" />
              <span>20+ Years Experience</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center">
              <ShieldCheck size={18} className="text-accent mr-2" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
