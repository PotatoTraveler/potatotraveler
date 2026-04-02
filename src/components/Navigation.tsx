// components/Navigation.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const workLinks = [
  { href: '/work/street', label: 'Street' },
  { href: '/work/landscape', label: 'Landscape' },
  { href: '/work/portrait', label: 'Portrait' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const workRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close work dropdown when clicking outside
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (workRef.current && !workRef.current.contains(e.target as Node)) {
        setWorkOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setWorkOpen(false);
  }, [pathname]);

  const transparent = isHome && !isScrolled;
  const linkClass = `font-montserrat text-xs uppercase tracking-widest transition-colors duration-300 ${
    transparent ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-black'
  }`;

  return (
    <nav className={`site-header fixed top-0 left-0 w-full z-50 ${transparent ? 'transparent' : 'solid'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="/"
            className={`font-montserrat text-sm font-light tracking-[0.2em] uppercase transition-colors duration-300 ${
              transparent ? 'text-white' : 'text-black'
            }`}
          >
            Potato Traveler
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className={linkClass}>Home</Link>

            {/* Work dropdown */}
            <div ref={workRef} className="relative">
              <button
                className={`${linkClass} flex items-center gap-1`}
                onClick={() => setWorkOpen((v) => !v)}
                aria-expanded={workOpen}
                aria-haspopup="true"
              >
                Work
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${workOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {workOpen && (
                <div className="absolute top-full right-0 mt-3 w-36 bg-white shadow-sm border border-gray-100 py-1">
                  {workLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 font-montserrat text-xs uppercase tracking-widest text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      href="/galleries"
                      className="block px-4 py-2 font-montserrat text-xs uppercase tracking-widest text-gray-400 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                    >
                      All Work
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className={linkClass}>About</Link>
            <Link href="/contact" className={linkClass}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${transparent ? 'text-white' : 'text-black'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-1">
            <Link
              href="/"
              className="block font-montserrat text-xs uppercase tracking-widest text-gray-700 hover:text-black py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <p className="font-montserrat text-xs uppercase tracking-widest text-gray-400 py-2">Work</p>
              <div className="pl-3 space-y-1 border-l border-gray-100">
                {workLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block font-montserrat text-xs uppercase tracking-widest text-gray-700 hover:text-black py-1.5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/galleries"
                  className="block font-montserrat text-xs uppercase tracking-widest text-gray-400 hover:text-black py-1.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Work
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="block font-montserrat text-xs uppercase tracking-widest text-gray-700 hover:text-black py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block font-montserrat text-xs uppercase tracking-widest text-gray-700 hover:text-black py-2"
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
