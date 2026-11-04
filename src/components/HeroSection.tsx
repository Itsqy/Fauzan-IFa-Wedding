import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden px-6 pt-16 pb-8 md:pt-20 md:pb-12 select-none"
    >
      {/* Background Photo: Elevated position (object-[center_10%]) so the couple's faces are clearly visible */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/fauzan_ifa998_4aafa8ec.JPG"
          alt="The Wedding of Fauzan & Ifa"
          className="w-full h-full object-cover object-[center_10%] md:object-[center_14%] filter brightness-[0.95] contrast-[1.04]"
        />
        {/* Delicate Scrim: Keeps the couple's faces naturally bright, while giving contrast for the text below */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0b080e] via-[#0b080e]/70 to-transparent pointer-events-none" />
      </div>

      {/* Top Header Motif (Discrete and elegant) */}
      <div className="relative z-10 w-full text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-pink-100/90 tracking-[0.3em] uppercase text-[10px] sm:text-xs font-sans wedding-text-shadow">
          <Sparkles className="w-3 h-3 text-[#ff2d87]" />
          <span>Walimatul 'Ursy</span>
          <Sparkles className="w-3 h-3 text-[#ff2d87]" />
        </div>
      </div>

      {/* Bottom Area: Placed below their faces so both faces are 100% visible and highlighted */}
      <div className="relative z-10 w-full max-w-xl mx-auto text-center flex flex-col items-center mt-auto pb-4">
        {/* Kicker */}
        <p className="font-script text-2xl sm:text-3xl text-pink-100 tracking-wide mb-1 wedding-text-shadow">
          The Wedding of
        </p>

        {/* Ornate Wedding Serif with sculpted end flourishes */}
        <h1 className="font-ornate text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-wide leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          Fauzan <span className="font-script text-[#ff2d87] text-4xl sm:text-6xl md:text-7xl mx-1 neon-text-pink">&amp;</span> Ifa
        </h1>

        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#ff2d87] to-transparent mx-auto mt-3 mb-2 opacity-80" />

        <p className="text-[11px] sm:text-xs font-sans tracking-[0.3em] uppercase text-pink-100/90 wedding-text-shadow mb-6">
          Sabtu, 14 November 2026
        </p>

        {/* Scroll Down Cue */}
        <a
          href="#acara"
          className="group inline-flex flex-col items-center gap-1.5 text-pink-200/80 hover:text-white transition-colors"
          aria-label="Gulir ke jadwal acara"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans wedding-text-shadow">
            Gulir ke Bawah
          </span>
          <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm border border-[#ff2d87]/40 flex items-center justify-center text-[#ff2d87] shadow-md group-hover:scale-110 transition-transform animate-bounce">
            <ChevronDown className="w-4 h-4" />
          </div>
        </a>
      </div>
    </section>
  );
};
