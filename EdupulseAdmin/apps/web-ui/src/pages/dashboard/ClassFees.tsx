import React from 'react';
import { 
  CreditCard, 
  Wallet, 
  AlertCircle, 
  Search, 
  Download,
  Mail,
  Filter,
  Users
} from 'lucide-react';
import RippleButton from '../../components/ui/RippleButton';

const ClassFees: React.FC = () => {
  // Dummy Financial Data
  const financialSummary = {
    totalExpected: '₹4,37,500',
    totalPaid: '₹3,50,000',
    outstanding: '₹87,500',
    collectionRate: '80%'
  };

  const fees = [
    { id: '1', name: 'Aarav Sharma', amount: '₹12,500', paid: '₹12,500', status: 'Paid', date: 'Oct 10, 2025' },
    { id: '2', name: 'Ishani Patel', amount: '₹12,500', paid: '₹12,500', status: 'Paid', date: 'Oct 12, 2025' },
    { id: '3', name: 'Vihaan Reddy', amount: '₹12,500', paid: '₹6,000', status: 'Partial', date: 'Oct 14, 2025' },
    { id: '4', name: 'Ananya Gupta', amount: '₹12,500', paid: '₹12,500', status: 'Paid', date: 'Oct 05, 2025' },
    { id: '5', name: 'Kabir Singh', amount: '₹12,500', paid: '₹0', status: 'Unpaid', date: 'Overdue' },
    { id: '6', name: 'Saanvi Iyer', rollNo: '106', amount: '₹12,500', paid: '₹12,500', status: 'Paid', date: 'Oct 08, 2025' },
    { id: '7', name: 'Rohan Mehra', amount: '₹12,500', paid: '₹0', status: 'Unpaid', date: 'Overdue' },
  ];

  const defaulters = fees.filter(f => f.status === 'Unpaid' || f.status === 'Partial');

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1>Fee Collection Console</h1>
          <p>Term 1 Academic Year 2025-26</p>
        </div>
        <div className="flex gap-3">
          <button className="button-primary !bg-white dark:!bg-neutral-800 !text-textSecondary dark:!text-gray-400 !border !border-border dark:!border-border-dark hover:!bg-gray-50">
            <Download size={18} />
            <span>ledger</span>
          </button>
          <button className="button-primary shadow-lg shadow-primary/20">
            <Mail size={18} />
            <span>Notify All Defaulters</span>
          </button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="dashboard-card !mb-0">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl">
              <CreditCard size={24} />
            </div>
            <span className="text-[10px] font-black bg-blue-50 text-blue-500 px-2 py-1 rounded-full uppercase tracking-widest">Expected</span>
          </div>
          <p className="text-xs font-bold text-textSecondary dark:text-gray-400 uppercase tracking-widest mb-1">Total Expected</p>
          <h3 className="text-2xl font-black text-text dark:text-text-dark">{financialSummary.totalExpected}</h3>
        </div>

        <div className="dashboard-card !mb-0">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-success/10 text-success rounded-2xl">
              <Wallet size={24} />
            </div>
            <span className="text-[10px] font-black bg-success/10 text-success px-2 py-1 rounded-full uppercase tracking-widest">Received</span>
          </div>
          <p className="text-xs font-bold text-textSecondary dark:text-gray-400 uppercase tracking-widest mb-1">Total Paid</p>
          <h3 className="text-2xl font-black text-success">{financialSummary.totalPaid}</h3>
        </div>

        <div className="dashboard-card !mb-0">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-danger/10 text-danger rounded-2xl">
              <AlertCircle size={24} />
            </div>
            <span className="text-[10px] font-black bg-danger/10 text-danger px-2 py-1 rounded-full uppercase tracking-widest">Pending</span>
          </div>
          <p className="text-xs font-bold text-textSecondary dark:text-gray-400 uppercase tracking-widest mb-1">Outstanding</p>
          <h3 className="text-2xl font-black text-danger">{financialSummary.outstanding}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Fee Table */}
        <div className="xl:col-span-2 space-y-4">
          <div className="dashboard-card !mb-0 space-y-4">
            <div className="flex justify-between items-center">
              <h2>Transaction Records</h2>
              <div className="flex gap-2">
                 <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search students..."
                    className="w-full pl-10 pr-4 py-2 bg-white dark:bg-neutral-800 border border-border dark:border-border-dark rounded-xl outline-none text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <button className="p-2 bg-white dark:bg-neutral-800 border border-border dark:border-border-dark rounded-xl hover:bg-gray-50 transition-colors">
                  <Filter size={18} className="text-textSecondary" />
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-border dark:border-border-dark overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 dark:bg-neutral-900/50 border-b border-border dark:border-border-dark">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400">Student Name</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400">Paid / Total</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400">Status</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-textSecondary dark:text-gray-400">Last Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border dark:divide-border-dark">
                  {fees.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50/50 dark:hover:bg-neutral-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-bold text-text dark:text-text-dark">{student.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-black text-text dark:text-text-dark">{student.paid}</span>
                          <span className="text-[10px] font-bold text-textSecondary uppercase">of {student.amount}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                          student.status === 'Paid' ? 'bg-success/5 text-success border-success/20' : 
                          student.status === 'Partial' ? 'bg-warning/5 text-warning border-warning/20' : 
                          'bg-danger/5 text-danger border-danger/20'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${student.date === 'Overdue' ? 'text-danger animate-pulse' : 'text-textSecondary'}`}>
                          {student.date}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Defaulters List Sidebar */}
        <div className="dashboard-card !mb-0 space-y-4">
          <h2 className="flex items-center gap-2">
            <Users size={18} className="text-danger" />
            Defaulters ({defaulters.length})
          </h2>
          <div className="bg-danger/5 border border-danger/10 rounded-2xl p-6 space-y-4">
            {defaulters.map((def) => (
              <div key={def.id} className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-sm border border-danger/10 flex justify-between items-center group hover:scale-[1.02] transition-transform cursor-pointer">
                <div>
                  <h4 className="text-sm font-black text-text dark:text-text-dark">{def.name}</h4>
                  <p className="text-[10px] font-bold text-danger uppercase">Pending: ₹{parseInt(def.amount.replace(/[₹,]/g, '')) - parseInt(def.paid.replace(/[₹,]/g, ''))}</p>
                </div>
                <button className="p-2 bg-danger/10 text-danger rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <Mail size={14} />
                </button>
              </div>
            ))}
            {defaulters.length === 0 && (
              <div className="text-center py-8">
                 <p className="text-sm font-bold text-success">All students have paid!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassFees;
