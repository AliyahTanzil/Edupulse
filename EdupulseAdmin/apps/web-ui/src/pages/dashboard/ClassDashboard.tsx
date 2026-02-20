import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { 
  Users, 
  CalendarCheck, 
  CreditCard, 
  Award,
} from 'lucide-react';

const ClassDashboard: React.FC = () => {
  const { classId } = useParams<{ classId: string }>();

  const summaryStats = [
    { label: 'Total Students', value: '35', icon: Users, color: 'bg-blue-50 text-blue-500 dark:bg-blue-900/20', trend: '+2', isUp: true },
    { label: 'Attendance', value: '92%', icon: CalendarCheck, color: 'bg-green-50 text-green-500 dark:bg-green-900/20', trend: '+1.5%', isUp: true },
    { label: 'Fees Collected', value: '80%', icon: CreditCard, color: 'bg-purple-50 text-purple-500 dark:bg-purple-900/20', trend: '-5%', isUp: false },
    { label: 'Exam Avg', value: '74%', icon: Award, color: 'bg-orange-50 text-orange-500 dark:bg-orange-900/20', trend: '+4%', isUp: true },
  ];

  return (
    <div className="flex flex-col h-full space-y-8 animate-in fade-in duration-500 dashboard-container">
      {/* Summary Stats Grid */}
      <div className="kpi-row !mt-0">
        {summaryStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="flex flex-col justify-between h-full space-y-2">
              <div>
                <p className="text-[10px] font-bold text-textSecondary dark:text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <div className="stat-number text-text dark:text-text-dark">{stat.value}</div>
              </div>
              <div className="stat-subtext">
                <span className={`flex items-center gap-1 font-bold ${stat.isUp ? 'text-success' : 'text-danger'}`}>
                  {stat.isUp ? '↑' : '↓'}{stat.trend} <span className="font-medium text-textSecondary opacity-70">vs last month</span>
                </span>
              </div>
            </div>
            <div className={`p-4 rounded-2xl ${stat.color} shadow-inner`}>
              <stat.icon size={28} />
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Content Area */}
      <div className="flex-1 dashboard-card !mb-0 p-8 min-h-[500px]">
        <Outlet />
      </div>
    </div>
  );
};

export default ClassDashboard;
