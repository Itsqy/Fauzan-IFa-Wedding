import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface NavbarProps {
  onOpenRSVP: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRSVP }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#140e09]/90 backdrop-blur-md border-b border-[#c59b6d]/20 py-3 shadow-lg'
          : 'bg-transparent py-3 sm:py-4 border-b border-transparent'
      }`}
    >
      <div className="w-full flex items-center justify-between px-4 sm:px-5">
        <a
          href="#hero"
          className="text-base sm:text-lg font-serif tracking-wide text-white hover:text-[#e2c299] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 drop-shadow"
        >
          <span className="font-semibold">Ifa</span>
          <span className="font-script text-[#c59b6d] text-xl sm:text-2xl mx-0.5">&amp;</span>
          <span className="font-semibold">Fauzan</span>
        </a>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenRSVP}
            className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#c59b6d]/25 hover:bg-[#c59b6d] hover:text-[#120c08] text-[#e2c299] text-[11px] sm:text-xs font-sans font-medium transition-all duration-300 border border-[#c59b6d]/50 shadow-sm hover:shadow-[0_0_15px_rgba(197,155,109,0.5)] cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <Heart className="w-3 h-3 fill-current text-[#c59b6d] group-hover:text-white" />
            <span>RSVP</span>
          </button>
        </div>
      </div>
    </header>
  );
};