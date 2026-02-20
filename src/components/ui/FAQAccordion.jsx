import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-heading font-bold text-primary text-lg pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-accent flex-shrink-0" />
        ) : (
          <ChevronDown className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 font-body leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQAccordion = ({ items }) => {
  return (
    <div className="bg-white rounded-card shadow-card p-6 md:p-8">
      {items.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
