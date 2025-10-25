// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search, Bell, User, Settings, LogOut, BookOpen, Award, Users, HelpCircle, Menu, X, ChevronDown } from 'lucide-react';

// const Navbar = ({ user, onLogout }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const menuItems = [
//     { name: 'Courses', path: '/courses', icon: BookOpen },
//     { name: 'My Learning', path: '/my-learning', icon: BookOpen },
//     { name: 'Certificates', path: '/certificates', icon: Award },
//     { name: 'Instructors', path: '/instructors', icon: Users },
//     { name: 'Support', path: '/support', icon: HelpCircle },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-sm"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-4 group">
//             <div className="flex items-center space-x-3">
//               <img 
//                 src="/ific-logo.png" 
//                 alt="IFIC Bank" 
//                 className="h-10 w-auto object-contain"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="h-12 w-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg hidden">
//                 <span className="text-white font-bold text-sm">IFIC</span>
//               </div>
//               <div className="flex flex-col">
//                 <h1 className="text-2xl font-black text-gray-900 leading-tight">
//                   IFIC BANK
//                 </h1>
//                 <p className="text-xs text-gray-600 font-medium">eLearning Portal</p>
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-1">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="relative px-6 py-3 text-gray-700 hover:text-red-700 font-semibold rounded-xl transition-all duration-300 group"
//               >
//                 <span className="relative z-10 flex items-center space-x-2">
//                   <item.icon className="w-4 h-4" />
//                   <span>{item.name}</span>
//                 </span>
//                 <div className="absolute inset-0 bg-red-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </Link>
//             ))}
//           </div>

//           {/* Search Bar */}
//           <div className="hidden xl:block relative w-96">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search courses, modules..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
//               />
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center space-x-3">
//             {/* Notification Bell */}
//             <button className="relative p-3 text-gray-600 hover:text-red-700 rounded-xl hover:bg-gray-100 transition-all duration-300">
//               <Bell className="w-6 h-6" />
//               <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white text-xs text-white flex items-center justify-center font-bold">
//                 3
//               </span>
//             </button>

//             {/* User Avatar */}
//             {user ? (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
//                 >
//                   <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg">
//                     <span className="text-white font-bold text-sm">
//                       {user.name?.charAt(0).toUpperCase()}
//                     </span>
//                   </div>
//                   <span className="text-gray-700 font-semibold hidden xl:block">
//                     {user.name}
//                   </span>
//                   <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 </button>

//                 {/* Dropdown Menu */}
//                 <AnimatePresence>
//                   {isDropdownOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                       className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-3 z-50"
//                     >
//                       <div className="px-4 py-2 border-b border-gray-100">
//                         <p className="text-sm font-semibold text-gray-900">{user.name}</p>
//                         <p className="text-xs text-gray-500">{user.email}</p>
//                       </div>
                      
//                       <button className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors">
//                         <User className="w-5 h-5" />
//                         <span>Profile</span>
//                       </button>
//                       <button className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors">
//                         <Settings className="w-5 h-5" />
//                         <span>Settings</span>
//                       </button>
//                       <button
//                         onClick={onLogout}
//                         className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 flex items-center space-x-3 border-t border-gray-100 transition-colors"
//                       >
//                         <LogOut className="w-5 h-5" />
//                         <span>Logout</span>
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               <Link
//                 to="/login"
//                 className="px-8 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 Login
//               </Link>
//             )}

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-3 text-gray-600 hover:text-red-700 rounded-xl hover:bg-gray-100 transition-all duration-300"
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="lg:hidden border-t border-gray-200 py-4 space-y-2 bg-white"
//             >
//               {/* Mobile Search */}
//               <div className="relative mb-4 px-4">
//                 <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search courses..."
//                   className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
//                 />
//               </div>

//               {menuItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className="block px-6 py-4 text-gray-700 hover:text-red-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <item.icon className="w-5 h-5" />
//                     <span>{item.name}</span>
//                   </div>
//                 </Link>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Overlay for dropdown */}
//       {isDropdownOpen && (
//         <div
//           className="fixed inset-0 z-40"
//           onClick={() => setIsDropdownOpen(false)}
//         />
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, User, Settings, LogOut, BookOpen, Award, Users, HelpCircle, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = ({ user, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'My Learning', path: '/my-learning', icon: BookOpen },
     { name: 'Exams', path: '/exam', icon: Award },
    { name: 'Certificates', path: '/certificates', icon: Award },
    { name: 'Instructors', path: '/instructors', icon: Users },
    { name: 'Support', path: '/support', icon: HelpCircle },
  
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Compact Version */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/ific-logo.png" 
                alt="IFIC Bank" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="h-12 w-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg hidden">
                <span className="text-white font-bold text-sm">IFIC</span>
              </div>
              <div className="flex flex-col leading-none">
                <h1 className="text-xl font-black text-gray-900 whitespace-nowrap">
                  IFIC BANK
                </h1>
                <p className="text-[10px] text-gray-600 font-medium mt-0.5">eLearning</p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu - More Compact */}
          <div className="hidden lg:flex items-center space-x-0 mx-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-4 py-3 text-gray-700 hover:text-red-700 font-medium rounded-lg transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center space-x-2 text-sm">
                  <item.icon className="w-4 h-4" />
                  <span className="whitespace-nowrap">{item.name}</span>
                </span>
                <div className="absolute inset-0 bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Search Bar - Smaller */}
          <div className="hidden xl:block relative flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 text-sm"
              />
            </div>
          </div>

          {/* Right Section - More Compact */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Notification Bell */}
            <button className="relative p-2.5 text-gray-600 hover:text-red-700 rounded-lg hover:bg-gray-100 transition-all duration-300">
              <Bell className="w-5 h-5" />
           <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full border-2 border-white text-xs text-white flex items-center justify-center font-bold shadow-sm">
  3
</span>
            </button>

            {/* User Avatar */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xs">
                      {user.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-700 font-medium hidden xl:block text-sm whitespace-nowrap">
                    {user.name}
                  </span>
                  <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                    >
                      <div className="px-3 py-2 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      
                      <button className="w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-2 transition-colors text-sm">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button className="w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-2 transition-colors text-sm">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                      <button
                        onClick={onLogout}
                        className="w-full px-3 py-2 text-left text-red-600 hover:bg-red-50 flex items-center space-x-2 border-t border-gray-100 transition-colors text-sm"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm whitespace-nowrap"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-gray-600 hover:text-red-700 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 py-4 space-y-2 bg-white"
            >
              {/* Mobile Search */}
              <div className="relative mb-4 px-4">
                <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all text-sm"
                />
              </div>

              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-3 text-gray-700 hover:text-red-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay for dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </motion.nav>
  );
};

export default Navbar;