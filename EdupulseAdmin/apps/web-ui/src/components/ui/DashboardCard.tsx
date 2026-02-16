import React from 'react';
import { motion } from 'framer-motion';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 4px rgba(66, 153, 225, 0.5)" }} // Subtle glow
      whileTap={{ scale: 0.98 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 ${className}`}
    >
      {icon && <div className="text-blue-500 dark:text-blue-400 mb-4">{icon}</div>}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-1">{title}</h3>
        {value && <p className="text-gray-600 dark:text-gray-300 text-3xl font-bold">{value}</p>}
      </div>
    </motion.div>
  );
};

export default DashboardCard;