import React, { useState } from 'react';

interface OpeningEnvelopeModalProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const OpeningEnvelopeModal: React.FC<OpeningEnvelopeModalProps> = ({
  isOpen,
  onOpen,
}) => {
  const [isOpening, setIsOpening] = useState(false);

  if (!isOpen) return null;

  const handleClickEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Smooth opening transition before launching audio and revealing main page
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09060d]/95 backdrop-blur-2xl transition-opacity duration-700 select-none ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-radial from-[#ff2d87]/15 via-transparent to-transparent pointer-events-none" />

      {/* ONLY the vibrating envelope, no text, no love */}
      <div
        onClick={handleClickEnvelope}
        className={`group relative w-64 h-44 sm:w-80 sm:h-52 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 ${
          isOpening ? 'scale-110' : 'animate-envelope-vibrate'
        }`}
        title="Buka Undangan"
        aria-label="Buka Undangan"
      >
        {/* Luminous Glow Behind Envelope */}
        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#ff2d87]/35 to-[#ff007f]/25 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />

        {/* Envelope Body */}
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#221232] to-[#140b20] border border-[#ff2d87]/50 shadow-[0_8px_35px_rgba(255,45,135,0.35)] overflow-hidden flex items-center justify-center">
          {/* Envelope Flap Fold Lines */}
          <svg
            viewBox="0 0 280 180"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {/* Bottom fold triangle */}
            <polygon
              points="0,180 140,100 280,180"
              fill="#1a0d27"
              stroke="rgba(255,45,135,0.35)"
              strokeWidth="1.2"
            />
            {/* Side fold triangles */}
            <polygon
              points="0,0 140,100 0,180"
              fill="#1d0f2c"
              stroke="rgba(255,45,135,0.25)"
              strokeWidth="1"
            />
            <polygon
              points="280,0 140,100 280,180"
              fill="#1d0f2c"
              stroke="rgba(255,45,135,0.25)"
              strokeWidth="1"
            />
            {/* Top flap with 3D open transform */}
            <polygon
              points="0,0 140,95 280,0"
              fill="#2a143b"
              stroke="rgba(255,45,135,0.5)"
              strokeWidth="1.5"
              style={{
                transformOrigin: 'top center',
                transform: isOpening ? 'rotateX(-140deg)' : 'rotateX(0deg)',
                transition: 'transform 0.5s ease-in-out',
              }}
            />
          </svg>

          {/* Central subtle hairline seal knot (without heart, without love) */}
          <div className="relative z-10 w-9 h-9 rounded-full bg-[#200f2e] border border-[#ff2d87]/70 shadow-[0_0_15px_rgba(255,45,135,0.6)] flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff2d87] shadow-[0_0_10px_#ff2d87]" />
          </div>

          {/* Subtle vibrating pulse ring */}
          <div className="absolute inset-0 rounded-2xl border border-[#ff2d87]/50 animate-ping pointer-events-none opacity-30" />
        </div>
      </div>
    </div>
  );
};
