import React from 'react';
import { Building2, Brain, Wine, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SubsidiaryCard from '../components/SubsidiaryCard';
import Logo from '../components/Logo';

const Home = () => {
  const subsidiaries = [
    {
      title: 'Negus Consulting',
      description: 'Leading data privacy consulting and compliance solutions for enterprises worldwide.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      path: '/consulting'
    },
    {
      title: 'Negus AI',
      description: 'Cutting-edge enterprise AI automation services transforming businesses.',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
      path: '/ai'
    },
    {
      title: 'NegusWines',
      description: 'Premium California wines expertly curated for African markets.',
      icon: Wine,
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80',
      path: '/wines'
    },
    {
      title: 'Tam Tam S.A.',
      description: 'The fastest-growing social media platform connecting African communities.',
      icon: Share2,
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80',
      path: '/tamtam'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <Logo className="h-32 w-auto mb-8" color="#FFFFFF" />
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Negus Group Inc.</h1>
            <p className="text-xl md:text-2xl mb-8">
              A diverse portfolio of innovative companies shaping the future of technology, 
              consulting, wine, and social media.
            </p>
            <Link
              to="/consulting"
              className="inline-block bg-[#FF4500] text-white px-8 py-3 rounded-md text-lg hover:bg-[#FF5722] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Subsidiaries Section */}
      <div id="subsidiaries" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Companies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {subsidiaries.map((subsidiary) => (
              <Link key={subsidiary.title} to={subsidiary.path}>
                <SubsidiaryCard
                  title={subsidiary.title}
                  description={subsidiary.description}
                  icon={subsidiary.icon}
                  image={subsidiary.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;