import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, User, Menu, Sun, Moon, X, Settings, LogOut, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full px-4 py-2.5 transition-all duration-300 flex items-center justify-between
                 ${scrolled 
                   ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border-b border-border dark:border-border-dark shadow-sm' 
                   : 'bg-white dark:bg-neutral-900 border-b border-border dark:border-border-dark'}`}
    >
      {/* Left: Logo & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <Menu size={20} />
        </button>
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
            <Layout size={20} />
          </div>
          <span className="text-lg font-bold tracking-tight hidden sm:block">EduPulse <span className="text-primary">Admin</span></span>
        </Link>
      </div>

      {/* Center: Minimized Search Bar */}
      <div className="flex-1 max-w-[240px] px-4 hidden md:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-full bg-gray-100 dark:bg-neutral-800
                       border border-transparent focus:bg-white dark:focus:bg-neutral-900
                       focus:border-primary/30 outline-none transition-all"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all text-gray-500 dark:text-gray-400"
          title="Toggle Theme"
        >
          <Sun className="hidden dark:block" size={20} />
          <Moon className="dark:hidden" size={20} />
        </button>

        <div className="relative">
          <button className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all text-gray-500 dark:text-gray-400 relative">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-danger rounded-full border-2 border-white dark:border-neutral-900" />
          </button>
        </div>

        <div className="h-6 w-px bg-border dark:bg-neutral-800 mx-1" />

        <div className="relative">
          <button
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            className="flex items-center gap-3 p-1.5 pl-3 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all border border-transparent hover:border-border dark:hover:border-border-dark"
          >
            <div className="text-right hidden lg:block">
              <p className="text-[11px] font-bold leading-none">John Doe</p>
              <p className="text-[9px] font-medium text-gray-500 uppercase mt-1">Administrator</p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/20">
              JD
            </div>
          </button>

          <AnimatePresence>
            {isProfileDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsProfileDropdownOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-border dark:border-border-dark p-2 z-50"
                >
                  <div className="px-3 py-2 mb-2 border-b border-border dark:border-border-dark lg:hidden">
                    <p className="text-xs font-bold">John Doe</p>
                    <p className="text-[10px] text-gray-500">Administrator</p>
                  </div>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">
                    <User size={16} className="text-gray-400" /> Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">
                    <Settings size={16} className="text-gray-400" /> Account Settings
                  </button>
                  <div className="h-px bg-border dark:bg-neutral-800 my-1" />
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-xl text-danger hover:bg-danger/5 transition-colors">
                    <LogOut size={16} /> Sign Out
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] md:hidden" 
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white dark:bg-neutral-900 z-[70] md:hidden shadow-2xl border-r border-border dark:border-border-dark p-6"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Layout size={18} />
                  </div>
                  <span className="font-bold">EduPulse</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800">
                  <X size={20} />
                </button>
              </div>
              
              <nav className="space-y-2">
                {['Dashboard', 'Classes', 'Students', 'Finance', 'Settings'].map((item) => (
                  <button key={item} className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold hover:bg-primary/5 hover:text-primary transition-all">
                    {item}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
