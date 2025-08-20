import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Lightbulb, Heart } from 'lucide-react';

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

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            About <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">startup&co_</span>
            About <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">thecodelancer</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Empowering the next generation of Computer Science innovators through 
            comprehensive academic support and cutting-edge project development.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-900/50 p-3 rounded-full mr-4">
                  <Eye className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading platform that transforms final year Computer Science 
                students into industry-ready innovators, bridging the gap between academic 
                learning and real-world application through cutting-edge project development 
                and comprehensive technical support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-900/50 p-3 rounded-full mr-4">
                  <Target className="w-8 h-8 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To provide exceptional mentoring, technical documentation support, and 
                research publication guidance that enables CS students to develop innovative 
                projects using the latest technologies, while maintaining the highest 
                academic standards and industry relevance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to student success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="text-blue-400 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Students Choose Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The unique advantages that set thecodelancer apart in CS education support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Academic Excellence</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• IEEE standard documentation</li>
                <li>• Comprehensive technical writing</li>
                <li>• Research methodology guidance</li>
                <li>• Publication support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Technical Innovation</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Latest technology integration</li>
                <li>• AI and ML implementations</li>
                <li>• cybersecurity projects</li>
                <li>• Industry-relevant solutions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
             className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600"
            >
             <h3 className="text-2xl font-bold text-white mb-4">Career Preparation</h3>
             <ul className="space-y-3 text-gray-300">
                <li>• Resume building</li>
                <li>• Portfolio development</li>
                <li>• Professional networking</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;