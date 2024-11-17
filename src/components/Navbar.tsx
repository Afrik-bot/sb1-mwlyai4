import React, { useState } from 'react';
import { Menu, X, Building2, Brain, Wine, Share2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Consulting', icon: <Building2 className="w-5 h-5" />, path: '/consulting' },
    { name: 'AI', icon: <Brain className="w-5 h-5" />, path: '/ai' },
    { name: 'Wines', icon: <Wine className="w-5 h-5" />, path: '/wines' },
    { name: 'Tam Tam', icon: <Share2 className="w-5 h-5" />, path: '/tamtam' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Logo className="h-8 w-auto" />
            <span className="text-2xl font-bold text-gray-900">Negus Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#FF4500]'
                    : 'text-gray-700 hover:text-[#FF4500]'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#FF4500] text-white px-4 py-2 rounded-md hover:bg-[#FF5722] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#FF4500]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-[#FF4500]'
                    : 'text-gray-700 hover:text-[#FF4500]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full bg-[#FF4500] text-white px-4 py-2 rounded-md hover:bg-[#FF5722] transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;