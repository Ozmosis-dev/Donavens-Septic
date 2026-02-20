import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { locations } from '../data/locations';
import EmergencyCTABanner from '../components/ui/EmergencyCTABanner';
import PreFooterCTA from '../components/sections/PreFooterCTA';
import ServicesGrid from '../components/sections/ServicesGrid';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const CityPage = () => {
  const { slug } = useParams();
  const location = locations.find(l => l.slug === slug);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  useSEO(`Septic Services in ${location.name}, GA`, `Professional septic tank pumping and repair in ${location.name}, ${location.county}. Call Donaven's Septic & Plumbing today.`);

  return (
    <>
      <EmergencyCTABanner />
      <div className="bg-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Septic Services in {location.name}, GA</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted local septic and plumbing experts in {location.county}.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading font-bold text-3xl text-primary mb-6">Serving {location.name} Residents for Over 20 Years</h2>
          <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
            Donaven's Septic & Plumbing is proud to serve the {location.name} community. Whether you're in zip code {location.zipCodes.join(', ')} or nearby, our team is ready to assist with all your septic system needs. We understand the local soil conditions and regulations in {location.county}, ensuring your system is installed and maintained correctly.
          </p>
        </div>
      </div>

      <ServicesGrid />
      <TestimonialsSection />
      <PreFooterCTA />
    </>
  );
};

export default CityPage;
