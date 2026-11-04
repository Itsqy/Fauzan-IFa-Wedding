import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface BloomingButterflyScrollProps {
  scrollProgress: number; // 0 to 1
  onTriggerBurst?: () => void;
}

export const BloomingButterflyScroll: React.FC<BloomingButterflyScrollProps> = ({
  scrollProgress,
  onTriggerBurst,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pulse, setPulse] = useState(false);

  // Calculate bloom stages (0.0 to 1.0)
  // Map scroll progress to a smooth blossoming cycle
  const bloomFactor = Math.min(1, Math.max(0.08, scrollProgress));
  
  // Angle of wing spread: 75deg (closed/folded) down to 0deg (fully wide open blooming wings)
  const leftWingAngle = 72 * (1 - bloomFactor);
  const rightWingAngle = -72 * (1 - bloomFactor);
  
  // Scale of wings blossoming outward
  const wingScale = 0.75 + bloomFactor * 0.45;
  const glowIntensity = 10 + bloomFactor * 24;

  const handleManualBloom = () => {
    setPulse(true);
    if (onTriggerBurst) onTriggerBurst();
    setTimeout(() => setPulse(false), 900);
  };

  return (
    <div className="fixed right-4 bottom-24 md:right-8 md:bottom-28 z-30 flex flex-col items-center select-none group">
      {/* Floating Tooltip Pill */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mb-2 px-3 py-1 bg-[#180f22]/90 backdrop-blur-md border border-[#ff2d87]/40 rounded-full shadow-lg text-[11px] font-sans text-pink-200 tracking-wider uppercase flex items-center gap-1.5 cursor-pointer hover:border-[#ff2d87] transition-all hover:scale-105"
      >
        <Sparkles className="w-3 h-3 text-[#ff2d87] animate-spin" style={{ animationDuration: '6s' }} />
        <span>Kupu Bermekaran: {Math.round(bloomFactor * 100)}%</span>
      </div>

      {/* Interactive Blooming Butterfly Container */}
      <div
        onClick={handleManualBloom}
        title="Scroll ke bawah untuk melihat kupu-kupu bermekaran, atau klik untuk efek kilau!"
        className="relative w-20 h-20 md:w-24 md:h-24 cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95"
        style={{
          perspective: '800px',
        }}
      >
        {/* Ambient Neon Pink Aura / Halo Ring */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(255, 45, 135, ${0.15 + bloomFactor * 0.35}) 0%, rgba(255, 45, 135, 0) 70%)`,
            transform: `scale(${0.9 + bloomFactor * 0.5})`,
            filter: `blur(${4 + bloomFactor * 6}px)`,
          }}
        />

        {/* Pulsing shockwave ring when clicked */}
        {pulse && (
          <div className="absolute inset-0 rounded-full border-2 border-[#ff2d87] animate-ping pointer-events-none" />
        )}

        {/* Butterfly SVG Structure with 3D Wing Transformation */}
        <svg
          viewBox="-75 -60 150 120"
          className="w-full h-full overflow-visible"
          style={{
            filter: `drop-shadow(0 0 ${glowIntensity}px rgba(255, 45, 135, ${0.6 + bloomFactor * 0.4}))`,
          }}
        >
          <defs>
            <linearGradient id="neonPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#ff70a6" />
              <stop offset="70%" stopColor="#ff2d87" />
              <stop offset="100%" stopColor="#ff007f" />
            </linearGradient>

            <linearGradient id="wingVeinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#ffb3d9" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ff2d87" stopOpacity="0.3" />
            </linearGradient>

            <radialGradient id="wingCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ff2d87" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ff007f" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* LEFT WING (Rotates & Blooms based on scroll) */}
          <g
            style={{
              transformOrigin: '0px 0px',
              transform: `scale(${wingScale}) rotateY(${leftWingAngle}deg)`,
              transition: 'transform 0.15s cubic-bezier(0.2, 0.8, 0.4, 1)',
            }}
          >
            {/* Upper Forewing */}
            <path
              d="M 0,0 
                 C -25,-45 -65,-40 -55,-12 
                 C -48,10 -20,8 0,0 Z"
              fill="url(#neonPinkGrad)"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            {/* Lower Hindwing */}
            <path
              d="M 0,0 
                 C -28,8 -50,30 -25,44 
                 C -10,38 -5,15 0,0 Z"
              fill="url(#neonPinkGrad)"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            {/* Luminous Inner Petal Lace Veins */}
            <path
              d="M 0,0 C -20,-20 -40,-20 -46,-12"
              fill="none"
              stroke="url(#wingVeinGrad)"
              strokeWidth="1"
            />
            <path
              d="M 0,0 C -15,-30 -35,-32 -32,-15"
              fill="none"
              stroke="url(#wingVeinGrad)"
              strokeWidth="0.8"
            />
            <path
              d="M 0,0 C -18,15 -32,25 -20,32"
              fill="none"
              stroke="url(#wingVeinGrad)"
              strokeWidth="0.8"
            />
            {/* Decorative Wing Jewel Sparkle */}
            <circle cx="-38" cy="-20" r="1.8" fill="#ffffff" />
            <circle cx="-20" cy="24" r="1.4" fill="#ffffff" />
          </g>

          {/* RIGHT WING (Symmetrical Blooming) */}
          <g
            style={{
              transformOrigin: '0px 0px',
              transform: `scale(${wingScale}) rotateY(${rightWingAngle}deg)`,
              transition: 'transform 0.15s cubic-bezier(0.2, 0.8, 0.4, 1)',
            }}
          >
            {/* Upper Forewing */}
            <path
              d="M 0,0 
                 C 25,-45 65,-40 55,-12 
                 C 48,10 20,8 0,0 Z"
              fill="url(#neonPinkGrad)"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            {/* Lower Hindwing */}
            <path
              d="M 0,0 
                 C 28,8 50,30 25,44 
                 C 10,38 5,15 0,0 Z"
              fill="url(#neonPinkGrad)"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            {/* Luminous Inner Petal Lace Veins */}
            <path
              d="M 0,0 C 20,-20 40,-20 46,-12"
              fill="none"
              stroke="url(#wingVeinGrad)"
              strokeWidth="1"
            />
            <path
              d="M 0,0 C 15,-30 35,-32 32,-15"
              fill="none"
              stroke="url(#wingVeinGrad)"
              strokeWidth="0.8"
            />
            <path
              d="M 0,0 C 18,15 32,25 20,32"
              fill="none"
              stroke="url(#wingVeinGrad)"
              strokeWidth="0.8"
            />
            {/* Decorative Wing Jewel Sparkle */}
            <circle cx="38" cy="-20" r="1.8" fill="#ffffff" />
            <circle cx="20" cy="24" r="1.4" fill="#ffffff" />
          </g>

          {/* Butterfly Central Body */}
          <g>
            {/* Thorax / Abdomen */}
            <ellipse cx="0" cy="4" rx="2.5" ry="16" fill="#ffffff" />
            <ellipse cx="0" cy="-12" rx="3" ry="3.5" fill="#ffffff" />
            
            {/* Antennae */}
            <path
              d="M -1,-15 Q -10,-28 -14,-32"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="-14" cy="-32" r="1.2" fill="#ff70a6" />

            <path
              d="M 1,-15 Q 10,-28 14,-32"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="14" cy="-32" r="1.2" fill="#ff70a6" />
          </g>
        </svg>

        {/* Floating stardust dots around blooming butterfly */}
        <div
          className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ff2d87] animate-ping"
          style={{
            top: '15%',
            left: `${20 - bloomFactor * 12}%`,
            animationDuration: '2.5s',
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full bg-[#ff70a6] shadow-[0_0_8px_#ff2d87] animate-ping"
          style={{
            top: '70%',
            right: `${20 - bloomFactor * 12}%`,
            animationDuration: '3.1s',
          }}
        />
      </div>

      <span className="text-[10px] text-pink-300/70 font-sans tracking-wide mt-1 text-center hidden md:block">
        Gulir untuk mekarkan
      </span>
    </div>
  );
};
