import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About GibleArtAI.org</h1>
      
      <div className="prose prose-lg">
        <p className="text-lg mb-6">
          Welcome to GibleArtAI.org! This website is dedicated to showcasing and curating the best available 
          Artificial Intelligence (AI) tools specifically designed for creating art inspired by the beautiful 
          and iconic style of Studio Ghibli.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          The world of AI image generation is vast and constantly evolving. Finding the right tools, 
          especially for a specific artistic style like Ghibli's, can be a challenge. Our mission is to 
          simplify that process for artists, fans, and enthusiasts.
        </p>

        <p className="mb-6">
          We focus on highlighting tools that excel in two primary areas:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Generating Ghibli-Style Images:</strong> Tools, models, and platforms that allow you 
            to create new images from scratch that capture the unique aesthetic, color palettes, and 
            character designs reminiscent of Studio Ghibli films.
          </li>
          <li className="mb-2">
            <strong>Converting Images to Ghibli Style:</strong> Tools and techniques that can take your 
            existing photographs or artwork and transform them, applying the characteristic painterly look 
            and whimsical feel associated with Ghibli's animation.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">What You'll Find Here</h2>
        <p className="mb-6">
          GibleArtAI.org serves as a central hub where you can discover and learn about:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Effective AI models trained on Ghibli aesthetics</li>
          <li>Web applications and software for Ghibli-style image generation</li>
          <li>Style transfer tools specifically tuned for the Ghibli look</li>
          <li>Resources and guides related to creating AI-powered Ghibli art</li>
        </ul>

        <p className="mb-6">
          We aim to keep our listings up-to-date with currently effective and popular tools available 
          to the community.
        </p>

        <p>
          Whether you're a digital artist looking for inspiration, a developer exploring AI capabilities, 
          or simply a fan wanting to experiment with the Ghibli style, we hope GibleArtAI.org becomes a 
          valuable resource for you.
        </p>

        <p className="mt-6 font-semibold">
          Explore the tools, get creative, and bring your Ghibli-inspired visions to life!
        </p>
      </div>
    </div>
  );
}