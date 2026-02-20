import React from 'react';
import { TrendingUp, MessageSquare, Bell, Calendar, UserCheck } from 'lucide-react';

const ClassOverview: React.FC = () => {
  const announcements = [
    { id: 1, title: 'Parent Teacher Meeting', date: 'Oct 25, 2025', category: 'Meeting' },
    { id: 2, title: 'Science Lab Equipment Fee', date: 'Oct 22, 2025', category: 'Fees' },
    { id: 3, title: 'Winter Break Schedule', date: 'Oct 20, 2025', category: 'Event' },
  ];

  return (
    <div className="animate-in fade-in duration-500 dashboard-container">
      {/* Welcome & Quick Actions */}
      <div className="section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-dark p-8 rounded-[18px] text-white shadow-lg shadow-primary/20 relative overflow-hidden group">
            <div className="relative z-10">
              <h1 className="!text-white !mb-3">Welcome to the Dashboard!</h1>
              <p className="!text-white/80 max-w-md leading-relaxed mb-6">
                You have <span className="font-bold text-white">12 new notifications</span> and 4 pending tasks for this class today.
              </p>
              <div className="dashboard-actions">
                <button className="button-primary !bg-white !text-primary hover:!bg-white/90">
                  Generate Attendance Report
                </button>
                <button className="button-primary !bg-white/10 !text-white !border !border-white/20 backdrop-blur-sm hover:!bg-white/20">
                  Send Notification
                </button>
              </div>
            </div>
            <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <TrendingUp size={200} />
            </div>
          </div>

          <div className="dashboard-card !mb-0">
            <h2 className="flex items-center gap-2">
              <Bell size={18} className="text-primary" />
              Recent Announcements
            </h2>
            <div className="mt-2">
              {announcements.map((ann) => (
                <div key={ann.id} className="announcement-item group cursor-pointer hover:bg-gray-50/50 dark:hover:bg-neutral-800/50 px-2 rounded-lg transition-colors">
                  <div className="flex flex-col">
                    <span className="announcement-title text-text dark:text-text-dark">{ann.title}</span>
                    <span className="text-[10px] uppercase font-bold text-primary/70">{ann.category}</span>
                  </div>
                  <span className="announcement-date">{ann.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Daily Snapshot */}
      <div className="section">
        <h2>Daily Snapshot</h2>
        <div className="kpi-row">
          <div className="stat-card">
            <div className="space-y-1">
              <p className="text-xs font-bold text-textSecondary dark:text-gray-400 uppercase tracking-widest">Attendance Today</p>
              <div className="stat-number text-success">32 / 35</div>
              <div className="stat-subtext flex items-center gap-1">
                <UserCheck size={12} className="text-success" />
                91.4% present rate
              </div>
            </div>
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
               <Calendar size={28} className="text-success" />
            </div>
          </div>

          <div className="stat-card">
            <div className="space-y-1">
              <p className="text-xs font-bold text-textSecondary dark:text-gray-400 uppercase tracking-widest">Pending Tasks</p>
              <div className="stat-number text-warning">04</div>
              <div className="stat-subtext flex items-center gap-1">
                <TrendingUp size={12} className="text-warning" />
                Due by end of day
              </div>
            </div>
            <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center">
               <MessageSquare size={28} className="text-warning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassOverview;
