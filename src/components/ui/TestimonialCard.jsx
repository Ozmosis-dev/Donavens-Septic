import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, location, text, rating = 5, date }) => {
  return (
    <div className="bg-white rounded-card shadow-card p-6 border border-gray-100 h-full flex flex-col">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={`${i < rating ? 'text-accent fill-accent' : 'text-gray-300'} mr-1`} 
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6 font-body flex-grow">"{text}"</p>
      <div className="mt-auto">
        <p className="font-heading font-bold text-primary">{name}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{location}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
