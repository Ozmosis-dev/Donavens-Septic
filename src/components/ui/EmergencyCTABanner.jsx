import React from 'react';
import { PhoneCall, AlertTriangle } from 'lucide-react';
import Button from './Button';

const EmergencyCTABanner = () => {
  return (
    <div className="bg-primary-dark text-white py-4 px-4 shadow-md border-b-4 border-accent relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
        <AlertTriangle size={200} />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-accent p-2 rounded-full mr-4 animate-pulse">
            <AlertTriangle className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg md:text-xl">Emergency Septic Service Available 24/7</h3>
            <p className="text-gray-300 text-sm md:text-base">Don't wait for a backup to become a disaster.</p>
          </div>
        </div>
        <div className="flex items-center">
          <Button to="tel:770-722-3264" variant="primary" className="whitespace-nowrap">
            <PhoneCall className="mr-2" size={18} />
            (770) 722-3264
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCTABanner;
