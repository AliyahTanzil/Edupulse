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
      whileTap={{ scale: 0.98 }}
      className={`dashboard-card flex flex-col items-center justify-center text-center
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50 group ${className}`}
    >
      {icon && <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 shrink-0">{icon}</div>}
      <div className="space-y-1 w-full overflow-hidden">
        <h3 className={`text-sm font-black text-gray-900 leading-tight truncate px-2 ${titleClassName}`}>{title}</h3>
        {value && <p className={`text-gray-500 text-lg font-black truncate ${valueClassName}`}>{value}</p>}
      </div>
    </motion.div>
  );
};

export default DashboardCard;