import React from 'react';
import { Users, Clock, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Three Generations of Experience",
      description: "Donaven grew up in the trade. This isn't just a job — it's a family legacy built on quality workmanship."
    },
    {
      icon: Clock,
      title: "We Show Up",
      description: "Day, night, weekends, and holidays. Fast response to every call, every time."
    },
    {
      icon: DollarSign,
      title: "Honest Pricing",
      description: "No surprise invoices. We explain everything clearly before any work begins."
    }
  ];

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Why Choose Donaven's
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-card shadow-card border-t-4 border-accent flex flex-col items-center text-center h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-primary/5 p-4 rounded-full mb-6 text-accent">
                <feature.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-600 font-body leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
