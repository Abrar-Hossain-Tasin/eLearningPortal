// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Courses from './pages/Courses';
// import CourseDetail from './pages/CourseDetail';
// import Exam from './pages/Exam';
// import ModuleQuiz from './pages/ModuleQuiz';
// import CourseExam from './pages/CourseExam';
// import Certificates from './pages/Certificates';
// import MyLearning from './pages/MyLearning';
// import Login from './pages/Login';
// import Module from './pages/Module';
// import AdminDashboard from './pages/AdminDashboard';
// import InstructorDashboard from './pages/InstructorDashboard';
// import FAQ from './pages/FAQ'; 
// import InstructorPage from './pages/InstructorPage';
// import Chatbot from './components/Chatbot'; // Add this import

// // Mock user database
// const users = {
//   'admin@ificbank.com': { 
//     password: 'Admin@2024', 
//     role: 'admin', 
//     name: 'System Administrator',
//     department: 'IT'
//   },
//  'instructor.farhana@ificbank.com': { 
//   password: 'Instructor@123', 
//   role: 'instructor', 
//   name: 'Farhana Rahman',
//   department: 'Training'
// },

//   'fariya.islam@ificbank.com': { 
//     password: 'Banker@456', 
//     role: 'user', 
//     name: 'Fariya Islam',
//     department: 'Software Development Team',
//     employeeId: 'IFIC-EMP-23456'
//   },
//   'manager.karim@ificbank.com': { 
//     password: 'Manager@789', 
//     role: 'user', 
//     name: 'Karim Abdullah',
//     department: 'Corporate Banking',
//     employeeId: 'IFIC-MGR-12345'
//   },
//   'officer.fatima@ificbank.com': { 
//     password: 'Officer@321', 
//     role: 'user', 
//     name: 'Fatima Begum',
//     department: 'Operations',
//     employeeId: 'IFIC-OFC-45678'
//   }
// };

// function App() {
//   const [user, setUser] = useState(null);

//   const handleLogin = (email, password) => {
//     if (users[email] && users[email].password === password) {
//       const userData = {
//         email,
//         ...users[email]
//       };
//       setUser(userData);
//       return { success: true, user: userData };
//     }
//     return { success: false, error: 'Invalid credentials' };
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   // Protected Route Component
//   const ProtectedRoute = ({ children, allowedRoles }) => {
//     if (!user) {
//       return <Navigate to="/login" />;
//     }
//     if (allowedRoles && !allowedRoles.includes(user.role)) {
//       return <Navigate to="/" />;
//     }
//     return children;
//   };

//   return (
//     <Router>
//       <div className="min-h-screen bg-white">
//         <Navbar user={user} onLogout={handleLogout} />
//         <AnimatePresence mode="wait">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/courses" element={<Courses />} />
//             <Route path="/course/:id" element={<CourseDetail />} />
//             <Route path="/exam" element={<Exam />} />
//             <Route path="/exam/:courseId" element={<CourseExam />} />
//             <Route path="/module-quiz/:moduleName" element={<ModuleQuiz />} />
//             <Route path="/certificates" element={<Certificates />} />
//             <Route path="/faq" element={<FAQ />} />
//             <Route path="/instructors" element={<InstructorPage />} />
//             <Route 
//               path="/my-learning" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <MyLearning />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route path="/login" element={<Login onLogin={handleLogin} />} />
//             <Route path="/module/:moduleName" element={<Module />} />
//             <Route 
//               path="/admin" 
//               element={
//                 <ProtectedRoute allowedRoles={['admin']}>
//                   <AdminDashboard />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/instructor" 
//               element={
//                 <ProtectedRoute allowedRoles={['instructor', 'admin']}>
//                   <InstructorDashboard />
//                 </ProtectedRoute>
//               } 
//             />
//           </Routes>
//         </AnimatePresence>
        
//         {/* Add Chatbot Component */}
//         <Chatbot />
        
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Courses from './pages/Courses';
// import CourseDetail from './pages/CourseDetail';
// import Exam from './pages/Exam';
// import ModuleQuiz from './pages/ModuleQuiz';
// import CourseExam from './pages/CourseExam';
// import Certificates from './pages/Certificates';
// import MyLearning from './pages/MyLearning';
// import Login from './pages/Login';
// import Module from './pages/Module';
// import AdminDashboard from './pages/AdminDashboard';
// import InstructorDashboard from './pages/InstructorDashboard';
// import FAQ from './pages/FAQ'; 
// import InstructorPage from './pages/InstructorPage';
// import Chatbot from './components/Chatbot';

// // Mock user database
// const users = {
//   'admin@ificbank.com': { 
//     password: 'Admin@2024', 
//     role: 'admin', 
//     name: 'System Administrator',
//     department: 'IT'
//   },
//   'instructor.farhana@ificbank.com': { 
//     password: 'Instructor@123', 
//     role: 'instructor', 
//     name: 'Farhana Rahman',
//     department: 'Training'
//   },
//   'fariya.islam@ificbank.com': { 
//     password: 'Banker@456', 
//     role: 'user', 
//     name: 'Fariya Islam',
//     department: 'Software Development Team',
//     employeeId: 'IFIC-EMP-23456'
//   },
//   'manager.karim@ificbank.com': { 
//     password: 'Manager@789', 
//     role: 'user', 
//     name: 'Karim Abdullah',
//     department: 'Corporate Banking',
//     employeeId: 'IFIC-MGR-12345'
//   },
//   'officer.fatima@ificbank.com': { 
//     password: 'Officer@321', 
//     role: 'user', 
//     name: 'Fatima Begum',
//     department: 'Operations',
//     employeeId: 'IFIC-OFC-45678'
//   }
// };



// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if user is logged in on app start
//   useEffect(() => {
//     const savedUser = localStorage.getItem('user');
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//     setLoading(false);
//   }, []);

//   const handleLogin = (email, password) => {
//     if (users[email] && users[email].password === password) {
//       const userData = {
//         email,
//         ...users[email]
//       };
//       setUser(userData);
//       // Save user to localStorage
//       localStorage.setItem('user', JSON.stringify(userData));
//       return { success: true, user: userData };
//     }
//     return { success: false, error: 'Invalid credentials' };
//   };

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   // Protected Route Component
//   const ProtectedRoute = ({ children, allowedRoles }) => {
//     if (!user) {
//       return <Navigate to="/login" />;
//     }
//     if (allowedRoles && !allowedRoles.includes(user.role)) {
//       // Redirect to appropriate dashboard based on role
//       switch (user.role) {
//         case 'admin':
//           return <Navigate to="/admin" />;
//         case 'instructor':
//           return <Navigate to="/instructor" />;
//         default:
//           return <Navigate to="/" />;
//       }
//     }
//     return children;
//   };

//   // Public Route Component - redirect to appropriate dashboard if logged in
//   const PublicRoute = ({ children }) => {
//     if (user) {
//       // Redirect based on user role
//       switch (user.role) {
//         case 'admin':
//           return <Navigate to="/admin" />;
//         case 'instructor':
//           return <Navigate to="/instructor" />;
//         default:
//           return <Navigate to="/" />;
//       }
//     }
//     return children;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <div className="min-h-screen bg-white">
//         {/* Only show Navbar if user is logged in */}
//         {user && <Navbar user={user} onLogout={handleLogout} />}
        
//         <AnimatePresence mode="wait">
//           <Routes>
//             {/* Public routes - redirect to dashboard if logged in */}
//             <Route 
//               path="/login" 
//               element={
//                 <PublicRoute>
//                   <Login onLogin={handleLogin} />
//                 </PublicRoute>
//               } 
//             />
            
//             {/* Protected routes */}
//             <Route 
//               path="/" 
//               element={
//                 <ProtectedRoute allowedRoles={['user']}>
//                   <Home />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/courses" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Courses />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/course/:id" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <CourseDetail />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/exam" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Exam />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/exam/:courseId" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <CourseExam />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/module-quiz/:moduleName" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <ModuleQuiz />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/certificates" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Certificates />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/faq" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <FAQ />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/instructors" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <InstructorPage />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/my-learning" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <MyLearning />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/module/:moduleName" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Module />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/admin" 
//               element={
//                 <ProtectedRoute allowedRoles={['admin']}>
//                   <AdminDashboard />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/instructor" 
//               element={
//                 <ProtectedRoute allowedRoles={['instructor', 'admin']}>
//                   <InstructorDashboard />
//                 </ProtectedRoute>
//               } 
//             />
            
//             {/* Default redirect */}
//             <Route 
//               path="*" 
//               element={<Navigate to={user ? "/" : "/login"} />} 
//             />
//           </Routes>
//         </AnimatePresence>
        
//         {/* Only show Chatbot and Footer if user is logged in */}
//         {user && (
//           <>
//             <Chatbot />
//             <Footer />
//           </>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Courses from './pages/Courses';
// import CourseDetail from './pages/CourseDetail';
// import Exam from './pages/Exam';
// import ModuleQuiz from './pages/ModuleQuiz';
// import CourseExam from './pages/CourseExam';
// import Certificates from './pages/Certificates';
// import MyLearning from './pages/MyLearning';
// import Login from './pages/Login';
// import Module from './pages/Module';
// import AdminDashboard from './pages/AdminDashboard';
// import InstructorDashboard from './pages/InstructorDashboard';
// import FAQ from './pages/FAQ'; 
// import InstructorPage from './pages/InstructorPage';
// import Chatbot from './components/Chatbot';

// // ScrollToTop component to reset scroll position on route change
// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// // Mock user database
// const users = {
//   'admin@ificbank.com': { 
//     password: 'Admin@2024', 
//     role: 'admin', 
//     name: 'System Administrator',
//     department: 'IT'
//   },
//   'instructor.farhana@ificbank.com': { 
//     password: 'Instructor@123', 
//     role: 'instructor', 
//     name: 'Farhana Rahman',
//     department: 'Training'
//   },
//   'fariya.islam@ificbank.com': { 
//     password: 'Banker@456', 
//     role: 'user', 
//     name: 'Fariya Islam',
//     department: 'Software Development Team',
//     employeeId: 'IFIC-EMP-23456'
//   },
//   'manager.karim@ificbank.com': { 
//     password: 'Manager@789', 
//     role: 'user', 
//     name: 'Karim Abdullah',
//     department: 'Corporate Banking',
//     employeeId: 'IFIC-MGR-12345'
//   },
//   'officer.fatima@ificbank.com': { 
//     password: 'Officer@321', 
//     role: 'user', 
//     name: 'Fatima Begum',
//     department: 'Operations',
//     employeeId: 'IFIC-OFC-45678'
//   }
// };

// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if user is logged in on app start
//   useEffect(() => {
//     const savedUser = localStorage.getItem('user');
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//     setLoading(false);
//   }, []);

//   const handleLogin = (email, password) => {
//     if (users[email] && users[email].password === password) {
//       const userData = {
//         email,
//         ...users[email]
//       };
//       setUser(userData);
//       // Save user to localStorage
//       localStorage.setItem('user', JSON.stringify(userData));
//       return { success: true, user: userData };
//     }
//     return { success: false, error: 'Invalid credentials' };
//   };

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   // Protected Route Component
//   const ProtectedRoute = ({ children, allowedRoles }) => {
//     if (!user) {
//       return <Navigate to="/login" />;
//     }
//     if (allowedRoles && !allowedRoles.includes(user.role)) {
//       // Redirect to appropriate dashboard based on role
//       switch (user.role) {
//         case 'admin':
//           return <Navigate to="/admin" />;
//         case 'instructor':
//           return <Navigate to="/instructor" />;
//         default:
//           return <Navigate to="/" />;
//       }
//     }
//     return children;
//   };

//   // Public Route Component - redirect to appropriate dashboard if logged in
//   const PublicRoute = ({ children }) => {
//     if (user) {
//       // Redirect based on user role
//       switch (user.role) {
//         case 'admin':
//           return <Navigate to="/admin" />;
//         case 'instructor':
//           return <Navigate to="/instructor" />;
//         default:
//           return <Navigate to="/" />;
//       }
//     }
//     return children;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <div className="min-h-screen bg-white">
//         {/* Scroll to top on route change */}
//         <ScrollToTop />
        
//         {/* Only show Navbar if user is logged in */}
//         {user && <Navbar user={user} onLogout={handleLogout} />}
        
//         <AnimatePresence mode="wait">
//           <Routes>
//             {/* Public routes - redirect to dashboard if logged in */}
//             <Route 
//               path="/login" 
//               element={
//                 <PublicRoute>
//                   <Login onLogin={handleLogin} />
//                 </PublicRoute>
//               } 
//             />
            
//             {/* Protected routes */}
//             <Route 
//               path="/" 
//               element={
//                 <ProtectedRoute allowedRoles={['user']}>
//                   <Home />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/courses" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Courses />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/course/:id" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <CourseDetail />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/exam" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Exam />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/exam/:courseId" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <CourseExam />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/module-quiz/:moduleName" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <ModuleQuiz />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/certificates" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Certificates />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/faq" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <FAQ />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/instructors" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <InstructorPage />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/my-learning" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <MyLearning />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/module/:moduleName" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Module />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/admin" 
//               element={
//                 <ProtectedRoute allowedRoles={['admin']}>
//                   <AdminDashboard />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/instructor" 
//               element={
//                 <ProtectedRoute allowedRoles={['instructor', 'admin']}>
//                   <InstructorDashboard />
//                 </ProtectedRoute>
//               } 
//             />
            
//             {/* Default redirect */}
//             <Route 
//               path="*" 
//               element={<Navigate to={user ? "/" : "/login"} />} 
//             />
//           </Routes>
//         </AnimatePresence>
        
//         {/* Only show Chatbot and Footer if user is logged in */}
//         {user && (
//           <>
//             <Chatbot />
//             <Footer />
//           </>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Courses from './pages/Courses';
// import CourseDetail from './pages/CourseDetail';
// import Exam from './pages/Exam';
// import ModuleQuiz from './pages/ModuleQuiz';
// import CourseExam from './pages/CourseExam';
// import Certificates from './pages/Certificates';
// import MyLearning from './pages/MyLearning';
// import Login from './pages/Login';
// import Module from './pages/Module';
// import AdminDashboard from './pages/AdminDashboard';
// import InstructorDashboard from './pages/InstructorDashboard';
// import FAQ from './pages/FAQ'; 
// import InstructorPage from './pages/InstructorPage';
// import Chatbot from './components/Chatbot';

// // ScrollToTop component to reset scroll position on route change with smooth animation
// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Smooth scroll to top with animation
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'smooth' // Added smooth animation
//     });
//   }, [pathname]);

//   return null;
// };

// // Mock user database
// const users = {
//   'admin@ificbank.com': { 
//     password: 'Admin@2024', 
//     role: 'admin', 
//     name: 'System Administrator',
//     department: 'IT'
//   },
//   'instructor.farhana@ificbank.com': { 
//     password: 'Instructor@123', 
//     role: 'instructor', 
//     name: 'Farhana Rahman',
//     department: 'Training'
//   },
//   'fariya.islam@ificbank.com': { 
//     password: 'Banker@456', 
//     role: 'user', 
//     name: 'Fariya Islam',
//     department: 'Software Development Team',
//     employeeId: 'IFIC-EMP-23456'
//   },
//   'manager.karim@ificbank.com': { 
//     password: 'Manager@789', 
//     role: 'user', 
//     name: 'Karim Abdullah',
//     department: 'Corporate Banking',
//     employeeId: 'IFIC-MGR-12345'
//   },
//   'officer.fatima@ificbank.com': { 
//     password: 'Officer@321', 
//     role: 'user', 
//     name: 'Fatima Begum',
//     department: 'Operations',
//     employeeId: 'IFIC-OFC-45678'
//   }
// };

// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if user is logged in on app start
//   useEffect(() => {
//     const savedUser = localStorage.getItem('user');
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//     setLoading(false);
//   }, []);

//   const handleLogin = (email, password) => {
//     if (users[email] && users[email].password === password) {
//       const userData = {
//         email,
//         ...users[email]
//       };
//       setUser(userData);
//       // Save user to localStorage
//       localStorage.setItem('user', JSON.stringify(userData));
//       return { success: true, user: userData };
//     }
//     return { success: false, error: 'Invalid credentials' };
//   };

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   // Protected Route Component
//   const ProtectedRoute = ({ children, allowedRoles }) => {
//     if (!user) {
//       return <Navigate to="/login" />;
//     }
//     if (allowedRoles && !allowedRoles.includes(user.role)) {
//       // Redirect to appropriate dashboard based on role
//       switch (user.role) {
//         case 'admin':
//           return <Navigate to="/admin" />;
//         case 'instructor':
//           return <Navigate to="/instructor" />;
//         default:
//           return <Navigate to="/" />;
//       }
//     }
//     return children;
//   };

//   // Public Route Component - redirect to appropriate dashboard if logged in
//   const PublicRoute = ({ children }) => {
//     if (user) {
//       // Redirect based on user role
//       switch (user.role) {
//         case 'admin':
//           return <Navigate to="/admin" />;
//         case 'instructor':
//           return <Navigate to="/instructor" />;
//         default:
//           return <Navigate to="/" />;
//       }
//     }
//     return children;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <div className="min-h-screen bg-white">
//         {/* Scroll to top on route change with smooth animation */}
//         <ScrollToTop />
        
//         {/* Only show Navbar if user is logged in */}
//         {user && <Navbar user={user} onLogout={handleLogout} />}
        
//         <AnimatePresence mode="wait">
//           <Routes>
//             {/* Public routes - redirect to dashboard if logged in */}
//             <Route 
//               path="/login" 
//               element={
//                 <PublicRoute>
//                   <Login onLogin={handleLogin} />
//                 </PublicRoute>
//               } 
//             />
            
//             {/* Protected routes */}
//             <Route 
//               path="/" 
//               element={
//                 <ProtectedRoute allowedRoles={['user']}>
//                   <Home />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/courses" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Courses />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/course/:id" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <CourseDetail />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/exam" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Exam />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/exam/:courseId" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <CourseExam />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/module-quiz/:moduleName" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <ModuleQuiz />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/certificates" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Certificates />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/faq" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <FAQ />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/instructors" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <InstructorPage />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/my-learning" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <MyLearning />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/module/:moduleName" 
//               element={
//                 <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
//                   <Module />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/admin" 
//               element={
//                 <ProtectedRoute allowedRoles={['admin']}>
//                   <AdminDashboard />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/instructor" 
//               element={
//                 <ProtectedRoute allowedRoles={['instructor', 'admin']}>
//                   <InstructorDashboard />
//                 </ProtectedRoute>
//               } 
//             />
            
//             {/* Default redirect */}
//             <Route 
//               path="*" 
//               element={<Navigate to={user ? "/" : "/login"} />} 
//             />
//           </Routes>
//         </AnimatePresence>
        
//         {/* Only show Chatbot and Footer if user is logged in */}
//         {user && (
//           <>
//             <Chatbot />
//             <Footer />
//           </>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Exam from './pages/Exam';
import ModuleQuiz from './pages/ModuleQuiz';
import CourseExam from './pages/CourseExam';
import Certificates from './pages/Certificates';
import MyLearning from './pages/MyLearning';
import Login from './pages/Login';
import Module from './pages/Module';
import AdminDashboard from './pages/AdminDashboard';
import InstructorDashboard from './pages/InstructorDashboard';
import FAQ from './pages/FAQ'; 
import InstructorPage from './pages/InstructorPage';
import Chatbot from './components/Chatbot';

// ScrollToTop component to reset scroll position on route change with smooth animation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top with animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Mock user database with consistent email format
const users = {
  // Admin users
  'admin@ificbank.com': { 
    password: 'Admin@2024', 
    role: 'admin', 
    name: 'System Administrator',
    department: 'IT Administration',
    employeeId: 'IFIC-ADM-001'
  },
  'hr.admin@ificbank.com': { 
    password: 'HrAdmin@2024', 
    role: 'admin', 
    name: 'HR Administrator',
    department: 'Human Resources',
    employeeId: 'IFIC-ADM-002'
  },

  // Instructor users
  'farhana.rahman@ificbank.com': { 
    password: 'Instructor@123', 
    role: 'instructor', 
    name: 'Farhana Rahman',
    department: 'Training & Development',
    employeeId: 'IFIC-INS-001',
    expertise: ['Corporate Banking', 'Risk Management']
  },
  'ahmed.hossain@ificbank.com': { 
    password: 'Instructor@456', 
    role: 'instructor', 
    name: 'Ahmed Hossain',
    department: 'Training & Development',
    employeeId: 'IFIC-INS-002',
    expertise: ['Digital Banking', 'Customer Service']
  },
  'nusrat.jahan@ificbank.com': { 
    password: 'Instructor@789', 
    role: 'instructor', 
    name: 'Nusrat Jahan',
    department: 'Training & Development',
    employeeId: 'IFIC-INS-003',
    expertise: ['Compliance', 'AML']
  },

  // Banking Officer users (regular users)
  'fariya.islam@ificbank.com': { 
    password: 'Banker@456', 
    role: 'user', 
    name: 'Fariya Islam',
    department: 'Software Development Team',
    employeeId: 'IFIC-EMP-23456'
  },
  'karim.abdullah@ificbank.com': { 
    password: 'Manager@789', 
    role: 'user', 
    name: 'Karim Abdullah',
    department: 'Corporate Banking',
    employeeId: 'IFIC-MGR-12345'
  },
  'fatima.begum@ificbank.com': { 
    password: 'Officer@321', 
    role: 'user', 
    name: 'Fatima Begum',
    department: 'Operations',
    employeeId: 'IFIC-OFC-45678'
  },
  'raihan.chowdhury@ificbank.com': { 
    password: 'Banker@123', 
    role: 'user', 
    name: 'Raihan Chowdhury',
    department: 'Retail Banking',
    employeeId: 'IFIC-EMP-34567'
  }
};

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (email, password) => {
    const normalizedEmail = email.toLowerCase().trim();
    
    if (users[normalizedEmail] && users[normalizedEmail].password === password) {
      const userData = {
        email: normalizedEmail,
        ...users[normalizedEmail]
      };
      setUser(userData);
      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true, user: userData };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Protected Route Component
  const ProtectedRoute = ({ children, allowedRoles }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    if (allowedRoles && !allowedRoles.includes(user.role)) {
      // Redirect to appropriate dashboard based on role
      switch (user.role) {
        case 'admin':
          return <Navigate to="/admin/dashboard" />;
        case 'instructor':
          return <Navigate to="/instructor/dashboard" />;
        default:
          return <Navigate to="/" />;
      }
    }
    return children;
  };

  // Public Route Component - redirect to appropriate dashboard if logged in
  const PublicRoute = ({ children }) => {
    if (user) {
      // Redirect based on user role
      switch (user.role) {
        case 'admin':
          return <Navigate to="/" />;
        case 'instructor':
          return <Navigate to="/" />;
        default:
          return <Navigate to="/" />;
      }
    }
    return children;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Scroll to top on route change with smooth animation */}
        <ScrollToTop />
        
        {/* Only show Navbar if user is logged in */}
        {user && <Navbar user={user} onLogout={handleLogout} />}
        
        <AnimatePresence mode="wait">
          <Routes>
            {/* Public routes - redirect to dashboard if logged in */}
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login onLogin={handleLogin} />
                </PublicRoute>
              } 
            />
            
            {/* Protected routes */}
            <Route 
              path="/" 
              element={
                  <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/courses" 
              element={
                <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <Courses />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/course/:id" 
              element={
                <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <CourseDetail />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/exam" 
              element={
                <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <Exam />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/exam/:courseId" 
              element={
                <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <CourseExam />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/module-quiz/:moduleName" 
              element={
                <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <ModuleQuiz />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/certificates" 
              element={
                <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <Certificates />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/faq" 
              element={
                <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <FAQ />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/instructors" 
              element={
                <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <InstructorPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/my-learning" 
              element={
                <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <MyLearning />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/module/:moduleName" 
              element={
                <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <Module />
                </ProtectedRoute>
              } 
            />
            
            {/* Admin Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/users" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard section="users" />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/courses" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard section="courses" />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/analytics" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard section="analytics" />
                </ProtectedRoute>
              } 
            />
            
            {/* Instructor Routes */}
            <Route 
              path="/instructor/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['instructor', 'admin']}>
                  <InstructorDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/instructor/courses" 
              element={
                <ProtectedRoute allowedRoles={['instructor', 'admin']}>
                  <InstructorDashboard section="courses" />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/instructor/students" 
              element={
                <ProtectedRoute allowedRoles={['instructor', 'admin']}>
                  <InstructorDashboard section="students" />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/instructor/analytics" 
              element={
                <ProtectedRoute allowedRoles={['instructor', 'admin']}>
                  <InstructorDashboard section="analytics" />
                </ProtectedRoute>
              } 
            />
            
            {/* Default redirect */}
            <Route 
              path="*" 
              element={<Navigate to={user ? "/" : "/login"} />} 
            />
          </Routes>
        </AnimatePresence>
        
        {/* Only show Chatbot and Footer if user is logged in */}
        {user && (
          <>
            <Chatbot />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;