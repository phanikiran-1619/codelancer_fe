import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import DotsPattern from './components/DotsPattern';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import ProjectsGallery from './pages/ProjectsGallery';
import PublishPaper from './pages/PublishPaper';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white relative">
        {/* Global Dots Pattern */}
        <DotsPattern 
          dotColor="#f3f4f6" 
          dotSize={1.5} 
          spacing={40} 
          opacity={0.6}
        />
        
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
          style={{ paddingTop: '80px' }} // Account for fixed header
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/projects" element={<ProjectsGallery />} />
            <Route path="/publish" element={<PublishPaper />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </motion.main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;