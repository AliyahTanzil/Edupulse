import React from 'react';
import { Calendar, TrendingUp, AlertCircle } from 'lucide-react';

const ClassExams: React.FC = () => {
  const upcomingExams = [
    { id: 1, subject: 'Mathematics', type: 'Mid-Term', date: 'Oct 24, 2025', duration: '3 Hours', status: 'Scheduled' },
    { id: 2, subject: 'Physics', type: 'Unit Test', date: 'Oct 28, 2025', duration: '1.5 Hours', status: 'Pending' },
  ];

  const recentPerformance = [
    { subject: 'Chemistry', average: 78, highest: 96, passRate: '92%' },
    { subject: 'English', average: 84, highest: 92, passRate: '100%' },
    { subject: 'Computer', average: 88, highest: 98, passRate: '98%' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1>Examinations</h1>
          <p>Schedule and performance analysis</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Exams */}
        <div className="dashboard-card !mb-0 !p-0 overflow-hidden">
          <div className="p-4 border-b border-border dark:border-border-dark flex items-center justify-between bg-gray-50/50 dark:bg-neutral-900/50">
            <h2 className="flex items-center gap-2 !mb-0">
              <Calendar size={18} className="text-primary" />
              Upcoming Schedule
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {upcomingExams.map((exam) => (
              <div key={exam.id} className="p-4 rounded-xl border border-border dark:border-border-dark hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{exam.type}</p>
                    <h4 className="font-bold text-text dark:text-text-dark">{exam.subject}</h4>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-warning/10 text-warning rounded-full">
                    {exam.status}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-6 text-xs text-textSecondary dark:text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exam.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={14} />
                    {exam.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* performance metrics */}
        <div className="dashboard-card !mb-0 !p-0 overflow-hidden">
          <div className="p-4 border-b border-border dark:border-border-dark flex items-center justify-between bg-gray-50/50 dark:bg-neutral-900/50">
            <h2 className="flex items-center gap-2 !mb-0">
              <TrendingUp size={18} className="text-success" />
              Recent Performance Average
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-5">
              {recentPerformance.map((perf) => (
                <div key={perf.subject} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-text dark:text-text-dark">{perf.subject}</span>
                    <span className="font-bold text-primary">{perf.average}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${perf.average}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-textSecondary dark:text-gray-400 uppercase font-bold tracking-tight">
                    <span>Pass Rate: {perf.passRate}</span>
                    <span>Highest: {perf.highest}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-info/5 rounded-2xl border border-info/20 flex items-start gap-4">
        <AlertCircle className="text-info shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="text-sm font-bold text-info">Exam Registration Note</h4>
          <p className="text-xs text-info/80 mt-1">Final registration for Mid-Term examinations closes in 3 days. Please ensure all student records are updated.</p>
        </div>
      </div>
    </div>
  );
};

export default ClassExams;
