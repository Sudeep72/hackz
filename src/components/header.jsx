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
    <div className="fixed top-0 w-full z-50">
      <div className={`mx-auto max-w-screen-xl ${isScrolled ? 'px-2' : ''}`}>
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-transparent backdrop-blur-xl backdrop-brightness-200 rounded-xl my-2'
              : 'bg-transparent'
          }`}
        >
          <div className="h-16 flex items-center justify-between px-4 text-sm">
            {/* Desktop */}
            <MainNav isScrolled={isScrolled} />
            {/* Mobile */}
            <MobileNav isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </div>
  );
}
