import React from 'react';
import { useSEO } from '../hooks/useSEO';
import ServiceCard from '../components/ui/ServiceCard';
import { services } from '../data/services';
import EmergencyCTABanner from '../components/ui/EmergencyCTABanner';
import PreFooterCTA from '../components/sections/PreFooterCTA';

const ServicesPage = () => {
  useSEO("Our Services", "Comprehensive septic and plumbing services including pumping, repair, installation, and inspections.");

  const septicServices = services.filter(s => s.category === 'septic');
  const plumbingServices = services.filter(s => s.category === 'plumbing');

  return (
    <>
      <EmergencyCTABanner />
      <div className="bg-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Septic & Plumbing Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete residential and commercial septic and plumbing services for Newton, Rockdale and Monroe Counties. Backed by 20+ years of hands-on experience.
          </p>
        </div>
      </div>

      <div className="bg-gray-light py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="font-heading font-bold text-3xl text-primary mb-8 border-b-2 border-accent pb-2 inline-block">Septic Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {septicServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading font-bold text-3xl text-primary mb-8 border-b-2 border-accent pb-2 inline-block">Plumbing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plumbingServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <PreFooterCTA />
    </>
  );
};

export default ServicesPage;
