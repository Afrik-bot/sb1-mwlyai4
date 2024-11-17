import React from 'react';
import { Brain, Cpu, Database, Network } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Custom ML models for business process automation.'
  },
  {
    icon: Cpu,
    title: 'Process Automation',
    description: 'Intelligent automation solutions for enterprise workflows.'
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Advanced analytics and predictive modeling.'
  },
  {
    icon: Network,
    title: 'AI Integration',
    description: 'Seamless integration of AI solutions with existing systems.'
  }
];

const AI = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold mb-6">Negus AI</h1>
              <p className="text-xl mb-8">
                Cutting-edge enterprise AI automation services transforming businesses.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-purple-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Solutions
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                alt="AI Technology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">AI Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;