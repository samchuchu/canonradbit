import React, { useState, useEffect, useRef } from 'react';

interface ChatbotProps {
  onBack: () => void;
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const SendIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
);


const Chatbot: React.FC<ChatbotProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hihi RADbot here ~ Do you want to know more about today's LDCT Chest ? Just let me know okway ~~" },
    { sender: 'bot', text: "This model is running on a tiny home pc, for demo, so it takes 1-2 minutes for a reply, it's burning itself to show whether the chatbot & flow work...please be patient..." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      // We consider the user to be at the bottom if they are within 100px of it before new content is added.
      const isScrolledToBottom = container.scrollHeight - container.clientHeight <= container.scrollTop + 100;
      
      if (isScrolledToBottom) {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
        // On initial render, scroll to bottom
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage: Message = { sender: 'user', text: trimmedInput };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const webhookUrl = 'http://chuchun8n.duckdns.org:5678/webhook/radbot';
    const formData = new FormData();
    // The key 'question' should match what your n8n workflow expects.
    formData.append('question', trimmedInput);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formData,
      });

      let botResponseText: string;

      if (response.ok) {
        const data = await response.json();
        // n8n's "Respond to Webhook" node often returns an object.
        // Adjust the key 'reply' if your n8n workflow uses a different one.
        botResponseText = data.reply || 'I received a response, but it was empty.';
      } else {
        botResponseText = `Error: Could not reach the bot. Status: ${response.status}`;
      }
      
      const botMessage: Message = { sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = { sender: 'bot', text: 'Sorry, I\'m having trouble connecting. Please ensure the n8n webhook is active and accessible.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white/90 backdrop-blur-sm animate-fade-in">
      {/* Header */}
      <header className="p-4 border-b flex items-center justify-between bg-white/70 shadow-sm z-10 flex-shrink-0">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Back to Slides">
          <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
        </button>
        <img 
            src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/Elements/RADbot-full.png" 
            alt="RADbot Logo" 
            className="h-10 w-auto" 
        />
        <div className="w-8"></div> {/* Spacer */}
      </header>

      {/* Message Area */}
      <main ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) =>
          msg.sender === 'user' ? (
            <div key={index} className="flex justify-end">
              <div className="p-3 rounded-lg max-w-xs shadow-sm bg-indigo-500 text-white">
                <p className="break-words">{msg.text}</p>
              </div>
            </div>
          ) : (
            <div key={index} className="flex items-end space-x-2">
              <img
                src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/Elements/radbotprofile.png"
                alt="RADbot profile"
                className="w-8 h-8 rounded-full shadow-sm"
              />
              <div className="p-3 rounded-lg max-w-xs shadow-sm bg-gray-200 text-gray-800 rounded-bl-none">
                <p className="break-words">{msg.text}</p>
              </div>
            </div>
          )
        )}
        {isLoading && (
          <div className="flex items-end space-x-2">
            <img
              src="https://raw.githubusercontent.com/samchuchu/RADbit/refs/heads/main/Elements/radbotprofile.png"
              alt="RADbot profile"
              className="w-8 h-8 rounded-full shadow-sm"
            />
            <div className="bg-gray-200 p-3 rounded-lg shadow-sm rounded-bl-none">
                <div className="flex items-center space-x-1">
                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="p-3 border-t bg-white/70 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B4D6DD] transition-shadow disabled:opacity-50"
            placeholder="Ask a question..."
            aria-label="Chat input"
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="bg-[#B4D6DD] text-[#1E2E4D] rounded-full p-3 shadow-md hover:bg-[#a2c4cb] transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#B4D6DD] focus:ring-offset-2 disabled:bg-[#B4D6DD]/60 disabled:cursor-not-allowed" 
            aria-label="Send Message"
          >
            <SendIcon className="h-6 w-6"/>
          </button>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
