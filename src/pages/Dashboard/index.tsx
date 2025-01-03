import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '@/lib/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { DashboardLayout } from './DashboardLayout';
import { DashboardOverview } from './DashboardOverview';
import { JobBoard } from './JobBoard';
import { ResumeEditor } from './ResumeEditor';

export const DashboardPage: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<DashboardOverview />} />
        <Route path="jobs" element={<JobBoard />} />
        <Route path="resume" element={<ResumeEditor />} />
      </Routes>
    </DashboardLayout>
  );
};