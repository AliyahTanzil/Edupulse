import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar, NavItem, UserRole } from './Sidebar'; // Import NavItem and UserRole

export const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Sample navigation configuration
  const navigationConfig: NavItem[] = [
    { name: 'Dashboard', to: '/dashboard', roles: ['admin', 'editor', 'viewer'] },
    { name: 'Users', to: '/users', roles: ['admin'] },
    { name: 'Products', to: '/products', roles: ['admin', 'editor'] },
    { name: 'Settings', to: '/settings', roles: ['admin', 'viewer'] },
  ];

  // Sample user role (can be dynamic based on authentication)
  const userRole: UserRole = 'admin'; // For testing, hardcode 'admin'

  const sidebarVariants = {
    expanded: { width: '16rem' }, // w-64
    collapsed: { width: '4rem' },  // w-16
  };

  const pageTransitionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const transition = {
    duration: 0.3,
    ease: 'easeInOut', // Changed to string literal for compatibility
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-text dark:bg-background-dark dark:text-text-dark">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <motion.div
          initial={false}
          animate={isSidebarOpen ? 'expanded' : 'collapsed'}
          variants={sidebarVariants}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative h-full flex-shrink-0 border-r border-border dark:border-border-dark"
        >
          <Sidebar
            navigationConfig={navigationConfig}
            userRole={userRole}
            isExpanded={isSidebarOpen}
            onToggleExpand={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </motion.div>
        <main className="flex-1 overflow-y-auto p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransitionVariants}
              transition={transition as any} // Temporary workaround for Framer Motion type issue
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <Footer />
    </div>
  );
};
