import React from 'react';
import { Brain, Activity, Building, Shield, Stethoscope, ArrowRight } from 'lucide-react';

interface BrandProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  color: string;
  iconColor: string;
}

function Brand({ icon, name, description, color, iconColor }: BrandProps) {
  return (
    <div className={`rounded-2xl p-8 transition-all hover:scale-[1.02] ${color}`}>
      <div className={`${iconColor} w-12 h-12 mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-semibold">
        Learn more <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
}

export function Brands() {
  return (
    <section id="brands" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Brands</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Leading innovation across multiple industries, our diverse portfolio of brands 
          delivers cutting-edge solutions in technology, healthcare, and lifestyle sectors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Brand
            icon={<Brain />}
            name="SOCO PWA"
            description="Pioneering AI solutions and cutting-edge software development. Transforming businesses through innovative fintech solutions."
            color="bg-blue-50 hover:bg-blue-100"
            iconColor="text-blue-600"
          />
          <Brand
            icon={<Activity />}
            name="AGNUS ICU VENTILATOR"
            description="Revolutionary medical ventilator technology advancing patient care and critical medical solutions."
            color="bg-emerald-50 hover:bg-emerald-100"
            iconColor="text-emerald-600"
          />
          <Brand
            icon={<Building />}
            name="Luxury Stays Club"
            description="Exclusive property management and interior design services creating unforgettable luxury experiences."
            color="bg-amber-50 hover:bg-amber-100"
            iconColor="text-amber-600"
          />
          <Brand
            icon={<Shield />}
            name="Tobb"
            description="Advanced cybersecurity solutions and innovative fintech products protecting digital assets."
            color="bg-red-50 hover:bg-red-100"
            iconColor="text-red-600"
          />
          <Brand
            icon={<Stethoscope />}
            name="Skinity"
            description="Premium dermatology services in Mexico City, combining expertise with cutting-edge treatments."
            color="bg-purple-50 hover:bg-purple-100"
            iconColor="text-purple-600"
          />
        </div>
      </div>
    </section>
  );
}