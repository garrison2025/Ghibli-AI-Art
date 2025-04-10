import React, { memo, useState } from 'react';
import { Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = memo(({ tool }: ToolCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/tool/${tool.id}`} className="block">
        <div className="relative h-48">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse" />
          )}
          <img
            src={tool.imageUrl}
            alt={tool.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
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
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/tool/${tool.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors">{tool.name}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{tool.description}</p>
        
        <div className="space-y-2 mb-4">
          {tool.features.slice(0, 3).map((feature, index) => (
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
          
          <div className="flex items-center gap-4">
            <Link
              to={`/tool/${tool.id}`}
              className="text-purple-600 hover:text-purple-700 transition-colors text-sm font-medium"
            >
              Learn more
            </Link>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <span className="text-sm font-medium">Visit</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

ToolCard.displayName = 'ToolCard';

export default ToolCard;