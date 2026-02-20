import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const CityCard = ({ location }) => {
  return (
    <Link 
      to={`/locations/${location.slug}`}
      className="block bg-white rounded-card shadow-card p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-accent group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-100 p-2 rounded-full text-gray-500 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
            <MapPin size={20} />
          </div>
          <div>
            <h3 className="font-heading font-bold text-primary text-lg group-hover:text-accent transition-colors">
              {location.name}
            </h3>
            <p className="text-sm text-gray-500 font-body">{location.county}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CityCard;
