import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Timer, ArrowLeft, Award, CheckCircle, AlertCircle, Clock } from 'lucide-react';

// Enhanced Quiz Questions for each module
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
      question: "Explain the importance of transaction reconciliation in banking operations and provide an example of how discrepancies might occur.",
      type: "descriptive",
      explanation: "Transaction reconciliation ensures accuracy between bank records and customer statements, detects fraud, maintains compliance, and provides reliable financial reporting.",
      correctAnswer: "Transaction reconciliation is crucial for ensuring accuracy between bank records and customer statements, detecting discrepancies, preventing fraud, maintaining regulatory compliance, and providing reliable financial reporting. Example discrepancies include timing differences in cheque clearing, data entry errors, or unauthorized transactions."
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
    },
    {
      id: 5,
      question: "Describe the different types of electronic funds transfer systems used in modern banking.",
      type: "descriptive",
      explanation: "Electronic funds transfer systems include RTGS for large real-time transfers, NEFT for batch processing, IMPS for instant mobile transfers, and SWIFT for international transactions.",
      correctAnswer: "Modern banking uses various EFT systems: 1) RTGS for large-value real-time settlements, 2) NEFT for batch-based electronic transfers, 3) IMPS for instant mobile payments, 4) SWIFT for cross-border transactions, and 5) ACH for bulk processing of debit/credit transactions."
    }
  ],
  "Anti Money Laundering": [
    {
      id: 1,
      question: "What does AML stand for in banking?",
      options: [
        "Automated Money Lending",
        "Anti Money Laundering", 
        "Asset Management Liability",
        "Annual Monetary License"
      ],
      correctAnswer: 1,
      explanation: "AML stands for Anti Money Laundering - procedures to prevent generating income through illegal actions.",
      type: "multiple_choice"
    },
    {
      id: 2, 
      question: "What is the primary goal of KYC regulations?",
      options: [
        "To know your competition",
        "To know your customer's identity",
        "To know your currency",
        "To know your compliance"
      ],
      correctAnswer: 1,
      explanation: "KYC (Know Your Customer) regulations require banks to verify customer identity to prevent fraud.",
      type: "multiple_choice"
    },
    {
      id: 3,
      question: "Explain the three stages of money laundering and provide examples of suspicious activities at each stage.",
      type: "descriptive",
      explanation: "The three stages are Placement (introducing illegal funds), Layering (concealing source), and Integration (making funds appear legitimate).",
      correctAnswer: "The three stages are: 1) Placement - introducing illegal funds into financial system (e.g., structuring deposits below reporting thresholds), 2) Layering - complex transactions to obscure origin (e.g., multiple international transfers), 3) Integration - making funds appear legitimate (e.g., investing in businesses). Suspicious activities include unusual transaction patterns, inconsistent business activities, and avoidance of reporting requirements."
    }
  ],
  "Retail Banking": [
    {
      id: 1,
      question: "Which product is most common in retail banking?",
      options: [
        "Savings Account",
        "Corporate Loan",
        "Investment Banking",
        "Merchant Services"
      ],
      correctAnswer: 0,
      explanation: "Savings accounts are the most common retail banking product, serving individual customers.",
      type: "multiple_choice"
    },
    {
      id: 2,
      question: "What is the main focus of retail banking?",
      options: [
        "Individual customers",
        "Large corporations",
        "Government institutions",
        "International trade"
      ],
      correctAnswer: 0,
      explanation: "Retail banking primarily serves individual customers with personal banking services.",
      type: "multiple_choice"
    }
  ],
  "Asset & Liability Management": [
    {
      id: 1,
      question: "What is considered an asset in banking?",
      options: [
        "Customer deposits",
        "Loans given to customers",
        "Bank's expenses",
        "Employee salaries"
      ],
      correctAnswer: 1,
      explanation: "Loans given to customers are assets for banks as they generate interest income.",
      type: "multiple_choice"
    },
    {
      id: 2,
      question: "Which of the following is a liability for a bank?",
      options: [
        "Cash reserves",
        "Customer deposits",
        "Property owned",
        "Investments made"
      ],
      correctAnswer: 1,
      explanation: "Customer deposits are liabilities as the bank owes this money to customers.",
      type: "multiple_choice"
    }
  ]
};

const ModuleExam = () => {
  const { moduleName } = useParams();
  const navigate = useNavigate();
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [descriptiveAnswers, setDescriptiveAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [certificateEligible, setCertificateEligible] = useState(false);

  const decodedModuleName = decodeURIComponent(moduleName || '');
  const quizQuestions = MODULE_QUIZZES[decodedModuleName] || [];

  // Countdown timer effect
  useEffect(() => {
    let timer;
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            clearInterval(timer);
            handleQuizSubmit();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(timer);
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
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
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
        // For descriptive questions, count as correct if answered (in real app, would need manual grading)
        if (descriptiveAnswers[question.id] && descriptiveAnswers[question.id].trim().length > 10) {
          correct++;
        }
      }
    });
    
    const finalScore = totalGradable > 0 ? (correct / totalGradable) * 100 : 0;
    setScore(finalScore);
    setQuizCompleted(true);
    setShowResults(true);
    setQuizStarted(false);
    
    // Check if certificate is eligible (80% or higher)
    if (finalScore >= 80) {
      setCertificateEligible(true);
      
      // Mark this module as completed
      const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
      completedModules[decodedModuleName] = true;
      localStorage.setItem('completedModules', JSON.stringify(completedModules));
      
      // Check if all modules are completed for course certificate
      checkCourseCompletion();
    }
  };

  const checkCourseCompletion = () => {
    const completedModules = JSON.parse(localStorage.getItem('completedModules') || '{}');
    const allModules = Object.keys(MODULE_QUIZZES);
    const allCompleted = allModules.every(module => completedModules[module]);
    
    if (allCompleted) {
      localStorage.setItem('fullCourseCompleted', 'true');
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setDescriptiveAnswers({});
    setTimeLeft(600);
    setScore(0);
    setShowResults(false);
    setCertificateEligible(false);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setDescriptiveAnswers({});
    setTimeLeft(600);
    setScore(0);
    setShowResults(false);
    setCertificateEligible(false);
  };

  const navigateToCertificate = () => {
    navigate('/certificates', { 
      state: { 
        moduleName: decodedModuleName, 
        score: score,
        certificateEligible: certificateEligible 
      } 
    });
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            ← Back
          </button>
          <div className="text-center py-16">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Quiz Available</h2>
            <p className="text-gray-600 mb-6">No quiz questions found for {decodedModuleName}.</p>
            <button
              onClick={() => navigate('/exam')}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Back to Exam List
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Module
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {!quizStarted && !quizCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">{decodedModuleName} Quiz</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Test your knowledge with this {quizQuestions.length}-question quiz. You have 10 minutes to complete it. 
                Score 80% or higher to earn your certificate.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">{quizQuestions.length}</div>
                  <div className="text-sm text-gray-600">Total Questions</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">10:00</div>
                  <div className="text-sm text-gray-600">Time Limit</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">80%</div>
                  <div className="text-sm text-gray-600">Passing Score</div>
                </div>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
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
            >
              {/* Quiz Header */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8 p-4 bg-gray-50 rounded-xl gap-4">
                <div className="flex items-center space-x-2">
                  <Timer className="w-5 h-5 text-red-600" />
                  <span className={`font-semibold text-lg ${
                    timeLeft < 60 ? 'text-red-600 animate-pulse' : 'text-gray-900'
                  }`}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
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
                      placeholder="Type your detailed answer here... (Minimum 50 characters recommended)"
                      className="w-full h-40 p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <div className="text-sm text-gray-500">
                      Characters: {descriptiveAnswers[quizQuestions[currentQuestion].id]?.length || 0}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
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
              
              {certificateEligible ? (
                <div className="space-y-4">
                  <p className="text-green-600 font-semibold text-lg">
                    🎉 Congratulations! You've passed the quiz and earned a certificate!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={navigateToCertificate}
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
                  <button
                    onClick={resetQuiz}
                    className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleExam;