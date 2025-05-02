'use client';
import Image from 'next/image';
import { useState } from 'react';
import NavButton from './NavButton';
import GetStartedButton from './GetStartedButton';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between relative">
          {/* Logo */}
          <div className="flex items-center justify-between gap-2">
            <Image 
              src="/navbar/logo.png" 
              alt="Logo" 
              width={180} 
              height={100} 
              className="object-contain" 
              priority
            />
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 ml-8">
              <NavButton text="Home" />
              <NavButton text="About" />
              <NavButton text="Pricing" />
              <NavButton text="Consulting" />
              <NavButton text="Ai Coach" />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <GetStartedButton />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100 ' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col items-center gap-4 py-4 bg-white rounded-lg shadow-lg">
            <NavButton text="Home" />
            <NavButton text="About" />
            <NavButton text="Pricing" />
            <NavButton text="Consulting" />
            <NavButton text="Ai Coach" />
            <div className="items-center bg-blue-600 text-white rounded-full ">
            <GetStartedButton />
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}