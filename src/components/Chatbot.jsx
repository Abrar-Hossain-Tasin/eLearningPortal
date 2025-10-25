// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([{ from: "bot", text: "Hi! How can I assist you today?" }]);
//   const [input, setInput] = useState("");

//   const sendMessage = () => {
//     if (!input.trim()) return;
//     setMessages([...messages, { from: "user", text: input }]);
//     setInput("");

//     // Simple simulated reply
//     setTimeout(() => {
//       setMessages((m) => [...m, { from: "bot", text: "That's an interesting question! Let me help..." }]);
//     }, 1000);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-gradient-to-r from-red-500 to-green-400 text-white p-4 rounded-full shadow-lg"
//       >
//         💬
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             className="absolute bottom-16 right-0 w-80 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl p-4"
//           >
//             <div className="font-semibold mb-2">Teaching Assistant</div>
//             <div className="h-48 overflow-y-auto border p-2 rounded-md mb-2 bg-white/60">
//               {messages.map((msg, i) => (
//                 <div
//                   key={i}
//                   className={`my-1 p-2 rounded-lg text-sm ${
//                     msg.from === "bot"
//                       ? "bg-green-100 text-slate-700 self-start"
//                       : "bg-red-100 text-slate-700 self-end"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               ))}
//             </div>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Ask something..."
//                 className="flex-grow border rounded-full px-3 py-1 text-sm"
//               />
//               <button
//                 onClick={sendMessage}
//                 className="bg-gradient-to-r from-red-500 to-green-400 text-white px-4 py-1 rounded-full"
//               >
//                 Send
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle, X, Send, Bot, User, Minimize2 } from "lucide-react";

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [messages, setMessages] = useState([
//     { 
//       from: "bot", 
//       text: "Hello! I'm your IFIC Bank Learning Assistant. How can I help you with courses, modules, or platform questions today?" 
//     }
//   ]);
//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessage = () => {
//     if (!input.trim()) return;
    
//     const userMessage = { from: "user", text: input };
//     setMessages(prev => [...prev, userMessage]);
//     setInput("");

//     // Simulate bot response based on user input
//     setTimeout(() => {
//       let botResponse = "I understand your question about banking courses. For detailed information, you can check our course catalog or contact the specific instructor.";
      
//       const lowerInput = input.toLowerCase();
      
//       if (lowerInput.includes("course") || lowerInput.includes("class")) {
//         botResponse = "We offer various banking courses including Advanced Banking Operations, Risk Management, Digital Banking, and more. You can browse all courses in the Courses section.";
//       } else if (lowerInput.includes("module") || lowerInput.includes("lesson")) {
//         botResponse = "Each course contains multiple modules with video lessons, quizzes, and practical assignments. You can access modules from your My Learning dashboard.";
//       } else if (lowerInput.includes("certificate") || lowerInput.includes("certification")) {
//         botResponse = "Upon successful completion of any course with a minimum 70% score, you'll receive a verifiable digital certificate. Certificates can be downloaded from your Certificates page.";
//       } else if (lowerInput.includes("instructor") || lowerInput.includes("teacher")) {
//         botResponse = "Our instructors are experienced IFIC Bank professionals. You can view all instructors and their profiles on the Instructors page, and even ask them direct questions.";
//       } else if (lowerInput.includes("technical") || lowerInput.includes("problem") || lowerInput.includes("issue")) {
//         botResponse = "For technical issues, please contact our IT support at itsupport@ificbank.com or call +880 2 956 1301 during business hours.";
//       } else if (lowerInput.includes("enroll") || lowerInput.includes("register")) {
//         botResponse = "To enroll in a course, simply go to the Courses page, select your desired course, and click 'Enroll Now'. Some advanced courses may require manager approval.";
//       } else if (lowerInput.includes("progress") || lowerInput.includes("track")) {
//         botResponse = "You can track your learning progress, completed modules, and course completion status in the My Learning section of your dashboard.";
//       } else if (lowerInput.includes("exam") || lowerInput.includes("quiz") || lowerInput.includes("test")) {
//         botResponse = "Courses include module quizzes and final exams. You need to score at least 70% to pass. Exams can be retaken if needed.";
//       }

//       setMessages(prev => [...prev, { from: "bot", text: botResponse }]);
//     }, 1000);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       sendMessage();
//     }
//   };

//   const quickQuestions = [
//     "How do I enroll in a course?",
//     "Where can I find my certificates?",
//     "How to contact an instructor?",
//     "What are the system requirements?",
//     "How are courses assessed?"
//   ];

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Chat Trigger Button */}
//       {!isOpen && (
//         <motion.button
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsOpen(true)}
//           className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
//         >
//           <MessageCircle className="w-6 h-6" />
//           <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
//         </motion.button>
//       )}

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: 0.8 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 50, scale: 0.8 }}
//             className="absolute bottom-16 right-0 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
//           >
//             {/* Chat Header */}
//             <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 text-white">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
//                     <Bot className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <div className="font-bold text-sm">IFIC Bank Assistant</div>
//                     <div className="text-xs text-gray-300">Online 24/7</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <button
//                     onClick={() => setIsMinimized(!isMinimized)}
//                     className="p-1 hover:bg-white/10 rounded-lg transition-colors"
//                   >
//                     <Minimize2 className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={() => setIsOpen(false)}
//                     className="p-1 hover:bg-white/10 rounded-lg transition-colors"
//                   >
//                     <X className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {!isMinimized && (
//               <>
//                 {/* Messages Container */}
//                 <div className="h-80 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
//                   {messages.map((msg, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className={`flex mb-4 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
//                     >
//                       <div
//                         className={`flex items-start space-x-2 max-w-[80%] ${
//                           msg.from === "user" ? "flex-row-reverse space-x-reverse" : ""
//                         }`}
//                       >
//                         <div
//                           className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
//                             msg.from === "bot" 
//                               ? "bg-red-100 text-red-600" 
//                               : "bg-blue-100 text-blue-600"
//                           }`}
//                         >
//                           {msg.from === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
//                         </div>
//                         <div
//                           className={`px-4 py-3 rounded-2xl text-sm ${
//                             msg.from === "bot"
//                               ? "bg-gray-100 text-gray-700 rounded-tl-none"
//                               : "bg-red-600 text-white rounded-tr-none"
//                           }`}
//                         >
//                           {msg.text}
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                   <div ref={messagesEndRef} />
//                 </div>

//                 {/* Quick Questions */}
//                 {messages.length <= 2 && (
//                   <div className="px-4 pb-3">
//                     <div className="text-xs text-gray-500 mb-2 font-medium">Quick questions:</div>
//                     <div className="flex flex-wrap gap-2">
//                       {quickQuestions.map((question, i) => (
//                         <button
//                           key={i}
//                           onClick={() => {
//                             setInput(question);
//                             setTimeout(sendMessage, 100);
//                           }}
//                           className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-xl transition-colors duration-200 border border-gray-300"
//                         >
//                           {question}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Input Area */}
//                 <div className="p-4 border-t border-gray-200 bg-white">
//                   <div className="flex space-x-3">
//                     <input
//                       type="text"
//                       value={input}
//                       onChange={(e) => setInput(e.target.value)}
//                       onKeyPress={handleKeyPress}
//                       placeholder="Ask about courses, modules, or support..."
//                       className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm transition-all duration-300"
//                     />
//                     <button
//                       onClick={sendMessage}
//                       disabled={!input.trim()}
//                       className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
//                     >
//                       <Send className="w-4 h-4" />
//                     </button>
//                   </div>
//                   <div className="text-xs text-gray-500 text-center mt-2">
//                     Typically replies in seconds
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* Minimized State */}
//             {isMinimized && (
//               <div className="p-4 text-center bg-gray-50">
//                 <div className="text-sm text-gray-600">Chat minimized</div>
//                 <button
//                   onClick={() => setIsMinimized(false)}
//                   className="text-xs text-red-600 hover:text-red-700 mt-1"
//                 >
//                   Click to expand
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Bot, User, Send, X, Minimize2 } from "lucide-react";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { 
      from: "bot", 
      text: "Hello! I'm your IFIC Bank Learning Assistant. How can I help you with courses, modules, or platform questions today?" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = { from: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response based on user input
    setTimeout(() => {
      let botResponse = "I understand your question about banking courses. For detailed information, you can check our course catalog or contact the specific instructor.";
      
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("course") || lowerInput.includes("class")) {
        botResponse = "We offer various banking courses including Advanced Banking Operations, Risk Management, Digital Banking, and more. You can browse all courses in the Courses section.";
      } else if (lowerInput.includes("module") || lowerInput.includes("lesson")) {
        botResponse = "Each course contains multiple modules with video lessons, quizzes, and practical assignments. You can access modules from your My Learning dashboard.";
      } else if (lowerInput.includes("certificate") || lowerInput.includes("certification")) {
        botResponse = "Upon successful completion of any course with a minimum 70% score, you'll receive a verifiable digital certificate. Certificates can be downloaded from your Certificates page.";
      } else if (lowerInput.includes("instructor") || lowerInput.includes("teacher")) {
        botResponse = "Our instructors are experienced IFIC Bank professionals. You can view all instructors and their profiles on the Instructors page, and even ask them direct questions.";
      } else if (lowerInput.includes("technical") || lowerInput.includes("problem") || lowerInput.includes("issue")) {
        botResponse = "For technical issues, please contact our IT support at itsupport@ificbank.com or call +880 2 956 1301 during business hours.";
      } else if (lowerInput.includes("enroll") || lowerInput.includes("register")) {
        botResponse = "To enroll in a course, simply go to the Courses page, select your desired course, and click 'Enroll Now'. Some advanced courses may require manager approval.";
      } else if (lowerInput.includes("progress") || lowerInput.includes("track")) {
        botResponse = "You can track your learning progress, completed modules, and course completion status in the My Learning section of your dashboard.";
      } else if (lowerInput.includes("exam") || lowerInput.includes("quiz") || lowerInput.includes("test")) {
        botResponse = "Courses include module quizzes and final exams. You need to score at least 70% to pass. Exams can be retaken if needed.";
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { from: "bot", text: botResponse }]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "How do I enroll?",
    "Where are certificates?",
    "Contact instructor?",
    "Course assessment?"
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* Chat Trigger Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group relative"
          aria-label="Open chat assistant"
        >
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-14 right-0 w-[90vw] max-w-sm sm:max-w-md bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            style={{ 
              maxHeight: "calc(100vh - 120px)",
              height: isMinimized ? "auto" : "600px"
            }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">IFIC Bank Assistant</div>
                    <div className="text-xs text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      Online 24/7
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Container */}
                <div 
                  className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white"
                  style={{ height: "calc(100% - 180px)", maxHeight: "400px" }}
                >
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex mb-4 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-[85%] ${
                          msg.from === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            msg.from === "bot" 
                              ? "bg-red-100 text-red-600" 
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {msg.from === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </div>
                        <motion.div
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className={`px-4 py-3 rounded-2xl text-sm break-words ${
                            msg.from === "bot"
                              ? "bg-gray-100 text-gray-700 rounded-tl-none border border-gray-200"
                              : "bg-red-600 text-white rounded-tr-none"
                          }`}
                        >
                          {msg.text}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start mb-4">
                      <div className="flex items-start space-x-2 max-w-[85%]">
                        <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="px-4 py-3 rounded-2xl rounded-tl-none bg-gray-100 border border-gray-200">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                {messages.length <= 2 && (
                  <div className="px-4 pb-3 border-t border-gray-100 pt-3">
                    <div className="text-xs text-gray-500 mb-2 font-medium">Quick questions:</div>
                    <div className="flex flex-wrap gap-2">
                      {quickQuestions.map((question, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setInput(question);
                            setTimeout(sendMessage, 100);
                          }}
                          className="text-xs bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-xl transition-all duration-200 border border-gray-300 hover:border-gray-400 shadow-sm"
                        >
                          {question}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex space-x-2">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about courses, modules, or support..."
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm transition-all duration-300 pr-12"
                        disabled={isTyping}
                      />
                      {input && (
                        <button
                          onClick={() => setInput("")}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <button
                      onClick={sendMessage}
                      disabled={!input.trim() || isTyping}
                      className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-2">
                    {isTyping ? "Assistant is typing..." : "Typically replies in seconds"}
                  </div>
                </div>
              </>
            )}

            {/* Minimized State */}
            {isMinimized && (
              <div className="p-4 text-center bg-gray-50 border-t border-gray-200">
                <div className="text-sm text-gray-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 mr-2 text-red-500" />
                  Chat minimized
                </div>
                <button
                  onClick={() => setIsMinimized(false)}
                  className="text-xs text-red-600 hover:text-red-700 mt-1 font-medium"
                >
                  Click to expand
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
