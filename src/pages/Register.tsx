import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, BookOpen, Code, GraduationCap, Calendar, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import DotsPattern from '../components/DotsPattern';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    course: '',
    year: '',
    projectType: '',
    projectDescription: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, message: '', isError: false });
  const [phoneError, setPhoneError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const cleanedValue = value.replace(/[^0-9]/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: cleanedValue });
      if (cleanedValue.length !== 10) {
        setPhoneError('Phone number must be exactly 10 digits');
      } else {
        setPhoneError('');
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const validateForm = () => {
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setPhoneError('Phone number must be exactly 10 digits');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setModal({
        isOpen: true,
        message: 'Please enter a valid 10-digit phone number.',
        isError: true
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://cl-backend-ro0d.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModal({
          isOpen: true,
          message: 'Registration successful! Our team will connect with you soon.',
          isError: false
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          institution: '',
          course: '',
          year: '',
          projectType: '',
          projectDescription: '',
          timeline: ''
        });
        setPhoneError('');
      } else {
        setModal({
          isOpen: true,
          message: 'Server error. Please try again or contact support.',
          isError: true
        });
      }
    } catch (error) {
      setModal({
        isOpen: true,
        message: 'Network error. Please check your connection and try again.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModal({ isOpen: false, message: '', isError: false });
  };

  const projectTypes = [
    'AI & Machine Learning',
    'Web Development',
    'Mobile App Development',
    'IoT Projects',
    'Cybersecurity',
    'Blockchain',
    'Data Science',
    'Cloud Computing',
    'Other'
  ];

  const timelines = [
    '1-2 months',
    '3-4 months',
    '5-6 months',
    '6+ months'
  ];

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Modal */}
      <AnimatePresence>
        {modal.isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-xl border ${modal.isError ? 'border-red-200' : 'border-green-200'}`}
            >
              <p className={`text-lg font-semibold text-center ${modal.isError ? 'text-red-600' : 'text-green-600'}`}>
                {modal.message}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
                className="mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-all duration-200"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Start Your <span className="text-black border-b-4 border-gray-400">Journey</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to transform your ideas into reality? Register now to get personalized 
              support for your final year project from our expert team.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: <Code className="w-8 h-8" />, title: "Expert Guidance", desc: "Professional mentorship" },
                { icon: <BookOpen className="w-8 h-8" />, title: "IEEE Standards", desc: "Industry-grade documentation" },
                { icon: <GraduationCap className="w-8 h-8" />, title: "Academic Excellence", desc: "Top-tier project outcomes" }
              ].map((benefit, index) => (
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
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

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

      {/* Registration Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#d1d5db" 
          dotSize={2} 
          spacing={40} 
          opacity={0.7}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Registration Form</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about yourself and your project requirements. We'll create a customized plan just for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 relative overflow-hidden"
          >
            <DotsPattern 
              dotColor="#f3f4f6" 
              dotSize={1} 
              spacing={30} 
              opacity={0.4}
            />
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ y: -2 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200"
                      placeholder="John"
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200"
                      placeholder="Doe"
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200"
                      placeholder="john@example.com"
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onKeyDown={handlePhoneKeyDown}
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 ${
                        phoneError ? 'border-red-400' : 'border-gray-200'
                      }`}
                      placeholder="1234567890"
                      required
                    />
                    {phoneError && (
                      <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Academic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div whileHover={{ y: -2 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                      Institution/College *
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200"
                      placeholder="Your College Name"
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Course *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200"
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="B.Tech CSE">B.Tech CSE</option>
                      <option value="M.Tech CSE">M.Tech CSE</option>
                      <option value="B.Sc CS">B.Sc Computer Science</option>
                      <option value="M.Sc CS">M.Sc Computer Science</option>
                      <option value="Other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Year *
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="Final Year">Final Year</option>
                      <option value="Pre-Final Year">Pre-Final Year</option>
                      <option value="Other">Other</option>
                    </select>
                  </motion.div>
                </div>
              </div>

              {/* Project Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-3" />
                  Project Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ y: -2 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200"
                      required
                    >
                      <option value="">Select Project Type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Expected Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200"
                      required
                    >
                      <option value="">Select Timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <motion.div whileHover={{ y: -2 }} whileFocus={{ scale: 1.02 }} className="mt-6">
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 resize-none"
                    placeholder="Describe your project idea, objectives, and any specific requirements..."
                    required
                  />
                </motion.div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: isSubmitting ? 1 : [1, 1.03, 1],
                  boxShadow: isSubmitting ? "0 15px 30px rgba(0, 0, 0, 0.2)" : [
                    "0 5px 15px rgba(0, 0, 0, 0.1)",
                    "0 10px 20px rgba(0, 0, 0, 0.2)",
                    "0 5px 15px rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{
                  scale: { duration: 0.2 },
                  boxShadow: { duration: 2, repeat: isSubmitting ? 0 : Infinity }
                }}
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'bg-gray-400 text-gray-200 cursor-not-allowed' : 'bg-black text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Start Your Project Journey</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Review & Contact",
                  description: "We'll review your information and contact you within 24 hours"
                },
                {
                  step: "2", 
                  title: "Consultation Call",
                  description: "Free consultation to understand your requirements in detail"
                },
                {
                  step: "3",
                  title: "Project Planning",
                  description: "Create a customized project plan and timeline just for you"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gray-900 rounded-xl p-6 border border-gray-700"
                >
                  <motion.div 
                    className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Register;