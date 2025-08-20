import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  Search,
  Edit,
  Send,
  Trophy,
  Sparkles,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DotsPattern from '../components/DotsPattern';

const PublishPaper = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Research Methodology",
      description: "Expert guidance on research design, data collection methods, and analytical frameworks",
      features: [
        "Research question formulation",
        "Literature review strategies",
        "Methodology selection",
        "Data analysis planning"
      ]
    },
    {
      icon: <Edit className="w-12 h-12" />,
      title: "Paper Writing & Editing",
      description: "Professional writing assistance and comprehensive editing for research papers",
      features: [
        "Paper structure optimization",
        "Academic writing support",
        "Grammar and style editing",
        "Citation formatting"
      ]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Journal Formatting",
      description: "Format your paper according to specific journal requirements and standards",
      features: [
        "IEEE format compliance",
        "ACM style formatting",
        "Journal-specific templates",
        "Reference management"
      ]
    },
    {
      icon: <Send className="w-12 h-12" />,
      title: "Submission Support",
      description: "Complete assistance with journal and conference submission processes",
      features: [
        "Venue selection guidance",
        "Submission process support",
        "Cover letter writing",
        "Reviewer response assistance"
      ]
    }
  ];

  const publications = [
    {
      title: "AI-based Intrusion Detection in IoT Networks",
      journal: "IEEE Internet of Things Journal",
      year: "2024",
      category: "Cybersecurity & AI",
      impact: "Impact Factor: 10.238"
    },
    {
      title: "Blockchain-based Supply Chain Management System",
      journal: "ACM Transactions on Management",
      year: "2024",
      category: "Blockchain",
      impact: "Impact Factor: 8.542"
    },
    {
      title: "Machine Learning for Healthcare Data Analytics",
      journal: "IEEE Transactions on Biomedical Engineering",
      year: "2023",
      category: "Healthcare & ML",
      impact: "Impact Factor: 4.756"
    },
    {
      title: "Smart City Infrastructure Using IoT Sensors",
      journal: "Future Generation Computer Systems",
      year: "2023",
      category: "IoT & Smart Cities",
      impact: "Impact Factor: 7.307"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation & Assessment",
      description: "Initial consultation to understand your research and identify publication opportunities",
      duration: "1-2 days"
    },
    {
      step: "02",
      title: "Research & Writing Support",
      description: "Comprehensive support for research methodology and paper writing",
      duration: "2-6 weeks"
    },
    {
      step: "03",
      title: "Review & Formatting",
      description: "Thorough review, editing, and formatting according to target journal standards",
      duration: "1-2 weeks"
    },
    {
      step: "04",
      title: "Submission & Follow-up",
      description: "Journal submission support and assistance with reviewer responses",
      duration: "Ongoing"
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
              <BookOpen className="w-16 h-16 text-gray-800 mx-auto" />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Publish Your <span className="text-black border-b-4 border-gray-400">Research</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your final year project into a published research paper. Get expert guidance 
              for writing, formatting, and publishing in top-tier journals and conferences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                { number: "25+", label: "Papers Published", icon: <Trophy className="w-6 h-6" /> },
                { number: "15+", label: "Journals & Conferences", icon: <Award className="w-6 h-6" /> },
                { number: "100%", label: "Acceptance Rate", icon: <Target className="w-6 h-6" /> }
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

      {/* Services Section */}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Publication Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to help you publish your research in reputed journals and conferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 relative overflow-hidden"
              >
                <DotsPattern 
                  dotColor="#f9fafb" 
                  dotSize={1} 
                  spacing={25} 
                  opacity={0.6}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-gray-800 mb-6"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 15, -15, 0]
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Success stories from our students who published their research in prestigious venues.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {publication.category}
                  </span>
                  <span className="text-gray-500 font-medium">{publication.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{publication.title}</h3>
                <p className="text-gray-700 mb-2 font-medium">{publication.journal}</p>
                <p className="text-gray-600 text-sm">{publication.impact}</p>
                
                <motion.div 
                  className="mt-4 flex items-center text-green-600"
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Successfully Published</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Publication Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our structured approach to help you publish your research successfully.
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-6"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.step}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    <span className="text-gray-400">{step.duration}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Why Publish Your Research?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Academic Recognition",
                  description: "Gain recognition in the academic community and build your research profile"
                },
                {
                  icon: <Trophy className="w-8 h-8" />,
                  title: "Career Advancement",
                  description: "Published papers significantly boost your CV and career prospects"
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Research Impact",
                  description: "Contribute to the knowledge base and make a real-world impact"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    rotateY: 5
                  }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                >
                  <motion.div 
                    className="text-gray-800 mb-4 flex justify-center"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              <BookOpen className="w-16 h-16 text-gray-800 mx-auto" />
            </motion.div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Publish Your Research?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Transform your final year project into a published research paper with our expert guidance.
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
                  <span>Start Publishing</span>
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

export default PublishPaper;