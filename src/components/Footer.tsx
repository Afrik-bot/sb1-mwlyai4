import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Building2, Brain, Wine, Share2 } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const location = useLocation();
  
  const navigation = {
    company: [
      { name: 'Consulting', path: '/consulting', icon: Building2 },
      { name: 'AI', path: '/ai', icon: Brain },
      { name: 'Wines', path: '/wines', icon: Wine },
      { name: 'Tam Tam', path: '/tamtam', icon: Share2 },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
    ],
    social: [
      { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/negusgroupinc' },
      { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/negusgroupinc' },
      { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/negusgroupinc' },
      { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/negusgroupinc' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <Logo className="h-8 w-auto" color="#FFFFFF" />
              <span className="text-xl font-bold">Negus Group</span>
            </Link>
            <p className="text-gray-400">
              Innovating across industries with a focus on technology, consulting, wine, and social media.
            </p>
          </div>

          {/* Companies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Companies</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-gray-400 hover:text-white transition-colors flex items-center space-x-2 ${
                      location.pathname === item.path ? 'text-white' : ''
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-gray-400 hover:text-white transition-colors ${
                      location.pathname === item.path ? 'text-white' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic space-y-3">
              <p>1142 Florida Street, Suite 5</p>
              <p>San Francisco, CA 94110</p>
              <a
                href="tel:+14156787296"
                className="block hover:text-white transition-colors"
              >
                +1 (415) 678-7296
              </a>
              <a
                href="mailto:info@negusgroupinc.com"
                className="block hover:text-white transition-colors"
              >
                info@negusgroupinc.com
              </a>
            </address>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Negus Group Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;