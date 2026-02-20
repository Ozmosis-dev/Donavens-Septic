import React from 'react';
import { useSEO } from '../hooks/useSEO';
import EmergencyCTABanner from '../components/ui/EmergencyCTABanner';
import PreFooterCTA from '../components/sections/PreFooterCTA';
import TrustBadgeStrip from '../components/ui/TrustBadgeStrip';

const AboutPage = () => {
  useSEO("About Us", "Learn about Donaven's Septic & Plumbing, a family-owned business serving East Metro Atlanta since 2004.");

  return (
    <>
      <EmergencyCTABanner />
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-card shadow-card p-8 md:p-12">
            <div className="inline-block bg-gray-100 rounded-md px-3 py-1 mb-4">
              <span className="text-accent font-bold text-xs uppercase tracking-widest">Our Story</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-8">About Donaven's Septic & Plumbing</h1>
            
            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">A Three-Generation Legacy Built on Trust</h2>
            <div className="prose prose-lg text-gray-600 font-body mb-8">
              <p className="mb-6">
                Donaven Bruce was practically born into the septic industry. His journey began under the guidance of his grandparents, who owned a local septic company. At just 14, he took his first steps in the trade, learning from his grandfather. By 18, he expanded his knowledge working for a respected local plumbing company. In 2004, he took a leap and established Donaven's Septic and Plumbing.
              </p>
              <p className="mb-6">
                Today, Donaven and his wife Kara run daily operations. They are the proud parents of six children and have deep roots in the Covington community. The company is now a three-generation legacy built on hard work, honesty, and reliability.
              </p>
            </div>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">Meet the Team</h2>
            <p className="text-gray-600 font-body mb-8">
              Donaven and Kara Bruce are proud to call Covington, GA home. With six children and deep community roots, they understand the importance of reliable service for families in the area.
            </p>

            <h2 className="font-heading font-bold text-2xl text-primary mt-8 mb-4">Our Commitment</h2>
            <p className="text-gray-600 font-body mb-8">
              We built this company on showing up — on time, every time. Whether it's a routine pump-out or a late-night emergency, the job gets done right with honest pricing and real expertise.
            </p>

            <div className="mt-12">
              <TrustBadgeStrip />
            </div>
          </div>
        </div>
      </div>
      <PreFooterCTA />
    </>
  );
};

export default AboutPage;
