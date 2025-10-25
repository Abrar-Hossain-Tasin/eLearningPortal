import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Star, Users, Clock, BookOpen, ArrowRight } from 'lucide-react';

const FeaturedCourses = () => {
const featuredCourses = [
  {
    id: 'c1',
    title: 'Advanced Banking Operations',
    instructor: 'Farhana Rahman',
    duration: '6 weeks',
    lessons: 24,
    rating: 4.9,
    students: 1247,
    progress: 65,
    category: 'Operations'
  },
  {
    id: 'c2',
    title: 'Digital Banking & Fintech',
    instructor: 'Mahmud Hasan',
    duration: '4 weeks',
    lessons: 18,
    rating: 4.8,
    students: 892,
    progress: 30,
    category: 'Technology'
  },
  {
    id: 'c3',
    title: 'Risk Management Framework',
    instructor: 'Nusrat Chowdhury',
    duration: '8 weeks',
    lessons: 32,
    rating: 4.7,
    students: 567,
    progress: 0,
    category: 'Compliance'
  }
];


  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Featured <span className="text-red-600">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked courses from IFIC Bank's expert instructors to advance your banking career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
            >
              {/* Course Header */}
              <div className="h-2 bg-gradient-to-r from-red-600 to-red-800"></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full mb-2">
                      {course.category}
                    </span>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm">By {course.instructor}</p>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>
                </div>

                {/* Rating and Students */}
                <div className="flex items-center justify-between mb-4">
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

                {/* Progress Bar */}
                {/* {course.progress > 0 && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-red-600 to-red-800 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )} */}

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {course.progress > 0 ? (
                    <Link
                      to={`/course/${course.id}`}
                      className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 text-center flex items-center justify-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Start Course</span>
                    </Link>
                  ) : (
                    <Link
                      to={`/course/${course.id}`}
                      className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 text-center"
                    >
                      Start Course
                    </Link>
                  )}
                  <button className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors">
                    <Star className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/courses"
            className="inline-flex items-center space-x-3 bg-white border border-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-xl hover:border-red-600 hover:text-red-700 transition-all duration-200 group"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;