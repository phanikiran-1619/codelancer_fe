import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, ArrowRight } from 'lucide-react';
import DotsPattern from '../components/DotsPattern';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
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
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white"
                    placeholder="John Doe"
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
              </div>

              <motion.div
                whileHover={{ y: -2 }}
                whileFocus={{ y: -2, scale: 1.02 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white"
                  placeholder="Project Development Inquiry"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                whileFocus={{ y: -2, scale: 1.02 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 resize-none bg-white"
                  placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-black text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
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