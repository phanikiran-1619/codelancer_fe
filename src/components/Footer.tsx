import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import DotsPattern from './DotsPattern';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 relative overflow-hidden">
      <DotsPattern 
        dotColor="#374151" 
        dotSize={1.5} 
        spacing={40} 
        opacity={0.3}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div 
                className="flex items-center justify-center w-8 h-8 bg-white rounded-lg"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <Code className="w-5 h-5 text-black" />
              </motion.div>
              <span className="text-lg font-bold">thecodelancer</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Empowering final year CS students with innovative project development, 
              technical documentation, and research paper publishing support.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: "hover:text-blue-400" },
                { icon: Twitter, color: "hover:text-cyan-400" },
                { icon: Linkedin, color: "hover:text-blue-400" },
                { icon: Instagram, color: "hover:text-pink-400" }
              ].map(({ icon: Icon, color }, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className={`text-gray-400 ${color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects Gallery", path: "/projects" },
                { name: "How It Works", path: "/how-it-works" },
                { name: "Blog", path: "/blog" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {[
                "Project Development",
                "Technical Documentation", 
                "Research Papers",
                "Mentoring",
                "Publication Support"
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="text-gray-400">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              {[
                { icon: Mail, text: "dheerajdonepudi18@gmail.com", color: "text-blue-400" },
                { icon: Phone, text: "+91 8143965686", color: "text-green-400" },
                { icon: MapPin, text: "Vijayawada, Andhra Pradesh, India", color: "text-red-400" }
              ].map(({ icon: Icon, text, color }, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="text-gray-400 text-sm">{text}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-transparent hover:border-gray-300"
              >
                Login
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 thecodelancer. All rights reserved. Empowering the next generation of CS innovators.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;