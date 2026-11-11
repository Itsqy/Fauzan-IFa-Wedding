import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 px-5 bg-[#0e0906] border-t border-[#c59b6d]/20 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        {/* Floating Butterfly Mini Accent */}
        <div className="w-8 h-8 text-[#c59b6d] mb-3 gold-glow-sm animate-float-gentle">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 50 C20 10 0 30 15 65 C30 90 45 60 50 50 C55 60 70 90 85 65 C100 30 80 10 50 50 Z" />
          </svg>
        </div>

        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
          Ifa <span className="font-script text-[#c59b6d] text-4xl sm:text-5xl mx-1">&amp;</span> Fauzan
        </h3>

        <p className="font-serif italic text-sm sm:text-base text-[#d6c5b3] max-w-lg mb-6 leading-relaxed">
          &ldquo;Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi kami berdua.&rdquo;
        </p>

        <p className="text-xs font-sans uppercase tracking-[0.2em] text-[#d4a373] mb-8 font-medium">
          Matur Nuwun · Jazakumullahu Khairan Katsiran
        </p>

        <div className="w-20 h-[1px] bg-white/10 mb-6" />

        <p className="text-xs font-sans text-[#b39a82] flex items-center justify-center gap-1.5 flex-wrap">
          <span>The Wedding of Ifa &amp; Fauzan</span>
          <span>·</span>
          <span>12 Desember 2026</span>
          <span>·</span>
          <Heart className="w-3 h-3 text-[#c59b6d] fill-[#c59b6d]" />
        </p>
      </div>
    </footer>
  );
};