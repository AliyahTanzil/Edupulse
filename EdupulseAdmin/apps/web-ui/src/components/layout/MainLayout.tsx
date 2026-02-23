import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar, NavItem, UserRole } from './Sidebar';

export const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Sample navigation configuration
  const navigationConfig: NavItem[] = [
    { name: 'Dashboard', to: '/dashboard', roles: ['admin', 'editor', 'viewer', 'principal', 'vice_principal'] },
    { name: 'Users', to: '/users', roles: ['admin'] },
    { name: 'Products', to: '/products', roles: ['admin', 'editor'] },
    { name: 'Settings', to: '/settings', roles: ['admin', 'viewer', 'principal'] },
  ];

  // Read user role from localStorage, fallback to 'viewer' if not set
  const userRole = (localStorage.getItem('role') as UserRole) || 'viewer';

  const sidebarVariants = {
    expanded: { width: '16rem' },
    collapsed: { width: '5rem' },
  };

  const pageTransitionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const transition = {
    duration: 0.3,
    ease: 'easeInOut',
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <motion.div
          initial={false}
          animate={isSidebarOpen ? 'expanded' : 'collapsed'}
          variants={sidebarVariants}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative h-full flex-shrink-0"
        >
          <Sidebar
            navigationConfig={navigationConfig}
            userRole={userRole}
            isExpanded={isSidebarOpen}
            onToggleExpand={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </motion.div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransitionVariants}
              transition={transition as any}
              className="h-full w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
