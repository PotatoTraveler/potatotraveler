// components/Navigation.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={`site-header fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="font-playfair text-xl tracking-wide">
              POTATO TRAVELER
            </Link>



          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="font-montserrat text-sm uppercase tracking-widest hover:text-secondary transition-colors duration-300">
              Home
            </Link>
            <Link href="/galleries" className="font-montserrat text-sm uppercase tracking-widest hover:text-secondary transition-colors duration-300">
              Galleries
            </Link>
            <Link href="/about" className="font-montserrat text-sm uppercase tracking-widest hover:text-secondary transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="font-montserrat text-sm uppercase tracking-widest hover:text-secondary transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link 
              href="/" 
              className="block font-montserrat py-2 text-sm uppercase tracking-widest hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/galleries" 
              className="block font-montserrat py-2 text-sm uppercase tracking-widest hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Galleries
            </Link>
            <Link 
              href="/about" 
              className="block font-montserrat py-2 text-sm uppercase tracking-widest hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block font-montserrat py-2 text-sm uppercase tracking-widest hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}