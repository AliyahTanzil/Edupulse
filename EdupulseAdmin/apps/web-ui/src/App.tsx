import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout'; // Corrected import
import AdminDashboard from './pages/dashboard/AdminDashboard'; // Assuming this is a default export
import { ContentWrapper } from './components/layout/ContentWrapper';

// No longer needed as page transitions are handled in MainLayout

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Default route for MainLayout */}
          <Route
            index
            element={
              <ContentWrapper>
                <AdminDashboard />
              </ContentWrapper>
            }
          />
          {/* Nested routes within MainLayout */}
          <Route
            path="dashboard"
            element={
              <ContentWrapper>
                <AdminDashboard />
              </ContentWrapper>
            }
          />
          <Route
            path="products"
            element={
              <ContentWrapper>
                <h2 className="text-3xl font-bold dark:text-white">Products Page</h2>
                <p className="dark:text-gray-300">Content for the products page.</p>
              </ContentWrapper>
            }
          />
          <Route
            path="users"
            element={
              <ContentWrapper>
                <h2 className="text-3xl font-bold dark:text-white">Users Page</h2>
                <p className="dark:text-gray-300">Content for the users page.</p>
              </ContentWrapper>
            }
          />
          <Route
            path="settings"
            element={
              <ContentWrapper>
                <h2 className="text-3xl font-bold dark:text-white">Settings Page</h2>
                <p className="dark:text-gray-300">Content for the settings page.</p>
              </ContentWrapper>
            }
          />
          {/* Add more nested routes here as needed */}
        </Route>
        {/*
          Example of a route outside MainLayout (e.g., login page)
          <Route path="/login" element={<LoginPage />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
