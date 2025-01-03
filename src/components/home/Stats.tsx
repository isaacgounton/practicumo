import React from 'react';
import { Users, Building, Award, Briefcase } from 'lucide-react';

const stats = [
  { id: 1, name: 'Active Users', value: '50K+', icon: Users },
  { id: 2, name: 'Partner Companies', value: '1,000+', icon: Building },
  { id: 3, name: 'Success Rate', value: '94%', icon: Award },
  { id: 4, name: 'Internships Posted', value: '10K+', icon: Briefcase },
];

export const Stats = () => {
  return (
    <section className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-800 rounded-xl mb-4">
                  <Icon className="h-6 w-6 text-blue-200" />
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-blue-200">{stat.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};