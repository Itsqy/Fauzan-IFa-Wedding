import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  WayangTopFrame,
  WayangBottomFrame,
  JavaneseDivider,
} from './JavaneseMotifs';

const HERO_BLUR_PLACEHOLDER =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAHgAAAAD/wAARCAAeABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwACAgICAgIDAgIDBQMDAwUGBQUFBQYIBgYGBgYICggICAgICAoKCgoKCgoKDAwMDAwMDg4ODg4PDw8PDw8PDw8P/9sAQwECAgIEBAQHBAQHEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/90ABAAC/9oADAMBAAIRAxEAPwD6nsNPXgAV09vpisoytc7qusL4b8O6hrzQG5NjC0giXrIw4VRjPU4HArz3Sfizeal8VvDvhL+0bbT7a/0xrqexlQef9o8zYVZ2wUG0ZiXAZiSTkCvLq1owaT3Z7FGhOd3HoeyvosbNnbTf7Dj/ALteV/F/9pX4efBjxPb+FfFRc3lxaJeDYeBHI7oM8HnMZryr/hvH4L/9Nvz/APsa10MrM//Q+kPFnjbQvANpYa/4huDb2ltOZztjaVnMKFlUInJO8rjrg4+tflxY/Ey10z4hz+I4RhNZnm1q1ecgXFxHes5ikaFXk2ukqkCMuCFGB1rx7xR8cfG3xQ8JxXviu6ecvqEnlxBz5MSiKSTaiY4HAXknoD1rkfh/cN/beo3Ekjy/Z3S3hD4IR0O8YznCDHAHQnpXgY2KfM5H0eX4l05px+Z0P7b3jefx38fL69kR7R7DTtNtXhfhopPs6zSoRk4KySsDz2r5FxL/AM9f1rp/HniHVPF3jHVvFOvztc6jq05uZ5CAN0kgBPAAAHoAOBXJfJ717EIqyPKnOzZ//9k=';

export const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden select-none"
    >
      {/* Background Prewedding Photo */}
      <div className="absolute inset-0 z-0 bg-[#120c08] overflow-hidden">
        {/* Instant Blur Placeholder */}
        <img
          src={HERO_BLUR_PLACEHOLDER}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover object-[center_28%] filter blur-xl scale-110 pointer-events-none transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Prewedding Portrait */}
        <img
          ref={imgRef}
          src="/assets/gallery/fauzan_ifa_1.jpg"
          alt="Pernikahan Ifa & Fauzan"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover object-[center_28%] filter brightness-[0.96] contrast-[1.03] transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Soft, warm Sogan espresso scrims for crisp frame & typography contrast */}
        <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-[#0e0906]/95 via-[#100a06]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0e0906] via-[#100a06]/75 to-transparent pointer-events-none" />
      </div>

      {/* Continuous Vertical Hairline Frame Connecting Top & Bottom Wayang Frames */}
      <div className="absolute inset-x-[2%] inset-y-12 border-x border-[#d4af37]/30 pointer-events-none z-20" />

      {/* TOP FRAME & EDITORIAL HEADER */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Top Wayang & Joglo Filigree Arch */}
        <WayangTopFrame variant="hero" className="w-full" />

        {/* Editorial Title Block tucked cleanly beneath the Joglo-Gunungan Arch */}
        <div className="w-full text-center px-6 -mt-10 sm:-mt-11 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-[#d4af37]/40 text-[#f5ecd8] tracking-[0.28em] uppercase text-[9px] sm:text-[10px] font-sans wedding-text-shadow mb-1.5">
            <span>UNDANGAN PERNIKAHAN</span>
          </div>

          <p className="font-script text-2xl sm:text-3xl text-[#e2c299] tracking-wide wedding-text-shadow mb-0.5">
            The Wedding of
          </p>

          <h1 className="font-ornate text-4xl sm:text-5xl font-normal text-white tracking-wide leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
            Ifa <span className="font-script text-[#d4af37] text-4xl sm:text-5xl mx-0.5">&amp;</span> Fauzan
          </h1>

          <JavaneseDivider className="my-2" />
        </div>
      </div>

      {/* Middle breathing space (Couple portrait completely unobstructed) */}
      <div className="relative z-10 w-full flex-1 pointer-events-none" />

      {/* BOTTOM WAYANG KULIT STAGE FRAME & DATE / SCROLL INDICATOR */}
      <div className="relative z-20 w-full flex flex-col items-center justify-end">
        {/* Center Date & Scroll Cue nestled in the open stage between the Wayang Kulit figures */}
        <div className="relative z-30 flex flex-col items-center text-center px-6 -mb-24 sm:-mb-28">
          <div className="px-4 py-1.5 rounded-full bg-[#140d08]/85 backdrop-blur-md border border-[#d4af37]/45 shadow-[0_4px_24px_rgba(0,0,0,0.85)] mb-2.5">
            <p className="text-[10px] sm:text-[11px] font-sans tracking-[0.22em] uppercase text-[#f5ecd8] font-medium wedding-text-shadow">
              Sabtu, 12 Desember 2026
            </p>
            <p className="text-[9px] sm:text-[10px] font-serif text-[#d4af37] tracking-wider">
              Semarang, Jawa Tengah
            </p>
          </div>

          <a
            href="#acara"
            className="group inline-flex flex-col items-center gap-1 text-[#d6c5b3] hover:text-[#f5ecd8] transition-colors pointer-events-auto"
            aria-label="Lihat rangkaian acara pernikahan"
          >
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.28em] font-sans wedding-text-shadow">
              Gulir ke Bawah
            </span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 backdrop-blur-sm border border-[#d4af37]/60 flex items-center justify-center text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform animate-bounce">
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Bottom Wayang Kulit (Rama & Shinta) + Gunungan Stage Frame */}
        <WayangBottomFrame showWayang={true} className="w-full" />
      </div>
    </section>
  );
};
