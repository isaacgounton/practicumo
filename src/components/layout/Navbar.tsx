import React from 'react';
import { Bell, Menu, LogOut } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '@/lib/hooks/useAuth';
import { signOut } from '@/lib/firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center cursor-pointer" onClick={() => navigate('/')}>
              <span className="text-2xl font-bold text-blue-600">Practicumo</span>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            {user ? (
              <>
                <Button variant="outline" onClick={() => navigate('/dashboard')}>Dashboard</Button>
                <div className="relative ml-3">
                  <Button variant="outline" className="p-2">
                    <Bell className="h-5 w-5" />
                  </Button>
                </div>
                <Button variant="outline" onClick={handleAuthAction}>
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Button variant="primary" onClick={handleAuthAction}>Sign In</Button>
            )}
          </div>
          
          <div className="flex items-center sm:hidden">
            <Button variant="outline" className="p-2">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};