import React from 'react';
import { TrendingUp, Award, Target } from 'lucide-react';

interface PortfolioStatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

function PortfolioStat({ icon, value, label, description }: PortfolioStatProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="text-blue-600 w-12 h-12 mb-4">{icon}</div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="font-semibold text-gray-900 mb-2">{label}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Portfolio() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Portfolio Overview</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          SOCO INT manages a diverse portfolio of innovative companies across multiple sectors
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PortfolioStat
            icon={<TrendingUp />}
            value="$50M+"
            label="Assets Under Management"
            description="Strategic investments in high-growth technology and healthcare sectors"
          />
          <PortfolioStat
            icon={<Award />}
            value="5"
            label="Industry-Leading Brands"
            description="Portfolio companies pioneering innovation in their respective markets"
          />
          <PortfolioStat
            icon={<Target />}
            value="2"
            label="Key Markets"
            description="Strategic presence in the United States and Mexico"
          />
        </div>
      </div>
    </section>
  );
}