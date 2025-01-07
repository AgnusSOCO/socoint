import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Features } from './components/Features';
import { Brands } from './components/Brands';
import { Mission } from './components/Mission';
import { GlobalImpact } from './components/GlobalImpact';
import { InvestmentStrategy } from './components/InvestmentStrategy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Overview />
      <Features />
      <Brands />
      <Mission />
      <GlobalImpact />
      <InvestmentStrategy />
      <Contact />
      <Footer />
      <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
    </div>
  );
}

export default App;