import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { services } from '../data/services';
import EmergencyCTABanner from '../components/ui/EmergencyCTABanner';
import PreFooterCTA from '../components/sections/PreFooterCTA';
import Button from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  useSEO(service.title, service.shortDescription);

  return (
    <>
      <EmergencyCTABanner />
      <div className="bg-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">{service.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="font-heading font-bold text-3xl text-primary mb-6">Overview</h2>
              <p className="text-gray-600 font-body text-lg mb-8 leading-relaxed">
                {service.fullDescription}
              </p>
              
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">Why Choose Us for {service.title}?</h3>
              <ul className="space-y-4 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Professional and experienced technicians dedicated to quality work.</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 font-body text-lg mb-8">
                We understand the importance of a properly functioning septic system. Our team uses the latest equipment and techniques to ensure the job is done right the first time.
              </p>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-8 rounded-card border border-gray-200 sticky top-24">
                <h3 className="font-heading font-bold text-2xl text-primary mb-4">Get a Free Quote</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to schedule your {service.title.toLowerCase()} service.
                </p>
                <Button to="/contact" variant="primary" className="w-full mb-4">
                  Schedule Now
                </Button>
                <Button to="tel:770-722-3264" variant="outline" className="w-full">
                  Call (770) 722-3264
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PreFooterCTA />
    </>
  );
};

export default ServiceDetailPage;
