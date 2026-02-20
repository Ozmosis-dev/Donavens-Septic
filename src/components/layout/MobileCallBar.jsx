import React from 'react';
import { Phone } from 'lucide-react';

const MobileCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 md:hidden p-3 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Need Help?</span>
        <span className="text-sm font-heading font-bold text-primary">24/7 Emergency Service</span>
      </div>
      <a 
        href="tel:770-722-3264" 
        className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-6 rounded-full flex items-center shadow-lg transition-transform active:scale-95"
      >
        <Phone size={18} className="mr-2 fill-current" />
        Call Now
      </a>
    </div>
  );
};

export default MobileCallBar;
