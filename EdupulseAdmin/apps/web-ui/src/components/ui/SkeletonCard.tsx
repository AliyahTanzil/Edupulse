import React from 'react';
import { motion } from 'framer-motion';

const SkeletonCard: React.FC = () => {
  return (
    <motion.div 
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 
                 border border-blue-100/50 dark:border-blue-900/30 flex flex-col items-center justify-center min-h-40 shadow-lg"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full mb-4 animate-pulse"></div>
      <div className="h-4 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full w-3/4 mb-3"></div>
      <div className="h-3 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full w-1/2"></div>
    </motion.div>
  );
};

export default SkeletonCard;
