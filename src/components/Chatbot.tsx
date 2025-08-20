import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Trash2 } from "lucide-react";

const faqs = [
  { q: "What services do you offer?", a: "We offer project development, documentation, research paper writing, and mentoring for CS students." },
  { q: "How do I start my project?", a: "Click the 'Start Your Project' button or contact us via the contact form." },
  { q: "Can you help with IEEE papers?", a: "Yes, we provide support for IEEE standard documentation and publication." },
  { q: "Where are you located?", a: "We are based in Vijayawada, Andhra Pradesh, India, but serve students everywhere." },
  { q: "How can I contact you?", a: "You can reach us through the contact form on our website or via email or contact number provided in the below footer." },
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
  { q: "Do you offer any discounts for students?", a: "Yes, we offer special discounts for students. Please inquire for more details and contact to Program director- Mr.Dheeraj Donepudi" },
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
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again later or contact us directly through our contact form.";
    }
  };

  // Handle sending a message (either from input or from FAQ selection)
  const handleSend = async (customInput?: string) => {
    const userInput = customInput ?? input;
    if (!userInput.trim()) return;

    const userMsg = { from: "user", text: userInput };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setIsTyping(true);

    // First check if it matches any FAQ
    const lowerCaseInput = userInput.toLowerCase();
    const foundFAQ = faqs.find(faq =>
      faq.q.toLowerCase() === lowerCaseInput ||
      lowerCaseInput.includes(faq.q.toLowerCase().split(" ")[0]) ||
      faq.q.toLowerCase().includes(lowerCaseInput)
    );

    let botResponse;
    
    if (foundFAQ) {
      // Use FAQ answer
      botResponse = foundFAQ.a;
      setTimeout(() => {
        setMessages((msgs) => [...msgs, { from: "bot", text: botResponse }]);
        setIsTyping(false);
      }, 1000);
    } else {
      // Use Gemini API for other queries
      try {
        botResponse = await callGeminiAPI(userInput);
        setMessages((msgs) => [...msgs, { from: "bot", text: botResponse }]);
      } catch (error) {
        setMessages((msgs) => [...msgs, { 
          from: "bot", 
          text: "I'm sorry, I couldn't process your request right now. Please check our FAQ section or contact us directly for assistance." 
        }]);
      }
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

  return (
    <div className="font-inter">
      {/* Floating Chatbot Toggle Button - Bottom Right */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-full p-4 shadow-xl z-50 transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Open chatbot"
      >
        <MessageSquare size={28} />
      </button>

      {/* Chatbot Modal - Bottom Right */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[100] transition-opacity duration-300">
          <div
            className="relative w-80 max-w-full h-[70vh] bg-gray-900 border border-gray-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            style={{ transformOrigin: "bottom right" }}
          >
            {/* Chatbot Header */}
            <div className="p-6 pb-4 bg-gradient-to-br from-gray-800 to-gray-700 flex flex-col items-center justify-center rounded-t-3xl relative border-b border-gray-600">
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors duration-200 p-2 rounded-full hover:bg-gray-600"
                aria-label="Close chatbot"
              >
                <X size={24} />
              </button>
              {/* Robot Character Image */}
              <img
                src="https://t4.ftcdn.net/jpg/03/78/89/75/240_F_378897598_A35SQK2PFGpsA0xJNuW32rhuV5ndZ0sZ.jpg"
                alt="AI Chatbot Assistant"
                className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white mb-3"
              />
              <h2 className="text-xl font-bold text-white mb-1">thecodelancer AI</h2>
              <p className="text-gray-300 text-center text-sm">Your CS Project Assistant</p>
              {/* Clear Chat Button */}
              <button
                onClick={clearChat}
                className="absolute top-4 left-4 text-gray-400 hover:text-red-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-600"
                aria-label="Clear chat"
              >
                <Trash2 size={20} />
              </button>
            </div>
            
            {/* Chat Messages Display Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 custom-scrollbar bg-gray-800">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`text-sm p-3 rounded-xl max-w-[85%] shadow-sm transform transition-all duration-300 ease-out ${
                      msg.from === "bot"
                        ? "bg-gray-700 text-gray-200 rounded-bl-none animate-fade-in-left"
                        : "bg-blue-600 text-white rounded-br-none animate-fade-in-right"
                    }`}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-gray-300 text-sm p-3 rounded-xl rounded-bl-none animate-pulse flex items-center space-x-1">
                    <span>AI is thinking</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* FAQ Options (only show if last message is from bot and it's the welcome message) */}
              {showFaqOptions && (
                <div className="mt-4">
                  <div className="font-semibold mb-2 text-gray-300 text-sm">Popular Questions:</div>
                  <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
                    {faqs.slice(0, 8).map((faq, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(faq.q)}
                        className="text-left bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-gray-200 hover:bg-gray-600 transition-colors text-sm"
                      >
                        {faq.q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Message Input Area */}
            <div className="p-4 border-t border-gray-600 flex items-center bg-gray-900 shadow-inner">
              <input
                className="flex-1 border border-gray-600 bg-gray-700 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 placeholder-gray-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !isTyping && handleSend()}
                placeholder="Ask me anything about CS projects..."
                disabled={isTyping}
              />
              <button
                className={`p-2 ml-2 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  isTyping 
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                onClick={() => !isTyping && handleSend()}
                disabled={isTyping}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for scrollbar and animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        .font-inter {
            font-family: 'Inter', sans-serif;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #6b7280;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-10px);}
          to { opacity: 1; transform: translateX(0);}
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(10px);}
          to { opacity: 1; transform: translateX(0);}
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.3s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.3s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default ChatbotWidget;