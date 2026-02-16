import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext'; // Import useTheme hook

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use the theme context

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }
        ${theme === 'dark' ? 'dark' : ''} // Apply dark mode class based on context
      `}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white">Edupulse</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Analytics</a>
          {/* Dropdown example - simplified */}
          <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 focus:outline-none">
              Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Product 1</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Product 2</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Product 3</a>
            </motion.div>
          </div>
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Settings</a>
        </div>

        {/* Right-side elements */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light Mode Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {theme === 'dark' ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-gray-800" />}
          </button>

          {/* Mobile Menu Toggle (Hamburger) */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-md pb-4"
          >
            <div className="flex flex-col items-center space-y-4 pt-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Analytics</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Settings</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;