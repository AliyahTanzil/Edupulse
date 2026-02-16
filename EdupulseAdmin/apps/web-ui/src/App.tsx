import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MainLayout from './components/layout/MainLayout';
import AdminDashboard from './pages/dashboard/AdminDashboard';

// Define page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              key="dashboard"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="w-full h-full" // Ensure the motion.div takes full width/height
            >
              <MainLayout>
                <AdminDashboard />
              </MainLayout>
            </motion.div>
          }
        />
        {/* Add more routes here as needed for other pages within MainLayout */}
        <Route
          path="/products"
          element={
            <motion.div
              key="products"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="w-full h-full"
            >
              <MainLayout>
                <div className="p-6">
                  <h2 className="text-3xl font-bold dark:text-white">Products Page</h2>
                  <p className="dark:text-gray-300">Content for the products page.</p>
                </div>
              </MainLayout>
            </motion.div>
          }
        />
        <Route
          path="/users"
          element={
            <motion.div
              key="users"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="w-full h-full"
            >
              <MainLayout>
                <div className="p-6">
                  <h2 className="text-3xl font-bold dark:text-white">Users Page</h2>
                  <p className="dark:text-gray-300">Content for the users page.</p>
                </div>
              </MainLayout>
            </motion.div>
          }
        />
        <Route
          path="/settings"
          element={
            <motion.div
              key="settings"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="w-full h-full"
            >
              <MainLayout>
                <div className="p-6">
                  <h2 className="text-3xl font-bold dark:text-white">Settings Page</h2>
                  <p className="dark:text-gray-300">Content for the settings page.</p>
                </div>
              </MainLayout>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;