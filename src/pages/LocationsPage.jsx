import React from 'react';
import { useSEO } from '../hooks/useSEO';
import CityCard from '../components/ui/CityCard';
import { locations } from '../data/locations';
import EmergencyCTABanner from '../components/ui/EmergencyCTABanner';
import PreFooterCTA from '../components/sections/PreFooterCTA';

const LocationsPage = () => {
  useSEO("Service Areas", "We proudly serve Covington, Conyers, Monroe, and surrounding areas in East Metro Atlanta.");

  return (
    <>
      <EmergencyCTABanner />
      <div className="bg-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Service Areas</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Providing top-quality septic and plumbing services to our local communities.
          </p>
        </div>
      </div>

      <div className="bg-gray-light py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <CityCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </div>
      <PreFooterCTA />
    </>
  );
};

export default LocationsPage;
