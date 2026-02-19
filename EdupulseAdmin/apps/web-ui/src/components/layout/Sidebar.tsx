import React from 'react'; // Removed useState
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { Home, Settings, Users, Folder } from 'lucide-react'; // Assuming lucide-react is installed

// Install framer-motion and lucide-react if not already installed:
// npm install framer-motion lucide-react

// Define User Roles (can be extended)
export type UserRole = 'admin' | 'editor' | 'viewer' | 'principal' | 'vice_principal';

// Define NavItem structure
export interface NavItem {
  name: string;
  to: string;
  roles?: UserRole[]; // Optional: roles that can see this item
  // icon: React.ElementType; // Use this when lucide-react is integrated
}

interface SidebarProps {
  navigationConfig: NavItem[];
  userRole: UserRole;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ navigationConfig, userRole, isExpanded, onToggleExpand }) => {
  // Filter navigation items based on user role
  const filteredNavItems = navigationConfig.filter(item => {
    if (!item.roles || item.roles.length === 0) {
      return true; // If no roles are specified, it's visible to all
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
      className="flex flex-col h-full bg-card dark:bg-card-dark border-r border-border dark:border-border-dark shadow-lg p-4
                 max-md:absolute max-md:h-screen max-md:z-20 max-md:shadow-xl" // Mobile slide-in drawer basic styling
    >
      <div className="flex items-center justify-between h-16 mb-6">
        {isExpanded && <h1 className="text-2xl font-bold text-primary dark:text-primary-dark">Edupulse</h1>}
        <button
          onClick={onToggleExpand} // Use prop for toggling
          className="p-2 rounded-full bg-primary dark:bg-primary-dark text-white hover:bg-primary-dark-hover dark:hover:bg-primary-hover transition-colors"
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isExpanded ? '<' : '>'}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {filteredNavItems.map((item) => ( // Use filtered items
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }: { isActive: boolean }) =>
                  `flex items-center p-2 rounded-lg text-text dark:text-text-dark hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors
                  ${isActive ? 'bg-primary text-white hover:bg-primary' : ''}`
                }
              >
                {/* {item.icon && <item.icon className="w-6 h-6 mr-3" />} */} {/* Uncomment when lucide-react is integrated */}
                {!isExpanded && (
                  <span className="relative inline-block">
                    {/* Placeholder for icon when collapsed */}
                    <span className="w-6 h-6 bg-neutral-400 dark:bg-neutral-500 rounded-full flex items-center justify-center text-white mr-3">
                      {item.name[0]}
                    </span>
                    <span className="absolute left-full ml-4 whitespace-nowrap bg-neutral-800 text-white text-sm px-2 py-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                      {item.name}
                    </span>
                  </span>
                )}
                <motion.span
                  animate={isExpanded ? 'expanded' : 'collapsed'}
                  variants={navItemVariants}
                  transition={{ duration: 0.2 }}
                  className={`${isExpanded ? 'block' : 'hidden'}`}
                >
                  {item.name}
                </motion.span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Placeholder for mobile overlay/drawer handling */}
      {/*
        Consider adding a state for mobile menu open/close and an overlay for when the sidebar is open on mobile.
        You might also need to use useLocation hook from react-router-dom to close the sidebar on route change for mobile.
      */}
    </motion.div>
  );
};
