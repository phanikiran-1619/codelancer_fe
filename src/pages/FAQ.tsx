import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqCategories = [
    {
      category: "General Information",
      faqs: [
        {
          question: "What is startup&co_ and what services do you provide?",
          answer: "startup&co_ is a comprehensive platform dedicated to supporting final year Computer Science students. We provide project development guidance, technical documentation support, research paper writing assistance, and mentoring services. Our goal is to help you create innovative projects using cutting-edge technologies like AI, IoT, and cybersecurity while ensuring academic excellence."
        },
        {
          question: "Who can use startup&co_ services?",
          answer: "Our services are primarily designed for final year Computer Science students, but we also welcome graduate students, researchers, and professionals looking to develop innovative tech projects or publish research papers. We work with students from universities worldwide."
        },
        {
          question: "How long does the entire process typically take?",
          answer: "The timeline varies depending on the scope of your project and chosen services. Typically, a complete final year project with documentation takes 3-6 months, while research paper writing and publication can take an additional 2-4 months. We provide detailed timelines during the initial consultation."
        }
      ]
    },
    {
      category: "Project Development",
      faqs: [
        {
          question: "What types of projects do you help develop?",
          answer: "We specialize in cutting-edge technology projects including AI/Machine Learning applications, IoT systems, cybersecurity solutions, blockchain implementations, web and mobile applications, cloud computing solutions, and data science projects. We focus on innovative, industry-relevant solutions that stand out academically."
        },
        {
          question: "Do I need to have prior experience with advanced technologies?",
          answer: "No prior experience with advanced technologies is required. Our mentors will guide you through the learning process and help you acquire the necessary skills. We provide comprehensive support from basic concepts to advanced implementation techniques."
        },
        {
          question: "Can you help with project ideas and topic selection?",
          answer: "Absolutely! We offer consultation sessions to help you identify suitable project topics based on your interests, current technology trends, and academic requirements. We ensure your project has both academic value and industry relevance."
        },
        {
          question: "What programming languages and technologies do you support?",
          answer: "We support a wide range of technologies including Python, Java, JavaScript, React, Node.js, TensorFlow, PyTorch, Arduino, Raspberry Pi, cloud platforms (AWS, Azure, Google Cloud), databases (MySQL, PostgreSQL, MongoDB), and many more. Our team stays updated with the latest tech stacks."
        }
      ]
    },
    {
      category: "Documentation & Writing",
      faqs: [
        {
          question: "What documentation standards do you follow?",
          answer: "We follow IEEE standards for technical documentation, including proper formatting for project reports, Software Requirements Specification (SRS), system design documents, and UML diagrams. All documentation meets academic and industry standards."
        },
        {
          question: "Do you help with research paper writing from scratch?",
          answer: "Yes, we provide comprehensive research paper writing support from initial concept to final submission. This includes literature review, methodology design, results analysis, academic writing, proper citation formatting, and submission guidance."
        },
        {
          question: "What citation styles do you support?",
          answer: "We support all major citation styles including IEEE, ACM, APA, MLA, and Chicago. Our team ensures proper citation formatting and helps you avoid plagiarism while maintaining academic integrity."
        }
      ]
    },
    {
      category: "Publication & Submission",
      faqs: [
        {
          question: "What is your success rate for paper publications?",
          answer: "We maintain a 95% success rate for paper publications across various conferences and journals. Our experienced team helps identify the most suitable venues and ensures your paper meets publication standards before submission."
        },
        {
          question: "Which conferences and journals do you target?",
          answer: "We target reputable venues including IEEE conferences and transactions, ACM publications, Springer journals, and domain-specific conferences. The choice depends on your research area, timeline, and career goals."
        },
        {
          question: "How much does paper publication support cost?",
          answer: "Publication support costs vary based on the scope of work required. We offer different packages ranging from basic writing assistance to comprehensive publication management. Contact us for a personalized quote based on your specific needs."
        },
        {
          question: "Do you guarantee publication acceptance?",
          answer: "While we cannot guarantee acceptance (as this depends on peer review), our high success rate reflects our commitment to quality. We thoroughly prepare papers to meet publication standards and provide revision support if needed."
        }
      ]
    },
    {
      category: "Pricing & Process",
      faqs: [
        {
          question: "How much do your services cost?",
          answer: "Our pricing varies based on the specific services required and project complexity. We offer flexible packages for different budgets, including payment plans for students. Contact us for a personalized quote after discussing your requirements."
        },
        {
          question: "Do you offer payment plans or student discounts?",
          answer: "Yes, we offer flexible payment plans and special discounts for students. We understand the financial constraints students face and strive to make our services accessible while maintaining quality."
        },
        {
          question: "What is included in the mentoring sessions?",
          answer: "Mentoring sessions include one-on-one guidance with experienced professionals, technical problem-solving, code reviews, career advice, industry insights, and project planning. Sessions can be conducted online or in-person based on availability."
        },
        {
          question: "Can I get a refund if I'm not satisfied?",
          answer: "We offer a satisfaction guarantee with our services. If you're not satisfied with our initial consultation or early deliverables, we provide refund options. Our goal is to ensure your success and satisfaction throughout the process."
        }
      ]
    },
    {
      category: "Technical Support",
      faqs: [
        {
          question: "What kind of technical support do you provide?",
          answer: "We provide comprehensive technical support including debugging assistance, code optimization, architecture design, deployment guidance, performance tuning, and troubleshooting. Our support is available throughout your project development lifecycle."
        },
        {
          question: "Do you provide support after project completion?",
          answer: "Yes, we offer post-completion support for a specified period, including minor modifications, bug fixes, and deployment assistance. Extended support packages are also available for ongoing maintenance and updates."
        },
        {
          question: "Can you help with project presentations and demos?",
          answer: "Absolutely! We help prepare compelling project presentations, create demonstration videos, design presentation slides, and provide guidance for project defense sessions. We ensure you can effectively communicate your project's value and technical achievements."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Find answers to common questions about our services, process, and how we can help 
            you succeed in your final year CS project and research publication journey.
          </motion.p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-blue-400">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <div
                      key={faqIndex}
                      className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                        {openFAQ === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {openFAQ === globalIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <div className="pt-4 border-t border-gray-600">
                            <p className="text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Need Quick Help?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the best way to get in touch with our team for immediate assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="bg-blue-900/50 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
              <p className="text-gray-300 mb-4">
                Get instant answers to your questions through our live chat support.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors">
                Start Chat
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="bg-orange-900/50 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Mail className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Email Support</h3>
              <p className="text-gray-300 mb-4">
                Send us detailed questions and get comprehensive responses within 24 hours.
              </p>
              <a
                href="mailto:support@thecodelancer.com"
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition-colors"
              >
                Send Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="bg-green-900/50 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Phone Consultation</h3>
              <p className="text-gray-300 mb-4">
                Schedule a phone call with our experts for personalized guidance.
              </p>
              <Link
                to="/contact"
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition-colors"
              >
                Schedule Call
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Can't find the answer you're looking for? Our support team is here to help 
              with any questions about our services or process.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Contact Our Team</span>
              <MessageCircle className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;