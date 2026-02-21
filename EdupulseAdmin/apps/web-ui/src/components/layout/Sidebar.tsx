import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, Users, Package, Settings, Home, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Define User Roles (can be extended)
export type UserRole = 'admin' | 'editor' | 'viewer' | 'principal' | 'vice_principal';

// Define NavItem structure
export interface NavItem {
  name: string;
  to: string;
  roles?: UserRole[];
  icon?: React.ElementType;
}

interface SidebarProps {
  navigationConfig: NavItem[];
  userRole: UserRole;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

// Default icon mapping
const defaultIcons: Record<string, React.ElementType> = {
  'Dashboard': LayoutGrid,
  'Users': Users,
  'Products': Package,
  'Settings': Settings,
};

export const Sidebar: React.FC<SidebarProps> = ({ navigationConfig, userRole, isExpanded, onToggleExpand }) => {
  // Filter navigation items based on user role
  const filteredNavItems = navigationConfig.filter(item => {
    if (!item.roles || item.roles.length === 0) {
      return true;
    }
    return item.roles.includes(userRole);
  });

  const sidebarVariants = {
    expanded: { width: 260 },
    collapsed: { width: 80 },
  };

  const navItemVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -10 },
  };

  return (
    <motion.div
      initial="expanded"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="flex flex-col h-full bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-900 dark:to-slate-950 border-r border-blue-100/50 dark:border-blue-900/30 shadow-sm p-4
                 max-md:absolute max-md:h-screen max-md:z-20 max-md:shadow-2xl max-md:bg-white dark:max-md:bg-slate-900"
    >
      {/* Header with Logo */}
      <div className="flex items-center justify-between h-16 mb-8 px-1">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              E
            </div>
            <div className="flex flex-col leading-tight">
              <h1 className="text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Edupulse</h1>
              <span className="text-[10px] text-blue-500 dark:text-blue-400 font-semibold">Portal</span>
            </div>
          </motion.div>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleExpand}
          className="p-2 rounded-lg bg-blue-100 dark:bg-slate-800 hover:bg-blue-200 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400 transition-all ml-auto"
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </motion.button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto space-y-2">
        {filteredNavItems.map((item, idx) => {
          const Icon = item.icon || defaultIcons[item.name] || Home;
          
          return (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 relative group ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30 dark:shadow-cyan-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                }`
              }
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} className="flex-shrink-0" />
              </motion.div>

              <motion.span
                animate={isExpanded ? 'expanded' : 'collapsed'}
                variants={navItemVariants}
                transition={{ duration: 0.2 }}
                className="text-sm font-medium whitespace-nowrap overflow-hidden"
              >
                {item.name}
              </motion.span>

              {/* Tooltip for collapsed state */}
              {!isExpanded && (
                <div className="absolute left-full ml-3 whitespace-nowrap bg-slate-900 dark:bg-slate-950 text-white text-xs px-3 py-2 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl pointer-events-none">
                  {item.name}
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="pt-6 border-t border-blue-100/50 dark:border-slate-700 space-y-3"
      >
        {isExpanded && (
          <div className="px-3 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-xl border border-blue-200/50 dark:border-blue-900/30">
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Sparkles size={14} />
              Pro Features
            </p>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
              Unlock advanced analytics and reporting
            </p>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-3 py-2.5 rounded-lg text-sm font-medium bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
        >
          <Settings size={16} />
          {isExpanded && <span>Settings</span>}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
