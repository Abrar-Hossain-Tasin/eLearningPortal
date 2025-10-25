// import React from 'react';
// import { motion } from 'framer-motion';
// import { Download, Share2, Printer } from 'lucide-react';

// const Certificates = () => {
//   const certificates = [
//     {
//       id: 1,
//       title: 'Anti Money Laundering',
//       date: '2024-01-15',
//       certificateId: 'AML-2024-001',
//       instructor: 'Emily Rodriguez',
//       grade: 'A+'
//     },
//     {
//       id: 2,
//       title: 'Basic of Banking',
//       date: '2024-01-10',
//       certificateId: 'BOB-2024-001',
//       instructor: 'Sarah Johnson',
//       grade: 'A'
//     }
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
//           <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Certificates</h1>
//           <p className="text-slate-600">Verified certifications earned through IFIC Bank eLearning</p>
//         </motion.div>

//         {/* Certificates Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {certificates.map((cert, index) => (
//             <motion.div
//               key={cert.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200"
//             >
//               {/* Certificate Header */}
//               <div className="h-3 bg-gradient-to-r from-red-600 to-green-500"></div>
              
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="text-xl font-bold text-slate-900 mb-1">{cert.title}</h3>
//                     <p className="text-slate-600">Instructor: {cert.instructor}</p>
//                   </div>
//                   <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
//                     {cert.grade}
//                   </span>
//                 </div>

//                 <div className="space-y-2 mb-6">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-slate-600">Issued Date:</span>
//                     <span className="text-slate-900 font-medium">{new Date(cert.date).toLocaleDateString()}</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-slate-600">Certificate ID:</span>
//                     <span className="text-slate-900 font-medium">{cert.certificateId}</span>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex space-x-3">
//                   <button className="flex-1 bg-gradient-to-r from-red-600 to-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
//                     <Download className="w-4 h-4" />
//                     <span>Download PDF</span>
//                   </button>
//                   <button className="w-12 h-12 border-2 border-slate-200 rounded-lg flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors">
//                     <Share2 className="w-5 h-5" />
//                   </button>
//                   <button className="w-12 h-12 border-2 border-slate-200 rounded-lg flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors">
//                     <Printer className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Empty State */}
//         {certificates.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center py-12"
//           >
//             <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Download className="w-8 h-8 text-slate-400" />
//             </div>
//             <h3 className="text-xl font-semibold text-slate-900 mb-2">No Certificates Yet</h3>
//             <p className="text-slate-600 mb-6">Complete courses to earn verifiable certificates</p>
//             <button className="bg-gradient-to-r from-red-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
//               Browse Courses
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Certificates;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Download, Share2, Printer, X, Eye, Facebook, Twitter, Linkedin, Mail, CheckCircle, Award, Shield, ArrowRight } from 'lucide-react';

// const Certificates = () => {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);
//   const [showShareModal, setShowShareModal] = useState(false);

//   const certificates = [
//     {
//       id: 1,
//       title: 'Anti Money Laundering',
//       date: '2024-01-15',
//       certificateId: 'AML-2024-001',
//       instructor: 'Emily Rodriguez',
//       grade: 'A+',
//       duration: '6 weeks',
//       skills: ['Risk Assessment', 'Compliance', 'Regulatory Framework'],
//       description: 'Mastered advanced anti-money laundering techniques and compliance protocols.'
//     },
//     {
//       id: 2,
//       title: 'Banking Fundamentals',
//       date: '2024-01-10',
//       certificateId: 'BOB-2024-001',
//       instructor: 'Sarah Johnson',
//       grade: 'A',
//       duration: '4 weeks',
//       skills: ['Banking Operations', 'Customer Service', 'Financial Products'],
//       description: 'Comprehensive understanding of core banking principles and operations.'
//     },
//     {
//       id: 3,
//       title: 'Digital Banking & Fintech',
//       date: '2024-01-20',
//       certificateId: 'DBF-2024-001',
//       instructor: 'Michael Chen',
//       grade: 'A+',
//       duration: '5 weeks',
//       skills: ['Digital Transformation', 'Fintech Integration', 'Mobile Banking'],
//       description: 'Advanced knowledge in digital banking solutions and financial technology.'
//     },
//     {
//       id: 4,
//       title: 'Risk Management Framework',
//       date: '2024-01-25',
//       certificateId: 'RMF-2024-001',
//       instructor: 'Robert Brown',
//       grade: 'A',
//       duration: '7 weeks',
//       skills: ['Risk Assessment', 'Compliance', 'Strategic Planning'],
//       description: 'Expertise in developing and implementing risk management strategies.'
//     }
//   ];

//   const CertificatePreview = ({ certificate, onClose }) => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Certificate Design - Updated to match My Learning page colors */}
//         <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
//           {/* Decorative Elements */}
//           <div className="absolute inset-0">
//             <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
//           </div>
          
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-800"></div>
          
//           <div className="text-center relative z-10">
//             {/* IFIC Logo and Header */}
//             <div className="flex items-center justify-center mb-8">
//               <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/20">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
//                     <Shield className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-white font-bold text-lg">IFIC BANK</div>
//                     <div className="text-red-300 text-sm">E-Learning Platform</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Certificate Content */}
//             <div className="mb-8">
//               <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Award className="w-10 h-10 text-white" />
//               </div>
              
//               <h1 className="text-4xl font-black mb-4 text-white">
//                 Certificate of <span className="text-red-400">Completion</span>
//               </h1>
//               <p className="text-gray-300 text-lg mb-8">This certifies that</p>
              
//               <h2 className="text-3xl font-bold mb-2 text-white">John Doe</h2>
//               <p className="text-gray-300 text-lg mb-6">has successfully completed the course</p>
              
//               <h3 className="text-2xl font-semibold mb-6 text-red-400">{certificate.title}</h3>
              
//               <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
//                 <div className="text-center">
//                   <p className="text-gray-400 text-sm mb-1">Instructor</p>
//                   <p className="font-semibold text-white">{certificate.instructor}</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-gray-400 text-sm mb-1">Grade Achieved</p>
//                   <p className="font-semibold text-green-400">{certificate.grade}</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-gray-400 text-sm mb-1">Completion Date</p>
//                   <p className="font-semibold text-white">{new Date(certificate.date).toLocaleDateString()}</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-gray-400 text-sm mb-1">Certificate ID</p>
//                   <p className="font-semibold text-white font-mono">{certificate.certificateId}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Verification Section */}
//             <div className="border-t border-gray-700 pt-8">
//               <div className="flex justify-between items-center max-w-2xl mx-auto">
//                 <div className="text-center">
//                   <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
//                     <Shield className="w-10 h-10 text-green-400" />
//                   </div>
//                   <p className="text-sm text-gray-400 mb-1">Verified by</p>
//                   <p className="font-bold text-white">IFIC Bank</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
//                     <CheckCircle className="w-10 h-10 text-red-400" />
//                   </div>
//                   <p className="text-sm text-gray-400 mb-1">Digital Signature</p>
//                   <p className="font-bold text-white">E-Learning Platform</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons - Updated colors */}
//         <div className="p-6 bg-white border-t border-gray-200">
//           <div className="flex flex-wrap gap-3 justify-center">
//             <button className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//               <Download className="w-4 h-4" />
//               <span>Download PDF</span>
//             </button>
//             <button 
//               className="flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300"
//               onClick={() => setShowShareModal(true)}
//             >
//               <Share2 className="w-4 h-4" />
//               <span>Share</span>
//             </button>
//             <button className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300">
//               <Printer className="w-4 h-4" />
//               <span>Print</span>
//             </button>
//             <button 
//               className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300"
//               onClick={onClose}
//             >
//               <X className="w-4 h-4" />
//               <span>Close</span>
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );

//   const ShareModal = ({ certificate, onClose }) => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="bg-white rounded-2xl max-w-md w-full p-6"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-xl font-bold text-gray-900">Share Certificate</h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         <div className="space-y-4">
//           <p className="text-gray-600 text-center">Share your achievement on social media</p>
          
//           <div className="grid grid-cols-2 gap-3">
//             <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
//               <Facebook className="w-5 h-5" />
//               <span>Facebook</span>
//             </button>
//             <button className="flex items-center justify-center space-x-2 bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors duration-300">
//               <Twitter className="w-5 h-5" />
//               <span>Twitter</span>
//             </button>
//             <button className="flex items-center justify-center space-x-2 bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-900 transition-colors duration-300">
//               <Linkedin className="w-5 h-5" />
//               <span>LinkedIn</span>
//             </button>
//             <button className="flex items-center justify-center space-x-2 bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300">
//               <Mail className="w-5 h-5" />
//               <span>Email</span>
//             </button>
//           </div>

//           <div className="pt-4 border-t border-gray-200">
//             <p className="text-sm text-gray-600 mb-2">Certificate Link</p>
//             <div className="flex space-x-2">
//               <input 
//                 type="text" 
//                 value={`https://ificbank.com/certificate/${certificate.certificateId}`}
//                 readOnly
//                 className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
//               />
//               <button className="bg-gray-600 text-white px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm">
//                 Copy
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header - Updated to match My Learning page */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-12 text-center"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20 mb-8"
//           >
//             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//             <span className="text-white/90 font-semibold text-sm">ACHIEVEMENTS PORTFOLIO</span>
//           </motion.div>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
//             Your <span className="text-red-600">Certificates</span>
//           </h1>
          
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
//             Verified certifications earned through IFIC Bank eLearning platform
//           </p>
//         </motion.div>

//         {/* Certificates Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           {certificates.map((cert, index) => (
//             <motion.div
//               key={cert.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200 group cursor-pointer"
//               onClick={() => setSelectedCertificate(cert)}
//             >
//               {/* Certificate Header Strip */}
//               <div className="h-2 bg-gradient-to-r from-red-600 to-red-800"></div>
              
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex-1">
//                     <div className="flex items-center space-x-2 mb-2">
//                       <Award className="w-5 h-5 text-green-600" />
//                       <span className="text-green-600 font-semibold text-sm">CERTIFIED</span>
//                     </div>
//                     <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-red-700 transition-colors">
//                       {cert.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm">by {cert.instructor}</p>
//                   </div>
//                   <span className={`px-3 py-1 rounded-xl text-sm font-semibold ${
//                     cert.grade === 'A+' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
//                   }`}>
//                     {cert.grade}
//                   </span>
//                 </div>

//                 <p className="text-gray-600 text-sm mb-4">{cert.description}</p>

//                 <div className="space-y-3 mb-4">
//                   <div className="flex justify-between text-sm text-gray-600">
//                     <span>Issued Date:</span>
//                     <span className="font-medium">{new Date(cert.date).toLocaleDateString()}</span>
//                   </div>
//                   <div className="flex justify-between text-sm text-gray-600">
//                     <span>Certificate ID:</span>
//                     <span className="font-medium font-mono">{cert.certificateId}</span>
//                   </div>
//                   <div className="flex justify-between text-sm text-gray-600">
//                     <span>Duration:</span>
//                     <span className="font-medium">{cert.duration}</span>
//                   </div>
//                 </div>

//                 {/* Skills */}
//                 <div className="mb-6">
//                   <p className="text-sm text-gray-600 mb-2">Skills Acquired:</p>
//                   <div className="flex flex-wrap gap-2">
//                     {cert.skills.map((skill, idx) => (
//                       <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Action Button */}
//                 <div className="flex space-x-3">
//                   <button className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
//                     <Eye className="w-4 h-4" />
//                     <span>View Certificate</span>
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View All Certificates CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center"
//         >
//           <p className="text-gray-600 mb-4">Looking for more learning opportunities?</p>
//           <button className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold transition-colors duration-300">
//             <span>Browse All Courses</span>
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </motion.div>

//         {/* Empty State */}
//         {certificates.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center py-16"
//           >
//             <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Award className="w-12 h-12 text-gray-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-3">No Certificates Yet</h3>
//             <p className="text-gray-600 mb-8 max-w-md mx-auto">
//               Complete courses to earn verifiable certificates that showcase your achievements
//             </p>
//             <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//               Browse Available Courses
//             </button>
//           </motion.div>
//         )}

//         {/* Certificate Preview Modal */}
//         <AnimatePresence>
//           {selectedCertificate && (
//             <CertificatePreview 
//               certificate={selectedCertificate} 
//               onClose={() => setSelectedCertificate(null)} 
//             />
//           )}
//         </AnimatePresence>

//         {/* Share Modal */}
//         <AnimatePresence>
//           {showShareModal && selectedCertificate && (
//             <ShareModal 
//               certificate={selectedCertificate} 
//               onClose={() => setShowShareModal(false)} 
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Certificates;


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Download, Share2, Printer, X, Eye, Facebook, Twitter, Linkedin, Mail, CheckCircle, Award, Shield, ArrowRight } from 'lucide-react';

// const Certificates = () => {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);
//   const [showShareModal, setShowShareModal] = useState(false);

//   const certificates = [
//     {
//       id: 1,
//       title: 'Anti Money Laundering',
//       date: '2024-01-15',
//       certificateId: 'AML-2024-001',
//       instructor: 'Emily Rodriguez',
//       grade: 'A+',
//       duration: '6 weeks',
//       skills: ['Risk Assessment', 'Compliance', 'Regulatory Framework'],
//       description: 'Mastered advanced anti-money laundering techniques and compliance protocols.'
//     },
//     {
//       id: 2,
//       title: 'Banking Fundamentals',
//       date: '2024-01-10',
//       certificateId: 'BOB-2024-001',
//       instructor: 'Sarah Johnson',
//       grade: 'A',
//       duration: '4 weeks',
//       skills: ['Banking Operations', 'Customer Service', 'Financial Products'],
//       description: 'Comprehensive understanding of core banking principles and operations.'
//     },
//     {
//       id: 3,
//       title: 'Digital Banking & Fintech',
//       date: '2024-01-20',
//       certificateId: 'DBF-2024-001',
//       instructor: 'Michael Chen',
//       grade: 'A+',
//       duration: '5 weeks',
//       skills: ['Digital Transformation', 'Fintech Integration', 'Mobile Banking'],
//       description: 'Advanced knowledge in digital banking solutions and financial technology.'
//     },
//     {
//       id: 4,
//       title: 'Risk Management Framework',
//       date: '2024-01-25',
//       certificateId: 'RMF-2024-001',
//       instructor: 'Robert Brown',
//       grade: 'A',
//       duration: '7 weeks',
//       skills: ['Risk Assessment', 'Compliance', 'Strategic Planning'],
//       description: 'Expertise in developing and implementing risk management strategies.'
//     }
//   ];

//   const handleDownloadPDF = (certificate) => {
//     // Simulate PDF download
//     console.log('Downloading PDF for:', certificate.title);
//     // In real implementation, this would trigger actual PDF download
//     alert(`Downloading PDF certificate for ${certificate.title}`);
//   };

//   const handlePrint = (certificate) => {
//     // Simulate print functionality
//     console.log('Printing certificate:', certificate.title);
//     // In real implementation, this would open print dialog
//     alert(`Printing certificate for ${certificate.title}`);
//   };

//   const handleShare = (platform, certificate) => {
//     const shareUrl = `https://ificbank.com/certificate/${certificate.certificateId}`;
//     const shareText = `I just earned my ${certificate.title} certificate from IFIC Bank eLearning!`;
    
//     const shareConfig = {
//       facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
//       twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
//       linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
//       email: `mailto:?subject=${encodeURIComponent(`My ${certificate.title} Certificate`)}&body=${encodeURIComponent(`${shareText}\n\nView my certificate: ${shareUrl}`)}`
//     };

//     if (platform === 'email') {
//       window.location.href = shareConfig.email;
//     } else {
//       window.open(shareConfig[platform], '_blank', 'width=600,height=400');
//     }
//   };

//   const copyToClipboard = (certificate) => {
//     const url = `https://ificbank.com/certificate/${certificate.certificateId}`;
//     navigator.clipboard.writeText(url).then(() => {
//       alert('Certificate link copied to clipboard!');
//     });
//   };

//   const CertificatePreview = ({ certificate, onClose }) => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Certificate Design - WHITE BACKGROUND */}
//         <div className="relative bg-white border-2 border-gray-200 p-8">
//           {/* Decorative Border */}
//           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-800"></div>
          
//           {/* IFIC Logo and Header */}
//           <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
//             <div className="flex items-center space-x-4">
//               <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-xl flex items-center justify-center">
//                 <Shield className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <div className="text-2xl font-black text-gray-900">IFIC BANK</div>
//                 <div className="text-red-600 text-sm font-semibold">E-Learning Platform</div>
//               </div>
//             </div>
//             <div className="text-right">
//               <div className="text-sm text-gray-600">Certificate ID</div>
//               <div className="text-lg font-bold text-gray-900 font-mono">{certificate.certificateId}</div>
//             </div>
//           </div>

//           {/* Certificate Content */}
//           <div className="text-center mb-8">
//             <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Award className="w-12 h-12 text-white" />
//             </div>
            
//             <h1 className="text-4xl font-black mb-4 text-gray-900">
//               Certificate of <span className="text-red-600">Completion</span>
//             </h1>
//             <p className="text-gray-600 text-lg mb-8">This certifies that</p>
            
//             <h2 className="text-3xl font-bold mb-2 text-gray-900">John Doe</h2>
//             <p className="text-gray-600 text-lg mb-6">has successfully completed the course</p>
            
//             <h3 className="text-2xl font-semibold mb-6 text-red-600">{certificate.title}</h3>
            
//             <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
//               <div className="text-center">
//                 <p className="text-gray-500 text-sm mb-1">Instructor</p>
//                 <p className="font-semibold text-gray-900">{certificate.instructor}</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-gray-500 text-sm mb-1">Grade Achieved</p>
//                 <p className="font-semibold text-green-600">{certificate.grade}</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-gray-500 text-sm mb-1">Completion Date</p>
//                 <p className="font-semibold text-gray-900">{new Date(certificate.date).toLocaleDateString()}</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-gray-500 text-sm mb-1">Duration</p>
//                 <p className="font-semibold text-gray-900">{certificate.duration}</p>
//               </div>
//             </div>
//           </div>

//           {/* Verification Section */}
//           <div className="border-t border-gray-200 pt-8">
//             <div className="flex justify-between items-center max-w-2xl mx-auto">
//               <div className="text-center">
//                 <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
//                   <Shield className="w-10 h-10 text-green-600" />
//                 </div>
//                 <p className="text-sm text-gray-500 mb-1">Verified by</p>
//                 <p className="font-bold text-gray-900">IFIC Bank</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
//                   <CheckCircle className="w-10 h-10 text-red-600" />
//                 </div>
//                 <p className="text-sm text-gray-500 mb-1">Digital Signature</p>
//                 <p className="font-bold text-gray-900">E-Learning Platform</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="p-6 bg-gray-50 border-t border-gray-200">
//           <div className="flex flex-wrap gap-3 justify-center">
//             <button 
//               onClick={() => handleDownloadPDF(certificate)}
//               className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               <Download className="w-4 h-4" />
//               <span>Download PDF</span>
//             </button>
//             <button 
//               onClick={() => setShowShareModal(true)}
//               className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
//             >
//               <Share2 className="w-4 h-4" />
//               <span>Share</span>
//             </button>
//             <button 
//               onClick={() => handlePrint(certificate)}
//               className="flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300"
//             >
//               <Printer className="w-4 h-4" />
//               <span>Print</span>
//             </button>
//             <button 
//               onClick={onClose}
//               className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300"
//             >
//               <X className="w-4 h-4" />
//               <span>Close</span>
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );

//   const ShareModal = ({ certificate, onClose }) => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="bg-white rounded-2xl max-w-md w-full p-6"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-xl font-bold text-gray-900">Share Certificate</h3>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         <div className="space-y-4">
//           <p className="text-gray-600 text-center">Share your achievement on social media</p>
          
//           <div className="grid grid-cols-2 gap-3">
//             <button 
//               onClick={() => handleShare('facebook', certificate)}
//               className="flex items-center justify-center space-x-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
//             >
//               <Facebook className="w-5 h-5" />
//               <span>Facebook</span>
//             </button>
//             <button 
//               onClick={() => handleShare('twitter', certificate)}
//               className="flex items-center justify-center space-x-2 bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors duration-300"
//             >
//               <Twitter className="w-5 h-5" />
//               <span>Twitter</span>
//             </button>
//             <button 
//               onClick={() => handleShare('linkedin', certificate)}
//               className="flex items-center justify-center space-x-2 bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-900 transition-colors duration-300"
//             >
//               <Linkedin className="w-5 h-5" />
//               <span>LinkedIn</span>
//             </button>
//             <button 
//               onClick={() => handleShare('email', certificate)}
//               className="flex items-center justify-center space-x-2 bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
//             >
//               <Mail className="w-5 h-5" />
//               <span>Email</span>
//             </button>
//           </div>

//           <div className="pt-4 border-t border-gray-200">
//             <p className="text-sm text-gray-600 mb-2">Certificate Link</p>
//             <div className="flex space-x-2">
//               <input 
//                 type="text" 
//                 value={`https://ificbank.com/certificate/${certificate.certificateId}`}
//                 readOnly
//                 className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
//               />
//               <button 
//                 onClick={() => copyToClipboard(certificate)}
//                 className="bg-gray-600 text-white px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"
//               >
//                 Copy
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-12 text-center"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20 mb-8"
//           >
//             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//             <span className="text-white/90 font-semibold text-sm">ACHIEVEMENTS PORTFOLIO</span>
//           </motion.div>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
//             Your <span className="text-red-600">Certificates</span>
//           </h1>
          
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
//             Verified certifications earned through IFIC Bank eLearning platform
//           </p>
//         </motion.div>

//         {/* Certificates Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           {certificates.map((cert, index) => (
//             <motion.div
//               key={cert.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200 group cursor-pointer"
//               onClick={() => setSelectedCertificate(cert)}
//             >
//               {/* Certificate Header Strip */}
//               <div className="h-2 bg-gradient-to-r from-red-600 to-red-800"></div>
              
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex-1">
//                     <div className="flex items-center space-x-2 mb-2">
//                       <Award className="w-5 h-5 text-green-600" />
//                       <span className="text-green-600 font-semibold text-sm">CERTIFIED</span>
//                     </div>
//                     <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-red-700 transition-colors">
//                       {cert.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm">by {cert.instructor}</p>
//                   </div>
//                   <span className={`px-3 py-1 rounded-xl text-sm font-semibold ${
//                     cert.grade === 'A+' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
//                   }`}>
//                     {cert.grade}
//                   </span>
//                 </div>

//                 <p className="text-gray-600 text-sm mb-4">{cert.description}</p>

//                 <div className="space-y-3 mb-4">
//                   <div className="flex justify-between text-sm text-gray-600">
//                     <span>Issued Date:</span>
//                     <span className="font-medium">{new Date(cert.date).toLocaleDateString()}</span>
//                   </div>
//                   <div className="flex justify-between text-sm text-gray-600">
//                     <span>Certificate ID:</span>
//                     <span className="font-medium font-mono">{cert.certificateId}</span>
//                   </div>
//                   <div className="flex justify-between text-sm text-gray-600">
//                     <span>Duration:</span>
//                     <span className="font-medium">{cert.duration}</span>
//                   </div>
//                 </div>

//                 {/* Skills */}
//                 <div className="mb-6">
//                   <p className="text-sm text-gray-600 mb-2">Skills Acquired:</p>
//                   <div className="flex flex-wrap gap-2">
//                     {cert.skills.map((skill, idx) => (
//                       <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Action Button */}
//                 <div className="flex space-x-3">
//                   <button className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
//                     <Eye className="w-4 h-4" />
//                     <span>View Certificate</span>
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View All Certificates CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center"
//         >
//           <p className="text-gray-600 mb-4">Looking for more learning opportunities?</p>
//           <button className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold transition-colors duration-300">
//             <span>Browse All Courses</span>
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </motion.div>

//         {/* Empty State */}
//         {certificates.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center py-16"
//           >
//             <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Award className="w-12 h-12 text-gray-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-3">No Certificates Yet</h3>
//             <p className="text-gray-600 mb-8 max-w-md mx-auto">
//               Complete courses to earn verifiable certificates that showcase your achievements
//             </p>
//             <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//               Browse Available Courses
//             </button>
//           </motion.div>
//         )}

//         {/* Certificate Preview Modal */}
//         <AnimatePresence>
//           {selectedCertificate && (
//             <CertificatePreview 
//               certificate={selectedCertificate} 
//               onClose={() => setSelectedCertificate(null)} 
//             />
//           )}
//         </AnimatePresence>

//         {/* Share Modal */}
//         <AnimatePresence>
//           {showShareModal && selectedCertificate && (
//             <ShareModal 
//               certificate={selectedCertificate} 
//               onClose={() => setShowShareModal(false)} 
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Certificates;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Share2, Printer, X, Eye, Facebook, Twitter, Linkedin, Mail, CheckCircle, Award, Shield, ArrowRight } from 'lucide-react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);

  const certificates = [
  {
    id: 1,
    title: 'Anti Money Laundering',
    date: '2024-01-15',
    certificateId: 'AML-2024-001',
    instructor: 'Nusrat Chowdhury',
    grade: 'A+',
    duration: '6 weeks',
    skills: ['Risk Assessment', 'Compliance', 'Regulatory Framework'],
    description: 'Mastered advanced anti-money laundering techniques and compliance protocols aligned with Bangladesh Bank guidelines.'
  },
  {
    id: 2,
    title: 'Banking Fundamentals',
    date: '2024-01-10',
    certificateId: 'BOB-2024-001',
    instructor: 'Farhana Rahman',
    grade: 'A',
    duration: '4 weeks',
    skills: ['Banking Operations', 'Customer Service', 'Financial Products'],
    description: 'Comprehensive understanding of core banking principles and operations in the Bangladeshi financial sector.'
  }
];


  const handleDownloadPDF = (certificate) => {
    console.log('Downloading PDF for:', certificate.title);
    alert(`Downloading PDF certificate for ${certificate.title}`);
  };

  const handlePrint = (certificate) => {
    console.log('Printing certificate:', certificate.title);
    alert(`Printing certificate for ${certificate.title}`);
  };

  const handleShare = (platform, certificate) => {
    const shareUrl = `https://ificbank.com/certificate/${certificate.certificateId}`;
    const shareText = `I just earned my ${certificate.title} certificate from IFIC Bank eLearning!`;
    
    const shareConfig = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(`My ${certificate.title} Certificate`)}&body=${encodeURIComponent(`${shareText}\n\nView my certificate: ${shareUrl}`)}`
    };

    if (platform === 'email') {
      window.location.href = shareConfig.email;
    } else {
      window.open(shareConfig[platform], '_blank', 'width=600,height=400');
    }
  };

  const copyToClipboard = (certificate) => {
    const url = `https://ificbank.com/certificate/${certificate.certificateId}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Certificate link copied to clipboard!');
    });
  };

  const CertificatePreview = ({ certificate, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl max-w-4xl w-full flex flex-col max-h-[105vh]" // Changed to flex-col and better max-height
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Design - WHITE BACKGROUND */}
        <div className="flex-1 overflow-y-auto p-8"> {/* Made scrollable if needed */}
          <div className="relative bg-white border-2 border-gray-200 p-8">
            {/* Decorative Border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-800"></div>
            
            {/* IFIC Logo and Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
           <div className="flex items-center space-x-4">
  {/* Clean logo display without background */}
  <img 
    src="/ific-logo.png" 
    alt="IFIC Bank" 
    className="w-16 h-16 object-contain"
  />
  <div>
    <div className="text-2xl font-black text-gray-900">IFIC BANK</div>
    <div className="text-red-600 text-sm font-semibold">E-Learning Platform</div>
  </div>
</div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Certificate ID</div>
                <div className="text-lg font-bold text-gray-900 font-mono">{certificate.certificateId}</div>
              </div>
            </div>

            {/* Certificate Content */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-3xl font-black mb-4 text-gray-900">
                Certificate of <span className="text-red-600">Completion</span>
              </h1>
              <p className="text-gray-600 mb-6">This certifies that</p>
              
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Fariya Islam</h2>
              <p className="text-gray-600 mb-4">has successfully completed the course</p>
              
              <h3 className="text-xl font-semibold mb-6 text-red-600">{certificate.title}</h3>
              
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-6">
                <div className="text-center">
                  <p className="text-gray-500 text-sm mb-1">Instructor</p>
                  <p className="font-semibold text-gray-900">{certificate.instructor}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-sm mb-1">Grade Achieved</p>
                  <p className="font-semibold text-green-600">{certificate.grade}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-sm mb-1">Completion Date</p>
                  <p className="font-semibold text-gray-900">{new Date(certificate.date).toLocaleDateString()}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-sm mb-1">Duration</p>
                  <p className="font-semibold text-gray-900">{certificate.duration}</p>
                </div>
              </div>
            </div>

            {/* Verification Section */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-500 mb-1">Verified by</p>
                  <p className="font-bold text-gray-900 text-sm">IFIC Bank</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-xs text-gray-500 mb-1">Digital Signature</p>
                  <p className="font-bold text-gray-900 text-sm">E-Learning Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Always visible at bottom */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 shrink-0"> {/* Added shrink-0 to prevent compression */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              onClick={() => handleDownloadPDF(certificate)}
              className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            <button 
              onClick={() => setShowShareModal(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button 
              onClick={() => handlePrint(certificate)}
              className="flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button 
              onClick={onClose}
              className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300"
            >
              <X className="w-4 h-4" />
              <span>Close</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const ShareModal = ({ certificate, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Share Certificate</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600 text-center">Share your achievement on social media</p>
          
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => handleShare('facebook', certificate)}
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </button>
            <button 
              onClick={() => handleShare('twitter', certificate)}
              className="flex items-center justify-center space-x-2 bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </button>
            <button 
              onClick={() => handleShare('linkedin', certificate)}
              className="flex items-center justify-center space-x-2 bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-900 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </button>
            <button 
              onClick={() => handleShare('email', certificate)}
              className="flex items-center justify-center space-x-2 bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </button>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Certificate Link</p>
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={`https://ificbank.com/certificate/${certificate.certificateId}`}
                readOnly
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
              <button 
                onClick={() => copyToClipboard(certificate)}
                className="bg-gray-600 text-white px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-3 border border-gray-200 mb-6"
>
  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
  <span className="text-gray-900 font-semibold text-sm">ACHIEVEMENTS PORTFOLIO</span>
</motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Your <span className="text-red-600">Certificates</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Verified certifications earned through IFIC Bank eLearning platform
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200 group cursor-pointer"
              onClick={() => setSelectedCertificate(cert)}
            >
              {/* Certificate Header Strip */}
              <div className="h-2 bg-gradient-to-r from-red-600 to-red-800"></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="w-5 h-5 text-green-600" />
                      <span className="text-green-600 font-semibold text-sm">CERTIFIED</span>
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-red-700 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 text-sm">by {cert.instructor}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-xl text-sm font-semibold ${
                    cert.grade === 'A+' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {cert.grade}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Issued Date:</span>
                    <span className="font-medium">{new Date(cert.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Certificate ID:</span>
                    <span className="font-medium font-mono">{cert.certificateId}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Duration:</span>
                    <span className="font-medium">{cert.duration}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Skills Acquired:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Certificates CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">Looking for more learning opportunities?</p>
          <button className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold transition-colors duration-300">
            <span>Browse All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Empty State */}
        {certificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No Certificates Yet</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Complete courses to earn verifiable certificates that showcase your achievements
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Browse Available Courses
            </button>
          </motion.div>
        )}

        {/* Certificate Preview Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <CertificatePreview 
              certificate={selectedCertificate} 
              onClose={() => setSelectedCertificate(null)} 
            />
          )}
        </AnimatePresence>

        {/* Share Modal */}
        <AnimatePresence>
          {showShareModal && selectedCertificate && (
            <ShareModal 
              certificate={selectedCertificate} 
              onClose={() => setShowShareModal(false)} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Certificates;