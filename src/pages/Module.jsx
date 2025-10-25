// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from 'framer-motion';
// import { Clock, User, BookOpen, Play, FileText } from 'lucide-react';

// const MODULE_DETAILS = {
//   "Account Transaction": {
//     description: "Understand how account transactions are processed and recorded in banking systems.",
//     duration: "2 hours",
//     lessons: 4,
//     instructor: "Mr. Rahman",
//     resources: 3
//   },
//   "Anti Money Laundering": {
//     description: "Learn regulations and techniques to prevent money laundering and fraud.",
//     duration: "3 hours", 
//     lessons: 5,
//     instructor: "Ms. Akter",
//     resources: 4
//   },
//   "Retail Banking": {
//     description: "Overview of services and products offered to individual customers in retail banking.",
//     duration: "2.5 hours",
//     lessons: 4,
//     instructor: "Mr. Hossain", 
//     resources: 3
//   },
//   "Asset & Liability Product": {
//     description: "Study different banking products and how assets and liabilities are managed.",
//     duration: "3 hours",
//     lessons: 5,
//     instructor: "Ms. Karim",
//     resources: 4
//   }
// };

// const Module = () => {
//   const { moduleName } = useParams();
//   const navigate = useNavigate();

//   const details = MODULE_DETAILS[moduleName] || {
//     description: "Details not available for this module.",
//     duration: "N/A",
//     lessons: 0,
//     instructor: "TBA",
//     resources: 0
//   };

//   const lessons = [
//     { id: 1, title: "Introduction to " + moduleName, duration: "15 min", type: "video" },
//     { id: 2, title: "Key Concepts", duration: "25 min", type: "video" },
//     { id: 3, title: "Practical Applications", duration: "30 min", type: "video" },
//     { id: 4, title: moduleName + " Quiz", duration: "20 min", type: "quiz" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <button 
//             onClick={() => navigate(-1)} 
//             className="flex items-center space-x-2 text-slate-600 hover:text-red-600 transition-colors"
//           >
//             <span>← Back to Course</span>
//           </button>

//           <button 
//             onClick={() => navigate(`/exam/${encodeURIComponent(moduleName)}`)} 
//             className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
//           >
//             Take Exam
//           </button>
//         </div>

//         {/* Module Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-lg p-8 mb-8"
//         >
//           <h1 className="text-3xl font-bold text-slate-900 mb-4 text-center">{moduleName}</h1>
          
//           <div className="grid md:grid-cols-4 gap-6 mb-6">
//             <div className="flex items-center space-x-3 text-center">
//               <Clock className="w-6 h-6 text-red-500" />
//               <div>
//                 <div className="text-sm text-slate-600">Duration</div>
//                 <div className="font-semibold text-slate-900">{details.duration}</div>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-3 text-center">
//               <BookOpen className="w-6 h-6 text-green-500" />
//               <div>
//                 <div className="text-sm text-slate-600">Lessons</div>
//                 <div className="font-semibold text-slate-900">{details.lessons}</div>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-3 text-center">
//               <User className="w-6 h-6 text-blue-500" />
//               <div>
//                 <div className="text-sm text-slate-600">Instructor</div>
//                 <div className="font-semibold text-slate-900">{details.instructor}</div>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-3 text-center">
//               <FileText className="w-6 h-6 text-purple-500" />
//               <div>
//                 <div className="text-sm text-slate-600">Resources</div>
//                 <div className="font-semibold text-slate-900">{details.resources}</div>
//               </div>
//             </div>
//           </div>

//           <p className="text-slate-700 text-center leading-relaxed max-w-3xl mx-auto">
//             {details.description}
//           </p>
//         </motion.div>

//         {/* Lessons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-white rounded-2xl shadow-lg p-8"
//         >
//           <h2 className="text-2xl font-bold text-slate-900 mb-6">Module Lessons</h2>
          
//           <div className="space-y-4">
//             {lessons.map((lesson, index) => (
//               <div
//                 key={lesson.id}
//                 className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-red-600 transition-colors group"
//               >
//                 <div className="flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-semibold group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
//                     {index + 1}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-slate-900">{lesson.title}</h3>
//                     <div className="flex items-center space-x-4 text-sm text-slate-600">
//                       <span className="flex items-center space-x-1">
//                         <Clock className="w-4 h-4" />
//                         <span>{lesson.duration}</span>
//                       </span>
//                       <span className={`px-2 py-1 rounded-full text-xs ${
//                         lesson.type === 'video' 
//                           ? 'bg-blue-100 text-blue-700' 
//                           : 'bg-green-100 text-green-700'
//                       }`}>
//                         {lesson.type === 'video' ? 'Video' : 'Quiz'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <button className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-green-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
//                   <Play className="w-4 h-4" />
//                   <span>Start</span>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Module;


// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from 'framer-motion';
// import { Clock, User, BookOpen, Play, FileText, ArrowLeft, Award, CheckCircle, BarChart3, Download } from 'lucide-react';

// const MODULE_DETAILS = {
//   "Account Transaction": {
//     description: "Master the fundamentals of account transaction processing in modern banking systems. Learn about transaction types, processing workflows, reconciliation methods, and compliance requirements essential for banking operations.",
//     duration: "2 hours",
//     lessons: 4,
//     instructor: "Mr. Rahman",
//     resources: 3,
//     category: "Banking Operations",
//     level: "Intermediate"
//   },
//   "Anti Money Laundering": {
//     description: "Comprehensive training on Anti-Money Laundering regulations, detection techniques, and compliance frameworks. Learn to identify suspicious activities and implement effective AML controls in banking operations.",
//     duration: "3 hours", 
//     lessons: 5,
//     instructor: "Ms. Akter",
//     resources: 4,
//     category: "Compliance",
//     level: "Advanced"
//   },
//   "Retail Banking": {
//     description: "Explore comprehensive retail banking services, customer relationship management, and product offerings. Understand the dynamics of retail banking operations and customer service excellence.",
//     duration: "2.5 hours",
//     lessons: 4,
//     instructor: "Mr. Hossain", 
//     resources: 3,
//     category: "Retail Banking",
//     level: "Intermediate"
//   },
//   "Asset & Liability Management": {
//     description: "Deep dive into asset and liability management strategies, balance sheet optimization, and risk management techniques. Master the principles of ALM in modern banking institutions.",
//     duration: "3 hours",
//     lessons: 5,
//     instructor: "Ms. Karim",
//     resources: 4,
//     category: "Risk Management",
//     level: "Advanced"
//   }
// };

// const Module = () => {
//   const { moduleName } = useParams();
//   const navigate = useNavigate();

//   const details = MODULE_DETAILS[moduleName] || {
//     description: "Comprehensive module details coming soon.",
//     duration: "N/A",
//     lessons: 0,
//     instructor: "TBA",
//     resources: 0,
//     category: "General",
//     level: "Beginner"
//   };

//   const lessons = [
//     { id: 1, title: "Introduction to " + moduleName, duration: "15 min", type: "video", completed: true },
//     { id: 2, title: "Core Concepts & Principles", duration: "25 min", type: "video", completed: true },
//     { id: 3, title: "Practical Applications & Case Studies", duration: "30 min", type: "video", completed: false },
//     { id: 4, title: "Advanced Techniques", duration: "20 min", type: "video", completed: false },
//     { id: 5, title: moduleName + " Assessment", duration: "20 min", type: "quiz", completed: false }
//   ];

//   const resources = [
//     { name: "Module Handbook", type: "PDF", size: "2.4 MB" },
//     { name: "Case Studies", type: "Document", size: "1.8 MB" },
//     { name: "Reference Materials", type: "PDF", size: "3.1 MB" },
//     { name: "Practice Exercises", type: "Worksheet", size: "1.2 MB" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20 mb-8"
//             >
//               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//               <span className="text-white/90 font-semibold text-sm">MODULE OVERVIEW</span>
//             </motion.div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
//               {moduleName}
//             </h1>
            
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
//               {details.description}
//             </p>

//             <div className="flex flex-wrap justify-center gap-6 mb-8">
//               <div className="flex items-center space-x-2 text-white/80">
//                 <Award className="w-5 h-5" />
//                 <span className="font-semibold">{details.category}</span>
//               </div>
//               <div className="flex items-center space-x-2 text-white/80">
//                 <Clock className="w-5 h-5" />
//                 <span className="font-semibold">{details.duration}</span>
//               </div>
//               <div className="flex items-center space-x-2 text-white/80">
//                 <BookOpen className="w-5 h-5" />
//                 <span className="font-semibold">{details.lessons} lessons</span>
//               </div>
//               <div className="flex items-center space-x-2 text-white/80">
//                 <User className="w-5 h-5" />
//                 <span className="font-semibold">{details.instructor}</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Module Content */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Main Content */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* Progress & Actions */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
//               >
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//                   <button 
//                     onClick={() => navigate(-1)} 
//                     className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors font-semibold"
//                   >
//                     <ArrowLeft className="w-4 h-4" />
//                     <span>Back to Course</span>
//                   </button>
                  
//                   <div className="flex items-center space-x-4">
//                     <div className="text-right">
//                       <div className="text-sm text-gray-600">Progress</div>
//                       <div className="font-bold text-gray-900">2/5 Completed</div>
//                     </div>
//                     <div className="w-24 bg-gray-200 rounded-full h-2">
//                       <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button className="flex-1 bg-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
//                     <Play className="w-5 h-5" />
//                     <span>Continue Learning</span>
//                   </button>
//                   <button 
//                     onClick={() => navigate(`/exam/${encodeURIComponent(moduleName)}`)} 
//                     className="flex-1 border-2 border-amber-500 text-amber-600 py-4 px-6 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 flex items-center justify-center space-x-3"
//                   >
//                     <Award className="w-5 h-5" />
//                     <span>Take Final Exam</span>
//                   </button>
//                 </div>
//               </motion.div>

//               {/* Lessons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
//               >
//                 <div className="flex items-center justify-between mb-8">
//                   <h2 className="text-3xl font-black text-gray-900">
//                     Module <span className="text-red-600">Lessons</span>
//                   </h2>
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <BookOpen className="w-5 h-5" />
//                     <span className="font-semibold">{lessons.length} lessons</span>
//                   </div>
//                 </div>
                
//                 <div className="space-y-4">
//                   {lessons.map((lesson, index) => (
//                     <motion.div
//                       key={lesson.id}
//                       whileHover={{ scale: 1.02 }}
//                       className="border border-gray-200 rounded-2xl p-6 hover:border-red-600 transition-all duration-300 group cursor-pointer bg-gray-50 hover:bg-red-50"
//                     >
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-4">
//                           <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 ${
//                             lesson.completed 
//                               ? 'bg-green-500' 
//                               : lesson.type === 'quiz'
//                                 ? 'bg-amber-500'
//                                 : 'bg-red-600'
//                           }`}>
//                             {lesson.completed ? (
//                               <CheckCircle className="w-6 h-6" />
//                             ) : (
//                               index + 1
//                             )}
//                           </div>
//                           <div className="flex-1">
//                             <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-700 transition-colors">
//                               {lesson.title}
//                             </h3>
//                             <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
//                               <span className="flex items-center space-x-1">
//                                 <Clock className="w-4 h-4" />
//                                 <span>{lesson.duration}</span>
//                               </span>
//                               <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                                 lesson.type === 'video' 
//                                   ? 'bg-blue-100 text-blue-700' 
//                                   : 'bg-amber-100 text-amber-700'
//                               }`}>
//                                 {lesson.type === 'video' ? 'Video Lesson' : 'Assessment'}
//                               </span>
//                               {lesson.completed && (
//                                 <span className="flex items-center space-x-1 text-green-600">
//                                   <CheckCircle className="w-4 h-4" />
//                                   <span className="text-xs font-semibold">Completed</span>
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                         <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center space-x-2">
//                           <Play className="w-4 h-4" />
//                           <span>{lesson.completed ? 'Review' : 'Start'}</span>
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>

//             {/* Sidebar */}
//             <div className="space-y-6">
//               {/* Module Details */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
//               >
//                 <h3 className="text-xl font-black text-gray-900 mb-4">Module Details</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <Clock className="w-5 h-5 text-red-600" />
//                       <span className="text-gray-700">Total Duration</span>
//                     </div>
//                     <span className="font-bold text-gray-900">{details.duration}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <BookOpen className="w-5 h-5 text-blue-600" />
//                       <span className="text-gray-700">Lessons</span>
//                     </div>
//                     <span className="font-bold text-gray-900">{details.lessons}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <FileText className="w-5 h-5 text-green-600" />
//                       <span className="text-gray-700">Resources</span>
//                     </div>
//                     <span className="font-bold text-gray-900">{details.resources}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <Award className="w-5 h-5 text-purple-600" />
//                       <span className="text-gray-700">Level</span>
//                     </div>
//                     <span className="font-bold text-gray-900">{details.level}</span>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Instructor */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
//               >
//                 <h3 className="text-xl font-black text-gray-900 mb-4">Instructor</h3>
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
//                     {details.instructor.split(' ').map(n => n[0]).join('')}
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900">{details.instructor}</h4>
//                     <p className="text-red-600 text-sm font-semibold">Senior Banking Expert</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {details.instructor} specializes in {details.category.toLowerCase()} with extensive industry experience and proven expertise.
//                 </p>
//               </motion.div>

//               {/* Resources */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
//               >
//                 <h3 className="text-xl font-black text-gray-900 mb-4">Resources</h3>
//                 <div className="space-y-3">
//                   {resources.map((resource, index) => (
//                     <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors group">
//                       <div className="flex items-center space-x-3">
//                         <FileText className="w-4 h-4 text-gray-600" />
//                         <div>
//                           <div className="text-sm font-medium text-gray-900">{resource.name}</div>
//                           <div className="text-xs text-gray-500">{resource.type} • {resource.size}</div>
//                         </div>
//                       </div>
//                       <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
//                         <Download className="w-4 h-4" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Quick Stats */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 text-white"
//               >
//                 <h3 className="text-lg font-bold mb-4">Your Progress</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between items-center">
//                     <span className="text-red-100">Completion</span>
//                     <span className="font-bold">40%</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-red-100">Time Spent</span>
//                     <span className="font-bold">1h 10m</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-red-100">Avg. Score</span>
//                     <span className="font-bold">85%</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Module;



// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from 'framer-motion';
// import { Clock, User, BookOpen, Play, FileText, ArrowLeft, Award, CheckCircle, BarChart3, Download, Share2, Printer, Timer, AlertCircle } from 'lucide-react';

// const MODULE_DETAILS = {
//   "Account Transaction": {
//     description: "Master the fundamentals of account transaction processing in modern banking systems. Learn about transaction types, processing workflows, reconciliation methods, and compliance requirements essential for banking operations.",
//     duration: "2 hours",
//     lessons: 4,
//     instructor: "Mr. Rahman",
//     resources: 3,
//     category: "Banking Operations",
//     level: "Intermediate"
//   },
//   "Anti Money Laundering": {
//     description: "Comprehensive training on Anti-Money Laundering regulations, detection techniques, and compliance frameworks. Learn to identify suspicious activities and implement effective AML controls in banking operations.",
//     duration: "3 hours", 
//     lessons: 5,
//     instructor: "Ms. Akter",
//     resources: 4,
//     category: "Compliance",
//     level: "Advanced"
//   },
//   "Retail Banking": {
//     description: "Explore comprehensive retail banking services, customer relationship management, and product offerings. Understand the dynamics of retail banking operations and customer service excellence.",
//     duration: "2.5 hours",
//     lessons: 4,
//     instructor: "Mr. Hossain", 
//     resources: 3,
//     category: "Retail Banking",
//     level: "Intermediate"
//   },
//   "Asset & Liability Management": {
//     description: "Deep dive into asset and liability management strategies, balance sheet optimization, and risk management techniques. Master the principles of ALM in modern banking institutions.",
//     duration: "3 hours",
//     lessons: 5,
//     instructor: "Ms. Karim",
//     resources: 4,
//     category: "Risk Management",
//     level: "Advanced"
//   }
// };

// // Quiz Questions for each module
// const MODULE_QUIZZES = {
//   "Account Transaction": [
//     {
//       id: 1,
//       question: "What is the primary purpose of a debit entry in banking transactions?",
//       options: [
//         "To increase account balance",
//         "To decrease account balance", 
//         "To record interest earned",
//         "To process loan applications"
//       ],
//       correctAnswer: 1,
//       explanation: "Debit entries decrease account balances in banking transactions, representing money going out of an account."
//     },
//     {
//       id: 2,
//       question: "Which transaction type typically involves immediate fund transfer?",
//       options: [
//         "Standing order",
//         "Direct debit",
//         "Real-time gross settlement",
//         "Cheque processing"
//       ],
//       correctAnswer: 2,
//       explanation: "Real-time gross settlement (RTGS) involves immediate fund transfer between banks."
//     },
//     {
//       id: 3,
//       question: "What is the minimum information required for processing a banking transaction?",
//       options: [
//         "Account number and amount only",
//         "Account number, amount, and transaction type",
//         "Account number, amount, transaction type, and beneficiary details",
//         "All customer personal information"
//       ],
//       correctAnswer: 1,
//       explanation: "At minimum, account number, amount, and transaction type are required to process any banking transaction."
//     },
//     {
//       id: 4,
//       question: "Which regulatory body oversees banking transactions in Bangladesh?",
//       options: [
//         "Securities and Exchange Commission",
//         "Bangladesh Bank",
//         "Ministry of Finance", 
//         "National Board of Revenue"
//       ],
//       correctAnswer: 1,
//       explanation: "Bangladesh Bank is the central bank and primary regulatory authority for banking transactions."
//     },
//     {
//       id: 5,
//       question: "What is the purpose of transaction reconciliation?",
//       options: [
//         "To increase bank profits",
//         "To match bank records with customer statements",
//         "To process transactions faster",
//         "To calculate interest rates"
//       ],
//       correctAnswer: 1,
//       explanation: "Reconciliation ensures bank records match customer statements to identify discrepancies."
//     }
//   ],
//   "Anti Money Laundering": [
//     {
//       id: 1,
//       question: "What does AML stand for in banking?",
//       options: [
//         "Automated Money Lending",
//         "Anti Money Laundering", 
//         "Asset Management Liability",
//         "Annual Monetary License"
//       ],
//       correctAnswer: 1,
//       explanation: "AML stands for Anti Money Laundering - procedures to prevent generating income through illegal actions."
//     },
//     {
//       id: 2, 
//       question: "What is the primary goal of KYC regulations?",
//       options: [
//         "To know your competition",
//         "To know your customer's identity",
//         "To know your currency",
//         "To know your compliance"
//       ],
//       correctAnswer: 1,
//       explanation: "KYC (Know Your Customer) regulations require banks to verify customer identity to prevent fraud."
//     },
//     {
//       id: 3,
//       question: "Which transaction amount typically triggers mandatory reporting?",
//       options: [
//         "Any transaction above $1,000",
//         "Transactions above $10,000",
//         "Only international transfers",
//         "All loan transactions"
//       ],
//       correctAnswer: 1,
//       explanation: "In many jurisdictions, transactions above $10,000 require mandatory reporting to financial intelligence units."
//     },
//     {
//       id: 4,
//       question: "What is a Suspicious Activity Report (SAR)?",
//       options: [
//         "A report filed by customers",
//         "A report filed by banks for suspicious transactions",
//         "A daily transaction summary",
//         "A loan application form"
//       ],
//       correctAnswer: 1,
//       explanation: "SAR is filed by financial institutions to report suspicious transactions that might indicate money laundering."
//     },
//     {
//       id: 5,
//       question: "Which is NOT a common money laundering stage?",
//       options: [
//         "Placement",
//         "Layering", 
//         "Integration",
//         "Verification"
//       ],
//       correctAnswer: 3,
//       explanation: "The three stages of money laundering are Placement, Layering, and Integration. Verification is not a stage."
//     }
//   ]
// };

// const Module = () => {
//   const { moduleName } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('lessons');
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [certificateEligible, setCertificateEligible] = useState(false);
//   const [showCertificate, setShowCertificate] = useState(false);

//   const details = MODULE_DETAILS[moduleName] || {
//     description: "Comprehensive module details coming soon.",
//     duration: "N/A",
//     lessons: 0,
//     instructor: "TBA",
//     resources: 0,
//     category: "General",
//     level: "Beginner"
//   };

//   const lessons = [
//     { id: 1, title: "Introduction to " + moduleName, duration: "15 min", type: "video", completed: true },
//     { id: 2, title: "Core Concepts & Principles", duration: "25 min", type: "video", completed: true },
//     { id: 3, title: "Practical Applications & Case Studies", duration: "30 min", type: "video", completed: false },
//     { id: 4, title: "Advanced Techniques", duration: "20 min", type: "video", completed: false },
//     { id: 5, title: moduleName + " Assessment", duration: "20 min", type: "quiz", completed: false }
//   ];

//   const resources = [
//     { name: "Module Handbook", type: "PDF", size: "2.4 MB" },
//     { name: "Case Studies", type: "Document", size: "1.8 MB" },
//     { name: "Reference Materials", type: "PDF", size: "3.1 MB" },
//     { name: "Practice Exercises", type: "Worksheet", size: "1.2 MB" }
//   ];

//   const quizQuestions = MODULE_QUIZZES[moduleName] || [];

//   // Countdown timer effect
//   useEffect(() => {
//     if (quizStarted && !quizCompleted && timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft(time => time - 1);
//       }, 1000);
//       return () => clearInterval(timer);
//     } else if (timeLeft === 0 && quizStarted) {
//       handleQuizSubmit();
//     }
//   }, [quizStarted, quizCompleted, timeLeft]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handleAnswerSelect = (questionId, answerIndex) => {
//     setSelectedAnswers(prev => ({
//       ...prev,
//       [questionId]: answerIndex
//     }));
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < quizQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleQuizSubmit = () => {
//     let correct = 0;
//     quizQuestions.forEach(question => {
//       if (selectedAnswers[question.id] === question.correctAnswer) {
//         correct++;
//       }
//     });
    
//     const finalScore = (correct / quizQuestions.length) * 100;
//     setScore(finalScore);
//     setQuizCompleted(true);
//     setShowResults(true);
    
//     // Check if certificate is eligible (80% or higher)
//     if (finalScore >= 80) {
//       setCertificateEligible(true);
      
//       // Mark this module as completed in localStorage
//       const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
//       completedModules[moduleName] = true;
//       localStorage.setItem('completedModules', JSON.stringify(completedModules));
      
//       // Check if all modules are completed
//       checkAllModulesCompleted();
//     }
//   };

//   const checkAllModulesCompleted = () => {
//     const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
//     const allModules = Object.keys(MODULE_DETAILS);
//     const allCompleted = allModules.every(module => completedModules[module]);
    
//     if (allCompleted) {
//       localStorage.setItem('fullCourseCompleted', 'true');
//     }
//   };

//   const startQuiz = () => {
//     setQuizStarted(true);
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setSelectedAnswers({});
//     setTimeLeft(600); // 10 minutes
//     setScore(0);
//     setShowResults(false);
//   };

//   const resetQuiz = () => {
//     setQuizStarted(false);
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setSelectedAnswers({});
//     setTimeLeft(600);
//     setScore(0);
//     setShowResults(false);
//   };

//   const shareCertificate = (platform) => {
//     const message = `I just completed the ${moduleName} module from IFIC Bank eLearning Portal with a score of ${score.toFixed(1)}%!`;
//     const url = window.location.origin;
    
//     const shareUrls = {
//       linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(message)}`,
//       twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`,
//       facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`
//     };

//     if (shareUrls[platform]) {
//       window.open(shareUrls[platform], '_blank', 'width=600,height=400');
//     }
//   };

//   const downloadCertificate = () => {
//     // In a real application, this would generate a PDF certificate
//     const certificateData = {
//       studentName: "John Doe", // This would come from user profile
//       courseName: moduleName,
//       score: score.toFixed(1),
//       date: new Date().toLocaleDateString(),
//       instructor: details.instructor
//     };
    
//     // Simulate PDF download
//     const element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(certificateData)));
//     element.setAttribute('download', `IFIC_Certificate_${moduleName.replace(/\s+/g, '_')}.pdf`);
//     element.style.display = 'none';
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };

//   const printCertificate = () => {
//     window.print();
//   };

//   // Certificate Component
//   const Certificate = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full"
//       >
//         <div className="p-8">
//           <div className="text-center border-4 border-gold-500 p-8 bg-gradient-to-b from-white to-gray-50">
//             <div className="mb-6">
//               <img src="/ific-logo.png" alt="IFIC Bank" className="h-16 mx-auto mb-4" />
//               <h1 className="text-3xl font-black text-gray-900 mb-2">Certificate of Completion</h1>
//               <p className="text-gray-600">This certifies that</p>
//             </div>
            
//             <h2 className="text-2xl font-bold text-red-600 mb-4">John Doe</h2>
            
//             <p className="text-gray-700 mb-6">
//               has successfully completed the <strong>{moduleName}</strong> module<br />
//               with a score of <strong>{score.toFixed(1)}%</strong>
//             </p>
            
//             <div className="flex justify-between items-center mt-8">
//               <div className="text-center">
//                 <div className="border-t border-gray-400 pt-2">
//                   <p className="font-semibold">{details.instructor}</p>
//                   <p className="text-sm text-gray-600">Instructor</p>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <p className="font-semibold">{new Date().toLocaleDateString()}</p>
//                 <p className="text-sm text-gray-600">Date Completed</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-center space-x-4 mt-6">
//             <button
//               onClick={downloadCertificate}
//               className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//             >
//               <Download className="w-4 h-4" />
//               <span>Download PDF</span>
//             </button>
//             <button
//               onClick={printCertificate}
//               className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
//             >
//               <Printer className="w-4 h-4" />
//               <span>Print</span>
//             </button>
//             <button
//               onClick={() => setShowCertificate(false)}
//               className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-600 transition-colors"
//             >
//               <span>Close</span>
//             </button>
//           </div>
          
//           <div className="flex justify-center space-x-4 mt-4">
//             <button
//               onClick={() => shareCertificate('linkedin')}
//               className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               <Share2 className="w-4 h-4" />
//               <span>Share on LinkedIn</span>
//             </button>
//             <button
//               onClick={() => shareCertificate('twitter')}
//               className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
//             >
//               <Share2 className="w-4 h-4" />
//               <span>Share on Twitter</span>
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );

//   // Quiz Component
//   const QuizComponent = () => (
//     <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
//       {!quizStarted && !quizCompleted && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center"
//         >
//           <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
//             <Award className="w-10 h-10 text-red-600" />
//           </div>
//           <h2 className="text-3xl font-black text-gray-900 mb-4">{moduleName} Quiz</h2>
//           <p className="text-gray-600 mb-6 max-w-md mx-auto">
//             Test your knowledge with this {quizQuestions.length}-question quiz. You have 10 minutes to complete it. 
//             Score 80% or higher to earn your certificate.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
//             <div className="bg-gray-50 p-4 rounded-xl">
//               <div className="text-2xl font-bold text-gray-900">{quizQuestions.length}</div>
//               <div className="text-sm text-gray-600">Questions</div>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-xl">
//               <div className="text-2xl font-bold text-gray-900">10:00</div>
//               <div className="text-sm text-gray-600">Time Limit</div>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-xl">
//               <div className="text-2xl font-bold text-gray-900">80%</div>
//               <div className="text-sm text-gray-600">Passing Score</div>
//             </div>
//           </div>
          
//           <button
//             onClick={startQuiz}
//             className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
//           >
//             Start Quiz
//           </button>
//         </motion.div>
//       )}

//       {quizStarted && !quizCompleted && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           {/* Quiz Header */}
//           <div className="flex justify-between items-center mb-8 p-4 bg-gray-50 rounded-xl">
//             <div className="flex items-center space-x-2">
//               <Timer className="w-5 h-5 text-red-600" />
//               <span className="font-semibold text-gray-900">{formatTime(timeLeft)}</span>
//             </div>
//             <div className="text-sm text-gray-600">
//               Question {currentQuestion + 1} of {quizQuestions.length}
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-32 bg-gray-200 rounded-full h-2">
//                 <div 
//                   className="bg-red-600 h-2 rounded-full transition-all duration-300"
//                   style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
//                 ></div>
//               </div>
//             </div>
//           </div>

//           {/* Current Question */}
//           <div className="mb-8">
//             <h3 className="text-xl font-bold text-gray-900 mb-6">
//               {quizQuestions[currentQuestion].question}
//             </h3>
            
//             <div className="space-y-3">
//               {quizQuestions[currentQuestion].options.map((option, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleAnswerSelect(quizQuestions[currentQuestion].id, index)}
//                   className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
//                     selectedAnswers[quizQuestions[currentQuestion].id] === index
//                       ? 'border-red-600 bg-red-50 text-red-700'
//                       : 'border-gray-200 hover:border-red-300 hover:bg-red-25'
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
//                       selectedAnswers[quizQuestions[currentQuestion].id] === index
//                         ? 'border-red-600 bg-red-600 text-white'
//                         : 'border-gray-300'
//                     }`}>
//                       {selectedAnswers[quizQuestions[currentQuestion].id] === index && (
//                         <div className="w-2 h-2 rounded-full bg-white"></div>
//                       )}
//                     </div>
//                     <span className="font-medium">{option}</span>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex justify-between">
//             <button
//               onClick={handlePrevQuestion}
//               disabled={currentQuestion === 0}
//               className={`px-6 py-3 rounded-xl font-semibold transition-all ${
//                 currentQuestion === 0
//                   ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               Previous
//             </button>
            
//             {currentQuestion === quizQuestions.length - 1 ? (
//               <button
//                 onClick={handleQuizSubmit}
//                 className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//               >
//                 Submit Quiz
//               </button>
//             ) : (
//               <button
//                 onClick={handleNextQuestion}
//                 className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//               >
//                 Next Question
//               </button>
//             )}
//           </div>
//         </motion.div>
//       )}

//       {showResults && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center"
//         >
//           <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
//             certificateEligible ? 'bg-green-100' : 'bg-red-100'
//           }`}>
//             {certificateEligible ? (
//               <Award className="w-10 h-10 text-green-600" />
//             ) : (
//               <AlertCircle className="w-10 h-10 text-red-600" />
//             )}
//           </div>
          
//           <h2 className="text-3xl font-black text-gray-900 mb-4">Quiz Results</h2>
//           <div className={`text-5xl font-black mb-4 ${
//             certificateEligible ? 'text-green-600' : 'text-red-600'
//           }`}>
//             {score.toFixed(1)}%
//           </div>
          
//           <p className="text-gray-600 mb-6">
//             You answered {Math.round((score / 100) * quizQuestions.length)} out of {quizQuestions.length} questions correctly.
//           </p>
          
//           {certificateEligible ? (
//             <div className="space-y-4">
//               <p className="text-green-600 font-semibold text-lg">
//                 🎉 Congratulations! You've passed the quiz and earned a certificate!
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button
//                   onClick={() => setShowCertificate(true)}
//                   className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//                 >
//                   View Certificate
//                 </button>
//                 <button
//                   onClick={resetQuiz}
//                   className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
//                 >
//                   Retake Quiz
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               <p className="text-red-600 font-semibold">
//                 You need 80% to pass. Keep studying and try again!
//               </p>
//               <button
//                 onClick={resetQuiz}
//                 className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//               >
//                 Retake Quiz
//               </button>
//             </div>
//           )}
          
//           {/* Question Review */}
//           <div className="mt-8 text-left">
//             <h3 className="text-xl font-bold text-gray-900 mb-4">Question Review</h3>
//             <div className="space-y-4">
//               {quizQuestions.map((question, index) => (
//                 <div key={question.id} className="border border-gray-200 rounded-xl p-4">
//                   <p className="font-semibold text-gray-900 mb-2">
//                     {index + 1}. {question.question}
//                   </p>
//                   <p className={`text-sm mb-2 ${
//                     selectedAnswers[question.id] === question.correctAnswer
//                       ? 'text-green-600'
//                       : 'text-red-600'
//                   }`}>
//                     Your answer: {question.options[selectedAnswers[question.id]]}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <strong>Explanation:</strong> {question.explanation}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20 mb-8"
//             >
//               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//               <span className="text-white/90 font-semibold text-sm">MODULE OVERVIEW</span>
//             </motion.div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
//               {moduleName}
//             </h1>
            
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
//               {details.description}
//             </p>

//             <div className="flex flex-wrap justify-center gap-6 mb-8">
//               <div className="flex items-center space-x-2 text-white/80">
//                 <Award className="w-5 h-5" />
//                 <span className="font-semibold">{details.category}</span>
//               </div>
//               <div className="flex items-center space-x-2 text-white/80">
//                 <Clock className="w-5 h-5" />
//                 <span className="font-semibold">{details.duration}</span>
//               </div>
//               <div className="flex items-center space-x-2 text-white/80">
//                 <BookOpen className="w-5 h-5" />
//                 <span className="font-semibold">{details.lessons} lessons</span>
//               </div>
//               <div className="flex items-center space-x-2 text-white/80">
//                 <User className="w-5 h-5" />
//                 <span className="font-semibold">{details.instructor}</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Module Content */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Tab Navigation */}
//           <div className="flex space-x-1 bg-gray-100 p-2 rounded-2xl mb-8 max-w-md mx-auto">
//             <button
//               onClick={() => setActiveTab('lessons')}
//               className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
//                 activeTab === 'lessons'
//                   ? 'bg-white text-red-600 shadow-lg'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Lessons
//             </button>
//             <button
//               onClick={() => setActiveTab('quiz')}
//               className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
//                 activeTab === 'quiz'
//                   ? 'bg-white text-red-600 shadow-lg'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Quiz
//             </button>
//           </div>

//           <AnimatePresence mode="wait">
//             {activeTab === 'lessons' && (
//               <motion.div
//                 key="lessons"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="grid lg:grid-cols-3 gap-8"
//               >
//                 {/* Main Content */}
//                 <div className="lg:col-span-2 space-y-8">
//                   {/* Progress & Actions */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
//                   >
//                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//                       <button 
//                         onClick={() => navigate(-1)} 
//                         className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors font-semibold"
//                       >
//                         <ArrowLeft className="w-4 h-4" />
//                         <span>Back to Course</span>
//                       </button>
                      
//                       <div className="flex items-center space-x-4">
//                         <div className="text-right">
//                           <div className="text-sm text-gray-600">Progress</div>
//                           <div className="font-bold text-gray-900">2/5 Completed</div>
//                         </div>
//                         <div className="w-24 bg-gray-200 rounded-full h-2">
//                           <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-4">
//                       <button className="flex-1 bg-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
//                         <Play className="w-5 h-5" />
//                         <span>Continue Learning</span>
//                       </button>
//                       <button 
//                         onClick={() => setActiveTab('quiz')}
//                         className="flex-1 border-2 border-amber-500 text-amber-600 py-4 px-6 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 flex items-center justify-center space-x-3"
//                       >
//                         <Award className="w-5 h-5" />
//                         <span>Take Final Exam</span>
//                       </button>
//                     </div>
//                   </motion.div>

//                   {/* Lessons */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
//                   >
//                     <div className="flex items-center justify-between mb-8">
//                       <h2 className="text-3xl font-black text-gray-900">
//                         Module <span className="text-red-600">Lessons</span>
//                       </h2>
//                       <div className="flex items-center space-x-2 text-gray-600">
//                         <BookOpen className="w-5 h-5" />
//                         <span className="font-semibold">{lessons.length} lessons</span>
//                       </div>
//                     </div>
                    
//                     <div className="space-y-4">
//                       {lessons.map((lesson, index) => (
//                         <motion.div
//                           key={lesson.id}
//                           whileHover={{ scale: 1.02 }}
//                           className="border border-gray-200 rounded-2xl p-6 hover:border-red-600 transition-all duration-300 group cursor-pointer bg-gray-50 hover:bg-red-50"
//                         >
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center space-x-4">
//                               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 ${
//                                 lesson.completed 
//                                   ? 'bg-green-500' 
//                                   : lesson.type === 'quiz'
//                                     ? 'bg-amber-500'
//                                     : 'bg-red-600'
//                               }`}>
//                                 {lesson.completed ? (
//                                   <CheckCircle className="w-6 h-6" />
//                                 ) : (
//                                   index + 1
//                                 )}
//                               </div>
//                               <div className="flex-1">
//                                 <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-700 transition-colors">
//                                   {lesson.title}
//                                 </h3>
//                                 <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
//                                   <span className="flex items-center space-x-1">
//                                     <Clock className="w-4 h-4" />
//                                     <span>{lesson.duration}</span>
//                                   </span>
//                                   <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                                     lesson.type === 'video' 
//                                       ? 'bg-blue-100 text-blue-700' 
//                                       : 'bg-amber-100 text-amber-700'
//                                   }`}>
//                                     {lesson.type === 'video' ? 'Video Lesson' : 'Assessment'}
//                                   </span>
//                                   {lesson.completed && (
//                                     <span className="flex items-center space-x-1 text-green-600">
//                                       <CheckCircle className="w-4 h-4" />
//                                       <span className="text-xs font-semibold">Completed</span>
//                                     </span>
//                                   )}
//                                 </div>
//                               </div>
//                             </div>
//                             <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center space-x-2">
//                               <Play className="w-4 h-4" />
//                               <span>Start</span>
//                             </button>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* Sidebar */}
//                 <div className="space-y-8">
//                   {/* Module Info */}
//                   <motion.div
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 }}
//                     className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
//                   >
//                     <h3 className="text-xl font-black text-gray-900 mb-4">Module Details</h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between py-2 border-b border-gray-100">
//                         <span className="text-gray-600">Category</span>
//                         <span className="font-semibold">{details.category}</span>
//                       </div>
//                       <div className="flex justify-between py-2 border-b border-gray-100">
//                         <span className="text-gray-600">Level</span>
//                         <span className="font-semibold">{details.level}</span>
//                       </div>
//                       <div className="flex justify-between py-2 border-b border-gray-100">
//                         <span className="text-gray-600">Duration</span>
//                         <span className="font-semibold">{details.duration}</span>
//                       </div>
//                       <div className="flex justify-between py-2 border-b border-gray-100">
//                         <span className="text-gray-600">Lessons</span>
//                         <span className="font-semibold">{details.lessons}</span>
//                       </div>
//                       <div className="flex justify-between py-2">
//                         <span className="text-gray-600">Instructor</span>
//                         <span className="font-semibold">{details.instructor}</span>
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Resources */}
//                   <motion.div
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.4 }}
//                     className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
//                   >
//                     <h3 className="text-xl font-black text-gray-900 mb-4">Resources</h3>
//                     <div className="space-y-3">
//                       {resources.map((resource, index) => (
//                         <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:border-red-600 transition-colors">
//                           <div className="flex items-center space-x-3">
//                             <FileText className="w-5 h-5 text-red-600" />
//                             <div>
//                               <div className="font-medium text-gray-900">{resource.name}</div>
//                               <div className="text-sm text-gray-600">{resource.type} • {resource.size}</div>
//                             </div>
//                           </div>
//                           <button className="text-red-600 hover:text-red-700 transition-colors">
//                             <Download className="w-4 h-4" />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             )}

//             {activeTab === 'quiz' && (
//               <motion.div
//                 key="quiz"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//               >
//                 <QuizComponent />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* Certificate Modal */}
//       <AnimatePresence>
//         {showCertificate && <Certificate />}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Module;



// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from 'framer-motion';
// import { Clock, User, BookOpen, Play, FileText, ArrowLeft, Award, CheckCircle, BarChart3, Download, Share2, Printer, Timer, AlertCircle } from 'lucide-react';

// const MODULE_DETAILS = {
//   "Account Transaction": {
//     description: "Master the fundamentals of account transaction processing in modern banking systems. Learn about transaction types, processing workflows, reconciliation methods, and compliance requirements essential for banking operations.",
//     duration: "2 hours",
//     lessons: 4,
//     instructor: "Mr. Rahman",
//     resources: 3,
//     category: "Banking Operations",
//     level: "Intermediate"
//   },
//   "Anti Money Laundering": {
//     description: "Comprehensive training on Anti-Money Laundering regulations, detection techniques, and compliance frameworks. Learn to identify suspicious activities and implement effective AML controls in banking operations.",
//     duration: "3 hours", 
//     lessons: 5,
//     instructor: "Ms. Akter",
//     resources: 4,
//     category: "Compliance",
//     level: "Advanced"
//   },
//   "Retail Banking": {
//     description: "Explore comprehensive retail banking services, customer relationship management, and product offerings. Understand the dynamics of retail banking operations and customer service excellence.",
//     duration: "2.5 hours",
//     lessons: 4,
//     instructor: "Mr. Hossain", 
//     resources: 3,
//     category: "Retail Banking",
//     level: "Intermediate"
//   },
//   "Asset & Liability Management": {
//     description: "Deep dive into asset and liability management strategies, balance sheet optimization, and risk management techniques. Master the principles of ALM in modern banking institutions.",
//     duration: "3 hours",
//     lessons: 5,
//     instructor: "Ms. Karim",
//     resources: 4,
//     category: "Risk Management",
//     level: "Advanced"
//   }
// };

// // Enhanced Quiz Questions for each module with descriptive questions
// const MODULE_QUIZZES = {
//   "Account Transaction": [
//     {
//       id: 1,
//       question: "What is the primary purpose of a debit entry in banking transactions?",
//       options: [
//         "To increase account balance",
//         "To decrease account balance", 
//         "To record interest earned",
//         "To process loan applications"
//       ],
//       correctAnswer: 1,
//       explanation: "Debit entries decrease account balances in banking transactions, representing money going out of an account.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "Which transaction type typically involves immediate fund transfer?",
//       options: [
//         "Standing order",
//         "Direct debit",
//         "Real-time gross settlement",
//         "Cheque processing"
//       ],
//       correctAnswer: 2,
//       explanation: "Real-time gross settlement (RTGS) involves immediate fund transfer between banks.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Explain the importance of transaction reconciliation in banking operations and provide an example of how discrepancies might occur.",
//       type: "descriptive",
//       explanation: "Transaction reconciliation ensures accuracy between bank records and customer statements, detects fraud, maintains compliance, and provides reliable financial reporting. Discrepancies can occur due to timing differences, errors in recording, or fraudulent activities.",
//       correctAnswer: "Transaction reconciliation is crucial for ensuring accuracy between bank records and customer statements, detecting discrepancies, preventing fraud, maintaining regulatory compliance, and providing reliable financial reporting. Example discrepancies include timing differences in cheque clearing, data entry errors, or unauthorized transactions."
//     },
//     {
//       id: 4,
//       question: "What is the minimum information required for processing a banking transaction?",
//       options: [
//         "Account number and amount only",
//         "Account number, amount, and transaction type",
//         "Account number, amount, transaction type, and beneficiary details",
//         "All customer personal information"
//       ],
//       correctAnswer: 1,
//       explanation: "At minimum, account number, amount, and transaction type are required to process any banking transaction.",
//       type: "multiple_choice"
//     },
//     {
//       id: 5,
//       question: "Describe the different types of electronic funds transfer systems used in modern banking.",
//       type: "descriptive",
//       explanation: "Electronic funds transfer systems include RTGS for large real-time transfers, NEFT for batch processing, IMPS for instant mobile transfers, and SWIFT for international transactions.",
//       correctAnswer: "Modern banking uses various EFT systems: 1) RTGS for large-value real-time settlements, 2) NEFT for batch-based electronic transfers, 3) IMPS for instant mobile payments, 4) SWIFT for cross-border transactions, and 5) ACH for bulk processing of debit/credit transactions."
//     }
//   ],
//   "Anti Money Laundering": [
//     {
//       id: 1,
//       question: "What does AML stand for in banking?",
//       options: [
//         "Automated Money Lending",
//         "Anti Money Laundering", 
//         "Asset Management Liability",
//         "Annual Monetary License"
//       ],
//       correctAnswer: 1,
//       explanation: "AML stands for Anti Money Laundering - procedures to prevent generating income through illegal actions.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2, 
//       question: "What is the primary goal of KYC regulations?",
//       options: [
//         "To know your competition",
//         "To know your customer's identity",
//         "To know your currency",
//         "To know your compliance"
//       ],
//       correctAnswer: 1,
//       explanation: "KYC (Know Your Customer) regulations require banks to verify customer identity to prevent fraud.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Explain the three stages of money laundering and provide examples of suspicious activities at each stage.",
//       type: "descriptive",
//       explanation: "The three stages are Placement (introducing illegal funds), Layering (concealing source), and Integration (making funds appear legitimate).",
//       correctAnswer: "The three stages are: 1) Placement - introducing illegal funds into financial system (e.g., structuring deposits below reporting thresholds), 2) Layering - complex transactions to obscure origin (e.g., multiple international transfers), 3) Integration - making funds appear legitimate (e.g., investing in businesses). Suspicious activities include unusual transaction patterns, inconsistent business activities, and avoidance of reporting requirements."
//     },
//     {
//       id: 4,
//       question: "What is a Suspicious Activity Report (SAR)?",
//       options: [
//         "A report filed by customers",
//         "A report filed by banks for suspicious transactions",
//         "A daily transaction summary",
//         "A loan application form"
//       ],
//       correctAnswer: 1,
//       explanation: "SAR is filed by financial institutions to report suspicious transactions that might indicate money laundering.",
//       type: "multiple_choice"
//     },
//     {
//       id: 5,
//       question: "Which is NOT a common money laundering stage?",
//       options: [
//         "Placement",
//         "Layering", 
//         "Integration",
//         "Verification"
//       ],
//       correctAnswer: 3,
//       explanation: "The three stages of money laundering are Placement, Layering, and Integration. Verification is not a stage.",
//       type: "multiple_choice"
//     }
//   ]
// };

// const Module = () => {
//   const { moduleName } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('lessons');
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [descriptiveAnswers, setDescriptiveAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [certificateEligible, setCertificateEligible] = useState(false);
//   const [showCertificate, setShowCertificate] = useState(false);

//   const details = MODULE_DETAILS[moduleName] || {
//     description: "Comprehensive module details coming soon.",
//     duration: "N/A",
//     lessons: 0,
//     instructor: "TBA",
//     resources: 0,
//     category: "General",
//     level: "Beginner"
//   };

//   const lessons = [
//     { id: 1, title: "Introduction to " + moduleName, duration: "15 min", type: "video", completed: true },
//     { id: 2, title: "Core Concepts & Principles", duration: "25 min", type: "video", completed: true },
//     { id: 3, title: "Practical Applications & Case Studies", duration: "30 min", type: "video", completed: false },
//     { id: 4, title: "Advanced Techniques", duration: "20 min", type: "video", completed: false },
//     { id: 5, title: moduleName + " Assessment", duration: "20 min", type: "quiz", completed: false }
//   ];

//   const resources = [
//     { name: "Module Handbook", type: "PDF", size: "2.4 MB" },
//     { name: "Case Studies", type: "Document", size: "1.8 MB" },
//     { name: "Reference Materials", type: "PDF", size: "3.1 MB" },
//     { name: "Practice Exercises", type: "Worksheet", size: "1.2 MB" }
//   ];

//   const quizQuestions = MODULE_QUIZZES[moduleName] || [];

//   // Countdown timer effect - FIXED
//   useEffect(() => {
//     let timer;
//     if (quizStarted && !quizCompleted && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft(time => {
//           if (time <= 1) {
//             clearInterval(timer);
//             handleQuizSubmit();
//             return 0;
//           }
//           return time - 1;
//         });
//       }, 1000);
//     } else if (timeLeft === 0 && quizStarted) {
//       handleQuizSubmit();
//     }
    
//     return () => clearInterval(timer);
//   }, [quizStarted, quizCompleted, timeLeft]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handleAnswerSelect = (questionId, answerIndex) => {
//     setSelectedAnswers(prev => ({
//       ...prev,
//       [questionId]: answerIndex
//     }));
//   };

//   const handleDescriptiveAnswer = (questionId, answer) => {
//     setDescriptiveAnswers(prev => ({
//       ...prev,
//       [questionId]: answer
//     }));
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < quizQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleQuizSubmit = () => {
//     let correct = 0;
//     let totalGradable = 0;
    
//     quizQuestions.forEach(question => {
//       if (question.type === "multiple_choice") {
//         totalGradable++;
//         if (selectedAnswers[question.id] === question.correctAnswer) {
//           correct++;
//         }
//       } else if (question.type === "descriptive") {
//         // For descriptive questions, count as attempted if answered
//         if (descriptiveAnswers[question.id] && descriptiveAnswers[question.id].trim().length > 0) {
//           totalGradable++;
//           correct++; // Count descriptive as correct for now, or implement manual grading
//         }
//       }
//     });
    
//     const finalScore = totalGradable > 0 ? (correct / totalGradable) * 100 : 0;
//     setScore(finalScore);
//     setQuizCompleted(true);
//     setShowResults(true);
//     setQuizStarted(false);
    
//     // Check if certificate is eligible (80% or higher)
//     if (finalScore >= 80) {
//       setCertificateEligible(true);
      
//       // Mark this module as completed in localStorage
//       const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
//       completedModules[moduleName] = true;
//       localStorage.setItem('completedModules', JSON.stringify(completedModules));
      
//       // Check if all modules are completed
//       checkAllModulesCompleted();
//     }
//   };

//   const checkAllModulesCompleted = () => {
//     const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
//     const allModules = Object.keys(MODULE_DETAILS);
//     const allCompleted = allModules.every(module => completedModules[module]);
    
//     if (allCompleted) {
//       localStorage.setItem('fullCourseCompleted', 'true');
//     }
//   };

//   const startQuiz = () => {
//     setQuizStarted(true);
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setSelectedAnswers({});
//     setDescriptiveAnswers({});
//     setTimeLeft(600); // 10 minutes
//     setScore(0);
//     setShowResults(false);
//     setCertificateEligible(false);
//   };

//   const resetQuiz = () => {
//     setQuizStarted(false);
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setSelectedAnswers({});
//     setDescriptiveAnswers({});
//     setTimeLeft(600);
//     setScore(0);
//     setShowResults(false);
//     setCertificateEligible(false);
//   };

//   const shareCertificate = (platform) => {
//     const message = `I just completed the ${moduleName} module from IFIC Bank eLearning Portal with a score of ${score.toFixed(1)}%!`;
//     const url = window.location.origin;
    
//     const shareUrls = {
//       linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(message)}`,
//       twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`,
//       facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`
//     };

//     if (shareUrls[platform]) {
//       window.open(shareUrls[platform], '_blank', 'width=600,height=400');
//     }
//   };

//   const downloadCertificate = () => {
//     // In a real application, this would generate a PDF certificate
//     const certificateData = {
//       studentName: "John Doe", // This would come from user profile
//       courseName: moduleName,
//       score: score.toFixed(1),
//       date: new Date().toLocaleDateString(),
//       instructor: details.instructor
//     };
    
//     // Simulate PDF download
//     const element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(certificateData)));
//     element.setAttribute('download', `IFIC_Certificate_${moduleName.replace(/\s+/g, '_')}.pdf`);
//     element.style.display = 'none';
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };

//   const printCertificate = () => {
//     window.print();
//   };

//   // Certificate Component
//   const Certificate = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full"
//       >
//         <div className="p-8">
//           <div className="text-center border-4 border-gold-500 p-8 bg-gradient-to-b from-white to-gray-50">
//             <div className="mb-6">
//               <img src="/ific-logo.png" alt="IFIC Bank" className="h-16 mx-auto mb-4" />
//               <h1 className="text-3xl font-black text-gray-900 mb-2">Certificate of Completion</h1>
//               <p className="text-gray-600">This certifies that</p>
//             </div>
            
//             <h2 className="text-2xl font-bold text-red-600 mb-4">John Doe</h2>
            
//             <p className="text-gray-700 mb-6">
//               has successfully completed the <strong>{moduleName}</strong> module<br />
//               with a score of <strong>{score.toFixed(1)}%</strong>
//             </p>
            
//             <div className="flex justify-between items-center mt-8">
//               <div className="text-center">
//                 <div className="border-t border-gray-400 pt-2">
//                   <p className="font-semibold">{details.instructor}</p>
//                   <p className="text-sm text-gray-600">Instructor</p>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <p className="font-semibold">{new Date().toLocaleDateString()}</p>
//                 <p className="text-sm text-gray-600">Date Completed</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-center space-x-4 mt-6">
//             <button
//               onClick={downloadCertificate}
//               className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//             >
//               <Download className="w-4 h-4" />
//               <span>Download PDF</span>
//             </button>
//             <button
//               onClick={printCertificate}
//               className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
//             >
//               <Printer className="w-4 h-4" />
//               <span>Print</span>
//             </button>
//             <button
//               onClick={() => setShowCertificate(false)}
//               className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-600 transition-colors"
//             >
//               <span>Close</span>
//             </button>
//           </div>
          
//           <div className="flex justify-center space-x-4 mt-4">
//             <button
//               onClick={() => shareCertificate('linkedin')}
//               className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               <Share2 className="w-4 h-4" />
//               <span>Share on LinkedIn</span>
//             </button>
//             <button
//               onClick={() => shareCertificate('twitter')}
//               className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
//             >
//               <Share2 className="w-4 h-4" />
//               <span>Share on Twitter</span>
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );

//   // Enhanced Quiz Component with descriptive questions
//   const QuizComponent = () => (
//     <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
//       {!quizStarted && !quizCompleted && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center"
//         >
//           <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
//             <Award className="w-10 h-10 text-red-600" />
//           </div>
//           <h2 className="text-3xl font-black text-gray-900 mb-4">{moduleName} Quiz</h2>
//           <p className="text-gray-600 mb-6 max-w-md mx-auto">
//             Test your knowledge with this {quizQuestions.length}-question quiz. You have 10 minutes to complete it. 
//             Score 80% or higher to earn your certificate.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
//             <div className="bg-gray-50 p-4 rounded-xl">
//               <div className="text-2xl font-bold text-gray-900">{quizQuestions.length}</div>
//               <div className="text-sm text-gray-600">Total Questions</div>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-xl">
//               <div className="text-2xl font-bold text-gray-900">10:00</div>
//               <div className="text-sm text-gray-600">Time Limit</div>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-xl">
//               <div className="text-2xl font-bold text-gray-900">80%</div>
//               <div className="text-sm text-gray-600">Passing Score</div>
//             </div>
//           </div>

//           <div className="mb-6 p-4 bg-blue-50 rounded-lg">
//             <h4 className="font-semibold text-blue-900 mb-2">Question Types:</h4>
//             <div className="flex justify-center gap-4 text-sm">
//               <span className="flex items-center gap-1">
//                 <div className="w-3 h-3 bg-blue-500 rounded"></div>
//                 Multiple Choice: {quizQuestions.filter(q => q.type === 'multiple_choice').length}
//               </span>
//               <span className="flex items-center gap-1">
//                 <div className="w-3 h-3 bg-green-500 rounded"></div>
//                 Descriptive: {quizQuestions.filter(q => q.type === 'descriptive').length}
//               </span>
//             </div>
//           </div>
          
//           <button
//             onClick={startQuiz}
//             className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
//           >
//             Start Quiz
//           </button>
//         </motion.div>
//       )}

//       {quizStarted && !quizCompleted && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           {/* Quiz Header */}
//           <div className="flex flex-col sm:flex-row justify-between items-center mb-8 p-4 bg-gray-50 rounded-xl gap-4">
//             <div className="flex items-center space-x-2">
//               <Timer className="w-5 h-5 text-red-600" />
//               <span className={`font-semibold text-lg ${
//                 timeLeft < 60 ? 'text-red-600 animate-pulse' : 'text-gray-900'
//               }`}>
//                 {formatTime(timeLeft)}
//               </span>
//             </div>
//             <div className="text-sm text-gray-600">
//               Question {currentQuestion + 1} of {quizQuestions.length}
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-32 bg-gray-200 rounded-full h-2">
//                 <div 
//                   className="bg-red-600 h-2 rounded-full transition-all duration-300"
//                   style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
//                 ></div>
//               </div>
//             </div>
//           </div>

//           {/* Current Question */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-xl font-bold text-gray-900">
//                 {quizQuestions[currentQuestion].question}
//               </h3>
//               <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                 quizQuestions[currentQuestion].type === "multiple_choice" 
//                   ? "bg-blue-100 text-blue-700" 
//                   : "bg-green-100 text-green-700"
//               }`}>
//                 {quizQuestions[currentQuestion].type === "multiple_choice" ? "Multiple Choice" : "Descriptive"}
//               </span>
//             </div>
            
//             {quizQuestions[currentQuestion].type === "multiple_choice" ? (
//               <div className="space-y-3">
//                 {quizQuestions[currentQuestion].options.map((option, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleAnswerSelect(quizQuestions[currentQuestion].id, index)}
//                     className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
//                       selectedAnswers[quizQuestions[currentQuestion].id] === index
//                         ? 'border-red-600 bg-red-50 text-red-700'
//                         : 'border-gray-200 hover:border-red-300 hover:bg-red-25'
//                     }`}
//                   >
//                     <div className="flex items-center space-x-3">
//                       <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
//                         selectedAnswers[quizQuestions[currentQuestion].id] === index
//                           ? 'border-red-600 bg-red-600 text-white'
//                           : 'border-gray-300'
//                       }`}>
//                         {selectedAnswers[quizQuestions[currentQuestion].id] === index && (
//                           <div className="w-2 h-2 rounded-full bg-white"></div>
//                         )}
//                       </div>
//                       <span className="font-medium">{option}</span>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 <textarea
//                   value={descriptiveAnswers[quizQuestions[currentQuestion].id] || ''}
//                   onChange={(e) => handleDescriptiveAnswer(quizQuestions[currentQuestion].id, e.target.value)}
//                   placeholder="Type your detailed answer here... (Minimum 50 characters recommended)"
//                   className="w-full h-40 p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                 />
//                 <div className="text-sm text-gray-500">
//                   Characters: {descriptiveAnswers[quizQuestions[currentQuestion].id]?.length || 0}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex justify-between">
//             <button
//               onClick={handlePrevQuestion}
//               disabled={currentQuestion === 0}
//               className={`px-6 py-3 rounded-xl font-semibold transition-all ${
//                 currentQuestion === 0
//                   ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               Previous
//             </button>
            
//             {currentQuestion === quizQuestions.length - 1 ? (
//               <button
//                 onClick={handleQuizSubmit}
//                 className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//               >
//                 Submit Quiz
//               </button>
//             ) : (
//               <button
//                 onClick={handleNextQuestion}
//                 className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//               >
//                 Next Question
//               </button>
//             )}
//           </div>
//         </motion.div>
//       )}

//       {showResults && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center"
//         >
//           <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
//             certificateEligible ? 'bg-green-100' : 'bg-red-100'
//           }`}>
//             {certificateEligible ? (
//               <Award className="w-10 h-10 text-green-600" />
//             ) : (
//               <AlertCircle className="w-10 h-10 text-red-600" />
//             )}
//           </div>
          
//           <h2 className="text-3xl font-black text-gray-900 mb-4">Quiz Results</h2>
//           <div className={`text-5xl font-black mb-4 ${
//             certificateEligible ? 'text-green-600' : 'text-red-600'
//           }`}>
//             {score.toFixed(1)}%
//           </div>
          
//           <p className="text-gray-600 mb-6">
//             You answered {Math.round((score / 100) * quizQuestions.length)} out of {quizQuestions.length} questions correctly.
//           </p>
          
//           {certificateEligible ? (
//             <div className="space-y-4">
//               <p className="text-green-600 font-semibold text-lg">
//                 🎉 Congratulations! You've passed the quiz and earned a certificate!
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button
//                   onClick={() => setShowCertificate(true)}
//                   className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//                 >
//                   View Certificate
//                 </button>
//                 <button
//                   onClick={resetQuiz}
//                   className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
//                 >
//                   Retake Quiz
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               <p className="text-red-600 font-semibold">
//                 You need 80% to pass. Keep studying and try again!
//               </p>
//               <button
//                 onClick={resetQuiz}
//                 className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//               >
//                 Retake Quiz
//               </button>
//             </div>
//           )}
          
//           {/* Question Review */}
//           <div className="mt-8 text-left">
//             <h3 className="text-xl font-bold text-gray-900 mb-4">Question Review</h3>
//             <div className="space-y-4">
//               {quizQuestions.map((question, index) => (
//                 <div key={question.id} className="border border-gray-200 rounded-xl p-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <p className="font-semibold text-gray-900">
//                       {index + 1}. {question.question}
//                     </p>
//                     <span className={`px-2 py-1 rounded text-xs font-semibold ${
//                       question.type === "multiple_choice" 
//                         ? "bg-blue-100 text-blue-700" 
//                         : "bg-green-100 text-green-700"
//                     }`}>
//                       {question.type === "multiple_choice" ? "MCQ" : "Descriptive"}
//                     </span>
//                   </div>
                  
//                   {question.type === "multiple_choice" ? (
//                     <>
//                       <p className={`text-sm mb-2 ${
//                         selectedAnswers[question.id] === question.correctAnswer
//                           ? 'text-green-600'
//                           : 'text-red-600'
//                       }`}>
//                         Your answer: {question.options[selectedAnswers[question.id]]}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         <strong>Explanation:</strong> {question.explanation}
//                       </p>
//                     </>
//                   ) : (
//                     <>
//                       <p className="text-sm text-gray-700 mb-2">
//                         <strong>Your answer:</strong> {descriptiveAnswers[question.id] || 'Not answered'}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         <strong>Model Answer:</strong> {question.correctAnswer}
//                       </p>
//                     </>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20 mb-8"
//             >
//               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//               <span className="text-white/90 font-semibold text-sm">MODULE OVERVIEW</span>
//             </motion.div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
//               {moduleName}
//             </h1>
            
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
//               {details.description}
//             </p>

//             <div className="flex flex-wrap justify-center gap-6 mb-8">
//               <div className="flex items-center space-x-2 text-white/80">
//                 <Award className="w-5 h-5" />
//                 <span className="font-semibold">{details.category}</span>
//               </div>
//               <div className="flex items-center space-x-2 text-white/80">
//                 <Clock className="w-5 h-5" />
//                 <span className="font-semibold">{details.duration}</span>
//               </div>
//               <div className="flex items-center space-x-2 text-white/80">
//                 <BookOpen className="w-5 h-5" />
//                 <span className="font-semibold">{details.lessons} lessons</span>
//               </div>
//               <div className="flex items-center space-x-2 text-white/80">
//                 <User className="w-5 h-5" />
//                 <span className="font-semibold">{details.instructor}</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Module Content */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Tab Navigation */}
//           <div className="flex space-x-1 bg-gray-100 p-2 rounded-2xl mb-8 max-w-md mx-auto">
//             <button
//               onClick={() => setActiveTab('lessons')}
//               className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
//                 activeTab === 'lessons'
//                   ? 'bg-white text-red-600 shadow-lg'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Lessons
//             </button>
//             <button
//               onClick={() => setActiveTab('quiz')}
//               className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
//                 activeTab === 'quiz'
//                   ? 'bg-white text-red-600 shadow-lg'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Quiz
//             </button>
//           </div>

//           <AnimatePresence mode="wait">
//             {activeTab === 'lessons' && (
//               <motion.div
//                 key="lessons"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="grid lg:grid-cols-3 gap-8"
//               >
//                 {/* Main Content */}
//                 <div className="lg:col-span-2 space-y-8">
//                   {/* Progress & Actions */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
//                   >
//                     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//                       <button 
//                         onClick={() => navigate(-1)} 
//                         className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors font-semibold"
//                       >
//                         <ArrowLeft className="w-4 h-4" />
//                         <span>Back to Course</span>
//                       </button>
                      
//                       <div className="flex items-center space-x-4">
//                         <div className="text-right">
//                           <div className="text-sm text-gray-600">Progress</div>
//                           <div className="font-bold text-gray-900">2/5 Completed</div>
//                         </div>
//                         <div className="w-24 bg-gray-200 rounded-full h-2">
//                           <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-4">
//                       <button className="flex-1 bg-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
//                         <Play className="w-5 h-5" />
//                         <span>Continue Learning</span>
//                       </button>
//                       {/* <button 
//                         onClick={() => setActiveTab('quiz')}
//                         className="flex-1 border-2 border-amber-500 text-amber-600 py-4 px-6 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 flex items-center justify-center space-x-3"
//                       >
//                         <Award className="w-5 h-5" />
//                         <span>Take Final Exam</span>
//                       </button> */}

//   <button 
//   onClick={() => navigate(`/course-exam/basic-banking/${moduleName}`)} // Adjust courseId as needed
//   className="flex-1 border-2 border-amber-500 text-amber-600 py-4 px-6 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 flex items-center justify-center space-x-3"
// >
//   <Award className="w-5 h-5" />
//   <span>Take Module Exam</span>
// </button>
//                     </div>
//                   </motion.div>

//                   {/* Lessons */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
//                   >
//                     <div className="flex items-center justify-between mb-8">
//                       <h2 className="text-3xl font-black text-gray-900">
//                         Module <span className="text-red-600">Lessons</span>
//                       </h2>
//                       <div className="flex items-center space-x-2 text-gray-600">
//                         <BookOpen className="w-5 h-5" />
//                         <span className="font-semibold">{lessons.length} lessons</span>
//                       </div>
//                     </div>
                    
//                     <div className="space-y-4">
//                       {lessons.map((lesson, index) => (
//                         <motion.div
//                           key={lesson.id}
//                           whileHover={{ scale: 1.02 }}
//                           className="border border-gray-200 rounded-2xl p-6 hover:border-red-600 transition-all duration-300 group cursor-pointer bg-gray-50 hover:bg-red-50"
//                         >
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center space-x-4">
//                               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 ${
//                                 lesson.completed 
//                                   ? 'bg-green-500' 
//                                   : lesson.type === 'quiz'
//                                     ? 'bg-amber-500'
//                                     : 'bg-red-600'
//                               }`}>
//                                 {lesson.completed ? (
//                                   <CheckCircle className="w-6 h-6" />
//                                 ) : (
//                                   index + 1
//                                 )}
//                               </div>
//                               <div className="flex-1">
//                                 <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-700 transition-colors">
//                                   {lesson.title}
//                                 </h3>
//                                 <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
//                                   <span className="flex items-center space-x-1">
//                                     <Clock className="w-4 h-4" />
//                                     <span>{lesson.duration}</span>
//                                   </span>
//                                   <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                                     lesson.type === 'video' 
//                                       ? 'bg-blue-100 text-blue-700' 
//                                       : 'bg-amber-100 text-amber-700'
//                                   }`}>
//                                     {lesson.type === 'video' ? 'Video Lesson' : 'Assessment'}
//                                   </span>
//                                   {lesson.completed && (
//                                     <span className="flex items-center space-x-1 text-green-600">
//                                       <CheckCircle className="w-4 h-4" />
//                                       <span className="text-xs font-semibold">Completed</span>
//                                     </span>
//                                   )}
//                                 </div>
//                               </div>
//                             </div>
//                             <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center space-x-2">
//                               <Play className="w-4 h-4" />
//                               <span>Start</span>
//                             </button>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* Sidebar */}
//                 <div className="space-y-8">
//                   {/* Module Info */}
//                   <motion.div
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 }}
//                     className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
//                   >
//                     <h3 className="text-xl font-black text-gray-900 mb-4">Module Details</h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between py-2 border-b border-gray-100">
//                         <span className="text-gray-600">Category</span>
//                         <span className="font-semibold">{details.category}</span>
//                       </div>
//                       <div className="flex justify-between py-2 border-b border-gray-100">
//                         <span className="text-gray-600">Level</span>
//                         <span className="font-semibold">{details.level}</span>
//                       </div>
//                       <div className="flex justify-between py-2 border-b border-gray-100">
//                         <span className="text-gray-600">Duration</span>
//                         <span className="font-semibold">{details.duration}</span>
//                       </div>
//                       <div className="flex justify-between py-2 border-b border-gray-100">
//                         <span className="text-gray-600">Lessons</span>
//                         <span className="font-semibold">{details.lessons}</span>
//                       </div>
//                       <div className="flex justify-between py-2">
//                         <span className="text-gray-600">Instructor</span>
//                         <span className="font-semibold">{details.instructor}</span>
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Resources */}
//                   <motion.div
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.4 }}
//                     className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
//                   >
//                     <h3 className="text-xl font-black text-gray-900 mb-4">Resources</h3>
//                     <div className="space-y-3">
//                       {resources.map((resource, index) => (
//                         <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:border-red-600 transition-colors">
//                           <div className="flex items-center space-x-3">
//                             <FileText className="w-5 h-5 text-red-600" />
//                             <div>
//                               <div className="font-medium text-gray-900">{resource.name}</div>
//                               <div className="text-sm text-gray-600">{resource.type} • {resource.size}</div>
//                             </div>
//                           </div>
//                           <button className="text-red-600 hover:text-red-700 transition-colors">
//                             <Download className="w-4 h-4" />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             )}

//             {activeTab === 'quiz' && (
//               <motion.div
//                 key="quiz"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//               >
//                 <QuizComponent />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* Certificate Modal */}
//       <AnimatePresence>
//         {showCertificate && <Certificate />}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Module;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User, BookOpen, Play, FileText, ArrowLeft, Award, CheckCircle, BarChart3, Download, Share2, Printer, Timer, AlertCircle } from 'lucide-react';

const MODULE_DETAILS = {
  "Account Transaction": {
    description: "Master the fundamentals of account transaction processing in modern banking systems. Learn about transaction types, processing workflows, reconciliation methods, and compliance requirements essential for banking operations.",
    duration: "2 hours",
    lessons: 4,
    instructor: "Md. Rafiul Rahman",
    resources: 3,
    category: "Banking Operations",
    level: "Intermediate"
  },
  "Anti Money Laundering": {
    description: "Comprehensive training on Anti-Money Laundering regulations, detection techniques, and compliance frameworks. Learn to identify suspicious activities and implement effective AML controls in banking operations.",
    duration: "3 hours", 
    lessons: 5,
    instructor: "Nusrat Akter",
    resources: 4,
    category: "Compliance",
    level: "Advanced"
  },
  "Retail Banking": {
    description: "Explore comprehensive retail banking services, customer relationship management, and product offerings. Understand the dynamics of retail banking operations and customer service excellence.",
    duration: "2.5 hours",
    lessons: 4,
    instructor: "Tanvir Hossain", 
    resources: 3,
    category: "Retail Banking",
    level: "Intermediate"
  },
  "Asset & Liability Management": {
    description: "Deep dive into asset and liability management strategies, balance sheet optimization, and risk management techniques. Master the principles of ALM in modern banking institutions.",
    duration: "3 hours",
    lessons: 5,
    instructor: "Lamia Karim",
    resources: 4,
    category: "Risk Management",
    level: "Advanced"
  }
};


// Enhanced Quiz Questions for each module with descriptive questions
const MODULE_QUIZZES = {
  "Account Transaction": [
    {
      id: 1,
      question: "What is the primary purpose of a debit entry in banking transactions?",
      options: [
        "To increase account balance",
        "To decrease account balance", 
        "To record interest earned",
        "To process loan applications"
      ],
      correctAnswer: 1,
      explanation: "Debit entries decrease account balances in banking transactions, representing money going out of an account.",
      type: "multiple_choice"
    },
    {
      id: 2,
      question: "Which transaction type typically involves immediate fund transfer?",
      options: [
        "Standing order",
        "Direct debit",
        "Real-time gross settlement",
        "Cheque processing"
      ],
      correctAnswer: 2,
      explanation: "Real-time gross settlement (RTGS) involves immediate fund transfer between banks.",
      type: "multiple_choice"
    },
    {
      id: 3,
      question: "Explain the importance of transaction reconciliation in banking operations and provide an example of how discrepancies might occur.",
      type: "descriptive",
      explanation: "Transaction reconciliation ensures accuracy between bank records and customer statements, detects fraud, maintains compliance, and provides reliable financial reporting. Discrepancies can occur due to timing differences, errors in recording, or fraudulent activities.",
      correctAnswer: "Transaction reconciliation is crucial for ensuring accuracy between bank records and customer statements, detecting discrepancies, preventing fraud, maintaining regulatory compliance, and providing reliable financial reporting. Example discrepancies include timing differences in cheque clearing, data entry errors, or unauthorized transactions."
    }
  ],
  "Anti Money Laundering": [
    {
      id: 1,
      question: "What does AML stand for in banking?",
      options: [
        "Automated Money Lending",
        "Anti Money Laundering", 
        "Asset Management Liability",
        "Annual Monetary License"
      ],
      correctAnswer: 1,
      explanation: "AML stands for Anti Money Laundering - procedures to prevent generating income through illegal actions.",
      type: "multiple_choice"
    },
    {
      id: 2, 
      question: "What is the primary goal of KYC regulations?",
      options: [
        "To know your competition",
        "To know your customer's identity",
        "To know your currency",
        "To know your compliance"
      ],
      correctAnswer: 1,
      explanation: "KYC (Know Your Customer) regulations require banks to verify customer identity to prevent fraud.",
      type: "multiple_choice"
    },
    {
      id: 3,
      question: "Explain the three stages of money laundering and provide examples of suspicious activities at each stage.",
      type: "descriptive",
      explanation: "The three stages are Placement (introducing illegal funds), Layering (concealing source), and Integration (making funds appear legitimate).",
      correctAnswer: "The three stages are: 1) Placement - introducing illegal funds into financial system (e.g., structuring deposits below reporting thresholds), 2) Layering - complex transactions to obscure origin (e.g., multiple international transfers), 3) Integration - making funds appear legitimate (e.g., investing in businesses). Suspicious activities include unusual transaction patterns, inconsistent business activities, and avoidance of reporting requirements."
    }
  ],
  "Retail Banking": [
    {
      id: 1,
      question: "Which product is most common in retail banking?",
      options: [
        "Savings Account",
        "Corporate Loan",
        "Investment Banking",
        "Merchant Services"
      ],
      correctAnswer: 0,
      explanation: "Savings accounts are the most common retail banking product, serving individual customers.",
      type: "multiple_choice"
    },
    {
      id: 2,
      question: "What is the main focus of retail banking?",
      options: [
        "Individual customers",
        "Large corporations",
        "Government institutions",
        "International trade"
      ],
      correctAnswer: 0,
      explanation: "Retail banking primarily serves individual customers with personal banking services.",
      type: "multiple_choice"
    }
  ],
  "Asset & Liability Management": [
    {
      id: 1,
      question: "What is considered an asset in banking?",
      options: [
        "Customer deposits",
        "Loans given to customers",
        "Bank's expenses",
        "Employee salaries"
      ],
      correctAnswer: 1,
      explanation: "Loans given to customers are assets for banks as they generate interest income.",
      type: "multiple_choice"
    },
    {
      id: 2,
      question: "Which of the following is a liability for a bank?",
      options: [
        "Cash reserves",
        "Customer deposits",
        "Property owned",
        "Investments made"
      ],
      correctAnswer: 1,
      explanation: "Customer deposits are liabilities as the bank owes this money to customers.",
      type: "multiple_choice"
    }
  ]
};

const Module = () => {
  const { moduleName } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('lessons');
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [descriptiveAnswers, setDescriptiveAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds for testing
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [certificateEligible, setCertificateEligible] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  // Decode module name from URL
  const decodedModuleName = decodeURIComponent(moduleName || '');
  
  // Fix module name matching - handle variations
  const getActualModuleName = () => {
    const moduleNames = Object.keys(MODULE_DETAILS);
    const matchedModule = moduleNames.find(name => 
      name.toLowerCase().includes(decodedModuleName.toLowerCase()) || 
      decodedModuleName.toLowerCase().includes(name.toLowerCase())
    );
    return matchedModule || decodedModuleName;
  };

  const actualModuleName = getActualModuleName();
  const details = MODULE_DETAILS[actualModuleName] || {
    description: "Comprehensive module details coming soon.",
    duration: "N/A",
    lessons: 0,
    instructor: "TBA",
    resources: 0,
    category: "General",
    level: "Beginner"
  };

  const lessons = [
    { id: 1, title: "Introduction to " + actualModuleName, duration: "15 min", type: "video", completed: true },
    { id: 2, title: "Core Concepts & Principles", duration: "25 min", type: "video", completed: true },
    { id: 3, title: "Practical Applications & Case Studies", duration: "30 min", type: "video", completed: false },
    { id: 4, title: "Advanced Techniques", duration: "20 min", type: "video", completed: false },
    { id: 5, title: actualModuleName + " Assessment", duration: "20 min", type: "quiz", completed: false }
  ];

  const resources = [
    { name: "Module Handbook", type: "PDF", size: "2.4 MB" },
    { name: "Case Studies", type: "Document", size: "1.8 MB" },
    { name: "Reference Materials", type: "PDF", size: "3.1 MB" },
    { name: "Practice Exercises", type: "Worksheet", size: "1.2 MB" }
  ];

  const quizQuestions = MODULE_QUIZZES[actualModuleName] || [];

  // Countdown timer effect - FIXED
  useEffect(() => {
    let timer;
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            clearInterval(timer);
            handleQuizSubmit();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [quizStarted, quizCompleted, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleDescriptiveAnswer = (questionId, answer) => {
    setDescriptiveAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuizSubmit = () => {
    let correct = 0;
    let totalGradable = 0;
    
    quizQuestions.forEach(question => {
      if (question.type === "multiple_choice") {
        totalGradable++;
        if (selectedAnswers[question.id] === question.correctAnswer) {
          correct++;
        }
      } else if (question.type === "descriptive") {
        totalGradable++;
        // For descriptive questions, count as correct if answered with reasonable length
        if (descriptiveAnswers[question.id] && descriptiveAnswers[question.id].trim().length > 20) {
          correct++;
        }
      }
    });
    
    const finalScore = totalGradable > 0 ? (correct / totalGradable) * 100 : 0;
    setScore(finalScore);
    setQuizCompleted(true);
    setShowResults(true);
    setQuizStarted(false);
    
    // Check if certificate is eligible (80% or higher)
    if (finalScore >= 80) {
      setCertificateEligible(true);
      
      // Mark this module as completed in localStorage
      const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
      completedModules[actualModuleName] = {
        score: finalScore,
        date: new Date().toISOString(),
        passed: true
      };
      localStorage.setItem('completedModules', JSON.stringify(completedModules));
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setDescriptiveAnswers({});
    setTimeLeft(300); // 5 minutes for testing
    setScore(0);
    setShowResults(false);
    setCertificateEligible(false);
    setShowCertificate(false);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setDescriptiveAnswers({});
    setTimeLeft(300);
    setScore(0);
    setShowResults(false);
    setCertificateEligible(false);
    setShowCertificate(false);
  };

  const shareCertificate = (platform) => {
    const message = `I just completed the ${actualModuleName} module from IFIC Bank eLearning Portal with a score of ${score.toFixed(1)}%!`;
    const url = window.location.origin;
    
    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(message)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const downloadCertificate = () => {
    const certificateData = {
      studentName: "John Doe",
      moduleName: actualModuleName,
      score: score.toFixed(1),
      date: new Date().toLocaleDateString(),
      instructor: details.instructor
    };
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(certificateData, null, 2)));
    element.setAttribute('download', `IFIC_Certificate_${actualModuleName.replace(/\s+/g, '_')}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const printCertificate = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Certificate - ${actualModuleName}</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 40px; }
            .certificate { border: 2px solid #000; padding: 40px; max-width: 800px; margin: 0 auto; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 20px; }
            .title { font-size: 32px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="certificate">
            <div class="logo">IFIC BANK eLEARNING</div>
            <div class="title">Certificate of Completion</div>
            <p>This certifies that</p>
            <h2>John Doe</h2>
            <p>has successfully completed the module</p>
            <h3>${actualModuleName}</h3>
            <p>with a score of <strong>${score.toFixed(1)}%</strong></p>
            <p>Date: ${new Date().toLocaleDateString()}</p>
            <p>Instructor: ${details.instructor}</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // Certificate Component
  const Certificate = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full"
      >
        <div className="p-8">
          <div className="text-center border-4 border-yellow-400 p-8 bg-gradient-to-b from-white to-gray-50">
            <div className="mb-6">
              <div className="text-3xl font-black text-gray-900 mb-2">IFIC BANK</div>
              <h1 className="text-3xl font-black text-gray-900 mb-2">Certificate of Completion</h1>
              <p className="text-gray-600">This certifies that</p>
            </div>
            
            <h2 className="text-2xl font-bold text-red-600 mb-4">John Doe</h2>
            
            <p className="text-gray-700 mb-6">
              has successfully completed the <strong>{actualModuleName}</strong> module<br />
              with a score of <strong>{score.toFixed(1)}%</strong>
            </p>
            
            <div className="flex justify-between items-center mt-8">
              <div className="text-center">
                <div className="border-t border-gray-400 pt-2">
                  <p className="font-semibold">{details.instructor}</p>
                  <p className="text-sm text-gray-600">Instructor</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                <p className="text-sm text-gray-600">Date Completed</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={downloadCertificate}
              className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={printCertificate}
              className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={() => setShowCertificate(false)}
              className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-600 transition-colors"
            >
              <span>Close</span>
            </button>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => shareCertificate('linkedin')}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share on LinkedIn</span>
            </button>
            <button
              onClick={() => shareCertificate('twitter')}
              className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share on Twitter</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // Enhanced Quiz Component with descriptive questions
  const QuizComponent = () => (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      {!quizStarted && !quizCompleted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Award className="w-10 h-10 text-red-600" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">{actualModuleName} Quiz</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Test your knowledge with this {quizQuestions.length}-question quiz. You have 5 minutes to complete it. 
            Score 80% or higher to earn your certificate.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">{quizQuestions.length}</div>
              <div className="text-sm text-gray-600">Total Questions</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">5:00</div>
              <div className="text-sm text-gray-600">Time Limit</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">80%</div>
              <div className="text-sm text-gray-600">Passing Score</div>
            </div>
          </div>

          {quizQuestions.length > 0 ? (
            <>
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Question Types:</h4>
                <div className="flex justify-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    Multiple Choice: {quizQuestions.filter(q => q.type === 'multiple_choice').length}
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    Descriptive: {quizQuestions.filter(q => q.type === 'descriptive').length}
                  </span>
                </div>
              </div>
              
              <button
                onClick={startQuiz}
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Start Quiz
              </button>
            </>
          ) : (
            <div className="text-center py-4">
              <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">No quiz questions available for this module yet.</p>
              <button
                onClick={() => setActiveTab('lessons')}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Lessons
              </button>
            </div>
          )}
        </motion.div>
      )}

      {quizStarted && !quizCompleted && quizQuestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Quiz Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 p-4 bg-gray-50 rounded-xl gap-4">
            <div className="flex items-center space-x-2">
              <Timer className="w-5 h-5 text-red-600" />
              <span className={`font-semibold text-lg ${
                timeLeft < 60 ? 'text-red-600 animate-pulse' : 'text-gray-900'
              }`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-red-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Current Question */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {quizQuestions[currentQuestion].question}
              </h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                quizQuestions[currentQuestion].type === "multiple_choice" 
                  ? "bg-blue-100 text-blue-700" 
                  : "bg-green-100 text-green-700"
              }`}>
                {quizQuestions[currentQuestion].type === "multiple_choice" ? "Multiple Choice" : "Descriptive"}
              </span>
            </div>
            
            {quizQuestions[currentQuestion].type === "multiple_choice" ? (
              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(quizQuestions[currentQuestion].id, index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedAnswers[quizQuestions[currentQuestion].id] === index
                        ? 'border-red-600 bg-red-50 text-red-700'
                        : 'border-gray-200 hover:border-red-300 hover:bg-red-25'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[quizQuestions[currentQuestion].id] === index
                          ? 'border-red-600 bg-red-600 text-white'
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswers[quizQuestions[currentQuestion].id] === index && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <textarea
                  value={descriptiveAnswers[quizQuestions[currentQuestion].id] || ''}
                  onChange={(e) => handleDescriptiveAnswer(quizQuestions[currentQuestion].id, e.target.value)}
                  placeholder="Type your detailed answer here... (Minimum 20 characters recommended)"
                  className="w-full h-40 p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <div className="text-sm text-gray-500">
                  Characters: {descriptiveAnswers[quizQuestions[currentQuestion].id]?.length || 0}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>
            
            {currentQuestion === quizQuestions.length - 1 ? (
              <button
                onClick={handleQuizSubmit}
                className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                Next Question
              </button>
            )}
          </div>
        </motion.div>
      )}

      {showResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
            certificateEligible ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {certificateEligible ? (
              <Award className="w-10 h-10 text-green-600" />
            ) : (
              <AlertCircle className="w-10 h-10 text-red-600" />
            )}
          </div>
          
          <h2 className="text-3xl font-black text-gray-900 mb-4">Quiz Results</h2>
          <div className={`text-5xl font-black mb-4 ${
            certificateEligible ? 'text-green-600' : 'text-red-600'
          }`}>
            {score.toFixed(1)}%
          </div>
          
          <p className="text-gray-600 mb-6">
            You answered {Math.round((score / 100) * quizQuestions.length)} out of {quizQuestions.length} questions correctly.
          </p>
          
          {certificateEligible ? (
            <div className="space-y-4">
              <p className="text-green-600 font-semibold text-lg">
                🎉 Congratulations! You've passed the quiz and earned a certificate!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowCertificate(true)}
                  className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                >
                  View Certificate
                </button>
                <button
                  onClick={resetQuiz}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-red-600 font-semibold">
                You need 80% to pass. Keep studying and try again!
              </p>
              <button
                onClick={resetQuiz}
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          )}
          
          {/* Question Review */}
          <div className="mt-8 text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Question Review</h3>
            <div className="space-y-4">
              {quizQuestions.map((question, index) => (
                <div key={question.id} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-900">
                      {index + 1}. {question.question}
                    </p>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      question.type === "multiple_choice" 
                        ? "bg-blue-100 text-blue-700" 
                        : "bg-green-100 text-green-700"
                    }`}>
                      {question.type === "multiple_choice" ? "MCQ" : "Descriptive"}
                    </span>
                  </div>
                  
                  {question.type === "multiple_choice" ? (
                    <>
                      <p className={`text-sm mb-2 ${
                        selectedAnswers[question.id] === question.correctAnswer
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}>
                        Your answer: {question.options[selectedAnswers[question.id]]}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Your answer:</strong> {descriptiveAnswers[question.id] || 'Not answered'}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Model Answer:</strong> {question.correctAnswer}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20 mb-8"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-semibold text-sm">MODULE OVERVIEW</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              {actualModuleName}
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              {details.description}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-white/80">
                <Award className="w-5 h-5" />
                <span className="font-semibold">{details.category}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{details.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">{details.lessons} lessons</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <User className="w-5 h-5" />
                <span className="font-semibold">{details.instructor}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Module Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-gray-100 p-2 rounded-2xl mb-8 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('lessons')}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                activeTab === 'lessons'
                  ? 'bg-white text-red-600 shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Lessons
            </button>
            <button
              onClick={() => navigate(`/module-quiz/${moduleName}`)}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-white text-red-600 shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Quiz
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'lessons' && (
              <motion.div
                key="lessons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid lg:grid-cols-3 gap-8"
              >
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Progress & Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                      <button 
                        onClick={() => navigate(-1)} 
                        className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors font-semibold"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Course</span>
                      </button>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Progress</div>
                          <div className="font-bold text-gray-900">2/5 Completed</div>
                        </div>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 bg-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
                        <Play className="w-5 h-5" />
                        <span>Continue Learning</span>
                      </button>
                      
                 <button 
  onClick={() => navigate(`/module-quiz/${moduleName}`)}
  className="flex-1 border-2 border-amber-500 text-amber-600 py-4 px-6 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 flex items-center justify-center space-x-3"
>
  <Award className="w-5 h-5" />
  <span>Take Module Quiz</span>
</button>
                    </div>
                  </motion.div>

                  {/* Lessons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-black text-gray-900">
                        Module <span className="text-red-600">Lessons</span>
                      </h2>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <BookOpen className="w-5 h-5" />
                        <span className="font-semibold">{lessons.length} lessons</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {lessons.map((lesson, index) => (
                        <motion.div
                          key={lesson.id}
                          whileHover={{ scale: 1.02 }}
                          className="border border-gray-200 rounded-2xl p-6 hover:border-red-600 transition-all duration-300 group cursor-pointer bg-gray-50 hover:bg-red-50"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 ${
                                lesson.completed 
                                  ? 'bg-green-500' 
                                  : lesson.type === 'quiz'
                                    ? 'bg-amber-500'
                                    : 'bg-red-600'
                              }`}>
                                {lesson.completed ? (
                                  <CheckCircle className="w-6 h-6" />
                                ) : (
                                  index + 1
                                )}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-700 transition-colors">
                                  {lesson.title}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                  <span className="flex items-center space-x-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{lesson.duration}</span>
                                  </span>
                                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    lesson.type === 'video' 
                                      ? 'bg-blue-100 text-blue-700' 
                                      : 'bg-amber-100 text-amber-700'
                                  }`}>
                                    {lesson.type === 'video' ? 'Video Lesson' : 'Assessment'}
                                  </span>
                                  {lesson.completed && (
                                    <span className="flex items-center space-x-1 text-green-600">
                                      <CheckCircle className="w-4 h-4" />
                                      <span className="text-xs font-semibold">Completed</span>
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center space-x-2">
                              <Play className="w-4 h-4" />
                              <span>Start</span>
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Module Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
                  >
                    <h3 className="text-xl font-black text-gray-900 mb-4">Module Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Category</span>
                        <span className="font-semibold">{details.category}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Level</span>
                        <span className="font-semibold">{details.level}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-semibold">{details.duration}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Lessons</span>
                        <span className="font-semibold">{details.lessons}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Instructor</span>
                        <span className="font-semibold">{details.instructor}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Resources */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
                  >
                    <h3 className="text-xl font-black text-gray-900 mb-4">Resources</h3>
                    <div className="space-y-3">
                      {resources.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:border-red-600 transition-colors">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-red-600" />
                            <div>
                              <div className="font-medium text-gray-900">{resource.name}</div>
                              <div className="text-sm text-gray-600">{resource.type} • {resource.size}</div>
                            </div>
                          </div>
                          <button className="text-red-600 hover:text-red-700 transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <QuizComponent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertificate && <Certificate />}
      </AnimatePresence>
    </div>
  );
};

export default Module;