import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Eye, 
  ExternalLink, 
  Filter,
  Brain,
  Wifi,
  Shield,
  Smartphone,
  Globe,
  Database,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DotsPattern from '../components/DotsPattern';

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { name: 'All', icon: <Filter className="w-4 h-4" /> },
    { name: 'AI/ML', icon: <Brain className="w-4 h-4" /> },
    { name: 'IoT', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Web Development', icon: <Globe className="w-4 h-4" /> },
    { name: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'Data Science', icon: <Database className="w-4 h-4" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Smart Home Automation with IoT",
      category: "IoT",
      description: "Complete IoT solution for home automation with mobile app control, sensor integration, and real-time monitoring.",
      technologies: ["Arduino", "React Native", "Firebase", "ESP32"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      status: "Completed",
      duration: "4 months",
      highlights: ["IEEE Documentation", "Mobile App", "Hardware Integration"]
    },
    {
      id: 2,
      title: "AI-Powered Chatbot for E-commerce",
      category: "AI/ML",
      description: "Intelligent chatbot using NLP for customer service automation with sentiment analysis and recommendation engine.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
      status: "Completed",
      duration: "3 months",
      highlights: ["Natural Language Processing", "Machine Learning", "API Integration"]
    },
    {
      id: 3,
      title: "Blockchain-based Voting System",
      category: "Web Development",
      description: "Secure and transparent voting system using blockchain technology with smart contracts and web interface.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      image: "https://images.unsplash.com/photo-1559445368-b8a4d659b08a?w=500&h=300&fit=crop",
      status: "Completed",
      duration: "5 months",
      highlights: ["Blockchain Technology", "Smart Contracts", "Security Features"]
    },
    {
      id: 4,
      title: "Cybersecurity Threat Detection",
      category: "Cybersecurity",
      description: "Machine learning-based network intrusion detection system with real-time threat analysis and alerting.",
      technologies: ["Python", "Scikit-learn", "Django", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
      status: "Completed",
      duration: "4 months",
      highlights: ["Machine Learning", "Network Security", "Real-time Analysis"]
    },
    {
      id: 5,
      title: "Health Monitoring Mobile App",
      category: "Mobile Apps",
      description: "Cross-platform mobile app for health tracking with wearable device integration and AI-powered insights.",
      technologies: ["Flutter", "Firebase", "Python", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      status: "Completed",
      duration: "3 months",
      highlights: ["Cross-platform", "Health Analytics", "Wearable Integration"]
    },
    {
      id: 6,
      title: "Big Data Analytics Dashboard",
      category: "Data Science",
      description: "Real-time data analytics platform with interactive dashboards and predictive modeling capabilities.",
      technologies: ["Python", "Apache Spark", "React", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      status: "Completed",
      duration: "4 months",
      highlights: ["Big Data Processing", "Interactive Dashboards", "Predictive Analytics"]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotateY: 90,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <DotsPattern 
          dotColor="#9ca3af" 
          dotSize={2.5} 
          spacing={35} 
          opacity={0.9}
          animated={true}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6"
            >
              <Code className="w-16 h-16 text-gray-800 mx-auto" />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Projects <span className="text-black border-b-4 border-gray-400">Gallery</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Explore our portfolio of successful final year projects across various domains. 
              Each project showcases innovation, technical excellence, and real-world application.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                { number: "50+", label: "Projects Completed", icon: <Code className="w-6 h-6" /> },
                { number: "15+", label: "Technology Stacks", icon: <Sparkles className="w-6 h-6" /> },
                { number: "100%", label: "Success Rate", icon: <Eye className="w-6 h-6" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    rotateY: 10
                  }}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-200"
                >
                  <motion.div 
                    className="text-gray-800 mb-3 flex justify-center"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-gray-300 rounded-full opacity-40"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 bg-gray-400 rounded-full opacity-30"
          animate={{ 
            y: [0, 40, 0],
            x: [0, -20, 0],
            rotateZ: [0, -360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#d1d5db" 
          dotSize={1.5} 
          spacing={40} 
          opacity={0.5}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Filter by Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  onClick={() => setActiveFilter(category.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.name
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <DotsPattern 
          dotColor="#f3f4f6" 
          dotSize={1.8} 
          spacing={45} 
          opacity={0.6}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={projectVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm font-medium">{project.status}</span>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="bg-white/20 backdrop-blur-md rounded-full p-2"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm">{project.duration}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="bg-white text-gray-700 px-2 py-1 rounded text-xs font-medium border border-gray-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <motion.li
                            key={highlightIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: highlightIndex * 0.1 }}
                            className="flex items-center text-gray-600 text-sm"
                          >
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 360 }}
                              className="w-1.5 h-1.5 bg-gray-800 rounded-full mr-2"
                            />
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-black text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No projects found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <DotsPattern 
          dotColor="#374151" 
          dotSize={2.5} 
          spacing={40} 
          opacity={0.6}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6"
            >
              <Sparkles className="w-16 h-16 text-white mx-auto" />
            </motion.div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Build Your Own Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our portfolio of successful students and create something amazing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Get Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsGallery;