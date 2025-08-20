import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Trash2, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DotsPattern from './DotsPattern';

const faqs = [
  { q: "What services do you offer?", a: "We offer project development, documentation, research paper writing, and mentoring for CS students." },
  { q: "How do I start my project?", a: "Click the 'Start Your Project' button or contact us via the contact form." },
  { q: "Can you help with IEEE papers?", a: "Yes, we provide support for IEEE standard documentation and publication." },
  { q: "Where are you located?", a: "We are based in Vijayawada, Andhra Pradesh, India, but serve students everywhere." },
  { q: "How can I contact you?", a: "You can reach us through the contact form on our website or via email or contact number provided in the footer." },
  { q: "Do you offer mentoring?", a: "Yes, we provide mentoring for B.Tech and M.Tech students in their projects." },
  { q: "Can you help with project documentation?", a: "Absolutely! We assist with complete project documentation, including IEEE standards." },
  { q: "What is your response time?", a: "We typically respond within 24 hours on business days." },
  { q: "Do you have any ongoing projects?", a: "Yes, we regularly update our project portfolio. Check the 'Projects' section for details." },
  { q: "Can I see examples of your work?", a: "Yes, you can view our past projects and papers in the 'Projects' and 'Papers' sections." },
  { q: "What is the cost of your services?", a: "Our pricing varies based on the project scope. Please contact us for a detailed quote." },
  { q: "Do you provide online consultations?", a: "Yes, we offer online consultations via calls or chat." },
  { q: "How do I submit my project requirements?", a: "You can submit your requirements through the contact form or by emailing us directly." },
  { q: "What technologies do you work with?", a: "We work with various technologies including Python, Java, C++, and web development frameworks." },
  { q: "Can you help with final year projects?", a: "Yes, we specialize in final year projects for B.Tech and M.Tech students." },
  { q: "Do you offer any discounts for students?", a: "Yes, we offer special discounts for students. Please inquire for more details and contact Program director- Mr.Dheeraj Donepudi" },
  { q: "How can I provide feedback on your services?", a: "We welcome feedback! You can share your thoughts via email or through our contact form." },
];

const GEMINI_API_KEY = "AIzaSyChltvf-o7OwNtKM2krXj-TbOeE4zPhCOg";

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your AI assistant from thecodelancer. How can I help you today? Please select a question below or type your own." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to call Gemini API
  const callGeminiAPI = async (userInput: string) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a helpful AI assistant for thecodelancer, a company that helps CS students with final year projects, documentation, research papers, and mentoring. Please provide a helpful and relevant response to: ${userInput}. Keep responses concise and professional.`
            }]
          }]
        })
      });

      const data = await response.json();
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text.trim();
      } else {
        throw new Error('Invalid response format from Gemini API');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      return "Sorry, I encountered an error. Please try again or contact support.";
    }
  };

  // Handle sending a message
  const handleSend = async (customInput?: string) => {
    const userInput = customInput ?? input;
    if (!userInput.trim()) return;

    const userMsg = { from: "user", text: userInput };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setIsTyping(true);

    // Check if it matches any FAQ
    const lowerCaseInput = userInput.toLowerCase();
    const foundFAQ = faqs.find(faq =>
      faq.q.toLowerCase() === lowerCaseInput ||
      lowerCaseInput.includes(faq.q.toLowerCase().split(" ")[0]) ||
      faq.q.toLowerCase().includes(lowerCaseInput)
    );

    let botResponse;
    if (foundFAQ) {
      botResponse = foundFAQ.a;
      setTimeout(() => {
        setMessages((msgs) => [...msgs, { from: "bot", text: botResponse }]);
        setIsTyping(false);
      }, 1000);
    } else {
      botResponse = await callGeminiAPI(userInput);
      setMessages((msgs) => [...msgs, { from: "bot", text: botResponse }]);
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([
      { from: "bot", text: "Hi! I'm your AI assistant from thecodelancer. How can I help you today? Please select a question below or type your own." }
    ]);
  };

  // Show FAQ options only if it's the first message or after clearing chat
  const showFaqOptions = messages.length === 1;

  const chatbotVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.3,
      rotateX: 90,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    idle: { 
      scale: 1,
      rotate: 0,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
    },
    hover: { 
      scale: 1.1,
      rotate: 360,
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)"
    },
    tap: { scale: 0.9 }
  };

  return (
    <div>
      {/* Floating Chatbot Toggle Button with Enhanced Animation */}
      <motion.button
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 bg-black text-white rounded-full p-4 z-50 focus:outline-none"
        aria-label="Open chatbot"
      >
        <motion.div
          animate={open ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <X size={28} /> : <MessageSquare size={28} />}
        </motion.div>
      </motion.button>

      {/* Chatbot Modal with Enhanced Design */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="fixed bottom-24 right-6 z-[100]"
            variants={chatbotVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative w-96 max-w-full h-[70vh] bg-white border-2 border-gray-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
              {/* Background Dots Pattern */}
              <DotsPattern 
                dotColor="#e5e7eb" 
                dotSize={1} 
                spacing={25} 
                opacity={0.4}
              />
              
              {/* Chatbot Header with New Design */}
              <div className="relative p-6 pb-4 bg-white flex flex-col items-center justify-center rounded-t-3xl border-b-2 border-gray-100">
                {/* Close Button */}
                <motion.button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close chatbot"
                >
                  <X size={24} />
                </motion.button>

                {/* Bot Avatar with Animation */}
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg mb-3"
                >
                  <Bot className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-1">thecodelancer AI</h2>
                <p className="text-gray-600 text-center text-sm">Your CS Project Assistant</p>
                
                {/* Clear Chat Button */}
                <motion.button
                  onClick={clearChat}
                  className="absolute top-4 left-4 text-gray-500 hover:text-red-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1, rotate: -90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Clear chat"
                >
                  <Trash2 size={20} />
                </motion.button>
              </div>
              
              {/* Chat Messages Display Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 relative" style={{ minHeight: '300px' }}>
                <DotsPattern 
                  dotColor="#e5e7eb" 
                  dotSize={1} 
                  spacing={30} 
                  opacity={0.3}
                />
                
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`text-base p-3 rounded-xl max-w-[80%] shadow-md ${
                        msg.from === "bot"
                          ? "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                          : "bg-black text-white rounded-br-none"
                      }`}
                      style={{ wordWrap: "break-word" }}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="bg-white text-gray-700 text-base p-3 rounded-xl rounded-bl-none border border-gray-200 flex items-center space-x-2">
                      <span>AI is thinking</span>
                      <div className="flex space-x-1">
                        <motion.div 
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div 
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div 
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* FAQ Options */}
                {showFaqOptions && (
                  <motion.div 
                    className="mt-4 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="font-semibold mb-2 text-gray-700 text-sm">Popular Questions:</div>
                    <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
                      {faqs.slice(0, 8).map((faq, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => handleSend(faq.q)}
                          className="text-left bg-white border-2 border-gray-200 rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-all text-sm shadow-sm"
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {faq.q}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Message Input Area */}
              <div className="p-4 border-t-2 border-gray-100 flex items-center bg-white">
                <input
                  className="flex-1 border-2 border-gray-200 bg-gray-50 text-gray-800 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !isTyping && handleSend()}
                  placeholder="Ask me anything about CS projects..."
                  disabled={isTyping}
                />
                <motion.button
                  className={`p-2 ml-2 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none ${
                    isTyping 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                  onClick={() => !isTyping && handleSend()}
                  disabled={isTyping}
                  whileHover={!isTyping ? { scale: 1.05 } : {}}
                  whileTap={!isTyping ? { scale: 0.95 } : {}}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotWidget;