import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, ArrowRight } from 'lucide-react';
import DotsPattern from '../components/DotsPattern';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    course: '',
    year: '',
    projectType: '',
    timeline: '',
    projectDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        setShowNotification(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          institution: '',
          course: '',
          year: '',
          projectType: '',
          timeline: '',
          projectDescription: ''
        });
        setTimeout(() => setShowNotification(false), 5000);
      } else {
        console.error('Submission failed:', await response.text());
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      content: "dheerajdonepudi18@gmail.com",
      description: "Send us an email anytime!"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      content: "+91 8143965686",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      content: "Vijayawada, Andhra Pradesh",
      description: "Come say hello at our office"
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
      {/* Notification */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-xl shadow-lg z-50"
        >
          <p className="font-semibold">Successfully sent!</p>
          <p>Our team will connect with you soon.</p>
        </motion.div>
      )}

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
              Get In <span className="text-black border-b-4 border-gray-400">Touch</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to start your project? Have questions about our services? 
              We'd love to hear from you and help bring your ideas to life.
            </motion.p>
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

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#d1d5db" 
          dotSize={2} 
          spacing={40} 
          opacity={0.7}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={flipVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  scale: 1.05
                }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100"
              >
                <motion.div 
                  className="text-gray-800 mb-4 flex justify-center"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg font-medium text-gray-800 mb-2">{info.content}</p>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <DotsPattern 
          dotColor="#f3f4f6" 
          dotSize={1.8} 
          spacing={45} 
          opacity={0.6}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200 relative overflow-hidden"
          >
            <DotsPattern 
              dotColor="#e5e7eb" 
              dotSize={1} 
              spacing={30} 
              opacity={0.4}
            />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileFocus={{ y: -2, scale: 1.02 }}
                >
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white"
                    placeholder="John"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileFocus={{ y: -2, scale: 1.02 }}
                >
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white"
                    placeholder="Doe"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileFocus={{ y: -2, scale: 1.02 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileFocus={{ y: -2, scale: 1.02 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white"
                    placeholder="+91 1234567890"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileFocus={{ y: -2, scale: 1.02 }}
                >
                  <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white"
                    placeholder="ABC University"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileFocus={{ y: -2, scale: 1.02 }}
                >
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Course
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white"
                    placeholder="B.Tech CSE"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileFocus={{ y: -2, scale: 1.02 }}
                >
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                    Year
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white"
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="First Year">First Year</option>
                    <option value="Second Year">Second Year</option>
                    <option value="Third Year">Third Year</option>
                    <option value="Final Year">Final Year</option>
                  </select>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileFocus={{ y: -2, scale: 1.02 }}
                >
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white"
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Apps">Mobile Apps</option>
                    <option value="Data Science">Data Science</option>
                    <option value="IoT">IoT</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileFocus={{ y: -2, scale: 1.02 }}
                >
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white"
                    required
                  >
                    <option value="">Select Timeline</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-4 months">3-4 months</option>
                    <option value="5-6 months">5-6 months</option>
                    <option value="More than 6 months">More than 6 months</option>
                  </select>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -2 }}
                whileFocus={{ y: -2, scale: 1.02 }}
              >
                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 resize-none bg-white"
                  placeholder="Describe your project requirements, timeline, and any specific questions you have..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: isSubmitting ? "none" : "0 15px 30px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:shadow-xl'
                } text-white`}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Response Time Section */}
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
              Quick Response Time
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We typically respond within 24 hours on business days. 
              For urgent inquiries, please call us directly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Email Response</h3>
                <p className="text-2xl font-bold text-white mb-1">24 Hours</p>
                <p className="text-gray-400">Average response time</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-2xl font-bold text-white mb-1">Immediate</p>
                <p className="text-gray-400">Mon-Fri, 9AM-6PM</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;