import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Search, 
  Download,
  MoreVertical,
  UserPlus,
  Filter
} from 'lucide-react';
import RippleButton from '../../components/ui/RippleButton';

const ClassStudents: React.FC = () => {
  const { classId } = useParams<{ classId: string }>();

  // Dummy Data with requested columns
  const students = [
    { id: '1', name: 'Aarav Sharma', gender: 'Male', attendance: '98%', feeStatus: 'Paid' },
    { id: '2', name: 'Ishani Patel', gender: 'Female', attendance: '96%', feeStatus: 'Paid' },
    { id: '3', name: 'Vihaan Reddy', gender: 'Male', attendance: '88%', feeStatus: 'Pending' },
    { id: '4', name: 'Ananya Gupta', gender: 'Female', attendance: '95%', feeStatus: 'Paid' },
    { id: '5', name: 'Kabir Singh', gender: 'Male', attendance: '74%', feeStatus: 'Overdue' },
    { id: '6', name: 'Saanvi Iyer', gender: 'Female', attendance: '92%', feeStatus: 'Paid' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-text dark:text-text-dark">Student Directory</h2>
          <p className="text-sm text-textSecondary dark:text-gray-400">
            Viewing students for Class <span className="text-primary font-bold">{classId}</span>
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 border border-border dark:border-border-dark rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">
            <Download size={18} />
            <span>Export</span>
          </button>
          <RippleButton className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform font-bold text-sm">
            <UserPlus size={18} />
            <span>Add Student</span>
          </RippleButton>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name..."
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-neutral-800 border border-border dark:border-border-dark rounded-xl focus:ring-2 focus:ring-primary/20 outline-none text-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-neutral-800 border border-border dark:border-border-dark rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium">
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-neutral-800 rounded-3xl border border-border dark:border-border-dark overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-neutral-900/50 border-b border-border dark:border-border-dark">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400">Student Name</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400">Gender</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400">Attendance %</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400">Fees Status</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border dark:divide-border-dark">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50/50 dark:hover:bg-neutral-700/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-bold text-text dark:text-text-dark">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-textSecondary dark:text-gray-400 font-medium">{student.gender}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${parseInt(student.attendance) > 90 ? 'bg-success' : 'bg-warning'}`} 
                          style={{ width: student.attendance }}
                        />
                      </div>
                      <span className="text-sm font-bold text-text dark:text-text-dark">{student.attendance}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                      student.feeStatus === 'Paid' 
                        ? 'bg-success/5 text-success border-success/20' 
                        : student.feeStatus === 'Pending' 
                          ? 'bg-warning/5 text-warning border-warning/20' 
                          : 'bg-danger/5 text-danger border-danger/20'
                    }`}>
                      {student.feeStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-xl transition-colors text-textSecondary">
                      <MoreVertical size={18} />
                    </button>
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

export default ClassStudents;
