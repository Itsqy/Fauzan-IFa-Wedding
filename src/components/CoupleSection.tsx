import React from 'react';
import { Heart } from 'lucide-react';
import { Gunungan, JavaneseCornerOrnament, JavaneseDivider, BatikKawungBackground } from './JavaneseMotifs';

export const CoupleSection: React.FC = () => {
  return (
    <section id="mempelai" className="relative py-20 md:py-28 px-5 bg-[#140e09] overflow-hidden">
      {/* Background Ambient Sogan Glow & Batik Kawung Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <BatikKawungBackground opacity={0.045} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14">
          <div className="mb-2">
            <Gunungan size={36} className="text-[#d4af37] mx-auto opacity-85" />
          </div>

          <div className="text-[11px] uppercase tracking-[0.3em] font-sans text-[#d4a373] font-medium mb-1">
            DHAUP KALIH PENGANTEN
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Penganten Putri &amp; Kakung
          </h2>

          <JavaneseDivider className="my-3.5" />

          {/* Javanese Traditional Cultural Invocation & Quran Quote */}
          <p className="font-serif italic text-sm sm:text-base text-[#e8d5be] max-w-xl mx-auto leading-relaxed mb-2">
            &ldquo;Bismillahirrahmannirrahiim. Kanthi hangajab berkahing Gusti Allah SWT, mugi tansah pinaringan tentrem, atut runtut, hayu hayuning bawana.&rdquo;
          </p>
          <p className="text-xs font-sans text-[#b39a82] max-w-lg mx-auto leading-relaxed">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho-Nya, kami bermaksud melangsungkan pernikahan putra-putri kami:
          </p>
        </div>

        {/* Stacked Couple Cards with Javanese Gebyok Carving Corners */}
        <div className="grid grid-cols-1 gap-5 items-center relative">
          {/* Mempelai Wanita (Penganten Putri) */}
          <div className="relative p-7 sm:p-8 rounded-3xl bg-[#1d130b]/92 backdrop-blur-md border border-[#c59b6d]/35 shadow-xl text-center group hover:border-[#d4af37]/60 transition-all duration-300 overflow-hidden">
            {/* Javanese Gebyok Carving Corners */}
            <div className="absolute top-2 left-2">
              <JavaneseCornerOrnament position="top-left" size={36} />
            </div>
            <div className="absolute top-2 right-2">
              <JavaneseCornerOrnament position="top-right" size={36} />
            </div>
            <div className="absolute bottom-2 left-2">
              <JavaneseCornerOrnament position="bottom-left" size={36} />
            </div>
            <div className="absolute bottom-2 right-2">
              <JavaneseCornerOrnament position="bottom-right" size={36} />
            </div>

            {/* Medallion Monogram with Javanese Jasmine (Melati) Touch */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#d4af37]/25 via-[#875128]/20 to-transparent mx-auto mb-4 flex items-center justify-center border-2 border-[#d4af37]/50 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#f5ecd8]">I</span>
            </div>

            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#d4a373] block mb-1 font-medium">
              Penganten Putri · Mempelai Wanita
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-0.5">
              Ismah Ifaf Agasinta, S.A.P.
            </h3>
            <p className="text-xs font-sans text-[#d4af37] mb-3">
              (Ifa)
            </p>

            <div className="w-16 h-[1px] bg-[#c59b6d]/40 mx-auto mb-3.5" />

            <p className="text-xs sm:text-sm font-sans text-[#d6c5b3] leading-relaxed mb-1">
              Putri kapisan (ke-1) panjenenganipun:
            </p>
            <p className="text-sm sm:text-base font-serif text-white font-medium">
              Bapak Dr. Agung Wahyudi, M.Pd &amp; Ibu Solastri, S.Pd
            </p>
            <p className="text-[11px] font-sans text-[#c59b6d]/80 mt-1.5">
              Semarang, Jawa Tengah
            </p>
          </div>

          {/* Central Javanese Divider with Heart & Gunungan Motif */}
          <div className="flex items-center justify-center my-1 z-20">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="mx-3.5 w-11 h-11 rounded-full bg-[#25180f] border-2 border-[#d4af37]/70 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)]">
              <Heart className="w-4 h-4 fill-[#d4af37] text-[#d4af37] animate-pulse" />
            </div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          {/* Mempelai Pria (Penganten Kakung) */}
          <div className="relative p-7 sm:p-8 rounded-3xl bg-[#1d130b]/92 backdrop-blur-md border border-[#c59b6d]/35 shadow-xl text-center group hover:border-[#d4af37]/60 transition-all duration-300 overflow-hidden">
            {/* Javanese Gebyok Carving Corners */}
            <div className="absolute top-2 left-2">
              <JavaneseCornerOrnament position="top-left" size={36} />
            </div>
            <div className="absolute top-2 right-2">
              <JavaneseCornerOrnament position="top-right" size={36} />
            </div>
            <div className="absolute bottom-2 left-2">
              <JavaneseCornerOrnament position="bottom-left" size={36} />
            </div>
            <div className="absolute bottom-2 right-2">
              <JavaneseCornerOrnament position="bottom-right" size={36} />
            </div>

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#d4af37]/25 via-[#875128]/20 to-transparent mx-auto mb-4 flex items-center justify-center border-2 border-[#d4af37]/50 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#f5ecd8]">F</span>
            </div>

            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#d4a373] block mb-1 font-medium">
              Penganten Kakung · Mempelai Pria
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-0.5">
              Fauzan Mahfuzh, S.A.P.
            </h3>
            <p className="text-xs font-sans text-[#d4af37] mb-3">
              (Fauzan)
            </p>

            <div className="w-16 h-[1px] bg-[#c59b6d]/40 mx-auto mb-3.5" />

            <p className="text-xs sm:text-sm font-sans text-[#d6c5b3] leading-relaxed mb-1">
              Putra kaping tiga (ke-3) panjenenganipun:
            </p>
            <p className="text-sm sm:text-base font-serif text-white font-medium">
              Bapak H. Engkus Kuswara &amp; Ibu Hj. Unah
            </p>
            <p className="text-[11px] font-sans text-[#c59b6d]/80 mt-1.5">
              Tangerang Selatan, Banten
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
