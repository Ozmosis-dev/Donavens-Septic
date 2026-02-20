import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import HomeIntroSection from '../components/sections/HomeIntroSection';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import LocationsCTA from '../components/sections/LocationsCTA';
import PreFooterCTA from '../components/sections/PreFooterCTA';
import MidPageCTABanner from '../components/sections/MidPageCTABanner';
import EmergencyCTABanner from '../components/ui/EmergencyCTABanner';
import TrustBadgeStrip from '../components/ui/TrustBadgeStrip';
import { useSEO } from '../hooks/useSEO';

const HomePage = () => {
  useSEO("Septic Tank Pumping & Plumbing Services", "Donaven's Septic & Plumbing offers reliable septic tank pumping, installation, repair, and plumbing services in Covington, Conyers, and Monroe, GA.");

  return (
    <>
      <EmergencyCTABanner />
      <HeroSection />
      <TrustBadgeStrip />
      <HomeIntroSection />
      <ServicesGrid />
      <MidPageCTABanner />
      <WhyChooseUs />
      <TestimonialsSection />
      <LocationsCTA />
      <PreFooterCTA />
    </>
  );
};

export default HomePage;
