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
          navigate('/');
      }
    } else {
      setError(result.error);
    }
    setIsLoading(false);
  };

//   const demoAccounts = [
//     { 
//       role: 'Admin', 
//       email: 'admin@ificbank.com', 
//       password: 'Admin@2024',
//       description: 'Full system access',
//       icon: Shield,
//       color: 'text-red-600'
//     },
//     { 
//   role: 'Instructor', 
//   email: 'instructor.farhana@ificbank.com', 
//   password: 'Instructor@123',
//   description: 'Course management',
//   icon: BookOpen,
//   color: 'text-blue-600'
// },

//     { 
//       role: 'Banking Officer', 
//       email: 'fariya.islam@ificbank.com', 
//       password: 'Banker@456',
//       description: 'Employee access',
//       icon: User,
//       color: 'text-green-600'
//     }
//   ];


 const demoAccounts = [
    { 
      role: 'Admin', 
      email: 'admin@ificbank.com', 
      password: 'Admin@2024',
      description: 'Full system administration access',
      icon: Shield,
      color: 'text-red-600',
      badge: 'Administrator'
    },
    { 
      role: 'Senior Instructor', 
      email: 'farhana.rahman@ificbank.com', 
      password: 'Instructor@123',
      description: 'Course management & training',
      icon: BookOpen,
      color: 'text-blue-600',
      badge: 'Instructor'
    },
    { 
      role: 'Banking Officer', 
      email: 'fariya.islam@ificbank.com', 
      password: 'Banker@456',
      description: 'Employee learning portal',
      icon: User,
      color: 'text-green-600',
      badge: 'Employee'
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