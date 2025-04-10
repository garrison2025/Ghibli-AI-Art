import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'small';
}

export default function Logo({ variant = 'default' }: LogoProps) {
  const size = variant === 'small' ? 32 : 48;
  
  return (
    <Link to="/" className="flex flex-col items-center gap-4 group">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:scale-105"
      >
        {/* Outer circle representing technology/AI */}
        <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2" className="text-purple-600" />
        
        {/* Totoro-inspired silhouette */}
        <path
          d="M20 8C14 8 10 14 10 20C10 26 14 32 20 32C26 32 30 26 30 20C30 14 26 8 20 8Z"
          className="fill-purple-100 dark:fill-purple-900"
        />
        
        {/* Stylized AI circuit paths */}
        <path
          d="M16 18L24 18M16 22L24 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-purple-600"
        />
        
        {/* Magical sparkles */}
        <circle cx="15" cy="16" r="1" fill="currentColor" className="text-purple-600" />
        <circle cx="25" cy="16" r="1" fill="currentColor" className="text-purple-600" />
        <circle cx="15" cy="24" r="1" fill="currentColor" className="text-purple-600" />
        <circle cx="25" cy="24" r="1" fill="currentColor" className="text-purple-600" />
      </svg>
      
      {variant === 'default' && (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
            Ghibli AI Art Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl text-center">
            Discover the best AI tools for creating magical artwork inspired by Studio Ghibli
          </p>
        </>
      )}
    </Link>
  );
}