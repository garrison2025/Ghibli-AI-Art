import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="text-sm text-gray-500 mb-8">Effective Date: April 07, 2025</p>

        <p className="mb-6">
          Welcome to GibleArtAI.org (the "Website"). We are committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
          when you visit our Website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">We may collect information about you in a variety of ways:</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Personal Data You Provide to Us:</h3>
        <p className="mb-4">
          When you contact us via email at info@gibleartai.org, we collect your email address and any 
          other information you voluntarily provide in your message.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Log and Usage Data:</strong> Standard server logs including IP address, browser type, 
            operating system, referring URLs, pages viewed, and access timestamps.
          </li>
          <li className="mb-2">
            <strong>Cookies and Similar Technologies:</strong> We use cookies to improve your experience. 
            You can configure your browser to reject cookies, but this may affect site functionality.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Respond to your inquiries and feedback</li>
          <li>Operate and maintain the Website</li>
          <li>Monitor and analyze usage patterns</li>
          <li>Ensure website security</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have questions about this Privacy Policy, please contact us at:{' '}
          <a 
            href="mailto:info@gibleartai.org" 
            className="text-purple-600 hover:text-purple-700"
          >
            info@gibleartai.org
          </a>
        </p>
      </div>
    </div>
  );
}