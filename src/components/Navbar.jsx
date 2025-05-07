// src/components/Navbar.jsx
import { useState } from 'react';
import { navLinks } from '../data/siteData';
import { FaLeaf } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <a href="#" className="text-xl font-bold text-green-600 flex items-center">
          <FaLeaf className="mr-2" />
          AgroInnovation
        </a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={link.url} 
                className="text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="bg-white px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.id} className="py-2">
                <a 
                  href={link.url} 
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300 block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;