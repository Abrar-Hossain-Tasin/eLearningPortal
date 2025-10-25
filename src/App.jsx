import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Chatbot from './components/Chatbot'; // Add this import

// Mock user database
const users = {
  'admin@ificbank.com': { 
    password: 'Admin@2024', 
    role: 'admin', 
    name: 'System Administrator',
    department: 'IT'
  },
 'instructor.farhana@ificbank.com': { 
  password: 'Instructor@123', 
  role: 'instructor', 
  name: 'Farhana Rahman',
  department: 'Training'
},

  'fariya.islam@ificbank.com': { 
    password: 'Banker@456', 
    role: 'user', 
    name: 'Fariya Islam',
    department: 'Software Development Team',
    employeeId: 'IFIC-EMP-23456'
  },
  'manager.karim@ificbank.com': { 
    password: 'Manager@789', 
    role: 'user', 
    name: 'Karim Abdullah',
    department: 'Corporate Banking',
    employeeId: 'IFIC-MGR-12345'
  },
  'officer.fatima@ificbank.com': { 
    password: 'Officer@321', 
    role: 'user', 
    name: 'Fatima Begum',
    department: 'Operations',
    employeeId: 'IFIC-OFC-45678'
  }
};

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (users[email] && users[email].password === password) {
      const userData = {
        email,
        ...users[email]
      };
      setUser(userData);
      return { success: true, user: userData };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Protected Route Component
  const ProtectedRoute = ({ children, allowedRoles }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    if (allowedRoles && !allowedRoles.includes(user.role)) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar user={user} onLogout={handleLogout} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/exam/:courseId" element={<CourseExam />} />
            <Route path="/module-quiz/:moduleName" element={<ModuleQuiz />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/instructors" element={<InstructorPage />} />
            <Route 
              path="/my-learning" 
              element={
                <ProtectedRoute allowedRoles={['user', 'instructor', 'admin']}>
                  <MyLearning />
                </ProtectedRoute>
              } 
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/module/:moduleName" element={<Module />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/instructor" 
              element={
                <ProtectedRoute allowedRoles={['instructor', 'admin']}>
                  <InstructorDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </AnimatePresence>
        
        {/* Add Chatbot Component */}
        <Chatbot />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;