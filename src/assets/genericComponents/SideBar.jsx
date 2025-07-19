import React, { useEffect } from "react";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SideBarData";

export default function Sidebar({ isOpen }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden"
          onClick={() => {}} // This will be handled by parent
        ></div>
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:shadow-none`}
      >
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <nav className="p-4 space-y-2">
            {SidebarData?.map((item, index) => (
              <SubMenu key={index} item={item} />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}