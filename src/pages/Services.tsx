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
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
            Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive support for every aspect of your final year CS project, 
            from initial concept to successful publication and beyond.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="text-blue-400 mr-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-8">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full">
                        <div className="w-4 h-4 text-gray-300">{tech.icon}</div>
                        <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 h-80 flex items-center justify-center border border-gray-600">
                    <div className="text-center">
                      <div className="text-blue-400 mb-4 flex justify-center">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300">Professional-grade solutions</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complementary services to ensure your complete technical success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-lg font-semibold text-white">{service}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your requirements and create something amazing together.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;