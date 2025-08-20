import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  FileText, 
  Code, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Calendar,
  Lightbulb,
  Target,
  Award,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DotsPattern from '../components/DotsPattern';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Initial Consultation",
      description: "Share your project ideas, requirements, and academic goals with our expert team",
      details: [
        "Free 30-minute consultation call",
        "Project requirement analysis",
        "Technology recommendation",
        "Timeline estimation"
      ]
    },
    {
      step: "02", 
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Project Planning",
      description: "We create a detailed project plan tailored to your specific needs and timeline",
      details: [
        "Customized project roadmap",
        "Technology stack selection",
        "Resource allocation",
        "Milestone definition"
      ]
    },
    {
      step: "03",
      icon: <Code className="w-12 h-12" />,
      title: "Development Phase",
      description: "Expert-guided development with regular check-ins and continuous support",
      details: [
        "Hands-on mentoring sessions",
        "Code reviews and guidance",
        "Weekly progress meetings",
        "24/7 support availability"
      ]
    },
    {
      step: "04",
      icon: <FileText className="w-12 h-12" />,
      title: "Documentation",
      description: "Comprehensive IEEE-standard documentation and technical writing support",
      details: [
        "IEEE format documentation",
        "Technical specifications",
        "User manuals creation",
        "Presentation materials"
      ]
    },
    {
      step: "05",
      icon: <Target className="w-12 h-12" />,
      title: "Testing & Review",
      description: "Thorough testing, debugging, and final project review before submission",
      details: [
        "Comprehensive testing",
        "Bug fixes and optimization",
        "Performance evaluation",
        "Final quality assurance"
      ]
    },
    {
      step: "06",
      icon: <Award className="w-12 h-12" />,
      title: "Delivery & Support",
      description: "Project delivery with post-submission support and presentation assistance",
      details: [
        "Complete project handover",
        "Viva preparation support",
        "Presentation coaching",
        "Post-delivery assistance"
      ]
    }
  ];

  const processHighlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Industry professionals and academic experts guide you throughout"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Timeline",
      description: "Customized schedules that work with your academic calendar"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Multiple review cycles ensure top-notch project quality"
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

  const stepVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
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
              <Sparkles className="w-16 h-16 text-gray-800 mx-auto" />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              How It <span className="text-black border-b-4 border-gray-400">Works</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              From initial idea to final submission, we guide you through every step of your 
              final year project journey with expert mentorship and comprehensive support.
            </motion.p>
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

      {/* Process Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#d1d5db" 
          dotSize={2} 
          spacing={40} 
          opacity={0.7}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our 6-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your project's success from conception to completion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 relative overflow-hidden"
              >
                <DotsPattern 
                  dotColor="#f9fafb" 
                  dotSize={1} 
                  spacing={25} 
                  opacity={0.6}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.step}
                    </motion.div>
                    <motion.div 
                      className="text-gray-800"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (detailIndex * 0.1) }}
                        className="flex items-center text-gray-600"
                      >
                        <motion.div
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          className="w-2 h-2 bg-gray-800 rounded-full mr-3 flex-shrink-0"
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <DotsPattern 
          dotColor="#f3f4f6" 
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Our Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key elements that make our methodology successful for CS students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  scale: 1.05
                }}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg border border-gray-100"
              >
                <motion.div 
                  className="text-gray-800 mb-4 flex justify-center"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {highlight.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <DotsPattern 
          dotColor="#374151" 
          dotSize={2.5} 
          spacing={40} 
          opacity={0.6}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Typical Project Timeline</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every project is unique, but here's what you can expect in terms of timeline.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                duration: "Week 1-2",
                title: "Project Setup",
                description: "Consultation, planning, and initial setup"
              },
              {
                duration: "Week 3-10",
                title: "Development",
                description: "Core development with weekly milestones"
              },
              {
                duration: "Week 11-12",
                title: "Finalization",
                description: "Testing, documentation, and delivery"
              }
            ].map((timeline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700"
              >
                <motion.div 
                  className="text-2xl font-bold text-white mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {timeline.duration}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">{timeline.title}</h3>
                <p className="text-gray-300">{timeline.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#e5e7eb" 
          dotSize={2} 
          spacing={35} 
          opacity={0.7}
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
              className="mb-8"
            >
              <Target className="w-16 h-16 text-gray-800 mx-auto" />
            </motion.div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's turn your project ideas into reality with our proven process and expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Get Started Now</span>
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
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-black hover:text-black hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Ask Questions</span>
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

export default HowItWorks;