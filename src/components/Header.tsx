import React from 'react';
import { Search, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#a8edea] to-[#fed6e3] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Ghibli AI Art Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best AI tools for creating magical artwork inspired by Studio Ghibli
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for AI tools..."
              className="w-full px-6 py-4 rounded-full shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 pl-14"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
          </div>
          
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-purple-700 transition-colors">
              <Sparkles className="h-4 w-4" />
              <span>Explore</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}