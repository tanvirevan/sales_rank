'use client';
import { useState } from 'react';
import { BiReset } from 'react-icons/bi';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { MdContentCopy } from 'react-icons/md';
import { IoVolumeHighOutline } from 'react-icons/io5';

interface ChatActionPanelProps {
  onReset?: () => void;
  onCopy?: () => void;
  onVoice?: () => void;
  lastMessage?: string;
  className?: string;
}

export default function ChatActionPanel({ 
  onReset, 
  onCopy, 
  onVoice, 
  lastMessage,
  className = ''
}: ChatActionPanelProps) {
  const [liked, setLiked] = useState<boolean | null>(null);

  const handleLike = (isLike: boolean) => {
    if (liked === isLike) {
      setLiked(null); // Toggle off if already selected
    } else {
      setLiked(isLike);
    }
  };

  return (
    <div className={`bg-[#efefef] h-[40%] rounded-xl shadow-lg p-3 flex flex-col gap-3 transition-all duration-300 ${className}`}>
      <button
        onClick={onReset}
        className="w-10 h-10 flex items-center justify-center text-gray-600 
                   hover:bg-gray-100 rounded-lg transition-colors"
        title="Reset conversation"
      >
      <BiReset size={20} />
      </button>

      <div className="space-y-2">
        <button
          onClick={() => handleLike(true)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors
            ${liked === true 
              ? 'bg-blue-100 text-blue-600' 
              : 'text-gray-600 hover:bg-gray-100'}`}
          title="Like"
        >
        <AiOutlineLike size={20} />
        </button>
        <button
          onClick={() => handleLike(false)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors
            ${liked === false 
              ? 'bg-blue-100 text-blue-600' 
              : 'text-gray-600 hover:bg-gray-100'}`}
          title="Dislike"
        >
        <AiOutlineDislike size={20} />
        </button>
      </div>

      <button
        onClick={onCopy}
        className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        title="Copy conversation"
      >
      <MdContentCopy size={20} />
      </button>

      <button
        onClick={onVoice}
        disabled={!lastMessage}
        className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors
          ${lastMessage 
            ? 'text-gray-600 hover:bg-gray-100' 
            : 'text-gray-300 cursor-not-allowed'}`}
        title={lastMessage ? 'Read message aloud' : 'No message to read'}
      >
      <IoVolumeHighOutline size={20} />
      </button>
    </div>
  );
}