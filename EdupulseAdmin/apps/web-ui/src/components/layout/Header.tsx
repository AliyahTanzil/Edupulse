import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { Search, Bell, User, Menu, Sun, Moon } from 'lucide-react'; // Assuming lucide-react is installed

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const headerVariants = {
    scrolled: {
      backgroundColor: 'rgba(var(--color-background), 0.8)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(var(--color-border), 0.7)',
    },
    notScrolled: {
      backgroundColor: 'rgba(var(--color-background), 0)',
      backdropFilter: 'blur(0px)',
      borderBottom: '1px solid rgba(var(--color-border), 0)',
    },
  };

  return (
    <motion.header
      initial="notScrolled"
      animate={scrolled ? 'scrolled' : 'notScrolled'}
      variants={headerVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="sticky top-0 z-50 w-full px-4 py-3 flex items-center justify-between
                 text-text dark:text-text-dark"
    >
      {/* Left section: Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {/* <Menu className="w-6 h-6" /> */}
          <span className="w-6 h-6 flex flex-col justify-around">
            <span className="block h-0.5 w-full bg-text dark:bg-text-dark"></span>
            <span className="block h-0.5 w-full bg-text dark:bg-text-dark"></span>
            <span className="block h-0.5 w-full bg-text dark:bg-text-dark"></span>
          </span>
        </button>
      </div>

      {/* Center section: Search Input */}
      <div className="flex-1 max-w-lg mx-4 max-md:hidden">
        <div className="relative">
          {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" /> */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800
                       border border-border dark:border-border-dark focus:outline-none focus:ring-2
                       focus:ring-primary dark:focus:ring-primary-dark transition-all"
          />
        </div>
      </div>

      {/* Right section: Icons, Profile, Dark/Light Toggle */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <div className="relative">
          <button
            className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Notifications"
          >
            {/* <Bell className="w-6 h-6" /> */}
            <span className="w-6 h-6 bg-neutral-400 dark:bg-neutral-500 rounded-full flex items-center justify-center text-white">!</span>
          </button>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            3
          </span>
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-haspopup="true"
            aria-expanded={isProfileDropdownOpen}
            aria-label="User profile menu"
          >
            <span className="w-8 h-8 rounded-full bg-neutral-300 dark:bg-neutral-600 flex items-center justify-center text-sm font-semibold">
              JD
            </span>
            {/* <User className="w-6 h-6" /> */}
          </button>
          {isProfileDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1 }}
              className="absolute right-0 mt-2 w-48 bg-card dark:bg-card-dark rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex={-1}
            >
              <a href="#" className="block px-4 py-2 text-sm text-text dark:text-text-dark hover:bg-neutral-100 dark:hover:bg-neutral-700" role="menuitem" tabIndex={-1}>
                Your Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-text dark:text-text-dark hover:bg-neutral-100 dark:hover:bg-neutral-700" role="menuitem" tabIndex={-1}>
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-danger dark:text-danger hover:bg-neutral-100 dark:hover:bg-neutral-700" role="menuitem" tabIndex={-1}>
                Sign out
              </a>
            </motion.div>
          )}
        </div>

        {/* Dark/Light Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {/* <Sun className="w-6 h-6 hidden dark:block" /> */}
          {/* <Moon className="w-6 h-6 dark:hidden" /> */}
          <span className="w-6 h-6 flex items-center justify-center text-text dark:text-text-dark">🔆/🌙</span>
        </button>
      </div>

      {/* Mobile Menu Overlay/Drawer (when isMobileMenuOpen is true) - rudimentary */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-background dark:bg-background-dark z-40 flex flex-col items-center justify-center">
          {/* Add actual mobile menu content here, likely re-using sidebar navigation or a simplified version */}
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 p-2 text-text dark:text-text-dark">
                Close
          </button>
          <h2 className="text-2xl font-bold mb-8">Mobile Menu</h2>
          {/* Placeholder for mobile navigation */}
          <nav>
            <ul className="space-y-4 text-center">
              <li><a href="#" className="text-xl text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-dark">Dashboard</a></li>
              <li><a href="#" className="text-xl text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-dark">Users</a></li>
              <li><a href="#" className="text-xl text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-dark">Settings</a></li>
            </ul>
          </nav>
        </div>
      )}
    </motion.header>
  );
};
