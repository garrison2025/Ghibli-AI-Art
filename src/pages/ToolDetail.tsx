import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ExternalLink, 
  ArrowLeft, 
  Check, 
  Users, 
  Clock,
  ThumbsUp,
  ThumbsDown,
  Laptop,
  Globe,
  Zap,
  AlertCircle
} from 'lucide-react';
import { tools } from '../data/tools';

export default function ToolDetail() {
  const { id } = useParams();
  const tool = tools.find(t => t.id === id);

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tool not found</h2>
          <Link to="/" className="text-purple-600 hover:text-purple-700">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${tool.name} - Best Ghibli AI Art Generator Tool Review`}</title>
        <meta name="description" content={`Detailed review of ${tool.name}. Learn about features, pricing, pros and cons, and how to use this Ghibli-style AI art generator.`} />
        <meta property="og:title" content={`${tool.name} - Ghibli AI Art Tool Review`} />
        <meta property="og:description" content={tool.description} />
        <meta property="og:image" content={tool.imageUrl} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-purple-600 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to tools
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <img
                src={tool.imageUrl}
                alt={tool.name}
                className="w-full h-[400px] object-cover"
              />
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{tool.name}</h1>
                    <p className="text-gray-600 text-lg">{tool.description}</p>
                  </div>
                  <img
                    src={tool.logoUrl}
                    alt={`${tool.name} logo`}
                    className="w-16 h-16 rounded-full bg-white p-1 shadow-md"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">{tool.reviewCount.toLocaleString()} reviews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Updated {tool.lastUpdated || 'regularly'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Summary */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Quick Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="flex items-center text-lg font-semibold text-green-600 mb-4">
                    <ThumbsUp className="h-5 w-5 mr-2" />
                    Pros
                  </h3>
                  <ul className="space-y-3">
                    {(tool.pros || tool.features).map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {tool.cons && (
                  <div>
                    <h3 className="flex items-center text-lg font-semibold text-red-600 mb-4">
                      <ThumbsDown className="h-5 w-5 mr-2" />
                      Cons
                    </h3>
                    <ul className="space-y-3">
                      {tool.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Use Cases */}
            {tool.useCases && (
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Best Used For</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tool.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                      <Zap className="h-5 w-5 text-purple-600 mt-1" />
                      <span className="text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tool.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tutorial */}
            {tool.tutorial && (
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">How to Use</h2>
                {tool.tutorial.videoUrl && (
                  <div className="mb-6">
                    <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-gray-100">
                      <iframe
                        src={tool.tutorial.videoUrl}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
                <div className="space-y-4">
                  {tool.tutorial.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 mt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Alternatives */}
            {tool.alternatives && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Alternative Tools</h2>
                <div className="space-y-4">
                  {tool.alternatives.map((alt, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">{alt}</span>
                      <Link
                        to={`/tool/${tools.find(t => t.name === alt)?.id || ''}`}
                        className="text-purple-600 hover:text-purple-700"
                      >
                        Compare
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Get Started Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <h2 className="text-xl font-semibold mb-6">Get Started</h2>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg hover:bg-purple-700 transition-colors mb-4"
                >
                  Visit Website
                  <ExternalLink className="inline-block h-4 w-4 ml-2" />
                </a>
                
                {/* Pricing Info */}
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-semibold mb-3">Pricing</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Type</span>
                      <span className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${tool.pricing.type === 'free' ? 'bg-green-100 text-green-800' : 
                          tool.pricing.type === 'paid' ? 'bg-purple-100 text-purple-800' :
                          'bg-blue-100 text-blue-800'}
                      `}>
                        {tool.pricing.type.charAt(0).toUpperCase() + tool.pricing.type.slice(1)}
                      </span>
                    </div>
                    {tool.pricing.startingPrice && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Starting from</span>
                        <span className="font-semibold">{tool.pricing.startingPrice}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Platform Support */}
                {tool.platforms && (
                  <div className="border-t pt-4 mt-4">
                    <h3 className="font-semibold mb-3">Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {tool.platforms.map((platform, index) => (
                        <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm">
                          <Laptop className="h-4 w-4" />
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Language Support */}
                {tool.languages && (
                  <div className="border-t pt-4 mt-4">
                    <h3 className="font-semibold mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {tool.languages.map((lang, index) => (
                        <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm">
                          <Globe className="h-4 w-4" />
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t pt-4 mt-4">
                  <div className="text-sm text-gray-500">
                    Registration: {tool.registration.charAt(0).toUpperCase() + tool.registration.slice(1)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}