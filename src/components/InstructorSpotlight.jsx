import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, BookOpen } from 'lucide-react';

const InstructorSpotlight = () => {
  const instructors = [
  {
    id: 1,
    name: 'Farhana Rahman',
    role: 'Senior Banking Consultant',
    bio: '15+ years in retail banking and risk management. Former VP at Eastern Bank Limited.',
    rating: 4.9,
    courses: 12,
    students: 4500,
    specialties: ['Risk Management', 'Retail Banking', 'Compliance']
  },
  {
    id: 2,
    name: 'Mahmud Hasan',
    role: 'Fintech Expert',
    bio: 'Digital transformation specialist with expertise in mobile banking, blockchain, and digital payment systems in Bangladesh.',
    rating: 4.8,
    courses: 8,
    students: 3200,
    specialties: ['Digital Banking', 'Blockchain', 'Payment Systems']
  },
  {
    id: 3,
    name: 'Nusrat Chowdhury',
    role: 'Compliance Director',
    bio: 'Regulatory compliance expert with deep knowledge of Bangladesh Bank guidelines, AML, and KYC regulations.',
    rating: 4.9,
    courses: 6,
    students: 2800,
    specialties: ['AML', 'KYC', 'Regulatory Compliance']
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
            Instructor <span className="text-red-600">Spotlight</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts with decades of combined banking experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{instructor.name}</h3>
                    <p className="text-red-600 text-sm font-semibold">{instructor.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {instructor.bio}
                </p>
                
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(instructor.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">{instructor.rating}</span>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{instructor.courses} courses</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{(instructor.students / 1000).toFixed(1)}k students</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {instructor.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSpotlight;