import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Settings, Package, Users, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const sidebarVariants = {
  expanded: { width: 256, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  collapsed: { width: 80, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

const mobileSidebarVariants = {
  hidden: { x: '-100%', transition: { type: 'spring', stiffness: 100, damping: 20 } },
  visible: { x: '0%', transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
  const location = useLocation();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Close mobile sidebar on route change
  useEffect(() => {
    if (isMobileOpen) {
      setIsMobileOpen(false);
    }
  }, [location.pathname]); // Only trigger on path change

  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Products', icon: Package, path: '/products' },
    { name: 'Users', icon: Users, path: '/users' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Sidebar Toggle Button (visible on mobile, hidden on desktop) */}
      {/* Moved to MainLayout to manage mobile sidebar state, leaving this for clarity during development */}
      {/*
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-md bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-300"
        >
          {isMobileOpen ? <X size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>
      */}

      {/* Desktop and Mobile Sidebar */}
      <motion.div
        variants={window.innerWidth < 768 ? mobileSidebarVariants : sidebarVariants}
        initial={window.innerWidth < 768 ? "hidden" : "expanded"}
        animate={window.innerWidth < 768 ? (isMobileOpen ? "visible" : "hidden") : (isCollapsed ? "collapsed" : "expanded")}
        className="bg-white dark:bg-gray-800 shadow-lg h-full fixed top-0 left-0 z-40 overflow-y-auto
                   md:block pt-16" // Adjusted pt-16 for header height
      >
        {/* Toggle Button for Desktop Sidebar */}
        <div className="hidden md:flex justify-end p-4">
          <button
            onClick={toggleCollapse}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05, // Stagger children for smooth reveal
              },
            },
          }}
          className="flex flex-col p-4 space-y-2"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded-md transition-colors duration-200
                              ${isActive
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                              }
                              ${isCollapsed ? 'justify-center' : ''}`}
                >
                  <Icon size={20} />
                  {!isCollapsed && <span className="ml-3">{item.name}</span>}
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>
      </motion.div>
    </>
  );
};

export default Sidebar;
