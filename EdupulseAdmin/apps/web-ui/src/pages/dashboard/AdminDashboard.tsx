import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardCard from '../../components/ui/DashboardCard';
import SkeletonCard from '../../components/ui/SkeletonCard'; // Import SkeletonCard
import FadeInWhenVisible from '../../components/ui/FadeInWhenVisible'; // Import FadeInWhenVisible
import { motion } from 'framer-motion';
import {
  School, Banknote, Book, Users, ClipboardCheck, Award, CalendarDays,
  LineChart, MessageSquare, Home, Truck, Boxes, Briefcase, GraduationCap,
  Settings, Bell, UserPlus, HeartHandshake, Presentation
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const modules = [
    { name: 'Class Dashboard', icon: Presentation, path: '/class/10-A' },
    { name: 'SIS', icon: School, path: '/sis' },
    { name: 'Fee Management', icon: Banknote, path: '/fee-management' },
    { name: 'Library', icon: Book, path: '/library' },
    { name: 'HR', icon: Users, path: '/hr' },
    { name: 'Attendance', icon: ClipboardCheck, path: '/attendance' },
    { name: 'Exams', icon: Award, path: '/exams' },
    { name: 'Timetable', icon: CalendarDays, path: '/timetable' },
    { name: 'Reports', icon: LineChart, path: '/reports' },
    { name: 'Communication', icon: MessageSquare, path: '/communication' },
    { name: 'Hostel', icon: Home, path: '/hostel' },
    { name: 'Transport', icon: Truck, path: '/transport' },
    { name: 'Inventory', icon: Boxes, path: '/inventory' },
    { name: 'Staff', icon: Briefcase, path: '/staff' },
    { name: 'Students', icon: GraduationCap, path: '/students' },
    { name: 'Parents', icon: Users, path: '/parents' }, // Changed icon from Family to Users
    { name: 'Accounting', icon: Book, path: '/accounting' }, // Changed icon from Landmark to Book
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Notifications', icon: Bell, path: '/notifications' },
    { name: 'Admissions', icon: UserPlus, path: '/admissions' },
    { name: 'Alumni', icon: HeartHandshake, path: '/alumni' },
  ];

  // Removed containerRef and isInView as FadeInWhenVisible handles it

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show skeleton for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 md:p-6 w-full max-w-[1000px] mx-auto">
      <h2 className="text-2xl font-black text-gray-800 dark:text-white mb-6 tracking-tight">Admin Dashboard</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {isLoading
          ? Array.from({ length: modules.length }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
          : modules.map((module) => (
            <div key={module.name}>
                                                              <Link to={module.path}>
                                                                <DashboardCard
                                                                  title={module.name}
                                                                  value=""
                                                                  icon={<module.icon size={24} className="text-primary" />}
                                                                  className={`w-full min-h-[110px] shadow-sm hover:shadow-lg transition-all duration-300 ${
                                                                    module.name === 'Class Dashboard' 
                                                                      ? 'border-2 border-primary bg-primary/5' 
                                                                      : ''
                                                                  }`}
                                                                />
                                                              </Link>
                                              
                                          </div>
          ))}
      </div>
    </div>
  );
};

export default AdminDashboard;