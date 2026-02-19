import React from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { ContentWrapper } from '../../components/layout/ContentWrapper';
import { 
  Users, 
  BookOpen, 
  CalendarCheck, 
  FileText, 
  ClipboardList, 
  CreditCard, 
  BarChart3,
  ChevronRight,
  LayoutDashboard,
  Award
} from 'lucide-react';

const ClassDashboard: React.FC = () => {
  const { classId } = useParams<{ classId: string }>();
  const location = useLocation();

  // Dummy Data
  const classInfo = {
    name: `Class ${classId || '10-A'}`,
    academicYear: '2025-2026',
    term: 'First Term'
  };

  const summaryStats = [
    { label: 'Total Students', value: '35', icon: Users, color: 'bg-blue-50 text-blue-500 dark:bg-blue-900/20', trend: '+2', isUp: true },
    { label: 'Attendance', value: '92%', icon: CalendarCheck, color: 'bg-green-50 text-green-500 dark:bg-green-900/20', trend: '+1.5%', isUp: true },
    { label: 'Fees Collected', value: '80%', icon: CreditCard, color: 'bg-purple-50 text-purple-500 dark:bg-purple-900/20', trend: '-5%', isUp: false },
    { label: 'Exam Avg', value: '74%', icon: Award, color: 'bg-orange-50 text-orange-500 dark:bg-orange-900/20', trend: '+4%', isUp: true },
  ];

  const sidebarItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '' },
    { name: 'Students', icon: Users, path: 'students' },
    { name: 'Subjects', icon: BookOpen, path: 'subjects' },
    { name: 'Attendance', icon: CalendarCheck, path: 'attendance' },
    { name: 'Exams', icon: FileText, path: 'exams' },
    { name: 'Report Cards', icon: ClipboardList, path: 'report' },
    { name: 'Fees', icon: CreditCard, path: 'fees' },
    { name: 'Analytics', icon: BarChart3, path: 'analytics' },
  ];

  return (
    <ContentWrapper>
      <div className="flex flex-col h-full space-y-6">
        {/* Top Bar */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-border dark:border-border-dark p-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-text dark:text-text-dark">{classInfo.name}</h1>
            <p className="text-textSecondary dark:text-gray-400">Class Overview & Management</p>
          </div>
          <div className="flex space-x-4 md:space-x-8">
            <div className="text-left md:text-right">
              <p className="text-[10px] uppercase tracking-wider text-textSecondary dark:text-gray-400 font-bold">Academic Year</p>
              <p className="font-semibold text-text dark:text-text-dark">{classInfo.academicYear}</p>
            </div>
            <div className="text-left md:text-right border-l border-border dark:border-border-dark pl-4 md:pl-8">
              <p className="text-[10px] uppercase tracking-wider text-textSecondary dark:text-gray-400 font-bold">Current Term</p>
              <p className="font-semibold text-text dark:text-text-dark">{classInfo.term}</p>
            </div>
          </div>
        </div>

        {/* Summary Stats Grid (Persistent) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryStats.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-neutral-800 p-6 rounded-[2rem] border border-border dark:border-border-dark shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between min-h-[140px]">
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-2xl ${stat.color} shadow-inner`}>
                  <stat.icon size={24} />
                </div>
                <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.isUp ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                  {stat.isUp ? '↑' : '↓'}{stat.trend}
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-textSecondary dark:text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h4 className="text-3xl font-black text-text dark:text-text-dark">{stat.value}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-1 gap-6 overflow-hidden min-h-[500px]">
          {/* Left Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-border dark:border-border-dark p-4 flex flex-col h-full space-y-1">
              {sidebarItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === ''}
                  className={({ isActive }) => `
                    flex items-center justify-between p-3.5 rounded-xl transition-all group w-full
                    ${isActive 
                      ? 'bg-primary text-white shadow-md shadow-primary/20' 
                      : 'text-textSecondary dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary dark:hover:text-primary'}
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon size={20} className={`${location.pathname.endsWith(item.path) ? '' : 'group-hover:scale-110'} transition-transform`} />
                    <span className="font-medium text-sm">{item.name}</span>
                  </div>
                  <ChevronRight size={16} className={`transition-opacity ${location.pathname.endsWith(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 translate-x-1'}`} />
                </NavLink>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto">
            <div className="bg-white/50 dark:bg-neutral-800/40 rounded-3xl border border-border dark:border-border-dark h-full min-h-[400px] p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default ClassDashboard;
