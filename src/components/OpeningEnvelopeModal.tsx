import React, { useState, useEffect } from 'react';
import { MailOpen, Calendar } from 'lucide-react';
import { triggerButterflyBurst } from './NeonButterflyCanvas';
import { extractGuestNameFromUrl } from '../utils/guest';
import {
  WayangTopFrame,
  WayangBottomFrame,
  BatikKawungBackground,
  JavaneseDivider,
} from './JavaneseMotifs';

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
    triggerButterflyBurst(centerX, centerY, 35);

    setTimeout(() => {
      triggerButterflyBurst(centerX, centerY - 40, 24);
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
      {/* Background ambient prewedding photo & Batik Kawung overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/gallery/fauzan_ifa_1.jpg"
          alt="Ifa & Fauzan"
          className="w-full h-full object-cover object-[center_28%] filter brightness-[0.32] blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0906]/92 via-[#1a110a]/85 to-[#0e0906]/95" />
        <BatikKawungBackground opacity={0.055} />
        <div className="absolute inset-0 bg-radial from-[#d4af37]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Cover Card with Top & Bottom Wayang Kulit Frames */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto text-center rounded-3xl bg-[#160f09]/95 backdrop-blur-xl border border-[#c59b6d]/35 shadow-[0_0_65px_rgba(0,0,0,0.92)] overflow-hidden flex flex-col items-center">
        {/* Continuous Side Hairline */}
        <div className="absolute inset-x-[2%] inset-y-8 border-x border-[#d4af37]/25 pointer-events-none" />

        {/* Top Wayang & Joglo Filigree Frame */}
        <WayangTopFrame variant="hero" className="w-full" />

        <div className="relative z-20 w-full px-6 -mt-8 pb-2 flex flex-col items-center">
          {/* Kicker Title in Indonesian */}
          <div className="text-[10px] sm:text-[11px] font-sans tracking-[0.32em] uppercase text-[#e2c299] font-medium mb-1">
            UNDANGAN PERNIKAHAN
          </div>

          {/* Couple Names: IFA & FAUZAN */}
          <h1 className="font-ornate text-3xl sm:text-4xl text-white font-normal leading-tight tracking-wide mb-0.5">
            Ifa <span className="font-script text-[#d4af37] text-4xl sm:text-5xl mx-1">&amp;</span> Fauzan
          </h1>

          <JavaneseDivider className="my-2" />

          {/* Vibrating Envelope Motif with Golden Wax Seal */}
          <div
            onClick={handleOpenInvitation}
            className={`group relative w-52 h-32 sm:w-56 sm:h-34 cursor-pointer my-1.5 transition-transform duration-300 hover:scale-105 active:scale-95 ${
              isOpening ? 'scale-110' : 'animate-envelope-vibrate'
            }`}
            title="Buka Undangan"
            aria-label="Buka Undangan"
          >
            {/* Luminous Glow Behind Envelope */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#d4af37]/30 to-[#875128]/25 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

            {/* Envelope Body */}
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#2a1c12] to-[#1c120b] border border-[#c59b6d]/50 shadow-[0_8px_30px_rgba(0,0,0,0.7)] overflow-hidden flex items-center justify-center">
              <BatikKawungBackground opacity={0.08} />

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
                  stroke="rgba(212,175,55,0.6)"
                  strokeWidth="1.5"
                  style={{
                    transformOrigin: 'top center',
                    transform: isOpening ? 'rotateX(-140deg)' : 'rotateX(0deg)',
                    transition: 'transform 0.5s ease-in-out',
                  }}
                />
              </svg>

              {/* Central Golden Bronze Seal */}
              <div className="relative z-10 w-11 h-11 rounded-full bg-[#24170e] border-2 border-[#d4af37] shadow-[0_0_18px_rgba(212,175,55,0.65)] flex flex-col items-center justify-center">
                <span className="font-serif text-xs font-bold text-[#f5ecd8] tracking-wider">I&amp;F</span>
              </div>

              <div className="absolute inset-0 rounded-2xl border border-[#d4af37]/40 animate-ping pointer-events-none opacity-20" />
            </div>
          </div>

          {/* Undangan Kepada Yth. {Nama Undangan} */}
          <div className="mt-2.5 mb-3 px-5 py-2.5 rounded-2xl bg-[#20150d]/90 border border-[#c59b6d]/35 max-w-[260px] w-full shadow-md">
            <p className="text-[10px] font-sans text-[#d4a373] tracking-widest uppercase mb-0.5 font-medium">
              Undangan Kepada Yth.
            </p>
            <p className="text-base sm:text-lg font-serif font-bold text-white tracking-wide break-words">
              {guestName}
            </p>
            <p className="text-[9px] font-sans text-[#b39a82] italic mt-0.5">
              *Mohon maaf bila ada kesalahan penulisan nama/gelar
            </p>
          </div>

          {/* BUKA UNDANGAN Button */}
          <button
            onClick={handleOpenInvitation}
            className="group relative z-30 inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#b88628] to-[#7d441e] text-white font-sans font-medium text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.45)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-[#fdf3dc]/40 mb-2"
          >
            <MailOpen className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
            <span>BUKA UNDANGAN</span>
          </button>

          {/* Wedding Date */}
          <div className="relative z-30 flex items-center gap-1.5 text-[10px] font-sans tracking-[0.2em] uppercase text-[#d6ab7b]/95 -mb-16">
            <Calendar className="w-3 h-3 text-[#d4af37]" />
            <span>Sabtu, 12 Desember 2026</span>
          </div>
        </div>

        {/* Bottom Wayang Kulit Stage Frame */}
        <WayangBottomFrame showWayang={true} className="w-full" />
      </div>
    </div>
  );
};
