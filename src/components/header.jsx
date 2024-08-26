import React, { useState, useEffect } from 'react';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        isScrolled 
          ? 'my-2 bg-transparent backdrop-blur-md backdrop-brightness-200 rounded-xl'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`w-full ${isScrolled ? 'px-4' : 'px-8'} mx-auto`}
      >
        <div className="h-16 flex items-center justify-between">
          {/* Desktop */}
          <MainNav isScrolled={isScrolled} />
          {/* Mobile */}
          <MobileNav isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
}
