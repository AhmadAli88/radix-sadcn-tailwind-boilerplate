import React from "react";

export default function UserDashboard() {
    const userData = JSON.parse(localStorage.getItem("dummy_user"));
    const user = userData?.user;
    
    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
                <p className="text-gray-600 mt-2">Hello, {user?.firstName || 'User'}! Here's your overview.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">My Profile</h3>
                    <p className="text-sm text-gray-600 mb-4">Manage your account settings</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        View Profile
                    </button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">My Tasks</h3>
                    <p className="text-3xl font-bold text-orange-600 mb-2">8</p>
                    <p className="text-sm text-gray-500">Pending tasks</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Notifications</h3>
                    <p className="text-3xl font-bold text-red-600 mb-2">3</p>
                    <p className="text-sm text-gray-500">Unread messages</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors">
                            Create New Task
                        </button>
                        <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-md transition-colors">
                            View My Projects
                        </button>
                        <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-md transition-colors">
                            Check Messages
                        </button>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span className="text-sm">Completed Task #123</span>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span className="text-sm">Updated profile</span>
                            <span className="text-xs text-gray-500">Yesterday</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                            <span className="text-sm">Joined new project</span>
                            <span className="text-xs text-gray-500">2 days ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}