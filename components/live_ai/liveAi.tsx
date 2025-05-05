'use client';
import { useState } from 'react';
import Chat from './Chat';
import ChatActionPanel from './ChatActionPanel';
import QuickActions from './QuickActions';
import RealTimeAnalysis from './RealTimeAnalysis';

type Message = 
  {
    id: string;
    text: string;
    isAi: boolean;
  };

export default function LiveAi() {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
    isAi: true,
  }]);
  const [isProcessing, setIsProcessing] = useState(false);

  const mockAiResponses: { [key: string]: string } = {
    'How do i handle objections?': "When handling objections, remember the LAER method: Listen, Acknowledge, Explore, and Respond. First, listen carefully to understand the customer's concern. Then, acknowledge their perspective to show you understand. Next, explore the objection deeper by asking questions. Finally, respond with a solution that addresses their specific concern.",
    'Give me a cold email template': "Subject: Quick question about [Company]'s [specific challenge]\n\nHi [Name],\n\nI noticed [Company] is working on [specific initiative/challenge]. We've helped similar companies achieve [specific result] by [solution overview].\n\nWould you be open to a quick 15-minute call to explore if we could help [Company] achieve similar results?\n\nBest regards,\n[Your name]",
    'Closing techniques': "Here are three effective closing techniques:\n1. The assumptive close: Proceed as if the deal is already done\n2. The summary close: Recap all agreed-upon points and benefits\n3. The urgency close: Create a sense of timebound opportunity",
    'Negotiation tips': "Key negotiation tips:\n1. Always prepare and research beforehand\n2. Focus on value, not just price\n3. Listen more than you speak\n4. Use silence strategically\n5. Always have a BATNA (Best Alternative to a Negotiated Agreement)"
  };

  const handleSendMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text: text,
      isAi: false,
    }]);

    setIsProcessing(true);
    setTimeout(() => {
      const response = mockAiResponses[text] || 
        "I understand your question about " + text + ". Let me help you with that.";
      
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: response,
        isAi: true,
      }]);
      setIsProcessing(false);
    }, 1000);
  };

  const handleReset = () => {
    setMessages([{
      id: '1',
      text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
      isAi: true,
    }]);
  };

  const handleCopy = () => {
    const textToCopy = messages.map(msg => `${msg.isAi ? 'AI' : 'You'}: ${msg.text}`).join('\n');
    navigator.clipboard.writeText(textToCopy);
  };

  const handleVoice = () => {
    const lastMessage = messages[messages.length - 1]?.text;
    if (lastMessage) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Create and configure utterance
      const utterance = new SpeechSynthesisUtterance(lastMessage);
      utterance.rate = 1.0; // Normal speed
      utterance.pitch = 1.0; // Normal pitch
      utterance.volume = 1.0; // Full volume
      
      // Speak the text
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#103878] to-[#014fcb] pb-10">
      <div className="container font-questrial font-normal mx-auto">
        <p className="text-[24px] pt-10 text-[#FCE38A]">Live AI Coach</p>
        <h1 className="text-[60px] mb-6 text-white">Take a Suggestion Coaching </h1>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Chat and Action Panel Container */}
          <Chat 
            messages={messages}
            onSendMessage={handleSendMessage}
            isProcessing={isProcessing}
          />
          <div className='lg:flex lg:items-center lg:justify-center hidden'>
          <ChatActionPanel
            onReset={handleReset}
            onCopy={handleCopy}
            onVoice={handleVoice}
            lastMessage={messages[messages.length - 1]?.text}
            className="lg:right-[calc(384px+2rem)] "
          />
          </div>
          
          {/* Right Panel */}
          <div className="w-full lg:w-96 space-y-6">
            {/* Real-time Analysis */}
            <RealTimeAnalysis />

            {/* Quick Actions */}
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}