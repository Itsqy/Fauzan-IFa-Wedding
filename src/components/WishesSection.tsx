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
    <section id="ucapan" className="relative py-20 md:py-28 px-5 bg-[#140e09] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#c59b6d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#d4a373] mb-2">
            <MessageSquareHeart className="w-4 h-4 text-[#c59b6d]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#e2c299]">
              Buku Tamu Digital
            </span>
            <MessageSquareHeart className="w-4 h-4 text-[#c59b6d]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Untaian Doa &amp; Restu
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c59b6d] to-transparent mx-auto mt-4" />
          <p className="text-sm font-sans text-[#d6c5b3] max-w-lg mx-auto mt-4 leading-relaxed">
            Terima kasih atas doa, harapan baik, dan kehadiran yang menyemarakkan hari bahagia Ifa &amp; Fauzan.
          </p>
        </div>

        {/* Big RSVP CTA Box with Butterfly Hover Trigger */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1d130b]/90 backdrop-blur-md border border-[#c59b6d]/40 shadow-[0_0_35px_rgba(0,0,0,0.5)] text-center mb-10 flex flex-col items-center">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
            Konfirmasi Kehadiran Anda
          </h3>
          <p className="text-xs sm:text-sm font-sans text-[#d6c5b3] max-w-sm mb-5 leading-relaxed">
            Klik tombol RSVP di bawah untuk mengonfirmasi kehadiran serta mengirimkan doa terbaik Anda bagi kedua mempelai.
          </p>

          <button
            onClick={onOpenRSVP}
            onMouseEnter={onHoverRSVP}
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c59b6d] via-[#b37a44] to-[#8c5326] text-white font-sans font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(197,155,109,0.5)] hover:shadow-[0_0_35px_rgba(197,155,109,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-[#f5efe6]/30"
          >
            <Heart className="w-4 h-4 fill-white text-white group-hover:scale-125 transition-transform" />
            <span>Isi Buku Tamu &amp; RSVP</span>
          </button>

          <div className="mt-3 flex items-center gap-1.5 text-xs text-[#c59b6d] font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#c59b6d] animate-spin" style={{ animationDuration: '4s' }} />
            <span>Arahkan kursor untuk melihat kawanan kupu-kupu cokelat!</span>
          </div>
        </div>

        {/* Stats Strip & Filter Tabs */}
        <div className="flex flex-col gap-3.5 items-center mb-6">
          <div className="flex items-center gap-2.5 text-xs font-sans text-[#d6c5b3]">
            <span>Total Doa: <strong className="text-white font-serif text-sm sm:text-base">{wishes.length}</strong></span>
            <span aria-hidden="true" className="text-[#c59b6d]">·</span>
            <span>Konfirmasi Hadir: <strong className="text-[#e2c299] font-serif text-sm sm:text-base">{totalAttending}</strong></span>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#25180f] rounded-xl border border-white/10 w-full sm:w-auto justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#c59b6d] to-[#8c5326] text-white shadow-sm'
                  : 'text-[#d6c5b3] hover:text-white'
              }`}
            >
              Semua ({wishes.length})
            </button>
            <button
              onClick={() => setFilter('hadir')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors cursor-pointer ${
                filter === 'hadir'
                  ? 'bg-gradient-to-r from-[#c59b6d] to-[#8c5326] text-white shadow-sm'
                  : 'text-[#d6c5b3] hover:text-white'
              }`}
            >
              Hadir ({totalAttending})
            </button>
            <button
              onClick={() => setFilter('ragu')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors cursor-pointer ${
                filter === 'ragu'
                  ? 'bg-gradient-to-r from-[#c59b6d] to-[#8c5326] text-white shadow-sm'
                  : 'text-[#d6c5b3] hover:text-white'
              }`}
            >
              Ragu ({wishes.filter((w) => w.status === 'ragu').length})
            </button>
          </div>
        </div>

        {/* Wishes List */}
        <div className="max-h-[520px] overflow-y-auto space-y-4 pr-1">
          {filteredWishes.map((wish) => {
            const isAttending = wish.status === 'hadir';
            const isDoubtful = wish.status === 'ragu';

            return (
              <div
                key={wish.id}
                className="p-5 rounded-2xl bg-[#1d130b]/80 border border-white/10 hover:border-[#c59b6d]/40 transition-all shadow-md"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c59b6d]/30 to-[#1d130b] border border-[#c59b6d]/40 flex items-center justify-center text-xs font-serif font-bold text-white">
                      {wish.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-bold text-white leading-tight">
                        {wish.name}
                      </h4>
                      <p className="text-[11px] font-sans text-[#b39a82] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#c59b6d]" />
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
                        <span>Ragu</span>
                      </span>
                    )}
                    {!isAttending && !isDoubtful && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-500/15 border border-stone-500/30 text-[11px] font-sans font-medium text-stone-300">
                        <span>Belum Pasti</span>
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-sans text-[#f5efe6] leading-relaxed pl-10">
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