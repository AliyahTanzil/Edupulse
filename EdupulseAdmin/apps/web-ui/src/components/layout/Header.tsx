import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, User, Menu, Sun, Moon, X, Settings, LogOut, Layout, Sparkles } from 'lucide-react';
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
      className={`sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 flex items-center justify-between
                 ${scrolled 
                   ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-blue-100/50 dark:border-blue-900/30 shadow-lg shadow-blue-500/5 dark:shadow-blue-500/10' 
                   : 'bg-gradient-to-b from-white/98 to-blue-50/50 dark:from-slate-950/98 dark:to-slate-900/50 border-b border-blue-100/30 dark:border-blue-900/20'}`}
    >
      {/* Left: Logo & Mobile Toggle */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2.5 rounded-xl hover:bg-blue-100 dark:hover:bg-slate-800 transition-all hover:scale-110"
        >
          <Menu size={20} className="text-slate-700 dark:text-slate-200" />
        </button>
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            <Layout size={20} className="relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight hidden sm:block bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">EduPulse</span>
            <span className="text-[10px] font-semibold text-blue-500 dark:text-blue-400 hidden sm:block tracking-widest uppercase">Admin Portal</span>
          </div>
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-xs px-4 hidden md:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
          <input
            type="text"
            placeholder="Search classes, students..."
            className="w-full pl-9 pr-4 py-2.5 text-xs rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900
                       border border-blue-200/50 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-900
                       focus:border-blue-400/50 dark:focus:border-cyan-400/50 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-cyan-500/20
                       outline-none transition-all placeholder-slate-500 dark:placeholder-slate-400"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Notifications */}
        <div className="relative">
          <motion.button 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl hover:bg-blue-100 dark:hover:bg-slate-800 transition-all text-slate-600 dark:text-slate-300 relative group"
            title="Notifications"
          >
            <Bell size={20} />
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-2 right-2 w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-2 border-white dark:border-slate-950 shadow-lg shadow-red-500/50" 
            />
            <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-slate-900 dark:bg-slate-950 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
              3 Notifications
            </div>
          </motion.button>
        </div>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleDarkMode}
          className="p-2.5 rounded-xl hover:bg-blue-100 dark:hover:bg-slate-800 transition-all text-slate-600 dark:text-slate-300"
          title="Toggle Theme"
        >
          <Sun className="hidden dark:block" size={20} />
          <Moon className="dark:hidden" size={20} />
        </motion.button>

        <div className="h-6 w-px bg-blue-200/50 dark:bg-slate-700 mx-1 sm:mx-2" />

        {/* Profile Dropdown */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            className="flex items-center gap-2 sm:gap-3 p-1.5 pl-2 sm:pl-3 rounded-xl hover:bg-blue-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-blue-200 dark:hover:border-slate-700 group"
          >
            <div className="text-right hidden lg:block">
              <p className="text-xs font-bold leading-none text-slate-900 dark:text-white">John Doe</p>
              <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase mt-1">Principal</p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xs border border-blue-400/50 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
              JD
            </div>
          </motion.button>

          <AnimatePresence>
            {isProfileDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsProfileDropdownOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-xl dark:shadow-slate-900/50 border border-blue-100/50 dark:border-slate-700 z-50 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 px-4 py-3 border-b border-blue-100/50 dark:border-slate-700">
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">John Doe</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">principal@school.edu</p>
                  </div>
                  <div className="py-2 space-y-1">
                    <button className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 w-full transition-colors">
                      <User size={16} className="text-blue-500" />
                      My Profile
                    </button>
                    <button className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 w-full transition-colors">
                      <Settings size={16} className="text-cyan-500" />
                      Settings
                    </button>
                  </div>
                  <div className="border-t border-blue-100/50 dark:border-slate-700 p-2">
                    <button className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 w-full transition-colors rounded-lg">
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};
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
