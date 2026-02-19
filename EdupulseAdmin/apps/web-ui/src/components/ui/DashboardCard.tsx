import React from 'react';
import { motion } from 'framer-motion';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  valueClassName?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  value, 
  icon, 
  className,
  titleClassName = '',
  valueClassName = ''
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white dark:bg-neutral-800 rounded-2xl border border-border dark:border-border-dark shadow-sm p-3 flex flex-col items-center justify-center text-center
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50 transition-all group ${className}`}
    >
      {icon && <div className="text-primary dark:text-primary-dark mb-2 group-hover:scale-110 transition-transform duration-300">{icon}</div>}
      <div className="space-y-0.5">
        <h3 className={`text-[12px] font-bold text-gray-900 dark:text-white leading-tight ${titleClassName}`}>{title}</h3>
        {value && <p className={`text-gray-500 dark:text-gray-400 text-lg font-black ${valueClassName}`}>{value}</p>}
      </div>
    </motion.div>
  );
};

export default DashboardCard;