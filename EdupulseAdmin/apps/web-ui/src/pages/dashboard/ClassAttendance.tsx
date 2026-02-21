import React, { useState } from 'react';
import { 
  Search, 
  Download,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import RippleButton from '../../components/ui/RippleButton';

const ClassAttendance: React.FC = () => {
  const [selectedMonth] = useState('October 2025');

  // Dummy Data for Monthly Bar Chart
  const monthlyData = [
    { day: 'Mon', rate: 94 },
    { day: 'Tue', rate: 92 },
    { day: 'Wed', rate: 88 },
    { day: 'Thu', rate: 95 },
    { day: 'Fri', rate: 91 },
    { day: 'Sat', rate: 75 },
  ];

  // Dummy Data for Student List with Percentage
  const students = [
    { id: '1', name: 'Aarav Sharma', rollNo: '101', percentage: 98 },
    { id: '2', name: 'Ishani Patel', rollNo: '102', percentage: 96 },
    { id: '3', name: 'Vihaan Reddy', rollNo: '103', percentage: 88 },
    { id: '4', name: 'Ananya Gupta', rollNo: '104', percentage: 95 },
    { id: '5', name: 'Kabir Singh', rollNo: '105', percentage: 54 }, // Below 60%
    { id: '6', name: 'Saanvi Iyer', rollNo: '106', percentage: 92 },
    { id: '7', name: 'Rohan Mehra', rollNo: '107', percentage: 48 }, // Below 60%
  ];

  return (
    <div className="animate-in fade-in duration-500 dashboard-container">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1>Attendance Analytics</h1>
          <p>Monthly trends and student participation</p>
        </div>
        <div className="flex gap-3">
          <button className="button-primary !bg-white dark:!bg-neutral-800 !text-textSecondary dark:!text-gray-400 !border !border-border dark:!border-border-dark hover:!bg-gray-50">
            <Download size={18} />
            <span>Report</span>
          </button>
          <button className="button-primary shadow-lg shadow-primary/20">
            <CalendarIcon size={18} />
            <span>Mark Today</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Monthly Attendance Chart (Simulated) */}
        <div className="lg:col-span-2 dashboard-card !mb-0">
          <div className="flex justify-between items-center mb-8">
            <h2 className="flex items-center gap-2 !mb-0">
              <TrendingUp size={18} className="text-primary" />
              Weekly Participation
            </h2>
            <div className="flex items-center gap-3">
              <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg transition-colors">
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-bold text-textSecondary">{selectedMonth}</span>
              <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-lg transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex items-end justify-between h-48 px-4">
            {monthlyData.map((data) => (
              <div key={data.day} className="flex flex-col items-center gap-3 w-full group">
                <div className="relative w-10 sm:w-12 h-full flex flex-col justify-end">
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold pointer-events-none">
                    {data.rate}%
                  </div>
                  {/* Bar */}
                  <div 
                    className="w-full bg-primary/10 rounded-t-xl group-hover:bg-primary transition-all duration-500 ease-out"
                    style={{ height: `${data.rate}%` }}
                  />
                </div>
                <span className="text-[10px] font-black text-textSecondary uppercase tracking-widest">{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Summary Stats */}
        <div className="space-y-6">
          <div className="stat-card">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-textSecondary uppercase tracking-widest">Highest Attendance</p>
              <div className="stat-number text-success">98.4%</div>
              <div className="stat-subtext">Aarav Sharma</div>
            </div>
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center text-success">
              <UserCheck size={24} />
            </div>
          </div>

          <div className="stat-card">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-danger uppercase tracking-widest">Critical Attention</p>
              <div className="stat-number text-danger">02</div>
              <div className="stat-subtext text-danger font-medium flex items-center gap-1">
                <AlertTriangle size={12} /> Students &lt; 60%
              </div>
            </div>
            <div className="w-12 h-12 bg-danger/10 rounded-xl flex items-center justify-center text-danger">
              <AlertTriangle size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Student Attendance List */}
      <div className="dashboard-card !mb-0 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="!mb-0">Student Participation List</h2>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Filter students..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-neutral-800 border border-border dark:border-border-dark rounded-xl outline-none text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border dark:border-border-dark overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-neutral-900/50 border-b border-border dark:border-border-dark">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400">Roll No</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400">Student Name</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400">Monthly Avg %</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border dark:divide-border-dark">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50/50 dark:hover:bg-neutral-700/30 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm font-semibold text-textSecondary">{student.rollNo}</td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-text dark:text-text-dark">{student.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${student.percentage < 60 ? 'bg-danger' : 'bg-primary'}`} 
                          style={{ width: `${student.percentage}%` }}
                        />
                      </div>
                      <span className={`text-sm font-black w-12 ${student.percentage < 60 ? 'text-danger' : 'text-text dark:text-text-dark'}`}>
                        {student.percentage}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {student.percentage < 60 ? (
                      <div className="flex items-center justify-center gap-1.5 text-danger bg-danger/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mx-auto w-fit">
                        <AlertTriangle size={12} />
                        Low Attendance
                      </div>
                    ) : (
                      <span className="text-[10px] font-black text-textSecondary uppercase tracking-widest">Satisfactory</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassAttendance;
