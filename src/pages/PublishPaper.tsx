import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Award,
  Users,
  Calendar,
  Target,
  Zap,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PublishPaper = () => {
  const publishingSteps = [
    {
      step: "01",
      title: "Research Assessment",
      description: "We evaluate your project's research potential and identify the most suitable publication venues.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Paper Structure & Writing",
      description: "Expert guidance on academic writing, proper structure, and compelling presentation of your research.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Literature Review & Citations",
      description: "Comprehensive literature review and proper citation formatting according to publication standards.",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Peer Review Preparation",
      description: "Thorough review and revision to meet the rigorous standards of academic peer review.",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: "05",
      title: "Journal/Conference Selection",
      description: "Strategic selection of appropriate journals or conferences based on your research domain and impact factor.",
      icon: <Award className="w-8 h-8" />
    },
    {
      step: "06",
      title: "Submission & Follow-up",
      description: "Complete submission process management and response handling throughout the review cycle.",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const publicationTypes = [
    {
      type: "Conference Papers",
      description: "Present your research at leading international conferences",
      venues: ["IEEE Conferences", "ACM Symposiums", "International Workshops"],
      timeline: "3-6 months",
      benefits: ["Quick publication", "Networking opportunities", "Peer feedback"]
    },
    {
      type: "Journal Articles",
      description: "Publish in prestigious peer-reviewed journals",
      venues: ["IEEE Transactions", "ACM Journals", "Springer Publications"],
      timeline: "6-12 months",
      benefits: ["High impact factor", "Extensive peer review", "Career advancement"]
    },
    {
      type: "Workshop Papers",
      description: "Share preliminary results and get community feedback",
      venues: ["ACM Workshops", "IEEE Workshops", "Domain-specific Events"],
      timeline: "2-4 months",
      benefits: ["Early stage feedback", "Faster publication", "Community building"]
    }
  ];

  const successStories = [
    {
      title: "AI-Based Medical Diagnosis System",
      student: "Sarah Chen",
      publication: "IEEE Transactions on Medical Imaging",
      impact: "Cited 150+ times",
      year: "2024"
    },
    {
      title: "Blockchain Security Framework",
      student: "Michael Rodriguez",
      publication: "ACM Conference on Computer Security",
      impact: "Best Paper Award",
      year: "2024"
    },
    {
      title: "IoT Network Optimization",
      student: "Priya Sharma",
      publication: "IEEE Internet of Things Journal",
      impact: "Industry adoption",
      year: "2024"
    }
  ];

  const requirements = [
    "Completed or near-complete final year project",
    "Novel contribution or significant improvement to existing methods",
    "Proper experimental validation or theoretical analysis",
    "Technical soundness and reproducible results",
    "Clear research methodology and well-defined problem statement"
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
            Publish Your <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Research</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Transform your final year project into a published research paper. 
            Get expert guidance on academic writing, peer review, and publication 
            in top-tier conferences and journals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start Publication Process</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Publishing Process */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Publication Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to getting your research published in reputable venues.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    {step.step}
                  </div>
                  <div className="text-blue-600">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Types */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Publication Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best publication venue for your research based on timeline, impact, and career goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {publicationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.type}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Target Venues:</h4>
                  <ul className="space-y-2">
                    {type.venues.map((venue, venueIndex) => (
                      <li key={venueIndex} className="text-gray-700 text-sm">• {venue}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Timeline: {type.timeline}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <div className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recent publications by our students in top-tier conferences and journals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">{story.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{story.student}</p>
                <p className="text-gray-600 text-sm mb-3">{story.publication}</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {story.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Publication Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                To ensure successful publication, your project should meet these key criteria.
              </p>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Ready to publish your research? Contact us for a free consultation 
                and publication assessment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Free Assessment</h4>
                    <p className="text-gray-600 text-sm">Evaluate your project's publication potential</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Guidance</h4>
                    <p className="text-gray-600 text-sm">Work with experienced research mentors</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Publication Success</h4>
                    <p className="text-gray-600 text-sm">95% success rate in top venues</p>
                  </div>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 px-6 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-6 inline-block"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Publish Your Research?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our publication specialists for personalized guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Contact Publication Team</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:publish@startupco.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                publish@startupco.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PublishPaper;