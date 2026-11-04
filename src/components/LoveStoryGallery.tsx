import React, { useState } from 'react';
import { Heart, Sparkles, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  cropClass?: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: '1',
    url: '/assets/aistudio/fauzan_ifa998_4aafa8ec.JPG',
    title: 'Payung Kasih & Kesucian',
    subtitle: 'Fauzan & Ifa dalam busana adat berbalut payung renda putih klasik',
    cropClass: 'object-cover object-center',
  },
  {
    id: '2',
    url: '/assets/aistudio/fauzan_ifa998_4aafa8ec.JPG',
    title: 'Mata Air Doa & Ketulusan',
    subtitle: 'Sorot hangat mempelai wanita, pesona melati suci dan mahkota anggun',
    cropClass: 'object-cover object-[25%_42%] scale-150',
  },
  {
    id: '3',
    url: '/assets/aistudio/fauzan_ifa998_4aafa8ec.JPG',
    title: 'Pelindung Teguh & Tanggung Jawab',
    subtitle: 'Ketegasan dan kehangatan tatapan Fauzan menyambut masa depan',
    cropClass: 'object-cover object-[75%_42%] scale-150',
  },
  {
    id: '4',
    url: '/assets/aistudio/fauzan_ifa998_4aafa8ec.JPG',
    title: 'Filosofi Payung Renda',
    subtitle: 'Simbol perlindungan, kesucian, dan keteduhan rumah tangga sakinah',
    cropClass: 'object-cover object-[50%_75%] scale-135',
  },
];

const TIMELINE_EVENTS = [
  {
    year: '2021',
    title: 'Awal Pertemuan di Kampus',
    description:
      'Takdir mempertemukan kami dalam sebuah program riset dan kolaborasi ilmiah. Dari sapaan hangat dan diskusi sederhana, benih rasa saling mengagumi mulai bersemi.',
  },
  {
    year: '2023',
    title: 'Merajut Komitmen & Doa',
    description:
      'Di tengah kesibukan karier dan ikhtiar, kami belajar saling memahami, saling menguatkan, dan memantapkan niat tulus untuk melangkah ke jenjang yang lebih bermakna.',
  },
  {
    year: '2025',
    title: 'Momen Khidmat Lamaran',
    description:
      'Dengan didampingi kedua orang tua dan keluarga besar tercinta, Fauzan secara resmi mengutarakan niat suci melamar Ifa, diiringi doa dan restu penuh haru.',
  },
  {
    year: '2026',
    title: 'Mengikat Janji Suci Pernikahan',
    description:
      'Hari yang dinanti tiba. Kami bersujud syukur dan mengikrarkan ijab kabul untuk membangun keluarga sakinah, mawaddah, warahmah hingga akhir hayat.',
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

  return (
    <section id="kisah" className="relative py-20 md:py-28 px-5 bg-[#0e0915] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#ff2d87]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-pink-300 mb-2">
            <Sparkles className="w-4 h-4 text-[#ff2d87]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-pink-200">
              Kisah &amp; Kenangan
            </span>
            <Sparkles className="w-4 h-4 text-[#ff2d87]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Perjalanan Cinta Kami
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#ff2d87] to-transparent mx-auto mt-4" />
          <p className="text-sm font-sans text-pink-200/70 max-w-xl mx-auto mt-4 leading-relaxed">
            Setiap kisah cinta memiliki ritme dan keindahannya sendiri. Inilah jejak langkah yang membawa kami bersatu dalam ikatan suci pernikahan.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="max-w-3xl mx-auto mb-20 relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-[#ff2d87] to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_EVENTS.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1e102b] border-2 border-[#ff2d87] shadow-[0_0_15px_rgba(255,45,135,0.7)] flex items-center justify-center z-10 neon-glow-pink-sm">
                    <Heart className="w-3.5 h-3.5 fill-[#ff2d87] text-[#ff2d87]" />
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div className="p-6 rounded-2xl bg-[#170f23]/80 border border-[#ff2d87]/25 shadow-lg hover:border-[#ff2d87]/50 transition-all">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#ff2d87]/20 text-[#ff70a6] text-xs font-sans font-semibold mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-serif font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-sans text-pink-100/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Galeri Momen Bahagia
            </h3>
            <p className="text-xs sm:text-sm font-sans text-pink-200/60">
              Klik foto untuk membuka tampilan layar penuh (Lightbox)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY_PHOTOS.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-[#ff2d87]/20 shadow-lg hover:border-[#ff2d87] transition-all duration-300 hover:scale-[1.02]"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${photo.cropClass || 'object-cover'}`}
                />
                {/* Overlay Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0914] via-[#0d0914]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Hover Icon Indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1b0f26]/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-[#ff2d87]" />
                </div>

                {/* Caption at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                  <h4 className="text-base font-serif font-bold text-white leading-tight mb-1">
                    {photo.title}
                  </h4>
                  <p className="text-xs font-sans text-pink-200/80 line-clamp-2">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Tutup Galeri"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Foto Selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Photo Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center text-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#ff2d87]/40 shadow-[0_0_50px_rgba(255,45,135,0.4)] max-h-[70vh]">
              <img
                src={GALLERY_PHOTOS[selectedPhotoIndex].url}
                alt={GALLERY_PHOTOS[selectedPhotoIndex].title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 px-4">
              <h4 className="text-xl font-serif font-bold text-white mb-1">
                {GALLERY_PHOTOS[selectedPhotoIndex].title}
              </h4>
              <p className="text-sm font-sans text-pink-200/80 max-w-lg">
                {GALLERY_PHOTOS[selectedPhotoIndex].subtitle}
              </p>
              <span className="text-xs font-sans text-pink-300/50 mt-1 block">
                {selectedPhotoIndex + 1} / {GALLERY_PHOTOS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
