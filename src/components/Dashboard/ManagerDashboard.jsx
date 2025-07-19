import React from "react";

export default function ManagerDashboard() {
    const userData = JSON.parse(localStorage.getItem("dummy_user"));
    const user = userData?.user;
    
    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Manager Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome, {user?.firstName || 'Manager'}! Manage your team effectively.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Members</h3>
                    <p className="text-3xl font-bold text-blue-600">12</p>
                    <p className="text-sm text-gray-500 mt-1">Active members</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Projects</h3>
                    <p className="text-3xl font-bold text-green-600">8</p>
                    <p className="text-sm text-gray-500 mt-1">In progress</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tasks Due</h3>
                    <p className="text-3xl font-bold text-orange-600">15</p>
                    <p className="text-sm text-gray-500 mt-1">This week</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Performance</h3>
                    <p className="text-3xl font-bold text-purple-600">87%</p>
                    <p className="text-sm text-gray-500 mt-1">Overall score</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Management Tools</h3>
                    <div className="space-y-3">
                        <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors">
                            Team Performance Review
                        </button>
                        <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-md transition-colors">
                            Project Management
                        </button>
                        <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-md transition-colors">
                            Resource Allocation
                        </button>
                        <button className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-md transition-colors">
                            Team Reports
                        </button>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-semibend text-gray-900 mb-4">Team Updates</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span className="text-sm">John completed Project A</span>
                            <span className="text-xs text-gray-500">30 min ago</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span className="text-sm">Sarah submitted weekly report</span>
                            <span className="text-xs text-gray-500">2 hours ago</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span className="text-sm">Team meeting scheduled</span>
                            <span className="text-xs text-gray-500">1 day ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}