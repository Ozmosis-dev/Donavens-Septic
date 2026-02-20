import React from 'react';
import { ShieldCheck, Calendar, Home, Zap, MapPin } from 'lucide-react';

const TrustBadgeStrip = () => {
  const badges = [
    { icon: ShieldCheck, text: "Licensed & Insured" },
    { icon: Calendar, text: "Serving Since 2004" },
    { icon: Home, text: "Locally Owned & Operated" },
    { icon: Zap, text: "Emergency Service Available" },
    { icon: MapPin, text: "Newton, Rockdale & Monroe Counties" },
  ];

  return (
    <div className="bg-off-white py-8 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="bg-accent-light/20 p-3 rounded-card mb-3 text-accent-hover group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <badge.icon size={28} strokeWidth={2} />
              </div>
              <span className="font-heading font-bold text-primary text-xs md:text-sm uppercase tracking-wide leading-tight">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadgeStrip;
