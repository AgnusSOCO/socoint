import React from 'react';
import { Globe2 } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
        alt="Modern office"
        className="absolute w-full h-full object-cover"
      />
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Globe2 className="w-20 h-20 mb-8 text-white" />
            <h1 className="text-7xl font-bold mb-6 text-white">SOCO INT</h1>
            <p className="text-3xl text-white font-light tracking-wide mb-8">Pioneering Innovation Across Borders</p>
            <button onClick={() => scrollToSection('brands')} className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Discover Our Brands
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}