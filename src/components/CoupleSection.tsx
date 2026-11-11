import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const CoupleSection: React.FC = () => {
  return (
    <section id="mempelai" className="relative py-20 md:py-28 px-5 bg-[#140e09] overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c59b6d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#d4a373] mb-2">
            <Sparkles className="w-4 h-4 text-[#c59b6d]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#e2c299]">
              Kedua Mempelai
            </span>
            <Sparkles className="w-4 h-4 text-[#c59b6d]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Mempelai Wanita &amp; Pria
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c59b6d] to-transparent mx-auto mt-4" />
          <p className="text-sm font-sans text-[#d6c5b3] max-w-xl mx-auto mt-4 leading-relaxed">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho-Nya, kami bermaksud melangsungkan pernikahan putra-putri kami:
          </p>
        </div>

        {/* Stacked Couple Cards with Centered Heart / Gunungan Divider */}
        <div className="grid grid-cols-1 gap-5 items-center relative">
          {/* Mempelai Wanita (Bride) */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-[#1d130b]/90 backdrop-blur-md border border-[#c59b6d]/30 shadow-xl text-center group hover:border-[#c59b6d]/60 transition-all duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#c59b6d]/25 to-transparent mx-auto mb-4 sm:mb-5 flex items-center justify-center border border-[#c59b6d]/40 shadow-[0_0_20px_rgba(197,155,109,0.3)]">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#e2c299]">I</span>
            </div>

            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#d4a373] block mb-1.5 font-medium">
              Calon Mempelai Wanita
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
              Ismah Ifaf Agasinta, S.A.P.
            </h3>
            <p className="text-xs font-sans text-[#c59b6d] mb-2.5">
              (Ifa)
            </p>
            <div className="w-16 h-[1px] bg-[#c59b6d]/40 mx-auto mb-3.5" />
            <p className="text-xs sm:text-sm font-sans text-[#d6c5b3] leading-relaxed mb-1">
              Putri ke-1 dari:
            </p>
            <p className="text-sm sm:text-base font-serif text-white font-medium">
              Bapak Dr. Agung Wahyudi, M.Pd &amp; Ibu Solastri, S.Pd
            </p>
          </div>

          {/* Central Decorative Heart & Javanese Flourish Divider */}
          <div className="flex items-center justify-center my-1 z-20">
            <div className="w-14 h-[1px] bg-gradient-to-r from-transparent to-[#c59b6d]/60" />
            <div className="mx-3 w-10 h-10 rounded-full bg-[#25180f] border border-[#c59b6d]/60 flex items-center justify-center shadow-[0_0_20px_rgba(197,155,109,0.5)]">
              <Heart className="w-4 h-4 fill-[#c59b6d] text-[#c59b6d] animate-pulse" />
            </div>
            <div className="w-14 h-[1px] bg-gradient-to-l from-transparent to-[#c59b6d]/60" />
          </div>

          {/* Mempelai Pria (Groom) */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-[#1d130b]/90 backdrop-blur-md border border-[#c59b6d]/30 shadow-xl text-center group hover:border-[#c59b6d]/60 transition-all duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#c59b6d]/25 to-transparent mx-auto mb-4 sm:mb-5 flex items-center justify-center border border-[#c59b6d]/40 shadow-[0_0_20px_rgba(197,155,109,0.3)]">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#e2c299]">F</span>
            </div>

            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#d4a373] block mb-1.5 font-medium">
              Calon Mempelai Pria
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
              Fauzan Mahfuzh, S.A.P.
            </h3>
            <p className="text-xs font-sans text-[#c59b6d] mb-2.5">
              (Fauzan)
            </p>
            <div className="w-16 h-[1px] bg-[#c59b6d]/40 mx-auto mb-3.5" />
            <p className="text-xs sm:text-sm font-sans text-[#d6c5b3] leading-relaxed mb-1">
              Putra ke-3 dari:
            </p>
            <p className="text-sm sm:text-base font-serif text-white font-medium">
              Bapak H. Engkus Kuswara &amp; Ibu Hj. Unah
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};