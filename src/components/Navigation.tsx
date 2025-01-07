import React, { useState, useEffect } from 'react';
import { Globe2, Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled && !isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Globe2 className={`w-8 h-8 ${isScrolled && !isMenuOpen ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled && !isMenuOpen ? 'text-gray-900' : 'text-white'}`}>
              SOCO INT
            </span>
          </div>

          <div className="hidden md:flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`px-4 py-2 rounded-full border ${
                isScrolled && !isMenuOpen
                  ? 'border-gray-200 text-gray-600 hover:bg-gray-50' 
                  : 'border-white/20 text-white hover:bg-white/10'
              } transition-colors`}
            >
              Menu
            </button>
          </div>

          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen 
              ? <X className={`w-6 h-6 ${isScrolled && !isMenuOpen ? 'text-gray-900' : 'text-white'}`} /> 
              : <Menu className={`w-6 h-6 ${isScrolled && !isMenuOpen ? 'text-gray-900' : 'text-white'}`} />
            }
          </button>
        </div>
      </div>

      {/* Full-screen menu overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Close button */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="space-y-8 text-center">
            <button 
              onClick={() => { scrollToSection('brands'); setIsMenuOpen(false); }}
              className="block text-3xl font-light text-white hover:text-blue-400 transition-colors"
            >
              Brands
            </button>
            <button 
              onClick={() => { scrollToSection('mission'); setIsMenuOpen(false); }}
              className="block text-3xl font-light text-white hover:text-blue-400 transition-colors"
            >
              Mission
            </button>
            <button 
              onClick={() => { scrollToSection('global-impact'); setIsMenuOpen(false); }}
              className="block text-3xl font-light text-white hover:text-blue-400 transition-colors"
            >
              Global Impact
            </button>
            <button 
              onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
              className="block text-3xl font-light text-white hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}