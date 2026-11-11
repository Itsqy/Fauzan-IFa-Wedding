/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { ScheduleSection } from './components/ScheduleSection';
import { CoupleSection } from './components/CoupleSection';
import { LoveStoryGallery } from './components/LoveStoryGallery';
import { GiftSection } from './components/GiftSection';
import { WishesSection } from './components/WishesSection';
import { RSVPModal } from './components/RSVPModal';
import { OpeningEnvelopeModal } from './components/OpeningEnvelopeModal';
import { NeonButterflyCanvas, triggerButterflyBurst } from './components/NeonButterflyCanvas';
import { MusicPlayer } from './components/MusicPlayer';
import { Footer } from './components/Footer';
import { GuestWish } from './types/wedding';
import { extractGuestNameFromUrl } from './utils/guest';

const INITIAL_WISHES: GuestWish[] = [
  {
    id: 'wish-1',
    name: 'Bpk. Ir. H. Bambang Soedibyo & Keluarga',
    status: 'hadir',
    attendeesCount: 2,
    message:
      'Barakallahu lakuma wa baraka \'alaikuma wa jama\'a bainakuma fii khair. Selamat untuk ananda Ifa & Fauzan, semoga senantiasa dalam limpahan berkah, sakinah, mawaddah, warahmah.',
    timestamp: '2 jam yang lalu',
    isVIP: true,
  },
  {
    id: 'wish-2',
    name: 'Dinda Safitri, S.Farm. (Sahabat Ifa)',
    status: 'hadir',
    attendeesCount: 1,
    message:
      'MasyaAllah Ifa & Kak Fauzan! Terharu banget akhirnya berlabuh ke pelaminan. Lancar sampai hari H di Semarang yaa, bahagia selalu dunia akhirat!',
    timestamp: '5 jam yang lalu',
  },
  {
    id: 'wish-3',
    name: 'Dimas Prasetyo, S.T. (Rekan Kuliah Fauzan)',
    status: 'hadir',
    attendeesCount: 2,
    message:
      'Selamat menempuh babak baru Zan & Ifa! Dari zaman begadang tugas bareng sampai sekarang melangkah ke jenjang pernikahan. Sakinah mawaddah warahmah!',
    timestamp: '1 hari yang lalu',
  },
  {
    id: 'wish-4',
    name: 'Keluarga Besar dr. H. Farhan',
    status: 'hadir',
    attendeesCount: 3,
    message:
      'Selamat berbahagia untuk ananda Ifa & Fauzan serta kedua keluarga besar. Semoga Allah SWT menganugerahi keluarga yang harmonis dan penuh berkah.',
    timestamp: '2 hari yang lalu',
  },
];

export default function App() {
  const [guestName] = useState(() => extractGuestNameFromUrl());
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(
    () => typeof window !== 'undefined' && !window.location.search.includes('open=1')
  );
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load saved wishes from localStorage or fall back to INITIAL_WISHES
  const [wishes, setWishes] = useState<GuestWish[]>(() => {
    try {
      const saved =
        localStorage.getItem('ifa_fauzan_wedding_wishes') ||
        localStorage.getItem('fauzan_ifa_wedding_wishes');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_WISHES;
  });

  // Save wishes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ifa_fauzan_wedding_wishes', JSON.stringify(wishes));
    } catch {
      // Ignore
    }
  }, [wishes]);

  // Warm up & pre-decode the hero background image off-thread
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const heroSrc = '/assets/gallery/fauzan_ifa_1.jpg';
      const img = new Image();
      img.src = heroSrc;
      if (img.decode) {
        img.decode().catch(() => {});
      }
    }
  }, []);

  // Handle Hash Navigation (scroll to anchor) only after envelope is opened
  useEffect(() => {
    if (isEnvelopeOpen) return;
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, [isEnvelopeOpen]);

  // Handle Opening Envelope: resets viewport to first page (#hero) and starts audio
  const handleOpenEnvelope = () => {
    document.body.style.overflow = '';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    setIsEnvelopeOpen(false);

    if (typeof window !== 'undefined' && window.location.hash) {
      try {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch {
        // Fallback
      }
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        audioRef.current.play().then(() => {
          setIsPlayingMusic(true);
        }).catch(() => {
          // Autoplay policy fallback
        });
      } catch {
        // Fallback
      }
    }
  };

  const handleToggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch(() => {});
    }
  };

  // Add new guest wish
  const handleAddWish = (newWishData: Omit<GuestWish, 'id' | 'timestamp'>) => {
    const newEntry: GuestWish = {
      ...newWishData,
      id: `wish-${Date.now()}`,
      timestamp: 'Baru saja',
    };
    setWishes((prev) => [newEntry, ...prev]);
  };

  return (
    <div className="relative min-h-screen bg-[#0f0a07] text-[#fbf8f3] selection:bg-[#c59b6d] selection:text-[#120c08] font-sans antialiased overflow-x-hidden flex justify-center">
      {/* Background Audio Player: JKT48 - Rapsodi (Saxophone Cover by Bagus Eko) */}
      <audio
        ref={audioRef}
        src="/assets/aistudio/rapsodi_saxophone_cover.mp3"
        loop
        preload="auto"
      />

      {/* Ambient Desktop Backdrops (Warm chocolate & bronze glows) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#c59b6d]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-[#3a2110]/25 rounded-full blur-[160px]" />
      </div>

      {/* Elegant Desktop Left Sidebar (Only visible on wide xl/2xl screens where space permits) */}
      <aside className="hidden xl:flex fixed left-6 2xl:left-16 top-1/2 -translate-y-1/2 flex-col max-w-[260px] 2xl:max-w-xs z-20 select-none max-h-[85vh] overflow-y-auto">
        <div className="inline-flex items-center gap-2 text-[#d4a373] text-xs font-sans tracking-[0.3em] uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#c59b6d]" />
          <span>Undangan Pernikahan</span>
        </div>

        <h1 className="font-ornate text-3xl 2xl:text-4xl text-white font-normal leading-snug mb-2">
          Ifa <span className="font-script text-[#c59b6d] text-3xl 2xl:text-4xl mx-0.5">&amp;</span> Fauzan
        </h1>

        <div className="w-14 h-[1px] bg-[#c59b6d]/60 my-3.5" />

        <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#d6ab7b] mb-5 flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-[#c59b6d]" />
          <span>Sabtu, 12 Desember 2026</span>
        </p>

        <p className="font-serif italic text-xs 2xl:text-sm text-[#d6c5b3] leading-relaxed mb-6">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
          <span className="block not-italic font-sans text-[10px] text-[#b39a82] mt-2">
            — QS. Ar-Rum: 21
          </span>
        </p>

        {/* Quick Section Jump Navigation */}
        <nav className="flex flex-col gap-2 pt-2 border-t border-white/10 text-xs font-sans">
          <a href="#acara" className="text-[#d6c5b3] hover:text-[#e2c299] hover:translate-x-1 transition-all py-1">
            ✦ Jadwal Rangkaian Acara
          </a>
          <a href="#mempelai" className="text-[#d6c5b3] hover:text-[#e2c299] hover:translate-x-1 transition-all py-1">
            ✦ Kedua Mempelai
          </a>
          <a href="#kisah" className="text-[#d6c5b3] hover:text-[#e2c299] hover:translate-x-1 transition-all py-1">
            ✦ Galeri Foto
          </a>
          <a href="#hadiah" className="text-[#d6c5b3] hover:text-[#e2c299] hover:translate-x-1 transition-all py-1">
            ✦ Amplop Digital &amp; Hadiah
          </a>
          <a href="#ucapan" className="text-[#d6c5b3] hover:text-[#e2c299] hover:translate-x-1 transition-all py-1">
            ✦ Buku Tamu &amp; Ucapan
          </a>
        </nav>

        <div className="mt-6 pt-4 border-t border-white/10">
          <button
            onClick={() => setIsRSVPModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c59b6d]/20 hover:bg-[#c59b6d] hover:text-[#120c08] border border-[#c59b6d]/50 text-white text-xs font-sans font-medium transition-all shadow-[0_0_15px_rgba(197,155,109,0.35)] cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-[#c59b6d]" />
            <span>Konfirmasi Kehadiran (RSVP)</span>
          </button>
        </div>
      </aside>

      {/* Elegant Desktop Right Decorative Motif */}
      <aside className="hidden 2xl:flex fixed right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20 pointer-events-none select-none text-center">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#c59b6d]/40 to-[#c59b6d]" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#d4a373]/60 [writing-mode:vertical-lr]">
          The Wedding of Ifa &amp; Fauzan
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-[#c59b6d]/40 to-[#c59b6d]" />
      </aside>

      {/* Canvas for Delicate Small Brown Butterflies fluttering across screen */}
      <NeonButterflyCanvas />

      {/* Opening Screen (Halaman Awal Modal) */}
      <OpeningEnvelopeModal
        isOpen={isEnvelopeOpen}
        onOpen={handleOpenEnvelope}
        guestName={guestName}
      />

      {/* Mobile Screen Container: Elegantly framed for smartphone proportions on desktop */}
      <main className="relative w-full max-w-[440px] sm:max-w-[460px] md:max-w-[480px] min-h-screen bg-[#120c08] sm:shadow-[0_0_90px_rgba(0,0,0,0.95)] sm:border-x sm:border-[#c59b6d]/20 flex flex-col z-10 overflow-x-hidden">
        {/* Minimalist Hero Section */}
        <HeroSection />

        {/* Schedule Section with Date, Time, Venue, Maps, Countdown & YouTube Live Streaming */}
        <ScheduleSection />

        {/* Kedua Mempelai (Couple Profiles) */}
        <CoupleSection />

        {/* Galeri Foto Lightbox (Minimalist & Photo-Focused) */}
        <LoveStoryGallery />

        {/* Amplop Digital & Kado Pernikahan */}
        <GiftSection />

        {/* Buku Tamu & Doa Restu (RSVP + Wishes) */}
        <WishesSection
          wishes={wishes}
          onOpenRSVP={() => setIsRSVPModalOpen(true)}
          onHoverRSVP={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            triggerButterflyBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 16);
          }}
        />

        {/* Closing Footer */}
        <Footer />
      </main>

      {/* Floating Music Toggle */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        onTogglePlay={handleToggleMusic}
      />

      {/* Interactive RSVP Modal */}
      <RSVPModal
        isOpen={isRSVPModalOpen}
        onClose={() => setIsRSVPModalOpen(false)}
        onSubmitWish={handleAddWish}
        defaultGuestName={guestName}
        onTriggerButterflyBurst={() => {
          triggerButterflyBurst(window.innerWidth / 2, window.innerHeight / 2, 35);
        }}
      />
    </div>
  );
}