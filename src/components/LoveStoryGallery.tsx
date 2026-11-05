import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  url: string;
  alt: string;
  aspectClass: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    url: '/assets/gallery/fauzan_ifa_1.jpg',
    alt: 'Fauzan & Ifa - Potret Senyum Hangat',
    aspectClass: 'col-span-1 aspect-[3/4]',
  },
  {
    id: 'photo-4',
    url: '/assets/gallery/fauzan_ifa_4.jpg',
    alt: 'Fauzan & Ifa - Sorot Cahaya Studio',
    aspectClass: 'col-span-1 aspect-[3/4]',
  },
  {
    id: 'photo-2',
    url: '/assets/gallery/fauzan_ifa_2.jpg',
    alt: 'Fauzan & Ifa - Dekorasi Bunga & Kursi Klasik',
    aspectClass: 'col-span-2 aspect-[16/11]',
  },
  {
    id: 'photo-5',
    url: '/assets/gallery/fauzan_ifa_5.jpg',
    alt: 'Fauzan & Ifa - Busana Adat Klasik',
    aspectClass: 'col-span-1 aspect-[3/4]',
  },
  {
    id: 'photo-6',
    url: '/assets/gallery/fauzan_ifa_6.jpg',
    alt: 'Fauzan & Ifa - Set Studio Karpet Klasik',
    aspectClass: 'col-span-1 aspect-[3/4]',
  },
  {
    id: 'photo-3',
    url: '/assets/gallery/fauzan_ifa_3.jpg',
    alt: 'Fauzan & Ifa - Pose Anggun Duduk Lesehan',
    aspectClass: 'col-span-2 aspect-[16/11]',
  },
];

export const LoveStoryGallery: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_PHOTOS.length);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedPhotoIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <section id="kisah" className="relative py-14 px-4 sm:px-5 bg-[#0e0915] overflow-hidden">
      {/* Ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ff2d87]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Minimalist Section Header */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1028] border border-[#ff2d87]/30 text-pink-300 text-[10px] uppercase tracking-[0.25em] font-sans mb-2">
            <Camera className="w-3 h-3 text-[#ff2d87]" />
            <span>Momen Bahagia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Galeri Foto
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#ff2d87] to-transparent mx-auto mt-2" />
        </div>

        {/* Minimalist Photo Grid (6 Photos: 4 Portrait & 2 Landscape in harmonic rhythm) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#ff2d87]/20 shadow-md hover:border-[#ff2d87]/70 transition-all duration-300 active:scale-[0.98] ${photo.aspectClass}`}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-4 h-4 text-[#ff2d87]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 select-none"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer z-50 active:scale-95"
            aria-label="Tutup Galeri"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#ff2d87]/80 text-white flex items-center justify-center transition-all cursor-pointer z-50 active:scale-90"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#ff2d87]/80 text-white flex items-center justify-center transition-all cursor-pointer z-50 active:scale-90"
            aria-label="Foto Selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Fullscreen Photo Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl max-h-[85vh] flex flex-col items-center justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#ff2d87]/40 shadow-[0_0_50px_rgba(255,45,135,0.35)]">
              <img
                src={GALLERY_PHOTOS[selectedPhotoIndex].url}
                alt={GALLERY_PHOTOS[selectedPhotoIndex].alt}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl"
              />
            </div>

            {/* Minimalist Photo Indicator Dots */}
            <div className="mt-3.5 flex items-center gap-1.5">
              {GALLERY_PHOTOS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === selectedPhotoIndex
                      ? 'w-6 bg-[#ff2d87] shadow-[0_0_8px_#ff2d87]'
                      : 'w-1.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Lihat foto ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[11px] font-sans text-pink-200/60 mt-1">
              {selectedPhotoIndex + 1} dari {GALLERY_PHOTOS.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
