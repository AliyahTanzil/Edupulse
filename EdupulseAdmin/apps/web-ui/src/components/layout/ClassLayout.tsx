import React, { useState } from 'react';
import { Outlet, useLocation, Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  CalendarCheck, 
  FileText, 
  ClipboardList, 
  CreditCard, 
  BarChart3,
  LayoutDashboard,
  Bell,
  Settings,
  ChevronLeft,
  LayoutGrid
} from 'lucide-react';

const ClassLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { classId } = useParams<{ classId: string }>();
  const location = useLocation();

  // If no classId is present, we are in selection mode
  const isSelectionMode = !classId;

  const sidebarItems = [
    { name: 'Overview', icon: LayoutDashboard, path: `/class/${classId}` },
    { name: 'Students', icon: Users, path: `/class/${classId}/students` },
    { name: 'Subjects', icon: BookOpen, path: `/class/${classId}/subjects` },
    { name: 'Attendance', icon: CalendarCheck, path: `/class/${classId}/attendance` },
    { name: 'Exams', icon: FileText, path: `/class/${classId}/exams` },
    { name: 'Report Cards', icon: ClipboardList, path: `/class/${classId}/report` },
    { name: 'Fees', icon: CreditCard, path: `/class/${classId}/fees` },
    { name: 'Analytics', icon: BarChart3, path: `/class/${classId}/analytics` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] dark:bg-neutral-950 text-text dark:text-text-dark font-sans">
      {/* Header */}
      <header className="h-16 bg-white dark:bg-neutral-900 border-b border-border dark:border-border-dark flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-4">
          <Link to={isSelectionMode ? "/dashboard" : "/classes"} className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-colors text-textSecondary flex items-center gap-2">
            <ChevronLeft size={20} />
            {isSelectionMode ? <span className="text-xs font-bold uppercase hidden md:block">Main App</span> : <span className="text-xs font-bold uppercase hidden md:block">All Classes</span>}
          </Link>
          <div className="h-8 w-px bg-border dark:bg-neutral-800 mx-2" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              {isSelectionMode ? <LayoutGrid size={20} /> : <span className="font-black text-sm">{classId?.charAt(0)}</span>}
            </div>
            <div>
              <h1 className="text-sm font-black tracking-tight leading-none uppercase">
                {isSelectionMode ? 'Class selection' : `Class ${classId}`}
              </h1>
              <p className="text-[10px] font-bold text-textSecondary uppercase tracking-widest mt-1">Management Portal</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2.5 text-textSecondary hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border-2 border-white dark:border-neutral-900" />
          </button>
          <button className="p-2.5 text-textSecondary hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-all">
            <Settings size={20} />
          </button>
          <div className="h-8 w-px bg-border dark:bg-neutral-800 mx-2" />
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden md:block">
              <p className="text-xs font-black leading-none">Principal User</p>
              <p className="text-[10px] font-bold text-success uppercase mt-1">Online</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Only shown if a class is selected */}
        {!isSelectionMode && (
          <aside className={`bg-white dark:bg-neutral-900 border-r border-border dark:border-border-dark flex flex-col transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
            <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto custom-scrollbar">
              {sidebarItems.map((item) => {
                const isActive = location.pathname === item.path || (item.name === 'Overview' && location.pathname === `/class/${classId}`);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      flex items-center gap-4 p-3 rounded-2xl transition-all group
                      ${isActive 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'text-textSecondary dark:text-gray-400 hover:bg-primary/5 hover:text-primary'}
                    `}
                  >
                    <div className={`shrink-0 ${isActive ? 'text-white' : 'text-primary'}`}>
                      <item.icon size={22} />
                    </div>
                    {isSidebarOpen && <span className="font-bold text-sm tracking-wide">{item.name}</span>}
                  </Link>
                );
              })}
            </div>

            <div className="p-4 border-t border-border dark:border-border-dark">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="w-full flex items-center gap-4 p-3 text-textSecondary hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-2xl transition-all"
              >
                <div className={isSidebarOpen ? 'rotate-180 transition-transform' : ''}>
                  <ChevronLeft size={22} />
                </div>
                {isSidebarOpen && <span className="font-bold text-sm uppercase tracking-widest">Collapse</span>}
              </button>
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <main className={`flex-1 overflow-y-auto ${isSelectionMode ? 'bg-gray-50 dark:bg-black/20' : 'p-8'} relative`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`${isSelectionMode ? '' : 'max-w-[1400px] mx-auto h-full'}`}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-900 border-t border-border dark:border-border-dark py-4 px-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-textSecondary uppercase tracking-[0.2em]">
        <p>© 2026 EduPulse System • Class Control Unit</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Support</a>
          <a href="#" className="hover:text-primary transition-colors">Documentation</a>
          <a href="#" className="hover:text-primary transition-colors">System Status</a>
        </div>
      </footer>
    </div>
  );
};

export default ClassLayout;
