import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            What We Do
          </h2>
          <p className="text-gray-300 font-body text-lg">
            When it comes to Septic and Outdoor Plumbing Services in Newton, Rockdale and Monroe Counties, Donaven's Septic and Plumbing is the name to trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
