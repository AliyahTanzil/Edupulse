import React from 'react';

interface ContentWrapperProps {
  children: React.ReactNode;
  className?: string;
  grid?: boolean; // Optional prop to enable grid helper
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children, className, grid = false }) => {
  const gridClasses = grid ? 'grid gap-4 sm:gap-6 lg:gap-8' : ''; // Example grid classes

  return (
    <div
      className={`w-full px-4 sm:px-6 lg:px-8 py-6 ${gridClasses} ${className || ''} overflow-hidden`}
    >
      {children}
    </div>
  );
};
