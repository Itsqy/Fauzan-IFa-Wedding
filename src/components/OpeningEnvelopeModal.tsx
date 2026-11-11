import React, { useState, useEffect } from 'react';
import { MailOpen, Calendar } from 'lucide-react';
import { triggerButterflyBurst } from './NeonButterflyCanvas';
import { extractGuestNameFromUrl } from '../utils/guest';
import { Gunungan, JavaneseCornerOrnament, BatikKawungBackground, JavaneseDivider, AksaraJawaBadge } from './JavaneseMotifs';

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
      {/* Background ambient prewedding photo & Sogan Batik Kawung overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/gallery/fauzan_ifa_1.jpg"
          alt="Ifa & Fauzan"
          className="w-full h-full object-cover object-[center_28%] filter brightness-[0.32] blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0906]/92 via-[#1a110a]/85 to-[#0e0906]/95" />
        <BatikKawungBackground opacity={0.06} />
        <div className="absolute inset-0 bg-radial from-[#d4af37]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Javanese Gebyok Cover Card */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto text-center px-6 py-8 sm:py-9 rounded-3xl bg-[#19110b]/92 backdrop-blur-xl border border-[#c59b6d]/40 shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col items-center">
        {/* Intricate Javanese Carved Teak Corner Flourishes */}
        <div className="absolute top-2.5 left-2.5">
          <JavaneseCornerOrnament position="top-left" size={44} />
        </div>
        <div className="absolute top-2.5 right-2.5">
          <JavaneseCornerOrnament position="top-right" size={44} />
        </div>
        <div className="absolute bottom-2.5 left-2.5">
          <JavaneseCornerOrnament position="bottom-left" size={44} />
        </div>
        <div className="absolute bottom-2.5 right-2.5">
          <JavaneseCornerOrnament position="bottom-right" size={44} />
        </div>

        {/* Sacred Gunungan Crest */}
        <div className="mb-2">
          <Gunungan size={48} className="text-[#d4af37] mx-auto animate-float-gentle" />
        </div>

        {/* Aksara Jawa Greeting: Sugeng Rawuh */}
        <AksaraJawaBadge type="sugeng_rawuh" className="mb-2.5" />

        {/* Kicker Title: SERAT ULEM PAWIWAHAN */}
        <div className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-[#e2c299] font-medium mb-1">
          SERAT ULEM PAWIWAHAN
        </div>

        {/* Couple Names: IFA & FAUZAN */}
        <h1 className="font-ornate text-3xl sm:text-4xl text-white font-normal leading-tight tracking-wide mb-1">
          Ifa <span className="font-script text-[#d4af37] text-4xl sm:text-5xl mx-1">&amp;</span> Fauzan
        </h1>

        <JavaneseDivider className="my-2.5" />

        {/* Vibrating Envelope Motif with Javanese Golden Seal */}
        <div
          onClick={handleOpenInvitation}
          className={`group relative w-56 h-36 sm:w-60 sm:h-38 cursor-pointer my-2 transition-transform duration-300 hover:scale-105 active:scale-95 ${
            isOpening ? 'scale-110' : 'animate-envelope-vibrate'
          }`}
          title="Buka Serat Ulem"
          aria-label="Buka Serat Ulem"
        >
          {/* Luminous Glow Behind Envelope */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#d4af37]/30 to-[#875128]/25 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

          {/* Envelope Body (Teak Leather Finish) */}
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#2a1c12] to-[#1c120b] border border-[#c59b6d]/50 shadow-[0_8px_30px_rgba(0,0,0,0.7)] overflow-hidden flex items-center justify-center">
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

            {/* Central Golden Bronze Seal with Gunungan Silhouette */}
            <div className="relative z-10 w-11 h-11 rounded-full bg-[#24170e] border-2 border-[#d4af37] shadow-[0_0_18px_rgba(212,175,55,0.65)] flex flex-col items-center justify-center">
              <span className="font-serif text-xs font-bold text-[#f5ecd8] tracking-wider">I&amp;F</span>
              <span className="text-[7px] font-sans text-[#d4af37] uppercase -mt-0.5">ꦆꦥ꦳</span>
            </div>

            {/* Subtle pulse border ring */}
            <div className="absolute inset-0 rounded-2xl border border-[#d4af37]/40 animate-ping pointer-events-none opacity-20" />
          </div>
        </div>

        {/* Undangan Kepada Yth. {Nama Undangan} - Automatically read from route path or query */}
        <div className="mt-3.5 mb-3.5 px-5 py-3 rounded-2xl bg-[#23170f]/90 border border-[#c59b6d]/35 max-w-xs w-full shadow-md">
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
          className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#b88628] to-[#7d441e] text-white font-sans font-medium text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.45)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-[#fdf3dc]/40 mb-3"
        >
          <MailOpen className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
          <span>BUKA UNDANGAN</span>
        </button>

        {/* Wedding Date: Sabtu Pon, 12 Desember 2026 */}
        <div className="flex items-center gap-2 text-[11px] font-sans tracking-[0.2em] uppercase text-[#d6ab7b]/90">
          <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Sabtu Pon, 12 Desember 2026</span>
        </div>
      </div>
    </div>
  );
};
