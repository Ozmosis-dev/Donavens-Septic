import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileCallBar from './components/layout/MobileCallBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import LocationsPage from './pages/LocationsPage';
import CityPage from './pages/CityPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-body text-text-dark antialiased bg-white selection:bg-accent selection:text-white">
      <Header />
      <main className="flex-grow pt-[96px] md:pt-[152px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:slug" element={<CityPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}

export default App;
