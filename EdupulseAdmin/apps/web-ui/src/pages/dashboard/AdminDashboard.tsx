import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardCard from '../../components/ui/DashboardCard';
import SkeletonCard from '../../components/ui/SkeletonCard'; // Import SkeletonCard
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  School, Banknote, Book, Users, ClipboardCheck, Award, CalendarDays,
  LineChart, MessageSquare, Home, Truck, Boxes, Briefcase, GraduationCap,
  Family, Landmark, Settings, Bell, UserPlus, HeartHandshake
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const modules = [
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
    { name: 'Parents', icon: Family, path: '/parents' },
    { name: 'Accounting', icon: Landmark, path: '/accounting' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Notifications', icon: Bell, path: '/notifications' },
    { name: 'Admissions', icon: UserPlus, path: '/admissions' },
    { name: 'Alumni', icon: HeartHandshake, path: '/alumni' },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Slightly reduced stagger duration for faster reveal
      },
    },
  };

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
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Admin Dashboard</h2>
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6"
      >
        {isLoading
          ? Array.from({ length: modules.length }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : modules.map((module) => (
              <motion.div key={module.name} variants={itemVariants}>
                <Link to={module.path}>
                  <DashboardCard
                    title={module.name}
                    value="" // Value can be added dynamically later
                    icon={<module.icon size={48} />}
                    className="aspect-square shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </Link>
              </motion.div>
            ))}
      </motion.div>
    </div>
  );
};

export default AdminDashboard;