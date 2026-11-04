import React from 'react';
import { MailOpen, Heart, Sparkles } from 'lucide-react';

interface CoverScreenProps {
  onOpenInvitation: () => void;
  guestName?: string;
  onHoverRSVP?: () => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({
  onOpenInvitation,
  guestName = 'Tamu Undangan Terhormat',
  onHoverRSVP,
}) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0d0913]">
      {/* Background Image: The uploaded portrait of Fauzan & Ifa */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/fauzan_ifa998_4aafa8ec.JPG"
          alt="Fauzan & Ifa"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Atmospheric Dark & Rose Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b080e] via-[#0d0914]/60 to-[#0b080e]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0b080e]/40 to-[#0b080e]/90" />
      </div>

      {/* Decorative Floating Neon Pink Butterflies in Corner */}
      <div className="absolute top-8 left-8 hidden sm:flex items-center gap-2 pointer-events-none opacity-80">
        <div className="w-8 h-8 text-[#ff2d87] animate-float-gentle neon-glow-pink-sm">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 50 C20 10 0 30 15 65 C30 90 45 60 50 50 C55 60 70 90 85 65 C100 30 80 10 50 50 Z" />
          </svg>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-pink-300/80 font-sans">
          Walimatul 'Ursy
        </span>
      </div>

      {/* Central Invitation Card */}
      <div className="relative z-10 max-w-lg mx-4 sm:mx-auto text-center px-6 py-10 sm:py-12 rounded-3xl bg-[#140e1c]/80 backdrop-blur-xl border border-[#ff2d87]/30 shadow-[0_0_50px_rgba(255,45,135,0.25)] flex flex-col items-center">
        {/* Header Kicker */}
        <div className="flex items-center gap-2 mb-3 text-pink-300">
          <Sparkles className="w-4 h-4 text-[#ff2d87] animate-pulse" />
          <span className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-pink-200">
            The Wedding Celebration
          </span>
          <Sparkles className="w-4 h-4 text-[#ff2d87] animate-pulse" />
        </div>

        {/* Couple Names */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight mb-2 drop-shadow-md">
          Fauzan <span className="font-script text-[#ff2d87] text-4xl sm:text-5xl md:text-6xl mx-1.5 neon-text-pink">&amp;</span> Ifa
        </h1>

        {/* Date Line */}
        <p className="text-sm font-sans text-pink-200/80 tracking-widest uppercase mb-8 flex items-center justify-center gap-2">
          <span>Sabtu</span>
          <span className="text-[#ff2d87]">·</span>
          <span>14 November 2026</span>
          <span className="text-[#ff2d87]">·</span>
          <span>Jakarta</span>
        </p>

        {/* Small Lace Divider */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#ff2d87] to-transparent mb-7" />

        {/* Kepada Yth. Tamu */}
        <div className="mb-8 px-5 py-3.5 rounded-2xl bg-[#1d1428]/80 border border-white/10 max-w-sm w-full">
          <p className="text-xs font-sans text-pink-300/80 uppercase tracking-widest mb-1">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <p className="text-lg font-serif font-semibold text-white tracking-wide">
            {guestName}
          </p>
          <p className="text-[11px] text-pink-200/60 font-sans italic mt-1">
            *Mohon maaf bila ada kesalahan penulisan nama/gelar
          </p>
        </div>

        {/* Primary Open Button */}
        <button
          onClick={onOpenInvitation}
          onMouseEnter={onHoverRSVP}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff2d87] to-[#e60067] text-white font-sans font-medium text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(255,45,135,0.6)] hover:shadow-[0_0_40px_rgba(255,45,135,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <MailOpen className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
          <span>Buka Undangan</span>
          <Heart className="w-4 h-4 fill-white text-white opacity-80 group-hover:animate-ping" />
        </button>

        <p className="text-[11px] font-sans text-pink-300/50 mt-4 tracking-wide">
          Sentuh untuk membuka undangan &amp; memutar alunan musik
        </p>
      </div>

      {/* Floating Bottom Hint */}
      <div className="absolute bottom-4 text-center z-10 text-xs font-sans text-pink-200/40 tracking-wider">
        Fauzan &amp; Ifa Wedding · 2026
      </div>
    </div>
  );
};
