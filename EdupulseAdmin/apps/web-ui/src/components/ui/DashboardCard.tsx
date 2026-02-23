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
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`relative group rounded-2xl p-6 bg-white dark:bg-slate-800 border border-blue-100/50 dark:border-blue-900/30 
                  shadow-lg dark:shadow-slate-900/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20
                  transition-all duration-300 overflow-hidden
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${className}`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
        {icon && (
          <motion.div 
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-blue-500 dark:text-blue-400 mb-4 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300 shrink-0"
          >
            {icon}
          </motion.div>
        )}
        <div className="space-y-2 w-full overflow-hidden">
          <h3 className={`text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight truncate px-2 uppercase tracking-wider ${titleClassName}`}>
            {title}
          </h3>
          {value && (
            <p className={`text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent truncate ${valueClassName}`}>
              {value}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;