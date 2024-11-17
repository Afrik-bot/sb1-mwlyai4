import React from 'react';
import { Shield, Users, BarChart, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Data Privacy Solutions',
    description: 'Enterprise-grade privacy frameworks and GDPR compliance implementation.'
  },
  {
    icon: Users,
    title: 'Strategic Advisory',
    description: 'Expert guidance on digital transformation and regulatory compliance.'
  },
  {
    icon: BarChart,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies.'
  },
  {
    icon: CheckCircle,
    title: 'Compliance Training',
    description: 'Custom training programs for staff and stakeholders.'
  }
];

const Consulting = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold mb-6">Negus Consulting</h1>
              <p className="text-xl mb-8">
                Leading data privacy consulting and compliance solutions for enterprises worldwide.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Consulting"
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
              Comprehensive consulting solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
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

export default Consulting;