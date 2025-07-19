/* eslint-disable */
import React, { useState } from "react";
import { FaBars, FaBell, FaUser, FaSignOutAlt } from "react-icons/fa";
import { SignOut } from "./SignOut";
import { IMAGES } from "../images";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { BsChevronDown } from "react-icons/bs";
import { createImageFromInitials } from "../genericAction";
import { ToastContainer } from "react-toastify";

export function Header({ toggleSidebar, isSidebarOpen }) {
  const userData = JSON.parse(localStorage.getItem("dummy_user"));
  const user = userData?.user;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <ToastContainer />
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left side - Logo and Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
            >
              <FaBars className="w-5 h-5" />
            </button>
            
            <Link to="/dashboard" className="flex items-center space-x-2">
              <img
                src={IMAGES.PROFILELOGO}
                alt="Logo"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                Dashboard
              </span>
            </Link>
          </div>

          {/* Center - Search Bar (Optional) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Notifications and User Menu */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <FaBell className="w-5 h-5" />
              <span className="absolute top-1 right-1 block h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {user?.firstName ? user.firstName.charAt(0).toUpperCase() : 'U'}
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">
                  {user?.firstName || 'User'}
                </span>
                <BsChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                    <div className="font-medium">{user?.firstName} {user?.lastName}</div>
                    <div className="text-gray-500">{user?.email}</div>
                  </div>
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <FaUser className="mr-3 w-4 h-4" />
                    Profile
                  </Link>
                  <div className="border-t border-gray-200">
                    <button
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        // Trigger logout
                      }}
                    >
                      <FaSignOutAlt className="mr-3 w-4 h-4" />
                      <SignOut />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <Tooltip id="my-tooltip" />
    </>
  );
}