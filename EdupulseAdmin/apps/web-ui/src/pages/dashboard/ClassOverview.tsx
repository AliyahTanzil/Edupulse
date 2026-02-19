import React from 'react';
import { TrendingUp, MessageSquare, Bell, Calendar, UserCheck } from 'lucide-react';

const ClassOverview: React.FC = () => {
  const announcements = [
    { id: 1, title: 'Parent Teacher Meeting', date: 'Oct 25, 2025', category: 'Meeting' },
    { id: 2, title: 'Science Lab Equipment Fee', date: 'Oct 22, 2025', category: 'Fees' },
    { id: 3, title: 'Winter Break Schedule', date: 'Oct 20, 2025', category: 'Event' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Welcome & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-dark p-8 rounded-3xl text-white shadow-lg shadow-primary/20 relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-3">Welcome to the Dashboard!</h2>
            <p className="text-white/80 max-w-md leading-relaxed mb-6">
              You have <span className="font-bold text-white">12 new notifications</span> and 4 pending tasks for this class today.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-white text-primary rounded-xl text-sm font-bold hover:scale-105 transition-transform">
                Generate Attendance Report
              </button>
              <button className="px-5 py-2.5 bg-white/10 text-white border border-white/20 rounded-xl text-sm font-bold backdrop-blur-sm hover:bg-white/20 transition-all">
                Send Notification
              </button>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <TrendingUp size={240} />
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 p-6 rounded-3xl border border-border dark:border-border-dark shadow-sm">
          <h3 className="font-black text-text dark:text-text-dark mb-4 flex items-center gap-2">
            <Bell size={18} className="text-primary" />
            Recent Announcements
          </h3>
          <div className="space-y-4">
            {announcements.map((ann) => (
              <div key={ann.id} className="flex gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text dark:text-text-dark">{ann.title}</h4>
                  <p className="text-[10px] text-textSecondary dark:text-gray-400 font-medium">{ann.date} • {ann.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-3xl border border-border dark:border-border-dark shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-bold text-textSecondary dark:text-gray-400 uppercase tracking-widest">Attendance Today</p>
            <h3 className="text-3xl font-black text-success">32 / 35</h3>
            <p className="text-xs text-textSecondary dark:text-gray-400 flex items-center gap-1">
              <UserCheck size={12} className="text-success" />
              91.4% present rate
            </p>
          </div>
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center">
             <Calendar size={32} className="text-success" />
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 p-6 rounded-3xl border border-border dark:border-border-dark shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-bold text-textSecondary dark:text-gray-400 uppercase tracking-widest">Pending Tasks</p>
            <h3 className="text-3xl font-black text-warning">04</h3>
            <p className="text-xs text-textSecondary dark:text-gray-400 flex items-center gap-1">
              <TrendingUp size={12} className="text-warning" />
              Due by end of day
            </p>
          </div>
          <div className="w-20 h-20 bg-warning/10 rounded-full flex items-center justify-center">
             <MessageSquare size={32} className="text-warning" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassOverview;
