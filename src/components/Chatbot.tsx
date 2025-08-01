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

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today? Please select a question below or type your own." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending a message (either from input or from FAQ selection)
  const handleSend = (customInput?: string) => {
    const userInput = customInput ?? input;
    if (!userInput.trim()) return;

    const userMsg = { from: "user", text: userInput };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lowerCaseInput = userInput.toLowerCase();
      const found = faqs.find(faq =>
        faq.q.toLowerCase() === lowerCaseInput ||
        lowerCaseInput.includes(faq.q.toLowerCase().split(" ")[0])
      );

      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: found ? found.a : "Sorry, I don't have an answer for that. Please check our FAQ or contact us!" }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const clearChat = () => {
    setMessages([
      { from: "bot", text: "Hi! How can I help you today? Please select a question below or type your own." }
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
            className="relative w-80 max-w-full h-[70vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            style={{ transformOrigin: "bottom right" }}
          >
            {/* Chatbot Header */}
            <div className="p-6 pb-4 bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center rounded-t-3xl relative">
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                aria-label="Close chatbot"
              >
                <X size={24} />
              </button>
              {/* Robot Character Image */}
              <img
                src="https://t4.ftcdn.net/jpg/03/78/89/75/240_F_378897598_A35SQK2PFGpsA0xJNuW32rhuV5ndZ0sZ.jpg"
                alt="AI Chatbot Assistant"
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Your AI Companion</h2>
              <p className="text-gray-600 text-center text-sm">How can I assist you today?</p>
              {/* Clear Chat Button */}
              <button
                onClick={clearChat}
                className="absolute top-4 left-4 text-gray-500 hover:text-red-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                aria-label="Clear chat"
              >
                <Trash2 size={24} />
              </button>
            </div>
            {/* Chat Messages Display Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 custom-scrollbar bg-gray-50">
              <div className="flex justify-start">
                <div className="relative bg-blue-100 text-blue-900 p-4 rounded-2xl max-w-[80%] shadow-md animate-fade-in-left">
                  Hi there! 👋 Need a boost?
                  <div className="absolute left-3 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-blue-100 transform rotate-45"></div>
                </div>
              </div>
              {messages.slice(1).map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`text-sm p-3 rounded-xl max-w-[75%] shadow-sm transform transition-all duration-300 ease-out ${
                      msg.from === "bot"
                        ? "bg-white text-gray-800 rounded-bl-none animate-fade-in-left"
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
                  <div className="bg-gray-100 text-gray-700 text-sm p-3 rounded-xl rounded-bl-none animate-pulse">
                    Typing...
                  </div>
                </div>
              )}
              {/* FAQ Options (only show if last message is from bot and it's the welcome message) */}
              {showFaqOptions && (
                <div className="mt-4">
                  <div className="font-semibold mb-2 text-gray-700">Popular Questions:</div>
                  <div className="flex flex-col gap-2">
                    {faqs.map((faq, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(faq.q)}
                        className="text-left bg-white border border-blue-200 rounded-lg px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors"
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
            <div className="p-4 border-t border-gray-100 flex items-center bg-white shadow-inner">
              <input
                className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 placeholder-gray-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
              />
              <button
                className="bg-blue-600 text-white p-3 ml-3 rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => handleSend()}
                aria-label="Send message"
              >
                <Send size={22} />
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
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
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
      `}</style>
    </div>
  );
};

export default ChatbotWidget;