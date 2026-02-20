import React from 'react';
import Button from '../ui/Button';
import { Phone } from 'lucide-react';

const MidPageCTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://donavensseptic.com/wp-content/uploads/2024/06/a-worker-installs-a-sewer-manhole-on-a-septic-tank-made-of-concrete-rings-1024x683.jpg" 
          alt="Worker installing septic system" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/80 mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
          Call Us Today and Let Us Handle It! <span className="text-accent">Quick and Easy!</span>
        </h2>
        <div className="flex justify-center">
          <Button to="tel:770-722-3264" variant="primary" className="text-xl px-10 py-5 shadow-xl uppercase tracking-wide font-bold flex items-center">
            <Phone className="mr-3" /> CALL (770) 722-3264
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MidPageCTABanner;
