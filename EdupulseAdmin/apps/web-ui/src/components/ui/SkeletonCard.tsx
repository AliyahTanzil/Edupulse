import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md p-6 aspect-square animate-pulse flex flex-col items-center justify-center">
      <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
