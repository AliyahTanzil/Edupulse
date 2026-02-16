import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer'; // Import Footer

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const sidebarWidth = isSidebarCollapsed ? 80 : 256; // Tailwin's w-20 is 80px, w-64 is 256px

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header
        isMobileMenuOpen={isMobileSidebarOpen}
        setIsMobileMenuOpen={setIsMobileSidebarOpen}
      />
      <div className="flex flex-1"> {/* Use flex-1 to make this div take remaining height */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
          isMobileOpen={isMobileSidebarOpen}
          setIsMobileOpen={setIsMobileSidebarOpen}
        />
        {/* Backdrop for mobile sidebar */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}
        <main
          style={{ marginLeft: window.innerWidth >= 768 ? sidebarWidth : 0 }}
          className="flex-1 p-6 transition-all duration-300 ease-in-out pt-20" // pt-20 for header
        >
          {children}
        </main>
      </div>
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default MainLayout;
