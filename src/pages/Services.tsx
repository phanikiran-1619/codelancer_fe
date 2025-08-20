import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  FileText, 
  BookOpen, 
  Users, 
  Cpu, 
  Shield, 
  Wifi, 
  Brain,
  CheckCircle,
  ArrowRight,
  Zap,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DotsPattern from '../components/DotsPattern';

const Services = () => {
  const mainServices = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Project Development",
      description: "End-to-end development of innovative CS projects using cutting-edge technologies",
      features: [
        "AI & Machine Learning implementations",
        "IoT device integration and networking",
        "Cybersecurity solutions and frameworks",
        "Web and mobile application development",
        "Blockchain and cryptocurrency projects",
        "Cloud computing and distributed systems"
      ],
      technologies: [
        { icon: <Brain />, name: "AI/ML" },
        { icon: <Wifi />, name: "IoT" },
        { icon: <Shield />, name: "Security" },
        { icon: <Cpu />, name: "Systems" }
      ]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Technical Documentation",
      description: "Comprehensive documentation support following industry and academic standards",
      features: [
        "IEEE format documentation",
        "Software Requirements Specification (SRS)",
        "UML diagrams and system architecture",
        "API documentation and user manuals",
        "Code documentation and comments",
        "Project reports and presentations"
      ],
      technologies: [
        { icon: <FileText />, name: "IEEE" },
        { icon: <Code />, name: "UML" },
        { icon: <BookOpen />, name: "SRS" },
        { icon: <Users />, name: "Reports" }
      ]
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Research Paper Publishing",
      description: "Complete support for writing, formatting, and publishing research papers",
      features: [
        "Research methodology guidance",
        "Literature review assistance",
        "Paper writing and structuring",
        "Citation and reference formatting",
        "Journal and conference submissions",
        "Peer review preparation"
      ],
      technologies: [
        { icon: <BookOpen />, name: "Research" },
        { icon: <FileText />, name: "Writing" },
        { icon: <CheckCircle />, name: "Review" },
        { icon: <Zap />, name: "Publish" }
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Mentoring & Support",
      description: "Personalized guidance from industry experts and academic professionals",
      features: [
        "One-on-one mentoring sessions",
        "Technical skill development",
        "Career guidance and planning",
        "Industry networking opportunities",
        "Portfolio development support",
        "Interview preparation assistance"
      ],
      technologies: [
        { icon: <Users />, name: "1-on-1" },
        { icon: <Brain />, name: "Skills" },
        { icon: <Zap />, name: "Career" },
        { icon: <CheckCircle />, name: "Support" }
      ]
    }
  ];

  const additionalServices = [
    "Technical Writing Workshops",
    "Code Review and Optimization",
    "Database Design and Implementation",
    "Testing and Quality Assurance",
    "Version Control and Collaboration",
    "Deployment Support"
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
              Our <span className="text-black border-b-4 border-gray-400">Services</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive support for every aspect of your final year CS project, 
              from initial concept to successful publication and beyond.
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

      {/* Main Services with Enhanced Animations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#d1d5db" 
          dotSize={2} 
          spacing={40} 
          opacity={0.7}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="text-gray-800 mr-4"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, 15, -15, 0],
                        color: "#000"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, techIndex) => (
                      <motion.div 
                        key={techIndex} 
                        className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200"
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                          rotateZ: 5
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                      >
                        <div className="w-4 h-4 text-gray-700">{tech.icon}</div>
                        <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="bg-white rounded-2xl p-8 h-80 flex items-center justify-center border border-gray-200 shadow-lg relative overflow-hidden">
                    <DotsPattern 
                      dotColor="#f3f4f6" 
                      dotSize={1} 
                      spacing={20} 
                      opacity={0.5}
                    />
                    <div className="text-center relative z-10">
                      <motion.div 
                        className="text-gray-800 mb-4 flex justify-center"
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">Professional-grade solutions</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services with Flip Animation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <DotsPattern 
          dotColor="#e5e7eb" 
          dotSize={2} 
          spacing={45} 
          opacity={0.8}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementary services to ensure your complete technical success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  rotateX: 5
                }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview with Advanced Animations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <DotsPattern 
          dotColor="#374151" 
          dotSize={2.5} 
          spacing={40} 
          opacity={0.6}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach ensuring quality delivery and student satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Planning",
                description: "Initial assessment of your requirements and goal setting"
              },
              {
                step: "02",
                title: "Development & Support",
                description: "Hands-on guidance throughout the project lifecycle"
              },
              {
                step: "03",
                title: "Review & Publication",
                description: "Final review, documentation, and publication assistance"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateZ: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 10
                }}
                className="text-center"
              >
                <motion.div 
                  className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#d1d5db" 
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
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-8"
            >
              <Sparkles className="w-16 h-16 text-gray-800 mx-auto" />
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your requirements and create something amazing together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;