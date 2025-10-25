// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Star, Users, Clock, BookOpen } from 'lucide-react';

// const COURSES = [
//   { 
//     id:'c1', 
//     title:'Basic of Banking', 
//     duration:'2 weeks', 
//     instructor: 'Sarah Johnson',
//     tags:['General Banking','Banking Regulations and Compliance'],
//     rating: 4.9,
//     students: 1247,
//     lessons: 12
//   },
//   { 
//     id:'c2', 
//     title:'Basic of Credit', 
//     duration:'1 week', 
//     instructor: 'Michael Chen',
//     tags:['Credit Products','Credit Risk Assessment'],
//     rating: 4.8,
//     students: 892,
//     lessons: 8
//   },
//   { 
//     id:'c3', 
//     title:'Basic of Trade', 
//     duration:'1 week', 
//     instructor: 'Emily Rodriguez',
//     tags:['Trade Finance', 'Foreign Exchange'],
//     rating: 4.7,
//     students: 756,
//     lessons: 6
//   },
//   { 
//     id:'c4', 
//     title:'Basic of IT', 
//     duration:'3 weeks', 
//     instructor: 'David Kim',
//     tags:['Core Banking Systems', 'Cybersecurity in Banking'],
//     rating: 4.9,
//     students: 567,
//     lessons: 15
//   }
// ];

// const Courses = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8"
//         >
//           <h1 className="text-3xl font-bold text-slate-900 mb-2">All Courses</h1>
//           <p className="text-slate-600">Explore our comprehensive catalog of banking courses</p>
//         </motion.div>

//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {COURSES.map((course, index) => (
//             <motion.div
//               key={course.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5, scale: 1.02 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 group"
//             >
//               {/* Course Header */}
//               <div className="h-4 bg-gradient-to-r from-red-600 to-green-500"></div>
              
//               <div className="p-6">
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <h3 className="font-bold text-lg text-slate-900 mb-1">{course.title}</h3>
//                     <p className="text-slate-600 text-sm">by {course.instructor}</p>
//                   </div>
//                   <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
//                     {course.duration}
//                   </span>
//                 </div>

//                 <p className="text-slate-600 text-sm mb-4">{course.tags.join(' • ')}</p>

//                 {/* Course Stats */}
//                 <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
//                   <div className="flex items-center space-x-4">
//                     <div className="flex items-center space-x-1">
//                       <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                       <span>{course.rating}</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <Users className="w-4 h-4" />
//                       <span>{course.students}</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <BookOpen className="w-4 h-4" />
//                       <span>{course.lessons}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-3">
//                   <Link 
//                     to={`/course/${course.id}`}
//                     className="flex-1 bg-gradient-to-r from-red-600 to-green-500 text-white py-2 px-4 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200"
//                   >
//                     View Details
//                   </Link>
//                   <button className="w-12 h-12 border-2 border-slate-200 rounded-lg flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors">
//                     <Star className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Clock, BookOpen, Play, ArrowRight, Search, Filter } from 'lucide-react';


const Courses = () => {
  const courses = [
   {
  id: 'c1',
  title: 'Advanced Banking Operations',
  instructor: 'Farhana Rahman',
  duration: '6 weeks',
  lessons: 24,
  rating: 4.9,
  students: 1247,
  category: 'Operations',
  level: 'Advanced',
  description: 'Master comprehensive banking operations including transaction processing, compliance, and risk management.',
  featured: true,
   image: "/img3.png"
},
{
  id: 'c2',
  title: 'Digital Banking & Fintech',
  instructor: 'Mahmud Hasan',
  duration: '4 weeks',
  lessons: 18,
  rating: 4.8,
  students: 892,
  category: 'Technology',
  level: 'Intermediate',
  description: 'Explore the latest in digital banking transformation and financial technology innovations.',
  featured: true,
  image: '/img5.png'
},
{
  id: 'c3',
  title: 'Risk Management Framework',
  instructor: 'Nusrat Chowdhury',
  duration: '8 weeks',
  lessons: 32,
  rating: 4.7,
  students: 567,
  category: 'Compliance',
  level: 'Advanced',
  description: 'Comprehensive risk assessment and management strategies for modern banking institutions.',
  featured: false,
  image: '/img4.png'
},
{
  id: 'c4',
  title: 'Anti Money Laundering',
  instructor: 'Tanvir Ahmed',
  duration: '3 weeks',
  lessons: 12,
  rating: 4.9,
  students: 345,
  category: 'Compliance',
  level: 'Intermediate',
  description: 'Learn AML regulations, detection methods, and compliance requirements.',
  featured: false,
  image: '/img6.png'
},
{
  id: 'c5',
  title: 'Retail Banking Fundamentals',
  instructor: 'Lamia Karim',
  duration: '5 weeks',
  lessons: 20,
  rating: 4.6,
  students: 678,
  category: 'Operations',
  level: 'Beginner',
  description: 'Essential knowledge for retail banking operations and customer service excellence.',
  featured: false,
  image: '/img7.png'
},
{
  id: 'c6',
  title: 'Corporate Banking Strategies',
  instructor: 'Rafiul Islam',
  duration: '7 weeks',
  lessons: 28,
  rating: 4.8,
  students: 234,
  category: 'Corporate',
  level: 'Advanced',
  description: 'Strategic approaches to corporate banking and relationship management.',
  featured: true,
  image: '/img8.png'
},
{
  id: 'c7',
  title: 'Customer Service Excellence',
  instructor: 'Maliha Akter',
  duration: '4 weeks',
  lessons: 16,
  rating: 4.7,
  students: 456,
  category: 'Operations',
  level: 'Beginner',
  description: 'Develop exceptional customer service skills for banking professionals.',
  featured: false,
  image: '/img9.png'
},
{
  id: 'c8',
  title: 'Cybersecurity in Banking',
  instructor: 'Arefin Mahmud',
  duration: '5 weeks',
  lessons: 20,
  rating: 4.9,
  students: 789,
  category: 'Technology',
  level: 'Intermediate',
  description: 'Protect banking systems and customer data from cyber threats.',
  featured: true,
  image: '/img10.png'
},
{
  id: 'c9',
  title: 'Investment Banking Fundamentals',
  instructor: 'Jahidul Alam',
  duration: '6 weeks',
  lessons: 22,
  rating: 4.8,
  students: 321,
  category: 'Corporate',
  level: 'Advanced',
  description: 'Learn the core principles of investment banking and capital markets.',
  featured: false,
  image: '/img12.png'
}
];


  const categories = ['All', 'Operations', 'Technology', 'Compliance', 'Corporate', 'Risk'];
  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

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
              <span className="text-white/90 font-semibold text-sm">PROFESSIONAL DEVELOPMENT</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Banking <span className="text-red-400">Courses</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Explore our comprehensive catalog of banking courses designed to advance your career and expertise.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search courses, topics, or instructors..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-red-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {levels.map((level, index) => (
                <button
                  key={level}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-red-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                All <span className="text-red-600">Courses</span>
              </h2>
              <p className="text-gray-600">{courses.length} courses available</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">Sort by:</span>
              <select className="bg-white border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Highest Rated</option>
                <option>Duration</option>
              </select>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200"
              >
                {/* Course Header */}
                <div className="relative h-48 bg-gradient-to-br from-white-600 to-red-800 overflow-hidden">
                  
                  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${course.image})` }}
  ></div>
                  
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
                  
                  {course.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-xl border border-white/30">
                        FEATURED
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-xl">
                      {course.level}
                    </span>
                  </div>

                  <button className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <Play className="w-5 h-5 text-red-600 fill-current" />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-xl">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-red-700 transition-colors duration-300 leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{course.instructor}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-medium">{course.lessons} lessons</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating and Students */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-gray-900">{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/course/${course.id}`}
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 group-hover:scale-105 text-center block shadow-lg hover:shadow-xl"
                  >
                    View Course Details
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-red-600/2 transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center space-x-3 bg-white border border-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-2xl hover:border-red-600 hover:text-red-700 transition-all duration-300 group shadow-lg hover:shadow-xl">
              <span>Load More Courses</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;