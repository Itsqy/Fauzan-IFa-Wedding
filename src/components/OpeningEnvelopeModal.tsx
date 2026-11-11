import React, { useState, useEffect } from 'react';
import { MailOpen, Sparkles, Calendar, Heart } from 'lucide-react';
import { triggerButterflyBurst } from './NeonButterflyCanvas';
import { extractGuestNameFromUrl } from '../utils/guest';

interface OpeningEnvelopeModalProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName?: string;
}

export const OpeningEnvelopeModal: React.FC<OpeningEnvelopeModalProps> = ({
  isOpen,
  onOpen,
  guestName: propGuestName,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const [guestName, setGuestName] = useState<string>(() => propGuestName || extractGuestNameFromUrl());

  useEffect(() => {
    if (propGuestName) {
      setGuestName(propGuestName);
    } else {
      setGuestName(extractGuestNameFromUrl());
    }
  }, [propGuestName]);

  // Lock scroll and reset to top while the envelope modal is displayed
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOpenInvitation = (e?: React.MouseEvent) => {
    if (isOpening) return;
    setIsOpening(true);

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    if (e) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    }

    // Trigger radiant burst of small golden-brown butterflies
    triggerButterflyBurst(centerX, centerY, 32);

    setTimeout(() => {
      triggerButterflyBurst(centerX, centerY - 40, 22);
    }, 280);

    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      onOpen();
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d0906]/95 backdrop-blur-2xl transition-opacity duration-700 select-none overflow-y-auto ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient prewedding glow & warm chocolate gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/gallery/fauzan_ifa_1.jpg"
          alt="Ifa & Fauzan"
          className="w-full h-full object-cover object-[center_28%] filter brightness-[0.35] blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0906]/90 via-[#18100b]/80 to-[#0e0906]/95" />
        <div className="absolute inset-0 bg-radial from-[#c59b6d]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Cover Card */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto text-center px-6 py-8 sm:py-10 rounded-3xl bg-[#19110b]/90 backdrop-blur-xl border border-[#c59b6d]/35 shadow-[0_0_60px_rgba(0,0,0,0.85)] flex flex-col items-center">
        {/* Decorative Javanese Ornate Top Flourish */}
        <div className="flex items-center gap-2 mb-2 text-[#d4a373]">
          <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#c59b6d]" />
          <Sparkles className="w-3.5 h-3.5 text-[#c59b6d]" />
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.35em] uppercase text-[#e2c299] font-medium">
            WEDDING INVITATION
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#c59b6d]" />
          <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#c59b6d]" />
        </div>

        {/* Couple Names: IFA & FAUZAN */}
        <h1 className="font-ornate text-3xl sm:text-4xl text-white font-normal leading-tight tracking-wide mb-1">
          Ifa <span className="font-script text-[#c59b6d] text-4xl sm:text-5xl mx-1">&amp;</span> Fauzan
        </h1>

        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#c59b6d] to-transparent my-3" />

        {/* Vibrating Envelope Motif */}
        <div
          onClick={handleOpenInvitation}
          className={`group relative w-56 h-36 sm:w-64 sm:h-40 cursor-pointer my-2 transition-transform duration-300 hover:scale-105 active:scale-95 ${
            isOpening ? 'scale-110' : 'animate-envelope-vibrate'
          }`}
          title="Buka Undangan"
          aria-label="Buka Undangan"
        >
          {/* Luminous Glow Behind Envelope */}
          <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-[#c59b6d]/30 to-[#875128]/25 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

          {/* Envelope Body */}
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#2a1c12] to-[#1c120b] border border-[#c59b6d]/50 shadow-[0_8px_30px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center">
            {/* Envelope Flap Fold Lines */}
            <svg
              viewBox="0 0 280 180"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <polygon
                points="0,180 140,100 280,180"
                fill="#20150e"
                stroke="rgba(197,155,109,0.35)"
                strokeWidth="1.2"
              />
              <polygon
                points="0,0 140,100 0,180"
                fill="#23170f"
                stroke="rgba(197,155,109,0.25)"
                strokeWidth="1"
              />
              <polygon
                points="280,0 140,100 280,180"
                fill="#23170f"
                stroke="rgba(197,155,109,0.25)"
                strokeWidth="1"
              />
              <polygon
                points="0,0 140,95 280,0"
                fill="#322116"
                stroke="rgba(197,155,109,0.5)"
                strokeWidth="1.5"
                style={{
                  transformOrigin: 'top center',
                  transform: isOpening ? 'rotateX(-140deg)' : 'rotateX(0deg)',
                  transition: 'transform 0.5s ease-in-out',
                }}
              />
            </svg>

            {/* Central Golden Bronze Seal */}
            <div className="relative z-10 w-9 h-9 rounded-full bg-[#24170e] border border-[#c59b6d] shadow-[0_0_15px_rgba(197,155,109,0.6)] flex items-center justify-center">
              <span className="font-serif text-sm font-bold text-[#e2c299]">I&amp;F</span>
            </div>

            {/* Subtle pulse border ring */}
            <div className="absolute inset-0 rounded-2xl border border-[#c59b6d]/40 animate-ping pointer-events-none opacity-25" />
          </div>
        </div>

        {/* Undangan Kepada Yth. {Nama Undangan} - Automatically read from route path or query */}
        <div className="mt-4 mb-4 px-5 py-3 rounded-2xl bg-[#23170f]/90 border border-[#c59b6d]/30 max-w-xs w-full shadow-md">
          <p className="text-[11px] font-sans text-[#d4a373] tracking-widest uppercase mb-1 font-medium">
            Undangan Kepada Yth.
          </p>
          <p className="text-base sm:text-lg font-serif font-bold text-white tracking-wide break-words">
            {guestName}
          </p>
          <p className="text-[10px] font-sans text-[#b39a82] italic mt-1">
            *Mohon maaf bila ada kesalahan penulisan nama/gelar
          </p>
        </div>

        {/* BUKA UNDANGAN Button */}
        <button
          onClick={handleOpenInvitation}
          className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#c59b6d] via-[#b37a44] to-[#8c5326] text-white font-sans font-medium text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(197,155,109,0.45)] hover:shadow-[0_0_30px_rgba(197,155,109,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-[#f5efe6]/30 mb-4"
        >
          <MailOpen className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
          <span>BUKA UNDANGAN</span>
        </button>

        {/* Wedding Date: Sabtu, 12 Desember 2026 */}
        <div className="flex items-center gap-2 text-[11px] font-sans tracking-[0.2em] uppercase text-[#d6ab7b]/90">
          <Calendar className="w-3.5 h-3.5 text-[#c59b6d]" />
          <span>Sabtu, 12 Desember 2026</span>
        </div>
      </div>
    </div>
  );
};
