// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Timer, ArrowLeft, Award, CheckCircle, AlertCircle } from 'lucide-react';

// // Quiz Questions for each module
// const MODULE_QUIZZES = {
//   "Account Transaction": [
//     {
//       id: 1,
//       question: "What is the primary purpose of a debit entry in banking transactions?",
//       options: [
//         "To increase account balance",
//         "To decrease account balance", 
//         "To record interest earned",
//         "To process loan applications"
//       ],
//       correctAnswer: 1,
//       explanation: "Debit entries decrease account balances in banking transactions, representing money going out of an account.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "Which transaction type typically involves immediate fund transfer?",
//       options: [
//         "Standing order",
//         "Direct debit",
//         "Real-time gross settlement",
//         "Cheque processing"
//       ],
//       correctAnswer: 2,
//       explanation: "Real-time gross settlement (RTGS) involves immediate fund transfer between banks.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Explain the importance of transaction reconciliation in banking operations.",
//       type: "descriptive",
//       explanation: "Transaction reconciliation ensures accuracy between bank records and customer statements.",
//       correctAnswer: "Transaction reconciliation is crucial for ensuring accuracy between bank records and customer statements, detecting discrepancies, preventing fraud, maintaining regulatory compliance, and providing reliable financial reporting."
//     }
//   ],
//   "Anti Money Laundering": [
//     {
//       id: 1,
//       question: "What does AML stand for in banking?",
//       options: [
//         "Automated Money Lending",
//         "Anti Money Laundering", 
//         "Asset Management Liability",
//         "Annual Monetary License"
//       ],
//       correctAnswer: 1,
//       explanation: "AML stands for Anti Money Laundering - procedures to prevent generating income through illegal actions.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2, 
//       question: "What is the primary goal of KYC regulations?",
//       options: [
//         "To know your competition",
//         "To know your customer's identity",
//         "To know your currency",
//         "To know your compliance"
//       ],
//       correctAnswer: 1,
//       explanation: "KYC (Know Your Customer) regulations require banks to verify customer identity to prevent fraud.",
//       type: "multiple_choice"
//     }
//   ],
//   "Retail Banking": [
//     {
//       id: 1,
//       question: "Which product is most common in retail banking?",
//       options: [
//         "Savings Account",
//         "Corporate Loan",
//         "Investment Banking",
//         "Merchant Services"
//       ],
//       correctAnswer: 0,
//       explanation: "Savings accounts are the most common retail banking product.",
//       type: "multiple_choice"
//     }
//   ],
//   "Asset & Liability Management": [
//     {
//       id: 1,
//       question: "What is considered an asset in banking?",
//       options: [
//         "Customer deposits",
//         "Loans given to customers",
//         "Bank's expenses",
//         "Employee salaries"
//       ],
//       correctAnswer: 1,
//       explanation: "Loans given to customers are assets for banks as they generate interest income.",
//       type: "multiple_choice"
//     }
//   ]
// };

// const ModuleQuiz = () => {
//   const { moduleName } = useParams();
//   const navigate = useNavigate();
  
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [descriptiveAnswers, setDescriptiveAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [certificateEligible, setCertificateEligible] = useState(false);

//   // Decode module name and get actual module data
//   const decodedModuleName = decodeURIComponent(moduleName || '');
//   const getActualModuleName = () => {
//     const moduleNames = Object.keys(MODULE_QUIZZES);
//     const matchedModule = moduleNames.find(name => 
//       name.toLowerCase().includes(decodedModuleName.toLowerCase()) || 
//       decodedModuleName.toLowerCase().includes(name.toLowerCase())
//     );
//     return matchedModule || decodedModuleName;
//   };

//   const actualModuleName = getActualModuleName();
//   const quizQuestions = MODULE_QUIZZES[actualModuleName] || [];

//   // Fixed countdown timer effect
//   useEffect(() => {
//     let timer;
//     if (quizStarted && !quizCompleted && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft(time => {
//           if (time <= 1) {
//             handleQuizSubmit();
//             return 0;
//           }
//           return time - 1;
//         });
//       }, 1000);
//     }
    
//     return () => {
//       if (timer) clearInterval(timer);
//     };
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
//       // Scroll to top when changing questions to prevent movement
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
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
//         if (descriptiveAnswers[question.id] && descriptiveAnswers[question.id].trim().length > 20) {
//           correct++;
//         }
//       }
//     });
    
//     const finalScore = totalGradable > 0 ? (correct / totalGradable) * 100 : 0;
//     setScore(finalScore);
//     setQuizCompleted(true);
//     setShowResults(true);
//     setQuizStarted(false);
    
//     if (finalScore >= 80) {
//       setCertificateEligible(true);
//       // Save to localStorage
//       const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
//       completedModules[actualModuleName] = {
//         score: finalScore,
//         date: new Date().toISOString(),
//         passed: true
//       };
//       localStorage.setItem('completedModules', JSON.stringify(completedModules));
//     }
//   };

//   const startQuiz = () => {
//     setQuizStarted(true);
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setSelectedAnswers({});
//     setDescriptiveAnswers({});
//     setTimeLeft(300);
//     setScore(0);
//     setShowResults(false);
//     setCertificateEligible(false);
//     // Scroll to top when starting quiz
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const resetQuiz = () => {
//     setQuizStarted(false);
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setSelectedAnswers({});
//     setDescriptiveAnswers({});
//     setTimeLeft(300);
//     setScore(0);
//     setShowResults(false);
//     setCertificateEligible(false);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (quizQuestions.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
//         <div className="max-w-4xl mx-auto px-4">
//           <button
//             onClick={() => navigate(-1)}
//             className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Module
//           </button>
//           <div className="text-center py-16">
//             <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">No Quiz Available</h2>
//             <p className="text-gray-600 mb-6">No quiz questions found for {actualModuleName}.</p>
//             <button
//               onClick={() => navigate(-1)}
//               className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
//             >
//               Back to Module
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header with Back Button */}
//         <div className="flex items-center justify-between mb-8">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors font-semibold px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             <span>Back to Module</span>
//           </button>
          
//           {quizStarted && !quizCompleted && (
//             <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
//               <Timer className="w-5 h-5 text-red-600" />
//               <span className={`font-semibold text-lg ${
//                 timeLeft < 60 ? 'text-red-600 animate-pulse' : 'text-gray-900'
//               }`}>
//                 {formatTime(timeLeft)}
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Quiz Content */}
//         <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
//           {!quizStarted && !quizCompleted && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center"
//             >
//               <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <Award className="w-10 h-10 text-red-600" />
//               </div>
//               <h2 className="text-3xl font-black text-gray-900 mb-4">{actualModuleName} Quiz</h2>
//               <p className="text-gray-600 mb-6 max-w-md mx-auto">
//                 Test your knowledge with this {quizQuestions.length}-question quiz. You have 5 minutes to complete it. 
//                 Score 80% or higher to earn your certificate.
//               </p>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <div className="text-2xl font-bold text-gray-900">{quizQuestions.length}</div>
//                   <div className="text-sm text-gray-600">Total Questions</div>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <div className="text-2xl font-bold text-gray-900">5:00</div>
//                   <div className="text-sm text-gray-600">Time Limit</div>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <div className="text-2xl font-bold text-gray-900">80%</div>
//                   <div className="text-sm text-gray-600">Passing Score</div>
//                 </div>
//               </div>

//               <div className="mb-6 p-4 bg-blue-50 rounded-lg max-w-md mx-auto">
//                 <h4 className="font-semibold text-blue-900 mb-2">Question Types:</h4>
//                 <div className="flex justify-center gap-4 text-sm">
//                   <span className="flex items-center gap-1">
//                     <div className="w-3 h-3 bg-blue-500 rounded"></div>
//                     Multiple Choice: {quizQuestions.filter(q => q.type === 'multiple_choice').length}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <div className="w-3 h-3 bg-green-500 rounded"></div>
//                     Descriptive: {quizQuestions.filter(q => q.type === 'descriptive').length}
//                   </span>
//                 </div>
//               </div>
              
//               <button
//                 onClick={startQuiz}
//                 className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
//               >
//                 Start Quiz
//               </button>
//             </motion.div>
//           )}

//           {quizStarted && !quizCompleted && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="min-h-[60vh] flex flex-col" // Fixed height container
//             >
//               {/* Quiz Progress */}
//               <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl">
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

//               {/* Current Question - Fixed container to prevent movement */}
//               <div className="flex-1">
//                 <div className="mb-8">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-xl font-bold text-gray-900">
//                       {quizQuestions[currentQuestion].question}
//                     </h3>
//                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                       quizQuestions[currentQuestion].type === "multiple_choice" 
//                         ? "bg-blue-100 text-blue-700" 
//                         : "bg-green-100 text-green-700"
//                     }`}>
//                       {quizQuestions[currentQuestion].type === "multiple_choice" ? "Multiple Choice" : "Descriptive"}
//                     </span>
//                   </div>
                  
//                   {quizQuestions[currentQuestion].type === "multiple_choice" ? (
//                     <div className="space-y-3">
//                       {quizQuestions[currentQuestion].options.map((option, index) => (
//                         <button
//                           key={index}
//                           onClick={() => handleAnswerSelect(quizQuestions[currentQuestion].id, index)}
//                           className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
//                             selectedAnswers[quizQuestions[currentQuestion].id] === index
//                               ? 'border-red-600 bg-red-50 text-red-700'
//                               : 'border-gray-200 hover:border-red-300 hover:bg-red-25'
//                           }`}
//                         >
//                           <div className="flex items-center space-x-3">
//                             <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
//                               selectedAnswers[quizQuestions[currentQuestion].id] === index
//                                 ? 'border-red-600 bg-red-600 text-white'
//                                 : 'border-gray-300'
//                             }`}>
//                               {selectedAnswers[quizQuestions[currentQuestion].id] === index && (
//                                 <div className="w-2 h-2 rounded-full bg-white"></div>
//                               )}
//                             </div>
//                             <span className="font-medium">{option}</span>
//                           </div>
//                         </button>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       <textarea
//                         value={descriptiveAnswers[quizQuestions[currentQuestion].id] || ''}
//                         onChange={(e) => handleDescriptiveAnswer(quizQuestions[currentQuestion].id, e.target.value)}
//                         placeholder="Type your detailed answer here... (Minimum 20 characters recommended)"
//                         className="w-full h-40 p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       />
//                       <div className="text-sm text-gray-500">
//                         Characters: {descriptiveAnswers[quizQuestions[currentQuestion].id]?.length || 0}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Navigation Buttons - Fixed at bottom */}
//               <div className="flex justify-between pt-6 border-t border-gray-200">
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
//                     Submit Quiz
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
//                   <Award className="w-10 h-10 text-green-600" />
//                 ) : (
//                   <AlertCircle className="w-10 h-10 text-red-600" />
//                 )}
//               </div>
              
//               <h2 className="text-3xl font-black text-gray-900 mb-4">Quiz Results</h2>
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
//                     🎉 Congratulations! You've passed the quiz and earned a certificate!
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <button
//                       onClick={() => navigate('/certificates')}
//                       className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//                     >
//                       View Certificate
//                     </button>
//                     <button
//                       onClick={resetQuiz}
//                       className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
//                     >
//                       Retake Quiz
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   <p className="text-red-600 font-semibold">
//                     You need 80% to pass. Keep studying and try again!
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <button
//                       onClick={resetQuiz}
//                       className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//                     >
//                       Retake Quiz
//                     </button>
//                     <button
//                       onClick={() => navigate(-1)}
//                       className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
//                     >
//                       Back to Module
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

// export default ModuleQuiz;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Timer, ArrowLeft, Award, CheckCircle, AlertCircle } from 'lucide-react';

// // Complete Quiz Questions for ALL modules
// const MODULE_QUIZZES = {
//   "Account Transaction": [
//     {
//       id: 1,
//       question: "What is the primary purpose of a debit entry in banking transactions?",
//       options: [
//         "To increase account balance",
//         "To decrease account balance", 
//         "To record interest earned",
//         "To process loan applications"
//       ],
//       correctAnswer: 1,
//       explanation: "Debit entries decrease account balances in banking transactions, representing money going out of an account.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "Which transaction type typically involves immediate fund transfer?",
//       options: [
//         "Standing order",
//         "Direct debit",
//         "Real-time gross settlement",
//         "Cheque processing"
//       ],
//       correctAnswer: 2,
//       explanation: "Real-time gross settlement (RTGS) involves immediate fund transfer between banks.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Explain the importance of transaction reconciliation in banking operations.",
//       type: "descriptive",
//       explanation: "Transaction reconciliation ensures accuracy between bank records and customer statements.",
//       correctAnswer: "Transaction reconciliation is crucial for ensuring accuracy between bank records and customer statements, detecting discrepancies, preventing fraud, maintaining regulatory compliance, and providing reliable financial reporting."
//     },
//     {
//       id: 4,
//       question: "What is the minimum information required for processing a banking transaction?",
//       options: [
//         "Account number and amount only",
//         "Account number, amount, and transaction type",
//         "Account number, amount, transaction type, and beneficiary details",
//         "All customer personal information"
//       ],
//       correctAnswer: 1,
//       explanation: "At minimum, account number, amount, and transaction type are required to process any banking transaction.",
//       type: "multiple_choice"
//     }
//   ],
//   "Anti Money Laundering": [
//     {
//       id: 1,
//       question: "What does AML stand for in banking?",
//       options: [
//         "Automated Money Lending",
//         "Anti Money Laundering", 
//         "Asset Management Liability",
//         "Annual Monetary License"
//       ],
//       correctAnswer: 1,
//       explanation: "AML stands for Anti Money Laundering - procedures to prevent generating income through illegal actions.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2, 
//       question: "What is the primary goal of KYC regulations?",
//       options: [
//         "To know your competition",
//         "To know your customer's identity",
//         "To know your currency",
//         "To know your compliance"
//       ],
//       correctAnswer: 1,
//       explanation: "KYC (Know Your Customer) regulations require banks to verify customer identity to prevent fraud.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Explain the three stages of money laundering and provide examples of suspicious activities at each stage.",
//       type: "descriptive",
//       explanation: "The three stages are Placement (introducing illegal funds), Layering (concealing source), and Integration (making funds appear legitimate).",
//       correctAnswer: "The three stages are: 1) Placement - introducing illegal funds into financial system (e.g., structuring deposits below reporting thresholds), 2) Layering - complex transactions to obscure origin (e.g., multiple international transfers), 3) Integration - making funds appear legitimate (e.g., investing in businesses). Suspicious activities include unusual transaction patterns, inconsistent business activities, and avoidance of reporting requirements."
//     },
//     {
//       id: 4,
//       question: "What is a Suspicious Activity Report (SAR)?",
//       options: [
//         "A report filed by customers",
//         "A report filed by banks for suspicious transactions",
//         "A daily transaction summary",
//         "A loan application form"
//       ],
//       correctAnswer: 1,
//       explanation: "SAR is filed by financial institutions to report suspicious transactions that might indicate money laundering.",
//       type: "multiple_choice"
//     }
//   ],
//   "Retail Banking": [
//     {
//       id: 1,
//       question: "Which product is most common in retail banking?",
//       options: [
//         "Savings Account",
//         "Corporate Loan",
//         "Investment Banking",
//         "Merchant Services"
//       ],
//       correctAnswer: 0,
//       explanation: "Savings accounts are the most common retail banking product, serving individual customers.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "What is the main focus of retail banking?",
//       options: [
//         "Individual customers",
//         "Large corporations",
//         "Government institutions",
//         "International trade"
//       ],
//       correctAnswer: 0,
//       explanation: "Retail banking primarily serves individual customers with personal banking services.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Describe the key differences between retail banking and corporate banking.",
//       type: "descriptive",
//       explanation: "Retail banking serves individuals while corporate banking serves businesses.",
//       correctAnswer: "Retail banking serves individual customers with products like savings accounts, personal loans, and mortgages, focusing on high-volume, standardized services. Corporate banking serves businesses with customized solutions like commercial loans, cash management, and trade finance, dealing with larger transactions and complex financial needs."
//     },
//     {
//       id: 4,
//       question: "Which of the following is a core retail banking service?",
//       options: [
//         "Mergers and acquisitions",
//         "Personal checking accounts",
//         "Corporate bond underwriting",
//         "International trade finance"
//       ],
//       correctAnswer: 1,
//       explanation: "Personal checking accounts are a core retail banking service for individual customers.",
//       type: "multiple_choice"
//     }
//   ],
//   "Asset & Liability Management": [
//     {
//       id: 1,
//       question: "What is considered an asset in banking?",
//       options: [
//         "Customer deposits",
//         "Loans given to customers",
//         "Bank's expenses",
//         "Employee salaries"
//       ],
//       correctAnswer: 1,
//       explanation: "Loans given to customers are assets for banks as they generate interest income.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "Which of the following is a liability for a bank?",
//       options: [
//         "Cash reserves",
//         "Customer deposits",
//         "Property owned",
//         "Investments made"
//       ],
//       correctAnswer: 1,
//       explanation: "Customer deposits are liabilities as the bank owes this money to customers.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Explain the concept of Asset-Liability Management (ALM) and its importance in banking.",
//       type: "descriptive",
//       explanation: "ALM involves managing risks from mismatches between assets and liabilities.",
//       correctAnswer: "Asset-Liability Management involves managing the risks arising from mismatches between assets and liabilities. It's crucial for maintaining liquidity, managing interest rate risk, ensuring profitability, and complying with regulatory requirements while balancing the maturity and rate structures of assets and liabilities."
//     },
//     {
//       id: 4,
//       question: "What is the primary goal of liquidity management in ALM?",
//       options: [
//         "Maximizing shareholder returns",
//         "Ensuring sufficient cash flow for obligations",
//         "Reducing employee costs",
//         "Increasing market share"
//       ],
//       correctAnswer: 1,
//       explanation: "Liquidity management ensures the bank has sufficient cash flow to meet its financial obligations.",
//       type: "multiple_choice"
//     }
//   ],
//   "Asset & Liability Product": [
//     {
//       id: 1,
//       question: "What is the main purpose of liability products for banks?",
//       options: [
//         "To generate fee income",
//         "To raise funds for lending",
//         "To provide advisory services",
//         "To manage investments"
//       ],
//       correctAnswer: 1,
//       explanation: "Liability products like deposits help banks raise funds that can be used for lending activities.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "Which of the following is an example of an asset product?",
//       options: [
//         "Savings account",
//         "Fixed deposit",
//         "Business loan",
//         "Current account"
//       ],
//       correctAnswer: 2,
//       explanation: "Business loans are asset products as they generate interest income for the bank.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Explain how banks manage the maturity transformation between assets and liabilities.",
//       type: "descriptive",
//       explanation: "Maturity transformation involves managing different time horizons.",
//       correctAnswer: "Banks manage maturity transformation by using short-term liabilities (like deposits) to fund longer-term assets (like loans). This involves careful liquidity management, maintaining adequate reserves, and using various financial instruments to match maturities while ensuring the bank can meet withdrawal demands and regulatory requirements."
//     }
//   ],
//   "Borrower Selection": [
//     {
//       id: 1,
//       question: "What is a credit score primarily used for in borrower selection?",
//       options: [
//         "Determining interest rates only",
//         "Assessing creditworthiness and repayment capacity",
//         "Setting loan tenure",
//         "Calculating processing fees"
//       ],
//       correctAnswer: 1,
//       explanation: "Credit scores help assess a borrower's creditworthiness and likelihood of repaying the loan.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "Which factor is NOT typically considered in borrower selection?",
//       options: [
//         "Credit history",
//         "Income stability",
//         "Marital status",
//         "Debt-to-income ratio"
//       ],
//       correctAnswer: 2,
//       explanation: "Marital status is generally not a primary factor in professional borrower selection processes.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Explain the importance of the 5 Cs of credit in borrower selection.",
//       type: "descriptive",
//       explanation: "The 5 Cs provide a comprehensive framework for credit assessment.",
//       correctAnswer: "The 5 Cs of credit are: 1) Character - borrower's reputation and trustworthiness, 2) Capacity - ability to repay based on income and expenses, 3) Capital - borrower's financial investment, 4) Collateral - assets securing the loan, and 5) Conditions - economic and purpose-related factors. Together they provide a holistic assessment of credit risk."
//     }
//   ],
//   "Financial Statement & Ratio Analysis": [
//     {
//       id: 1,
//       question: "What does ROI stand for and what does it measure?",
//       options: [
//         "Return on Investment - profitability efficiency",
//         "Rate of Interest - borrowing cost",
//         "Risk of Inflation - economic impact",
//         "Review of Income - revenue assessment"
//       ],
//       correctAnswer: 0,
//       explanation: "ROI stands for Return on Investment and measures how efficiently investments generate profits.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "Which ratio measures a company's ability to meet short-term obligations?",
//       options: [
//         "Debt-to-equity ratio",
//         "Current ratio",
//         "Net profit margin",
//         "Return on assets"
//       ],
//       correctAnswer: 1,
//       explanation: "The current ratio measures a company's ability to pay short-term obligations with current assets.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Describe how ratio analysis helps in credit decision making.",
//       type: "descriptive",
//       explanation: "Ratio analysis provides quantitative insights for credit assessment.",
//       correctAnswer: "Ratio analysis helps in credit decision making by providing quantitative measures of a company's financial health. It assesses liquidity (ability to meet short-term obligations), solvency (long-term financial stability), profitability (earning capacity), and efficiency (asset utilization). These ratios help lenders identify trends, compare with industry standards, and make informed decisions about credit risk and loan terms."
//     }
//   ],
//   "Working Capital": [
//     {
//       id: 1,
//       question: "Working capital is calculated as:",
//       options: [
//         "Current Assets - Current Liabilities",
//         "Fixed Assets - Long-term Liabilities",
//         "Total Assets - Total Liabilities",
//         "Revenue - Expenses"
//       ],
//       correctAnswer: 0,
//       explanation: "Working capital = Current Assets - Current Liabilities.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "What does negative working capital indicate?",
//       options: [
//         "Excellent financial health",
//         "Potential liquidity problems",
//         "High profitability",
//         "Strong asset base"
//       ],
//       correctAnswer: 1,
//       explanation: "Negative working capital may indicate potential liquidity problems and difficulty meeting short-term obligations.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Explain the importance of working capital management for business operations.",
//       type: "descriptive",
//       explanation: "Working capital management ensures operational efficiency and financial stability.",
//       correctAnswer: "Working capital management is crucial because it ensures a company can meet short-term obligations and continue operations smoothly. Proper management prevents liquidity crises, optimizes cash flow, reduces borrowing costs, maintains good supplier relationships, supports business growth opportunities, and ensures the company can respond to unexpected expenses or opportunities while maintaining efficient use of resources."
//     }
//   ],
//   "Retail Loan": [
//     {
//       id: 1,
//       question: "Which is an example of a retail loan?",
//       options: [
//         "Home Loan",
//         "Corporate Bond",
//         "Commercial Mortgage",
//         "Business Acquisition Loan"
//       ],
//       correctAnswer: 0,
//       explanation: "Home loans are common retail loans provided to individual customers.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "What is the main characteristic of secured retail loans?",
//       options: [
//         "Higher interest rates",
//         "No collateral requirement",
//         "Backed by assets as security",
//         "Shorter repayment periods"
//       ],
//       correctAnswer: 2,
//       explanation: "Secured retail loans are backed by collateral such as property or vehicles.",
//       type: "multiple_choice"
//     },
//     {
//       id: 3,
//       question: "Compare and contrast secured vs unsecured retail loans.",
//       type: "descriptive",
//       explanation: "Secured and unsecured loans have different risk profiles and requirements.",
//       correctAnswer: "Secured loans are backed by collateral (e.g., mortgages secured by property, auto loans secured by vehicles) offering lower interest rates but risk of asset seizure if default occurs. Unsecured loans rely on creditworthiness (e.g., personal loans, credit cards) with higher interest rates but no collateral requirement. Secured loans typically have higher borrowing limits and longer terms, while unsecured loans involve more stringent credit checks and shorter terms."
//     }
//   ],
//   "Digital Banking Fundamentals": [
//     {
//       id: 1,
//       question: "What is the primary advantage of digital banking for customers?",
//       options: [
//         "Higher interest rates",
//         "24/7 accessibility and convenience",
//         "Personalized investment advice",
//         "Lower minimum balance requirements"
//       ],
//       correctAnswer: 1,
//       explanation: "24/7 accessibility and convenience are key advantages of digital banking.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "Which technology is essential for secure digital banking transactions?",
//       options: [
//         "Blockchain",
//         "Encryption",
//         "Artificial Intelligence",
//         "Cloud Computing"
//       ],
//       correctAnswer: 1,
//       explanation: "Encryption is essential for securing digital banking transactions and protecting customer data.",
//       type: "multiple_choice"
//     }
//   ],
//   "Fintech Innovations": [
//     {
//       id: 1,
//       question: "What does 'Fintech' refer to?",
//       options: [
//         "Financial technology innovations",
//         "Fixed income technology",
//         "Foreign investment techniques",
//         "Fund management technology"
//       ],
//       correctAnswer: 0,
//       explanation: "Fintech refers to financial technology innovations that improve financial services.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "Which is an example of a fintech innovation in payments?",
//       options: [
//         "Mobile wallets",
//         "Traditional cheques",
//         "Bank drafts",
//         "Cash transactions"
//       ],
//       correctAnswer: 0,
//       explanation: "Mobile wallets like Apple Pay and Google Pay are fintech innovations in payments.",
//       type: "multiple_choice"
//     }
//   ],
//   "Cybersecurity in Banking": [
//     {
//       id: 1,
//       question: "What is the most common cybersecurity threat in digital banking?",
//       options: [
//         "Phishing attacks",
//         "Hardware failure",
//         "Power outages",
//         "Software updates"
//       ],
//       correctAnswer: 0,
//       explanation: "Phishing attacks are among the most common cybersecurity threats targeting banking customers.",
//       type: "multiple_choice"
//     },
//     {
//       id: 2,
//       question: "Why is multi-factor authentication important in banking security?",
//       options: [
//         "It makes login faster",
//         "It reduces server load",
//         "It adds an extra layer of security",
//         "It increases transaction limits"
//       ],
//       correctAnswer: 2,
//       explanation: "Multi-factor authentication adds an extra layer of security beyond just passwords.",
//       type: "multiple_choice"
//     }
//   ],
//   "Risk Assessment": [
//     {
//       id: 1,
//       question: "What is the primary goal of risk assessment in banking?",
//       options: [
//         "To eliminate all risks",
//         "To identify and mitigate potential losses",
//         "To increase profitability",
//         "To reduce customer service"
//       ],
//       correctAnswer: 1,
//       explanation: "Risk assessment aims to identify and mitigate potential losses while managing acceptable risks.",
//       type: "multiple_choice"
//     }
//   ],
//   "Compliance Framework": [
//     {
//       id: 1,
//       question: "What is the purpose of a compliance framework in banking?",
//       options: [
//         "To maximize profits",
//         "To ensure adherence to laws and regulations",
//         "To reduce employee count",
//         "To increase market share"
//       ],
//       correctAnswer: 1,
//       explanation: "Compliance frameworks ensure banks adhere to relevant laws, regulations, and internal policies.",
//       type: "multiple_choice"
//     }
//   ],
//   "Risk Mitigation": [
//     {
//       id: 1,
//       question: "Which strategy involves transferring risk to another party?",
//       options: [
//         "Risk avoidance",
//         "Risk reduction",
//         "Risk transfer",
//         "Risk acceptance"
//       ],
//       correctAnswer: 2,
//       explanation: "Risk transfer involves shifting risk to another party, such as through insurance.",
//       type: "multiple_choice"
//     }
//   ]
// };

// const ModuleQuiz = () => {
//   const { moduleName } = useParams();
//   const navigate = useNavigate();
  
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [descriptiveAnswers, setDescriptiveAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [certificateEligible, setCertificateEligible] = useState(false);

//   // Decode module name and get actual module data
//   const decodedModuleName = decodeURIComponent(moduleName || '');
//   const getActualModuleName = () => {
//     const moduleNames = Object.keys(MODULE_QUIZZES);
//     const matchedModule = moduleNames.find(name => 
//       name.toLowerCase().includes(decodedModuleName.toLowerCase()) || 
//       decodedModuleName.toLowerCase().includes(name.toLowerCase())
//     );
//     return matchedModule || decodedModuleName;
//   };

//   const actualModuleName = getActualModuleName();
//   const quizQuestions = MODULE_QUIZZES[actualModuleName] || [];

//   // Fixed countdown timer effect
//   useEffect(() => {
//     let timer;
//     if (quizStarted && !quizCompleted && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft(time => {
//           if (time <= 1) {
//             handleQuizSubmit();
//             return 0;
//           }
//           return time - 1;
//         });
//       }, 1000);
//     }
    
//     return () => {
//       if (timer) clearInterval(timer);
//     };
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
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
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
//         if (descriptiveAnswers[question.id] && descriptiveAnswers[question.id].trim().length > 20) {
//           correct++;
//         }
//       }
//     });
    
//     const finalScore = totalGradable > 0 ? (correct / totalGradable) * 100 : 0;
//     setScore(finalScore);
//     setQuizCompleted(true);
//     setShowResults(true);
//     setQuizStarted(false);
    
//     if (finalScore >= 80) {
//       setCertificateEligible(true);
//       const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
//       completedModules[actualModuleName] = {
//         score: finalScore,
//         date: new Date().toISOString(),
//         passed: true
//       };
//       localStorage.setItem('completedModules', JSON.stringify(completedModules));
//     }
//   };


// const handleQuizSubmit = () => {
//   let correct = 0;
//   let totalGradable = 0;
  
//   quizQuestions.forEach(question => {
//     if (question.type === "multiple_choice") {
//       totalGradable++;
//       if (selectedAnswers[question.id] === question.correctAnswer) {
//         correct++;
//       }
//     } else if (question.type === "descriptive") {
//       totalGradable++;
//       if (descriptiveAnswers[question.id] && descriptiveAnswers[question.id].trim().length > 20) {
//         correct++;
//       }
//     }
//   });
  
//   const finalScore = totalGradable > 0 ? (correct / totalGradable) * 100 : 0;
//   setScore(finalScore);
//   setQuizCompleted(true);
//   setShowResults(true);
//   setQuizStarted(false);
  
//   if (finalScore >= 80) {
//     setCertificateEligible(true);
//     const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
//     completedModules[actualModuleName] = {
//       score: finalScore,
//       date: new Date().toISOString(),
//       passed: true
//     };
//     localStorage.setItem('completedModules', JSON.stringify(completedModules));
    
//     // Check if all modules in any course are completed
//     checkCourseCompletion();
//   }
// };

// const checkCourseCompletion = () => {
//   const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
  
//   // Check each course to see if all modules are completed
//   Object.values(COURSES_DATA).forEach(course => {
//     const allModulesCompleted = course.modules.every(module => 
//       completedModules[module.name || module]?.passed
//     );
    
//     if (allModulesCompleted) {
//       // Course completed - you can trigger certificate generation here
//       console.log(`Course ${course.title} completed!`);
//     }
//   });
// };

//   const startQuiz = () => {
//     setQuizStarted(true);
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setSelectedAnswers({});
//     setDescriptiveAnswers({});
//     setTimeLeft(300);
//     setScore(0);
//     setShowResults(false);
//     setCertificateEligible(false);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const resetQuiz = () => {
//     setQuizStarted(false);
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setSelectedAnswers({});
//     setDescriptiveAnswers({});
//     setTimeLeft(300);
//     setScore(0);
//     setShowResults(false);
//     setCertificateEligible(false);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (quizQuestions.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
//         <div className="max-w-4xl mx-auto px-4">
//           <button
//             onClick={() => navigate(-1)}
//             className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Module
//           </button>
//           <div className="text-center py-16">
//             <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">No Quiz Available</h2>
//             <p className="text-gray-600 mb-6">No quiz questions found for {actualModuleName}.</p>
//             <button
//               onClick={() => navigate(-1)}
//               className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
//             >
//               Back to Module
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Rest of the component remains the same...
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header with Back Button */}
//         <div className="flex items-center justify-between mb-8">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors font-semibold px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             <span>Back to Module</span>
//           </button>
          
//           {quizStarted && !quizCompleted && (
//             <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
//               <Timer className="w-5 h-5 text-red-600" />
//               <span className={`font-semibold text-lg ${
//                 timeLeft < 60 ? 'text-red-600 animate-pulse' : 'text-gray-900'
//               }`}>
//                 {formatTime(timeLeft)}
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Quiz Content */}
//         <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
//           {!quizStarted && !quizCompleted && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center"
//             >
//               <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <Award className="w-10 h-10 text-red-600" />
//               </div>
//               <h2 className="text-3xl font-black text-gray-900 mb-4">{actualModuleName} Quiz</h2>
//               <p className="text-gray-600 mb-6 max-w-md mx-auto">
//                 Test your knowledge with this {quizQuestions.length}-question quiz. You have 5 minutes to complete it. 
//                 Score 80% or higher to earn your certificate.
//               </p>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <div className="text-2xl font-bold text-gray-900">{quizQuestions.length}</div>
//                   <div className="text-sm text-gray-600">Total Questions</div>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <div className="text-2xl font-bold text-gray-900">5:00</div>
//                   <div className="text-sm text-gray-600">Time Limit</div>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <div className="text-2xl font-bold text-gray-900">80%</div>
//                   <div className="text-sm text-gray-600">Passing Score</div>
//                 </div>
//               </div>

//               <div className="mb-6 p-4 bg-blue-50 rounded-lg max-w-md mx-auto">
//                 <h4 className="font-semibold text-blue-900 mb-2">Question Types:</h4>
//                 <div className="flex justify-center gap-4 text-sm">
//                   <span className="flex items-center gap-1">
//                     <div className="w-3 h-3 bg-blue-500 rounded"></div>
//                     Multiple Choice: {quizQuestions.filter(q => q.type === 'multiple_choice').length}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <div className="w-3 h-3 bg-green-500 rounded"></div>
//                     Descriptive: {quizQuestions.filter(q => q.type === 'descriptive').length}
//                   </span>
//                 </div>
//               </div>
              
//               <button
//                 onClick={startQuiz}
//                 className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
//               >
//                 Start Quiz
//               </button>
//             </motion.div>
//           )}

//           {/* Quiz in progress and results sections remain the same */}
//           {quizStarted && !quizCompleted && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="min-h-[60vh] flex flex-col"
//             >
//               {/* Quiz Progress */}
//               <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl">
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
//               <div className="flex-1">
//                 <div className="mb-8">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-xl font-bold text-gray-900">
//                       {quizQuestions[currentQuestion].question}
//                     </h3>
//                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                       quizQuestions[currentQuestion].type === "multiple_choice" 
//                         ? "bg-blue-100 text-blue-700" 
//                         : "bg-green-100 text-green-700"
//                     }`}>
//                       {quizQuestions[currentQuestion].type === "multiple_choice" ? "Multiple Choice" : "Descriptive"}
//                     </span>
//                   </div>
                  
//                   {quizQuestions[currentQuestion].type === "multiple_choice" ? (
//                     <div className="space-y-3">
//                       {quizQuestions[currentQuestion].options.map((option, index) => (
//                         <button
//                           key={index}
//                           onClick={() => handleAnswerSelect(quizQuestions[currentQuestion].id, index)}
//                           className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
//                             selectedAnswers[quizQuestions[currentQuestion].id] === index
//                               ? 'border-red-600 bg-red-50 text-red-700'
//                               : 'border-gray-200 hover:border-red-300 hover:bg-red-25'
//                           }`}
//                         >
//                           <div className="flex items-center space-x-3">
//                             <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
//                               selectedAnswers[quizQuestions[currentQuestion].id] === index
//                                 ? 'border-red-600 bg-red-600 text-white'
//                                 : 'border-gray-300'
//                             }`}>
//                               {selectedAnswers[quizQuestions[currentQuestion].id] === index && (
//                                 <div className="w-2 h-2 rounded-full bg-white"></div>
//                               )}
//                             </div>
//                             <span className="font-medium">{option}</span>
//                           </div>
//                         </button>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       <textarea
//                         value={descriptiveAnswers[quizQuestions[currentQuestion].id] || ''}
//                         onChange={(e) => handleDescriptiveAnswer(quizQuestions[currentQuestion].id, e.target.value)}
//                         placeholder="Type your detailed answer here... (Minimum 20 characters recommended)"
//                         className="w-full h-40 p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                       />
//                       <div className="text-sm text-gray-500">
//                         Characters: {descriptiveAnswers[quizQuestions[currentQuestion].id]?.length || 0}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Navigation Buttons */}
//               <div className="flex justify-between pt-6 border-t border-gray-200">
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
//                     Submit Quiz
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
//                   <Award className="w-10 h-10 text-green-600" />
//                 ) : (
//                   <AlertCircle className="w-10 h-10 text-red-600" />
//                 )}
//               </div>
              
//               <h2 className="text-3xl font-black text-gray-900 mb-4">Quiz Results</h2>
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
//                     🎉 Congratulations! You've passed the quiz and earned a certificate!
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <button
//                       onClick={() => navigate('/certificates')}
//                       className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//                     >
//                       View Certificate
//                     </button>
//                     <button
//                       onClick={resetQuiz}
//                       className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
//                     >
//                       Retake Quiz
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   <p className="text-red-600 font-semibold">
//                     You need 80% to pass. Keep studying and try again!
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <button
//                       onClick={resetQuiz}
//                       className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
//                     >
//                       Retake Quiz
//                     </button>
//                     <button
//                       onClick={() => navigate(-1)}
//                       className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
//                     >
//                       Back to Module
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

// export default ModuleQuiz;




import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Timer, ArrowLeft, Award, CheckCircle, AlertCircle, X, ChevronDown, ChevronUp } from 'lucide-react';

// Complete Quiz Questions for ALL modules (same as before)
const MODULE_QUIZZES = {
  "Account Transaction": [
    {
      id: 1,
      question: "What is the primary purpose of a debit entry in banking transactions?",
      options: [
        "To increase account balance",
        "To decrease account balance", 
        "To record interest earned",
        "To process loan applications"
      ],
      correctAnswer: 1,
      explanation: "Debit entries decrease account balances in banking transactions, representing money going out of an account.",
      type: "multiple_choice"
    },
    {
      id: 2,
      question: "Which transaction type typically involves immediate fund transfer?",
      options: [
        "Standing order",
        "Direct debit",
        "Real-time gross settlement",
        "Cheque processing"
      ],
      correctAnswer: 2,
      explanation: "Real-time gross settlement (RTGS) involves immediate fund transfer between banks.",
      type: "multiple_choice"
    },
    {
      id: 3,
      question: "Explain the importance of transaction reconciliation in banking operations.",
      type: "descriptive",
      explanation: "Transaction reconciliation ensures accuracy between bank records and customer statements.",
      correctAnswer: "Transaction reconciliation is crucial for ensuring accuracy between bank records and customer statements, detecting discrepancies, preventing fraud, maintaining regulatory compliance, and providing reliable financial reporting."
    },
    {
      id: 4,
      question: "What is the minimum information required for processing a banking transaction?",
      options: [
        "Account number and amount only",
        "Account number, amount, and transaction type",
        "Account number, amount, transaction type, and beneficiary details",
        "All customer personal information"
      ],
      correctAnswer: 1,
      explanation: "At minimum, account number, amount, and transaction type are required to process any banking transaction.",
      type: "multiple_choice"
    }
  ],
  // ... (other modules remain the same)
};

const ModuleQuiz = () => {
  const { moduleName } = useParams();
  const navigate = useNavigate();
  
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [descriptiveAnswers, setDescriptiveAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [certificateEligible, setCertificateEligible] = useState(false);
  const [showAnswerReview, setShowAnswerReview] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState({});

  // Decode module name and get actual module data
  const decodedModuleName = decodeURIComponent(moduleName || '');
  const getActualModuleName = () => {
    const moduleNames = Object.keys(MODULE_QUIZZES);
    const matchedModule = moduleNames.find(name => 
      name.toLowerCase().includes(decodedModuleName.toLowerCase()) || 
      decodedModuleName.toLowerCase().includes(name.toLowerCase())
    );
    return matchedModule || decodedModuleName;
  };

  const actualModuleName = getActualModuleName();
  const quizQuestions = MODULE_QUIZZES[actualModuleName] || [];

  // Countdown timer effect
  useEffect(() => {
    let timer;
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            handleQuizSubmit();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [quizStarted, quizCompleted, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleDescriptiveAnswer = (questionId, answer) => {
    setDescriptiveAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleQuestionExpansion = (questionId) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const isAnswerCorrect = (question) => {
    if (question.type === "multiple_choice") {
      return selectedAnswers[question.id] === question.correctAnswer;
    } else if (question.type === "descriptive") {
      return descriptiveAnswers[question.id] && descriptiveAnswers[question.id].trim().length > 20;
    }
    return false;
  };

  const handleQuizSubmit = () => {
    let correct = 0;
    let totalGradable = 0;
    
    quizQuestions.forEach(question => {
      if (question.type === "multiple_choice") {
        totalGradable++;
        if (selectedAnswers[question.id] === question.correctAnswer) {
          correct++;
        }
      } else if (question.type === "descriptive") {
        totalGradable++;
        if (descriptiveAnswers[question.id] && descriptiveAnswers[question.id].trim().length > 20) {
          correct++;
        }
      }
    });
    
    const finalScore = totalGradable > 0 ? (correct / totalGradable) * 100 : 0;
    setScore(finalScore);
    setQuizCompleted(true);
    setShowResults(true);
    setQuizStarted(false);
    
    if (finalScore >= 80) {
      setCertificateEligible(true);
      const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
      completedModules[actualModuleName] = {
        score: finalScore,
        date: new Date().toISOString(),
        passed: true
      };
      localStorage.setItem('completedModules', JSON.stringify(completedModules));
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setDescriptiveAnswers({});
    setTimeLeft(300);
    setScore(0);
    setShowResults(false);
    setCertificateEligible(false);
    setShowAnswerReview(false);
    setExpandedQuestions({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setDescriptiveAnswers({});
    setTimeLeft(300);
    setScore(0);
    setShowResults(false);
    setCertificateEligible(false);
    setShowAnswerReview(false);
    setExpandedQuestions({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to render answer review section
  const renderAnswerReview = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-200"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Answer Review</h3>
        <button
          onClick={() => setShowAnswerReview(false)}
          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-6">
        {quizQuestions.map((question, index) => (
          <div key={question.id} className="bg-white rounded-xl p-6 border border-gray-200">
            {/* Question Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${
                  isAnswerCorrect(question) ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {isAnswerCorrect(question) ? <CheckCircle className="w-4 h-4" /> : <X className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Question {index + 1}: {question.question}
                  </h4>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      question.type === "multiple_choice" 
                        ? "bg-blue-100 text-blue-700" 
                        : "bg-green-100 text-green-700"
                    }`}>
                      {question.type === "multiple_choice" ? "Multiple Choice" : "Descriptive"}
                    </span>
                    <span className="text-sm text-gray-600">
                      {isAnswerCorrect(question) ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                  </div>
                </div>
              </div>
              {/* <button
                onClick={() => toggleQuestionExpansion(question.id)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {expandedQuestions[question.id] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button> */}
            </div>

            {/* Expanded Content */}
            {expandedQuestions[question.id] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 space-y-4 border-t border-gray-200 pt-4"
              >
                {/* User's Answer */}
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Your Answer:</h5>
                  {question.type === "multiple_choice" ? (
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          isAnswerCorrect(question) ? 'border-green-500 bg-green-500 text-white' : 'border-red-500 bg-red-500 text-white'
                        }`}>
                          {!isAnswerCorrect(question) && <X className="w-3 h-3" />}
                        </div>
                        <span className={isAnswerCorrect(question) ? 'text-green-700 font-medium' : 'text-red-700 font-medium'}>
                          {question.options[selectedAnswers[question.id]] || 'No answer provided'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className={isAnswerCorrect(question) ? 'text-green-700' : 'text-red-700'}>
                        {descriptiveAnswers[question.id] || 'No answer provided'}
                      </p>
                      {!isAnswerCorrect(question) && (
                        <p className="text-sm text-red-600 mt-2">
                          ⚠️ Your answer was too short or incomplete
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Correct Answer */}
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Correct Answer:</h5>
                  {question.type === "multiple_choice" ? (
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-green-700 font-medium">
                          {question.options[question.correctAnswer]}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <p className="text-green-700">{question.correctAnswer}</p>
                    </div>
                  )}
                </div>

                {/* Explanation */}
                {question.explanation && (
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Explanation:</h5>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <p className="text-blue-700">{question.explanation}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Statistics */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-gray-900">{quizQuestions.length}</div>
          <div className="text-sm text-gray-600">Total Questions</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-green-600">
            {quizQuestions.filter(isAnswerCorrect).length}
          </div>
          <div className="text-sm text-gray-600">Correct Answers</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-red-600">
            {quizQuestions.length - quizQuestions.filter(isAnswerCorrect).length}
          </div>
          <div className="text-sm text-gray-600">Incorrect Answers</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {score.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-600">Final Score</div>
        </div>
      </div>
    </motion.div>
  );

  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Module
          </button>
          <div className="text-center py-16">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Quiz Available</h2>
            <p className="text-gray-600 mb-6">No quiz questions found for {actualModuleName}.</p>
            <button
              onClick={() => navigate(-1)}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Back to Module
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors font-semibold px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Module</span>
          </button>
          
          {quizStarted && !quizCompleted && (
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <Timer className="w-5 h-5 text-red-600" />
              <span className={`font-semibold text-lg ${
                timeLeft < 60 ? 'text-red-600 animate-pulse' : 'text-gray-900'
              }`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          )}
        </div>

        {/* Quiz Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          {!quizStarted && !quizCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">{actualModuleName} Quiz</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Test your knowledge with this {quizQuestions.length}-question quiz. You have 5 minutes to complete it. 
                Score 80% or higher to earn your certificate.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">{quizQuestions.length}</div>
                  <div className="text-sm text-gray-600">Total Questions</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">5:00</div>
                  <div className="text-sm text-gray-600">Time Limit</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">80%</div>
                  <div className="text-sm text-gray-600">Passing Score</div>
                </div>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg max-w-md mx-auto">
                <h4 className="font-semibold text-blue-900 mb-2">Question Types:</h4>
                <div className="flex justify-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    Multiple Choice: {quizQuestions.filter(q => q.type === 'multiple_choice').length}
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    Descriptive: {quizQuestions.filter(q => q.type === 'descriptive').length}
                  </span>
                </div>
              </div>
              
              <button
                onClick={startQuiz}
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Start Quiz
              </button>
            </motion.div>
          )}

          {quizStarted && !quizCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="min-h-[60vh] flex flex-col"
            >
              {/* Quiz Progress */}
              <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl">
                <div className="text-sm text-gray-600">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Current Question */}
              <div className="flex-1">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {quizQuestions[currentQuestion].question}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      quizQuestions[currentQuestion].type === "multiple_choice" 
                        ? "bg-blue-100 text-blue-700" 
                        : "bg-green-100 text-green-700"
                    }`}>
                      {quizQuestions[currentQuestion].type === "multiple_choice" ? "Multiple Choice" : "Descriptive"}
                    </span>
                  </div>
                  
                  {quizQuestions[currentQuestion].type === "multiple_choice" ? (
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(quizQuestions[currentQuestion].id, index)}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                            selectedAnswers[quizQuestions[currentQuestion].id] === index
                              ? 'border-red-600 bg-red-50 text-red-700'
                              : 'border-gray-200 hover:border-red-300 hover:bg-red-25'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedAnswers[quizQuestions[currentQuestion].id] === index
                                ? 'border-red-600 bg-red-600 text-white'
                                : 'border-gray-300'
                            }`}>
                              {selectedAnswers[quizQuestions[currentQuestion].id] === index && (
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                              )}
                            </div>
                            <span className="font-medium">{option}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <textarea
                        value={descriptiveAnswers[quizQuestions[currentQuestion].id] || ''}
                        onChange={(e) => handleDescriptiveAnswer(quizQuestions[currentQuestion].id, e.target.value)}
                        placeholder="Type your detailed answer here... (Minimum 20 characters recommended)"
                        className="w-full h-40 p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <div className="text-sm text-gray-500">
                        Characters: {descriptiveAnswers[quizQuestions[currentQuestion].id]?.length || 0}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t border-gray-200">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestion === 0}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentQuestion === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Previous
                </button>
                
                {currentQuestion === quizQuestions.length - 1 ? (
                  <button
                    onClick={handleQuizSubmit}
                    className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                  >
                    Submit Quiz
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                  >
                    Next Question
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                certificateEligible ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {certificateEligible ? (
                  <Award className="w-10 h-10 text-green-600" />
                ) : (
                  <AlertCircle className="w-10 h-10 text-red-600" />
                )}
              </div>
              
              <h2 className="text-3xl font-black text-gray-900 mb-4">Quiz Results</h2>
              <div className={`text-5xl font-black mb-4 ${
                certificateEligible ? 'text-green-600' : 'text-red-600'
              }`}>
                {score.toFixed(1)}%
              </div>
              
              <p className="text-gray-600 mb-6">
                You answered {Math.round((score / 100) * quizQuestions.length)} out of {quizQuestions.length} questions correctly.
              </p>

              {/* Review Answers Button */}
              {!showAnswerReview && (
                <button
                  onClick={() => setShowAnswerReview(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors mb-6"
                >
                  Review Answers & Explanations
                </button>
              )}
              
              {certificateEligible ? (
                <div className="space-y-4">
                  <p className="text-green-600 font-semibold text-lg">
                    🎉 Congratulations! You've passed the quiz and earned a certificate!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => navigate('/certificates')}
                      className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                    >
                      View Certificate
                    </button>
                    <button
                      onClick={resetQuiz}
                      className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
                    >
                      Retake Quiz
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-red-600 font-semibold">
                    You need 80% to pass. Keep studying and try again!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={resetQuiz}
                      className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                    >
                      Retake Quiz
                    </button>
                    <button
                      onClick={() => navigate(-1)}
                      className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
                    >
                      Back to Module
                    </button>
                  </div>
                </div>
              )}

              {/* Answer Review Section */}
              {showAnswerReview && renderAnswerReview()}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleQuiz;