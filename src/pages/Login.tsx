import React from 'react';
import { AuthForm } from '@/components/auth/AuthForm';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/lib/hooks/useAuth';

export const LoginPage: React.FC = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <AuthForm type="login" />;
};