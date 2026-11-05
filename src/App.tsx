/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import { Navbar } from './components/Navbar';
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

const INITIAL_WISHES: GuestWish[] = [
  {
    id: 'wish-1',
    name: 'Bpk. Ir. H. Bambang Soedibyo & Keluarga',
    status: 'hadir',
    attendeesCount: 2,
    message:
      'Barakallahu lakuma wa baraka \'alaikuma wa jama\'a bainakuma fii khair. Selamat untuk ananda Fauzan & Ifa, semoga senantiasa dalam limpahan berkah, sakinah, mawaddah, warahmah.',
    timestamp: '2 jam yang lalu',
    isVIP: true,
  },
  {
    id: 'wish-2',
    name: 'Dinda Safitri, S.Farm. (Sahabat Ifa)',
    status: 'hadir',
    attendeesCount: 1,
    message:
      'MasyaAllah Ifa & Kak Fauzan! Terharu banget akhirnya berlabuh ke pelaminan. Lancar sampai hari H, semoga bahagia lahir dan batin ya Ifa sayang!',
    timestamp: '5 jam yang lalu',
  },
  {
    id: 'wish-3',
    name: 'Dimas Prasetyo, S.T. (Rekan Kuliah Fauzan)',
    status: 'hadir',
    attendeesCount: 2,
    message:
      'Selamat menempuh babak baru Zan! Dari zaman begadang tugas akhir bareng sampai sekarang jadi kepala keluarga. Sakinah mawaddah warahmah!',
    timestamp: '1 hari yang lalu',
  },
  {
    id: 'wish-4',
    name: 'Keluarga Besar dr. H. Farhan',
    status: 'hadir',
    attendeesCount: 3,
    message:
      'Selamat berbahagia untuk kedua mempelai dan keluarga besar. Semoga Allah SWT menganugerahi keturunan yang sholeh dan sholehah.',
    timestamp: '2 hari yang lalu',
  },
];

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(
    () => typeof window !== 'undefined' && !window.location.search.includes('open=1')
  );
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load saved wishes from localStorage or fall back to INITIAL_WISHES
  const [wishes, setWishes] = useState<GuestWish[]>(() => {
    try {
      const saved = localStorage.getItem('fauzan_ifa_wedding_wishes');
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
      localStorage.setItem('fauzan_ifa_wedding_wishes', JSON.stringify(wishes));
    } catch {
      // Ignore
    }
  }, [wishes]);

  // Handle Hash Navigation (scroll to anchor)
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
          el.scrollIntoView();
        }
      }
    };
    // Delay slightly to ensure children are mounted
    const timer = setTimeout(handleHash, 100);
    window.addEventListener('hashchange', handleHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  // Handle Opening Envelope: audio is pre-trimmed to start directly at Chorus ("Kasih, andai anganku bersuara...")
  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(false);
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
    <div className="relative min-h-screen bg-[#07040a] text-[#f7eef6] selection:bg-[#ff2d87] selection:text-white font-sans antialiased overflow-x-hidden flex justify-center">
      {/* Background Audio Player: JKT48 - Rapsodi */}
      <audio
        ref={audioRef}
        src="/assets/aistudio/JKT48_-_Rapsodi__mp3.pm__dea445be.mp3"
        loop
        preload="auto"
      />

      {/* Ambient Desktop Backdrops (glowing radial gradients on large screens) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#ff2d87]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-[#3a1548]/25 rounded-full blur-[160px]" />
      </div>

      {/* Elegant Desktop Left Sidebar (Only visible on lg/xl screens) */}
      <aside className="hidden lg:flex fixed left-8 xl:left-16 top-1/2 -translate-y-1/2 flex-col max-w-[280px] xl:max-w-xs z-20 select-none">
        <div className="inline-flex items-center gap-2 text-pink-300 text-xs font-sans tracking-[0.3em] uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#ff2d87]" />
          <span>Undangan Pernikahan</span>
        </div>

        <h1 className="font-ornate text-3xl xl:text-4xl text-white font-normal leading-snug mb-2">
          Fauzan <span className="font-script text-[#ff2d87] text-3xl xl:text-4xl mx-0.5 neon-text-pink">&amp;</span> Ifa
        </h1>

        <div className="w-14 h-[1px] bg-[#ff2d87]/60 my-3.5" />

        <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-pink-200/80 mb-5 flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-[#ff2d87]" />
          <span>Sabtu, 14 November 2026</span>
        </p>

        <p className="font-serif italic text-xs xl:text-sm text-pink-100/70 leading-relaxed mb-6">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
          <span className="block not-italic font-sans text-[10px] text-pink-300/60 mt-2">
            — QS. Ar-Rum: 21
          </span>
        </p>

        {/* Quick Section Jump Navigation */}
        <nav className="flex flex-col gap-2 pt-2 border-t border-white/10 text-xs font-sans">
          <a href="#acara" className="text-pink-200/70 hover:text-white hover:translate-x-1 transition-all py-1">
            ✦ Jadwal Rangkaian Acara
          </a>
          <a href="#mempelai" className="text-pink-200/70 hover:text-white hover:translate-x-1 transition-all py-1">
            ✦ Kedua Mempelai
          </a>
          <a href="#kisah" className="text-pink-200/70 hover:text-white hover:translate-x-1 transition-all py-1">
            ✦ Galeri Foto
          </a>
          <a href="#hadiah" className="text-pink-200/70 hover:text-white hover:translate-x-1 transition-all py-1">
            ✦ Amplop Digital &amp; Hadiah
          </a>
          <a href="#ucapan" className="text-pink-200/70 hover:text-white hover:translate-x-1 transition-all py-1">
            ✦ Buku Tamu &amp; Ucapan
          </a>
        </nav>

        <div className="mt-6 pt-4 border-t border-white/10">
          <button
            onClick={() => setIsRSVPModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff2d87]/20 hover:bg-[#ff2d87] border border-[#ff2d87]/50 text-white text-xs font-sans font-medium transition-all shadow-[0_0_15px_rgba(255,45,135,0.4)] cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-[#ff2d87]" />
            <span>Konfirmasi Kehadiran (RSVP)</span>
          </button>
        </div>
      </aside>

      {/* Elegant Desktop Right Decorative Motif */}
      <aside className="hidden xl:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20 pointer-events-none select-none text-center">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#ff2d87]/40 to-[#ff2d87]" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-pink-200/50 [writing-mode:vertical-lr]">
          The Wedding of Fauzan &amp; Ifa
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-[#ff2d87]/40 to-[#ff2d87]" />
      </aside>

      {/* High-Performance Canvas for Neon Pink Butterflies flying across the screen */}
      <NeonButterflyCanvas />

      {/* Opening Screen: Vibrating Envelope Animation with music trigger at 43s */}
      <OpeningEnvelopeModal
        isOpen={isEnvelopeOpen}
        onOpen={handleOpenEnvelope}
      />

      {/* Mobile Screen Container: Exactly framed for smartphone proportions (max-w-[440px]) on laptop/desktop */}
      <main className="relative w-full max-w-[440px] min-h-screen bg-[#0b080e] sm:shadow-[0_0_90px_rgba(0,0,0,0.95)] sm:border-x sm:border-[#ff2d87]/20 flex flex-col z-10">
        {/* Top Bar Navigation constrained to the mobile view */}
        <Navbar onOpenRSVP={() => setIsRSVPModalOpen(true)} />

        {/* Minimalist Hero Section with perfectly centered photo */}
        <HeroSection />

        {/* Schedule Section with Date, Time, Venue, Maps, and Countdown revealed on scroll down */}
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

      {/* Floating Music Toggle (JKT48 - Rapsodi) */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        onTogglePlay={handleToggleMusic}
      />

      {/* Interactive RSVP Modal */}
      <RSVPModal
        isOpen={isRSVPModalOpen}
        onClose={() => setIsRSVPModalOpen(false)}
        onSubmitWish={handleAddWish}
        onTriggerButterflyBurst={() => {
          triggerButterflyBurst(window.innerWidth / 2, window.innerHeight / 2, 40);
        }}
      />
    </div>
  );
}
