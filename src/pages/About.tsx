import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Lightbulb, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DotsPattern from '../components/DotsPattern';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Fostering creativity and cutting-edge solutions in every project"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Maintaining the highest standards in academic and technical delivery"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Building strong partnerships between students, mentors, and industry"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Support",
      description: "Providing comprehensive guidance throughout the academic journey"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const flipVariants = {
    hidden: { rotateY: -90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
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
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              About <span className="text-black border-b-4 border-gray-400">thecodelancer</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering the next generation of Computer Science innovators through 
              comprehensive academic support and cutting-edge project development.
            </motion.p>
          </motion.div>
        </div>

        {/* Floating Elements with Enhanced Animations */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-gray-300 rounded-full opacity-40"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 bg-gray-400 rounded-full opacity-30"
          animate={{ 
            y: [0, 40, 0],
            x: [0, -20, 0],
            rotateZ: [0, -180, -360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      {/* Vision & Mission with Flip Animation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#d1d5db" 
          dotSize={2} 
          spacing={40} 
          opacity={0.7}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={flipVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                rotateX: 5
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="bg-gray-100 p-3 rounded-full mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="w-8 h-8 text-gray-800" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading platform that transforms final year Computer Science 
                students into industry-ready innovators, bridging the gap between academic 
                learning and real-world application through cutting-edge project development 
                and comprehensive technical support.
              </p>
            </motion.div>

            <motion.div
              variants={flipVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                rotateX: 5
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="bg-gray-100 p-3 rounded-full mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-8 h-8 text-gray-800" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide exceptional mentoring, technical documentation support, and 
                research publication guidance that enables CS students to develop innovative 
                projects using the latest technologies, while maintaining the highest 
                academic standards and industry relevance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with Enhanced Animations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <DotsPattern 
          dotColor="#9ca3af" 
          dotSize={1.8} 
          spacing={45} 
          opacity={0.6}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to student success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  rotateX: 10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  scale: 1.05
                }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <motion.div 
                  className="text-gray-800 mb-4 flex justify-center"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <DotsPattern 
          dotColor="#374151" 
          dotSize={2.5} 
          spacing={40} 
          opacity={0.6}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "10+", label: "Papers Published" },
              { number: "95%", label: "Success Rate" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 360
                }}
                className="text-center text-white"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Advanced Animations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#e5e7eb" 
          dotSize={2} 
          spacing={35} 
          opacity={0.8}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Students Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The unique advantages that set thecodelancer apart in CS education support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Excellence",
                items: ["IEEE standard documentation", "Comprehensive technical writing", "Research methodology guidance", "Publication support"]
              },
              {
                title: "Technical Innovation", 
                items: ["Latest technology integration", "AI and ML implementations", "Cybersecurity projects", "Industry-relevant solutions"]
              },
              {
                title: "Career Preparation",
                items: ["Resume building", "Portfolio development", "Professional networking", "Interview preparation"]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateZ: -10 }}
                whileInView={{ opacity: 1, rotateZ: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -15,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {benefit.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (itemIndex * 0.1) }}
                      className="flex items-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        className="w-2 h-2 bg-gray-800 rounded-full mr-3"
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <DotsPattern 
          dotColor="#d1d5db" 
          dotSize={2} 
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
              whileHover={{ 
                scale: 1.05,
                rotateY: 5
              }}
              className="mb-8"
            >
              <Sparkles className="w-16 h-16 text-gray-800 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thecodelancer today and transform your CS project ideas into reality.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/register"
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;