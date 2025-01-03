import React from 'react';
import { JobCard } from './JobCard';
import type { JobListing } from '@/types';

// Mock data - replace with actual API call
const mockJobs: JobListing[] = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    salary: '$40-50k',
    description: 'Exciting opportunity for a frontend developer intern...',
    requirements: ['React', 'TypeScript', 'HTML/CSS'],
    type: 'hybrid',
    source: {
      name: 'LinkedIn',
      url: 'https://linkedin.com/jobs/1',
      logo: '/images/linkedin-logo.png'
    },
    postedAt: new Date('2024-03-15')
  },
  {
    id: '2',
    title: 'Software Engineering Intern',
    company: 'StartupX',
    location: 'Remote',
    salary: '$45-55k',
    description: 'Join our fast-paced engineering team...',
    requirements: ['JavaScript', 'Node.js', 'AWS'],
    type: 'remote',
    source: {
      name: 'Indeed',
      url: 'https://indeed.com/jobs/2',
      logo: '/images/indeed-logo.png'
    },
    postedAt: new Date('2024-03-14')
  }
];

export const JobBoard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Job Board</h1>
        <div className="flex gap-4">
          <select
            aria-label="Filter by location"
            className="rounded-md border-gray-300 shadow-sm"
          >
            <option>All Locations</option>
            <option>Remote Only</option>
            <option>Onsite Only</option>
            <option>Hybrid</option>
          </select>
          <select
            aria-label="Filter by source"
            className="rounded-md border-gray-300 shadow-sm"
          >
            <option>All Sources</option>
            <option>LinkedIn</option>
            <option>Indeed</option>
            <option>GlassDoor</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {mockJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};
