import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="dashboard-card aspect-square animate-pulse flex flex-col items-center justify-center !mb-0">
      <div className="w-16 h-16 bg-gray-200 dark:bg-neutral-700 rounded-full mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
