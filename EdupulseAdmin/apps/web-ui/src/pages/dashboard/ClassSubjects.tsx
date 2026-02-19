import React from 'react';
import { BookOpen, User, Clock } from 'lucide-react';

const ClassSubjects: React.FC = () => {
  const subjects = [
    { id: 1, name: 'Mathematics', teacher: 'Dr. Sarah Wilson', sessions: '5/week', room: 'Room 302' },
    { id: 2, name: 'Physics', teacher: 'Prof. James Miller', sessions: '4/week', room: 'Lab 01' },
    { id: 3, name: 'Chemistry', teacher: 'Dr. Elena Rodriguez', sessions: '4/week', room: 'Lab 02' },
    { id: 4, name: 'English Literature', teacher: 'Ms. Emily Brown', sessions: '3/week', room: 'Room 205' },
    { id: 5, name: 'Computer Science', teacher: 'Mr. David Chen', sessions: '3/week', room: 'IT Lab' },
    { id: 6, name: 'History', teacher: 'Mr. Robert Taylor', sessions: '2/week', room: 'Room 101' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-text dark:text-text-dark">Subject Curriculum</h2>
          <p className="text-sm text-textSecondary dark:text-gray-400">Manage subjects and assigned faculty</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-border dark:border-border-dark shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                <BookOpen size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-neutral-700 px-2 py-1 rounded text-textSecondary dark:text-gray-400">
                {subject.room}
              </span>
            </div>
            <h3 className="text-lg font-bold text-text dark:text-text-dark mb-4">{subject.name}</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-textSecondary dark:text-gray-300">
                <User size={16} className="text-primary" />
                <span>{subject.teacher}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-textSecondary dark:text-gray-300">
                <Clock size={16} className="text-primary" />
                <span>{subject.sessions}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border dark:border-border-dark flex gap-2">
              <button className="flex-1 py-2 text-xs font-bold text-primary bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                Syllabus
              </button>
              <button className="flex-1 py-2 text-xs font-bold text-textSecondary bg-gray-50 dark:bg-neutral-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors">
                View Schedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSubjects;
