// AdminDashboard.jsx (Create this file in Dashboard folder)
import React from "react";
import { useSelector } from 'react-redux';

export default function AdminDashboard() {
    const userData = JSON.parse(localStorage.getItem("dummy_user"));
    const user = userData?.user;
    
    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome back, {user?.firstName || 'Admin'}!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Users</h3>
                    <p className="text-3xl font-bold text-blue-600">1,234</p>
                    <p className="text-sm text-gray-500 mt-1">+12% from last month</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">System Health</h3>
                    <p className="text-3xl font-bold text-green-600">98.5%</p>
                    <p className="text-sm text-gray-500 mt-1">Uptime this month</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Sessions</h3>
                    <p className="text-3xl font-bold text-purple-600">567</p>
                    <p className="text-sm text-gray-500 mt-1">Currently online</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue</h3>
                    <p className="text-3xl font-bold text-green-600">$45,678</p>
                    <p className="text-sm text-gray-500 mt-1">This month</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Admin Controls</h3>
                    <div className="space-y-3">
                        <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors">
                            User Management
                        </button>
                        <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-md transition-colors">
                            System Settings
                        </button>
                        <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-md transition-colors">
                            Reports & Analytics
                        </button>
                        <button className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-md transition-colors">
                            Security Logs
                        </button>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span className="text-sm">New user registered</span>
                            <span className="text-xs text-gray-500">2 min ago</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span className="text-sm">System backup completed</span>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span className="text-sm">Security scan finished</span>
                            <span className="text-xs text-gray-500">3 hours ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
