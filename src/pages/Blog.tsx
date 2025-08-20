import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  Search,
  BookOpen,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import DotsPattern from '../components/DotsPattern';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'AI/ML', 'Web Development', 'IoT', 'Career Tips', 'Research'];

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Final Year Project Ideas for Computer Science Students in 2025",
      excerpt: "Discover the most innovative and industry-relevant project ideas that will make your final year project stand out...",
      category: "Career Tips",
      author: "Dr. Rajesh Kumar",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
      featured: true,
      tags: ["Final Year", "Project Ideas", "CS Students"]
    },
    {
      id: 2,
      title: "Complete Guide to Machine Learning Project Development",
      excerpt: "Step-by-step guide to developing machine learning projects from data collection to model deployment...",
      category: "AI/ML",
      author: "Priya Sharma",
      date: "2025-01-12",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      featured: false,
      tags: ["Machine Learning", "Python", "Data Science"]
    },
    {
      id: 3,
      title: "Building Scalable Web Applications with React and Node.js",
      excerpt: "Learn how to build production-ready web applications using modern JavaScript frameworks and best practices...",
      category: "Web Development",
      author: "Amit Patel",
      date: "2025-01-10",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
      featured: false,
      tags: ["React", "Node.js", "Web Development"]
    },
    {
      id: 4,
      title: "IoT Project Development: From Sensors to Cloud",
      excerpt: "Comprehensive guide to developing IoT projects with Arduino, ESP32, and cloud integration for final year students...",
      category: "IoT",
      author: "Dr. Sunita Verma",
      date: "2025-01-08",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      featured: true,
      tags: ["IoT", "Arduino", "Cloud Computing"]
    },
    {
      id: 5,
      title: "How to Write a Perfect IEEE Format Research Paper",
      excerpt: "Master the art of academic writing with our comprehensive guide to IEEE formatting and research paper structure...",
      category: "Research",
      author: "Prof. Anand Krishnan",
      date: "2025-01-05",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=400&fit=crop",
      featured: false,
      tags: ["IEEE Format", "Research Paper", "Academic Writing"]
    },
    {
      id: 6,
      title: "Career Opportunities After Computer Science Graduation",
      excerpt: "Explore the diverse career paths available for CS graduates and how to prepare for industry interviews...",
      category: "Career Tips",
      author: "Neha Gupta",
      date: "2025-01-03",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      featured: false,
      tags: ["Career", "CS Graduates", "Interview Tips"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

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

  const postVariants = {
    hidden: { scale: 0.9, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
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
              <BookOpen className="w-16 h-16 text-gray-800 mx-auto" />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Our <span className="text-black border-b-4 border-gray-400">Blog</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Stay updated with the latest trends, tutorials, and insights in computer science. 
              Get expert tips for your final year projects and career development.
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

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <DotsPattern 
          dotColor="#d1d5db" 
          dotSize={1.5} 
          spacing={40} 
          opacity={0.5}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 bg-white shadow-md"
              />
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <DotsPattern 
          dotColor="#f3f4f6" 
          dotSize={1.8} 
          spacing={45} 
          opacity={0.6}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <motion.div
                layout
                className="space-y-8"
              >
                <AnimatePresence mode="wait">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      layout
                      variants={postVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                      }}
                      className={`bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-200 ${
                        post.featured ? 'border-gray-400' : ''
                      }`}
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3 relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                          {post.featured && (
                            <div className="absolute top-4 left-4">
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium flex items-center"
                              >
                                <Sparkles className="w-3 h-3 mr-1" />
                                Featured
                              </motion.div>
                            </div>
                          )}
                        </div>
                        
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>

                          <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-black transition-colors cursor-pointer">
                            {post.title}
                          </h2>

                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {post.author}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime}
                              </div>
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.05, x: 5 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center text-black font-medium hover:text-gray-800 transition-colors"
                            >
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </motion.button>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {post.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tagIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: tagIndex * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="inline-flex items-center bg-white text-gray-600 px-2 py-1 rounded text-xs border border-gray-300"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Featured Posts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Featured Posts
                </h3>
                <div className="space-y-4">
                  {featuredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, backgroundColor: "#ffffff" }}
                      className="flex items-start space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">{post.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Posts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Recent Posts
                </h3>
                <div className="space-y-3">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, backgroundColor: "#ffffff" }}
                      className="p-3 rounded-xl cursor-pointer transition-all duration-200"
                    >
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{post.title}</h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-black text-white rounded-2xl p-6 shadow-lg relative overflow-hidden"
              >
                <DotsPattern 
                  dotColor="#374151" 
                  dotSize={1.5} 
                  spacing={30} 
                  opacity={0.3}
                />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Stay Updated!</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Get the latest articles and project tips directly in your inbox.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-black py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Subscribe Now
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;