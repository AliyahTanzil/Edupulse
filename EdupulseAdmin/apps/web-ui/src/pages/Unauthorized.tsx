import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import RippleButton from '../components/ui/RippleButton';

const Unauthorized: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-background-dark p-4">
      <div className="max-w-md w-full dashboard-card !p-10 !mb-0 text-center space-y-8">
        <div className="flex justify-center">
          <div className="p-5 bg-danger/10 text-danger rounded-full animate-pulse">
            <ShieldAlert size={64} />
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-black text-text dark:text-text-dark">Access Denied</h1>
          <p className="text-textSecondary dark:text-gray-400">
            You do not have the required permissions to view this page. This area is reserved for Senior Management only.
          </p>
        </div>
        <div className="pt-4">
          <Link to="/dashboard">
            <RippleButton className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
              <ArrowLeft size={18} />
              <span>Back to Dashboard</span>
            </RippleButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
