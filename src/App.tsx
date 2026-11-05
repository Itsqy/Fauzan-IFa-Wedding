/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScheduleSection } from './components/ScheduleSection';
import { CoupleSection } from './components/CoupleSection';
import { LoveStoryGallery } from './components/LoveStoryGallery';
import { GiftSection } from './components/GiftSection';
import { WishesSection } from './components/WishesSection';
import { RSVPModal } from './components/RSVPModal';
import { OpeningEnvelopeModal } from './components/OpeningEnvelopeModal';
import { NeonButterflyCanvas } from './components/NeonButterflyCanvas';
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
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(true);
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
    <div className="relative min-h-screen bg-[#0b080e] text-[#f7eef6] selection:bg-[#ff2d87] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background Audio Player: JKT48 - Rapsodi */}
      <audio
        ref={audioRef}
        src="/assets/aistudio/JKT48_-_Rapsodi__mp3.pm__dea445be.mp3"
        loop
        preload="auto"
      />

      {/* High-Performance Canvas for Neon Pink Butterflies flying from bottom-right to top-left on scroll down */}
      <NeonButterflyCanvas />

      {/* Opening Screen: Vibrating Envelope Animation with music trigger at 43s */}
      <OpeningEnvelopeModal
        isOpen={isEnvelopeOpen}
        onOpen={handleOpenEnvelope}
      />

      {/* Transparent & Sleek Top Bar Navigation */}
      <Navbar onOpenRSVP={() => setIsRSVPModalOpen(true)} />

      {/* Minimalist Hero Section with Elevated Photo Background showing both faces clearly */}
      <HeroSection />

      {/* Schedule Section with Date, Time, Venue, Maps, and Countdown revealed on scroll down */}
      <ScheduleSection />

      {/* Kedua Mempelai (Couple Profiles) */}
      <CoupleSection />

      {/* Kisah Perjalanan Cinta & Galeri Foto Lightbox */}
      <LoveStoryGallery />

      {/* Amplop Digital & Kado Pernikahan */}
      <GiftSection />

      {/* Buku Tamu & Doa Restu (RSVP + Wishes) */}
      <WishesSection
        wishes={wishes}
        onOpenRSVP={() => setIsRSVPModalOpen(true)}
      />

      {/* Closing Footer */}
      <Footer />

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
        onTriggerButterflyBurst={() => {}}
      />
    </div>
  );
}
