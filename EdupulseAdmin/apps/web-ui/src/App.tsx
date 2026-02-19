import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import ClassLayout from './components/layout/ClassLayout';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import ClassSelection from './pages/dashboard/ClassSelection';
import ClassDashboard from './pages/dashboard/ClassDashboard';
import ClassStudents from './pages/dashboard/ClassStudents';
import ClassAttendance from './pages/dashboard/ClassAttendance';
import ClassSubjects from './pages/dashboard/ClassSubjects';
import ClassExams from './pages/dashboard/ClassExams';
import ClassReportCards from './pages/dashboard/ClassReportCards';
import ClassFees from './pages/dashboard/ClassFees';
import ClassOverview from './pages/dashboard/ClassOverview';
import Unauthorized from './pages/Unauthorized';
import { ContentWrapper } from './components/layout/ContentWrapper';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Application Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ContentWrapper><AdminDashboard /></ContentWrapper>} />
          <Route path="dashboard" element={<ContentWrapper><AdminDashboard /></ContentWrapper>} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="products" element={<ContentWrapper><h2 className="text-3xl font-bold dark:text-white text-center py-20">Products Page</h2></ContentWrapper>} />
          <Route path="users" element={<ContentWrapper><h2 className="text-3xl font-bold dark:text-white text-center py-20">Users Page</h2></ContentWrapper>} />
          <Route path="settings" element={<ContentWrapper><h2 className="text-3xl font-bold dark:text-white text-center py-20">Settings Page</h2></ContentWrapper>} />
        </Route>

        {/* Dedicated Class Management Portal */}
        <Route path="/classes" element={<ClassLayout />}>
          <Route index element={<ClassSelection />} />
        </Route>

        {/* Specific Class Detailed Portal */}
        <Route path="/class/:classId" element={<ClassLayout />}>
          <Route element={<ClassDashboard />}>
            <Route index element={<ClassOverview />} />
            <Route path="students" element={<ClassStudents />} />
            <Route path="subjects" element={<ClassSubjects />} />
            <Route path="attendance" element={<ClassAttendance />} />
            <Route path="exams" element={<ClassExams />} />
            <Route path="report" element={<ClassReportCards />} />
            <Route path="fees" element={<ClassFees />} />
            <Route path="analytics" element={<div className="text-center py-20 font-black text-textSecondary uppercase tracking-widest">Advanced Analytics coming soon</div>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
