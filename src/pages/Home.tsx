import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  FileText, 
  BookOpen, 
  Users, 
  ArrowRight, 
  Zap,  
  Rocket,
  CheckCircle,
  Sparkles,
  Cpu,
  Database,
  Globe
} from 'lucide-react';
import DotsPattern from '../components/DotsPattern';
import webVideo from '../assets/web.mp4'; // Import the video from assets

const Home = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Project Development",
      description: "AI, IoT, Cybersecurity, and cutting-edge tech projects"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Technical Documentation",
      description: "IEEE format, SRS, UML diagrams, and comprehensive docs"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Research Papers",
      description: "Writing, formatting, and publishing guidance"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentoring",
      description: "Expert guidance throughout your academic journey"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "10+", label: "Papers Published" },
    { number: "95%", label: "Success Rate" },
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

  const iconVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <DotsPattern 
          dotColor="#e5e7eb" 
          dotSize={2} 
          spacing={35} 
          opacity={0.9}
          className="absolute inset-0"
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
              All the <span className="text-black border-b-4 border-gray-300">CS Innovation</span><br />
              Power under the Sun
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Empower your final year with cutting-edge project development, comprehensive 
              technical documentation, and research paper publishing support. Transform your 
              academic journey into innovation excellence.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 border-2 border-transparent hover:border-gray-300"
                >
                  <span>Start Your Journey</span>
                  <Rocket className="w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/how-it-works"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-black hover:text-black hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span>How It Works</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Animated Icons in Hero Section */}
          <motion.div 
            className="absolute top-20 left-20 w-16 h-16 text-gray-700"
            variants={iconVariants}
            animate="animate"
          >
            <Cpu className="w-full h-full" />
          </motion.div>
          <motion.div 
            className="absolute bottom-20 left-40 w-14 h-14 text-gray-700"
            variants={iconVariants}
            animate="animate"
            transition={{ duration: 3.5 }}
          >
            <Database className="w-full h-full" />
          </motion.div>
          <motion.div 
            className="absolute top-40 right-20 w-16 h-16 text-gray-700"
            variants={iconVariants}
            animate="animate"
            transition={{ duration: 4 }}
          >
            <Globe className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#d1d5db" 
          dotSize={1.5} 
          spacing={45} 
          opacity={0.8}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Support for Your Final Year Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From innovative project development to research paper publishing, 
              we provide end-to-end support for your Project success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-gray-800 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <DotsPattern 
          dotColor="#374151" 
          dotSize={2} 
          spacing={40} 
          opacity={0.7}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <DotsPattern 
          dotColor="#f3f4f6" 
          dotSize={1.5} 
          spacing={50} 
          opacity={0.9}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose thecodelancer?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We deliver the best final year projects with great user interface and professional approach.
              </p>
              
              <div className="space-y-4">
                {[
                  "Latest technology integration (AI, IoT, Blockchain)",
                  "IEEE standard documentation and formatting",
                  "Research paper publication in top conferences",
                  "Industry-experienced mentors and advisors",
                  "24/7 support throughout your project lifecycle"
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-96 flex items-center justify-center border border-gray-200 relative overflow-hidden">
                <DotsPattern 
                  dotColor="#000000ff" 
                  dotSize={1} 
                  spacing={25} 
                  opacity={0.9}
                />
                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <source src={webVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#e5e7eb" 
          dotSize={2} 
          spacing={35} 
          opacity={0.8}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your journey with thecodelancer today and build something amazing.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/register"
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2 border-2 border-transparent hover:border-gray-300"
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

export default Home;