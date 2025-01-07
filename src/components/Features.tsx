import React from 'react';
import { Zap, Globe, Shield, Cpu } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 transform group-hover:scale-95 transition-transform duration-300" />
      <div className="relative z-10">
        <div className="text-blue-600 w-12 h-12 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose SOCO INT</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with innovative solutions to deliver exceptional results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Zap />}
            title="Fast Innovation"
            description="Rapid development and deployment of cutting-edge solutions across industries"
          />
          <FeatureCard
            icon={<Globe />}
            title="Global Reach"
            description="Operating across borders with a focus on US and Mexican markets"
          />
          <FeatureCard
            icon={<Shield />}
            title="Enterprise Security"
            description="Top-tier security measures protecting sensitive data and operations"
          />
          <FeatureCard
            icon={<Cpu />}
            title="Advanced Tech"
            description="Leveraging the latest technologies for optimal performance"
          />
        </div>
      </div>
    </section>
  );
}