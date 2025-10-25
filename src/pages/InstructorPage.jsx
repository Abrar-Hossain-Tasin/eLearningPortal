import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Mail, 
  Building, 
  BookOpen, 
  Users, 
  Star, 
  Award, 
  Calendar,
  MessageCircle,
  Filter,
  ChevronDown,
  ChevronUp,
  Phone,
  MapPin
} from 'lucide-react';

const InstructorPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [activeDepartment, setActiveDepartment] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [questionForm, setQuestionForm] = useState({
    instructorId: '',
    courseId: '',
    moduleId: '',
    question: '',
    urgency: 'normal'
  });

  const departments = ['All', 'Retail Banking', 'Corporate Banking', 'Risk Management', 'Compliance', 'Technology', 'Operations', 'Treasury'];

  const instructors = [
  {
    id: 'i1',
    name: 'Md. Shahidul Islam',
    position: 'Senior Vice President - Operations',
    department: 'Operations',
    email: 'shahidul.islam@ificbank.com',
    phone: '+880 2 956 1301',
    employeeId: 'IFIC-EMP-12345',
    experience: '15 years',
    specialization: 'Banking Operations & Process Management',
    bio: 'Shahidul has extensive experience in banking operations and has led multiple process optimization initiatives at IFIC Bank. He specializes in operational efficiency and risk mitigation.',
    courses: ['Advanced Banking Operations', 'Process Optimization', 'Customer Service Excellence'],
    rating: 4.9,
    students: 2450,
    coursesCount: 8,
    joinedDate: '2015-03-15',
    image: '/images/instructors/shahidul-islam.jpg',
    office: 'Head Office, Dhaka'
  },
  {
    id: 'i2',
    name: 'Fatima Akhter',
    position: 'Head of Digital Banking',
    department: 'Technology',
    email: 'fatima.akhter@ificbank.com',
    phone: '+880 2 956 1302',
    employeeId: 'IFIC-EMP-12346',
    experience: '12 years',
    specialization: 'Digital Transformation & Fintech',
    bio: 'Fatima leads the digital banking division and has been instrumental in IFIC Bank\'s digital transformation journey. She has expertise in fintech integration and cybersecurity.',
    courses: ['Digital Banking & Fintech', 'Cybersecurity in Banking', 'API Banking'],
    rating: 4.8,
    students: 1890,
    coursesCount: 6,
    joinedDate: '2016-08-22',
    image: '/images/instructors/fatima-akhter.jpg',
    office: 'Technology Division, Dhaka'
  },
  {
    id: 'i3',
    name: 'Nazmul Hossain',
    position: 'Chief Risk Officer',
    department: 'Risk Management',
    email: 'nazmul.hossain@ificbank.com',
    phone: '+880 2 956 1303',
    employeeId: 'IFIC-EMP-12347',
    experience: '18 years',
    specialization: 'Risk Assessment & Compliance',
    bio: 'Nazmul oversees the bank\'s risk management framework and ensures regulatory compliance across all operations. He has international experience in risk mitigation.',
    courses: ['Risk Management Framework', 'Advanced Compliance', 'AML Regulations'],
    rating: 4.9,
    students: 1670,
    coursesCount: 7,
    joinedDate: '2012-11-05',
    image: '/images/instructors/nazmul-hossain.jpg',
    office: 'Risk Management Division, Dhaka'
  },
  {
    id: 'i4',
    name: 'Shahriar Karim',
    position: 'Compliance Director',
    department: 'Compliance',
    email: 'shahriar.karim@ificbank.com',
    phone: '+880 2 956 1304',
    employeeId: 'IFIC-EMP-12348',
    experience: '14 years',
    specialization: 'Regulatory Compliance & AML',
    bio: 'Shahriar specializes in anti-money laundering regulations and has developed IFIC Bank\'s comprehensive compliance training program.',
    courses: ['Anti Money Laundering', 'Compliance Fundamentals', 'Regulatory Reporting'],
    rating: 4.7,
    students: 1340,
    coursesCount: 5,
    joinedDate: '2014-06-18',
    image: '/images/instructors/shahriar-karim.jpg',
    office: 'Compliance Department, Dhaka'
  },
  {
    id: 'i5',
    name: 'Ayesha Rahman',
    position: 'Retail Banking Manager',
    department: 'Retail Banking',
    email: 'ayesha.rahman@ificbank.com',
    phone: '+880 2 956 1305',
    employeeId: 'IFIC-EMP-12349',
    experience: '10 years',
    specialization: 'Retail Banking & Customer Relationship',
    bio: 'Ayesha manages retail banking operations and has developed innovative customer service strategies that have significantly improved customer satisfaction.',
    courses: ['Retail Banking Fundamentals', 'Customer Relationship Management', 'Sales Techniques'],
    rating: 4.6,
    students: 980,
    coursesCount: 4,
    joinedDate: '2018-02-12',
    image: '/images/instructors/ayesha-rahman.jpg',
    office: 'Retail Banking Division, Dhaka'
  },
  {
    id: 'i6',
    name: 'Tariq Anwar',
    position: 'Corporate Banking Director',
    department: 'Corporate Banking',
    email: 'tariq.anwar@ificbank.com',
    phone: '+880 2 956 1306',
    employeeId: 'IFIC-EMP-12350',
    experience: '16 years',
    specialization: 'Corporate Lending & Relationship Banking',
    bio: 'Tariq has extensive experience in corporate banking and has managed relationships with some of Bangladesh\'s largest corporate clients.',
    courses: ['Corporate Banking Strategies', 'Syndicated Loans', 'Trade Finance'],
    rating: 4.8,
    students: 1120,
    coursesCount: 6,
    joinedDate: '2013-09-30',
    image: '/images/instructors/tariq-anwar.jpg',
    office: 'Corporate Banking Division, Dhaka'
  },
  {
    id: 'i7',
    name: 'Rumana Sultana',
    position: 'Cybersecurity Lead',
    department: 'Technology',
    email: 'rumana.sultana@ificbank.com',
    phone: '+880 2 956 1307',
    employeeId: 'IFIC-EMP-12351',
    experience: '11 years',
    specialization: 'Cybersecurity & Information Security',
    bio: 'Rumana leads the cybersecurity team and has implemented robust security measures to protect IFIC Bank\'s digital infrastructure.',
    courses: ['Cybersecurity in Banking', 'Information Security', 'Network Protection'],
    rating: 4.9,
    students: 1560,
    coursesCount: 5,
    joinedDate: '2017-04-25',
    image: '/images/instructors/rumana-sultana.jpg',
    office: 'Technology Division, Dhaka'
  },
  {
    id: 'i8',
    name: 'Monira Begum',
    position: 'Treasury Operations Head',
    department: 'Treasury',
    email: 'monira.begum@ificbank.com',
    phone: '+880 2 956 1308',
    employeeId: 'IFIC-EMP-12352',
    experience: '13 years',
    specialization: 'Treasury Management & Forex',
    bio: 'Monira manages treasury operations and has expertise in foreign exchange, liquidity management, and investment strategies.',
    courses: ['Treasury Operations', 'Forex Management', 'Liquidity Planning'],
    rating: 4.7,
    students: 890,
    coursesCount: 4,
    joinedDate: '2015-12-08',
    image: '/images/instructors/monira-begum.jpg',
    office: 'Treasury Department, Dhaka'
  }
];


  const courses = [
    { id: 'c1', name: 'Advanced Banking Operations', instructorId: 'i1' },
    { id: 'c2', name: 'Digital Banking & Fintech', instructorId: 'i2' },
    { id: 'c3', name: 'Risk Management Framework', instructorId: 'i3' },
    { id: 'c4', name: 'Anti Money Laundering', instructorId: 'i4' },
    { id: 'c5', name: 'Retail Banking Fundamentals', instructorId: 'i5' },
    { id: 'c6', name: 'Corporate Banking Strategies', instructorId: 'i6' },
    { id: 'c7', name: 'Cybersecurity in Banking', instructorId: 'i7' },
    { id: 'c8', name: 'Treasury Operations', instructorId: 'i8' }
  ];

  // Fixed filtering logic
  const filteredInstructors = instructors.filter(instructor => {
    const matchesSearch = searchTerm === '' || 
      instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instructor.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instructor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = activeDepartment === 'All' || instructor.department === activeDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  const handleAskQuestion = (instructor) => {
    setSelectedInstructor(instructor);
    setQuestionForm({
      instructorId: instructor.id,
      courseId: '',
      moduleId: '',
      question: '',
      urgency: 'normal'
    });
  };

  const submitQuestion = (e) => {
    e.preventDefault();
    // Handle question submission logic here
    alert(`Question sent to ${selectedInstructor.name}! They will respond within 24 hours.`);
    setSelectedInstructor(null);
    setQuestionForm({
      instructorId: '',
      courseId: '',
      moduleId: '',
      question: '',
      urgency: 'normal'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20 mb-8"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-semibold text-sm">MEET OUR EXPERTS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            >
              IFIC Bank <span className="text-red-400">Instructors</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Learn from our experienced banking professionals who bring real-world expertise and industry insights to your learning journey.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search instructors, departments, or specializations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-black text-gray-900 mb-2">{instructors.length}</div>
              <div className="text-gray-600 text-sm font-medium">Expert Instructors</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-black text-gray-900 mb-2">{departments.length - 1}</div>
              <div className="text-gray-600 text-sm font-medium">Banking Departments</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-black text-gray-900 mb-2">12K+</div>
              <div className="text-gray-600 text-sm font-medium">Students Trained</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-black text-gray-900 mb-2">45+</div>
              <div className="text-gray-600 text-sm font-medium">Professional Courses</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Department Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {departments.map((department) => (
              <motion.button
                key={department}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveDepartment(department)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
                  activeDepartment === department
                    ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-500/30'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-red-600 hover:text-red-700'
                }`}
              >
                {department}
              </motion.button>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <p className="text-gray-600 text-center">
              Showing <span className="font-semibold text-gray-900">{filteredInstructors.length}</span> instructors
              {activeDepartment !== 'All' && ` in ${activeDepartment}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </motion.div>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredInstructors.map((instructor, index) => (
                <motion.div
                  key={instructor.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 group"
                >
                  {/* Instructor Header */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Instructor Image */}
                    <div className="absolute bottom-4 left-6 w-16 h-16 bg-white rounded-2xl border-4 border-white shadow-xl overflow-hidden">
                      <img 
                        src={instructor.image} 
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/images/instructors/default-instructor.jpg';
                        }}
                      />
                    </div>

                    {/* Department Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-xl border border-red-500 shadow-lg">
                        {instructor.department}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1 border border-white/30">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold text-sm">{instructor.rating}</span>
                    </div>

                    {/* Experience */}
                    <div className="absolute bottom-4 right-4">
                      <span className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-lg border border-white/20">
                        {instructor.experience}
                      </span>
                    </div>
                  </div>

                  {/* Instructor Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-bold text-xl text-gray-900 mb-1">{instructor.name}</h3>
                      <p className="text-red-600 font-semibold text-sm mb-2">{instructor.position}</p>
                      <p className="text-gray-600 text-sm mb-3 font-medium">{instructor.specialization}</p>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">
                        {instructor.bio}
                      </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <Mail className="w-3 h-3" />
                        <span>{instructor.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <Phone className="w-3 h-3" />
                        <span>{instructor.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span>{instructor.office}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center py-3 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-lg font-black text-gray-900">{instructor.coursesCount}</div>
                        <div className="text-xs text-gray-600">Courses</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-gray-900">{instructor.students.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Students</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-gray-900">{instructor.experience.split(' ')[0]}</div>
                        <div className="text-xs text-gray-600">Years</div>
                      </div>
                    </div>

                    {/* Courses */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <BookOpen className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-900">Featured Courses:</span>
                      </div>
                      <div className="space-y-2">
                        {instructor.courses.slice(0, 3).map((course, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleAskQuestion(instructor)}
                        className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 text-center text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Ask Question</span>
                      </button>
                      <a
                        href={`mailto:${instructor.email}`}
                        className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 text-center text-sm flex items-center justify-center space-x-2 border border-gray-300"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredInstructors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Users className="w-20 h-20 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">No instructors found</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                {searchTerm 
                  ? `No instructors match your search for "${searchTerm}". Try adjusting your search terms.`
                  : `No instructors found in the ${activeDepartment} department.`
                }
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveDepartment('All');
                }}
                className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                View All Instructors
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Question Modal */}
      <AnimatePresence>
        {selectedInstructor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Ask a Question</h3>
                <button
                  onClick={() => setSelectedInstructor(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
                >
                  <ChevronUp className="w-6 h-6" />
                </button>
              </div>

              <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedInstructor.image} 
                    alt={selectedInstructor.name}
                    className="w-10 h-10 rounded-lg object-cover"
                    onError={(e) => {
                      e.target.src = '/images/instructors/default-instructor.jpg';
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{selectedInstructor.name}</h4>
                  <p className="text-sm text-gray-600">{selectedInstructor.position}</p>
                  <p className="text-xs text-gray-500">{selectedInstructor.department}</p>
                </div>
              </div>

              <form onSubmit={submitQuestion} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Course
                  </label>
                  <select
                    value={questionForm.courseId}
                    onChange={(e) => setQuestionForm({...questionForm, courseId: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Choose a course</option>
                    {courses.filter(course => course.instructorId === selectedInstructor.id).map(course => (
                      <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Module (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Specify module if applicable"
                    value={questionForm.moduleId}
                    onChange={(e) => setQuestionForm({...questionForm, moduleId: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    value={questionForm.urgency}
                    onChange={(e) => setQuestionForm({...questionForm, urgency: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="low">Low Priority</option>
                    <option value="normal">Normal Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Question
                  </label>
                  <textarea
                    value={questionForm.question}
                    onChange={(e) => setQuestionForm({...questionForm, question: e.target.value})}
                    rows="4"
                    placeholder="Type your question here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition-all duration-300"
                    required
                  ></textarea>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedInstructor(null)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Question
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InstructorPage;