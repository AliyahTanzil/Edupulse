import React, { useState } from 'react';
import { Download, Mail, User, BookOpen } from 'lucide-react';
import RippleButton from '../../components/ui/RippleButton';

const ClassReportCards: React.FC = () => {
  // 1. Class Subjects
  const classSubjects = [
    { id: 1, name: "Mathematics" },
    { id: 2, name: "English" },
    { id: 3, name: "Physics" },
    { id: 4, name: "Chemistry" },
    { id: 5, name: "Biology" }
  ];

  // 2. Results Data - POPULATED FOR ALL STUDENTS TO FIX PREVIEW BUG
  const resultsData: Record<number, { terms: Record<string, Record<string, number>> }> = {
    1: { terms: { 
      term1: { Mathematics: 75, English: 68, Physics: 70, Chemistry: 65, Biology: 80 },
      term2: { Mathematics: 82, English: 74, Physics: 78, Chemistry: 72, Biology: 85 },
      term3: { Mathematics: 80, English: 72, Physics: 76, Chemistry: 74, Biology: 82 }
    }},
    2: { terms: { 
      term1: { Mathematics: 88, English: 82, Physics: 85, Chemistry: 80, Biology: 90 },
      term2: { Mathematics: 90, English: 85, Physics: 88, Chemistry: 84, Biology: 92 },
      term3: { Mathematics: 92, English: 88, Physics: 90, Chemistry: 86, Biology: 94 }
    }},
    3: { terms: { 
      term1: { Mathematics: 65, English: 60, Physics: 62, Chemistry: 58, Biology: 64 },
      term2: { Mathematics: 68, English: 64, Physics: 65, Chemistry: 62, Biology: 67 },
      term3: { Mathematics: 70, English: 68, Physics: 68, Chemistry: 65, Biology: 70 }
    }},
    4: { terms: { 
      term1: { Mathematics: 80, English: 78, Physics: 75, Chemistry: 74, Biology: 82 },
      term2: { Mathematics: 84, English: 80, Physics: 78, Chemistry: 76, Biology: 85 },
      term3: { Mathematics: 82, English: 82, Physics: 80, Chemistry: 78, Biology: 84 }
    }},
    5: { terms: { 
      term1: { Mathematics: 55, English: 52, Physics: 50, Chemistry: 48, Biology: 58 },
      term2: { Mathematics: 58, English: 55, Physics: 54, Chemistry: 52, Biology: 60 },
      term3: { Mathematics: 60, English: 58, Physics: 56, Chemistry: 54, Biology: 62 }
    }}
  };

  const reports = [
    { id: 1, name: 'Aarav Sharma', attendance: '98%', status: 'Generated' },
    { id: 2, name: 'Ishani Patel', attendance: '96%', status: 'Generated' },
    { id: 3, name: 'Vihaan Reddy', attendance: '88%', status: 'In Review' },
    { id: 4, name: 'Ananya Gupta', attendance: '95%', status: 'Generated' },
    { id: 5, name: 'Kabir Singh', attendance: '74%', status: 'Pending' },
  ];

  const [selectedStudent, setSelectedStudent] = useState<number>(1);

  // Grading Logic
  const getGrade = (avg: number) => {
    if (avg >= 80) return { label: 'A', color: 'text-emerald-600 bg-emerald-50' };
    if (avg >= 70) return { label: 'B', color: 'text-blue-600 bg-blue-50' };
    if (avg >= 60) return { label: 'C', color: 'text-amber-600 bg-amber-50' };
    if (avg >= 50) return { label: 'D', color: 'text-orange-600 bg-orange-50' };
    return { label: 'F', color: 'text-rose-600 bg-rose-50' };
  };

  const studentData = resultsData[selectedStudent];
  const studentInfo = reports.find(r => r.id === selectedStudent);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="dashboard-card mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="!mb-1">Report Card Center</h1>
          <p>Generate and analyze academic performance</p>
        </div>
        <div className="flex flex-wrap gap-3 w-full lg:w-auto">
          <button className="button-primary !bg-slate-100 dark:!bg-neutral-800 !text-slate-700 dark:!text-slate-300 hover:!bg-slate-200">
            <Download size={18} />
            Bulk Export
          </button>
          <button className="button-primary !bg-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20">
            <Mail size={18} />
            Notify All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Left: Student Selector List */}
        <div className="xl:col-span-4 space-y-4 h-[750px] overflow-y-auto pr-2 custom-scrollbar">
          <h2 className="!text-xs uppercase tracking-widest text-slate-400 px-2">Student Roster</h2>
          {reports.map((student) => (
            <button
              key={student.id}
              onClick={() => setSelectedStudent(student.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-[1.5rem] transition-all duration-300 text-left border-2
                ${selectedStudent === student.id 
                  ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 shadow-md translate-x-1' 
                  : 'bg-white dark:bg-neutral-900 border-transparent hover:border-slate-200 dark:hover:border-neutral-800 shadow-sm'}
              `}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm
                ${selectedStudent === student.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-neutral-800 text-slate-500'}
              `}>
                {student.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 dark:text-white leading-tight">{student.name}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">ID: EP-00{student.id}</p>
              </div>
              <div className={`w-2 h-2 rounded-full ${student.status === 'Generated' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            </button>
          ))}
        </div>

        {/* Right: Detailed Result Sheet */}
        <div className="xl:col-span-8">
          {studentData ? (
            <div className="dashboard-card !mb-0 !p-0 overflow-hidden shadow-xl animate-in slide-in-from-right-4 duration-500">
              {/* Report Header */}
              <div className="bg-indigo-600 p-8 text-white relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-center md:text-left space-y-1">
                    <h1 className="text-2xl font-black uppercase tracking-tight">Academic Performance Report</h1>
                    <p className="text-indigo-100 text-xs font-bold uppercase tracking-[0.2em]">Session 2025-2026 • Final Term</p>
                  </div>
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center">
                    <p className="text-[10px] font-black uppercase text-indigo-100">Overall Grade</p>
                    <p className="text-3xl font-black">A</p>
                  </div>
                </div>
                <BookOpen className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 rotate-12" />
              </div>

              <div className="p-8 space-y-8">
                {/* Academic Table */}
                <div className="rounded-2xl border border-slate-100 dark:border-neutral-800 overflow-hidden">
                  <table className="w-full text-center border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-neutral-800/50 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <th className="px-6 py-5 text-left">Subject</th>
                        <th className="px-4 py-5">T1</th>
                        <th className="px-4 py-5">T2</th>
                        <th className="px-4 py-5">T3</th>
                        <th className="px-4 py-5 bg-indigo-50/50 dark:bg-indigo-900/10 text-indigo-600">Avg</th>
                        <th className="px-4 py-5">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-neutral-800">
                      {classSubjects.map((subject) => {
                        const s1 = studentData.terms.term1[subject.name] || 0;
                        const s2 = studentData.terms.term2[subject.name] || 0;
                        const s3 = studentData.terms.term3[subject.name] || 0;
                        const average = Math.round((s1 + s2 + s3) / 3);
                        const grade = getGrade(average);

                        return (
                          <tr key={subject.id} className="group">
                            <td className="px-6 py-4 text-left font-bold text-slate-700 dark:text-slate-200">{subject.name}</td>
                            <td className="px-4 py-4 text-sm font-medium text-slate-500">{s1}</td>
                            <td className="px-4 py-4 text-sm font-medium text-slate-500">{s2}</td>
                            <td className="px-4 py-4 text-sm font-medium text-slate-500">{s3}</td>
                            <td className="px-4 py-4 text-sm font-black text-indigo-600 bg-indigo-50/30 dark:bg-indigo-900/5">{average}%</td>
                            <td className="px-4 py-4">
                              <span className={`px-3 py-1 rounded-lg text-xs font-black ${grade.color}`}>
                                {grade.label}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-50 dark:bg-neutral-800/50 p-6 rounded-2xl border border-dashed border-slate-200 dark:border-neutral-700">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Principal's Remarks</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                    Excellent academic performance throughout the session. Demonstrates strong analytical skills and consistent participation in class activities. Recommended for advanced elective tracks in the coming session.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-[600px] flex flex-col items-center justify-center dashboard-card !mb-0 border-2 border-dashed border-slate-200 dark:border-neutral-800 text-center p-12">
              <div className="w-20 h-20 bg-slate-100 dark:bg-neutral-800 rounded-full flex items-center justify-center text-slate-400 mb-6">
                <User size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">No Data Available</h3>
              <p className="text-slate-500 mt-2">Please select a student from the roster to view their detailed report.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassReportCards;
