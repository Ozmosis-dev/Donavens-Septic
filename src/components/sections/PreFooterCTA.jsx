import React from 'react';
import Button from '../ui/Button';
import { Phone } from 'lucide-react';

const PreFooterCTA = () => {
  return (
    <section className="py-24 bg-accent text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Ready to Schedule? We're Here to Help.
        </h2>
        <p className="font-body text-xl text-white/90 mb-8">
          Serving Covington, Conyers, Monroe, and surrounding areas since 2004.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button to="/contact" variant="secondary" className="bg-primary text-white hover:bg-primary-dark border-none text-lg px-8 py-4 uppercase tracking-wide font-bold">
            Schedule Service Today
          </Button>
          <Button to="tel:770-722-3264" variant="outline" className="border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-4 uppercase tracking-wide font-bold flex items-center justify-center">
            <Phone className="mr-2" size={20} /> (770) 722-3264
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
