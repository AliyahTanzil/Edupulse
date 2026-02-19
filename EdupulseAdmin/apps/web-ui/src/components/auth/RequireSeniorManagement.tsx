import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireSeniorManagementProps {
  children: React.ReactNode;
}

const RequireSeniorManagement: React.FC<RequireSeniorManagementProps> = ({ children }) => {
  const role = localStorage.getItem('role');
  const location = useLocation();

  const allowedRoles = ['principal', 'vice_principal'];

  if (!role || !allowedRoles.includes(role)) {
    // Redirect them to the unauthorized page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // back to that page after they login, which is a nicer user experience.
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireSeniorManagement;
