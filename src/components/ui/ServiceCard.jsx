import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

const ServiceCard = ({ service }) => {
  const IconComponent = Icons[service.icon] || Icons.Wrench;

  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-accent">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
        <IconComponent size={24} />
      </div>
      <h3 className="text-xl font-heading font-bold text-primary mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow font-body">{service.shortDescription}</p>
      <Link 
        to={`/services/${service.slug}`} 
        className="inline-flex items-center text-accent font-bold hover:text-accent-hover mt-auto group"
      >
        Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
