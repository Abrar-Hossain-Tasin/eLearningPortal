// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const COURSES = {
//   "Basic of Banking": {
//     modules: ['Account Transaction','Anti Money Laundering','Retail Banking','Asset & Liability Product'],
//     questions: {
//       'Account Transaction': [
//         { q: "What is a debit entry?", options:["Increase","Decrease"], answer: "Decrease" },
//         { q: "What is a credit entry?", options:["Increase","Decrease"], answer: "Increase" }
//       ],
//       'Anti Money Laundering': [
//         { q: "What is AML?", options:["Law","Procedure"], answer: "Procedure" }
//       ],
//       'Retail Banking': [
//         { q: "Which product is common in retail banking?", options:["Savings Account","Corporate Loan"], answer: "Savings Account" }
//       ],
//       'Asset & Liability Product': [
//         { q: "What is an asset?", options:["Liability","Resource"], answer: "Resource" }
//       ]
//     }
//   },
//   "Basic of Credit": {
//     modules: ['Borrower Selection','Financial Statement & Ratio Analysis','Working Capital','Retail Loan'],
//     questions: {
//       'Borrower Selection': [{ q:"What is credit score?", options:["Number","Text"], answer:"Number" }],
//       'Financial Statement & Ratio Analysis': [{ q:"What is ROI?", options:["Return","Rate"], answer:"Return" }],
//       'Working Capital': [{ q:"Working capital = ?", options:["Assets-Liabilities","Liabilities-Assets"], answer:"Assets-Liabilities" }],
//       'Retail Loan': [{ q:"Which is a retail loan?", options:["Home Loan","Corporate Loan"], answer:"Home Loan" }]
//     }
//   }
// };

// const Exam = () => {
//   const { moduleName } = useParams();
//   const navigate = useNavigate();
//   const [submitted, setSubmitted] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState({}); 
  
//   let moduleQuestions = [];
//   let courseTitle = "";

//   if (moduleName) {
//     Object.entries(COURSES).forEach(([course, courseData]) => {
//       if (courseData.modules.includes(moduleName)) {
//         moduleQuestions = courseData.questions[moduleName] || [];
//         courseTitle = course;
//       }
//     });
//   }

//   const handleOptionChange = (qIndex, value) => {
//     setSelectedOptions(prev => ({ ...prev, [qIndex]: value }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {moduleName ? (
//           <>
//             <button
//               onClick={() => navigate(-1)}
//               className="mb-6 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
//             >
//               ← Back
//             </button>
            
//             <div className="bg-white rounded-2xl shadow-lg p-8">
//               <h2 className="text-2xl font-bold text-slate-900 mb-2">{moduleName} Exam</h2>
//               <h3 className="text-lg mb-6 text-slate-600">Course: {courseTitle}</h3>

//               {moduleQuestions.map((q, i) => (
//                 <div key={i} className="mb-6 p-4 border border-slate-200 rounded-lg bg-slate-50">
//                   <div className="font-medium text-slate-900 mb-3">
//                     {i + 1}. {q.q}
//                   </div>
//                   <div className="space-y-2">
//                     {q.options.map((opt, j) => (
//                       <label key={j} className="flex items-center space-x-3 cursor-pointer">
//                         <input
//                           type="radio"
//                           name={`q${i}`}
//                           value={opt}
//                           disabled={submitted}
//                           checked={selectedOptions[i] === opt}
//                           onChange={() => handleOptionChange(i, opt)}
//                           className="w-4 h-4 text-red-600 focus:ring-red-500"
//                         />
//                         <span className="text-slate-700">{opt}</span>
//                       </label>
//                     ))}
//                   </div>

//                   {submitted && (
//                     <div
//                       className={`mt-3 font-medium ${
//                         selectedOptions[i] === q.answer
//                           ? "text-green-600"
//                           : "text-red-600"
//                       }`}
//                     >
//                       Correct Answer: {q.answer}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {!submitted ? (
//                 <button
//                   onClick={() => setSubmitted(true)}
//                   className="w-full bg-gradient-to-r from-red-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
//                 >
//                   Submit Exam
//                 </button>
//               ) : (
//                 <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
//                   <div className="font-bold text-green-700 text-center">
//                     You answered{' '}
//                     {
//                       Object.keys(selectedOptions).filter(
//                         (idx) => selectedOptions[idx] === moduleQuestions[idx].answer
//                       ).length
//                     }{' '}
//                     out of {moduleQuestions.length} correctly.
//                   </div>
//                 </div>
//               )}
//             </div>
//           </>
//         ) : (
//           <div className="space-y-8">
//             {Object.keys(COURSES).map((courseName, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl shadow-lg p-6"
//               >
//                 <h2 className="text-xl font-bold mb-4">{courseName}</h2>
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full border border-slate-300 rounded-lg">
//                     <thead className="bg-slate-100">
//                       <tr>
//                         <th className="border border-slate-300 py-3 px-4 text-left">#</th>
//                         <th className="border border-slate-300 py-3 px-4 text-left">Module Name</th>
//                         <th className="border border-slate-300 py-3 px-4 text-center">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {COURSES[courseName].modules.map((mod, idx) => (
//                         <tr
//                           key={idx}
//                           className="odd:bg-white even:bg-slate-50 hover:bg-slate-100 transition-colors"
//                         >
//                           <td className="border border-slate-300 py-3 px-4 text-center">{idx + 1}</td>
//                           <td className="border border-slate-300 py-3 px-4">{mod}</td>
//                           <td className="border border-slate-300 py-3 px-4 text-center">
//                             <button
//                               className="bg-gradient-to-r from-red-600 to-green-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
//                               onClick={() => navigate(`/exam/${mod}`)}
//                             >
//                               Start Exam
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Exam;


// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const COURSES = {
//   "Basic of Banking": {
//     modules: ['Account Transaction','Anti Money Laundering','Retail Banking','Asset & Liability Product'],
//     questions: {
//       'Account Transaction': [
//         { 
//           q: "What is a debit entry?", 
//           options: ["Increase account balance", "Decrease account balance", "No effect on balance", "Record transaction only"], 
//           answer: "Decrease account balance",
//           type: "multiple_choice"
//         },
//         { 
//           q: "What is a credit entry?", 
//           options: ["Increase account balance", "Decrease account balance", "Freeze account", "Close account"], 
//           answer: "Increase account balance",
//           type: "multiple_choice"
//         },
//         { 
//           q: "Explain the importance of transaction reconciliation in banking operations.", 
//           type: "descriptive",
//           answer: "Transaction reconciliation is crucial for ensuring accuracy between bank records and customer statements, detecting discrepancies, preventing fraud, maintaining regulatory compliance, and providing reliable financial reporting."
//         },
//         { 
//           q: "Describe the different types of banking transactions and their processing methods.", 
//           type: "descriptive",
//           answer: "Banking transactions include cash deposits/withdrawals, cheque processing, electronic funds transfers, wire transfers, and card transactions. Processing methods vary from manual processing for cheques to real-time electronic processing for digital transactions, each with specific verification and settlement procedures."
//         }
//       ],
//       'Anti Money Laundering': [
//         { 
//           q: "What does AML stand for?", 
//           options: ["Automated Money Lending", "Anti Money Laundering", "Asset Management Liability", "Annual Monetary License"], 
//           answer: "Anti Money Laundering",
//           type: "multiple_choice"
//         },
//         { 
//           q: "What is the primary purpose of KYC regulations?", 
//           options: ["Know Your Competition", "Know Your Customer's identity", "Know Your Currency", "Know Your Compliance"], 
//           answer: "Know Your Customer's identity",
//           type: "multiple_choice"
//         },
//         { 
//           q: "Explain the three stages of money laundering and provide examples of each.", 
//           type: "descriptive",
//           answer: "The three stages are: 1) Placement - introducing illegal funds into financial system (e.g., cash deposits), 2) Layering - complex transactions to obscure origin (e.g., multiple transfers between accounts), 3) Integration - making funds appear legitimate (e.g., investing in real estate)."
//         }
//       ],
//       'Retail Banking': [
//         { 
//           q: "Which product is most common in retail banking?", 
//           options: ["Savings Account", "Corporate Loan", "Investment Banking", "Merchant Services"], 
//           answer: "Savings Account",
//           type: "multiple_choice"
//         },
//         { 
//           q: "What is the main focus of retail banking?", 
//           options: ["Individual customers", "Large corporations", "Government institutions", "International trade"], 
//           answer: "Individual customers",
//           type: "multiple_choice"
//         },
//         { 
//           q: "Describe the key differences between retail banking and corporate banking.", 
//           type: "descriptive",
//           answer: "Retail banking serves individual customers with products like savings accounts, personal loans, and mortgages, focusing on high-volume, standardized services. Corporate banking serves businesses with customized solutions like commercial loans, cash management, and trade finance, dealing with larger transactions and complex financial needs."
//         }
//       ],
//       'Asset & Liability Product': [
//         { 
//           q: "What is considered an asset in banking?", 
//           options: ["Customer deposits", "Loans given to customers", "Bank's expenses", "Employee salaries"], 
//           answer: "Loans given to customers",
//           type: "multiple_choice"
//         },
//         { 
//           q: "Which of the following is a liability for a bank?", 
//           options: ["Cash reserves", "Customer deposits", "Property owned", "Investments made"], 
//           answer: "Customer deposits",
//           type: "multiple_choice"
//         },
//         { 
//           q: "Explain the concept of Asset-Liability Management (ALM) and its importance in banking.", 
//           type: "descriptive",
//           answer: "Asset-Liability Management involves managing the risks arising from mismatches between assets and liabilities. It's crucial for maintaining liquidity, managing interest rate risk, ensuring profitability, and complying with regulatory requirements while balancing the maturity and rate structures of assets and liabilities."
//         }
//       ]
//     }
//   },
//   "Basic of Credit": {
//     modules: ['Borrower Selection','Financial Statement & Ratio Analysis','Working Capital','Retail Loan'],
//     questions: {
//       'Borrower Selection': [
//         { 
//           q: "What is a credit score?", 
//           options: ["A numerical representation of creditworthiness", "A text description of financial history", "A bank's internal code", "A government identification"], 
//           answer: "A numerical representation of creditworthiness",
//           type: "multiple_choice"
//         },
//         { 
//           q: "Explain the key factors considered in borrower selection and why they are important.", 
//           type: "descriptive",
//           answer: "Key factors include: 1) Credit history - indicates past repayment behavior, 2) Income stability - ensures repayment capacity, 3) Debt-to-income ratio - measures existing financial obligations, 4) Collateral - provides security for the loan, 5) Character assessment - evaluates reliability and integrity. These factors collectively determine the borrower's ability and willingness to repay."
//         }
//       ],
//       'Financial Statement & Ratio Analysis': [
//         { 
//           q: "What does ROI stand for?", 
//           options: ["Return on Investment", "Rate of Interest", "Risk of Inflation", "Review of Income"], 
//           answer: "Return on Investment",
//           type: "multiple_choice"
//         },
//         { 
//           q: "Describe how ratio analysis helps in assessing a company's financial health.", 
//           type: "descriptive",
//           answer: "Ratio analysis evaluates relationships between financial statement items to assess liquidity (current ratio), profitability (net profit margin), efficiency (asset turnover), and solvency (debt-to-equity). It helps identify trends, compare performance with industry standards, and make informed credit decisions by providing quantitative insights into financial stability and operational efficiency."
//         }
//       ],
//       'Working Capital': [
//         { 
//           q: "Working capital is calculated as:", 
//           options: ["Current Assets - Current Liabilities", "Fixed Assets - Long-term Liabilities", "Total Assets - Total Liabilities", "Revenue - Expenses"], 
//           answer: "Current Assets - Current Liabilities",
//           type: "multiple_choice"
//         },
//         { 
//           q: "Explain the importance of working capital management for businesses.", 
//           type: "descriptive",
//           answer: "Working capital management ensures a company can meet short-term obligations and continue operations smoothly. Proper management prevents liquidity crises, optimizes cash flow, reduces borrowing costs, maintains supplier relationships, and supports business growth by balancing current assets and liabilities efficiently."
//         }
//       ],
//       'Retail Loan': [
//         { 
//           q: "Which is an example of a retail loan?", 
//           options: ["Home Loan", "Corporate Bond", "Commercial Mortgage", "Business Acquisition Loan"], 
//           answer: "Home Loan",
//           type: "multiple_choice"
//         },
//         { 
//           q: "Compare and contrast secured vs unsecured retail loans, providing examples of each.", 
//           type: "descriptive",
//           answer: "Secured loans are backed by collateral (e.g., mortgages secured by property, auto loans secured by vehicles) offering lower interest rates but risk of asset seizure. Unsecured loans rely on creditworthiness (e.g., personal loans, credit cards) with higher interest rates but no collateral requirement. Secured loans typically have higher borrowing limits while unsecured loans involve more stringent credit checks."
//         }
//       ]
//     }
//   }
// };

// const Exam = () => {
//   const { moduleName } = useParams();
//   const navigate = useNavigate();
//   const [submitted, setSubmitted] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState({}); 
//   const [descriptiveAnswers, setDescriptiveAnswers] = useState({});
  
//   let moduleQuestions = [];
//   let courseTitle = "";

//   // Fix the module name matching - handle URL encoding and variations
//   const decodedModuleName = decodeURIComponent(moduleName || '');
  
//   if (decodedModuleName) {
//     Object.entries(COURSES).forEach(([course, courseData]) => {
//       // More flexible matching to handle variations in module names
//       const matchedModule = courseData.modules.find(module => 
//         module.toLowerCase().includes(decodedModuleName.toLowerCase()) || 
//         decodedModuleName.toLowerCase().includes(module.toLowerCase())
//       );
      
//       if (matchedModule) {
//         moduleQuestions = courseData.questions[matchedModule] || [];
//         courseTitle = course;
//       }
//     });
//   }

//   const handleOptionChange = (qIndex, value) => {
//     setSelectedOptions(prev => ({ ...prev, [qIndex]: value }));
//   };

//   const handleDescriptiveChange = (qIndex, value) => {
//     setDescriptiveAnswers(prev => ({ ...prev, [qIndex]: value }));
//   };

//   const calculateScore = () => {
//     let correct = 0;
//     moduleQuestions.forEach((q, i) => {
//       if (q.type === "multiple_choice") {
//         if (selectedOptions[i] === q.answer) {
//           correct++;
//         }
//       } else if (q.type === "descriptive") {
//         // For descriptive questions, you might want to implement manual grading
//         // For now, we'll count them as correct if answered
//         if (descriptiveAnswers[i] && descriptiveAnswers[i].trim().length > 0) {
//           correct++;
//         }
//       }
//     });
//     return correct;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {decodedModuleName ? (
//           <>
//             <button
//               onClick={() => navigate(-1)}
//               className="mb-6 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors flex items-center gap-2"
//             >
//               ← Back to Modules
//             </button>
            
//             <div className="bg-white rounded-2xl shadow-lg p-8">
//               <div className="border-b border-slate-200 pb-4 mb-6">
//                 <h2 className="text-2xl font-bold text-slate-900 mb-2">{decodedModuleName} Exam</h2>
//                 <h3 className="text-lg text-slate-600">Course: {courseTitle}</h3>
//                 <div className="mt-2 text-sm text-slate-500">
//                   {moduleQuestions.filter(q => q.type === "multiple_choice").length} Multiple Choice Questions • 
//                   {moduleQuestions.filter(q => q.type === "descriptive").length} Descriptive Questions
//                 </div>
//               </div>

//               {moduleQuestions.length === 0 ? (
//                 <div className="text-center py-8">
//                   <div className="text-slate-500 text-lg mb-4">No questions found for this module.</div>
//                   <button
//                     onClick={() => navigate('/exam')}
//                     className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//                   >
//                     Back to Exam List
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   {moduleQuestions.map((q, i) => (
//                     <div key={i} className="mb-8 p-6 border border-slate-200 rounded-lg bg-slate-50">
//                       <div className="flex items-start justify-between mb-4">
//                         <div className="font-medium text-slate-900 text-lg">
//                           {i + 1}. {q.q}
//                         </div>
//                         <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                           q.type === "multiple_choice" 
//                             ? "bg-blue-100 text-blue-700" 
//                             : "bg-green-100 text-green-700"
//                         }`}>
//                           {q.type === "multiple_choice" ? "Multiple Choice" : "Descriptive"}
//                         </span>
//                       </div>

//                       {q.type === "multiple_choice" ? (
//                         <div className="space-y-3">
//                           {q.options.map((opt, j) => (
//                             <label key={j} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-colors">
//                               <input
//                                 type="radio"
//                                 name={`q${i}`}
//                                 value={opt}
//                                 disabled={submitted}
//                                 checked={selectedOptions[i] === opt}
//                                 onChange={() => handleOptionChange(i, opt)}
//                                 className="w-4 h-4 text-red-600 focus:ring-red-500"
//                               />
//                               <span className="text-slate-700">{opt}</span>
//                             </label>
//                           ))}
//                         </div>
//                       ) : (
//                         <div className="space-y-3">
//                           <textarea
//                             value={descriptiveAnswers[i] || ''}
//                             onChange={(e) => handleDescriptiveChange(i, e.target.value)}
//                             disabled={submitted}
//                             placeholder="Type your answer here..."
//                             className="w-full h-32 p-4 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                           />
//                           {submitted && (
//                             <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//                               <div className="font-semibold text-yellow-800 mb-2">Model Answer:</div>
//                               <div className="text-yellow-700">{q.answer}</div>
//                             </div>
//                           )}
//                         </div>
//                       )}

//                       {submitted && q.type === "multiple_choice" && (
//                         <div
//                           className={`mt-4 p-3 rounded-lg font-medium ${
//                             selectedOptions[i] === q.answer
//                               ? "bg-green-100 text-green-700 border border-green-200"
//                               : "bg-red-100 text-red-700 border border-red-200"
//                           }`}
//                         >
//                           {selectedOptions[i] === q.answer ? "✓ Correct" : "✗ Incorrect"} - {q.answer}
//                         </div>
//                       )}
//                     </div>
//                   ))}

//                   {!submitted ? (
//                     <button
//                       onClick={() => setSubmitted(true)}
//                       className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all text-lg"
//                     >
//                       Submit Exam
//                     </button>
//                   ) : (
//                     <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-green-700 mb-2">
//                           Exam Submitted!
//                         </div>
//                         <div className="text-lg text-slate-700 mb-4">
//                           You answered <span className="font-bold text-green-600">{calculateScore()}</span> out of {moduleQuestions.length} questions correctly.
//                         </div>
//                         <div className="text-sm text-slate-600">
//                           {moduleQuestions.filter(q => q.type === "descriptive").length > 0 && 
//                             "Note: Descriptive questions require manual evaluation by your instructor."}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           </>
//         ) : (
//           <div className="space-y-8">
//             <div className="text-center mb-8">
//               <h1 className="text-3xl font-bold text-slate-900 mb-2">Course Examinations</h1>
//               <p className="text-slate-600">Select a module to start your exam</p>
//             </div>
            
//             {Object.keys(COURSES).map((courseName, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl shadow-lg p-6"
//               >
//                 <h2 className="text-xl font-bold mb-4 text-slate-900">{courseName}</h2>
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full border border-slate-300 rounded-lg">
//                     <thead className="bg-slate-100">
//                       <tr>
//                         <th className="border border-slate-300 py-3 px-4 text-left">#</th>
//                         <th className="border border-slate-300 py-3 px-4 text-left">Module Name</th>
//                         <th className="border border-slate-300 py-3 px-4 text-left">Questions</th>
//                         <th className="border border-slate-300 py-3 px-4 text-center">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {COURSES[courseName].modules.map((mod, idx) => {
//                         const questions = COURSES[courseName].questions[mod] || [];
//                         const mcqCount = questions.filter(q => q.type === "multiple_choice").length;
//                         const descCount = questions.filter(q => q.type === "descriptive").length;
                        
//                         return (
//                           <tr
//                             key={idx}
//                             className="odd:bg-white even:bg-slate-50 hover:bg-slate-100 transition-colors"
//                           >
//                             <td className="border border-slate-300 py-3 px-4 text-center">{idx + 1}</td>
//                             <td className="border border-slate-300 py-3 px-4 font-medium">{mod}</td>
//                             <td className="border border-slate-300 py-3 px-4">
//                               <div className="text-sm text-slate-600">
//                                 {mcqCount} MCQ • {descCount} Descriptive
//                               </div>
//                             </td>
//                             <td className="border border-slate-300 py-3 px-4 text-center">
//                               <button
//                                 className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
//                                 onClick={() => navigate(`/exam/${encodeURIComponent(mod)}`)}
//                               >
//                                 Start Exam
//                               </button>
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Exam;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Clock, ArrowRight, CheckCircle } from 'lucide-react';

// Course structure with modules
const COURSES_DATA = {
  "basic-banking": {
    id: 'basic-banking',
    title: 'Basic of Banking',
    description: 'Fundamental banking operations and services',
    instructor: 'Farhana Rahman',
    duration: '6 weeks',
    category: 'Operations',
    level: 'Beginner',
    students: 1247,
    rating: 4.9,
    modules: [
      "Account Transaction",
      "Anti Money Laundering", 
      "Retail Banking",
      "Asset & Liability Management"
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
    students: 892,
    rating: 4.8,
    modules: [
      "Borrower Selection",
      "Financial Statement & Ratio Analysis",
      "Working Capital",
      "Retail Loan"
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
    students: 756,
    rating: 4.7,
    modules: [
      "Digital Banking Fundamentals",
      "Fintech Innovations",
      "Cybersecurity in Banking"
    ]
  }
};


const Exam = () => {
  const navigate = useNavigate();
  const [courseProgress, setCourseProgress] = useState({});

  // Load progress from localStorage
  useEffect(() => {
    const progress = JSON.parse(localStorage.getItem('completedModules') || '{}');
    setCourseProgress(progress);
  }, []);

  const getCourseCompletion = (course) => {
    const completedModules = course.modules.filter(module => 
      courseProgress[module]?.completed
    ).length;
    
    const totalModules = course.modules.length;
    const percentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
    const allCompleted = completedModules === totalModules && totalModules > 0;

    return { completed: completedModules, total: totalModules, percentage, allCompleted };
  };

  const handleCourseSelect = (courseId) => {
    navigate(`/exam/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-3 border border-gray-200 mb-6"
          >
            <Award className="w-5 h-5 text-red-600" />
            <span className="font-semibold text-gray-900">CERTIFICATION EXAMS</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Course <span className="text-red-600">Examinations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test your knowledge and earn certificates by completing module exams. 
            Pass all modules in a course to receive your course certificate.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-8">
          {Object.values(COURSES_DATA).map((course, index) => {
            const completion = getCourseCompletion(course);
            
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 group cursor-pointer"
                onClick={() => handleCourseSelect(course.id)}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                          {course.title}
                        </h3>
                        {completion.allCompleted && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center space-x-1">
                            <CheckCircle className="w-4 h-4" />
                            <span>Completed</span>
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      
                      {/* Course Stats */}
                      <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.modules.length} modules</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{course.students.toLocaleString()} students</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-2xl font-bold text-red-600">
                      <span>{course.rating}</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">Course Progress</span>
                      <span className="text-sm text-gray-600">
                        {completion.completed}/{completion.total} modules
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-green-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${completion.percentage}%` }}
                      ></div>
                    </div>
                    {completion.allCompleted && (
                      <div className="mt-3 flex items-center space-x-2 text-green-600">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-semibold">Ready for Certificate!</span>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="px-3 py-1 bg-gray-100 rounded-full">{course.level}</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full">{course.category}</span>
                    </div>
                    
                    <button className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 group-hover:scale-105">
                      <span>View Exams</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-red-600/2 transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-blue-900 mb-4">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Complete Modules</h4>
              <p className="text-blue-700 text-sm">Study each module and prepare for the exam</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Pass Exams</h4>
              <p className="text-blue-700 text-sm">Score 80% or higher in each module exam</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Get Certified</h4>
              <p className="text-blue-700 text-sm">Receive certificate after completing all modules</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Exam;