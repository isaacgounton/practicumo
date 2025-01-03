import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { FeaturedInternships } from '@/components/home/FeaturedInternships';
import { Testimonials } from '@/components/home/Testimonials';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <FeaturedInternships />
      <Testimonials />
    </div>
  );
};