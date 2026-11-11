import React from 'react';
import { Heart } from 'lucide-react';
import {
  WayangTopFrame,
  WayangBottomFrame,
  JavaneseDivider,
  BatikKawungBackground,
} from './JavaneseMotifs';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#120c08] via-[#0a0604] to-[#050302] border-t border-[#c59b6d]/25 text-center overflow-hidden">
      {/* Subtle Batik Kawung Texture */}
      <BatikKawungBackground opacity={0.04} />

      {/* Top Wayang & Joglo Filigree Frame */}
      <WayangTopFrame variant="hero" className="w-full" />

      <div className="relative z-10 px-6 -mt-6 pb-2 flex flex-col items-center max-w-xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">
          Ifa <span className="font-script text-[#d4af37] text-4xl sm:text-5xl mx-1">&amp;</span> Fauzan
        </h3>

        <JavaneseDivider className="my-3" />

        <p className="font-serif italic text-sm sm:text-base text-[#e8dacb] max-w-md mb-4 leading-relaxed">
          &ldquo;Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu kepada kedua mempelai.&rdquo;
        </p>

        <p className="font-sans text-xs text-[#b89b80] max-w-md mb-6 leading-relaxed">
          Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami yang berbahagia beserta keluarga besar mengucapkan terima kasih yang sebesar-besarnya.
        </p>

        <div className="inline-block px-4 py-1.5 rounded-full bg-[#1d130b] border border-[#c59b6d]/35 text-[11px] font-sans tracking-[0.2em] uppercase text-[#d4af37] mb-6 font-medium">
          Terima Kasih · Wassalamu&apos;alaikum Wr. Wb.
        </div>

        <div className="relative z-30 text-xs font-sans text-[#a88b73] flex items-center justify-center gap-2 flex-wrap -mb-16">
          <span>Pernikahan Ifa &amp; Fauzan</span>
          <span>·</span>
          <span>12 Desember 2026</span>
          <span>·</span>
          <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
        </div>
      </div>

      {/* Bottom Wayang Kulit (Rama & Shinta) + Gunungan Stage Frame */}
      <WayangBottomFrame showWayang={true} className="w-full" />
    </footer>
  );
};
