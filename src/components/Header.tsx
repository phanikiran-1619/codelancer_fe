import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Projects', path: '/projects' },
    { name: 'Publish Paper', path: '/publish' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.1, 0.9]
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      y: -3,
      scale: 1.03,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  const buttonVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header 
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black shadow-lg`}
      style={{
        borderRadius: scrolled ? '0px' : '0 0 24px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            whileHover="hover"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="flex items-center justify-center w-10 h-10 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img 
                  src={logo} 
                  alt="TheCodelancer Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.span 
                className="text-2xl font-bold text-white tracking-tight"
                whileHover={{ 
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                TheCodelancer
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                style={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                    location.pathname === item.path
                      ? 'text-white bg-gray-800 shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-xl"
                      layoutId="activeTab"
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gray-700 rounded-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div 
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="hidden lg:flex items-center"
          >
            <Link
              to="/register"
              className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 border-2 border-transparent hover:border-gray-300"
            >
              <span>Register Now</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 bg-black rounded-full"
              />
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-700 transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden py-4 border-t border-gray-700 bg-black"
            >
              <nav className="flex flex-col space-y-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-white bg-gray-800'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navigation.length * 0.1, ease: "easeOut" }}
                >
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block bg-white text-black px-6 py-3 rounded-full text-sm font-semibold text-center mx-4 mt-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Register Now
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;