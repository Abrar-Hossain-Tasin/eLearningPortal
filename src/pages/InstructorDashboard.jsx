// import React from 'react';
// import { motion } from 'framer-motion';
// import { BookOpen, Users, BarChart3, MessageCircle, Star, Clock } from 'lucide-react';

// const InstructorDashboard = () => {
//   const stats = [
//     { label: 'My Courses', value: '8', icon: BookOpen, color: 'text-blue-600' },
//     { label: 'Total Students', value: '1,247', icon: Users, color: 'text-green-600' },
//     { label: 'Average Rating', value: '4.8', icon: Star, color: 'text-yellow-600' },
//     { label: 'Teaching Hours', value: '156', icon: Clock, color: 'text-purple-600' }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl font-black text-gray-900">Instructor Dashboard</h1>
//               <p className="text-gray-600">Manage your courses and track student progress</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <div className={`p-3 rounded-xl bg-gray-100 ${stat.color}`}>
//                   <stat.icon className="w-6 h-6" />
//                 </div>
//               </div>
//               <div>
//                 <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
//                 <div className="text-sm text-gray-600">{stat.label}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//           <h2 className="text-2xl font-black text-gray-900 mb-6">My Courses</h2>
//           {/* Instructor course management content */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InstructorDashboard;



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Plus, 
//   Trash2, 
//   Edit3, 
//   Users, 
//   BookOpen, 
//   BarChart3, 
//   MessageCircle,
//   Star, 
//   Clock,
//   Search,
//   Filter,
//   Download,
//   Eye,
//   PlayCircle,
//   CheckCircle,
//   XCircle,
//   Calendar,
//   TrendingUp
// } from 'lucide-react';

// const InstructorDashboard = () => {
//   const [activeTab, setActiveTab] = useState('my-courses');
//   const [courses, setCourses] = useState([
//     {
//       id: 'c1',
//       title: 'Advanced Banking Operations',
//       category: 'Operations',
//       status: 'published',
//       students: 245,
//       rating: 4.8,
//       duration: '6 weeks',
//       createdAt: '2024-01-15',
//       completionRate: 78,
//       modules: 12,
//       revenue: 73455
//     },
//     {
//       id: 'c2',
//       title: 'Digital Banking & Fintech',
//       category: 'Technology',
//       status: 'draft',
//       students: 189,
//       rating: 4.9,
//       duration: '4 weeks',
//       createdAt: '2024-01-20',
//       completionRate: 85,
//       modules: 8,
//       revenue: 75510
//     },
//     {
//       id: 'c3',
//       title: 'Corporate Banking Fundamentals',
//       category: 'Corporate',
//       status: 'published',
//       students: 156,
//       rating: 4.7,
//       duration: '5 weeks',
//       createdAt: '2024-01-10',
//       completionRate: 72,
//       modules: 10,
//       revenue: 46800
//     }
//   ]);

//   const [newCourse, setNewCourse] = useState({
//     title: '',
//     category: '',
//     duration: '',
//     price: '',
//     description: ''
//   });

//   const [students, setStudents] = useState([
//     {
//       id: 's1',
//       name: 'Fariya Islam',
//       email: 'fariya.islam@ificbank.com',
//       course: 'Advanced Banking Operations',
//       progress: 85,
//       lastActive: '2 hours ago',
//       status: 'active'
//     },
//     {
//       id: 's2',
//       name: 'Karim Abdullah',
//       email: 'manager.karim@ificbank.com',
//       course: 'Digital Banking & Fintech',
//       progress: 45,
//       lastActive: '1 day ago',
//       status: 'active'
//     },
//     {
//       id: 's3',
//       name: 'Fatima Begum',
//       email: 'officer.fatima@ificbank.com',
//       course: 'Corporate Banking Fundamentals',
//       progress: 92,
//       lastActive: '30 minutes ago',
//       status: 'completed'
//     }
//   ]);

//   const [analytics, setAnalytics] = useState({
//     revenue: 195765,
//     students: 590,
//     completionRate: 78,
//     averageRating: 4.8
//   });

//   const addCourse = () => {
//     const course = {
//       id: `c${courses.length + 1}`,
//       ...newCourse,
//       status: 'draft',
//       students: 0,
//       rating: 0,
//       completionRate: 0,
//       modules: 0,
//       revenue: 0,
//       createdAt: new Date().toISOString().split('T')[0]
//     };
//     setCourses([...courses, course]);
//     setNewCourse({ title: '', category: '', duration: '', price: '', description: '' });
//   };

//   const deleteCourse = (courseId) => {
//     setCourses(courses.filter(course => course.id !== courseId));
//   };

//   const stats = [
//     { label: 'My Courses', value: courses.length.toString(), icon: BookOpen, color: 'text-blue-600', change: '+2' },
//     { label: 'Total Students', value: analytics.students.toString(), icon: Users, color: 'text-green-600', change: '+12%' },
//     { label: 'Average Rating', value: analytics.averageRating.toString(), icon: Star, color: 'text-yellow-600', change: '+0.2' },
//     { label: 'Total Revenue', value: `$${analytics.revenue.toLocaleString()}`, icon: TrendingUp, color: 'text-orange-600', change: '+15%' }
//   ];

//   const recentActivities = [
//     { id: 1, student: 'Fariya Islam', action: 'completed module', course: 'Advanced Banking', time: '2 hours ago' },
//     { id: 2, student: 'Karim Abdullah', action: 'submitted quiz', course: 'Digital Banking', time: '4 hours ago' },
//     { id: 3, student: 'Fatima Begum', action: 'earned certificate', course: 'Corporate Banking', time: '1 day ago' },
//     { id: 4, student: 'Ahmad Khan', action: 'started new course', course: 'Banking Operations', time: '2 days ago' }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6">
//             <div>
//               <h1 className="text-3xl font-black text-gray-900">Instructor Dashboard</h1>
//               <p className="text-gray-600">Manage your courses and track student progress</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2">
//                 <Download className="w-5 h-5" />
//                 <span>Export Report</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <div className={`p-3 rounded-xl bg-gray-100 ${stat.color}`}>
//                   <stat.icon className="w-6 h-6" />
//                 </div>
//                 <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
//                   {stat.change}
//                 </span>
//               </div>
//               <div>
//                 <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
//                 <div className="text-sm text-gray-600">{stat.label}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//               <nav className="space-y-2">
//                 {[
//                   { id: 'my-courses', label: 'My Courses', icon: BookOpen },
//                   { id: 'students', label: 'Students', icon: Users },
//                   { id: 'analytics', label: 'Analytics', icon: BarChart3 },
//                   { id: 'messages', label: 'Messages', icon: MessageCircle },
//                   { id: 'create-course', label: 'Create Course', icon: Plus }
//                 ].map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => setActiveTab(item.id)}
//                     className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
//                       activeTab === item.id
//                         ? 'bg-red-50 text-red-700 border border-red-200'
//                         : 'text-gray-600 hover:bg-gray-50'
//                     }`}
//                   >
//                     <item.icon className="w-5 h-5" />
//                     <span className="font-semibold">{item.label}</span>
//                   </button>
//                 ))}
//               </nav>

//               {/* Recent Activities */}
//               <div className="mt-8">
//                 <h3 className="font-semibold text-gray-900 mb-4">Recent Activities</h3>
//                 <div className="space-y-3">
//                   {recentActivities.map((activity) => (
//                     <div key={activity.id} className="flex items-start space-x-3 text-sm">
//                       <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
//                       <div>
//                         <p className="text-gray-900 font-medium">{activity.student}</p>
//                         <p className="text-gray-600">{activity.action} in {activity.course}</p>
//                         <p className="text-gray-400 text-xs">{activity.time}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* My Courses Tab */}
//             {activeTab === 'my-courses' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-2xl font-black text-gray-900">My Courses</h2>
//                   <div className="flex items-center space-x-4">
//                     <div className="relative">
//                       <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                       <input
//                         type="text"
//                         placeholder="Search courses..."
//                         className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       />
//                     </div>
//                     <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2">
//                       <Plus className="w-5 h-5" />
//                       <span>New Course</span>  
//                     </button>
//                   </div>
//                 </div>

//                 {/* Courses Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {courses.map((course) => (
//                     <motion.div
//                       key={course.id}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
//                     >
//                       <div className="flex items-start justify-between mb-4">
//                         <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
//                           <BookOpen className="w-6 h-6 text-red-600" />
//                         </div>
//                         <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
//                           course.status === 'published' 
//                             ? 'bg-green-100 text-green-700' 
//                             : 'bg-yellow-100 text-yellow-700'
//                         }`}>
//                           {course.status}
//                         </span>
//                       </div>
                      
//                       <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
//                       <p className="text-gray-600 text-sm mb-4">{course.category} • {course.duration}</p>
                      
//                       <div className="space-y-3 mb-4">
//                         <div className="flex justify-between text-sm">
//                           <span className="text-gray-600">Students</span>
//                           <span className="font-semibold">{course.students}</span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                           <span className="text-gray-600">Completion Rate</span>
//                           <span className="font-semibold">{course.completionRate}%</span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                           <span className="text-gray-600">Revenue</span>
//                           <span className="font-semibold">${course.revenue.toLocaleString()}</span>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-4">
//                           <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
//                             <Edit3 className="w-4 h-4" />
//                           </button>
//                           <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
//                             <Eye className="w-4 h-4" />
//                           </button>
//                           <button 
//                             onClick={() => deleteCourse(course.id)}
//                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </button>
//                         </div>
//                         <div className="flex items-center space-x-1 text-yellow-600">
//                           <Star className="w-4 h-4 fill-current" />
//                           <span className="text-sm font-semibold">{course.rating}</span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Students Tab */}
//             {activeTab === 'students' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <h2 className="text-2xl font-black text-gray-900 mb-6">Student Management</h2>
                
//                 <div className="space-y-4">
//                   {students.map((student) => (
//                     <motion.div
//                       key={student.id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                           <Users className="w-6 h-6 text-blue-600" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-gray-900">{student.name}</h3>
//                           <p className="text-sm text-gray-600">{student.email}</p>
//                           <p className="text-sm text-gray-500">{student.course}</p>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center space-x-6">
//                         <div className="text-center">
//                           <div className="text-lg font-bold text-gray-900">{student.progress}%</div>
//                           <div className="text-xs text-gray-500">Progress</div>
//                         </div>
//                         <div className="text-center">
//                           <div className={`flex items-center space-x-1 ${
//                             student.status === 'completed' ? 'text-green-600' : 'text-blue-600'
//                           }`}>
//                             {student.status === 'completed' ? (
//                               <CheckCircle className="w-4 h-4" />
//                             ) : (
//                               <PlayCircle className="w-4 h-4" />
//                             )}
//                             <span className="text-sm font-semibold capitalize">{student.status}</span>
//                           </div>
//                           <div className="text-xs text-gray-500">Last active: {student.lastActive}</div>
//                         </div>
//                         <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
//                           <MessageCircle className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Analytics Tab */}
//             {activeTab === 'analytics' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <h2 className="text-2xl font-black text-gray-900 mb-6">Course Analytics</h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                   <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
//                     <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
//                     <div className="text-3xl font-black mb-2">${analytics.revenue.toLocaleString()}</div>
//                     <p className="text-blue-100">+15% from last month</p>
//                   </div>
                  
//                   <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 text-white">
//                     <h3 className="text-lg font-semibold mb-2">Student Engagement</h3>
//                     <div className="text-3xl font-black mb-2">{analytics.completionRate}%</div>
//                     <p className="text-green-100">Average course completion rate</p>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 rounded-2xl p-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Performance</h3>
//                   <div className="space-y-4">
//                     {courses.map((course) => (
//                       <div key={course.id} className="flex items-center justify-between">
//                         <span className="font-medium text-gray-900">{course.title}</span>
//                         <div className="flex items-center space-x-4">
//                           <span className="text-sm text-gray-600">{course.students} students</span>
//                           <span className="text-sm text-gray-600">{course.completionRate}% completion</span>
//                           <span className="text-sm font-semibold text-green-600">${course.revenue.toLocaleString()}</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Create Course Tab */}
//             {activeTab === 'create-course' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <h2 className="text-2xl font-black text-gray-900 mb-6">Create New Course</h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Course Title</label>
//                     <input
//                       type="text"
//                       value={newCourse.title}
//                       onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       placeholder="Enter course title"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
//                     <select
//                       value={newCourse.category}
//                       onChange={(e) => setNewCourse({...newCourse, category: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     >
//                       <option value="">Select Category</option>
//                       <option value="Operations">Operations</option>
//                       <option value="Technology">Technology</option>
//                       <option value="Compliance">Compliance</option>
//                       <option value="Corporate">Corporate</option>
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
//                     <input
//                       type="text"
//                       value={newCourse.duration}
//                       onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       placeholder="e.g., 6 weeks"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Price (BDT)</label>
//                     <input
//                       type="number"
//                       value={newCourse.price}
//                       onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       placeholder="Enter course price"
//                     />
//                   </div>
                  
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Course Description</label>
//                     <textarea
//                       value={newCourse.description}
//                       onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
//                       rows="4"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       placeholder="Describe your course..."
//                     />
//                   </div>
                  
//                   <div className="md:col-span-2">
//                     <button
//                       onClick={addCourse}
//                       className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2"
//                     >
//                       <Plus className="w-5 h-5" />
//                       <span>Create Course</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Messages Tab */}
//             {activeTab === 'messages' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <h2 className="text-2xl font-black text-gray-900 mb-6">Student Messages</h2>
//                 <div className="text-center py-12">
//                   <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">No messages yet</h3>
//                   <p className="text-gray-600">When students send you messages, they'll appear here.</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InstructorDashboard;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Plus, 
//   Trash2, 
//   Edit3, 
//   Users, 
//   BookOpen, 
//   BarChart3, 
//   MessageCircle,
//   Star, 
//   Clock,
//   Search,
//   Filter,
//   Download,
//   Eye,
//   PlayCircle,
//   CheckCircle,
//   XCircle,
//   Calendar,
//   TrendingUp
// } from 'lucide-react';

// const InstructorDashboard = () => {
//   const [activeTab, setActiveTab] = useState('my-courses');
//   const [courses, setCourses] = useState([
//     {
//       id: 'c1',
//       title: 'Advanced Banking Operations',
//       category: 'Operations',
//       status: 'published',
//       students: 245,
//       rating: 4.8,
//       duration: '6 weeks',
//       createdAt: '2024-01-15',
//       completionRate: 78,
//       modules: 12,
//       revenue: 73455
//     },
//     {
//       id: 'c2',
//       title: 'Digital Banking & Fintech',
//       category: 'Technology',
//       status: 'draft',
//       students: 189,
//       rating: 4.9,
//       duration: '4 weeks',
//       createdAt: '2024-01-20',
//       completionRate: 85,
//       modules: 8,
//       revenue: 75510
//     },
//     {
//       id: 'c3',
//       title: 'Corporate Banking Fundamentals',
//       category: 'Corporate',
//       status: 'published',
//       students: 156,
//       rating: 4.7,
//       duration: '5 weeks',
//       createdAt: '2024-01-10',
//       completionRate: 72,
//       modules: 10,
//       revenue: 46800
//     }
//   ]);

//   const [newCourse, setNewCourse] = useState({
//     title: '',
//     category: '',
//     duration: '',
//     price: '',
//     description: ''
//   });

//   const [students, setStudents] = useState([
//     {
//       id: 's1',
//       name: 'Fariya Islam',
//       email: 'fariya.islam@ificbank.com',
//       course: 'Advanced Banking Operations',
//       progress: 85,
//       lastActive: '2 hours ago',
//       status: 'active'
//     },
//     {
//       id: 's2',
//       name: 'Karim Abdullah',
//       email: 'manager.karim@ificbank.com',
//       course: 'Digital Banking & Fintech',
//       progress: 45,
//       lastActive: '1 day ago',
//       status: 'active'
//     },
//     {
//       id: 's3',
//       name: 'Fatima Begum',
//       email: 'officer.fatima@ificbank.com',
//       course: 'Corporate Banking Fundamentals',
//       progress: 92,
//       lastActive: '30 minutes ago',
//       status: 'completed'
//     }
//   ]);

//   const [analytics, setAnalytics] = useState({
//     revenue: 195765,
//     students: 590,
//     completionRate: 78,
//     averageRating: 4.8
//   });

//   const addCourse = () => {
//     if (!newCourse.title || !newCourse.category || !newCourse.duration || !newCourse.price) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     const course = {
//       id: `c${courses.length + 1}`,
//       ...newCourse,
//       status: 'draft',
//       students: 0,
//       rating: 0,
//       completionRate: 0,
//       modules: 0,
//       revenue: 0,
//       createdAt: new Date().toISOString().split('T')[0]
//     };
//     setCourses([...courses, course]);
//     setNewCourse({ title: '', category: '', duration: '', price: '', description: '' });
//     setActiveTab('my-courses'); // Switch to my-courses tab after creation
//   };

//   const deleteCourse = (courseId) => {
//     setCourses(courses.filter(course => course.id !== courseId));
//   };

//   const handleNewCourseClick = () => {
//     setActiveTab('create-course');
//   };

//   const stats = [
//     { label: 'My Courses', value: courses.length.toString(), icon: BookOpen, color: 'text-blue-600', change: '+2' },
//     { label: 'Total Students', value: analytics.students.toString(), icon: Users, color: 'text-green-600', change: '+12%' },
//     { label: 'Average Rating', value: analytics.averageRating.toString(), icon: Star, color: 'text-yellow-600', change: '+0.2' },
//     { label: 'Total Revenue', value: `BDT ${analytics.revenue.toLocaleString()}`, icon: TrendingUp, color: 'text-orange-600', change: '+15%' }
//   ];

//   const recentActivities = [
//     { id: 1, student: 'Fariya Islam', action: 'completed module', course: 'Advanced Banking', time: '2 hours ago' },
//     { id: 2, student: 'Karim Abdullah', action: 'submitted quiz', course: 'Digital Banking', time: '4 hours ago' },
//     { id: 3, student: 'Fatima Begum', action: 'earned certificate', course: 'Corporate Banking', time: '1 day ago' },
//     { id: 4, student: 'Ahmad Khan', action: 'started new course', course: 'Banking Operations', time: '2 days ago' }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6">
//             <div>
//               <h1 className="text-3xl font-black text-gray-900">Instructor Dashboard</h1>
//               <p className="text-gray-600">Manage your courses and track student progress</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2">
//                 <Download className="w-5 h-5" />
//                 <span>Export Report</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <div className={`p-3 rounded-xl bg-gray-100 ${stat.color}`}>
//                   <stat.icon className="w-6 h-6" />
//                 </div>
//                 <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
//                   {stat.change}
//                 </span>
//               </div>
//               <div>
//                 <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
//                 <div className="text-sm text-gray-600">{stat.label}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//               <nav className="space-y-2">
//                 {[
//                   { id: 'my-courses', label: 'My Courses', icon: BookOpen },
//                   { id: 'students', label: 'Students', icon: Users },
//                   { id: 'analytics', label: 'Analytics', icon: BarChart3 },
//                   { id: 'messages', label: 'Messages', icon: MessageCircle },
//                   { id: 'create-course', label: 'Create Course', icon: Plus }
//                 ].map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => setActiveTab(item.id)}
//                     className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
//                       activeTab === item.id
//                         ? 'bg-red-50 text-red-700 border border-red-200'
//                         : 'text-gray-600 hover:bg-gray-50'
//                     }`}
//                   >
//                     <item.icon className="w-5 h-5" />
//                     <span className="font-semibold">{item.label}</span>
//                   </button>
//                 ))}
//               </nav>

//               {/* Recent Activities */}
//               <div className="mt-8">
//                 <h3 className="font-semibold text-gray-900 mb-4">Recent Activities</h3>
//                 <div className="space-y-3">
//                   {recentActivities.map((activity) => (
//                     <div key={activity.id} className="flex items-start space-x-3 text-sm">
//                       <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
//                       <div>
//                         <p className="text-gray-900 font-medium">{activity.student}</p>
//                         <p className="text-gray-600">{activity.action} in {activity.course}</p>
//                         <p className="text-gray-400 text-xs">{activity.time}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* My Courses Tab */}
//             {activeTab === 'my-courses' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-2xl font-black text-gray-900">My Courses</h2>
//                   <div className="flex items-center space-x-4">
//                     <div className="relative">
//                       <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                       <input
//                         type="text"
//                         placeholder="Search courses..."
//                         className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       />
//                     </div>
//                     <button 
//                       onClick={handleNewCourseClick}
//                       className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2"
//                     >
//                       <Plus className="w-5 h-5" />
//                       <span>New Course</span>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Courses Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {courses.map((course) => (
//                     <motion.div
//                       key={course.id}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
//                     >
//                       <div className="flex items-start justify-between mb-4">
//                         <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
//                           <BookOpen className="w-6 h-6 text-red-600" />
//                         </div>
//                         <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
//                           course.status === 'published' 
//                             ? 'bg-green-100 text-green-700' 
//                             : 'bg-yellow-100 text-yellow-700'
//                         }`}>
//                           {course.status}
//                         </span>
//                       </div>
                      
//                       <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
//                       <p className="text-gray-600 text-sm mb-4">{course.category} • {course.duration}</p>
                      
//                       <div className="space-y-3 mb-4">
//                         <div className="flex justify-between text-sm">
//                           <span className="text-gray-600">Students</span>
//                           <span className="font-semibold">{course.students}</span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                           <span className="text-gray-600">Completion Rate</span>
//                           <span className="font-semibold">{course.completionRate}%</span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                           <span className="text-gray-600">Revenue</span>
//                           <span className="font-semibold">BDT {course.revenue.toLocaleString()}</span>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-4">
//                           <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
//                             <Edit3 className="w-4 h-4" />
//                           </button>
//                           <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
//                             <Eye className="w-4 h-4" />
//                           </button>
//                           <button 
//                             onClick={() => deleteCourse(course.id)}
//                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </button>
//                         </div>
//                         <div className="flex items-center space-x-1 text-yellow-600">
//                           <Star className="w-4 h-4 fill-current" />
//                           <span className="text-sm font-semibold">{course.rating}</span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Students Tab */}
//             {activeTab === 'students' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <h2 className="text-2xl font-black text-gray-900 mb-6">Student Management</h2>
                
//                 <div className="space-y-4">
//                   {students.map((student) => (
//                     <motion.div
//                       key={student.id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                           <Users className="w-6 h-6 text-blue-600" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-gray-900">{student.name}</h3>
//                           <p className="text-sm text-gray-600">{student.email}</p>
//                           <p className="text-sm text-gray-500">{student.course}</p>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center space-x-6">
//                         <div className="text-center">
//                           <div className="text-lg font-bold text-gray-900">{student.progress}%</div>
//                           <div className="text-xs text-gray-500">Progress</div>
//                         </div>
//                         <div className="text-center">
//                           <div className={`flex items-center space-x-1 ${
//                             student.status === 'completed' ? 'text-green-600' : 'text-blue-600'
//                           }`}>
//                             {student.status === 'completed' ? (
//                               <CheckCircle className="w-4 h-4" />
//                             ) : (
//                               <PlayCircle className="w-4 h-4" />
//                             )}
//                             <span className="text-sm font-semibold capitalize">{student.status}</span>
//                           </div>
//                           <div className="text-xs text-gray-500">Last active: {student.lastActive}</div>
//                         </div>
//                         <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
//                           <MessageCircle className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Analytics Tab */}
//             {activeTab === 'analytics' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <h2 className="text-2xl font-black text-gray-900 mb-6">Course Analytics</h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                   <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
//                     <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
//                     <div className="text-3xl font-black mb-2">BDT {analytics.revenue.toLocaleString()}</div>
//                     <p className="text-blue-100">+15% from last month</p>
//                   </div>
                  
//                   <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 text-white">
//                     <h3 className="text-lg font-semibold mb-2">Student Engagement</h3>
//                     <div className="text-3xl font-black mb-2">{analytics.completionRate}%</div>
//                     <p className="text-green-100">Average course completion rate</p>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 rounded-2xl p-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Performance</h3>
//                   <div className="space-y-4">
//                     {courses.map((course) => (
//                       <div key={course.id} className="flex items-center justify-between">
//                         <span className="font-medium text-gray-900">{course.title}</span>
//                         <div className="flex items-center space-x-4">
//                           <span className="text-sm text-gray-600">{course.students} students</span>
//                           <span className="text-sm text-gray-600">{course.completionRate}% completion</span>
//                           <span className="text-sm font-semibold text-green-600">BDT {course.revenue.toLocaleString()}</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Create Course Tab */}
//             {activeTab === 'create-course' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <h2 className="text-2xl font-black text-gray-900 mb-6">Create New Course</h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Course Title *</label>
//                     <input
//                       type="text"
//                       value={newCourse.title}
//                       onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       placeholder="Enter course title"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
//                     <select
//                       value={newCourse.category}
//                       onChange={(e) => setNewCourse({...newCourse, category: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     >
//                       <option value="">Select Category</option>
//                       <option value="Operations">Operations</option>
//                       <option value="Technology">Technology</option>
//                       <option value="Compliance">Compliance</option>
//                       <option value="Corporate">Corporate</option>
//                       <option value="Retail Banking">Retail Banking</option>
//                       <option value="Risk Management">Risk Management</option>
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Duration *</label>
//                     <input
//                       type="text"
//                       value={newCourse.duration}
//                       onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       placeholder="e.g., 6 weeks, 8 hours"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Price (BDT) *</label>
//                     <input
//                       type="number"
//                       value={newCourse.price}
//                       onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       placeholder="Enter course price in BDT"
//                     />
//                   </div>
                  
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">Course Description</label>
//                     <textarea
//                       value={newCourse.description}
//                       onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
//                       rows="4"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       placeholder="Describe your course content, learning objectives, and target audience..."
//                     />
//                   </div>
                  
//                   <div className="md:col-span-2 flex items-center space-x-4">
//                     <button
//                       onClick={addCourse}
//                       className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2"
//                     >
//                       <Plus className="w-5 h-5" />
//                       <span>Create Course</span>
//                     </button>
//                     <button
//                       onClick={() => setActiveTab('my-courses')}
//                       className="bg-gray-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Messages Tab */}
//             {activeTab === 'messages' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <h2 className="text-2xl font-black text-gray-900 mb-6">Student Messages</h2>
//                 <div className="text-center py-12">
//                   <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">No messages yet</h3>
//                   <p className="text-gray-600">When students send you messages, they'll appear here.</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InstructorDashboard;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Users, 
  BookOpen, 
  BarChart3, 
  MessageCircle,
  Star, 
  Clock,
  Search,
  Download,
  Eye,
  PlayCircle,
  CheckCircle,
  FileText,
  FolderOpen,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const InstructorDashboard = () => {
  const [activeTab, setActiveTab] = useState('my-courses');
  const [courses, setCourses] = useState([
    {
      id: 'c1',
      title: 'Advanced Banking Operations',
      category: 'Operations',
      status: 'published',
      students: 245,
      rating: 4.8,
      duration: '6 weeks',
      createdAt: '2024-01-15',
      completionRate: 78,
      modules: [
        {
          id: 'm1',
          title: 'Introduction to Banking Operations',
          duration: '2 hours',
          questions: [
            {
              id: 'q1',
              question: 'What is the primary function of a central bank?',
              type: 'multiple-choice',
              options: ['Issue currency', 'Manage commercial banks', 'Control inflation', 'All of the above'],
              correctAnswer: 3
            }
          ]
        }
      ]
    },
    {
      id: 'c2',
      title: 'Digital Banking & Fintech',
      category: 'Technology',
      status: 'draft',
      students: 189,
      rating: 4.9,
      duration: '4 weeks',
      createdAt: '2024-01-20',
      completionRate: 85,
      modules: []
    }
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [showModuleForm, setShowModuleForm] = useState(false);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [expandedCourses, setExpandedCourses] = useState([]);

  const [newCourse, setNewCourse] = useState({
    title: '',
    category: '',
    duration: '',
    description: ''
  });

  const [newModule, setNewModule] = useState({
    title: '',
    duration: '',
    description: ''
  });

  const [newQuestion, setNewQuestion] = useState({
    question: '',
    type: 'multiple-choice',
    options: ['', '', '', ''],
    correctAnswer: 0,
    explanation: ''
  });

  const [students, setStudents] = useState([
    {
      id: 's1',
      name: 'Fariya Islam',
      email: 'fariya.islam@ificbank.com',
      course: 'Advanced Banking Operations',
      progress: 85,
      lastActive: '2 hours ago',
      status: 'active'
    },
    {
      id: 's2',
      name: 'Karim Abdullah',
      email: 'manager.karim@ificbank.com',
      course: 'Digital Banking & Fintech',
      progress: 45,
      lastActive: '1 day ago',
      status: 'active'
    }
  ]);

  // Toggle course expansion
  const toggleCourseExpansion = (courseId) => {
    setExpandedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  // Add new course
  const addCourse = () => {
    if (!newCourse.title || !newCourse.category || !newCourse.duration) {
      alert('Please fill in all required fields');
      return;
    }

    const course = {
      id: `c${courses.length + 1}`,
      ...newCourse,
      status: 'draft',
      students: 0,
      rating: 0,
      completionRate: 0,
      modules: [],
      createdAt: new Date().toISOString().split('T')[0]
    };
    setCourses([...courses, course]);
    setNewCourse({ title: '', category: '', duration: '', description: '' });
    setActiveTab('my-courses');
  };

  // Add module to course
  const addModule = () => {
    if (!newModule.title || !newModule.duration) {
      alert('Please fill in module title and duration');
      return;
    }

    const module = {
      id: `m${Date.now()}`,
      ...newModule,
      questions: []
    };

    const updatedCourses = courses.map(course => 
      course.id === selectedCourse.id 
        ? { ...course, modules: [...course.modules, module] }
        : course
    );

    setCourses(updatedCourses);
    setNewModule({ title: '', duration: '', description: '' });
    setShowModuleForm(false);
  };

  // Add question to module
  const addQuestion = () => {
    if (!newQuestion.question || newQuestion.options.some(opt => !opt)) {
      alert('Please fill in question and all options');
      return;
    }

    const question = {
      id: `q${Date.now()}`,
      ...newQuestion
    };

    const updatedCourses = courses.map(course => 
      course.id === selectedCourse.id 
        ? {
            ...course,
            modules: course.modules.map(module =>
              module.id === selectedModule.id
                ? { ...module, questions: [...module.questions, question] }
                : module
            )
          }
        : course
    );

    setCourses(updatedCourses);
    setNewQuestion({
      question: '',
      type: 'multiple-choice',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: ''
    });
    setShowQuestionForm(false);
  };

  // Delete course
  const deleteCourse = (courseId) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  // Delete module
  const deleteModule = (courseId, moduleId) => {
    const updatedCourses = courses.map(course =>
      course.id === courseId
        ? { ...course, modules: course.modules.filter(module => module.id !== moduleId) }
        : course
    );
    setCourses(updatedCourses);
  };

  // Delete question
  const deleteQuestion = (courseId, moduleId, questionId) => {
    const updatedCourses = courses.map(course =>
      course.id === courseId
        ? {
            ...course,
            modules: course.modules.map(module =>
              module.id === moduleId
                ? { ...module, questions: module.questions.filter(q => q.id !== questionId) }
                : module
            )
          }
        : course
    );
    setCourses(updatedCourses);
  };

  const stats = [
    { label: 'My Courses', value: courses.length.toString(), icon: BookOpen, color: 'text-blue-600', change: '+2' },
    { label: 'Total Students', value: students.length.toString(), icon: Users, color: 'text-green-600', change: '+12%' },
    { label: 'Average Rating', value: '4.8', icon: Star, color: 'text-yellow-600', change: '+0.2' },
    { label: 'Total Modules', value: courses.reduce((acc, course) => acc + course.modules.length, 0).toString(), icon: FolderOpen, color: 'text-purple-600', change: '+5' }
  ];

  const recentActivities = [
    { id: 1, student: 'Fariya Islam', action: 'completed module', course: 'Advanced Banking', time: '2 hours ago' },
    { id: 2, student: 'Karim Abdullah', action: 'submitted quiz', course: 'Digital Banking', time: '4 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Instructor Dashboard</h1>
              <p className="text-gray-600">Manage your courses and track student progress</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-red-600 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm sm:text-base">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 rounded-xl bg-gray-100 ${stat.color}`}>
                  <stat.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                  {stat.change}
                </span>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
              <nav className="space-y-2">
                {[
                  { id: 'my-courses', label: 'My Courses', icon: BookOpen },
                  { id: 'students', label: 'Students', icon: Users },
                  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
                  { id: 'messages', label: 'Messages', icon: MessageCircle }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-left transition-colors text-sm sm:text-base ${
                      activeTab === item.id
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold">{item.label}</span>
                  </button>
                ))}
              </nav>

              {/* Recent Activities */}
              <div className="mt-6 sm:mt-8">
                <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Recent Activities</h3>
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2"></div>
                      <div>
                        <p className="text-gray-900 font-medium">{activity.student}</p>
                        <p className="text-gray-600">{activity.action} in {activity.course}</p>
                        <p className="text-gray-400 text-xs">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* My Courses Tab */}
            {activeTab === 'my-courses' && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">My Courses</h2>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                      <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search courses..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    <button 
                      onClick={() => setActiveTab('create-course')}
                      className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>New Course</span>
                    </button>
                  </div>
                </div>

                {/* Courses List */}
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
                      {/* Course Header */}
                      <div className="bg-white p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 text-lg sm:text-xl">{course.title}</h3>
                              <p className="text-gray-600 text-sm sm:text-base">{course.category} • {course.duration}</p>
                              <div className="flex flex-wrap items-center gap-2 mt-2 text-xs sm:text-sm text-gray-500">
                                <span>{course.students} students</span>
                                <span>⭐ {course.rating}</span>
                                <span>{course.completionRate}% completion</span>
                                <span className={`px-2 py-1 rounded-lg ${
                                  course.status === 'published' 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                  {course.status}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 self-end sm:self-auto">
                            <button 
                              onClick={() => toggleCourseExpansion(course.id)}
                              className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {expandedCourses.includes(course.id) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => deleteCourse(course.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Expanded Modules Section */}
                      {expandedCourses.includes(course.id) && (
                        <div className="bg-gray-50 border-t border-gray-200 p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                            <h4 className="font-semibold text-gray-900 text-lg">Course Modules</h4>
                            <button
                              onClick={() => {
                                setSelectedCourse(course);
                                setShowModuleForm(true);
                              }}
                              className="bg-green-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2 text-sm"
                            >
                              <Plus className="w-4 h-4" />
                              <span>Add Module</span>
                            </button>
                          </div>

                          {/* Modules List */}
                          <div className="space-y-3">
                            {course.modules.map((module) => (
                              <div key={module.id} className="bg-white rounded-xl p-4 border border-gray-200">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div className="flex items-start space-x-3">
                                    <FolderOpen className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <h5 className="font-semibold text-gray-900">{module.title}</h5>
                                      <p className="text-gray-600 text-sm">{module.duration}</p>
                                      <p className="text-gray-500 text-xs mt-1">
                                        {module.questions?.length || 0} questions
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2 self-end sm:self-auto">
                                    <button
                                      onClick={() => {
                                        setSelectedCourse(course);
                                        setSelectedModule(module);
                                        setShowQuestionForm(true);
                                      }}
                                      className="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-1 text-xs"
                                    >
                                      <Plus className="w-3 h-3" />
                                      <span>Add Question</span>
                                    </button>
                                    <button 
                                      onClick={() => deleteModule(course.id, module.id)}
                                      className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>

                                {/* Questions List */}
                                {module.questions && module.questions.length > 0 && (
                                  <div className="mt-3 pl-8">
                                    <h6 className="font-medium text-gray-900 text-sm mb-2">Questions:</h6>
                                    <div className="space-y-2">
                                      {module.questions.map((question, qIndex) => (
                                        <div key={question.id} className="bg-gray-50 rounded-lg p-3 text-sm">
                                          <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                              <p className="font-medium text-gray-900">
                                                {qIndex + 1}. {question.question}
                                              </p>
                                              <div className="mt-2 space-y-1">
                                                {question.options.map((option, optIndex) => (
                                                  <div key={optIndex} className="flex items-center space-x-2">
                                                    <div className={`w-4 h-4 rounded-full border ${
                                                      optIndex === question.correctAnswer 
                                                        ? 'border-green-500 bg-green-100' 
                                                        : 'border-gray-300'
                                                    }`}></div>
                                                    <span className={optIndex === question.correctAnswer ? 'text-green-700 font-medium' : 'text-gray-600'}>
                                                      {option}
                                                    </span>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                            <button
                                              onClick={() => deleteQuestion(course.id, module.id, question.id)}
                                              className="p-1 text-red-600 hover:bg-red-50 rounded ml-2"
                                            >
                                              <Trash2 className="w-3 h-3" />
                                            </button>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}

                            {course.modules.length === 0 && (
                              <div className="text-center py-8 text-gray-500">
                                <FolderOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                                <p>No modules added yet</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Students Tab */}
            {activeTab === 'students' && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6">Student Management</h2>
                
                <div className="space-y-4">
                  {students.map((student) => (
                    <motion.div
                      key={student.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors gap-4 sm:gap-0"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{student.name}</h3>
                          <p className="text-sm text-gray-600">{student.email}</p>
                          <p className="text-sm text-gray-500">{student.course}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 sm:space-x-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">{student.progress}%</div>
                          <div className="text-xs text-gray-500">Progress</div>
                        </div>
                        <div className="text-center">
                          <div className={`flex items-center space-x-1 ${
                            student.status === 'completed' ? 'text-green-600' : 'text-blue-600'
                          }`}>
                            {student.status === 'completed' ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <PlayCircle className="w-4 h-4" />
                            )}
                            <span className="text-sm font-semibold capitalize">{student.status}</span>
                          </div>
                          <div className="text-xs text-gray-500">Last active: {student.lastActive}</div>
                        </div>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <MessageCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6">Course Analytics</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">Student Engagement</h3>
                    <div className="text-2xl sm:text-3xl font-black mb-2">78%</div>
                    <p className="text-blue-100">Average course completion rate</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">Course Ratings</h3>
                    <div className="text-2xl sm:text-3xl font-black mb-2">4.8/5.0</div>
                    <p className="text-green-100">Average student satisfaction</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Performance</h3>
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <div key={course.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="font-medium text-gray-900">{course.title}</span>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-gray-600">{course.students} students</span>
                          <span className="text-gray-600">{course.completionRate}% completion</span>
                          <span className="text-yellow-600 font-semibold">⭐ {course.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Create Course Tab */}
            {activeTab === 'create-course' && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6">Create New Course</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Course Title *</label>
                    <input
                      type="text"
                      value={newCourse.title}
                      onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter course title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                    <select
                      value={newCourse.category}
                      onChange={(e) => setNewCourse({...newCourse, category: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">Select Category</option>
                      <option value="Operations">Operations</option>
                      <option value="Technology">Technology</option>
                      <option value="Compliance">Compliance</option>
                      <option value="Corporate">Corporate</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Duration *</label>
                    <input
                      type="text"
                      value={newCourse.duration}
                      onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="e.g., 6 weeks"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Course Description</label>
                    <textarea
                      value={newCourse.description}
                      onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Describe your course..."
                    />
                  </div>
                  
                  <div className="md:col-span-2 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={addCourse}
                      className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 flex-1 sm:flex-none text-sm sm:text-base"
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Create Course</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('my-courses')}
                      className="bg-gray-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-600 transition-colors flex-1 sm:flex-none text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6">Student Messages</h2>
                <div className="text-center py-8 sm:py-12">
                  <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No messages yet</h3>
                  <p className="text-gray-600">When students send you messages, they'll appear here.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Module Modal */}
      {showModuleForm && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-black text-gray-900 mb-4">Add New Module</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Module Title *</label>
                <input
                  type="text"
                  value={newModule.title}
                  onChange={(e) => setNewModule({...newModule, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter module title"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Duration *</label>
                <input
                  type="text"
                  value={newModule.duration}
                  onChange={(e) => setNewModule({...newModule, duration: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="e.g., 2 hours"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  value={newModule.description}
                  onChange={(e) => setNewModule({...newModule, description: e.target.value})}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Module description..."
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={addModule}
                  className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex-1"
                >
                  Add Module
                </button>
                <button
                  onClick={() => setShowModuleForm(false)}
                  className="bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Question Modal */}
      {showQuestionForm && selectedCourse && selectedModule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-black text-gray-900 mb-4">Add Question to {selectedModule.title}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Question *</label>
                <textarea
                  value={newQuestion.question}
                  onChange={(e) => setNewQuestion({...newQuestion, question: e.target.value})}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your question..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Question Type</label>
                <select
                  value={newQuestion.type}
                  onChange={(e) => setNewQuestion({...newQuestion, type: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="multiple-choice">Multiple Choice</option>
                  <option value="true-false">True/False</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Options *</label>
                <div className="space-y-2">
                  {newQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="correctAnswer"
                        checked={newQuestion.correctAnswer === index}
                        onChange={() => setNewQuestion({...newQuestion, correctAnswer: index})}
                        className="text-red-600 focus:ring-red-500"
                      />
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...newQuestion.options];
                          newOptions[index] = e.target.value;
                          setNewQuestion({...newQuestion, options: newOptions});
                        }}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder={`Option ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Explanation</label>
                <textarea
                  value={newQuestion.explanation}
                  onChange={(e) => setNewQuestion({...newQuestion, explanation: e.target.value})}
                  rows="2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Explanation for the correct answer..."
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={addQuestion}
                  className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex-1"
                >
                  Add Question
                </button>
                <button
                  onClick={() => setShowQuestionForm(false)}
                  className="bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorDashboard;