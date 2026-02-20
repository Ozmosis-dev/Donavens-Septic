import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emy De La Cruz",
      location: "Local Customer",
      text: "We absolutely loved Donaven's service... Branten was wonderful! We needed additional repairs and he was great in providing us with the best advice and service. We HIGHLY RECOMMEND this company — they are knowledgeable, honest and very fast to respond.",
      rating: 5,
      date: "Google Review"
    },
    {
      name: "Melissa Carter",
      location: "Local Customer",
      text: "Donavens septic did a huge fantastic job for us. We had our entire septic system replaced... Donavan made sure it was all done and even put a little pressure on to get the county out here to inspect. This big job was done quickly and well.",
      rating: 5,
      date: "Google Review"
    },
    {
      name: "Faith Putman",
      location: "Local Customer",
      text: "I really appreciate Donovan's Septic! They have worked for my clients and my personal home and done a fantastic job, sometimes on the fly.",
      rating: 5,
      date: "Google Review"
    },
    {
      name: "Joshua Kang",
      location: "Local Customer",
      text: "Awesome Job on our field line and septic tank replacement/installation. Couldn't recommend a better company/crew.",
      rating: 5,
      date: "Google Review"
    },
    {
      name: "Jim Stansell",
      location: "Local Customer",
      text: "We just had them come out to pump ours and they were on time, did a fantastic job and explained everything thoroughly! Proud to recommend them!",
      rating: 5,
      date: "Google Review"
    },
    {
      name: "Andrew Clegg",
      location: "Local Customer",
      text: "Donavan is top notch. When you find someone trustworthy, you want to keep using them. I cannot be any happier with their service.",
      rating: 5,
      date: "Google Review"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gray-100 rounded-md px-3 py-1 mb-4">
            <span className="text-accent font-bold text-xs uppercase tracking-widest">Valued Customers</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            We Deliver Quality Results
          </h2>
          <p className="text-gray-600 font-body text-lg mb-6">
            Discover Why Our Clients Rave About Their Experience with Us
          </p>
          <div className="inline-flex items-center bg-green-50 text-green-800 px-4 py-2 rounded-full font-bold text-sm border border-green-200">
            EXCELLENT — 154 Reviews (Google)
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://www.google.com/search?q=Donaven%27s+Septic+%26+Plumbing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1">
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
