import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import Sidebar from "./SideBar";

export function ParentComponentWithSideBar({ children, ...rest }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && window.innerWidth < 1024) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && !sidebar.contains(event.target)) {
          setIsSidebarOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Close sidebar on window resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      
      <div className="flex">
        {/* Sidebar */}
        <div id="sidebar">
          <Sidebar isOpen={isSidebarOpen} />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-8 mt-4">
          <div className="pt-16"> {/* Account for fixed header */}
            <div className="min-h-[calc(100vh-4rem)]">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}