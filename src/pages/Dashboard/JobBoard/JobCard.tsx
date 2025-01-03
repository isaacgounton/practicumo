import React from 'react';
import { FileText, MapPin, Building, Calendar, ExternalLink } from 'lucide-react';
import type { JobListing } from '@/types';

interface JobCardProps {
  job: JobListing;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const handleGenerateCV = () => {
    // TODO: Implement CV generation
    console.log('Generating CV for:', job.title);
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Building className="w-4 h-4 mr-1" />
              {job.company}
            </span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(job.postedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <img 
          src={job.source.logo} 
          alt={`${job.source.name} logo`} 
          className="w-8 h-8 object-contain"
        />
      </div>

      <div className="mt-4">
        <p className="text-gray-600">{job.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.requirements.map((req) => (
          <span
            key={req}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
          >
            {req}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-4">
          <button
            onClick={handleGenerateCV}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            <FileText className="w-4 h-4 mr-2" />
            Generate CV
          </button>
          <a
            href={job.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Apply on {job.source.name}
          </a>
        </div>
        {job.salary && (
          <span className="text-sm font-medium text-gray-600">
            {job.salary}
          </span>
        )}
      </div>
    </div>
  );
};
