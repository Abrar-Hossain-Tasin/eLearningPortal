// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       // Fake login - in real app, this would be an API call
//       const user = { 
//         name: email.split('@')[0] || 'Student',
//         email: email,
//         avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0] || 'Student'}&background=ef4444&color=fff`
//       };
//       onLogin && onLogin(user);
//       setIsLoading(false);
//       navigate('/');
//     }, 1500);
//   };

//   const handleDemoLogin = (role) => {
//     const demoUsers = {
//       manager: { email: 'manager@ificbank.com', password: 'demo123', name: 'Ahmad Rahman' },
//       employee: { email: 'employee@ificbank.com', password: 'demo123', name: 'Fatima Begum' },
//       student: { email: 'student@ificbank.com', password: 'demo123', name: 'Rajesh Kumar' }
//     };

//     const user = demoUsers[role];
//     setEmail(user.email);
//     setPassword(user.password);
    
//     // Auto login after setting credentials
//     setTimeout(() => {
//       onLogin && onLogin({ 
//         name: user.name,
//         email: user.email,
//         avatar: `https://ui-avatars.com/api/?name=${user.name}&background=ef4444&color=fff`
//       });
//       navigate('/');
//     }, 500);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-md w-full space-y-8"
//       >
//         {/* Header */}
//         <div className="text-center">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring" }}
//             className="flex justify-center mb-6"
//           >
//             <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
//               <span className="text-white font-bold text-2xl">IFIC</span>
//             </div>
//           </motion.div>
          
//           <motion.h2
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-3xl font-bold text-slate-900 mb-2"
//           >
//             Welcome Back
//           </motion.h2>
          
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-slate-600"
//           >
//             Sign in to your IFIC Bank eLearning account
//           </motion.p>
//         </div>

//         {/* Demo Login Buttons */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-slate-200"
//         >
//           <p className="text-sm text-slate-600 mb-3 text-center">Quick Demo Login:</p>
//           <div className="grid grid-cols-3 gap-2">
//             <button
//               onClick={() => handleDemoLogin('manager')}
//               className="px-3 py-2 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 transition-colors"
//             >
//               Manager
//             </button>
//             <button
//               onClick={() => handleDemoLogin('employee')}
//               className="px-3 py-2 bg-green-500 text-white text-xs rounded-lg hover:bg-green-600 transition-colors"
//             >
//               Employee
//             </button>
//             <button
//               onClick={() => handleDemoLogin('student')}
//               className="px-3 py-2 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors"
//             >
//               Student
//             </button>
//           </div>
//         </motion.div>

//         {/* Login Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200"
//         >
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me & Forgot Password */}
//             <div className="flex items-center justify-between">
//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="w-4 h-4 text-red-600 focus:ring-red-500 border-slate-300 rounded"
//                 />
//                 <span className="text-sm text-slate-600">Remember me</span>
//               </label>
              
//               <button
//                 type="button"
//                 className="text-sm text-red-600 hover:text-red-700 font-medium"
//               >
//                 Forgot password?
//               </button>
//             </div>

//             {/* Submit Button */}
//             <motion.button
//               type="submit"
//               disabled={isLoading}
//               whileHover={{ scale: isLoading ? 1 : 1.02 }}
//               whileTap={{ scale: isLoading ? 1 : 0.98 }}
//               className="w-full bg-gradient-to-r from-red-600 to-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//             >
//               {isLoading ? (
//                 <>
//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                   <span>Signing in...</span>
//                 </>
//               ) : (
//                 <>
//                   <User className="w-5 h-5" />
//                   <span>Sign In</span>
//                 </>
//               )}
//             </motion.button>

//             {/* Divider */}
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-slate-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-slate-500">New to IFIC eLearning?</span>
//               </div>
//             </div>

//             {/* Register Link */}
//             <div className="text-center">
//               <button
//                 type="button"
//                 onClick={() => navigate('/register')}
//                 className="w-full border-2 border-slate-300 text-slate-700 py-3 px-4 rounded-lg font-semibold hover:border-red-600 hover:text-red-600 transition-all duration-200"
//               >
//                 Create New Account
//               </button>
//             </div>
//           </form>
//         </motion.div>

//         {/* Footer */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="text-center text-sm text-slate-500"
//         >
//           <p>© 2024 IFIC Bank. All rights reserved.</p>
//           <p className="mt-1">
//             By signing in, you agree to our{' '}
//             <a href="#" className="text-red-600 hover:text-red-700 font-medium">
//               Terms of Service
//             </a>{' '}
//             and{' '}
//             <a href="#" className="text-red-600 hover:text-red-700 font-medium">
//               Privacy Policy
//             </a>
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Building, User, Shield, BookOpen } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = onLogin(email, password);
    
    if (result.success) {
      // Redirect based on role
      switch (result.user.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'instructor':
          navigate('/instructor');
          break;
        default:
          navigate('/my-learning');
      }
    } else {
      setError(result.error);
    }
    setIsLoading(false);
  };

  const demoAccounts = [
    { 
      role: 'Admin', 
      email: 'admin@ificbank.com', 
      password: 'Admin@2024',
      description: 'Full system access',
      icon: Shield,
      color: 'text-red-600'
    },
    { 
  role: 'Instructor', 
  email: 'instructor.farhana@ificbank.com', 
  password: 'Instructor@123',
  description: 'Course management',
  icon: BookOpen,
  color: 'text-blue-600'
},

    { 
      role: 'Banking Officer', 
      email: 'fariya.islam@ificbank.com', 
      password: 'Banker@456',
      description: 'Employee access',
      icon: User,
      color: 'text-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Demo Accounts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900">IFIC Bank eLearning</h2>
              <p className="text-gray-600 mt-2">Professional Development Portal</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Demo Access</h3>
              {demoAccounts.map((account, index) => (
                <motion.div
                  key={account.role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-2xl p-4 hover:border-red-300 transition-colors cursor-pointer group"
                  onClick={() => {
                    setEmail(account.email);
                    setPassword(account.password);
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-red-50 transition-colors">
                      <account.icon className={`w-6 h-6 ${account.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">{account.role}</h4>
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-lg">Click to fill</span>
                      </div>
                      <p className="text-sm text-gray-600">{account.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{account.email}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-gray-900">Welcome Back</h1>
              <p className="text-gray-600 mt-2">Sign in to your IFIC Bank account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm"
                >
                  {error}
                </motion.div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="employee@ificbank.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing In...' : 'Sign In to Portal'}
              </button>

              <div className="text-center">
                <Link to="/forgot-password" className="text-red-600 hover:text-red-700 text-sm font-semibold">
                  Forgot your password?
                </Link>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Secure access for IFIC Bank employees only. Unauthorized access prohibited.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;