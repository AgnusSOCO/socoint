import React from 'react';
import { Globe, Building2, Lightbulb, Users } from 'lucide-react';

interface RegionCardProps {
  region: string;
  description: string;
  metrics: {
    companies: number;
    employees: string;
    investment: string;
  };
  image: string;
}

function RegionCard({ region, description, metrics, image }: RegionCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={region} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20" />
      </div>
      
      <div className="relative p-8 h-full flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-2">{region}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-blue-400 font-bold">{metrics.companies}</div>
            <div className="text-sm text-gray-300">Companies</div>
          </div>
          <div>
            <div className="text-blue-400 font-bold">{metrics.employees}</div>
            <div className="text-sm text-gray-300">Employees</div>
          </div>
          <div>
            <div className="text-blue-400 font-bold">{metrics.investment}</div>
            <div className="text-sm text-gray-300">Investment</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GlobalImpact() {
  return (
    <section id="global-impact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving innovation and growth across key markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RegionCard
            region="United States"
            description="Leading technological innovation and healthcare advancement through strategic investments in Silicon Valley and major tech hubs."
            metrics={{
              companies: 3,
              employees: "500+",
              investment: "$30M+"
            }}
            image="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80"
          />
          <RegionCard
            region="Mexico"
            description="Pioneering healthcare solutions and digital transformation initiatives across major metropolitan areas."
            metrics={{
              companies: 2,
              employees: "200+",
              investment: "$20M+"
            }}
            image="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80"
          />
        </div>
      </div>
    </section>
  );
}