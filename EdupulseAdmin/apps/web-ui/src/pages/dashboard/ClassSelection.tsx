import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, Users, GraduationCap, ArrowRight, Search, Filter } from 'lucide-react';

const ClassSelection: React.FC = () => {
  // Dummy data for all classes
  const classes = [
    { id: '10-A', name: 'Grade 10 - A', teacher: 'Dr. Sarah Wilson', students: 35, room: 'Room 302', category: 'Secondary' },
    { id: '10-B', name: 'Grade 10 - B', teacher: 'Prof. James Miller', students: 32, room: 'Room 304', category: 'Secondary' },
    { id: '11-A', name: 'Grade 11 - A', teacher: 'Dr. Elena Rodriguez', students: 28, room: 'Lab 01', category: 'Higher Secondary' },
    { id: '11-B', name: 'Grade 11 - B', teacher: 'Mr. David Chen', students: 30, room: 'Lab 02', category: 'Higher Secondary' },
    { id: '12-A', name: 'Grade 12 - A', teacher: 'Ms. Emily Brown', students: 25, room: 'Room 205', category: 'Higher Secondary' },
    { id: '9-A', name: 'Grade 9 - A', teacher: 'Mr. Robert Taylor', students: 38, room: 'Room 101', category: 'Secondary' },
  ];

  return (
    <div className="dashboard-wrapper animate-in fade-in duration-500">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest mb-4">
          <GraduationCap size={14} />
          Academic Year 2025-26
        </div>
        <h1>Class Selection Portal</h1>
        <p className="max-w-2xl mx-auto">
          Select a specific class from the list below to manage attendance, subjects, and student performance reports.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="dashboard-card !p-4 !mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search class by name or teacher..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-neutral-800 border-none rounded-2xl outline-none text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 dark:bg-neutral-800 rounded-2xl text-sm font-bold hover:bg-gray-100 transition-colors">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
            <LayoutGrid size={18} />
            <span>Grid View</span>
          </button>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="dashboard-grid">
        {classes.map((item) => (
          <Link 
            key={item.id} 
            to={`/class/${item.id}`}
            className="dashboard-card group relative"
          >
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="text-xl font-black">{item.id.charAt(0)}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-textSecondary bg-gray-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              <div>
                <h2 className="!mb-1">{item.name}</h2>
                <p className="text-sm font-bold text-primary">Class ID: {item.id}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border dark:border-border-dark">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-textSecondary uppercase tracking-widest">In-charge</p>
                  <p className="text-xs font-black text-text dark:text-white truncate">{item.teacher}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-textSecondary uppercase tracking-widest">Students</p>
                  <p className="text-xs font-black text-text dark:text-white">{item.students} Enrolled</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-success">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Active Session</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-500 pointer-events-none text-primary group-hover:scale-110">
              <GraduationCap size={160} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassSelection;
