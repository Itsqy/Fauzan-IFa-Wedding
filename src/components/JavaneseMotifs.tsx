import React from 'react';

/**
 * ============================================================================
 * ROYAL JAVANESE WAYANG KULIT & FILIGREE DESIGN SYSTEM
 * Aesthetic Direction: Luxury Javanese Editorial Minimalism (Sogan & Gold Leaf)
 * ============================================================================
 */

/**
 * 1. TOP FRAME: Lengkung Kelir Wayang, Atap Joglo & Sulur Lung-lungan
 * A single cohesive architectural arch for the top of the Hero / Cover / Sections.
 * Combines a delicate Joglo-Gunungan crown crest with sweeping Gebyok corner tendrils.
 */
export const WayangTopFrame: React.FC<{
  className?: string;
  variant?: 'hero' | 'card' | 'section';
}> = ({ className = '', variant = 'hero' }) => {
  const uid = React.useId();
  return (
    <div className={`w-full pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 480 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.28)]"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <linearGradient id={`topGold-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8c6224" stopOpacity="0.6" />
            <stop offset="22%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#fdf3dc" />
            <stop offset="78%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8c6224" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id={`topFill-${uid}`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(212, 175, 55, 0.25)" />
            <stop offset="100%" stopColor="rgba(212, 175, 55, 0.0)" />
          </linearGradient>
        </defs>

        {/* Top Outer & Inner Architectural Hairline Borders */}
        <path
          d="M 10 108 L 10 18 C 10 11 15 6 22 6 L 458 6 C 465 6 470 11 470 18 L 470 108"
          stroke={`url(#topGold-${uid})`}
          strokeWidth="1.2"
          strokeOpacity="0.85"
        />
        <path
          d="M 16 92 L 16 22 C 16 16.5 20.5 12 26 12 L 454 12 C 459.5 12 464 16.5 464 22 L 464 92"
          stroke={`url(#topGold-${uid})`}
          strokeWidth="0.65"
          strokeOpacity="0.5"
        />

        {/* Sweeping Javanese Pendopo / Kelir Arch Line */}
        <path
          d="M 16 68 C 46 28 95 16 172 16 L 195 16 C 212 16 224 28 240 28 C 256 28 268 16 285 16 L 308 16 C 385 16 434 28 464 68"
          stroke={`url(#topGold-${uid})`}
          strokeWidth="0.9"
          strokeOpacity="0.7"
        />

        {/* LEFT CORNER: Ukiran Lung-lungan (Botanical Wayang Filigree) & Kawung */}
        <g opacity="0.9">
          {/* Corner Kawung Petal */}
          <path
            d="M 16 12 C 28 12 34 18 34 30 C 22 30 16 24 16 12 Z"
            fill={`url(#topFill-${uid})`}
            stroke={`url(#topGold-${uid})`}
            strokeWidth="0.9"
          />
          <circle cx="24" cy="20" r="1.4" fill="#fdf3dc" />
          {/* Graceful Spiral Tendrils */}
          <path
            d="M 16 32 C 32 32 48 22 52 12"
            stroke={`url(#topGold-${uid})`}
            strokeWidth="0.9"
          />
          <path
            d="M 34 22 C 44 26 52 36 48 46 C 45 53 36 53 34 46 C 32 41 37 36 42 39"
            stroke={`url(#topGold-${uid})`}
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 16 48 C 26 48 34 55 34 65 C 34 72 27 76 22 72 C 19 69 21 63 26 64"
            stroke={`url(#topGold-${uid})`}
            strokeWidth="0.85"
            fill="none"
          />
          <path
            d="M 52 16 C 64 16 74 22 76 31 C 77 37 71 41 66 38 C 63 36 64 31 68 31"
            stroke={`url(#topGold-${uid})`}
            strokeWidth="0.85"
            fill="none"
          />
          <circle cx="48" cy="46" r="1.3" fill="#d4af37" />
          <circle cx="76" cy="31" r="1.2" fill="#d4af37" />
          <circle cx="28" cy="56" r="1.2" fill="#d4af37" />
        </g>

        {/* RIGHT CORNER: Mirrored Ukiran Lung-lungan & Kawung */}
        <g opacity="0.9" transform="translate(480, 0) scale(-1, 1)">
          <path
            d="M 16 12 C 28 12 34 18 34 30 C 22 30 16 24 16 12 Z"
            fill={`url(#topFill-${uid})`}
            stroke={`url(#topGold-${uid})`}
            strokeWidth="0.9"
          />
          <circle cx="24" cy="20" r="1.4" fill="#fdf3dc" />
          <path
            d="M 16 32 C 32 32 48 22 52 12"
            stroke={`url(#topGold-${uid})`}
            strokeWidth="0.9"
          />
          <path
            d="M 34 22 C 44 26 52 36 48 46 C 45 53 36 53 34 46 C 32 41 37 36 42 39"
            stroke={`url(#topGold-${uid})`}
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 16 48 C 26 48 34 55 34 65 C 34 72 27 76 22 72 C 19 69 21 63 26 64"
            stroke={`url(#topGold-${uid})`}
            strokeWidth="0.85"
            fill="none"
          />
          <path
            d="M 52 16 C 64 16 74 22 76 31 C 77 37 71 41 66 38 C 63 36 64 31 68 31"
            stroke={`url(#topGold-${uid})`}
            strokeWidth="0.85"
            fill="none"
          />
          <circle cx="48" cy="46" r="1.3" fill="#d4af37" />
          <circle cx="76" cy="31" r="1.2" fill="#d4af37" />
          <circle cx="28" cy="56" r="1.2" fill="#d4af37" />
        </g>

        {/* CENTER CROWN: Minimalist Joglo Pendopo Roof & Sacred Gunungan Medallion */}
        {variant === 'hero' && (
          <g transform="translate(240, 8)">
            {/* Subtle Halo */}
            <ellipse cx="0" cy="26" rx="58" ry="22" fill={`url(#topFill-${uid})`} />

            {/* Joglo Brunjung & Penanggap Crown Silhouette */}
            <path
              d="M -20 14 L 20 14 L 32 27 L -32 27 Z"
              fill={`url(#topFill-${uid})`}
              stroke={`url(#topGold-${uid})`}
              strokeWidth="1.15"
              strokeLinejoin="round"
            />
            <path
              d="M -32 27 L 32 27 L 52 36 L -52 36 Z"
              fill="rgba(20, 12, 8, 0.65)"
              stroke={`url(#topGold-${uid})`}
              strokeWidth="1.15"
              strokeLinejoin="round"
            />
            {/* Wuwungan Finials (Roof Crown Accents) */}
            <circle cx="0" cy="9" r="2" fill="#fdf3dc" />
            <path d="M -20 14 C -24 10 -28 11 -26 14" stroke={`url(#topGold-${uid})`} strokeWidth="1" />
            <path d="M 20 14 C 24 10 28 11 26 14" stroke={`url(#topGold-${uid})`} strokeWidth="1" />
            <path d="M -52 36 C -57 35 -59 31 -55 30" stroke={`url(#topGold-${uid})`} strokeWidth="1" />
            <path d="M 52 36 C 57 35 59 31 55 30" stroke={`url(#topGold-${uid})`} strokeWidth="1" />

            {/* Subtle Soko Guru Pillars & Center Gunungan */}
            <line x1="-28" y1="36" x2="-28" y2="49" stroke={`url(#topGold-${uid})`} strokeWidth="1.1" />
            <line x1="-14" y1="36" x2="-14" y2="49" stroke={`url(#topGold-${uid})`} strokeWidth="0.9" strokeOpacity="0.75" />
            <line x1="14" y1="36" x2="14" y2="49" stroke={`url(#topGold-${uid})`} strokeWidth="0.9" strokeOpacity="0.75" />
            <line x1="28" y1="36" x2="28" y2="49" stroke={`url(#topGold-${uid})`} strokeWidth="1.1" />
            <line x1="-38" y1="49" x2="38" y2="49" stroke={`url(#topGold-${uid})`} strokeWidth="1.1" strokeLinecap="round" />

            {/* Miniature Gunungan Heart at Center of Joglo */}
            <path
              d="M 0 20 C 3 26 7 31 7 38 C 7 43 4 46 0 47 C -4 46 -7 43 -7 38 C -7 31 -3 26 0 20 Z"
              fill={`url(#topFill-${uid})`}
              stroke="#fdf3dc"
              strokeWidth="0.95"
            />
            {/* Flanking Filigree Swirls */}
            <path
              d="M -38 49 C -52 49 -64 42 -72 34"
              stroke={`url(#topGold-${uid})`}
              strokeWidth="0.85"
              strokeOpacity="0.75"
            />
            <path
              d="M 38 49 C 52 49 64 42 72 34"
              stroke={`url(#topGold-${uid})`}
              strokeWidth="0.85"
              strokeOpacity="0.75"
            />
            <circle cx="-46" cy="49" r="1.2" fill="#d4af37" />
            <circle cx="46" cy="49" r="1.2" fill="#d4af37" />
          </g>
        )}
      </svg>
    </div>
  );
};

/**
 * 2. BOTTOM FRAME: Panggung Kelir Wayang Kulit (Rama & Shinta + Gunungan Kembar + Sabuk Batik Kawung)
 * A sculptural, symmetric stage frame for the bottom of the Hero / Cover / Footer.
 * Leaves the center open and clean for typography/buttons while framing the left & right corners
 * with intricate Wayang Kulit silhouettes and Gunungan Kayon.
 */
export const WayangBottomFrame: React.FC<{
  className?: string;
  showWayang?: boolean;
}> = ({ className = '', showWayang = true }) => {
  const uid = React.useId();
  return (
    <div className={`w-full pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 480 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block filter drop-shadow-[0_-2px_12px_rgba(212,175,55,0.28)]"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id={`botGold-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8c6224" stopOpacity="0.7" />
            <stop offset="20%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#fdf3dc" />
            <stop offset="80%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8c6224" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id={`botGoldVert-${uid}`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#fdf3dc" />
            <stop offset="45%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#6d4715" />
          </linearGradient>
          <linearGradient id={`botFill-${uid}`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(212, 175, 55, 0.28)" />
            <stop offset="70%" stopColor="rgba(122, 75, 30, 0.35)" />
            <stop offset="100%" stopColor="rgba(20, 12, 8, 0.85)" />
          </linearGradient>
        </defs>

        {/* Outer & Inner Architectural Bottom Frame Lines */}
        <path
          d="M 10 22 L 10 137 C 10 144 15 149 22 149 L 458 149 C 465 149 470 144 470 137 L 470 22"
          stroke={`url(#botGold-${uid})`}
          strokeWidth="1.2"
          strokeOpacity="0.85"
        />
        <path
          d="M 16 42 L 16 133 C 16 138.5 20.5 143 26 143 L 454 143 C 459.5 143 464 138.5 464 133 L 464 42"
          stroke={`url(#botGold-${uid})`}
          strokeWidth="0.65"
          strokeOpacity="0.5"
        />

        {/* Delicate Batik Kawung Filigree Band integrated along the bottom border (y=135..143) */}
        <g opacity="0.75">
          {[-160, -120, -80, -40, 0, 40, 80, 120, 160].map((offset) => (
            <g key={offset} transform={`translate(${240 + offset}, 143)`}>
              <path
                d="M -14 0 C -10 -5 -4 -5 0 0 C 4 -5 10 -5 14 0"
                stroke={`url(#botGold-${uid})`}
                strokeWidth="0.8"
                fill="rgba(212,175,55,0.12)"
              />
              <circle cx="-7" cy="-2" r="0.8" fill="#fdf3dc" />
              <circle cx="7" cy="-2" r="0.8" fill="#fdf3dc" />
            </g>
          ))}
        </g>

        {/* ============================================================
            LEFT STAGE WING: Gunungan Kayon + Wayang Kulit Ksatria (Rama)
           ============================================================ */}
        <g transform="translate(16, 143)">
          {/* Background Leaning Gunungan (Kayon) Silhouette */}
          <g transform="translate(26, -6) rotate(-14)">
            <path
              d="M 0 -92
                 C 4 -78 14 -66 20 -52
                 C 26 -38 30 -24 26 -8
                 L 0 0
                 L -26 -8
                 C -30 -24 -26 -38 -20 -52
                 C -14 -66 -4 -78 0 -92 Z"
              fill={`url(#botFill-${uid})`}
              stroke={`url(#botGoldVert-${uid})`}
              strokeWidth="1.15"
            />
            {/* Inner Gunungan Contour & Tree of Life (Kalpataru) */}
            <path
              d="M 0 -80 C 3 -68 11 -58 15 -46 C 19 -34 22 -22 19 -11 L 0 -5 L -19 -11 C -22 -22 -19 -34 -15 -46 C -11 -58 -3 -68 0 -80 Z"
              stroke={`url(#botGoldVert-${uid})`}
              strokeWidth="0.65"
              strokeOpacity="0.7"
            />
            <line x1="0" y1="-5" x2="0" y2="-74" stroke={`url(#botGoldVert-${uid})`} strokeWidth="1" />
            {/* Kalpataru Scroll Branches */}
            <path d="M 0 -56 C 7 -60 14 -56 12 -49 C 10 -44 4 -47 0 -44" stroke={`url(#botGoldVert-${uid})`} strokeWidth="0.75" />
            <path d="M 0 -56 C -7 -60 -14 -56 -12 -49 C -10 -44 -4 -47 0 -44" stroke={`url(#botGoldVert-${uid})`} strokeWidth="0.75" />
            <path d="M 0 -38 C 9 -42 17 -37 15 -28 C 13 -22 5 -26 0 -22" stroke={`url(#botGoldVert-${uid})`} strokeWidth="0.75" />
            <path d="M 0 -38 C -9 -42 -17 -37 -15 -28 C -13 -22 -5 -26 0 -22" stroke={`url(#botGoldVert-${uid})`} strokeWidth="0.75" />
            <circle cx="0" cy="-94" r="1.6" fill="#fdf3dc" />
          </g>

          {/* Foreground Wayang Kulit Ksatria (Rama / Kamajaya) */}
          {showWayang && (
            <g transform="translate(58, -2)">
              {/* Gelung Supit Urang (Curved Royal Wayang Crown) */}
              <path
                d="M -8 -74 C -22 -80 -26 -96 -15 -102 C -7 -106 2 -99 -2 -89 C -5 -83 -11 -85 -9 -91"
                fill="rgba(212,175,55,0.22)"
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              {/* Jamang Crown & Sumping Ear Ornament */}
              <path
                d="M -9 -76 C -5 -85 6 -85 10 -78 L 5 -70 L -9 -72 Z"
                fill={`url(#botFill-${uid})`}
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.15"
              />
              {/* Noble Bowed Wayang Profile (Luruh) */}
              <path
                d="M 9 -78 L 21 -72 L 15 -69 L 16 -65 L 8 -63 L 2 -66 Z"
                fill={`url(#botGoldVert-${uid})`}
              />
              {/* Praba Shoulder & Slender Wayang Torso */}
              <path
                d="M -13 -62 L 13 -63 L 18 -53 L -16 -53 Z"
                fill={`url(#botFill-${uid})`}
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.15"
              />
              <path
                d="M -11 -53 L 12 -53 L 8 -30 L -6 -30 Z"
                fill={`url(#botFill-${uid})`}
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.1"
              />
              {/* Articulated Wayang Arm & Cempurit Rod */}
              <path
                d="M 12 -54 L 24 -39 L 35 -49"
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="-39" r="1.4" fill="#fdf3dc" />
              <circle cx="35" cy="-49" r="1.6" fill="#fdf3dc" />
              <line x1="35" y1="-49" x2="38" y2="-2" stroke={`url(#botGoldVert-${uid})`} strokeWidth="0.7" strokeOpacity="0.65" />
              {/* Lower Kain Dodot Batik Skirt */}
              <path
                d="M -7 -30 L 9 -30 L 18 0 L -15 0 Z"
                fill={`url(#botFill-${uid})`}
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.15"
              />
              <line x1="-5" y1="-21" x2="11" y2="-12" stroke="#fdf3dc" strokeWidth="0.7" strokeOpacity="0.7" />
              <line x1="-8" y1="-12" x2="13" y2="-3" stroke="#fdf3dc" strokeWidth="0.7" strokeOpacity="0.7" />
            </g>
          )}

          {/* Botanical Lung-lungan Scroll Bridging Corner to Center */}
          <path
            d="M 0 0 C 32 0 58 -12 88 -12 C 104 -12 114 -4 126 -2"
            stroke={`url(#botGold-${uid})`}
            strokeWidth="1.1"
          />
          <path
            d="M 78 -11 C 88 -20 102 -18 104 -9 C 105 -3 98 0 94 -4"
            stroke={`url(#botGold-${uid})`}
            strokeWidth="0.85"
          />
          <circle cx="98" cy="-10" r="1.3" fill="#fdf3dc" />
        </g>

        {/* ============================================================
            RIGHT STAGE WING: Mirrored Gunungan + Wayang Kulit Putri (Shinta)
           ============================================================ */}
        <g transform="translate(464, 143) scale(-1, 1)">
          {/* Background Leaning Gunungan (Kayon) Silhouette */}
          <g transform="translate(26, -6) rotate(-14)">
            <path
              d="M 0 -92
                 C 4 -78 14 -66 20 -52
                 C 26 -38 30 -24 26 -8
                 L 0 0
                 L -26 -8
                 C -30 -24 -26 -38 -20 -52
                 C -14 -66 -4 -78 0 -92 Z"
              fill={`url(#botFill-${uid})`}
              stroke={`url(#botGoldVert-${uid})`}
              strokeWidth="1.15"
            />
            <path
              d="M 0 -80 C 3 -68 11 -58 15 -46 C 19 -34 22 -22 19 -11 L 0 -5 L -19 -11 C -22 -22 -19 -34 -15 -46 C -11 -58 -3 -68 0 -80 Z"
              stroke={`url(#botGoldVert-${uid})`}
              strokeWidth="0.65"
              strokeOpacity="0.7"
            />
            <line x1="0" y1="-5" x2="0" y2="-74" stroke={`url(#botGoldVert-${uid})`} strokeWidth="1" />
            <path d="M 0 -56 C 7 -60 14 -56 12 -49 C 10 -44 4 -47 0 -44" stroke={`url(#botGoldVert-${uid})`} strokeWidth="0.75" />
            <path d="M 0 -56 C -7 -60 -14 -56 -12 -49 C -10 -44 -4 -47 0 -44" stroke={`url(#botGoldVert-${uid})`} strokeWidth="0.75" />
            <path d="M 0 -38 C 9 -42 17 -37 15 -28 C 13 -22 5 -26 0 -22" stroke={`url(#botGoldVert-${uid})`} strokeWidth="0.75" />
            <path d="M 0 -38 C -9 -42 -17 -37 -15 -28 C -13 -22 -5 -26 0 -22" stroke={`url(#botGoldVert-${uid})`} strokeWidth="0.75" />
            <circle cx="0" cy="-94" r="1.6" fill="#fdf3dc" />
          </g>

          {/* Foreground Wayang Kulit Putri (Shinta / Kamaratih) */}
          {showWayang && (
            <g transform="translate(58, -2)">
              {/* Gelung Kondhe & Siger Putri */}
              <path
                d="M -10 -72 C -21 -75 -23 -88 -13 -93 C -6 -96 1 -90 -1 -82"
                fill="rgba(212,175,55,0.22)"
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.35"
              />
              {/* Jasmine Strand (Untaian Melati) */}
              <path
                d="M -10 -72 C -13 -60 -12 -48 -9 -38"
                stroke="#fdf3dc"
                strokeWidth="1.2"
                strokeDasharray="1.8 2.2"
              />
              {/* Crown Front */}
              <path
                d="M -7 -75 C -3 -83 6 -82 10 -76 L 5 -69 L -7 -71 Z"
                fill={`url(#botFill-${uid})`}
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.15"
              />
              {/* Slender Bowed Putri Profile */}
              <path
                d="M 9 -76 L 19 -70 L 14 -68 L 14 -64 L 7 -62 L 2 -65 Z"
                fill={`url(#botGoldVert-${uid})`}
              />
              {/* Graceful Shoulders & Waist */}
              <path
                d="M -10 -61 L 11 -61 L 15 -52 L -12 -52 Z"
                fill={`url(#botFill-${uid})`}
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.1"
              />
              <path
                d="M -9 -52 L 10 -52 L 6 -30 L -5 -30 Z"
                fill={`url(#botFill-${uid})`}
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.1"
              />
              {/* Articulated Putri Arm & Cempurit Rod */}
              <path
                d="M 10 -53 L 22 -38 L 32 -47"
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="22" cy="-38" r="1.3" fill="#fdf3dc" />
              <circle cx="32" cy="-47" r="1.5" fill="#fdf3dc" />
              <line x1="32" y1="-47" x2="35" y2="-2" stroke={`url(#botGoldVert-${uid})`} strokeWidth="0.7" strokeOpacity="0.65" />
              {/* Lower Jarik Batik Skirt */}
              <path
                d="M -5 -30 L 7 -30 L 15 0 L -13 0 Z"
                fill={`url(#botFill-${uid})`}
                stroke={`url(#botGoldVert-${uid})`}
                strokeWidth="1.15"
              />
              <circle cx="1" cy="-19" r="1.4" stroke="#fdf3dc" strokeWidth="0.65" />
              <circle cx="2" cy="-9" r="1.4" stroke="#fdf3dc" strokeWidth="0.65" />
            </g>
          )}

          {/* Botanical Lung-lungan Scroll Bridging Corner to Center */}
          <path
            d="M 0 0 C 32 0 58 -12 88 -12 C 104 -12 114 -4 126 -2"
            stroke={`url(#botGold-${uid})`}
            strokeWidth="1.1"
          />
          <path
            d="M 78 -11 C 88 -20 102 -18 104 -9 C 105 -3 98 0 94 -4"
            stroke={`url(#botGold-${uid})`}
            strokeWidth="0.85"
          />
          <circle cx="98" cy="-10" r="1.3" fill="#fdf3dc" />
        </g>

        {/* Center Subtle Medallion Node on Bottom Frame Line */}
        <g transform="translate(240, 143)">
          <path d="M -5 0 L 0 -5 L 5 0 L 0 5 Z" fill="#d4af37" stroke="#fdf3dc" strokeWidth="0.7" />
        </g>
      </svg>
    </div>
  );
};

/**
 * 3. SECTION EMBLEM: Minimalist Joglo & Wayang Kayon Crest
 * Used cleanly at the top of content sections (Schedule, Couple, Gallery, Gift, Wishes)
 * without cluttering the layout.
 */
export const JavaneseSectionCrest: React.FC<{
  variant?: 'joglo' | 'gunungan' | 'wayang';
  className?: string;
}> = ({ variant = 'joglo', className = '' }) => {
  const uid = React.useId();
  return (
    <div className={`inline-flex items-center justify-center select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 180 56"
        width="156"
        height="48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
      >
        <defs>
          <linearGradient id={`crestGold-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="30%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#fdf3dc" />
            <stop offset="70%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`crestFill-${uid}`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(212, 175, 55, 0.28)" />
            <stop offset="100%" stopColor="rgba(212, 175, 55, 0.03)" />
          </linearGradient>
        </defs>

        {/* Left & Right Sweeping Filigree Lines */}
        <line x1="6" y1="42" x2="62" y2="42" stroke={`url(#crestGold-${uid})`} strokeWidth="1" />
        <line x1="118" y1="42" x2="174" y2="42" stroke={`url(#crestGold-${uid})`} strokeWidth="1" />
        <path d="M 42 42 C 50 42 54 35 60 35" stroke="#d4af37" strokeWidth="0.8" strokeOpacity="0.7" />
        <path d="M 138 42 C 130 42 126 35 120 35" stroke="#d4af37" strokeWidth="0.8" strokeOpacity="0.7" />
        <circle cx="52" cy="42" r="1.3" fill="#d4af37" />
        <circle cx="128" cy="42" r="1.3" fill="#d4af37" />

        {variant === 'joglo' ? (
          /* Refined Joglo Pendopo Silhouette */
          <g transform="translate(90, 8)">
            <circle cx="0" cy="2" r="1.8" fill="#fdf3dc" />
            {/* Brunjung Roof */}
            <path
              d="M -14 6 L 14 6 L 23 17 L -23 17 Z"
              fill={`url(#crestFill-${uid})`}
              stroke="#d4af37"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Penanggap Wide Eaves */}
            <path
              d="M -23 17 L 23 17 L 37 24 L -37 24 Z"
              fill={`url(#crestFill-${uid})`}
              stroke="#fdf3dc"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            {/* Soko Guru Columns */}
            <line x1="-18" y1="24" x2="-18" y2="34" stroke="#d4af37" strokeWidth="1.1" />
            <line x1="-7" y1="24" x2="-7" y2="34" stroke="#d4af37" strokeWidth="0.9" strokeOpacity="0.8" />
            <line x1="7" y1="24" x2="7" y2="34" stroke="#d4af37" strokeWidth="0.9" strokeOpacity="0.8" />
            <line x1="18" y1="24" x2="18" y2="34" stroke="#d4af37" strokeWidth="1.1" />
            <line x1="-26" y1="34" x2="26" y2="34" stroke="#fdf3dc" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        ) : (
          /* Refined Twin Gunungan & Crown Medallion */
          <g transform="translate(90, 4)">
            <path
              d="M 0 2 C 4 10 11 17 11 26 C 11 32 6 36 0 38 C -6 36 -11 32 -11 26 C -11 17 -4 10 0 2 Z"
              fill={`url(#crestFill-${uid})`}
              stroke="#fdf3dc"
              strokeWidth="1.15"
            />
            <line x1="0" y1="8" x2="0" y2="36" stroke="#d4af37" strokeWidth="0.9" />
            <path d="M -16 34 C -20 26 -17 19 -12 16" stroke="#d4af37" strokeWidth="0.85" strokeOpacity="0.75" />
            <path d="M 16 34 C 20 26 17 19 12 16" stroke="#d4af37" strokeWidth="0.85" strokeOpacity="0.75" />
          </g>
        )}
      </svg>
    </div>
  );
};

/**
 * 4. Gunungan Wayang (Kayon / Pohon Hayat)
 */
export const Gunungan: React.FC<{ className?: string; size?: number; glow?: boolean }> = ({
  className = 'w-16 h-24 text-[#d4af37]',
  size = 100,
  glow = true,
}) => {
  const uid = React.useId();
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className} ${
        glow ? 'filter drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]' : ''
      }`}
      style={{
        width: size ? `${size}px` : undefined,
        height: size ? `${(size * 1.4).toFixed(0)}px` : undefined,
      }}
    >
      <defs>
        <linearGradient id={`gununganGold-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf3dc" />
          <stop offset="35%" stopColor="#d4af37" />
          <stop offset="70%" stopColor="#aa7c28" />
          <stop offset="100%" stopColor="#6d4715" />
        </linearGradient>
        <linearGradient id={`gununganFill-${uid}`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="rgba(212, 175, 55, 0.22)" />
          <stop offset="60%" stopColor="rgba(109, 71, 21, 0.3)" />
          <stop offset="100%" stopColor="rgba(35, 20, 10, 0.6)" />
        </linearGradient>
      </defs>

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
        fill={`url(#gununganFill-${uid})`}
        stroke={`url(#gununganGold-${uid})`}
        strokeWidth="1.5"
      />
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
        stroke={`url(#gununganGold-${uid})`}
        strokeWidth="0.8"
        strokeOpacity="0.7"
      />
      <path d="M50 125 L50 24" stroke={`url(#gununganGold-${uid})`} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="50" cy="5" r="2.2" fill={`url(#gununganGold-${uid})`} />

      {/* Lower Joglo / Paduraksa Gate inside Gunungan */}
      <path
        d="M36 106 L50 96 L64 106 Z"
        fill="rgba(212, 175, 55, 0.25)"
        stroke={`url(#gununganGold-${uid})`}
        strokeWidth="1"
      />
      <path
        d="M41 124 L41 106 L59 106 L59 124"
        stroke={`url(#gununganGold-${uid})`}
        strokeWidth="1.1"
        fill="rgba(30, 18, 10, 0.65)"
      />
      <path d="M37 124 L63 124" stroke={`url(#gununganGold-${uid})`} strokeWidth="1.1" />

      {/* Lung-lungan Branches */}
      <path d="M50 35 C56 31 66 32 64 42 C62 48 53 45 50 49" stroke={`url(#gununganGold-${uid})`} strokeWidth="0.9" />
      <path d="M50 35 C44 31 34 32 36 42 C38 48 47 45 50 49" stroke={`url(#gununganGold-${uid})`} strokeWidth="0.9" />
      <path d="M50 52 C60 48 74 50 72 63 C70 71 58 64 50 70" stroke={`url(#gununganGold-${uid})`} strokeWidth="0.9" />
      <path d="M50 52 C40 48 26 50 28 63 C30 71 42 64 50 70" stroke={`url(#gununganGold-${uid})`} strokeWidth="0.9" />
      <path d="M50 73 C62 68 79 72 76 87 C73 97 61 88 50 95" stroke={`url(#gununganGold-${uid})`} strokeWidth="0.9" />
      <path d="M50 73 C38 68 21 72 24 87 C27 97 39 88 50 95" stroke={`url(#gununganGold-${uid})`} strokeWidth="0.9" />
    </svg>
  );
};

/**
 * 5. Wayang Character Silhouette (Ksatria / Putri) for Subtle Card Watermarks
 */
export const WayangCharacter: React.FC<{
  variant: 'ksatria' | 'putri';
  facing?: 'left' | 'right';
  size?: number;
  className?: string;
}> = ({ variant, facing = 'right', size = 76, className = 'text-[#d4af37]' }) => {
  const uid = React.useId();
  const flipTransform = facing === 'left' ? 'scaleX(-1)' : undefined;

  return (
    <svg
      viewBox="0 0 110 150"
      width={size}
      height={Math.round(size * 1.36)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      style={{ transform: flipTransform }}
    >
      <defs>
        <linearGradient id={`wGold-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf3dc" />
          <stop offset="45%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#6d4715" />
        </linearGradient>
      </defs>
      {variant === 'ksatria' ? (
        <>
          <path
            d="M42 36 C24 30 16 14 28 7 C37 2 48 10 44 21 C41 27 34 25 36 19"
            stroke={`url(#wGold-${uid})`}
            strokeWidth="1.8"
            fill="rgba(212,175,55,0.15)"
          />
          <path
            d="M40 32 C45 22 57 22 62 30 L56 38 L40 36 Z"
            fill="rgba(212,175,55,0.2)"
            stroke={`url(#wGold-${uid})`}
            strokeWidth="1.3"
          />
          <path d="M61 30 L74 37 L67 40 L68 44 L59 46 L52 43 Z" fill={`url(#wGold-${uid})`} />
          <path d="M36 48 L66 47 L72 58 L32 58 Z" fill="rgba(212,175,55,0.18)" stroke={`url(#wGold-${uid})`} strokeWidth="1.3" />
          <path d="M37 58 L65 58 L59 86 L43 86 Z" fill="rgba(212,175,55,0.15)" stroke={`url(#wGold-${uid})`} strokeWidth="1.2" />
          <path d="M65 56 L80 74 L92 62" stroke={`url(#wGold-${uid})`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="92" y1="62" x2="96" y2="136" stroke={`url(#wGold-${uid})`} strokeWidth="0.8" strokeOpacity="0.6" />
          <path d="M41 86 L61 86 L74 132 C60 135 42 135 28 130 Z" fill="rgba(212,175,55,0.15)" stroke={`url(#wGold-${uid})`} strokeWidth="1.3" />
        </>
      ) : (
        <>
          <path d="M36 36 C22 33 18 18 30 13 C38 10 46 16 44 25" stroke={`url(#wGold-${uid})`} strokeWidth="1.6" fill="rgba(212,175,55,0.15)" />
          <path d="M36 36 C33 50 34 65 37 76" stroke="#fdf3dc" strokeWidth="1.3" strokeDasharray="2 2.5" />
          <path d="M42 33 C47 23 58 24 62 32 L56 39 L42 37 Z" fill="rgba(212,175,55,0.2)" stroke={`url(#wGold-${uid})`} strokeWidth="1.3" />
          <path d="M61 32 L72 38 L66 41 L66 45 L58 47 L52 44 Z" fill={`url(#wGold-${uid})`} />
          <path d="M39 48 L64 48 L68 58 L36 58 Z" fill="rgba(212,175,55,0.18)" stroke={`url(#wGold-${uid})`} strokeWidth="1.2" />
          <path d="M40 58 L63 58 L58 84 L45 84 Z" fill="rgba(212,175,55,0.15)" stroke={`url(#wGold-${uid})`} strokeWidth="1.2" />
          <path d="M63 57 L77 75 L88 64" stroke={`url(#wGold-${uid})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="88" y1="64" x2="92" y2="136" stroke={`url(#wGold-${uid})`} strokeWidth="0.8" strokeOpacity="0.6" />
          <path d="M44 84 L59 84 L68 132 C56 135 44 135 34 130 Z" fill="rgba(212,175,55,0.15)" stroke={`url(#wGold-${uid})`} strokeWidth="1.3" />
        </>
      )}
    </svg>
  );
};

/**
 * 6. Rumah Joglo Standalone Component (For Sidebar / Diorama compatibility)
 */
export const RumahJoglo: React.FC<{
  className?: string;
  width?: number;
  glow?: boolean;
}> = ({ className = '', width = 160 }) => {
  return <JavaneseSectionCrest variant="joglo" className={className} />;
};

/**
 * 7. JogloWayangDiorama (Clean Stage Crest for Cover / Footer / Sidebar)
 */
export const JogloWayangDiorama: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  showWayang?: boolean;
  className?: string;
}> = ({ className = '' }) => {
  return <JavaneseSectionCrest variant="joglo" className={className} />;
};

/**
 * 8. Refined Corner Filigree Ornament for Cards
 */
export const JavaneseCornerOrnament: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
  opacity?: number;
}> = ({ position = 'top-left', className = 'text-[#c59b6d]', size = 36, opacity = 0.85 }) => {
  const uid = React.useId();
  let transform = '';
  if (position === 'top-right') transform = 'scaleX(-1)';
  if (position === 'bottom-left') transform = 'scaleY(-1)';
  if (position === 'bottom-right') transform = 'scale(-1, -1)';

  return (
    <svg
      viewBox="0 0 56 56"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform, opacity }}
    >
      <defs>
        <linearGradient id={`cGold-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf3dc" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#7a4b1e" />
        </linearGradient>
      </defs>
      <path d="M4 38 L4 8 C4 5.8 5.8 4 8 4 L38 4" stroke={`url(#cGold-${uid})`} strokeWidth="1.2" />
      <path
        d="M8 8 C14 8 18 12 18 18 C12 18 8 14 8 8 Z"
        fill="rgba(212, 175, 55, 0.16)"
        stroke={`url(#cGold-${uid})`}
        strokeWidth="0.85"
      />
      <path
        d="M4 20 C12 20 20 24 22 32 C23 37 19 40 15 38"
        stroke={`url(#cGold-${uid})`}
        strokeWidth="0.85"
      />
      <path
        d="M20 4 C20 12 24 20 32 22 C37 23 40 19 38 15"
        stroke={`url(#cGold-${uid})`}
        strokeWidth="0.85"
      />
      <circle cx="7" cy="7" r="1.5" fill="#fdf3dc" />
    </svg>
  );
};

/**
 * 9. Subtle Hairline Gold & Batik Accent Strip for Cards (Replaces noisy repeating strip)
 */
export const BatikBorderStrip: React.FC<{
  className?: string;
  flip?: boolean;
}> = ({ className = '', flip = false }) => {
  return (
    <div
      className={`w-full h-1.5 select-none pointer-events-none flex items-center justify-center ${className}`}
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/55 to-transparent" />
    </div>
  );
};

/**
 * 10. Ambient Batik Kawung Background Texture
 */
export const BatikKawungBackground: React.FC<{ className?: string; opacity?: number }> = ({
  className = 'absolute inset-0 pointer-events-none',
  opacity = 0.045,
}) => {
  const patternId = React.useId();
  return (
    <div className={`${className} overflow-hidden`} style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`batikKawung-${patternId}`}
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="28" cy="28" r="1.5" fill="#d4af37" />
            <path
              d="M28 28 C23 18 23 8 28 4 C33 8 33 18 28 28 Z"
              stroke="#d4af37"
              strokeWidth="0.75"
              fill="none"
            />
            <path
              d="M28 28 C23 38 23 48 28 52 C33 48 33 38 28 28 Z"
              stroke="#d4af37"
              strokeWidth="0.75"
              fill="none"
            />
            <path
              d="M28 28 C18 23 8 23 4 28 C8 33 18 33 28 28 Z"
              stroke="#d4af37"
              strokeWidth="0.75"
              fill="none"
            />
            <path
              d="M28 28 C38 23 48 23 52 28 C48 33 38 33 28 28 Z"
              stroke="#d4af37"
              strokeWidth="0.75"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#batikKawung-${patternId})`} />
      </svg>
    </div>
  );
};

/**
 * 11. Minimalist Editorial Gold Divider with Center Kawung Diamond
 */
export const JavaneseDivider: React.FC<{ className?: string }> = ({ className = 'my-3' }) => {
  return (
    <div className={`flex items-center justify-center gap-2.5 select-none pointer-events-none ${className}`}>
      <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#c59b6d]/60 to-[#d4af37]" />
      <span className="w-1.5 h-1.5 rotate-45 border border-[#fdf3dc] bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
      <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent via-[#c59b6d]/60 to-[#d4af37]" />
    </div>
  );
};
