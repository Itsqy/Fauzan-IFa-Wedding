import React, { useState } from 'react';
import { Heart, MessageSquareHeart, Sparkles, Check, Clock } from 'lucide-react';
import { GuestWish } from '../types/wedding';

interface WishesSectionProps {
  wishes: GuestWish[];
  onOpenRSVP: () => void;
  onHoverRSVP?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const WishesSection: React.FC<WishesSectionProps> = ({
  wishes,
  onOpenRSVP,
  onHoverRSVP,
}) => {
  const [filter, setFilter] = useState<'all' | 'hadir' | 'ragu'>('all');

  const filteredWishes = wishes.filter((wish) => {
    if (filter === 'all') return true;
    return wish.status === filter;
  });

  const totalAttending = wishes.filter((w) => w.status === 'hadir').length;

  return (
    <section id="ucapan" className="relative py-20 md:py-28 px-5 bg-[#0e0915] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#ff2d87]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-pink-300 mb-2">
            <MessageSquareHeart className="w-4 h-4 text-[#ff2d87]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-pink-200">
              Buku Tamu Digital
            </span>
            <MessageSquareHeart className="w-4 h-4 text-[#ff2d87]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Untaian Doa &amp; Restu
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#ff2d87] to-transparent mx-auto mt-4" />
          <p className="text-sm font-sans text-pink-200/70 max-w-lg mx-auto mt-4 leading-relaxed">
            Terima kasih atas doa, harapan baik, dan kehadiran yang menyemarakkan hari bahagia Fauzan &amp; Ifa.
          </p>
        </div>

        {/* Big RSVP CTA Box with Butterfly Hover Trigger */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#170e24]/90 backdrop-blur-md border border-[#ff2d87]/40 shadow-[0_0_35px_rgba(255,45,135,0.25)] text-center mb-10 flex flex-col items-center">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
            Belum Mengisi Kehadiran?
          </h3>
          <p className="text-xs sm:text-sm font-sans text-pink-200/80 max-w-sm mb-5 leading-relaxed">
            Klik tombol RSVP di bawah untuk mengonfirmasi kehadiran serta mengirimkan doa terbaik Anda.
          </p>

          <button
            onClick={onOpenRSVP}
            onMouseEnter={onHoverRSVP}
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff2d87] via-[#ff1493] to-[#e60067] text-white font-sans font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(255,45,135,0.7)] hover:shadow-[0_0_40px_rgba(255,45,135,1)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/30"
          >
            <Heart className="w-4 h-4 fill-white text-white group-hover:scale-125 transition-transform" />
            <span>Isi Buku Tamu &amp; RSVP</span>
          </button>

          <div className="mt-3 flex items-center gap-1.5 text-xs text-pink-300/80 font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#ff2d87] animate-spin" style={{ animationDuration: '4s' }} />
            <span>Arahkan kursor untuk melihat kawanan kupu-kupu!</span>
          </div>
        </div>

        {/* Stats Strip & Filter Tabs (Neatly Centered) */}
        <div className="flex flex-col gap-3.5 items-center mb-6">
          <div className="flex items-center gap-2.5 text-xs font-sans text-pink-200/80">
            <span>Total Doa: <strong className="text-white font-serif text-sm sm:text-base">{wishes.length}</strong></span>
            <span aria-hidden="true" className="text-pink-400">·</span>
            <span>Konfirmasi Hadir: <strong className="text-[#ff70a6] font-serif text-sm sm:text-base">{totalAttending}</strong></span>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#1a1127] rounded-xl border border-white/10 w-full sm:w-auto justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#ff2d87] to-[#e60067] text-white shadow-sm'
                  : 'text-pink-300/70 hover:text-white'
              }`}
            >
              Semua ({wishes.length})
            </button>
            <button
              onClick={() => setFilter('hadir')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors cursor-pointer ${
                filter === 'hadir'
                  ? 'bg-gradient-to-r from-[#ff2d87] to-[#e60067] text-white shadow-sm'
                  : 'text-pink-300/70 hover:text-white'
              }`}
            >
              Hadir ({totalAttending})
            </button>
            <button
              onClick={() => setFilter('ragu')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors cursor-pointer ${
                filter === 'ragu'
                  ? 'bg-gradient-to-r from-[#ff2d87] to-[#e60067] text-white shadow-sm'
                  : 'text-pink-300/70 hover:text-white'
              }`}
            >
              Ragu ({wishes.filter((w) => w.status === 'ragu').length})
            </button>
          </div>
        </div>

        {/* Wishes List (Scrollable box with glowing cards) */}
        <div className="max-h-[520px] overflow-y-auto space-y-4 pr-1">
          {filteredWishes.map((wish) => {
            const isAttending = wish.status === 'hadir';
            const isDoubtful = wish.status === 'ragu';

            return (
              <div
                key={wish.id}
                className="p-5 rounded-2xl bg-[#170e24]/80 border border-white/10 hover:border-[#ff2d87]/40 transition-all shadow-md"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff2d87]/30 to-[#1e102d] border border-[#ff2d87]/40 flex items-center justify-center text-xs font-serif font-bold text-white">
                      {wish.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-bold text-white leading-tight">
                        {wish.name}
                      </h4>
                      <p className="text-[11px] font-sans text-pink-300/60 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-pink-400/60" />
                        <span>{wish.timestamp}</span>
                      </p>
                    </div>
                  </div>

                  {/* Attendance Badge */}
                  <div>
                    {isAttending && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-sans font-medium text-emerald-300">
                        <Check className="w-3 h-3" />
                        <span>Hadir</span>
                      </span>
                    )}
                    {isDoubtful && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[11px] font-sans font-medium text-amber-300">
                        <span>Masih Ragu</span>
                      </span>
                    )}
                    {wish.status === 'tidak_hadir' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-500/15 border border-slate-500/30 text-[11px] font-sans font-medium text-slate-300">
                        <span>Berhalangan</span>
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-sans text-pink-100/90 leading-relaxed pl-10 break-words">
                  {wish.message}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
