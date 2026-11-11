import React from 'react';
import { Heart } from 'lucide-react';
import { Gunungan, JavaneseCornerOrnament, AksaraJawaBadge, JavaneseDivider } from './JavaneseMotifs';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-20 px-6 bg-gradient-to-b from-[#120c08] via-[#0a0604] to-[#050302] border-t border-[#c59b6d]/30 text-center overflow-hidden">
      {/* Corner Ornaments */}
      <JavaneseCornerOrnament position="top-left" size={60} opacity={0.25} />
      <JavaneseCornerOrnament position="top-right" size={60} opacity={0.25} />

      <div className="max-w-xl mx-auto relative z-10 flex flex-col items-center">
        {/* Tancep Kayon - Sacred Closing Gunungan Symbol */}
        <div className="relative mb-5 flex flex-col items-center">
          <div className="absolute -inset-4 bg-[#c59b6d]/10 rounded-full blur-xl pointer-events-none" />
          <Gunungan className="w-16 h-24 text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.45)]" />
          <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-[#c59b6d]/80 mt-1">
            Tancep Kayon · Pungkasan
          </span>
        </div>

        <AksaraJawaBadge aksara="ꦩꦠꦸꦂꦤꦸꦮꦸꦤ꧀" latin="Matur Nuwun" />

        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-4 mb-2">
          Ifa <span className="font-script text-[#d4af37] text-4xl sm:text-5xl mx-1">&amp;</span> Fauzan
        </h3>

        <JavaneseDivider className="w-48 my-4" />

        <p className="font-serif italic text-sm sm:text-base text-[#e8dacb] max-w-md mb-4 leading-relaxed">
          &ldquo;Matur nuwun sanget awit saking sih kawigatosan, karawuhan, saha donga pamuji panjenengan sedaya dhumateng kalih temanten.&rdquo;
        </p>

        <p className="font-sans text-xs text-[#b89b80] max-w-md mb-6 leading-relaxed">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu.
        </p>

        <div className="inline-block px-4 py-1.5 rounded-full bg-[#1d130b] border border-[#c59b6d]/30 text-[11px] font-sans tracking-[0.2em] uppercase text-[#d4af37] mb-8 font-medium">
          Matur Nuwun · Jazakumullahu Khairan Katsiran
        </div>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c59b6d]/40 to-transparent mb-6" />

        <div className="text-xs font-sans text-[#8f7560] flex items-center justify-center gap-2 flex-wrap">
          <span>Pawiwahan Dhaup Suci Ifa &amp; Fauzan</span>
          <span>·</span>
          <span>Sabtu Pon, 12 Desember 2026</span>
          <span>·</span>
          <span>Semarang</span>
          <span>·</span>
          <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
        </div>
      </div>
    </footer>
  );
};