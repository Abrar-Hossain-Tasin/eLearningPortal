// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Play, Clock, BookOpen, Award, TrendingUp } from 'lucide-react';

// const MyLearning = () => {
//   const inProgressCourses = [
//     {
//       id: 'c1',
//       title: 'Advanced Banking Operations',
//       instructor: 'Sarah Johnson',
//       thumbnail: '/api/placeholder/300/200',
//       progress: 65,
//       duration: '6 weeks',
//       lastAccessed: '2 days ago',
//       nextLesson: 'Module 4: Risk Assessment'
//     },
//     {
//       id: 'c2',
//       title: 'Digital Banking & Fintech',
//       instructor: 'Michael Chen',
//       thumbnail: '/api/placeholder/300/200',
//       progress: 30,
//       duration: '4 weeks',
//       lastAccessed: '1 week ago',
//       nextLesson: 'Module 2: Blockchain Basics'
//     }
//   ];

//   const completedCourses = [
//     {
//       id: 'c3',
//       title: 'Anti Money Laundering',
//       instructor: 'Emily Rodriguez',
//       thumbnail: '/api/placeholder/300/200',
//       completedDate: '2024-01-15',
//       certificateId: 'AML-2024-001'
//     }
//   ];

//   const stats = [
//     { label: 'Courses in Progress', value: 2, icon: BookOpen, color: 'text-blue-500' },
//     { label: 'Courses Completed', value: 1, icon: Award, color: 'text-green-500' },
//     { label: 'Learning Hours', value: '24.5', icon: Clock, color: 'text-purple-500' },
//     { label: 'Current Streak', value: '5 days', icon: TrendingUp, color: 'text-orange-500' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8"
//         >
//           <h1 className="text-3xl font-bold text-slate-900 mb-2">My Learning</h1>
//           <p className="text-slate-600">Track your progress and continue your learning journey</p>
//         </motion.div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
//                   <p className="text-slate-600 text-sm">{stat.label}</p>
//                 </div>
//                 <div className={`p-3 rounded-xl bg-slate-100 ${stat.color}`}>
//                   <stat.icon className="w-6 h-6" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Continue Learning Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="mb-12"
//         >
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-slate-900">Continue Learning</h2>
//             <Link to="/courses" className="text-red-600 hover:text-red-700 font-medium">
//               Browse all courses
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {inProgressCourses.map((course) => (
//               <motion.div
//                 key={course.id}
//                 whileHover={{ y: -5 }}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200"
//               >
//                 <div className="flex">
//                   <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-green-500 flex items-center justify-center">
//                     <BookOpen className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="flex-1 p-6">
//                     <div className="flex justify-between items-start mb-2">
//                       <div>
//                         <h3 className="font-bold text-slate-900 mb-1">{course.title}</h3>
//                         <p className="text-slate-600 text-sm">by {course.instructor}</p>
//                       </div>
//                       <span className="text-xs text-slate-500">{course.lastAccessed}</span>
//                     </div>

//                     {/* Progress Bar */}
//                     <div className="mb-3">
//                       <div className="flex justify-between text-sm text-slate-600 mb-2">
//                         <span>Progress</span>
//                         <span>{course.progress}%</span>
//                       </div>
//                       <div className="w-full bg-slate-200 rounded-full h-2">
//                         <div
//                           className="bg-gradient-to-r from-red-600 to-green-500 h-2 rounded-full transition-all duration-300"
//                           style={{ width: `${course.progress}%` }}
//                         ></div>
//                       </div>
//                     </div>

//                     <div className="flex justify-between items-center">
//                       <div className="text-sm text-slate-600">
//                         Next: {course.nextLesson}
//                       </div>
//                       <Link
//                         to={`/course/${course.id}`}
//                         className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-green-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
//                       >
//                         <Play className="w-4 h-4" />
//                         <span>Continue</span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Completed Courses */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           <h2 className="text-2xl font-bold text-slate-900 mb-6">Completed Courses</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {completedCourses.map((course) => (
//               <motion.div
//                 key={course.id}
//                 whileHover={{ y: -5 }}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200"
//               >
//                 <div className="w-full h-32 bg-gradient-to-r from-red-500 to-green-500 flex items-center justify-center">
//                   <Award className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="font-bold text-slate-900 mb-2">{course.title}</h3>
//                   <p className="text-slate-600 text-sm mb-4">by {course.instructor}</p>
                  
//                   <div className="flex justify-between items-center">
//                     <div className="text-sm text-slate-500">
//                       Completed: {new Date(course.completedDate).toLocaleDateString()}
//                     </div>
//                     <Link
//                       to="/certificates"
//                       className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
//                     >
//                       View Certificate
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>
//       </div>
//     </div>
//   );
// };

// export default MyLearning;


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Clock, BookOpen, Award, TrendingUp, ArrowRight, CheckCircle, BarChart3, Calendar, Star } from 'lucide-react';

const MyLearning = () => {
  const inProgressCourses = [
  {
    id: 'c1',
    title: 'Advanced Banking Operations',
    instructor: 'Farhana Rahman',
    progress: 65,
    duration: '6 weeks',
    lastAccessed: '2 days ago',
    nextLesson: 'Module 4: Risk Assessment',
    category: 'Operations',
    thumbnail: '/api/placeholder/300/200',
    timeSpent: '12h 30m'
  },
  {
    id: 'c2',
    title: 'Digital Banking & Fintech',
    instructor: 'Mahmud Hasan',
    progress: 30,
    duration: '4 weeks',
    lastAccessed: '1 week ago',
    nextLesson: 'Module 2: Blockchain Basics',
    category: 'Technology',
    thumbnail: '/api/placeholder/300/200',
    timeSpent: '6h 15m'
  },
  {
    id: 'c3',
    title: 'Risk Management Framework',
    instructor: 'Nusrat Chowdhury',
    progress: 15,
    duration: '8 weeks',
    lastAccessed: '3 days ago',
    nextLesson: 'Module 1: Introduction to Risk',
    category: 'Compliance',
    thumbnail: '/api/placeholder/300/200',
    timeSpent: '3h 45m'
  }
];

const completedCourses = [
  {
    id: 'c4',
    title: 'Anti Money Laundering',
    instructor: 'Tariq Hossain',
    completedDate: '2024-01-15',
    certificateId: 'AML-2024-001',
    category: 'Compliance',
    grade: 'A+',
    duration: '3 weeks'
  },
  {
    id: 'c5',
    title: 'Retail Banking Fundamentals',
    instructor: 'Lamia Karim',
    completedDate: '2024-01-08',
    certificateId: 'RBF-2024-001',
    category: 'Operations',
    grade: 'A',
    duration: '5 weeks'
  }
];

const stats = [
  { label: 'Courses in Progress', value: 3, icon: BookOpen, color: 'text-blue-600', change: '+1' },
  { label: 'Courses Completed', value: 2, icon: Award, color: 'text-green-600', change: '+2' },
  { label: 'Learning Hours', value: '22.5', icon: Clock, color: 'text-purple-600', change: '+5.2h' },
  { label: 'Current Streak', value: '5 days', icon: TrendingUp, color: 'text-orange-600', change: '+2' }
];

const recommendedCourses = [
  {
    id: 'c6',
    title: 'Corporate Banking Strategies',
    instructor: 'Rashedul Islam',
    duration: '7 weeks',
    rating: 4.8,
    students: 234,
    category: 'Corporate'
  },
  {
    id: 'c7',
    title: 'Cybersecurity in Banking',
    instructor: 'Nabila Siddiqua',
    duration: '4 weeks',
    rating: 4.9,
    students: 189,
    category: 'Technology'
  }
];


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
              <span className="text-white/90 font-semibold text-sm">LEARNING DASHBOARD</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              My <span className="text-red-400">Learning</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Track your progress, continue your journey, and discover new opportunities for growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gray-100 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                    {stat.change}
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue Learning Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                Continue <span className="text-red-600">Learning</span>
              </h2>
              <p className="text-gray-600">Pick up where you left off</p>
            </div>
            <Link 
              to="/courses" 
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
            >
              <span>Browse All Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {inProgressCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200 group"
              >
                <div className="flex">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center relative">
                    <BookOpen className="w-8 h-8 text-white" />
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm rounded-lg px-2 py-1">
                        {course.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-red-700 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 text-sm">by {course.instructor}</p>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                        {course.lastAccessed}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span className="font-semibold text-red-600">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-600 to-red-800 h-2 rounded-full transition-all duration-1000 shadow-lg shadow-red-500/30"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.timeSpent}</span>
                          </span>
                          <span>Next: {course.nextLesson}</span>
                        </div>
                      </div>
                      <Link
                        to={`/course/${course.id}`}
                        className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <Play className="w-4 h-4" />
                        <span>Continue</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-gray-900 mb-2">
              Completed <span className="text-red-600">Courses</span>
            </h2>
            <p className="text-gray-600">Your achievements and certifications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="w-5 h-5 text-green-600" />
                        <span className="text-green-600 font-semibold">COMPLETED</span>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-gray-600 text-sm">by {course.instructor}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-xl text-sm font-semibold ${
                      course.grade === 'A+' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {course.grade}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(course.completedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">ID: {course.certificateId}</span>
                    <Link
                      to="/certificates"
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
                    >
                      View Certificate
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-gray-900 mb-2">
              Recommended <span className="text-red-600">For You</span>
            </h2>
            <p className="text-gray-600">Courses you might be interested in</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full mb-2">
                        {course.category}
                      </span>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-gray-600 text-sm">by {course.instructor}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BarChart3 className="w-4 h-4" />
                      <span>{course.students} students</span>
                    </div>
                  </div>

                  <Link
                    to={`/course/${course.id}`}
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 text-center block shadow-lg hover:shadow-xl"
                  >
                    Explore Course
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyLearning;