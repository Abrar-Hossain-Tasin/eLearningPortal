// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Play, Star, Users, Clock, Award, ArrowRight, Shield, TrendingUp, BookOpen, CheckCircle } from 'lucide-react';
// import FeaturedCourses from '../components/FeaturedCourses';
// import HowItWorks from '../components/HowItWorks';
// import InstructorSpotlight from '../components/InstructorSpotlight';
// import Testimonials from '../components/Testimonials';

// export default function Home() {
//   const stats = [
//     { number: '150+', label: 'Professional Courses', icon: BookOpen, color: 'text-blue-600' },
//     { number: '10K+', label: 'Banking Professionals', icon: Users, color: 'text-green-600' },
//     { number: '98%', label: 'Success Rate', icon: TrendingUp, color: 'text-purple-600' },
//     { number: '24/7', label: 'Expert Support', icon: Shield, color: 'text-orange-600' }
//   ];

//   const features = [
//     {
//       icon: Award,
//       title: 'Industry-Recognized Certifications',
//       description: 'Earn verifiable certificates that enhance your professional credibility.'
//     },
//     {
//       icon: Users,
//       title: 'Expert Banking Instructors',
//       description: 'Learn from seasoned banking professionals with decades of experience.'
//     },
//     {
//       icon: Clock,
//       title: 'Flexible Learning Schedule',
//       description: 'Access courses anytime, anywhere with our mobile-friendly platform.'
//     },
//     {
//       icon: Shield,
//       title: 'Secure & Compliant',
//       description: 'Banking-grade security and compliance with industry regulations.'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Premium Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//         {/* Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left Content */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center lg:text-left"
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20 mb-8"
//               >
//                 <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//                 <span className="text-white/90 font-semibold text-sm">E-Learning Portal of IFIC</span>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
//               >
//                 Advance Your{' '}
//                 <span className="text-red-400">Banking</span>{' '}
//                 Career
//               </motion.h1>
              
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
//               >
//                 Master cutting-edge banking skills with IFIC Bank's exclusive eLearning platform. 
//                 Industry-leading courses, verifiable certifications, and career advancement opportunities.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//               >
//                 <Link
//                   to="/courses"
//                   className="group relative px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
//                 >
//                   <Play className="w-5 h-5" />
//                   <span>Explore Courses</span>
//                 </Link>
                
//                 <Link
//                   to="/my-learning"
//                   className="group px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center space-x-3"
//                 >
//                   <span>Dashboard Access</span>
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </motion.div>

//               {/* Stats */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1 }}
//                 className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
//               >
//                 {stats.map((stat, index) => (
//                   <motion.div
//                     key={stat.label}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 1.2 + index * 0.1 }}
//                     className="text-center lg:text-left"
//                   >
//                     <div className="flex items-center justify-center lg:justify-start space-x-3 mb-2">
//                       <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl">
//                         <stat.icon className={`w-5 h-5 ${stat.color}`} />
//                       </div>
//                       <div className="text-2xl font-black text-white">{stat.number}</div>
//                     </div>
//                     <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>

//             {/* Right Content - Feature Cards */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="grid grid-cols-1 sm:grid-cols-2 gap-6"
//             >
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={feature.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 + index * 0.1 }}
//                   whileHover={{ y: -5, scale: 1.02 }}
//                   className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
//                 >
//                   <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center mb-4">
//                     <feature.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Courses */}
//       <FeaturedCourses />

//       {/* How It Works */}
//       <HowItWorks />

//       {/* Instructor Spotlight */}
//       <InstructorSpotlight />

//       {/* Testimonials */}
//       <Testimonials />
//     </div>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Star, Users, Clock, Award, ArrowRight, Shield, TrendingUp, BookOpen, CheckCircle } from 'lucide-react';
import FeaturedCourses from '../components/FeaturedCourses';
import HowItWorks from '../components/HowItWorks';
import InstructorSpotlight from '../components/InstructorSpotlight';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const stats = [
    { number: '150+', label: 'Professional Courses', icon: BookOpen, color: 'text-blue-600' },
    { number: '10K+', label: 'Banking Professionals', icon: Users, color: 'text-green-600' },
    { number: '98%', label: 'Success Rate', icon: TrendingUp, color: 'text-purple-600' },
    { number: '24/7', label: 'Expert Support', icon: Shield, color: 'text-orange-600' }
  ];

  const features = [
    {
      icon: Award,
      title: 'Industry-Recognized Certifications',
      description: 'Earn verifiable certificates that enhance your professional credibility.'
    },
    {
      icon: Users,
      title: 'Expert Banking Instructors',
      description: 'Learn from seasoned banking professionals with decades of experience.'
    },
    {
      icon: Clock,
      title: 'Flexible Learning Schedule',
      description: 'Access courses anytime, anywhere with our mobile-friendly platform.'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Banking-grade security and compliance with industry regulations.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:50px_50px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-3 border border-white/20 mb-6 md:mb-8"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white/90 font-semibold text-xs md:text-sm">E-Learning Portal of IFIC</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 md:mb-6"
              >
                Advance Your{' '}
                <span className="text-red-400">Banking</span>{' '}
                Career
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-6 md:mb-8 leading-relaxed"
              >
                Master cutting-edge banking skills with IFIC Bank's exclusive eLearning platform. 
                Industry-leading courses, verifiable certifications, and career advancement opportunities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/courses"
                  className="group relative px-6 py-3 md:px-8 md:py-4 bg-red-600 text-white font-bold rounded-lg md:rounded-xl hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 md:space-x-3 text-sm md:text-base"
                >
                  <Play className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Explore Courses</span>
                </Link>
                
                <Link
                  to="/my-learning"
                  className="group px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-lg md:rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 md:space-x-3 text-sm md:text-base"
                >
                  <span>Dashboard Access</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-16"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3 mb-1 md:mb-2">
                      <div className="p-1 md:p-2 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl">
                        <stat.icon className={`w-4 h-4 md:w-5 md:h-5 ${stat.color}`} />
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl font-black text-white">{stat.number}</div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base md:text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <FeaturedCourses />

      {/* How It Works */}
      <HowItWorks />

      {/* Instructor Spotlight */}
      <InstructorSpotlight />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}