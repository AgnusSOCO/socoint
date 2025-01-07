import React from 'react';
import { Lightbulb, Users, BarChart3, Globe2 } from 'lucide-react';

interface StrategyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function StrategyCard({ icon, title, description }: StrategyCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
        <div className="text-blue-600 w-12 h-12 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function InvestmentStrategy() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Investment Strategy</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Our approach to building and managing successful companies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StrategyCard
            icon={<Lightbulb />}
            title="Innovation Focus"
            description="Identifying and investing in breakthrough technologies and solutions"
          />
          <StrategyCard
            icon={<Users />}
            title="Strong Leadership"
            description="Partnering with exceptional management teams to drive growth"
          />
          <StrategyCard
            icon={<BarChart3 />}
            title="Value Creation"
            description="Strategic guidance and resources to accelerate company growth"
          />
          <StrategyCard
            icon={<Globe2 />}
            title="Market Expansion"
            description="Supporting international growth across the US and Mexican markets"
          />
        </div>
      </div>
    </section>
  );
}