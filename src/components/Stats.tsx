import React from 'react';
import { Users, Rocket, BarChart } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

function Stat({ icon, number, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-blue-600 w-12 h-12 mx-auto mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Stat icon={<Users />} number="2000+" label="Global Clients" />
          <Stat icon={<Rocket />} number="5" label="Innovative Brands" />
          <Stat icon={<BarChart />} number="15+" label="Years Experience" />
        </div>
      </div>
    </section>
  );
}