import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, BarChart3, MessageCircle, Star, Clock } from 'lucide-react';

const InstructorDashboard = () => {
  const stats = [
    { label: 'My Courses', value: '8', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Total Students', value: '1,247', icon: Users, color: 'text-green-600' },
    { label: 'Average Rating', value: '4.8', icon: Star, color: 'text-yellow-600' },
    { label: 'Teaching Hours', value: '156', icon: Clock, color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black text-gray-900">Instructor Dashboard</h1>
              <p className="text-gray-600">Manage your courses and track student progress</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gray-100 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h2 className="text-2xl font-black text-gray-900 mb-6">My Courses</h2>
          {/* Instructor course management content */}
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;