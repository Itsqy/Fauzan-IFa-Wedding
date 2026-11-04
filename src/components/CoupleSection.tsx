import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const CoupleSection: React.FC = () => {
  return (
    <section id="mempelai" className="relative py-20 md:py-28 px-5 bg-[#0e0a14] overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff2d87]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-pink-300 mb-2">
            <Sparkles className="w-4 h-4 text-[#ff2d87]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-pink-200">
              Kedua Mempelai
            </span>
            <Sparkles className="w-4 h-4 text-[#ff2d87]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Mempelai Pria &amp; Wanita
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#ff2d87] to-transparent mx-auto mt-4" />
          <p className="text-sm font-sans text-pink-200/70 max-w-xl mx-auto mt-4 leading-relaxed">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho-Nya, kami bermaksud melangsungkan pernikahan putra-putri kami:
          </p>
        </div>

        {/* 2-Column Couple Cards with Centered Heart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center relative">
          {/* Mempelai Pria (Groom) */}
          <div className="relative p-8 rounded-3xl bg-[#160f21]/80 backdrop-blur-md border border-[#ff2d87]/25 shadow-xl text-center group hover:border-[#ff2d87]/50 transition-all duration-300">
            {/* Corner Ornamental Flourish */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#ff2d87]/20 to-transparent mx-auto mb-6 flex items-center justify-center border border-[#ff2d87]/40 shadow-[0_0_20px_rgba(255,45,135,0.3)]">
              <span className="font-serif text-3xl font-bold text-white">F</span>
            </div>

            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#ff70a6] block mb-2">
              Mempelai Pria
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Muhammad Fauzan, S.T.
            </h3>
            <div className="w-16 h-[1px] bg-[#ff2d87]/40 mx-auto mb-4" />
            <p className="text-sm font-sans text-pink-100/80 leading-relaxed mb-1">
              Putra Pertama dari:
            </p>
            <p className="text-base font-serif text-white font-medium">
              Bpk. H. Rahmat Hidayat &amp; Ibu Hj. Siti Aminah
            </p>
            <p className="text-xs font-sans text-pink-300/60 mt-3">
              Kebayoran Baru, Jakarta Selatan
            </p>
          </div>

          {/* Central Decorative Floating Heart Ring (Hidden on mobile) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#1b1029] border-2 border-[#ff2d87] items-center justify-center z-20 shadow-[0_0_25px_rgba(255,45,135,0.8)] neon-glow-pink-sm">
            <Heart className="w-6 h-6 fill-[#ff2d87] text-[#ff2d87] animate-pulse" />
          </div>

          {/* Mempelai Wanita (Bride) */}
          <div className="relative p-8 rounded-3xl bg-[#160f21]/80 backdrop-blur-md border border-[#ff2d87]/25 shadow-xl text-center group hover:border-[#ff2d87]/50 transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#ff2d87]/20 to-transparent mx-auto mb-6 flex items-center justify-center border border-[#ff2d87]/40 shadow-[0_0_20px_rgba(255,45,135,0.3)]">
              <span className="font-serif text-3xl font-bold text-white">I</span>
            </div>

            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#ff70a6] block mb-2">
              Mempelai Wanita
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Nurul Ifatunnisa, S.Farm.
            </h3>
            <div className="w-16 h-[1px] bg-[#ff2d87]/40 mx-auto mb-4" />
            <p className="text-sm font-sans text-pink-100/80 leading-relaxed mb-1">
              Putri Kedua dari:
            </p>
            <p className="text-base font-serif text-white font-medium">
              Bpk. H. Ahmad Zulkarnain &amp; Ibu Hj. Maryam Hasan
            </p>
            <p className="text-xs font-sans text-pink-300/60 mt-3">
              Rawamangun, Jakarta Timur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
