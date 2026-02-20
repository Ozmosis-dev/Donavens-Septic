import React from 'react';
import CityCard from '../ui/CityCard';
import { locations } from '../../data/locations';
import Button from '../ui/Button';

const LocationsCTA = () => {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Serving East Metro Atlanta
            </h2>
            <p className="text-gray-300 font-body text-lg">
              Covering Newton, Rockdale, and Monroe Counties. Find your city below.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button to="/locations" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              See All Service Areas →
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <CityCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsCTA;
