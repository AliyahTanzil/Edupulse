import React from 'react';
import { 
  CreditCard, 
  Wallet, 
  AlertCircle, 
  Search, 
  Download,
  Mail,
  Filter,
  Users,
  CheckCircle2,
  Clock,
  AlertTriangle,
  MoreVertical,
  Receipt,
  BellRing,
  PlusCircle
} from 'lucide-react';
import RippleButton from '../../components/ui/RippleButton';

const ClassFees: React.FC = () => {
  // Dummy Financial Data
  const financialSummary = {
    totalExpected: 'NLe 4,37,500',
    totalPaid: 'NLe 3,50,000',
    outstanding: 'NLe 87,500',
    collectionRate: '80%'
  };

  const fees = [
    { id: '1', name: 'Aarav Sharma', amount: 'NLe 12,500', paid: 'NLe 12,500', status: 'Paid', date: 'Oct 10, 2025' },
    { id: '2', name: 'Ishani Patel', amount: 'NLe 12,500', paid: 'NLe 12,500', status: 'Paid', date: 'Oct 12, 2025' },
    { id: '3', name: 'Vihaan Reddy', amount: 'NLe 12,500', paid: 'NLe 6,000', status: 'Partial', date: 'Oct 14, 2025' },
    { id: '4', name: 'Ananya Gupta', amount: 'NLe 12,500', paid: 'NLe 12,500', status: 'Paid', date: 'Oct 05, 2025' },
    { id: '5', name: 'Kabir Singh', amount: 'NLe 12,500', paid: 'NLe 0', status: 'Unpaid', date: 'Overdue' },
    { id: '6', name: 'Saanvi Iyer', rollNo: '106', amount: 'NLe 12,500', paid: 'NLe 12,500', status: 'Paid', date: 'Oct 08, 2025' },
    { id: '7', name: 'Rohan Mehra', amount: 'NLe 12,500', paid: 'NLe 0', status: 'Unpaid', date: 'Overdue' },
  ];

  const defaulters = fees.filter(f => f.status === 'Unpaid' || f.status === 'Partial');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid':
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-success/5 text-success border border-success/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Settled
          </span>
        );
      case 'Partial':
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-warning/5 text-warning border border-warning/20 shadow-[0_0_10px_rgba(234,179,8,0.1)]">
            <div className="w-1.5 h-1.5 rounded-full bg-warning animate-pulse" />
            Incomplete
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-danger/5 text-danger border border-danger/20 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
            <div className="w-1.5 h-1.5 rounded-full bg-danger animate-bounce" />
            Overdue
          </span>
        );
    }
  };

  return (
    <div className="animate-in fade-in duration-500 dashboard-container">
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
            <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <CreditCard size={24} />
            </div>
            <span className="text-[10px] font-black bg-blue-50 text-blue-500 px-2 py-1 rounded-full uppercase tracking-widest">Expected</span>
          </div>
          <p className="text-xs font-bold text-textSecondary dark:text-gray-400 uppercase tracking-widest mb-1">Total Expected</p>
          <h3 className="text-2xl font-black text-text dark:text-text-dark">{financialSummary.totalExpected}</h3>
        </div>

        <div className="dashboard-card !mb-0">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-success/10 text-success rounded-2xl shadow-[0_0_15px_rgba(34,197,94,0.2)]">
              <Wallet size={24} />
            </div>
            <span className="text-[10px] font-black bg-success/10 text-success px-2 py-1 rounded-full uppercase tracking-widest">Received</span>
          </div>
          <p className="text-xs font-bold text-textSecondary dark:text-gray-400 uppercase tracking-widest mb-1">Total Paid</p>
          <h3 className="text-2xl font-black text-success">{financialSummary.totalPaid}</h3>
        </div>

        <div className="dashboard-card !mb-0">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-danger/10 text-danger rounded-2xl shadow-[0_0_15px_rgba(239,68,68,0.2)]">
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

            <div className="futuristic-table-container">
              <table className="futuristic-table">
                <thead className="futuristic-thead">
                  <tr>
                    <th>Student Name</th>
                    <th>Paid / Total</th>
                    <th>Status</th>
                    <th>Last Date</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((student) => (
                    <tr key={student.id} className="futuristic-tr group">
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-black text-xs border border-primary/10">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-bold text-text dark:text-text-dark">{student.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col">
                          <span className="text-sm font-black amount-glow">{student.paid}</span>
                          <span className="text-[10px] font-bold text-textSecondary uppercase tracking-tighter opacity-60">of {student.amount}</span>
                        </div>
                      </td>
                      <td>
                        {getStatusBadge(student.status)}
                      </td>
                      <td>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${student.date === 'Overdue' ? 'text-danger animate-pulse' : 'text-textSecondary'}`}>
                          {student.date}
                        </span>
                      </td>
                      <td className="text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                          {student.status === 'Paid' ? (
                            <button className="p-2.5 hover:bg-primary/10 text-primary rounded-xl transition-colors border border-transparent hover:border-primary/20" title="Download Receipt">
                              <Receipt size={16} />
                            </button>
                          ) : (
                            <>
                              <button className="p-2.5 hover:bg-warning/10 text-warning rounded-xl transition-colors border border-transparent hover:border-warning/20" title="Send Reminder">
                                <BellRing size={16} />
                              </button>
                              <button className="p-2.5 hover:bg-success/10 text-success rounded-xl transition-colors border border-transparent hover:border-success/20" title="Log Payment">
                                <PlusCircle size={16} />
                              </button>
                            </>
                          )}
                          <button className="p-2.5 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-xl transition-colors text-textSecondary border border-transparent hover:border-border" title="More Options">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Defaulters List Sidebar */}
        <div className="dashboard-card !mb-0 !p-0">
          <div className="p-6 border-b border-border dark:border-border-dark flex items-center justify-between bg-gray-50/50 dark:bg-neutral-900/50">
            <h2 className="flex items-center gap-2 !mb-0 text-danger">
              <Users size={18} />
              Defaulters ({defaulters.length})
            </h2>
          </div>
          
          <div className="defaulters-container">
            {defaulters.map((def) => (
              <div key={def.id} className="defaulter-card group cursor-pointer">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-text dark:text-text-dark">{def.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-danger uppercase tracking-tight">Pending:</span>
                    <span className="text-xs font-black text-danger">NLe {parseInt(def.amount.replace(/[NLe ,]/g, '')) - parseInt(def.paid.replace(/[NLe ,]/g, ''))}</span>
                  </div>
                </div>
                <button className="button-primary !p-2 !bg-danger/10 !text-danger hover:!bg-danger hover:!text-white shadow-none">
                  <BellRing size={14} />
                </button>
              </div>
            ))}
            {defaulters.length === 0 && (
              <div className="text-center py-12">
                 <CheckCircle2 className="mx-auto text-success mb-2" size={32} />
                 <p className="text-sm font-bold text-success">Accounts Cleared</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassFees;
