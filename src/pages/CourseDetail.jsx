// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Clock, Users, Star, BookOpen, Play } from 'lucide-react';

// const COURSE_DETAILS = {
//   c1: { 
//     title: 'Basic of Banking', 
//     description: 'Comprehensive course covering fundamental banking operations, regulations, and compliance requirements.',
//     duration: '2 weeks', 
//     instructor: 'Sarah Johnson',
//     rating: 4.9,
//     students: 1247,
//     modules: [
//       'Account Transaction',
//       'Anti Money Laundering', 
//       'Retail Banking',
//       'Asset & Liability Product'
//     ]
//   },
//   c2: { 
//     title: 'Basic of Credit', 
//     description: 'Learn credit assessment, risk management, and lending principles in banking.',
//     duration: '1 week', 
//     instructor: 'Michael Chen',
//     rating: 4.8,
//     students: 892,
//     modules: [
//       'Borrower Selection',
//       'Financial Statement & Ratio Analysis',
//       'Working Capital',
//       'Retail Loan'
//     ]
//   },
//   c3: { 
//     title: 'Basic of Trade', 
//     description: 'Master international trade finance, foreign exchange, and payment methods.',
//     duration: '1 week', 
//     instructor: 'Emily Rodriguez',
//     rating: 4.7,
//     students: 756,
//     modules: [
//       'Bank Guarantee',
//       'Foreign Exchange Regulation Act',
//       'Methods of Payments'
//     ]
//   },
//   c4: { 
//     title: 'Basic of IT', 
//     description: 'Understand core banking systems, cybersecurity, and digital banking technologies.',
//     duration: '3 weeks', 
//     instructor: 'David Kim',
//     rating: 4.9,
//     students: 567,
//     modules: [
//       'Core Banking Systems',
//       'Cybersecurity in Banking',
//       'Data Analytics in Banking',
//       'Payment Systems and Technologies',
//       'Regulatory Compliance and IT Governance'
//     ]
//   }
// };

// const CourseDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const course = COURSE_DETAILS[id];

//   if (!course) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-slate-900 mb-4">Course not found</h1>
//           <button 
//             onClick={() => navigate('/courses')}
//             className="bg-gradient-to-r from-red-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold"
//           >
//             Back to Courses
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Course Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-lg p-8 mb-8"
//         >
//           <button 
//             onClick={() => navigate('/courses')}
//             className="flex items-center space-x-2 text-slate-600 hover:text-red-600 mb-6 transition-colors"
//           >
//             <span>← Back to Courses</span>
//           </button>

//           <div className="grid lg:grid-cols-2 gap-8">
//             <div>
//               <h1 className="text-3xl font-bold text-slate-900 mb-4">{course.title}</h1>
//               <p className="text-slate-600 mb-6 leading-relaxed">{course.description}</p>
              
//               <div className="flex items-center space-x-6 mb-6">
//                 <div className="flex items-center space-x-2">
//                   <Clock className="w-5 h-5 text-slate-400" />
//                   <span className="text-slate-600">{course.duration}</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Users className="w-5 h-5 text-slate-400" />
//                   <span className="text-slate-600">{course.students.toLocaleString()} students</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Star className="w-5 h-5 text-yellow-400 fill-current" />
//                   <span className="text-slate-600">{course.rating}</span>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <button className="bg-gradient-to-r from-red-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
//                   <Play className="w-5 h-5" />
//                   <span>Enroll Now</span>
//                 </button>
//                 <button className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-red-600 hover:text-red-600 transition-colors">
//                   Add to Wishlist
//                 </button>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-red-500 to-green-500 rounded-2xl p-8 text-white">
//               <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
//               <ul className="space-y-3">
//                 {course.modules.slice(0, 4).map((module, index) => (
//                   <li key={index} className="flex items-center space-x-3">
//                     <BookOpen className="w-5 h-5" />
//                     <span>{module}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </motion.div>

//         {/* Course Curriculum */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-white rounded-2xl shadow-lg p-8"
//         >
//           <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Curriculum</h2>
          
//           <div className="space-y-4">
//             {course.modules.map((module, index) => (
//               <div key={index} className="border border-slate-200 rounded-lg p-4 hover:border-red-600 transition-colors">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-semibold">
//                       {index + 1}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-slate-900">{module}</h3>
//                       <p className="text-slate-600 text-sm">Module • 4 lessons</p>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={() => navigate(`/module/${encodeURIComponent(module)}`)}
//                     className="bg-gradient-to-r from-red-600 to-green-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
//                   >
//                     Start Module
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star, BookOpen, Play, ArrowLeft, Award, CheckCircle, BarChart3, FileText } from 'lucide-react';

const COURSE_DETAILS = {
  c1: { 
    title: 'Advanced Banking Operations', 
    description: 'Comprehensive course covering fundamental banking operations, regulations, compliance requirements, and modern banking practices. Master the essential skills needed for excellence in banking operations.',
    duration: '6 weeks', 
    instructor: 'Farhana Rahman',
    rating: 4.9,
    students: 1247,
    category: 'Operations',
    level: 'Intermediate',
    modules: [
      'Account Transaction Processing',
      'Anti Money Laundering Compliance', 
      'Retail Banking Operations',
      'Asset & Liability Management',
      'Digital Banking Transformation',
      'Risk Assessment Framework'
    ],
    features: [
      'Industry-recognized certification',
      'Real-world case studies',
      'Interactive simulations',
      'Expert instructor support',
      'Lifetime access to materials'
    ]
  },
  c2: { 
    title: 'Digital Banking & Fintech', 
    description: 'Learn credit assessment, risk management, and lending principles in modern banking. Explore the latest fintech innovations transforming the financial industry.',
    duration: '4 weeks', 
    instructor: 'Mahmud Hasan',
    rating: 4.8,
    students: 892,
    category: 'Technology',
    level: 'Intermediate',
    modules: [
      'Borrower Selection & Assessment',
      'Financial Statement Analysis',
      'Working Capital Management',
      'Retail Loan Processing',
      'Credit Risk Modeling',
      'Regulatory Compliance'
    ],
    features: [
      'Hands-on fintech projects',
      'Blockchain applications',
      'AI in banking',
      'Mobile banking solutions',
      'Industry expert sessions'
    ]
  },
  c3: { 
    title: 'Risk Management Framework', 
    description: 'Master international trade finance, foreign exchange, and modern payment methods. Comprehensive coverage of global trade banking operations.',
    duration: '8 weeks', 
    instructor: 'Nusrat Chowdhury',
    rating: 4.7,
    students: 756,
    category: 'Compliance',
    level: 'Advanced',
    modules: [
      'Bank Guarantee Operations',
      'Foreign Exchange Regulations',
      'International Payment Methods',
      'Trade Finance Instruments',
      'Compliance & Documentation',
      'Risk Mitigation Strategies'
    ],
    features: [
      'Global trade simulations',
      'Regulatory compliance training',
      'Risk assessment tools',
      'Case studies from major banks',
      'Certificate of completion'
    ]
  },
  c4: { 
    title: 'Core Banking Systems & IT', 
    description: 'Understand core banking systems, cybersecurity protocols, and digital banking technologies. Essential knowledge for modern banking IT professionals.',
    duration: '3 weeks', 
    instructor: 'Tanvir Ahmed',
    rating: 4.9,
    students: 567,
    category: 'Technology',
    level: 'Intermediate',
    modules: [
      'Core Banking Systems Architecture',
      'Cybersecurity in Banking',
      'Data Analytics & Business Intelligence',
      'Payment Systems Technology',
      'Regulatory Compliance & IT Governance',
      'Digital Transformation Strategies'
    ],
    features: [
      'Technical architecture diagrams',
      'Security best practices',
      'Data analytics projects',
      'System implementation guides',
      'IT governance frameworks'
    ]
  }
};


const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = COURSE_DETAILS[id];

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black text-gray-900 mb-4">Course Not Found</h1>
          <button 
            onClick={() => navigate('/courses')}
            className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

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
              <span className="text-white/90 font-semibold text-sm">COURSE DETAILS</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              {course.title}
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-white/80">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Users className="w-5 h-5" />
                <span className="font-semibold">{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{course.rating} rating</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Award className="w-5 h-5" />
                <span className="font-semibold">{course.level}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <button 
                    onClick={() => navigate('/courses')}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors font-semibold"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Courses</span>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">Course Overview</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      This comprehensive course provides in-depth knowledge and practical skills in {course.category.toLowerCase()}. 
                      Designed for banking professionals seeking to enhance their expertise and advance their careers.
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">Category: {course.category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">Level: {course.level}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4">Course Features</h4>
                    <ul className="space-y-3">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-300" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
                    <Play className="w-5 h-5" />
                    <span>Enroll Now</span>
                  </button>
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-all duration-300 flex items-center justify-center space-x-3">
                    <Star className="w-5 h-5" />
                    <span>Add to Wishlist</span>
                  </button>
                </div>
              </motion.div>

              {/* Course Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-black text-gray-900">
                    Course <span className="text-red-600">Curriculum</span>
                  </h2>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FileText className="w-5 h-5" />
                    <span className="font-semibold">{course.modules.length} modules</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="border border-gray-200 rounded-2xl p-6 hover:border-red-600 transition-all duration-300 group cursor-pointer bg-gray-50 hover:bg-red-50"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-700 transition-colors">
                              {module}
                            </h3>
                            <p className="text-gray-600 text-sm">Module • 4-6 lessons • 2-3 hours</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => navigate(`/module/${encodeURIComponent(module)}`)}
                          className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105"
                        >
                          Start Module
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Instructor Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
              >
                <h3 className="text-xl font-black text-gray-900 mb-4">Instructor</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{course.instructor}</h4>
                    <p className="text-red-600 text-sm font-semibold">Senior Banking Expert</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.instructor} brings over 15 years of experience in banking and financial services, 
                  with expertise in {course.category.toLowerCase()} and proven track record of success.
                </p>
              </motion.div>

              {/* Course Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
              >
                <h3 className="text-xl font-black text-gray-900 mb-4">Course Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Completion Rate</span>
                    </div>
                    <span className="font-bold text-gray-900">94%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Active Students</span>
                    </div>
                    <span className="font-bold text-gray-900">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-700">Average Rating</span>
                    </div>
                    <span className="font-bold text-gray-900">{course.rating}/5.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Certification</span>
                    </div>
                    <span className="font-bold text-green-600">Available</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-red-100 text-sm mb-6">
                  Join {course.students.toLocaleString()} banking professionals who have already enrolled in this course.
                </p>
                <button className="w-full bg-white text-red-600 py-3 px-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Enroll Now - Free Trial
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;