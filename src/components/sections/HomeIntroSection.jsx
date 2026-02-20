import React from 'react';
import Button from '../ui/Button';
import { CheckCircle } from 'lucide-react';

const HomeIntroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block bg-gray-100 rounded-md px-3 py-1 mb-4">
              <span className="text-accent font-bold text-xs uppercase tracking-widest">Your Septic Professionals</span>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6 leading-tight">
              North Georgia's Trusted Source For Complete Residential and Commercial Septic Services
            </h2>
            <p className="text-gray-600 font-body text-lg mb-6 leading-relaxed">
              Quality septic services are crucial for maintaining the health and functionality of both residential and commercial properties. With over 20 years of experience, Donaven's professional septic services ensure compliance with local regulations, promoting a safe and sustainable environment for communities.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Experienced and Certified Technicians",
                "Customer Satisfaction Guarantee",
                "State-of-the-Art Equipment"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-primary font-medium">
                  <CheckCircle size={20} className="text-accent mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Button to="/services" variant="primary" className="uppercase tracking-wide">
              All Services →
            </Button>
          </div>

          {/* Image Grid Side */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://donavensseptic.com/wp-content/uploads/2024/06/concrete-septic-tank-with-a-capacity-of-10-cubic-meters-placed-in-the-garden-by-the-house--1024x684.jpg" 
                alt="Concrete septic tank installation" 
                className="rounded-card shadow-md w-full h-48 object-cover"
              />
              <img 
                src="https://donavensseptic.com/wp-content/uploads/2024/06/homeguide-concrete-septic-tank-s-1024x683.jpg" 
                alt="Septic tank placement" 
                className="rounded-card shadow-md w-full h-48 object-cover mt-8"
              />
              <img 
                src="https://donavensseptic.com/wp-content/uploads/2024/06/a-worker-installs-a-sewer-manhole-on-a-septic-tank-made-of-concrete-rings-1024x683.jpg" 
                alt="Worker installing sewer manhole" 
                className="rounded-card shadow-md w-full h-48 object-cover -mt-8"
              />
              <div className="bg-primary-dark rounded-card shadow-md w-full h-48 flex items-center justify-center p-6 text-center">
                <div>
                  <span className="block text-4xl font-bold text-accent mb-2">20+</span>
                  <span className="text-white font-heading font-bold uppercase text-sm tracking-widest">Years of<br/>Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntroSection;
