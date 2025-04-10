import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="prose prose-lg">
        <p className="text-lg mb-6">
          We'd love to hear from you! Your feedback and contributions are valuable to the GibleArtAI.org community.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Feedback & Suggestions</h2>
        <p className="mb-6">
          Do you have any suggestions on how we can improve the site? Have you encountered an issue, 
          or do you just want to share your thoughts about GibleArtAI.org? Please feel free to reach out. 
          We appreciate all feedback!
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Submit a New Ghibli AI Tool</h2>
        <p className="mb-6">
          Have you discovered or created a new AI tool, model, resource, or technique related to 
          Ghibli-style art that isn't listed on our site? We are always looking to showcase the 
          latest and greatest tools for the community.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Tool Submission Guidelines</h3>
          <p className="mb-4">If you'd like to submit a tool for consideration, please include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Tool Name</li>
            <li>Link to the Tool/Resource (e.g., website, GitHub repo, Hugging Face page)</li>
            <li>Brief Description (What it does, how it relates to Ghibli art)</li>
            <li>Your Name/Handle (Optional - if you'd like attribution)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">How to Reach Us</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center gap-4">
          <Mail className="h-6 w-6 text-purple-600" />
          <div>
            <p className="font-medium">Email us at:</p>
            <a 
              href="mailto:info@gibleartai.org" 
              className="text-purple-600 hover:text-purple-700"
            >
              info@gibleartai.org
            </a>
          </div>
        </div>

        <p className="mt-8">
          We'll do our best to respond to inquiries as quickly as possible. Thank you for being a 
          part of GibleArtAI.org!
        </p>
      </div>
    </div>
  );
}