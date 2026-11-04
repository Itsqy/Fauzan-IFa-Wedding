import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 px-5 bg-[#09060c] border-t border-[#ff2d87]/20 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        {/* Floating Butterfly Mini Accent */}
        <div className="w-10 h-10 text-[#ff2d87] mb-3 neon-glow-pink-sm animate-float-gentle">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 50 C20 10 0 30 15 65 C30 90 45 60 50 50 C55 60 70 90 85 65 C100 30 80 10 50 50 Z" />
          </svg>
        </div>

        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
          Fauzan <span className="font-script text-[#ff2d87] text-4xl sm:text-5xl mx-1 neon-text-pink">&amp;</span> Ifa
        </h3>

        <p className="font-serif italic text-sm sm:text-base text-pink-200/80 max-w-lg mb-6 leading-relaxed">
          &ldquo;Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi kami berdua.&rdquo;
        </p>

        <p className="text-xs font-sans uppercase tracking-[0.2em] text-[#ff70a6] mb-8">
          Jazakumullahu Khairan Katsiran
        </p>

        <div className="w-20 h-[1px] bg-white/10 mb-6" />

        <p className="text-xs font-sans text-pink-300/50 flex items-center justify-center gap-1.5">
          <span>The Wedding of Fauzan &amp; Ifa</span>
          <span>·</span>
          <span>14 November 2026</span>
          <span>·</span>
          <Heart className="w-3 h-3 text-[#ff2d87] fill-[#ff2d87]" />
        </p>
      </div>
    </footer>
  );
};
