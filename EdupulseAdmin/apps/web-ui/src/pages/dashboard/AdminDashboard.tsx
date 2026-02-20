import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardCard from '../../components/ui/DashboardCard';
import SkeletonCard from '../../components/ui/SkeletonCard'; // Import SkeletonCard
import {
  School, Banknote, Book, Users, ClipboardCheck, Award, CalendarDays,
  LineChart, MessageSquare, Home, Truck, Boxes, Briefcase, GraduationCap,
  Settings, Bell, UserPlus, HeartHandshake, Presentation
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const modules = [
    { name: 'Class Dashboard', icon: Presentation, path: '/classes' },
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

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show skeleton for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dashboard-wrapper dashboard-container">
      <div className="section">
        <h1 className="px-2">Admin Dashboard</h1>
        <div className="dashboard-grid">
          {isLoading
            ? Array.from({ length: modules.length }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
            : modules.map((module) => (
              <div key={module.name} className="w-full max-w-full">
                <Link to={module.path} className="block w-full">
                  <DashboardCard
                    title={module.name}
                    value=""
                    icon={<module.icon size={32} className="text-primary" />}
                    className={`w-full min-h-[160px] ${
                      module.name === 'Class Dashboard' 
                        ? 'bg-primary/5' 
                        : ''
                    }`}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;