import React from 'react';
import { MailOpen, Heart, Sparkles } from 'lucide-react';
import { extractGuestNameFromUrl } from '../utils/guest';

interface CoverScreenProps {
  onOpenInvitation: () => void;
  guestName?: string;
  onHoverRSVP?: () => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({
  onOpenInvitation,
  guestName,
  onHoverRSVP,
}) => {
  const resolvedGuestName = guestName || extractGuestNameFromUrl();
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#100a06]">
      {/* Background Image: The portrait of Ifa & Fauzan */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/gallery/fauzan_ifa_1.jpg"
          alt="Ifa & Fauzan"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[center_28%] filter brightness-[0.72] contrast-[1.05] scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100a06] via-[#160f09]/60 to-[#100a06]/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#100a06]/40 to-[#100a06]/90" />
      </div>

      {/* Decorative Floating Golden Brown Butterflies in Corner */}
      <div className="absolute top-8 left-8 hidden sm:flex items-center gap-2 pointer-events-none opacity-80">
        <div className="w-7 h-7 text-[#c59b6d] animate-float-gentle gold-glow-sm">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 50 C20 10 0 30 15 65 C30 90 45 60 50 50 C55 60 70 90 85 65 C100 30 80 10 50 50 Z" />
          </svg>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-[#d4a373] font-sans">
          Walimatul 'Ursy
        </span>
      </div>

      {/* Central Invitation Card */}
      <div className="relative z-10 max-w-lg mx-4 sm:mx-auto text-center px-6 py-10 sm:py-12 rounded-3xl bg-[#19110b]/85 backdrop-blur-xl border border-[#c59b6d]/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col items-center">
        {/* Header Kicker */}
        <div className="flex items-center gap-2 mb-3 text-[#d4a373]">
          <Sparkles className="w-4 h-4 text-[#c59b6d] animate-pulse" />
          <span className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-[#e2c299]">
            WEDDING INVITATION
          </span>
          <Sparkles className="w-4 h-4 text-[#c59b6d] animate-pulse" />
        </div>

        {/* Couple Names */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight mb-2 drop-shadow-md">
          Ifa <span className="font-script text-[#c59b6d] text-4xl sm:text-5xl md:text-6xl mx-1.5">&amp;</span> Fauzan
        </h1>

        {/* Date Line */}
        <p className="text-sm font-sans text-[#d6c5b3] tracking-widest uppercase mb-8 flex items-center justify-center gap-2">
          <span>Sabtu</span>
          <span className="text-[#c59b6d]">·</span>
          <span>12 Desember 2026</span>
          <span className="text-[#c59b6d]">·</span>
          <span>Semarang</span>
        </p>

        {/* Small Lace Divider */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c59b6d] to-transparent mb-7" />

        {/* Kepada Yth. Tamu */}
        <div className="mb-8 px-5 py-3.5 rounded-2xl bg-[#23170f]/80 border border-white/10 max-w-sm w-full">
          <p className="text-xs font-sans text-[#d4a373] uppercase tracking-widest mb-1">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <p className="text-lg font-serif font-semibold text-white tracking-wide">
            {resolvedGuestName}
          </p>
          <p className="text-[11px] text-[#b39a82] font-sans italic mt-1">
            *Mohon maaf bila ada kesalahan penulisan nama/gelar
          </p>
        </div>

        {/* Primary Open Button */}
        <button
          onClick={onOpenInvitation}
          onMouseEnter={onHoverRSVP}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c59b6d] via-[#b37a44] to-[#8c5326] text-white font-sans font-medium text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(197,155,109,0.5)] hover:shadow-[0_0_35px_rgba(197,155,109,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <MailOpen className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
          <span>BUKA UNDANGAN</span>
          <Heart className="w-4 h-4 fill-white text-white opacity-80 group-hover:animate-ping" />
        </button>

        <p className="text-[11px] font-sans text-[#b39a82] mt-4 tracking-wide">
          Sentuh untuk membuka undangan &amp; memutar alunan musik
        </p>
      </div>

      {/* Floating Bottom Hint */}
      <div className="absolute bottom-4 text-center z-10 text-xs font-sans text-[#b39a82] tracking-wider">
        Ifa &amp; Fauzan Wedding · 2026
      </div>
    </div>
  );
};