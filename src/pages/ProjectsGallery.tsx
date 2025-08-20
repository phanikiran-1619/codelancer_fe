import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Award, Calendar, Users } from 'lucide-react';

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI/ML', 'IoT', 'Cybersecurity', 'Web Development', 'Mobile Apps', 'Blockchain'];

  const projects = [
    {
      id: 1,
      title: "Smart Healthcare Monitoring System",
      category: "IoT",
      description: "Real-time patient monitoring using IoT sensors, machine learning for health prediction, and mobile app interface for healthcare providers.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Arduino", "React Native", "Firebase", "TensorFlow"],
      student: "Sarah Johnson",
      year: "2024",
      university: "MIT",
      awards: ["Best IoT Project 2024", "Innovation Award"],
      githubUrl: "#",
      liveUrl: "#",
      paperUrl: "#"
    },
    {
      id: 2,
      title: "AI-Powered Fraud Detection System",
      category: "AI/ML",
      description: "Advanced machine learning system for real-time credit card fraud detection using ensemble methods and anomaly detection algorithms.",
      image: "https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Flask", "PostgreSQL"],
      student: "Michael Chen",
      year: "2024",
      university: "Stanford",
      awards: ["Best AI Project", "Published in IEEE Conference"],
      githubUrl: "#",
      liveUrl: "#",
      paperUrl: "#"
    },
    {
      id: 3,
      title: "Blockchain-Based Voting System",
      category: "Blockchain",
      description: "Secure, transparent, and decentralized voting platform using blockchain technology to ensure election integrity and voter privacy.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      student: "Emily Rodriguez",
      year: "2024",
      university: "UC Berkeley",
      awards: ["Blockchain Innovation Award", "Best Security Implementation"],
      githubUrl: "#",
      liveUrl: "#",
      paperUrl: "#"
    },
    {
      id: 4,
      title: "Cybersecurity Threat Detection Platform",
      category: "Cybersecurity",
      description: "Real-time network monitoring and threat detection system using deep learning and behavioral analysis for enterprise security.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "PyTorch", "Elasticsearch", "Kibana", "Docker"],
      student: "David Park",
      year: "2024",
      university: "Carnegie Mellon",
      awards: ["Cybersecurity Excellence Award", "Industry Partnership Award"],
      githubUrl: "#",
      liveUrl: "#",
      paperUrl: "#"
    },
    {
      id: 5,
      title: "Smart City Traffic Management",
      category: "AI/ML",
      description: "AI-driven traffic optimization system using computer vision and reinforcement learning to reduce congestion and improve urban mobility.",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "OpenCV", "TensorFlow", "Django", "MongoDB"],
      student: "Priya Sharma",
      year: "2024",
      university: "IIT Delhi",
      awards: ["Smart City Innovation Award", "Best Computer Vision Project"],
      githubUrl: "#",
      liveUrl: "#",
      paperUrl: "#"
    },
    {
      id: 6,
      title: "E-Learning Platform with AR/VR",
      category: "Web Development",
      description: "Immersive educational platform combining traditional e-learning with augmented and virtual reality for enhanced student engagement.",
      image: "https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.jpg?s=612x612&w=0&k=20&c=I_9fnEi1hNHFwy0qe8g7V1ZQJmgyKEDOSDJonScTSMU=",
      technologies: ["React", "Node.js", "Unity", "WebXR", "PostgreSQL"],
      student: "James Wilson",
      year: "2024",
      university: "Oxford",
      awards: ["Best Educational Technology Project", "UX Excellence Award"],
      githubUrl: "#",
      liveUrl: "#",
      paperUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            Projects <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Showcase of innovative final year projects developed by our students. 
            From AI-powered solutions to cutting-edge IoT systems, discover what's possible.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 border border-gray-600 hover:border-blue-500 hover:text-blue-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.githubUrl}
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{project.student}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{project.year}</span>
                      </div>
                    </div>

                    <div className="text-sm text-gray-400 mb-3">{project.university}</div>

                    {project.awards.length > 0 && (
                      <div className="flex items-center space-x-2 mb-3">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-gray-300">{project.awards[0]}</span>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <a
                        href={project.paperUrl}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                      >
                        View Paper
                      </a>
                      <a
                        href={project.liveUrl}
                        className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "10+", label: "Papers Published" },
              { number: "95%", label: "Success Rate" },
              { number: "50+", label: "Happy Students" }
            ].map((stat, index) => (
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

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of successful students who have transformed their ideas 
              into award-winning projects and published research.
            </p>
            <a
              href="/register"
              className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsGallery;