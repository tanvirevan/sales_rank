'use client';
import { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';


type Message = {
  id: string;
  text: string;
  isAi: boolean;
};

interface ChatProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
  isProcessing: boolean;
}

export default function Chat({ messages, onSendMessage, isProcessing }: ChatProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    onSendMessage(message);
    setMessage('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
    handleSend();
  };

  return (
    <div className="flex-1 bg-white rounded-2xl shadow-lg py-6">
      <p className='font-manrope font-bold text-[18x] pb-4 ml-8'>AI Sales Coach</p>

      <div className="bg-[#efefef] h-[400px] overflow-y-auto mb-4 p-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-4 mb-4 ${msg.isAi ? '' : 'flex-row-reverse'}`}>
            <div className={`w-10 h-10 ${msg.isAi ? 'bg-white' : 'bg-[#efefef]'} rounded-full flex items-center justify-center`}>
              <BsChatDots className="text-gray-600 text-xl" />
            </div>
            <div className={`flex-1 ${msg.isAi ? 'bg-white' : 'bg-white'} p-3 rounded-lg`}>
              <p className="text-gray-800 whitespace-pre-line">{msg.text}</p>
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex items-center gap-2 text-gray-600">
            <div className="animate-pulse">AI is typing...</div>
          </div>
        )}
      </div>

      <div className="flex gap-2 px-4 overflow-x-auto">
        {['How do i handle objections?', 'Give me a cold email template', 'Closing techniques', 'Negotiation tips'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
            className="px-4 py-2 text-sm bg-[#efefef] text-gray-800 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            {suggestion}
          </button>
        ))}
      </div>

      <div className="relative flex items-center justify-between">
        <div className="relative p-4 w-[90%]">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything you need"
            className="w-full p-3 pr-20 rounded-lg border border-gray-200 bg-[#efefef] text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-400"
          />
        </div>
        <button 
          onClick={handleSend}
          disabled={isProcessing || !message.trim()}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#022969] text-white px-6 py-3 items-center rounded-lg hover:bg-[#ceb043] transition-colors disabled:bg-gray-300 disabled:text-gray-500 "
        >
          Send ↑
        </button>
      </div>
    </div>
  );
}