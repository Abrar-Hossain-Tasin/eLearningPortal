import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: BookOpen,
      title: 'Learn from Experts',
      description: 'Access comprehensive courses designed by IFIC Bank industry experts with real-world banking scenarios.',
      color: 'bg-blue-500'
    },
    {
      icon: CheckCircle,
      title: 'Test Your Knowledge',
      description: 'Validate your learning with interactive quizzes and exams that simulate real banking challenges.',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      title: 'Earn IFIC Certificate',
      description: 'Receive verifiable certificates that enhance your professional credibility and career advancement.',
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            How It <span className="text-red-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple three-step process to master banking skills and earn recognized certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative text-center"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {index + 1}
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;