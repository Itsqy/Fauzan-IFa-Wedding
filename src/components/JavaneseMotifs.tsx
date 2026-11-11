import React from 'react';

/**
 * Authentic Javanese Gunungan (Kayon / Pohon Hayat)
 * Sacred symbol of life, blessings, and noble beginnings in Javanese cosmology.
 */
export const Gunungan: React.FC<{ className?: string; size?: number; glow?: boolean }> = ({
  className = 'w-16 h-24 text-[#d4af37]',
  size = 100,
  glow = true,
}) => {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? 'filter drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]' : ''}`}
      style={{ width: size ? `${size}px` : undefined, height: size ? `${(size * 1.4).toFixed(0)}px` : undefined }}
    >
      <defs>
        <linearGradient id="gununganGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf3dc" />
          <stop offset="35%" stopColor="#d4af37" />
          <stop offset="70%" stopColor="#aa7c28" />
          <stop offset="100%" stopColor="#6d4715" />
        </linearGradient>
        <linearGradient id="gununganFill" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="rgba(212, 175, 55, 0.18)" />
          <stop offset="60%" stopColor="rgba(109, 71, 21, 0.25)" />
          <stop offset="100%" stopColor="rgba(35, 20, 10, 0.5)" />
        </linearGradient>
      </defs>

      {/* Gunungan Outline Body (Sacred Mountain / Meru Shape) */}
      <path
        d="M50 4 
           C52 14 62 24 68 34 
           C74 44 86 52 89 65 
           C92 78 88 88 88 100 
           C88 114 80 124 72 130 
           L50 134 
           L28 130 
           C20 124 12 114 12 100 
           C12 88 8 78 11 65 
           C14 52 26 44 32 34 
           C38 24 48 14 50 4 Z"
        fill="url(#gununganFill)"
        stroke="url(#gununganGold)"
        strokeWidth="1.5"
      />

      {/* Inner Concentric Sacred Contour */}
      <path
        d="M50 12 
           C51.5 20 59 28 64 36 
           C69 44 79 51 81 62 
           C83 73 80 82 80 94 
           C80 106 74 116 66 122 
           L50 125 
           L34 122 
           C26 116 20 106 20 94 
           C20 82 17 73 19 62 
           C21 51 31 44 36 36 
           C41 28 48.5 20 50 12 Z"
        stroke="url(#gununganGold)"
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />

      {/* Kalpataru (Tree of Life) Trunk & Axis */}
      <path d="M50 125 L50 24" stroke="url(#gununganGold)" strokeWidth="1.4" strokeLinecap="round" />

      {/* Sacred Crown Pinnacle (Makuta / Puncak Hyang) */}
      <circle cx="50" cy="5" r="2.2" fill="url(#gununganGold)" />
      <path d="M47 10 Q50 6 53 10" stroke="url(#gununganGold)" strokeWidth="1" fill="none" />

      {/* Lower Gate (Gapura Paduraksa) */}
      <path
        d="M41 124 L41 106 C41 101 45 98 50 98 C55 98 59 101 59 106 L59 124"
        stroke="url(#gununganGold)"
        strokeWidth="1.2"
        fill="rgba(30, 18, 10, 0.6)"
      />
      {/* Gapura Lintel & Steps */}
      <path d="M37 124 L63 124" stroke="url(#gununganGold)" strokeWidth="1.2" />
      <path d="M39 127 L61 127" stroke="url(#gununganGold)" strokeWidth="1" />
      <circle cx="50" cy="106" r="1.5" fill="url(#gununganGold)" />

      {/* Intricate Javanese Lung-lungan (Tendril Foliage Branches) */}
      {/* Branch Layer 1 (Upper) */}
      <path
        d="M50 35 C56 31 66 32 64 42 C62 48 53 45 50 49"
        stroke="url(#gununganGold)"
        strokeWidth="0.9"
        fill="none"
      />
      <path
        d="M50 35 C44 31 34 32 36 42 C38 48 47 45 50 49"
        stroke="url(#gununganGold)"
        strokeWidth="0.9"
        fill="none"
      />

      {/* Branch Layer 2 (Mid-Upper) */}
      <path
        d="M50 52 C60 48 74 50 72 63 C70 71 58 64 50 70"
        stroke="url(#gununganGold)"
        strokeWidth="0.9"
        fill="none"
      />
      <path
        d="M50 52 C40 48 26 50 28 63 C30 71 42 64 50 70"
        stroke="url(#gununganGold)"
        strokeWidth="0.9"
        fill="none"
      />

      {/* Branch Layer 3 (Mid-Lower with Floral Swirls) */}
      <path
        d="M50 73 C62 68 79 72 76 87 C73 97 61 88 50 95"
        stroke="url(#gununganGold)"
        strokeWidth="0.9"
        fill="none"
      />
      <path
        d="M50 73 C38 68 21 72 24 87 C27 97 39 88 50 95"
        stroke="url(#gununganGold)"
        strokeWidth="0.9"
        fill="none"
      />

      {/* Wing / Beksan Flourishes on Outer Lower Edges */}
      <path
        d="M17 96 C24 93 28 98 25 106 C23 111 16 109 17 96 Z"
        stroke="url(#gununganGold)"
        strokeWidth="0.7"
        fill="rgba(212, 175, 55, 0.15)"
      />
      <path
        d="M83 96 C76 93 72 98 75 106 C77 111 84 109 83 96 Z"
        stroke="url(#gununganGold)"
        strokeWidth="0.7"
        fill="rgba(212, 175, 55, 0.15)"
      />

      {/* Floating Stardust Embers */}
      <circle cx="50" cy="20" r="1.2" fill="#fff5dd" />
      <circle cx="60" cy="46" r="0.9" fill="#fcf0d3" />
      <circle cx="40" cy="46" r="0.9" fill="#fcf0d3" />
      <circle cx="70" cy="68" r="0.9" fill="#fcf0d3" />
      <circle cx="30" cy="68" r="0.9" fill="#fcf0d3" />
    </svg>
  );
};

/**
 * Javanese Traditional Carved Lung-lungan (Sulur Bunga Ukiran Gebyok Jepara)
 * Used as elegant corner ornaments for cards and framed sections.
 */
export const JavaneseCornerOrnament: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}> = ({ position = 'top-left', className = 'text-[#c59b6d]', size = 48 }) => {
  let transform = '';
  if (position === 'top-right') transform = 'scaleX(-1)';
  if (position === 'bottom-left') transform = 'scaleY(-1)';
  if (position === 'bottom-right') transform = 'scale(-1, -1)';

  return (
    <svg
      viewBox="0 0 60 60"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform }}
    >
      <defs>
        <linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7eccd" />
          <stop offset="50%" stopColor="#c59b6d" />
          <stop offset="100%" stopColor="#7a4b1e" />
        </linearGradient>
      </defs>
      {/* Outer corner frame border */}
      <path d="M4 35 L4 8 C4 5.8 5.8 4 8 4 L35 4" stroke="url(#cornerGold)" strokeWidth="1.2" />
      <path d="M9 28 L9 10 C9 9.5 9.5 9 10 9 L28 9" stroke="url(#cornerGold)" strokeWidth="0.8" opacity="0.6" />

      {/* Main Lung-lungan Scroll (Sulur Melingkar) */}
      <path
        d="M4 4 C16 4 28 10 28 22 C28 29 22 34 16 32 C11 30 11 23 16 20 C20 18 24 21 23 25"
        stroke="url(#cornerGold)"
        strokeWidth="1.1"
      />
      {/* Secondary Leaf Curl */}
      <path
        d="M4 14 C12 14 20 18 22 26 C23 32 19 36 14 36"
        stroke="url(#cornerGold)"
        strokeWidth="0.8"
      />
      <path
        d="M14 4 C14 12 18 20 26 22 C32 23 36 19 36 14"
        stroke="url(#cornerGold)"
        strokeWidth="0.8"
      />

      {/* Melati Flower Bud accent */}
      <circle cx="8" cy="8" r="2" fill="url(#cornerGold)" />
      <circle cx="28" cy="22" r="1.3" fill="url(#cornerGold)" />
    </svg>
  );
};

/**
 * Authentic Javanese Sogan Batik Kawung Pattern (SVG Texture Overlay)
 * The four-oval Kawung motif represents the four directions of life & self-purification.
 */
export const BatikKawungBackground: React.FC<{ className?: string; opacity?: number }> = ({
  className = 'absolute inset-0 pointer-events-none',
  opacity = 0.045,
}) => {
  return (
    <div className={`${className} overflow-hidden`} style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="batikKawungPattern" width="48" height="48" patternUnits="userSpaceOnUse">
            {/* Center crosshair dot */}
            <circle cx="24" cy="24" r="1.6" fill="#d4af37" />
            <circle cx="0" cy="0" r="1.6" fill="#d4af37" />
            <circle cx="48" cy="0" r="1.6" fill="#d4af37" />
            <circle cx="0" cy="48" r="1.6" fill="#d4af37" />
            <circle cx="48" cy="48" r="1.6" fill="#d4af37" />

            {/* 4 Petals of Kawung around center (24, 24) */}
            {/* Top petal */}
            <path
              d="M24 24 C20 16 20 8 24 4 C28 8 28 16 24 24 Z"
              stroke="#d4af37"
              strokeWidth="0.75"
              fill="none"
            />
            {/* Bottom petal */}
            <path
              d="M24 24 C20 32 20 40 24 44 C28 40 28 32 24 24 Z"
              stroke="#d4af37"
              strokeWidth="0.75"
              fill="none"
            />
            {/* Left petal */}
            <path
              d="M24 24 C16 20 8 20 4 24 C8 28 16 28 24 24 Z"
              stroke="#d4af37"
              strokeWidth="0.75"
              fill="none"
            />
            {/* Right petal */}
            <path
              d="M24 24 C32 20 40 20 44 24 C40 28 32 28 24 24 Z"
              stroke="#d4af37"
              strokeWidth="0.75"
              fill="none"
            />

            {/* Corner petals intersecting at (0, 0) and (48, 48) */}
            <path
              d="M0 0 C4 8 12 8 16 0 C12 -8 4 -8 0 0 Z"
              stroke="#d4af37"
              strokeWidth="0.6"
              fill="none"
            />
            <path
              d="M48 0 C44 8 36 8 32 0 C36 -8 44 -8 48 0 Z"
              stroke="#d4af37"
              strokeWidth="0.6"
              fill="none"
            />
            <path
              d="M0 48 C4 40 12 40 16 48 C12 56 4 56 0 48 Z"
              stroke="#d4af37"
              strokeWidth="0.6"
              fill="none"
            />
            <path
              d="M48 48 C44 40 36 40 32 48 C36 56 44 56 48 48 Z"
              stroke="#d4af37"
              strokeWidth="0.6"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#batikKawungPattern)" />
      </svg>
    </div>
  );
};

/**
 * Traditional Javanese Horizontal Divider with Mini Gunungan / Keris Crest
 */
export const JavaneseDivider: React.FC<{ className?: string }> = ({ className = 'my-4' }) => {
  return (
    <div className={`flex items-center justify-center gap-2 select-none pointer-events-none ${className}`}>
      {/* Left Filigree Line */}
      <div className="flex items-center">
        <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#c59b6d]/60 to-[#d4af37]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#c59b6d] mx-1" />
      </div>

      {/* Center Traditional Javanese Motif Accent */}
      <div className="relative flex items-center justify-center px-1">
        <svg viewBox="0 0 36 24" className="w-8 h-6 text-[#d4af37]" fill="currentColor">
          {/* Stylized miniature Gunungan crest with wings */}
          <path d="M18 1 C19 5 23 8 25 12 C23 15 19 14 18 19 C17 14 13 15 11 12 C13 8 17 5 18 1 Z" opacity="0.9" />
          <path d="M18 19 L18 23 M13 23 L23 23" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M7 14 C10 11 14 14 15 17 C13 18 9 17 7 14 Z" opacity="0.75" />
          <path d="M29 14 C26 11 22 14 21 17 C23 18 27 17 29 14 Z" opacity="0.75" />
        </svg>
      </div>

      {/* Right Filigree Line */}
      <div className="flex items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c59b6d] mx-1" />
        <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent via-[#c59b6d]/60 to-[#d4af37]" />
      </div>
    </div>
  );
};

/**
 * Aksara Jawa Decorative Typography Badge
 */
export const AksaraJawaBadge: React.FC<{
  type?: 'sugeng_rawuh' | 'dhaup_suci' | 'serat_ulem' | 'donga_pangestu' | 'matur_nuwun';
  aksara?: string;
  latin?: string;
  meaning?: string;
  className?: string;
}> = ({ type, aksara, latin, meaning, className = 'text-[#d4af37]' }) => {
  const dictionary: Record<string, { aksara: string; latin: string; meaning: string }> = {
    sugeng_rawuh: {
      aksara: 'ꦱꦸꦒꦼꦁꦫꦮꦸꦃ',
      latin: 'Sugeng Rawuh',
      meaning: 'Selamat Datang',
    },
    dhaup_suci: {
      aksara: 'ꦝꦻꦴꦥ꧀ꦱꦸꦕꦶ',
      latin: 'Dhaup Suci',
      meaning: 'Pernikahan Suci',
    },
    serat_ulem: {
      aksara: 'ꦱꦼꦫꦠ꧀ꦲꦸꦭꦼꦩ꧀',
      latin: 'Serat Ulem',
      meaning: 'Surat Undangan',
    },
    donga_pangestu: {
      aksara: 'ꦢꦺꦴꦔꦥꦔꦺꦱ꧀ꦠꦸ',
      latin: 'Donga Pangestu',
      meaning: 'Doa Restu',
    },
    matur_nuwun: {
      aksara: 'ꦩꦠꦸꦂꦤꦸꦮꦸꦤ꧀',
      latin: 'Matur Nuwun',
      meaning: 'Terima Kasih',
    },
  };

  const selected = (type && dictionary[type]) || {
    aksara: aksara || '',
    latin: latin || '',
    meaning: meaning || '',
  };

  if (!selected.aksara && !selected.latin) {
    return null;
  }

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {selected.aksara && (
        <span className="text-sm sm:text-base font-serif tracking-widest text-[#e8c872] opacity-90 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
          {selected.aksara}
        </span>
      )}
      {selected.latin && (
        <span className="text-[9px] font-sans tracking-[0.25em] uppercase text-[#c59b6d]/80 -mt-0.5">
          {selected.latin}
        </span>
      )}
    </div>
  );
};
