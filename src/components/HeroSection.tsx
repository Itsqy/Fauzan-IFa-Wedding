import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

// Ultra-compact blur placeholder of Ifa & Fauzan
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
      className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden px-6 pt-10 sm:pt-12 pb-8 select-none"
    >
      {/* Background Photo */}
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
          alt="The Wedding of Ifa & Fauzan"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover object-[center_28%] filter brightness-[0.98] contrast-[1.03] transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Soft, warm espresso-gold scrims */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#100a06]/92 via-[#100a06]/55 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#100a06] via-[#100a06]/65 to-transparent pointer-events-none" />
      </div>

      {/* Top / Upper Area */}
      <div className="relative z-10 w-full text-center pt-2 sm:pt-4 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-[#c59b6d]/30 text-[#e8d5be] tracking-[0.3em] uppercase text-[10px] font-sans wedding-text-shadow mb-3">
          <Sparkles className="w-3 h-3 text-[#c59b6d]" />
          <span>Walimatul 'Ursy</span>
          <Sparkles className="w-3 h-3 text-[#c59b6d]" />
        </div>

        <p className="font-script text-2xl sm:text-3xl text-[#e2c299] tracking-wide wedding-text-shadow mb-1">
          The Wedding of
        </p>

        <h1 className="font-ornate text-4xl sm:text-5xl font-normal text-white tracking-wide leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]">
          Ifa <span className="font-script text-[#c59b6d] text-4xl sm:text-5xl mx-0.5">&amp;</span> Fauzan
        </h1>

        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c59b6d] to-transparent mx-auto mt-2.5 opacity-80" />
      </div>

      {/* Middle breathing space */}
      <div className="relative z-10 w-full flex-1 pointer-events-none" />

      {/* Bottom Area: Wedding date & animated scroll indicator */}
      <div className="relative z-10 w-full text-center flex flex-col items-center pb-2">
        <p className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#f5efe6] wedding-text-shadow mb-4">
          Sabtu, 12 Desember 2026
        </p>

        {/* Scroll Down Cue */}
        <a
          href="#acara"
          className="group inline-flex flex-col items-center gap-1.5 text-[#d6c5b3] hover:text-white transition-colors"
          aria-label="Gulir ke jadwal acara"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans wedding-text-shadow">
            Gulir ke Bawah
          </span>
          <div className="w-7 h-7 rounded-full bg-black/45 backdrop-blur-sm border border-[#c59b6d]/60 flex items-center justify-center text-[#c59b6d] shadow-[0_0_12px_rgba(197,155,109,0.4)] group-hover:scale-110 transition-transform animate-bounce">
            <ChevronDown className="w-4 h-4" />
          </div>
        </a>
      </div>
    </section>
  );
};