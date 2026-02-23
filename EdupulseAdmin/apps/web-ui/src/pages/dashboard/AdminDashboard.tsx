import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardCard from '../../components/ui/DashboardCard';
import SkeletonCard from '../../components/ui/SkeletonCard';
import {
  School, Banknote, Book, Users, ClipboardCheck, Award, CalendarDays,
  LineChart, MessageSquare, Home, Truck, Boxes, Briefcase, GraduationCap,
  Settings, Bell, UserPlus, HeartHandshake, Presentation, TrendingUp, Activity
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const modules = [
    { name: 'Class Dashboard', icon: Presentation, path: '/classes', color: 'from-blue-500 to-cyan-500' },
    { name: 'SIS', icon: School, path: '/sis', color: 'from-blue-600 to-blue-400' },
    { name: 'Fee Management', icon: Banknote, path: '/fee-management', color: 'from-green-500 to-emerald-500' },
    { name: 'Library', icon: Book, path: '/library', color: 'from-purple-500 to-pink-500' },
    { name: 'HR', icon: Users, path: '/hr', color: 'from-orange-500 to-red-500' },
    { name: 'Attendance', icon: ClipboardCheck, path: '/attendance', color: 'from-cyan-500 to-blue-500' },
    { name: 'Exams', icon: Award, path: '/exams', color: 'from-yellow-500 to-orange-500' },
    { name: 'Timetable', icon: CalendarDays, path: '/timetable', color: 'from-indigo-500 to-purple-500' },
    { name: 'Reports', icon: LineChart, path: '/reports', color: 'from-green-500 to-cyan-500' },
    { name: 'Communication', icon: MessageSquare, path: '/communication', color: 'from-pink-500 to-rose-500' },
    { name: 'Hostel', icon: Home, path: '/hostel', color: 'from-amber-500 to-orange-500' },
    { name: 'Transport', icon: Truck, path: '/transport', color: 'from-blue-500 to-indigo-500' },
    { name: 'Inventory', icon: Boxes, path: '/inventory', color: 'from-slate-500 to-slate-700' },
    { name: 'Staff', icon: Briefcase, path: '/staff', color: 'from-cyan-500 to-green-500' },
    { name: 'Students', icon: GraduationCap, path: '/students', color: 'from-rose-500 to-pink-500' },
    { name: 'Parents', icon: Users, path: '/parents', color: 'from-purple-500 to-indigo-500' },
    { name: 'Accounting', icon: LineChart, path: '/accounting', color: 'from-green-600 to-green-400' },
    { name: 'Settings', icon: Settings, path: '/settings', color: 'from-slate-600 to-slate-400' },
    { name: 'Notifications', icon: Bell, path: '/notifications', color: 'from-red-500 to-rose-500' },
    { name: 'Admissions', icon: UserPlus, path: '/admissions', color: 'from-teal-500 to-cyan-500' },
    { name: 'Alumni', icon: HeartHandshake, path: '/alumni', color: 'from-violet-500 to-purple-500' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/20 rounded-lg border border-green-200/50 dark:border-green-900/30"
          >
            <Activity size={18} className="text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">System Online</span>
          </motion.div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Welcome to EduPulse Admin Portal. Manage all school operations from one unified dashboard.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        {[
          { label: 'Total Students', value: '2,450', icon: GraduationCap, color: 'from-blue-500 to-cyan-500' },
          { label: 'Active Classes', value: '45', icon: School, color: 'from-purple-500 to-pink-500' },
          { label: 'Staff Members', value: '156', icon: Briefcase, color: 'from-green-500 to-emerald-500' },
          { label: 'System Status', value: '99.8%', icon: TrendingUp, color: 'from-yellow-500 to-orange-500' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-blue-100/50 dark:border-blue-900/30 shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} p-2.5 text-white shadow-lg`}>
                <stat.icon size={20} />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">{stat.label}</p>
            <p className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Modules Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoading ? 'hidden' : 'visible'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {isLoading
          ? Array.from({ length: modules.length }).map((_, index) => (
              <motion.div key={index} variants={itemVariants}>
                <SkeletonCard />
              </motion.div>
            ))
          : modules.map((module) => (
              <motion.div key={module.name} variants={itemVariants}>
                <Link to={module.path} className="block group">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${module.color} text-white shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[160px] flex flex-col items-center justify-center border border-white/10`}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-3">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="flex justify-center"
                      >
                        <module.icon size={40} className="drop-shadow-lg" />
                      </motion.div>
                      <h3 className="font-bold text-lg drop-shadow-md">{module.name}</h3>
                      <p className="text-sm text-white/80 hidden group-hover:block">Access Module →</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
      </motion.div>
    </div>
  );
};

export default AdminDashboard;