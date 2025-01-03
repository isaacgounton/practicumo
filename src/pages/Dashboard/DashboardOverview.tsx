import React from 'react';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const applications = [
  { id: 1, company: 'Google', position: 'Software Engineer Intern', status: 'pending', date: '2024-03-15' },
  { id: 2, company: 'Microsoft', position: 'Product Manager Intern', status: 'accepted', date: '2024-03-10' },
  { id: 3, company: 'Amazon', position: 'UX Designer Intern', status: 'rejected', date: '2024-03-05' },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pending':
      return <Clock className="h-5 w-5 text-yellow-500" />;
    case 'accepted':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'rejected':
      return <XCircle className="h-5 w-5 text-red-500" />;
    default:
      return <AlertCircle className="h-5 w-5 text-gray-500" />;
  }
};

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-blue-600 text-sm font-medium">Total Applications</div>
            <div className="mt-2 text-3xl font-semibold text-blue-900">12</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="text-green-600 text-sm font-medium">Interviews Scheduled</div>
            <div className="mt-2 text-3xl font-semibold text-green-900">3</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="text-purple-600 text-sm font-medium">Saved Jobs</div>
            <div className="mt-2 text-3xl font-semibold text-purple-900">8</div>
          </div>
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Applications</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((application) => (
                <tr key={application.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{application.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      {getStatusIcon(application.status)}
                      <span className="ml-2 capitalize">{application.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};