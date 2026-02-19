import React from 'react';
import { Download, Mail, ExternalLink, Search, CheckCircle2 } from 'lucide-react';

const ClassReportCards: React.FC = () => {
  const reports = [
    { id: '1', name: 'Aarav Sharma', grade: 'A+', attendance: '98%', status: 'Generated' },
    { id: '2', name: 'Ishani Patel', grade: 'A', attendance: '96%', status: 'Generated' },
    { id: '3', name: 'Vihaan Reddy', grade: 'B+', attendance: '88%', status: 'In Review' },
    { id: '4', name: 'Ananya Gupta', grade: 'A', attendance: '95%', status: 'Generated' },
    { id: '5', name: 'Kabir Singh', grade: 'C', attendance: '74%', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-text dark:text-text-dark">Report Cards</h2>
          <p className="text-sm text-textSecondary dark:text-gray-400">Generate and distribute academic reports</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform text-sm font-bold">
            Generate All
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search student reports..."
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-neutral-800 border border-border dark:border-border-dark rounded-xl outline-none text-sm"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-border dark:border-border-dark overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 dark:bg-neutral-900/50 border-b border-border dark:border-border-dark">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-textSecondary dark:text-gray-400">Student</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-textSecondary dark:text-gray-400">Overall Grade</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-textSecondary dark:text-gray-400">Attendance</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-textSecondary dark:text-gray-400">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-textSecondary dark:text-gray-400 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border dark:divide-border-dark">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50/50 dark:hover:bg-neutral-700/30 transition-colors">
                <td className="px-6 py-4">
                  <span className="font-medium text-text dark:text-text-dark">{report.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`font-black ${
                    report.grade.startsWith('A') ? 'text-success' : report.grade.startsWith('B') ? 'text-primary' : 'text-warning'
                  }`}>
                    {report.grade}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-textSecondary dark:text-gray-400">{report.attendance}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className={report.status === 'Generated' ? 'text-success' : 'text-gray-300'} />
                    <span className="text-xs font-medium text-textSecondary dark:text-gray-400">{report.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button title="View Online" className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors">
                      <ExternalLink size={16} />
                    </button>
                    <button title="Download PDF" className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors">
                      <Download size={16} />
                    </button>
                    <button title="Email to Parents" className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors">
                      <Mail size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassReportCards;
