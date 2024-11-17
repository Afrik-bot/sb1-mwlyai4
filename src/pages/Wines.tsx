import React from 'react';
import { Wine, Grape, Truck, Store } from 'lucide-react';

const features = [
  {
    icon: Wine,
    title: 'Premium Selection',
    description: 'Curated collection of California\'s finest wines.'
  },
  {
    icon: Grape,
    title: 'Expert Sourcing',
    description: 'Direct partnerships with top vineyards.'
  },
  {
    icon: Truck,
    title: 'Global Distribution',
    description: 'Reliable shipping to African markets.'
  },
  {
    icon: Store,
    title: 'Market Access',
    description: 'Strategic partnerships with local retailers.'
  }
];

const Wines = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold mb-6">NegusWines</h1>
              <p className="text-xl mb-8">
                Premium California wines expertly curated for African markets.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-red-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Discover Our Wines
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80"
                alt="Premium Wines"
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
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bringing California's finest wines to African markets
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
                <feature.icon className="w-12 h-12 text-red-600 mb-4" />
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

export default Wines;