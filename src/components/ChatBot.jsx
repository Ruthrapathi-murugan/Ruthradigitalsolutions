import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./ChatBot.css";

function ChatBot() {

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello 👋 Welcome to Ruthra Digital Solutions. How can I help you today?"
    }
  ]);

  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {

      const res = await axios.post("https://rds-chatbot-backend.onrender.com/chat", {
        message: input
      });

      const botMessage = {
        role: "bot",
        text: res.data.reply
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {

      console.error(error);

      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          text: "Sorry, something went wrong."
        }
      ]);

    }

    setIsTyping(false);
  };

  return (

    <div className="chatbot-wrapper">

      {/* Animated AI Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="chatbot-fab"
          aria-label="Open AI Chat"
        >
          <div className="chatbot-fab-pulse"></div>
          <div className="chatbot-fab-pulse delay"></div>
          <svg className="chatbot-fab-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.55 3.35 17L2 22L7 20.65C8.45 21.5 10.15 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="white" opacity="0.2"/>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.55 3.35 17L2 22L7 20.65C8.45 21.5 10.15 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* AI sparkle dots */}
            <circle cx="8.5" cy="12" r="1.2" fill="white">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="12" cy="12" r="1.2" fill="white">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="15.5" cy="12" r="1.2" fill="white">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="0.3s"/>
            </circle>
          </svg>
          <span className="chatbot-fab-label">AI</span>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">

          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="chatbot-avatar">
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
                  <circle cx="8.5" cy="11" r="1" fill="white"/>
                  <circle cx="15.5" cy="11" r="1" fill="white"/>
                  <path d="M9 15C9.5 16 10.5 16.5 12 16.5C13.5 16.5 14.5 16 15 15" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="chatbot-title">Ruthra AI</span>
                <span className="chatbot-status">● Online</span>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-msg ${msg.role === "user" ? "chatbot-msg-user" : "chatbot-msg-bot"}`}
              >
                {msg.role === "bot" && <div className="chatbot-msg-avatar">AI</div>}
                <span className="chatbot-msg-bubble">
                  {msg.text}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-msg chatbot-msg-bot">
                <div className="chatbot-msg-avatar">AI</div>
                <span className="chatbot-msg-bubble chatbot-typing">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />

          </div>

          {/* Input */}
          <div className="chatbot-input-area">

            <input
              className="chatbot-input"
              value={input}
              placeholder="Ask me anything..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button
              onClick={sendMessage}
              className="chatbot-send"
              disabled={!input.trim()}
            >
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(255,255,255,0.2)"/>
              </svg>
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default ChatBot;