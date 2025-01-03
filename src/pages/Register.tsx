import React from 'react';
import { AuthForm } from '@/components/auth/AuthForm';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/lib/hooks/useAuth';

export const RegisterPage: React.FC = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthForm type="register" />
    </div>
  );
};