import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DotsPattern from '../components/DotsPattern';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      category: "General Services",
      questions: [
        {
          q: "What services does thecodelancer offer?",
          a: "We offer comprehensive support for CS students including project development, technical documentation, research paper writing, mentoring, and publication assistance. Our services cover AI/ML, IoT, cybersecurity, web development, and more."
        },
        {
          q: "Who can use thecodelancer services?",
          a: "Our services are designed for B.Tech and M.Tech Computer Science students, particularly those working on final year projects. We also support students from related fields like IT, Electronics, and Data Science."
        },
        {
          q: "How do I get started with thecodelancer?",
          a: "Simply click on 'Register Now' on our website, fill out the registration form with your project requirements, and we'll contact you within 24 hours to discuss your needs and create a customized plan."
        }
      ]
    },
    {
      category: "Project Development",
      questions: [
        {
          q: "What types of projects do you help with?",
          a: "We assist with a wide range of projects including AI & Machine Learning implementations, IoT device integration, cybersecurity solutions, web and mobile applications, blockchain projects, and cloud computing systems."
        },
        {
          q: "Do you provide complete project development or just guidance?",
          a: "We offer both options. We can provide complete end-to-end project development or serve as mentors guiding you through the development process, depending on your needs and preferences."
        },
        {
          q: "Can you help with project ideas and topic selection?",
          a: "Absolutely! We help students brainstorm innovative project ideas based on current industry trends, your interests, and academic requirements. We ensure your project stands out and meets academic standards."
        }
      ]
    },
    {
      category: "Documentation & Papers",
      questions: [
        {
          q: "Do you provide IEEE standard documentation?",
          a: "Yes, we specialize in IEEE standard documentation including Software Requirements Specification (SRS), system design documents, user manuals, and technical reports that meet academic and industry standards."
        },
        {
          q: "Can you help with research paper publication?",
          a: "We provide comprehensive support for research paper writing, formatting, and publication. This includes methodology guidance, literature review assistance, paper structuring, and submission to relevant journals and conferences."
        },
        {
          q: "What documentation formats do you support?",
          a: "We support various documentation formats including IEEE standards, ACM format, project reports, technical specifications, user manuals, API documentation, and presentation materials."
        }
      ]
    },
    {
      category: "Pricing & Timeline",
      questions: [
        {
          q: "How much do your services cost?",
          a: "Our pricing varies based on project complexity, timeline, and specific requirements. We offer competitive rates with student-friendly packages. Contact us for a personalized quote based on your project needs."
        },
        {
          q: "Do you offer discounts for students?",
          a: "Yes, we offer special student discounts and flexible payment plans. We understand budget constraints and work with students to make our services affordable while maintaining quality."
        },
        {
          q: "What is the typical timeline for project completion?",
          a: "Timeline varies based on project complexity. Simple projects may take 1-2 months, while complex AI/ML or IoT projects might need 3-6 months. We work with your academic deadlines to ensure timely delivery."
        }
      ]
    },
    {
      category: "Support & Communication",
      questions: [
        {
          q: "How do you provide mentoring and support?",
          a: "We offer one-on-one mentoring sessions via video calls, regular progress reviews, 24/7 chat support, and hands-on guidance throughout your project lifecycle. Our mentors are industry experts and academic professionals."
        },
        {
          q: "What is your response time for queries?",
          a: "We typically respond to emails within 24 hours on business days. For urgent queries, we offer phone support during business hours (9 AM - 6 PM IST) for immediate assistance."
        },
        {
          q: "Do you provide post-project support?",
          a: "Yes, we offer post-project support including documentation revisions, presentation assistance, viva preparation, and help with project deployment or demonstration setup."
        }
      ]
    }
  ];

  const allQuestions = faqData.flatMap((category, categoryIndex) => 
    category.questions.map((q, qIndex) => ({
      ...q,
      id: categoryIndex * 100 + qIndex,
      category: category.category
    }))
  );

  const filteredQuestions = allQuestions.filter(
    item =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

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
              <HelpCircle className="w-16 h-16 text-gray-800 mx-auto" />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Frequently Asked <span className="text-black border-b-4 border-gray-400">Questions</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Find answers to common questions about our services, processes, and how we can help 
              you succeed in your final year project.
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

      {/* Search Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#d1d5db" 
          dotSize={1.5} 
          spacing={40} 
          opacity={0.5}
        />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <motion.input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 text-lg bg-white shadow-lg"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>
          
          {searchTerm && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-gray-600 text-center"
            >
              Found {filteredQuestions.length} result(s) for "{searchTerm}"
            </motion.p>
          )}
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <DotsPattern 
          dotColor="#f3f4f6" 
          dotSize={1.8} 
          spacing={45} 
          opacity={0.6}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {searchTerm ? (
            /* Search Results */
            <div className="space-y-4">
              {filteredQuestions.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
                >
                  <motion.button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left focus:outline-none focus:ring-4 focus:ring-gray-100 transition-all duration-200"
                    whileHover={{ backgroundColor: "#f9fafb" }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-500 mb-1 block">{item.category}</span>
                        <h3 className="text-lg font-semibold text-gray-900 pr-8">{item.q}</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {openItems.includes(item.id) ? 
                          <Minus className="w-5 h-5 text-gray-600" /> : 
                          <Plus className="w-5 h-5 text-gray-600" />
                        }
                      </motion.div>
                    </div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openItems.includes(item.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Categories */
            <div className="space-y-12">
              {faqData.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <motion.h2 
                    className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200"
                    whileHover={{ x: 10 }}
                  >
                    {category.category}
                  </motion.h2>
                  
                  <div className="space-y-4">
                    {category.questions.map((item, qIndex) => {
                      const itemId = categoryIndex * 100 + qIndex;
                      return (
                        <motion.div
                          key={itemId}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: qIndex * 0.1 }}
                          whileHover={{ 
                            scale: 1.01,
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                          }}
                          className="bg-gray-50 rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
                        >
                          <motion.button
                            onClick={() => toggleItem(itemId)}
                            className="w-full px-6 py-4 text-left focus:outline-none focus:ring-4 focus:ring-gray-100 transition-all duration-200"
                            whileHover={{ backgroundColor: "#f9fafb" }}
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-gray-900 pr-8">{item.q}</h3>
                              <motion.div
                                animate={{ rotate: openItems.includes(itemId) ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {openItems.includes(itemId) ? 
                                  <Minus className="w-5 h-5 text-gray-600" /> : 
                                  <Plus className="w-5 h-5 text-gray-600" />
                                }
                              </motion.div>
                            </div>
                          </motion.button>
                          
                          <AnimatePresence>
                            {openItems.includes(itemId) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                                  {item.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still have questions section */}
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
              <MessageSquare className="w-16 h-16 text-white mx-auto" />
            </motion.div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Get in touch with our team and we'll be happy to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Start Your Project</span>
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

export default FAQ;