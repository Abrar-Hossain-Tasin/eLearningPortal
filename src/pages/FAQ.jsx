import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, BookOpen, Users, Shield, CreditCard, TrendingUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    {
      id: 'general',
      name: 'General Information',
      icon: HelpCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'courses',
      name: 'Courses & Learning',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'banking',
      name: 'Banking Modules',
      icon: CreditCard,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 'career',
      name: 'Career Development',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'account',
      name: 'Account & Access',
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  // Fixed variable name - changed from moduleBasedFAQs to faqModules
  const faqModules = {
    banking: [
      {
        id: 'b1',
        question: 'What banking modules are available for beginners?',
        answer: 'We offer several foundational modules including: Basic Banking Operations, Customer Service Excellence, Financial Products Overview, Compliance Fundamentals, and Digital Banking Introduction. These are designed specifically for newcomers to the banking industry.',
        modules: ['Basic Banking Operations', 'Customer Service', 'Financial Products']
      },
      {
        id: 'b2',
        question: 'How do I access advanced risk management modules?',
        answer: 'Advanced risk management modules require completion of prerequisite courses and manager approval. You need to complete "Risk Management Fundamentals" and "Compliance Basics" before accessing advanced modules. Contact your department head for approval.',
        modules: ['Risk Management', 'Compliance']
      },
      {
        id: 'b3',
        question: 'Are there specialized modules for corporate banking?',
        answer: 'Yes, we have a comprehensive corporate banking track including: Corporate Lending Principles, Syndicated Loans, Trade Finance Operations, Corporate Relationship Management, and Treasury Operations. These modules are available to employees in corporate banking roles.',
        modules: ['Corporate Banking', 'Trade Finance', 'Treasury']
      },
      {
        id: 'b4',
        question: 'What modules cover digital banking transformation?',
        answer: 'Our digital banking modules include: Fintech Integration, Digital Payment Systems, Cybersecurity in Banking, API Banking, and Mobile Banking Platforms. These are updated regularly to reflect industry trends.',
        modules: ['Digital Banking', 'Cybersecurity', 'Fintech']
      }
    ],
    courses: [
      {
        id: 'c1',
        question: 'How do I enroll in a course?',
        answer: 'To enroll in a course: 1) Log into your account, 2) Browse the courses catalog, 3) Click on your desired course, 4) Click the "Enroll Now" button, 5) Confirm your enrollment. Some advanced courses may require manager approval.',
        modules: ['Course Enrollment']
      },
      {
        id: 'c2',
        question: 'Can I take multiple courses simultaneously?',
        answer: 'Yes, you can enroll in up to 3 courses simultaneously. We recommend focusing on one course at a time for optimal learning. If you need to take more than 3 courses, please contact the training department for special approval.',
        modules: ['Course Management']
      },
      {
        id: 'c3',
        question: 'What is the duration of typical courses?',
        answer: 'Course durations vary: Foundational courses (2-4 weeks), Specialized courses (4-8 weeks), Advanced certifications (8-12 weeks). Each course has estimated time commitments and flexible deadlines to accommodate work schedules.',
        modules: ['Course Structure']
      },
      {
        id: 'c4',
        question: 'How are courses assessed?',
        answer: 'Courses are assessed through: Module quizzes (30%), Practical assignments (40%), Final examination (30%). You must achieve a minimum 70% score to pass and receive certification. Some courses include peer-reviewed projects.',
        modules: ['Assessments', 'Certification']
      }
    ],
    technical: [
      {
        id: 't1',
        question: 'What are the system requirements for the platform?',
        answer: 'Minimum requirements: Windows 10/macOS 10.14+, 4GB RAM, stable internet connection (5Mbps+), latest version of Chrome/Firefox/Safari. For mobile access: iOS 13+ or Android 8+ with the official IFIC Bank Learning app.',
        modules: ['Platform Access']
      },
      {
        id: 't2',
        question: 'How do I reset my password?',
        answer: 'Click "Forgot Password" on the login page, enter your IFIC Bank email, check your email for reset instructions, and follow the link to create a new password. If issues persist, contact IT support at itsupport@ificbank.com.',
        modules: ['Account Management']
      },
      {
        id: 't3',
        question: 'Why are videos not loading properly?',
        answer: 'This is usually due to: Slow internet connection, browser cache issues, or ad blockers. Try: Clearing browser cache, disabling extensions, using a different browser, or connecting to corporate network. Contact support if problem continues.',
        modules: ['Video Content']
      }
    ],
    general: [
      {
        id: 'g1',
        question: 'Who can access the IFIC Bank eLearning platform?',
        answer: 'The platform is available to all IFIC Bank employees. Access levels vary based on: Employment status, Department, Role requirements, and Manager approval. Contract staff may have limited access to specific modules.',
        modules: ['Platform Access']
      },
      {
        id: 'g2',
        question: 'Is the learning platform accessible outside office hours?',
        answer: 'Yes, the platform is available 24/7 from any location. You can access courses from home, during travel, or any place with internet connectivity. Mobile app allows offline access to downloaded content.',
        modules: ['Accessibility']
      },
      {
        id: 'g3',
        question: 'How do I get help with course-related issues?',
        answer: 'For course content: Contact the course instructor. For technical issues: Email itsupport@ificbank.com. For enrollment questions: Contact training@ificbank.com. Response time is typically within 24 business hours.',
        modules: ['Support']
      }
    ],
    career: [
      {
        id: 'cr1',
        question: 'How can these courses help my career advancement?',
        answer: 'Our courses are designed to: Enhance your skill, Prepare you for promotions, Meet regulatory requirements, and Develop leadership capabilities. Completion certificates are recognized in performance evaluations.',
        modules: ['Career Development']
      }
    ],
    account: [
      {
        id: 'a1',
        question: 'How do I access my learning dashboard?',
        answer: 'Visit the portal website and click "Login". Use your IFIC Bank email and password. If you cannot access, contact IT support for account verification.',
        modules: ['Account Access']
      }
    ]
  };

  const allFAQs = Object.values(faqCategories).flatMap(category => 
    faqModules[category.id]?.map(faq => ({ ...faq, category: category.id })) || []
  );

  const filteredFAQs = searchTerm 
    ? allFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.modules.some(module => module.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : (faqModules[activeCategory] || []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              <span className="text-white/90 font-semibold text-sm">HELP & SUPPORT</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Frequently Asked <span className="text-red-400">Questions</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Find answers to common questions about courses, modules, technical support, and career development.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search questions, modules, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setSearchTerm('');
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all ${
                        activeCategory === category.id
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${category.bgColor}`}>
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                      </div>
                      <span className="font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${faqCategories.find(c => c.id === activeCategory)?.bgColor}`}>
                      {React.createElement(faqCategories.find(c => c.id === activeCategory)?.icon, {
                        className: `w-5 h-5 ${faqCategories.find(c => c.id === activeCategory)?.color}`
                      })}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {faqCategories.find(c => c.id === activeCategory)?.name}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        {filteredFAQs.length} questions available
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Items */}
                <div className="divide-y divide-gray-200">
                  <AnimatePresence>
                    {filteredFAQs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <button
                          onClick={() => toggleItem(faq.id)}
                          className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-left">
                                {faq.question}
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {faq.modules.map((module, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                  >
                                    {module}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              {openItems[faq.id] ? (
                                <ChevronUp className="w-5 h-5 text-gray-400" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                              )}
                            </div>
                          </div>
                        </button>

                        <AnimatePresence>
                          {openItems[faq.id] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-6"
                            >
                              <div className="prose prose-sm max-w-none text-gray-600">
                                <p>{faq.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredFAQs.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No questions found
                    </h3>
                    <p className="text-gray-600">
                      {searchTerm 
                        ? `No results found for "${searchTerm}". Try different keywords.`
                        : 'No questions available in this category.'
                      }
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Contact Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
                  <p className="text-red-100 mb-6">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:learning@ificbank.com"
                      className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Email Support
                    </a>
                    <a
                      href="tel:+88029561301"
                      className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-400 transition-colors border border-red-400"
                    >
                      Call Support
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;