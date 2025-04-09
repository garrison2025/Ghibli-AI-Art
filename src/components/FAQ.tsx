import React from 'react';

export default function FAQ() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">What is <span className="text-purple-600">Ghibli AI Art</span>?</h3>
            <p className="text-gray-700">
              <span className="text-purple-600">Ghibli AI art</span> refers to artwork created using artificial intelligence that mimics the distinctive style of Studio Ghibli animations. These AI tools can transform your ideas or photos into illustrations that capture the magical and whimsical aesthetic of Ghibli films.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">How does <span className="text-purple-600">Gible Art AI</span> work?</h3>
            <p className="text-gray-700">
              <span className="text-purple-600">Gible Art AI</span> tools use advanced machine learning models trained on Studio Ghibli's artwork. They analyze patterns, colors, and artistic elements to generate new images that maintain the characteristic Ghibli style while incorporating your creative input.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Which <span className="text-purple-600">Ghibli AI Art</span> tool should I choose?</h3>
            <p className="text-gray-700">
              The best tool depends on your needs. Free tools like EasyControl Ghibli are perfect for beginners, while professional tools like GetImg.AI offer advanced features. Compare pricing, features, and user reviews on our platform to find the right fit for your creative projects.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Are these <span className="text-purple-600">Ghibli AI Art</span> tools free?</h3>
            <p className="text-gray-700">
              We feature a mix of free, paid, and freemium tools. Free tools offer basic features, while paid options provide advanced capabilities like higher resolution outputs and batch processing. Use our filters to find tools that match your budget.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Can I use <span className="text-purple-600">Ghibli AI Art</span> commercially?</h3>
            <p className="text-gray-700">
              Commercial usage rights vary by tool. Some paid services like Flux.ai Ghibli Studio offer commercial licenses, while free tools may be limited to personal use. Always check the licensing terms of your chosen tool before commercial use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}