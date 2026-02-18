import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const appVersion = '1.0.0'; // Placeholder for actual app version

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full p-4 border-t border-border dark:border-border-dark bg-card dark:bg-card-dark
                 text-text-secondary dark:text-text-secondary-dark text-sm
                 flex justify-between items-center flex-wrap"
    >
      <div className="text-left w-full sm:w-auto">
        &copy; {currentYear} Edupulse. All rights reserved.
      </div>
      <div className="text-right w-full sm:w-auto mt-2 sm:mt-0">
        Version {appVersion}
      </div>
    </motion.footer>
  );
};
