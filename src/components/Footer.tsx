import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About GibleArtAI.org</h3>
            <p className="text-gray-600">
              Discover and explore the best AI tools for creating Ghibli-style artwork.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-purple-600 hover:text-purple-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-purple-600 hover:text-purple-700">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-purple-600 hover:text-purple-700">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">
              Email: <a href="mailto:info@gibleartai.org" className="text-purple-600 hover:text-purple-700">
                info@gibleartai.org
              </a>
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 pt-8 border-t">
          <p>© 2025 GibleArtAI.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}