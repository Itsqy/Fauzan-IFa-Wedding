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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0d0914]/85 backdrop-blur-md border-b border-[#ff2d87]/15 py-3 shadow-lg'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 px-5 sm:px-8">
        {/* Zone 1: Elegant Wordmark with Cormorant Serif */}
        <a
          href="#hero"
          className="text-lg sm:text-xl font-serif tracking-wide text-white hover:text-pink-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 drop-shadow"
        >
          <span className="font-semibold">Fauzan</span>
          <span className="font-script text-[#ff2d87] text-xl sm:text-2xl mx-0.5 neon-text-pink">&amp;</span>
          <span className="font-semibold">Ifa</span>
        </a>

        {/* Zone 2: Clean single-line desktop navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-sans tracking-wider uppercase text-pink-100/80">
          <a
            href="#acara"
            className="hover:text-white hover:underline underline-offset-4 decoration-[#ff2d87] transition-colors whitespace-nowrap"
          >
            Jadwal Acara
          </a>
          <a
            href="#mempelai"
            className="hover:text-white hover:underline underline-offset-4 decoration-[#ff2d87] transition-colors whitespace-nowrap"
          >
            Mempelai
          </a>
          <a
            href="#kisah"
            className="hover:text-white hover:underline underline-offset-4 decoration-[#ff2d87] transition-colors whitespace-nowrap"
          >
            Kisah Cinta
          </a>
          <a
            href="#hadiah"
            className="hover:text-white hover:underline underline-offset-4 decoration-[#ff2d87] transition-colors whitespace-nowrap"
          >
            Amplop Digital
          </a>
          <a
            href="#ucapan"
            className="hover:text-white hover:underline underline-offset-4 decoration-[#ff2d87] transition-colors whitespace-nowrap"
          >
            Buku Tamu
          </a>
        </nav>

        {/* Zone 3: Elegant, understated RSVP trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenRSVP}
            className="px-3.5 py-1.5 rounded-full bg-[#ff2d87]/20 hover:bg-[#ff2d87] text-pink-100 hover:text-white text-xs font-sans font-medium transition-all duration-300 border border-[#ff2d87]/40 shadow-sm hover:shadow-[0_0_15px_rgba(255,45,135,0.6)] cursor-pointer flex items-center gap-1.5"
          >
            <Heart className="w-3 h-3 fill-current text-[#ff2d87] group-hover:text-white" />
            <span>RSVP</span>
          </button>
        </div>
      </div>
    </header>
  );
};
