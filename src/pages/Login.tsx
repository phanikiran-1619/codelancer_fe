import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DotsPattern from '../components/DotsPattern';
import { Code, User, Lock } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (username === 'phani' && password === 'password') {
      window.location.href = 'https://btechwallah.vercel.app/';
    } else {
      setError('Invalid username or password');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <DotsPattern 
        dotColor="#4b5563" // Darker gray color
        dotSize={1.5} 
        spacing={40} 
        opacity={0.6} // Increased opacity for darker dots
        className="absolute inset-0"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 max-w-md w-full"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center space-x-2 mb-6">
          <motion.div 
            className="flex items-center justify-center w-10 h-10 bg-black rounded-lg"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Code className="w-6 h-6 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-black">Admin Login</h2>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <div className="relative">
            <User className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <Lock className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-400"
            />
          </div>

          {error && (
            <motion.p
              variants={itemVariants}
              className="text-red-500 text-sm text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogin}
            className="w-full bg-black text-white py-2 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 border-2 border-transparent hover:border-gray-300"
          >
            Login
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;