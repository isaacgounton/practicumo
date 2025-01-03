import React from 'react';
import { Button } from '../ui/Button';
import { Search, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="Students collaborating"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Launch Your Career with the Perfect Internship
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Connect with top companies, build your skills, and take the first step towards your dream career.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Find Internships <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                For Employers
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
              <div className="flex gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-white/10 rounded-md"></div>
                <div className="h-24 bg-white/10 rounded-md"></div>
                <div className="h-8 bg-white/10 rounded-md w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};