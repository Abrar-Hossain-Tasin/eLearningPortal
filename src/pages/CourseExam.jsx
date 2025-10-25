// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Timer, ArrowLeft, Award, CheckCircle, AlertCircle, BookOpen } from 'lucide-react';

// // Course-wise module structure with exams
// const COURSE_MODULES = {
//   "basic-banking": {
//     title: "Basic of Banking",
//     modules: [
//       {
//         name: "Account Transaction",
//         duration: "2 hours",
//         questions: [
//           {
//             id: 1,
//             question: "What is the primary purpose of a debit entry in banking transactions?",
//             options: [
//               "To increase account balance",
//               "To decrease account balance", 
//               "To record interest earned",
//               "To process loan applications"
//             ],
//             correctAnswer: 1,
//             explanation: "Debit entries decrease account balances in banking transactions, representing money going out of an account.",
//             type: "multiple_choice"
//           },
//           {
//             id: 2,
//             question: "Which transaction type typically involves immediate fund transfer?",
//             options: [
//               "Standing order",
//               "Direct debit",
//               "Real-time gross settlement",
//               "Cheque processing"
//             ],
//             correctAnswer: 2,
//             explanation: "Real-time gross settlement (RTGS) involves immediate fund transfer between banks.",
//             type: "multiple_choice"
//           },
//           {
//             id: 3,
//             question: "Explain the importance of transaction reconciliation in banking operations.",
//             type: "descriptive",
//             explanation: "Transaction reconciliation ensures accuracy between bank records and customer statements.",
//             correctAnswer: "Transaction reconciliation is crucial for ensuring accuracy between bank records and customer statements, detecting discrepancies, preventing fraud, maintaining regulatory compliance, and providing reliable financial reporting."
//           }
//         ]
//       },
//       {
//         name: "Anti Money Laundering",
//         duration: "3 hours",
//         questions: [
//           {
//             id: 1,
//             question: "What does AML stand for in banking?",
//             options: [
//               "Automated Money Lending",
//               "Anti Money Laundering", 
//               "Asset Management Liability",
//               "Annual Monetary License"
//             ],
//             correctAnswer: 1,
//             explanation: "AML stands for Anti Money Laundering - procedures to prevent generating income through illegal actions.",
//             type: "multiple_choice"
//           },
//           {
//             id: 2,
//             question: "What is the primary goal of KYC regulations?",
//             options: [
//               "To know your competition",
//               "To know your customer's identity",
//               "To know your currency",
//               "To know your compliance"
//             ],
//             correctAnswer: 1,
//             explanation: "KYC (Know Your Customer) regulations require banks to verify customer identity to prevent fraud.",
//             type: "multiple_choice"
//           }
//         ]
//       },
//       {
//         name: "Retail Banking",
//         duration: "2.5 hours",
//         questions: [
//           {
//             id: 1,
//             question: "Which product is most common in retail banking?",
//             options: [
//               "Savings Account",
//               "Corporate Loan",
//               "Investment Banking",
//               "Merchant Services"
//             ],
//             correctAnswer: 0,
//             explanation: "Savings accounts are the most common retail banking product.",
//             type: "multiple_choice"
//           }
//         ]
//       }
//     ]
//   },
//   "basic-credit": {
//     title: "Basic of Credit",
//     modules: [
//       {
//         name: "Borrower Selection",
//         duration: "2 hours",
//         questions: [
//           {
//             id: 1,
//             question: "What is a credit score?",
//             options: [
//               "A numerical representation of creditworthiness",
//               "A text description of financial history",
//               "A bank's internal code",
//               "A government identification"
//             ],
//             correctAnswer: 0,
//             explanation: "A credit score is a numerical representation of creditworthiness.",
//             type: "multiple_choice"
//           }
//         ]
//       },
//       {
//         name: "Financial Statement Analysis",
//         duration: "3 hours",
//         questions: [
//           {
//             id: 1,
//             question: "What does ROI stand for?",
//             options: [
//               "Return on Investment",
//               "Rate of Interest",
//               "Risk of Inflation",
//               "Review of Income"
//             ],
//             correctAnswer: 0,
//             explanation: "ROI stands for Return on Investment.",
//             type: "multiple_choice"
//           }
//         ]
//       }
//     ]
//   }
// };

// const CourseExam = () => {
//   const { courseId, moduleName } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [descriptiveAnswers, setDescriptiveAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [certificateEligible, setCertificateEligible] = useState(false);

//   const decodedModuleName = decodeURIComponent(moduleName || '');
//   const course = COURSE_MODULES[courseId];
//   const currentModule = course?.modules.find(mod => mod.name === decodedModuleName);
//   const quizQuestions = currentModule?.questions || [];

//   // Countdown timer effect
//   useEffect(() => {
//     let timer;
//     if (quizStarted && !quizCompleted && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft(time => {
//           if (time <= 1) {
//             clearInterval(timer);
//             handleQuizSubmit();
//             return 0;
//           }
//           return time - 1;
//         });
//       }, 1000);
//     }
    
//     return () => clearInterval(timer);
//   }, [quizStarted, quizCompleted, timeLeft]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handleAnswerSelect = (questionId, answerIndex) => {
//     setSelectedAnswers(prev => ({
//       ...prev,
//       [questionId]: answerIndex
//     }));
//   };

//   const handleDescriptiveAnswer = (questionId, answer) => {
//     setDescriptiveAnswers(prev => ({
//       ...prev,
//       [questionId]: answer
//     }));
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < quizQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleQuizSubmit = () => {
//     let correct = 0;
//     let totalGradable = 0;
    
//     quizQuestions.forEach(question => {
//       if (question.type === "multiple_choice") {
//         totalGradable++;
//         if (selectedAnswers[question.id] === question.correctAnswer) {
//           correct++;
//         }
//       } else if (question.type === "descriptive") {
//         totalGradable++;
//         if (descriptiveAnswers[question.id] && descriptiveAnswers[question.id].trim().length > 10) {
//           correct++;
//         }
//       }
//     });
    
//     const finalScore = totalGradable > 0 ? (correct / totalGradable) * 100 : 0;
//     setScore(finalScore);
//     setQuizCompleted(true);
//     setShowResults(true);
//     setQuizStarted(false);
    
//     // Check if passed (80% or higher)
//     if (finalScore >= 80) {
//       setCertificateEligible(true);
      
//       // Mark this module as completed for this course
//       const courseProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
//       if (!courseProgress[courseId]) {
//         courseProgress[courseId] = {};
//       }
//       courseProgress[courseId][decodedModuleName] = {
//         completed: true,
//         score: finalScore,
//         date: new Date().toISOString()
//       };
//       localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
      
//       // Check if all modules in course are completed
//       checkCourseCompletion();
//     }
//   };

//   const checkCourseCompletion = () => {
//     const courseProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
//     const currentCourseProgress = courseProgress[courseId] || {};
    
//     // Check if all modules in this course are completed
//     const allModulesCompleted = course.modules.every(module => 
//       currentCourseProgress[module.name]?.completed
//     );
    
//     if (allModulesCompleted) {
//       // Mark course as completed
//       const completedCourses = JSON.parse(localStorage.getItem('completedCourses') || '{}');
//       completedCourses[courseId] = {
//         courseName: course.title,
//         completedDate: new Date().toISOString(),
//         modules: course.modules.length
//       };
//       localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
//     }
//   };

//   const startQuiz = () => {
//     setQuizStarted(true);
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setSelectedAnswers({});
//     setDescriptiveAnswers({});
//     setTimeLeft(600);
//     setScore(0);
//     setShowResults(false);
//     setCertificateEligible(false);
//   };

//   const resetQuiz = () => {
//     setQuizStarted(false);
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setSelectedAnswers({});
//     setDescriptiveAnswers({});
//     setTimeLeft(600);
//     setScore(0);
//     setShowResults(false);
//     setCertificateEligible(false);
//   };

//   const navigateToNextModule = () => {
//     const currentModuleIndex = course.modules.findIndex(mod => mod.name === decodedModuleName);
//     if (currentModuleIndex < course.modules.length - 1) {
//       const nextModule = course.modules[currentModuleIndex + 1];
//       navigate(`/course-exam/${courseId}/${nextModule.name}`);
//     } else {
//       // All modules completed, go to certificates
//       navigate('/certificates', { 
//         state: { 
//           courseCompleted: true,
//           courseId: courseId,
//           courseName: course.title
//         } 
//       });
//     }
//   };

//   if (!course || !currentModule) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="text-center py-16">
//             <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Module Not Found</h2>
//             <button
//               onClick={() => navigate('/courses')}
//               className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
//             >
//               Back to Courses
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </button>
          
//           <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-lg border">
//             Course: <span className="font-semibold">{course.title}</span>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow-lg p-8">
//           {!quizStarted && !quizCompleted && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center"
//             >
//               <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <Award className="w-10 h-10 text-red-600" />
//               </div>
              
//               <div className="mb-6">
//                 <h2 className="text-3xl font-black text-gray-900 mb-2">{decodedModuleName} Exam</h2>
//                 <p className="text-gray-600">Course: {course.title}</p>
//               </div>
              
//               <p className="text-gray-600 mb-6 max-w-md mx-auto">
//                 Test your knowledge of {decodedModuleName}. You have 10 minutes to complete this exam. 
//                 Score 80% or higher to pass this module.
//               </p>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <div className="text-2xl font-bold text-gray-900">{quizQuestions.length}</div>
//                   <div className="text-sm text-gray-600">Questions</div>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <div className="text-2xl font-bold text-gray-900">10:00</div>
//                   <div className="text-sm text-gray-600">Time Limit</div>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <div className="text-2xl font-bold text-gray-900">80%</div>
//                   <div className="text-sm text-gray-600">Passing Score</div>
//                 </div>
//               </div>

//               {/* Course Progress */}
//               <div className="mb-6 p-4 bg-blue-50 rounded-lg max-w-md mx-auto">
//                 <h4 className="font-semibold text-blue-900 mb-2">Course Progress</h4>
//                 <div className="flex items-center justify-between text-sm">
//                   <span>Modules Completed:</span>
//                   <span className="font-semibold">
//                     {Object.keys(JSON.parse(localStorage.getItem('courseProgress') || '{}')[courseId] || {}).length} / {course.modules.length}
//                   </span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                   <div 
//                     className="bg-green-500 h-2 rounded-full transition-all duration-300"
//                     style={{ 
//                       width: `${(Object.keys(JSON.parse(localStorage.getItem('courseProgress') || '{}')[courseId] || {}).length / course.modules.length) * 100}%` 
//                     }}
//                   ></div>
//                 </div>
//               </div>
              
//               <button
//                 onClick={startQuiz}
//                 className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
//               >
//                 Start Exam
//               </button>
//             </motion.div>
//           )}

//           {quizStarted && !quizCompleted && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               {/* Exam Header */}
//               <div className="flex flex-col sm:flex-row justify-between items-center mb-8 p-4 bg-gray-50 rounded-xl gap-4">
//                 <div className="flex items-center space-x-2">
//                   <Timer className="w-5 h-5 text-red-600" />
//                   <span className={`font-semibold text-lg ${
//                     timeLeft < 60 ? 'text-red-600 animate-pulse' : 'text-gray-900'
//                   }`}>
//                     {formatTime(timeLeft)}
//                   </span>
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   Question {currentQuestion + 1} of {quizQuestions.length}
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-32 bg-gray-200 rounded-full h-2">
//                     <div 
//                       className="bg-red-600 h-2 rounded-full transition-all duration-300"
//                       style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Current Question */}
//               <div className="mb-8">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-xl font-bold text-gray-900">
//                     {quizQuestions[currentQuestion].question}
//                   </h3>
//                   <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                     quizQuestions[currentQuestion].type === "multiple_choice" 
//                       ? "bg-blue-100 text-blue-700" 
//                       : "bg-green-100 text-green-700"
//                   }`}>
//                     {quizQuestions[currentQuestion].type === "multiple_choice" ? "Multiple Choice" : "Descriptive"}
//                   </span>
//                 </div>
                
//                 {quizQuestions[currentQuestion].type === "multiple_choice" ? (
//                   <div className="space-y-3">
//                     {quizQuestions[currentQuestion].options.map((option, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleAnswerSelect(quizQuestions[currentQuestion].id, index)}
//                         className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
//                           selectedAnswers[quizQuestions[currentQuestion].id] === index
//                             ? 'border-red-600 bg-red-50 text-red-700'
//                             : 'border-gray-200 hover:border-red-300 hover:bg-red-25'
//                         }`}
//                       >
//                         <div className="flex items-center space-x-3">
//                           <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
//                             selectedAnswers[quizQuestions[currentQuestion].id] === index
//                               ? 'border-red-600 bg-red-600 text-white'
//                               : 'border-gray-300'
//                           }`}>
//                             {selectedAnswers[quizQuestions[currentQuestion].id] === index && (
//                               <div className="w-2 h-2 rounded-full bg-white"></div>
//                             )}
//                           </div>
//                           <span className="font-medium">{option}</span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     <textarea
//                       value={descriptiveAnswers[quizQuestions[currentQuestion].id] || ''}
//                       onChange={(e) => handleDescriptiveAnswer(quizQuestions[currentQuestion].id, e.target.value)}
//                       placeholder="Type your detailed answer here..."
//                       className="w-full h-40 p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                     />
//                     <div className="text-sm text-gray-500">
//                       Characters: {descriptiveAnswers[quizQuestions[currentQuestion].id]?.length || 0}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Navigation Buttons */}
//               <div className="flex justify-between">
//                 <button
//                   onClick={handlePrevQuestion}
//                   disabled={currentQuestion === 0}
//                   className={`px-6 py-3 rounded-xl font-semibold transition-all ${
//                     currentQuestion === 0
//                       ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                       : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                   }`}
//                 >
//                   Previous
//                 </button>
                
//                 {currentQuestion === quizQuestions.length - 1 ? (
//                   <button
//                     onClick={handleQuizSubmit}
//                     className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//                   >
//                     Submit Exam
//                   </button>
//                 ) : (
//                   <button
//                     onClick={handleNextQuestion}
//                     className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//                   >
//                     Next Question
//                   </button>
//                 )}
//               </div>
//             </motion.div>
//           )}

//           {showResults && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center"
//             >
//               <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
//                 certificateEligible ? 'bg-green-100' : 'bg-red-100'
//               }`}>
//                 {certificateEligible ? (
//                   <CheckCircle className="w-10 h-10 text-green-600" />
//                 ) : (
//                   <AlertCircle className="w-10 h-10 text-red-600" />
//                 )}
//               </div>
              
//               <h2 className="text-3xl font-black text-gray-900 mb-4">Exam Results</h2>
//               <div className={`text-5xl font-black mb-4 ${
//                 certificateEligible ? 'text-green-600' : 'text-red-600'
//               }`}>
//                 {score.toFixed(1)}%
//               </div>
              
//               <p className="text-gray-600 mb-6">
//                 You answered {Math.round((score / 100) * quizQuestions.length)} out of {quizQuestions.length} questions correctly.
//               </p>
              
//               {certificateEligible ? (
//                 <div className="space-y-4">
//                   <p className="text-green-600 font-semibold text-lg">
//                     ✅ Congratulations! You've passed the {decodedModuleName} module!
//                   </p>
                  
//                   {/* Check if course completed */}
//                   {(() => {
//                     const courseProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
//                     const currentCourseProgress = courseProgress[courseId] || {};
//                     const completedModules = Object.keys(currentCourseProgress).length;
//                     const totalModules = course.modules.length;
//                     const courseCompleted = completedModules === totalModules;

//                     if (courseCompleted) {
//                       return (
//                         <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 mb-4">
//                           <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
//                           <h3 className="text-xl font-bold text-green-800 mb-2">🎉 Course Completed!</h3>
//                           <p className="text-green-700 mb-4">
//                             You've successfully completed all modules of {course.title}! 
//                             You are now eligible for the course certificate.
//                           </p>
//                           <button
//                             onClick={() => navigate('/certificates', { 
//                               state: { 
//                                 courseCompleted: true,
//                                 courseId: courseId,
//                                 courseName: course.title
//                               } 
//                             })}
//                             className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
//                           >
//                             Get Course Certificate
//                           </button>
//                         </div>
//                       );
//                     } else {
//                       return (
//                         <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mb-4">
//                           <p className="text-blue-700 mb-3">
//                             <strong>Progress:</strong> {completedModules} of {totalModules} modules completed
//                           </p>
//                           <button
//                             onClick={navigateToNextModule}
//                             className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//                           >
//                             Continue to Next Module
//                           </button>
//                         </div>
//                       );
//                     }
//                   })()}

//                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <button
//                       onClick={() => navigate(`/course/${courseId}`)}
//                       className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
//                     >
//                       Back to Course
//                     </button>
//                     <button
//                       onClick={resetQuiz}
//                       className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
//                     >
//                       Retake Exam
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   <p className="text-red-600 font-semibold">
//                     You need 80% to pass this module. Keep studying and try again!
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <button
//                       onClick={resetQuiz}
//                       className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//                     >
//                       Retake Exam
//                     </button>
//                     <button
//                       onClick={() => navigate(`/course/${courseId}`)}
//                       className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
//                     >
//                       Back to Course
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseExam;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Timer, ArrowLeft, Award, CheckCircle, AlertCircle, BookOpen, Users, Clock } from 'lucide-react';

// Course structure with modules and exams
const COURSES_DATA = {
  "basic-banking": {
    id: 'basic-banking',
    title: 'Basic of Banking',
    description: 'Fundamental banking operations and services',
    instructor: 'Farhana Rahman',
    duration: '6 weeks',
    category: 'Operations',
    level: 'Beginner',
    modules: [
      {
        name: "Account Transaction",
        duration: "2 hours",
        completed: false
      },
      {
        name: "Anti Money Laundering", 
        duration: "3 hours",
        completed: false
      },
      {
        name: "Retail Banking",
        duration: "2.5 hours",
        completed: false
      },
      {
        name: "Asset & Liability Management",
        duration: "3 hours",
        completed: false
      }
    ]
  },
  "basic-credit": {
    id: 'basic-credit',
    title: 'Basic of Credit',
    description: 'Credit analysis and lending fundamentals',
    instructor: 'Mahmud Hasan',
    duration: '5 weeks',
    category: 'Credit',
    level: 'Intermediate',
    modules: [
      {
        name: "Borrower Selection",
        duration: "2 hours",
        completed: false
      },
      {
        name: "Financial Statement & Ratio Analysis",
        duration: "3 hours", 
        completed: false
      },
      {
        name: "Working Capital",
        duration: "2 hours",
        completed: false
      },
      {
        name: "Retail Loan",
        duration: "2.5 hours",
        completed: false
      }
    ]
  },
  "digital-banking": {
    id: 'digital-banking',
    title: 'Digital Banking & Fintech',
    description: 'Modern banking technology and innovations',
    instructor: 'Nusrat Chowdhury',
    duration: '4 weeks',
    category: 'Technology',
    level: 'Intermediate',
    modules: [
      {
        name: "Digital Banking Fundamentals",
        duration: "2 hours",
        completed: false
      },
      {
        name: "Fintech Innovations",
        duration: "2.5 hours",
        completed: false
      },
      {
        name: "Cybersecurity in Banking",
        duration: "2 hours",
        completed: false
      }
    ]
  }
};


const CourseExam = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const [selectedModule, setSelectedModule] = useState(null);
  const [courseProgress, setCourseProgress] = useState({});

  const course = COURSES_DATA[courseId];

  // Load progress from localStorage
  useEffect(() => {
    const progress = JSON.parse(localStorage.getItem('completedModules') || '{}');
    setCourseProgress(progress);
  }, []);

  const getModuleProgress = (moduleName) => {
    return courseProgress[moduleName] || { completed: false, score: 0 };
  };

  const getCourseCompletion = () => {
    if (!course) return { completed: 0, total: 0, percentage: 0, allCompleted: false };
    
    const completedModules = course.modules.filter(module => 
      getModuleProgress(module.name).completed
    ).length;
    
    const totalModules = course.modules.length;
    const percentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
    const allCompleted = completedModules === totalModules && totalModules > 0;

    return { completed: completedModules, total: totalModules, percentage, allCompleted };
  };

  const handleStartExam = (module) => {
    navigate(`/module-quiz/${module.name}`);
  };

  const handleViewCertificate = () => {
    navigate('/certificates', {
      state: {
        courseCompleted: true,
        courseId: courseId,
        courseName: course.title
      }
    });
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-16">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
            <button
              onClick={() => navigate('/exam')}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Back to Exams
            </button>
          </div>
        </div>
      </div>
    );
  }

  const completion = getCourseCompletion();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/exam')}
            className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors font-semibold px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Exams</span>
          </button>
          
          <div className="text-right">
            <h1 className="text-3xl font-black text-gray-900">{course.title} Exams</h1>
            <p className="text-gray-600">{course.description}</p>
          </div>
        </div>

        {/* Course Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-5 h-5 text-red-600" />
              <div>
                <div className="text-sm text-gray-600">Modules</div>
                <div className="font-semibold text-gray-900">{course.modules.length}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-red-600" />
              <div>
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">{course.duration}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-red-600" />
              <div>
                <div className="text-sm text-gray-600">Instructor</div>
                <div className="font-semibold text-gray-900">{course.instructor}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-red-600" />
              <div>
                <div className="text-sm text-gray-600">Level</div>
                <div className="font-semibold text-gray-900">{course.level}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Course Progress</h3>
            <span className="text-lg font-semibold text-gray-900">
              {completion.completed}/{completion.total} modules
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${completion.percentage}%` }}
            ></div>
          </div>
          
          {completion.allCompleted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-semibold">
                    🎉 Congratulations! You've completed all modules!
                  </span>
                </div>
                <button
                  onClick={handleViewCertificate}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Get Certificate
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-600 text-sm">
              Complete all module exams to earn your course certificate. You need to score 80% or higher in each exam.
            </p>
          )}
        </div>

        {/* Module Exams Grid */}
        <div className="grid gap-6">
          <h3 className="text-2xl font-bold text-gray-900">Module Exams</h3>
          
          {course.modules.map((module, index) => {
            const progress = getModuleProgress(module.name);
            
            return (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      progress.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {progress.completed ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <span className="font-bold text-lg">{index + 1}</span>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{module.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{module.duration}</span>
                        </span>
                        {progress.completed && (
                          <span className="flex items-center space-x-1 text-green-600">
                            <Award className="w-4 h-4" />
                            <span>Score: {progress.score}%</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {progress.completed ? (
                      <>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          Completed
                        </span>
                        <button
                          onClick={() => handleStartExam(module)}
                          className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                        >
                          Retake Exam
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleStartExam(module)}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                      >
                        Start Exam
                      </button>
                    )}
                  </div>
                </div>
                
                {progress.completed && progress.score < 80 && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-700 text-sm">
                      You scored {progress.score}%. You need 80% to pass. You can retake the exam to improve your score.
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Course Completion Message */}
        {completion.allCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-center text-white"
          >
            <Award className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Course Mastered! 🎓</h3>
            <p className="text-lg mb-4 opacity-90">
              You've successfully completed all modules of {course.title} with flying colors!
            </p>
            <button
              onClick={handleViewCertificate}
              className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              Download Your Certificate
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CourseExam;