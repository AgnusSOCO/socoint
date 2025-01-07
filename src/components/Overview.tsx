import React from 'react';
import { Building2, Briefcase, Globe2, TrendingUp } from 'lucide-react';

interface MetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
}

function Metric({ icon, value, label, sublabel }: MetricProps) {
  return (
    <div className="relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 transform group-hover:scale-95 transition-all duration-300" />
      <div className="relative p-8 flex flex-col items-center text-center">
        <div className="text-blue-600 w-12 h-12 mb-4">{icon}</div>
        <div className="text-4xl font-bold mb-2">{value}</div>
        <div className="text-gray-900 font-semibold mb-1">{label}</div>
        <div className="text-gray-600 text-sm">{sublabel}</div>
      </div>
    </div>
  );
}

export function Overview() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Company Overview</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          A diversified holding company investing in innovative technologies and solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Metric
            icon={<Building2 />}
            value="5"
            label="Portfolio Companies"
            sublabel="Across technology and healthcare sectors"
          />
          <Metric
            icon={<Briefcase />}
            value="$50M+"
            label="Investment Portfolio"
            sublabel="Strategic holdings and investments"
          />
          <Metric
            icon={<Globe2 />}
            value="2"
            label="Key Markets"
            sublabel="United States and Mexico presence"
          />
          <Metric
            icon={<TrendingUp />}
            value="15+"
            label="Years Experience"
            sublabel="In strategic investments and growth"
          />
        </div>
      </div>
    </section>
  );
}