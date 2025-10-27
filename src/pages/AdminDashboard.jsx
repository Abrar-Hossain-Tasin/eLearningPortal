// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Plus, 
//   Trash2, 
//   Edit3, 
//   Users, 
//   BookOpen, 
//   BarChart3, 
//   Settings,
//   Search,
//   Filter,
//   Download,
//   Upload
// } from 'lucide-react';

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('courses');
//   const [courses, setCourses] = useState([
//     {
//       id: 'c1',
//       title: 'Advanced Banking Operations',
//       instructor: 'Farhana Rahman',
//       category: 'Operations',
//       status: 'published',
//       students: 245,
//       rating: 4.8,
//       duration: '6 weeks',
//       createdAt: '2024-01-15',
//       price: 299
//     },
//     {
//       id: 'c2',
//       title: 'Digital Banking & Fintech',
//       instructor: 'Mahmud Hasan',
//       category: 'Technology',
//       status: 'draft',
//       students: 189,
//       rating: 4.9,
//       duration: '4 weeks',
//       createdAt: '2024-01-20',
//       price: 399
//     }
//   ]);

//   const [newCourse, setNewCourse] = useState({
//     title: '',
//     instructor: '',
//     category: '',
//     duration: '',
//     price: '',
//     description: ''
//   });

//   const addCourse = () => {
//     const course = {
//       id: `c${courses.length + 1}`,
//       ...newCourse,
//       status: 'draft',
//       students: 0,
//       rating: 0,
//       createdAt: new Date().toISOString().split('T')[0]
//     };
//     setCourses([...courses, course]);
//     setNewCourse({ title: '', instructor: '', category: '', duration: '', price: '', description: '' });
//   };

//   const deleteCourse = (courseId) => {
//     setCourses(courses.filter(course => course.id !== courseId));
//   };

//   const stats = [
//     { label: 'Total Courses', value: '45', icon: BookOpen, color: 'text-blue-600', change: '+12%' },
//     { label: 'Active Students', value: '2,847', icon: Users, color: 'text-green-600', change: '+8%' },
//     { label: 'Completion Rate', value: '78%', icon: BarChart3, color: 'text-purple-600', change: '+5%' },
//     { label: 'Revenue', value: '$124,580', icon: BarChart3, color: 'text-orange-600', change: '+15%' }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6">
//             <div>
//               <h1 className="text-3xl font-black text-gray-900">Admin Dashboard</h1>
//               <p className="text-gray-600">Manage courses, users, and platform settings</p>
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
//                   { id: 'courses', label: 'Course Management', icon: BookOpen },
//                   { id: 'users', label: 'User Management', icon: Users },
//                   { id: 'analytics', label: 'Analytics', icon: BarChart3 },
//                   { id: 'settings', label: 'Settings', icon: Settings }
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
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {activeTab === 'courses' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-2xl font-black text-gray-900">Course Management</h2>
//                   <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2">
//                     <Plus className="w-5 h-5" />
//                     <span>Add New Course</span>
//                   </button>
//                 </div>

//                 {/* Add Course Form */}
//                 <div className="bg-gray-50 rounded-2xl p-6 mb-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Course</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input
//                       type="text"
//                       placeholder="Course Title"
//                       value={newCourse.title}
//                       onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
//                       className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Instructor"
//                       value={newCourse.instructor}
//                       onChange={(e) => setNewCourse({...newCourse, instructor: e.target.value})}
//                       className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     />
//                     <select
//                       value={newCourse.category}
//                       onChange={(e) => setNewCourse({...newCourse, category: e.target.value})}
//                       className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     >
//                       <option value="">Select Category</option>
//                       <option value="Operations">Operations</option>
//                       <option value="Technology">Technology</option>
//                       <option value="Compliance">Compliance</option>
//                       <option value="Corporate">Corporate</option>
//                     </select>
//                     <input
//                       type="text"
//                       placeholder="Duration (e.g., 6 weeks)"
//                       value={newCourse.duration}
//                       onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
//                       className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     />
//                     <input
//                       type="number"
//                      placeholder="Price (BDT)" 
//                       value={newCourse.price}
//                       onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
//                       className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     />
//                     <button
//                       onClick={addCourse}
//                       className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
//                     >
//                       <Plus className="w-5 h-5" />
//                       <span>Create Course</span>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Courses List */}
//                 <div className="space-y-4">
//                   {courses.map((course) => (
//                     <motion.div
//                       key={course.id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
//                     >
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-4">
//                           <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
//                             <BookOpen className="w-6 h-6 text-red-600" />
//                           </div>
//                           <div>
//                             <h3 className="font-semibold text-gray-900">{course.title}</h3>
//                             <p className="text-sm text-gray-600">by {course.instructor} • {course.category}</p>
//                             <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
//                               <span>{course.students} students</span>
//                               <span>⭐ {course.rating}</span>
//                               <span>{course.duration}</span>
//                               <span className={`px-2 py-1 rounded-lg ${
//                                 course.status === 'published' 
//                                   ? 'bg-green-100 text-green-700' 
//                                   : 'bg-yellow-100 text-yellow-700'
//                               }`}>
//                                 {course.status}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
//                           <Edit3 className="w-4 h-4" />
//                         </button>
//                         <button 
//                           onClick={() => deleteCourse(course.id)}
//                           className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === 'users' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <h2 className="text-2xl font-black text-gray-900 mb-6">User Management</h2>
//                 {/* User management content */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Plus, 
//   Trash2, 
//   Edit3, 
//   Users, 
//   BookOpen, 
//   BarChart3, 
//   Settings,
//   Search,
//   Download,
//   X,
//   Save,
//   Calendar,
//   UserCheck,
//   Clock
// } from 'lucide-react';

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('courses');
//   const [courses, setCourses] = useState([
//     {
//       id: 'c1',
//       title: 'Advanced Banking Operations',
//       instructor: 'Farhana Rahman',
//       category: 'Operations',
//       status: 'published',
//       students: 245,
//       rating: 4.8,
//       duration: '6 weeks',
//       createdAt: '2024-01-15',
//       description: 'Comprehensive course covering advanced banking operations and procedures.'
//     },
//     {
//       id: 'c2',
//       title: 'Digital Banking & Fintech',
//       instructor: 'Mahmud Hasan',
//       category: 'Technology',
//       status: 'draft',
//       students: 189,
//       rating: 4.9,
//       duration: '4 weeks',
//       createdAt: '2024-01-20',
//       description: 'Exploring digital banking solutions and financial technology innovations.'
//     }
//   ]);

//   const [users, setUsers] = useState([
//     {
//       id: 'u1',
//       name: 'Amina Khan',
//       email: 'amina@example.com',
//       role: 'Student',
//       status: 'active',
//       joinDate: '2024-01-10',
//       coursesEnrolled: 5
//     },
//     {
//       id: 'u2',
//       name: 'Rahim Ahmed',
//       email: 'rahim@example.com',
//       role: 'Instructor',
//       status: 'active',
//       joinDate: '2024-01-05',
//       coursesEnrolled: 3
//     }
//   ]);

//   const [newCourse, setNewCourse] = useState({
//     title: '',
//     instructor: '',
//     category: '',
//     duration: '',
//     description: ''
//   });

//   const [editingCourse, setEditingCourse] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('all');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [showCourseForm, setShowCourseForm] = useState(false);

//   // Filter courses based on search and filters
//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = categoryFilter === 'all' || course.category === categoryFilter;
//     const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
    
//     return matchesSearch && matchesCategory && matchesStatus;
//   });

//   const addCourse = () => {
//     if (!newCourse.title || !newCourse.instructor || !newCourse.category) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     const course = {
//       id: `c${Date.now()}`,
//       ...newCourse,
//       status: 'draft',
//       students: 0,
//       rating: 0,
//       createdAt: new Date().toISOString().split('T')[0]
//     };
//     setCourses([...courses, course]);
//     setNewCourse({ title: '', instructor: '', category: '', duration: '', description: '' });
//     setShowCourseForm(false);
//   };

//   const updateCourse = () => {
//     if (!editingCourse.title || !editingCourse.instructor || !editingCourse.category) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     setCourses(courses.map(course => 
//       course.id === editingCourse.id ? editingCourse : course
//     ));
//     setEditingCourse(null);
//   };

//   const deleteCourse = (courseId) => {
//     if (window.confirm('Are you sure you want to delete this course?')) {
//       setCourses(courses.filter(course => course.id !== courseId));
//     }
//   };

//   // Simple CSV export function
//   const exportToCSV = (data, filename) => {
//     const headers = Object.keys(data[0]).join(',');
//     const rows = data.map(row => 
//       Object.values(row).map(value => 
//         typeof value === 'string' && value.includes(',') ? `"${value}"` : value
//       ).join(',')
//     );
    
//     const csv = [headers, ...rows].join('\n');
//     const blob = new Blob([csv], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `${filename}.csv`;
//     link.click();
//     window.URL.revokeObjectURL(url);
//   };

//   const exportCourses = () => {
//     const exportData = filteredCourses.map(course => ({
//       Title: course.title,
//       Instructor: course.instructor,
//       Category: course.category,
//       Status: course.status,
//       Students: course.students,
//       Rating: course.rating,
//       Duration: course.duration,
//       'Created Date': course.createdAt,
//       Description: course.description
//     }));
//     exportToCSV(exportData, 'courses-report');
//   };

//   const exportUsers = () => {
//     const exportData = users.map(user => ({
//       Name: user.name,
//       Email: user.email,
//       Role: user.role,
//       Status: user.status,
//       'Join Date': user.joinDate,
//       'Courses Enrolled': user.coursesEnrolled
//     }));
//     exportToCSV(exportData, 'users-report');
//   };

//   // Alternative: Simple text-based PDF-like export
//   const exportToText = (data, filename) => {
//     let content = `${filename}\n\n`;
//     content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;
    
//     data.forEach((item, index) => {
//       content += `Item ${index + 1}:\n`;
//       Object.entries(item).forEach(([key, value]) => {
//         content += `  ${key}: ${value}\n`;
//       });
//       content += '\n';
//     });

//     const blob = new Blob([content], { type: 'text/plain' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `${filename}.txt`;
//     link.click();
//     window.URL.revokeObjectURL(url);
//   };

//   const stats = [
//     { 
//       label: 'Total Courses', 
//       value: courses.length.toString(), 
//       icon: BookOpen, 
//       color: 'text-blue-600', 
//       change: '+12%' 
//     },
//     { 
//       label: 'Active Students', 
//       value: '2,847', 
//       icon: Users, 
//       color: 'text-green-600', 
//       change: '+8%' 
//     },
//     { 
//       label: 'Completion Rate', 
//       value: '78%', 
//       icon: BarChart3, 
//       color: 'text-purple-600', 
//       change: '+5%' 
//     },
//     { 
//       label: 'Instructors', 
//       value: '45', 
//       icon: UserCheck, 
//       color: 'text-orange-600', 
//       change: '+3%' 
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 gap-4">
//             <div>
//               <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Admin Dashboard</h1>
//               <p className="text-gray-600">Manage courses, users, and platform settings</p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <button 
//                 onClick={activeTab === 'courses' ? exportCourses : exportUsers}
//                 className="bg-red-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm sm:text-base"
//               >
//                 <Download className="w-4 h-4 sm:w-5 sm:h-5" />
//                 <span>Export {activeTab === 'courses' ? 'Courses' : 'Users'}</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <div className={`p-3 rounded-xl bg-gray-100 ${stat.color}`}>
//                   <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
//                 </div>
//                 <span className="text-xs sm:text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
//                   {stat.change}
//                 </span>
//               </div>
//               <div>
//                 <div className="text-xl sm:text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
//                 <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
//               <nav className="space-y-2">
//                 {[
//                   { id: 'courses', label: 'Course Management', icon: BookOpen },
//                   { id: 'users', label: 'User Management', icon: Users },
//                   { id: 'analytics', label: 'Analytics', icon: BarChart3 },
//                   { id: 'settings', label: 'Settings', icon: Settings }
//                 ].map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => setActiveTab(item.id)}
//                     className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl text-left transition-colors text-sm sm:text-base ${
//                       activeTab === item.id
//                         ? 'bg-red-50 text-red-700 border border-red-200'
//                         : 'text-gray-600 hover:bg-gray-50'
//                     }`}
//                   >
//                     <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span className="font-semibold">{item.label}</span>
//                   </button>
//                 ))}
//               </nav>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {activeTab === 'courses' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//                   <h2 className="text-xl sm:text-2xl font-black text-gray-900">Course Management</h2>
//                   <button 
//                     onClick={() => setShowCourseForm(true)}
//                     className="bg-red-600 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm sm:text-base w-full sm:w-auto justify-center"
//                   >
//                     <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span>Add New Course</span>
//                   </button>
//                 </div>

//                 {/* Search and Filters */}
//                 <div className="flex flex-col sm:flex-row gap-4 mb-6">
//                   <div className="relative flex-1">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                     <input
//                       type="text"
//                       placeholder="Search courses..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
//                     />
//                   </div>
//                   <div className="flex gap-2">
//                     <select
//                       value={categoryFilter}
//                       onChange={(e) => setCategoryFilter(e.target.value)}
//                       className="px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
//                     >
//                       <option value="all">All Categories</option>
//                       <option value="Operations">Operations</option>
//                       <option value="Technology">Technology</option>
//                       <option value="Compliance">Compliance</option>
//                       <option value="Corporate">Corporate</option>
//                     </select>
//                     <select
//                       value={statusFilter}
//                       onChange={(e) => setStatusFilter(e.target.value)}
//                       className="px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
//                     >
//                       <option value="all">All Status</option>
//                       <option value="published">Published</option>
//                       <option value="draft">Draft</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Add/Edit Course Form */}
//                 {(showCourseForm || editingCourse) && (
//                   <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6">
//                     <div className="flex justify-between items-center mb-4">
//                       <h3 className="text-lg font-semibold text-gray-900">
//                         {editingCourse ? 'Edit Course' : 'Create New Course'}
//                       </h3>
//                       <button
//                         onClick={() => {
//                           setShowCourseForm(false);
//                           setEditingCourse(null);
//                         }}
//                         className="text-gray-500 hover:text-gray-700"
//                       >
//                         <X className="w-5 h-5" />
//                       </button>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <input
//                         type="text"
//                         placeholder="Course Title *"
//                         value={editingCourse ? editingCourse.title : newCourse.title}
//                         onChange={(e) => editingCourse 
//                           ? setEditingCourse({...editingCourse, title: e.target.value})
//                           : setNewCourse({...newCourse, title: e.target.value})
//                         }
//                         className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Instructor *"
//                         value={editingCourse ? editingCourse.instructor : newCourse.instructor}
//                         onChange={(e) => editingCourse 
//                           ? setEditingCourse({...editingCourse, instructor: e.target.value})
//                           : setNewCourse({...newCourse, instructor: e.target.value})
//                         }
//                         className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
//                       />
//                       <select
//                         value={editingCourse ? editingCourse.category : newCourse.category}
//                         onChange={(e) => editingCourse 
//                           ? setEditingCourse({...editingCourse, category: e.target.value})
//                           : setNewCourse({...newCourse, category: e.target.value})
//                         }
//                         className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
//                       >
//                         <option value="">Select Category *</option>
//                         <option value="Operations">Operations</option>
//                         <option value="Technology">Technology</option>
//                         <option value="Compliance">Compliance</option>
//                         <option value="Corporate">Corporate</option>
//                       </select>
//                       <input
//                         type="text"
//                         placeholder="Duration (e.g., 6 weeks)"
//                         value={editingCourse ? editingCourse.duration : newCourse.duration}
//                         onChange={(e) => editingCourse 
//                           ? setEditingCourse({...editingCourse, duration: e.target.value})
//                           : setNewCourse({...newCourse, duration: e.target.value})
//                         }
//                         className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
//                       />
//                       <textarea
//                         placeholder="Course Description"
//                         value={editingCourse ? editingCourse.description : newCourse.description}
//                         onChange={(e) => editingCourse 
//                           ? setEditingCourse({...editingCourse, description: e.target.value})
//                           : setNewCourse({...newCourse, description: e.target.value})
//                         }
//                         rows="3"
//                         className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm md:col-span-2"
//                       />
//                       <button
//                         onClick={editingCourse ? updateCourse : addCourse}
//                         className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-sm md:col-span-2"
//                       >
//                         <Save className="w-4 h-4" />
//                         <span>{editingCourse ? 'Update Course' : 'Create Course'}</span>
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* Courses List */}
//                 <div className="space-y-4">
//                   {filteredCourses.length === 0 ? (
//                     <div className="text-center py-8 text-gray-500">
//                       No courses found matching your criteria.
//                     </div>
//                   ) : (
//                     filteredCourses.map((course) => (
//                       <motion.div
//                         key={course.id}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors gap-4"
//                       >
//                         <div className="flex-1">
//                           <div className="flex items-start space-x-4">
//                             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                               <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
//                             </div>
//                             <div className="flex-1">
//                               <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{course.title}</h3>
//                               <p className="text-xs sm:text-sm text-gray-600">by {course.instructor} • {course.category}</p>
//                               <p className="text-xs text-gray-500 mt-1 line-clamp-2">{course.description}</p>
//                               <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs text-gray-500">
//                                 <span className="flex items-center space-x-1">
//                                   <Users className="w-3 h-3" />
//                                   <span>{course.students} students</span>
//                                 </span>
//                                 <span>⭐ {course.rating}</span>
//                                 <span className="flex items-center space-x-1">
//                                   <Clock className="w-3 h-3" />
//                                   <span>{course.duration}</span>
//                                 </span>
//                                 <span className={`px-2 py-1 rounded-lg text-xs ${
//                                   course.status === 'published' 
//                                     ? 'bg-green-100 text-green-700' 
//                                     : 'bg-yellow-100 text-yellow-700'
//                                 }`}>
//                                   {course.status}
//                                 </span>
//                                 <span className="flex items-center space-x-1">
//                                   <Calendar className="w-3 h-3" />
//                                   <span>{course.createdAt}</span>
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-2 self-end sm:self-auto">
//                           <button 
//                             onClick={() => setEditingCourse(course)}
//                             className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                           >
//                             <Edit3 className="w-4 h-4" />
//                           </button>
//                           <button 
//                             onClick={() => deleteCourse(course.id)}
//                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </motion.div>
//                     ))
//                   )}
//                 </div>
//               </div>
//             )}

//             {activeTab === 'users' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//                   <h2 className="text-xl sm:text-2xl font-black text-gray-900">User Management</h2>
//                   <div className="flex gap-2 w-full sm:w-auto">
//                     <button className="bg-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2 text-sm w-full sm:w-auto justify-center">
//                       <Plus className="w-4 h-4" />
//                       <span>Add User</span>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Users List */}
//                 <div className="space-y-4">
//                   {users.map((user) => (
//                     <motion.div
//                       key={user.id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors gap-4"
//                     >
//                       <div className="flex-1">
//                         <div className="flex items-start space-x-4">
//                           <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                             <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
//                           </div>
//                           <div>
//                             <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{user.name}</h3>
//                             <p className="text-xs sm:text-sm text-gray-600">{user.email}</p>
//                             <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs text-gray-500">
//                               <span className={`px-2 py-1 rounded-lg ${
//                                 user.role === 'Instructor' 
//                                   ? 'bg-purple-100 text-purple-700' 
//                                   : 'bg-gray-100 text-gray-700'
//                               }`}>
//                                 {user.role}
//                               </span>
//                               <span className={`px-2 py-1 rounded-lg ${
//                                 user.status === 'active' 
//                                   ? 'bg-green-100 text-green-700' 
//                                   : 'bg-red-100 text-red-700'
//                               }`}>
//                                 {user.status}
//                               </span>
//                               <span>{user.coursesEnrolled} courses</span>
//                               <span>Joined: {user.joinDate}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2 self-end sm:self-auto">
//                         <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
//                           <Edit3 className="w-4 h-4" />
//                         </button>
//                         <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === 'analytics' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <h2 className="text-2xl font-black text-gray-900 mb-6">Analytics</h2>
//                 <div className="text-center py-12 text-gray-500">
//                   <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
//                   <p>Analytics dashboard coming soon...</p>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'settings' && (
//               <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//                 <h2 className="text-2xl font-black text-gray-900 mb-6">Settings</h2>
//                 <div className="text-center py-12 text-gray-500">
//                   <Settings className="w-16 h-16 mx-auto mb-4 text-gray-300" />
//                   <p>Settings panel coming soon...</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Users, 
  BookOpen, 
  BarChart3, 
  Settings,
  Search,
  Download,
  X,
  Save,
  Calendar,
  UserCheck,
  Clock,
  Mail,
  Phone,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  Filter,
  MoreVertical,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [courses, setCourses] = useState([
    {
      id: 'c1',
      title: 'Advanced Banking Operations',
      instructor: 'Farhana Rahman',
      category: 'Operations',
      status: 'published',
      students: 245,
      rating: 4.8,
      duration: '6 weeks',
      createdAt: '2024-01-15',
      description: 'Comprehensive course covering advanced banking operations and procedures.',
      modules: 12,
      progress: 85
    },
    {
      id: 'c2',
      title: 'Digital Banking & Fintech',
      instructor: 'Mahmud Hasan',
      category: 'Technology',
      status: 'draft',
      students: 189,
      rating: 4.9,
      duration: '4 weeks',
      createdAt: '2024-01-20',
      description: 'Exploring digital banking solutions and financial technology innovations.',
      modules: 8,
      progress: 98
    },

    {
      id: 'c3',
      title: 'Risk Management Framework',
      instructor: 'Nusrat Chowdhury',
      category: 'Compliance',
      status: 'draft',
      students: 249,
      rating: 4.7,
      duration: '7 weeks',
      createdAt: '2024-05-30',
      description: 'Master international trade finance, foreign exchange, and modern payment methods. Comprehensive coverage of global trade banking operations.',
      modules: 7,
      progress: 60
    },

    {
      id: 'c4',
      title: 'Retail Banking Fundamentals',
      instructor: 'Lamia Karim',
      category: 'Operations',
      status: 'draft',
      students: 149,
      rating: 4.6,
      duration: '8 weeks',
      createdAt: '2024-04-20',
      description: 'Essential knowledge for retail banking operations and customer service excellence.',
      modules: 8,
      progress: 95
    },

  ]);

  const [users, setUsers] = useState([
    {
      id: 'u1',
      name: 'Amina Khan',
      email: 'amina@example.com',
      phone: '+880 1234 567890',
      role: 'Student',
      status: 'active',
      joinDate: '2024-01-10',
      coursesEnrolled: 5,
      lastActive: '2024-01-20',
      avatar: 'AK'
    },
    {
      id: 'u2',
      name: 'Rahim Ahmed',
      email: 'rahim@example.com',
      phone: '+880 1234 567891',
      role: 'Instructor',
      status: 'active',
      joinDate: '2024-01-05',
      coursesEnrolled: 3,
      lastActive: '2024-01-19',
      avatar: 'RA'
    },
    {
      id: 'u3',
      name: 'Sadia Islam',
      email: 'sadia@example.com',
      phone: '+880 1234 567892',
      role: 'Student',
      status: 'inactive',
      joinDate: '2024-01-08',
      coursesEnrolled: 2,
      lastActive: '2024-01-15',
      avatar: 'SI'
    }
  ]);

  const [analytics, setAnalytics] = useState({
    enrollmentData: [65, 78, 90, 81, 56, 55, 40, 75, 88, 92, 85, 78],
    completionRates: [75, 82, 68, 90, 78, 85, 72, 88],
    categories: ['Operations', 'Technology', 'Compliance', 'Corporate', 'Leadership'],
    categoryData: [35, 25, 20, 15, 5]
  });

  const [settings, setSettings] = useState({
    platformName: 'Learning Management System',
    adminEmail: 'admin@example.com',
    maxFileSize: 50,
    autoApproveCourses: false,
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    theme: 'light'
  });

  const [newCourse, setNewCourse] = useState({
    title: '',
    instructor: '',
    category: '',
    duration: '',
    description: '',
    modules: ''
  });

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Student',
    status: 'active'
  });

  const [editingCourse, setEditingCourse] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(null);
  const [stats, setStats] = useState([]);

  // Calculate stats based on current data
  useEffect(() => {
    const totalStudents = users.filter(user => user.role === 'Student').length;
    const totalInstructors = users.filter(user => user.role === 'Instructor').length;
    const publishedCourses = courses.filter(course => course.status === 'published').length;
    const completionRate = courses.reduce((acc, course) => acc + course.progress, 0) / courses.length;

    setStats([
      { 
        label: 'Total Courses', 
        value: courses.length.toString(), 
        icon: BookOpen, 
        color: 'text-blue-600', 
        change: '+12%',
        description: `${publishedCourses} published, ${courses.length - publishedCourses} drafts`
      },
      { 
        label: 'Active Students', 
        value: totalStudents.toString(), 
        icon: Users, 
        color: 'text-green-600', 
        change: '+8%',
        description: `${users.filter(u => u.status === 'active' && u.role === 'Student').length} active now`
      },
      { 
        label: 'Completion Rate', 
        value: `${Math.round(completionRate)}%`, 
        icon: BarChart3, 
        color: 'text-purple-600', 
        change: '+5%',
        description: 'Average course completion rate'
      },
      { 
        label: 'Instructors', 
        value: totalInstructors.toString(), 
        icon: UserCheck, 
        color: 'text-orange-600', 
        change: '+3%',
        description: `${users.filter(u => u.status === 'active' && u.role === 'Instructor').length} active`
      }
    ]);
  }, [courses, users]);

  // Filter courses based on search and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || course.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Course Management Functions
  const addCourse = () => {
    if (!newCourse.title || !newCourse.instructor || !newCourse.category) {
      alert('Please fill in all required fields');
      return;
    }

    const course = {
      id: `c${Date.now()}`,
      ...newCourse,
      status: 'draft',
      students: 0,
      rating: 0,
      progress: 0,
      modules: parseInt(newCourse.modules) || 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setCourses([...courses, course]);
    setNewCourse({ title: '', instructor: '', category: '', duration: '', description: '', modules: '' });
    setShowCourseForm(false);
  };

  const updateCourse = () => {
    if (!editingCourse.title || !editingCourse.instructor || !editingCourse.category) {
      alert('Please fill in all required fields');
      return;
    }

    setCourses(courses.map(course => 
      course.id === editingCourse.id ? editingCourse : course
    ));
    setEditingCourse(null);
  };

  const deleteCourse = (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(course => course.id !== courseId));
    }
  };

  const toggleCourseStatus = (courseId) => {
    setCourses(courses.map(course => 
      course.id === courseId 
        ? { ...course, status: course.status === 'published' ? 'draft' : 'published' }
        : course
    ));
  };

  // User Management Functions
  const addUser = () => {
    if (!newUser.name || !newUser.email) {
      alert('Please fill in all required fields');
      return;
    }

    const user = {
      id: `u${Date.now()}`,
      ...newUser,
      coursesEnrolled: 0,
      joinDate: new Date().toISOString().split('T')[0],
      lastActive: new Date().toISOString().split('T')[0],
      avatar: newUser.name.split(' ').map(n => n[0]).join('').toUpperCase()
    };
    setUsers([...users, user]);
    setNewUser({ name: '', email: '', phone: '', role: 'Student', status: 'active' });
    setShowUserForm(false);
  };

  const updateUser = () => {
    if (!editingUser.name || !editingUser.email) {
      alert('Please fill in all required fields');
      return;
    }

    setUsers(users.map(user => 
      user.id === editingUser.id ? editingUser : user
    ));
    setEditingUser(null);
  };

  const deleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    ));
  };

  // Export Functions
  const exportToCSV = (data, filename) => {
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(row => 
      Object.values(row).map(value => 
        typeof value === 'string' && value.includes(',') ? `"${value}"` : value
      ).join(',')
    );
    
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const exportCourses = () => {
    const exportData = filteredCourses.map(course => ({
      Title: course.title,
      Instructor: course.instructor,
      Category: course.category,
      Status: course.status,
      Students: course.students,
      Rating: course.rating,
      Duration: course.duration,
      Modules: course.modules,
      'Created Date': course.createdAt,
      Description: course.description
    }));
    exportToCSV(exportData, 'courses-report');
  };

  const exportUsers = () => {
    const exportData = filteredUsers.map(user => ({
      Name: user.name,
      Email: user.email,
      Phone: user.phone,
      Role: user.role,
      Status: user.status,
      'Join Date': user.joinDate,
      'Last Active': user.lastActive,
      'Courses Enrolled': user.coursesEnrolled
    }));
    exportToCSV(exportData, 'users-report');
  };

  // Settings Functions
  const updateSettings = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const updateNotificationSetting = (type, value) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: value
      }
    }));
  };

  // Analytics Functions
  const getEnrollmentTrend = () => {
    return analytics.enrollmentData;
  };

  const getCategoryDistribution = () => {
    return analytics.categoryData;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage courses, users, and platform settings</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={activeTab === 'courses' ? exportCourses : activeTab === 'users' ? exportUsers : exportCourses}
                className="bg-red-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>
                  {activeTab === 'courses' ? 'Export Courses' : 
                   activeTab === 'users' ? 'Export Users' : 'Export Data'}
                </span>
              </button>
            </div>
      
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gray-100 ${stat.color}`}>
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                  {stat.change}
                </span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 sticky top-8">
              <nav className="space-y-2">
                {[
                  { id: 'courses', label: 'Course Management', icon: BookOpen, count: courses.length },
                  { id: 'users', label: 'User Management', icon: Users, count: users.length },
                  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
                  { id: 'settings', label: 'Settings', icon: Settings }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between space-x-3 px-3 sm:px-4 py-3 rounded-xl text-left transition-colors text-sm sm:text-base group ${
                      activeTab === item.id
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold">{item.label}</span>
                    </div>
                    {item.count && (
                      <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                        activeTab === item.id 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Course Management */}
            {activeTab === 'courses' && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">Course Management</h2>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button 
                      onClick={() => setShowCourseForm(true)}
                      className="bg-red-600 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm sm:text-base w-full sm:w-auto justify-center"
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Add New Course</span>
                    </button>
                  </div>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search courses by title or instructor..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    >
                      <option value="all">All Categories</option>
                      <option value="Operations">Operations</option>
                      <option value="Technology">Technology</option>
                      <option value="Compliance">Compliance</option>
                      <option value="Corporate">Corporate</option>
                    </select>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    >
                      <option value="all">All Status</option>
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>

                {/* Add/Edit Course Form */}
                <AnimatePresence>
                  {(showCourseForm || editingCourse) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6 overflow-hidden"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {editingCourse ? 'Edit Course' : 'Create New Course'}
                        </h3>
                        <button
                          onClick={() => {
                            setShowCourseForm(false);
                            setEditingCourse(null);
                          }}
                          className="text-gray-500 hover:text-gray-700 p-1"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Course Title *"
                          value={editingCourse ? editingCourse.title : newCourse.title}
                          onChange={(e) => editingCourse 
                            ? setEditingCourse({...editingCourse, title: e.target.value})
                            : setNewCourse({...newCourse, title: e.target.value})
                          }
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        />
                        <input
                          type="text"
                          placeholder="Instructor *"
                          value={editingCourse ? editingCourse.instructor : newCourse.instructor}
                          onChange={(e) => editingCourse 
                            ? setEditingCourse({...editingCourse, instructor: e.target.value})
                            : setNewCourse({...newCourse, instructor: e.target.value})
                          }
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        />
                        <select
                          value={editingCourse ? editingCourse.category : newCourse.category}
                          onChange={(e) => editingCourse 
                            ? setEditingCourse({...editingCourse, category: e.target.value})
                            : setNewCourse({...newCourse, category: e.target.value})
                          }
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        >
                          <option value="">Select Category *</option>
                          <option value="Operations">Operations</option>
                          <option value="Technology">Technology</option>
                          <option value="Compliance">Compliance</option>
                          <option value="Corporate">Corporate</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Duration (e.g., 6 weeks)"
                          value={editingCourse ? editingCourse.duration : newCourse.duration}
                          onChange={(e) => editingCourse 
                            ? setEditingCourse({...editingCourse, duration: e.target.value})
                            : setNewCourse({...newCourse, duration: e.target.value})
                          }
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        />
                        <input
                          type="number"
                          placeholder="Number of Modules"
                          value={editingCourse ? editingCourse.modules : newCourse.modules}
                          onChange={(e) => editingCourse 
                            ? setEditingCourse({...editingCourse, modules: e.target.value})
                            : setNewCourse({...newCourse, modules: e.target.value})
                          }
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        />
                        <textarea
                          placeholder="Course Description"
                          value={editingCourse ? editingCourse.description : newCourse.description}
                          onChange={(e) => editingCourse 
                            ? setEditingCourse({...editingCourse, description: e.target.value})
                            : setNewCourse({...newCourse, description: e.target.value})
                          }
                          rows="3"
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm md:col-span-2"
                        />
                        <button
                          onClick={editingCourse ? updateCourse : addCourse}
                          className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-sm md:col-span-2"
                        >
                          <Save className="w-4 h-4" />
                          <span>{editingCourse ? 'Update Course' : 'Create Course'}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Courses List */}
                <div className="space-y-4">
                  {filteredCourses.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <p className="text-lg font-semibold mb-2">No courses found</p>
                      <p className="text-sm">Try adjusting your search or filters</p>
                    </div>
                  ) : (
                    filteredCourses.map((course) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 gap-4"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <BookOpen className="w-6 h-6 text-red-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                                  {course.title}
                                </h3>
                                <button
                                  onClick={() => toggleCourseStatus(course.id)}
                                  className={`ml-2 px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                                    course.status === 'published' 
                                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                                      : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                                  }`}
                                >
                                  {course.status === 'published' ? 'Published' : 'Draft'}
                                </button>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                                by {course.instructor} • {course.category}
                              </p>
                              <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                                {course.description}
                              </p>
                              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-gray-500">
                                <span className="flex items-center space-x-1">
                                  <Users className="w-3 h-3" />
                                  <span>{course.students} students</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <span>⭐ {course.rating}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{course.duration}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <span>📚 {course.modules} modules</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{course.createdAt}</span>
                                </span>
                              </div>
                              {/* Progress bar */}
                              {/* <div className="mt-3">
                                <div className="flex justify-between text-xs text-gray-500 mb-1">
                                  <span>Progress</span>
                                  <span>{course.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${course.progress}%` }}
                                  ></div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 self-end sm:self-auto">
                          <button 
                            onClick={() => setEditingCourse(course)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit course"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => deleteCourse(course.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete course"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* User Management */}
            {activeTab === 'users' && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">User Management</h2>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button 
                      onClick={() => setShowUserForm(true)}
                      className="bg-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2 text-sm w-full sm:w-auto justify-center"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add User</span>
                    </button>
                  </div>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search users by name or email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={roleFilter}
                      onChange={(e) => setRoleFilter(e.target.value)}
                      className="px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    >
                      <option value="all">All Roles</option>
                      <option value="Student">Student</option>
                      <option value="Instructor">Instructor</option>
                    </select>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                {/* Add/Edit User Form */}
                <AnimatePresence>
                  {(showUserForm || editingUser) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6 overflow-hidden"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {editingUser ? 'Edit User' : 'Add New User'}
                        </h3>
                        <button
                          onClick={() => {
                            setShowUserForm(false);
                            setEditingUser(null);
                          }}
                          className="text-gray-500 hover:text-gray-700 p-1"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Full Name *"
                          value={editingUser ? editingUser.name : newUser.name}
                          onChange={(e) => editingUser 
                            ? setEditingUser({...editingUser, name: e.target.value})
                            : setNewUser({...newUser, name: e.target.value})
                          }
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        />
                        <input
                          type="email"
                          placeholder="Email Address *"
                          value={editingUser ? editingUser.email : newUser.email}
                          onChange={(e) => editingUser 
                            ? setEditingUser({...editingUser, email: e.target.value})
                            : setNewUser({...newUser, email: e.target.value})
                          }
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={editingUser ? editingUser.phone : newUser.phone}
                          onChange={(e) => editingUser 
                            ? setEditingUser({...editingUser, phone: e.target.value})
                            : setNewUser({...newUser, phone: e.target.value})
                          }
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        />
                        <select
                          value={editingUser ? editingUser.role : newUser.role}
                          onChange={(e) => editingUser 
                            ? setEditingUser({...editingUser, role: e.target.value})
                            : setNewUser({...newUser, role: e.target.value})
                          }
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        >
                          <option value="Student">Student</option>
                          <option value="Instructor">Instructor</option>
                        </select>
                        <select
                          value={editingUser ? editingUser.status : newUser.status}
                          onChange={(e) => editingUser 
                            ? setEditingUser({...editingUser, status: e.target.value})
                            : setNewUser({...newUser, status: e.target.value})
                          }
                          className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                        <button
                          onClick={editingUser ? updateUser : addUser}
                          className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-sm md:col-span-2"
                        >
                          <Save className="w-4 h-4" />
                          <span>{editingUser ? 'Update User' : 'Create User'}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Users List */}
                <div className="space-y-4">
                  {filteredUsers.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <Users className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <p className="text-lg font-semibold mb-2">No users found</p>
                      <p className="text-sm">Try adjusting your search or filters</p>
                    </div>
                  ) : (
                    filteredUsers.map((user) => (
                      <motion.div
                        key={user.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 gap-4"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-600 font-semibold text-sm">{user.avatar}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                    {user.name}
                                  </h3>
                                  <p className="text-xs sm:text-sm text-gray-600 flex items-center space-x-2 mt-1">
                                    <Mail className="w-3 h-3" />
                                    <span>{user.email}</span>
                                  </p>
                                  {user.phone && (
                                    <p className="text-xs text-gray-600 flex items-center space-x-2 mt-1">
                                      <Phone className="w-3 h-3" />
                                      <span>{user.phone}</span>
                                    </p>
                                  )}
                                </div>
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() => toggleUserStatus(user.id)}
                                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors flex items-center space-x-1 ${
                                      user.status === 'active' 
                                        ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                                        : 'bg-red-100 text-red-700 hover:bg-red-200'
                                    }`}
                                  >
                                    {user.status === 'active' ? (
                                      <>
                                        <CheckCircle className="w-3 h-3" />
                                        <span>Active</span>
                                      </>
                                    ) : (
                                      <>
                                        <XCircle className="w-3 h-3" />
                                        <span>Inactive</span>
                                      </>
                                    )}
                                  </button>
                                </div>
                              </div>
                              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-3 text-xs text-gray-500">
                                <span className={`px-2 py-1 rounded-lg ${
                                  user.role === 'Instructor' 
                                    ? 'bg-purple-100 text-purple-700' 
                                    : 'bg-gray-100 text-gray-700'
                                }`}>
                                  {user.role}
                                </span>
                                <span className="flex items-center space-x-1">
                                  <BookOpen className="w-3 h-3" />
                                  <span>{user.coursesEnrolled} courses</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>Joined: {user.joinDate}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>Last active: {user.lastActive}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 self-end sm:self-auto">
                          <button 
                            onClick={() => setEditingUser(user)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit user"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => deleteUser(user.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete user"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Analytics */}
            {activeTab === 'analytics' && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-black text-gray-900 mb-6">Analytics Dashboard</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Enrollment Chart */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Enrollment Trends</h3>
                    <div className="h-48 flex items-end justify-between space-x-2">
                      {analytics.enrollmentData.map((value, index) => (
                        <div key={index} className="flex flex-col items-center flex-1">
                          <div 
                            className="w-full bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-blue-700"
                            style={{ height: `${value}%` }}
                          ></div>
                          <span className="text-xs text-gray-500 mt-2">{index + 1}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                      <span>Monthly Enrollment</span>
                      <span className="text-green-600 font-semibold">+15% growth</span>
                    </div>
                  </div>

                  {/* Category Distribution */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Categories</h3>
                    <div className="space-y-3">
                      {analytics.categories.map((category, index) => (
                        <div key={category} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">{category}</span>
                          <div className="flex items-center space-x-3">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${analytics.categoryData[index]}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 w-8">
                              {analytics.categoryData[index]}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Completion Rates */}
                {/* <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Completion Rates</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {analytics.completionRates.map((rate, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                        <div className="text-2xl font-black text-gray-900 mb-1">{rate}%</div>
                        <div className="text-xs text-gray-600">Course {index + 1}</div>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Completion Rates */}
<div className="bg-gray-50 rounded-2xl p-6">
  <h3 className="text-lg font-semibold text-gray-900 mb-4">Completion Rates</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {courses.map((course, index) => (
      <div key={course.id} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="text-2xl font-black text-gray-900 mb-1">{course.progress}%</div>
        <div className="text-xs text-gray-600 font-semibold mb-1 line-clamp-2" title={course.title}>
          {course.title}
        </div>
        <div className="text-xs text-gray-500">by {course.instructor}</div>
        {/* Progress bar */}
        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className="bg-gradient-to-r from-green-500 to-green-600 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>
              </div>
            )}

            {/* Settings */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-black text-gray-900 mb-6">Platform Settings</h2>
                
                <div className="space-y-6">
                  {/* General Settings */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Platform Name
                        </label>
                        <input
                          type="text"
                          value={settings.platformName}
                          onChange={(e) => updateSettings('platformName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Admin Email
                        </label>
                        <input
                          type="email"
                          value={settings.adminEmail}
                          onChange={(e) => updateSettings('adminEmail', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Maximum File Size (MB)
                        </label>
                        <input
                          type="number"
                          value={settings.maxFileSize}
                          onChange={(e) => updateSettings('maxFileSize', parseInt(e.target.value))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
                    <div className="space-y-3">
                      {Object.entries(settings.notifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700 capitalize">
                            {key} Notifications
                          </span>
                          <button
                            onClick={() => updateNotificationSetting(key, !value)}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              value ? 'bg-green-500' : 'bg-gray-300'
                            }`}
                          >
                            <div
                              className={`bg-white w-4 h-4 rounded-full transition-transform ${
                                value ? 'transform translate-x-7' : 'transform translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Course Settings */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Settings</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-700">
                          Auto-approve New Courses
                        </div>
                        <div className="text-xs text-gray-500">
                          Automatically publish new courses without manual review
                        </div>
                      </div>
                      <button
                        onClick={() => updateSettings('autoApproveCourses', !settings.autoApproveCourses)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          settings.autoApproveCourses ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full transition-transform ${
                            settings.autoApproveCourses ? 'transform translate-x-7' : 'transform translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Save Settings Button */}
                  <div className="flex justify-end">
                    <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors">
                      Save Settings
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;