import React from 'react';
import { Users, ExternalLink } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={tool.imageUrl}
          alt={tool.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${tool.pricing.type === 'free' ? 'bg-green-100 text-green-800' : 
              tool.pricing.type === 'paid' ? 'bg-purple-100 text-purple-800' :
              'bg-blue-100 text-blue-800'}
          `}>
            {tool.pricing.type.charAt(0).toUpperCase() + tool.pricing.type.slice(1)}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <img
            src={tool.logoUrl}
            alt={`${tool.name} logo`}
            className="w-8 h-8 rounded-full bg-white p-1 shadow-md"
          />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{tool.name}</h3>
        <p className="text-gray-600 mb-4">{tool.description}</p>
        
        <div className="space-y-2 mb-4">
          {tool.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2 text-gray-500">
            <Users className="h-4 w-4" />
            <span className="text-sm">{tool.reviewCount} reviews</span>
          </div>
          
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            Try it now
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}