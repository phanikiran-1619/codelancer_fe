import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  FileText, 
  Code, 
  BookOpen, 
  CheckCircle, 
  ArrowRight,
  Users,
  Target,
  Zap,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Initial Consultation",
      description: "We start with a comprehensive discussion about your project goals, technical interests, and academic requirements. Our experts help you identify the most suitable technologies and scope for your final year project.",
      duration: "1-2 days",
      deliverables: ["Project scope document", "Technology roadmap", "Timeline planning"]
    },
    {
      step: "02",
      icon: <Target className="w-8 h-8" />,
      title: "Project Planning & Design",
      description: "Detailed project planning including architecture design, technology stack selection, and milestone definition. We create a comprehensive blueprint that guides the entire development process.",
      duration: "3-5 days",
      deliverables: ["System architecture", "Technical specifications", "Project timeline"]
    },
    {
      step: "03",
      icon: <Code className="w-8 h-8" />,
      title: "Development & Implementation",
      description: "Hands-on development support with regular mentoring sessions. You'll receive guidance on coding best practices, implementation strategies, and troubleshooting complex technical challenges.",
      duration: "6-12 weeks",
      deliverables: ["Working prototype", "Source code", "Development documentation"]
    },
    {
      step: "04",
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation & Testing",
      description: "Comprehensive documentation creation including technical specifications, user manuals, and IEEE-standard project reports. We also ensure thorough testing and quality assurance.",
      duration: "2-3 weeks",
      deliverables: ["Technical documentation", "Test reports", "User manuals"]
    },
    {
      step: "05",
      icon: <BookOpen className="w-8 h-8" />,
      title: "Research Paper Writing",
      description: "Transform your project into a publishable research paper. We guide you through literature review, methodology documentation, results analysis, and academic writing standards.",
      duration: "3-4 weeks",
      deliverables: ["Research paper draft", "Conference/journal recommendations", "Submission guidelines"]
    },
    {
      step: "06",
      icon: <Award className="w-8 h-8" />,
      title: "Publication & Presentation",
      description: "Final review, formatting, and submission support for conferences or journals. We also help prepare presentation materials and defense strategies for your project evaluation.",
      duration: "2-4 weeks",
      deliverables: ["Formatted paper", "Presentation slides", "Defense preparation"]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Project Explanation",
      description: "We are here to explain your project in detail, ensuring you understand every aspect of your work"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Latest Technologies",
      description: "Access to cutting-edge tools and frameworks for modern CS projects"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous review process ensuring academic and technical excellence"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Publication Success",
      description: "High success rate in conference and journal publications"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            How It <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Works</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A step-by-step journey from initial concept to successful project completion 
            and publication. Here's how we guide you through your final year CS project.
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                      <span className="text-blue-600 font-medium">{step.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">{step.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                    <div className="space-y-2">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-blue-600 mb-4 flex justify-center">{step.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">Step {step.step} of 6</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Our Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures quality, timely delivery, and Project success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Project Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Typical timeline for a complete final year CS project with publication.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {[
                { phase: "Planning", weeks: "1-2", color: "bg-blue-500" },
                { phase: "Design", weeks: "2-3", color: "bg-green-500" },
                { phase: "Development", weeks: "6-12", color: "bg-orange-500" },
                { phase: "Testing", weeks: "2-3", color: "bg-purple-500" },
                { phase: "Documentation", weeks: "3-4", color: "bg-red-500" },
                { phase: "Publication", weeks: "2-4", color: "bg-indigo-500" }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`${phase.color} h-4 rounded-full mb-3`}></div>
                  <h4 className="font-semibold text-gray-900 mb-1">{phase.phase}</h4>
                  <p className="text-sm text-gray-600">{phase.weeks} weeks</p>
                </motion.div>
              ))}
            </div>
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your final year project with confidence. Our structured process 
              ensures your success from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;