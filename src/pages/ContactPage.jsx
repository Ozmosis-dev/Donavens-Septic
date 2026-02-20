import React from 'react';
import { useSEO } from '../hooks/useSEO';
import EmergencyCTABanner from '../components/ui/EmergencyCTABanner';
import Button from '../components/ui/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  useSEO("Contact Us", "Contact Donaven's Septic & Plumbing for a free quote or emergency service. Serving Covington, Conyers, and Monroe, GA.");

  return (
    <>
      <EmergencyCTABanner />
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">Contact Us</h1>
            <p className="text-gray-600 font-body text-lg">
              Have a question or need to schedule service? We're here to help. Call us now or fill out the form below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="bg-white rounded-card shadow-card p-8 h-full">
              <h2 className="font-heading font-bold text-2xl text-primary mb-6">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary">Phone</h3>
                    <p className="text-gray-600 mb-1">24/7 Emergency Service Available</p>
                    <a href="tel:770-722-3264" className="text-xl font-bold text-accent hover:text-accent-hover">(770) 722-3264</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary">Service Area</h3>
                    <p className="text-gray-600">
                      Covington, GA<br />
                      Serving Newton, Rockdale, and Monroe Counties
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary">Business Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 9:00 AM - 2:00 PM</p>
                    <p className="text-accent font-bold mt-1">Emergency Service: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-card shadow-card p-8 h-full">
              <h2 className="font-heading font-bold text-2xl text-primary mb-6">Request a Free Quote</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent">
                    <option value="">Select a Service</option>
                    <option value="pumping">Septic Tank Pumping</option>
                    <option value="repair">Septic Repair</option>
                    <option value="installation">Septic Installation</option>
                    <option value="inspection">Septic Inspection</option>
                    <option value="plumbing">General Plumbing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" placeholder="Tell us about your issue..."></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Submit Request
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
