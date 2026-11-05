import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, Check, Sparkles } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [calendarSaved, setCalendarSaved] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-11-14T08:00:00+07:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Wedding of Fauzan and Ifa//ID',
      'BEGIN:VEVENT',
      'SUMMARY:Pernikahan Fauzan & Ifa (Akad & Resepsi)',
      'DESCRIPTION:Undangan Pernikahan Fauzan & Ifa. Bertempat di Grand Sasana Kriya Ballroom, TMII, Jakarta.',
      'LOCATION:Grand Sasana Kriya Ballroom, TMII, Jakarta Timur',
      'DTSTART:20261114T010000Z',
      'DTEND:20261114T070000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Pernikahan_Fauzan_dan_Ifa.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCalendarSaved(true);
    setTimeout(() => setCalendarSaved(false), 3000);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Fauzan+%26+Ifa&dates=20261114T010000Z/20261114T070000Z&details=Undangan+Pernikahan+Fauzan+%26+Ifa.+Bertempat+di+Sasana+Kriya+Ballroom,+Jakarta.&location=Sasana+Kriya+Ballroom,+TMII,+Jakarta`;

  return (
    <section id="acara" className="relative py-16 md:py-24 px-5 bg-[#0b080e] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#ff2d87]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-pink-300 mb-2">
            <Sparkles className="w-4 h-4 text-[#ff2d87]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-pink-200">
              Waktu &amp; Tempat
            </span>
            <Sparkles className="w-4 h-4 text-[#ff2d87]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Jadwal Rangkaian Acara
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#ff2d87] to-transparent mx-auto mt-4" />
        </div>

        {/* Live Countdown Clock */}
        <div className="mb-10 max-w-lg mx-auto">
          <p className="text-xs font-sans tracking-[0.25em] uppercase text-pink-300/80 mb-3 text-center">
            Menghitung Hari Menuju Akad &amp; Resepsi
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <div className="px-2 sm:px-3 py-2.5 sm:py-3 rounded-2xl bg-[#160f22]/90 border border-[#ff2d87]/30 text-center shadow-lg">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums neon-text-pink">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-pink-300/80">
                Hari
              </span>
            </div>
            <div className="px-2 sm:px-3 py-2.5 sm:py-3 rounded-2xl bg-[#160f22]/90 border border-[#ff2d87]/30 text-center shadow-lg">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums neon-text-pink">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-pink-300/80">
                Jam
              </span>
            </div>
            <div className="px-2 sm:px-3 py-2.5 sm:py-3 rounded-2xl bg-[#160f22]/90 border border-[#ff2d87]/30 text-center shadow-lg">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums neon-text-pink">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-pink-300/80">
                Menit
              </span>
            </div>
            <div className="px-2 sm:px-3 py-2.5 sm:py-3 rounded-2xl bg-[#160f22]/90 border border-[#ff2d87]/30 text-center shadow-lg">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums neon-text-pink">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-pink-300/80">
                Detik
              </span>
            </div>
          </div>
        </div>

        {/* 2 Event Cards (Stacked for Clean Phone / Invitation View) */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Akad Nikah Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#160f22]/90 backdrop-blur-md border border-[#ff2d87]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#ff2d87]/15 border border-[#ff2d87]/40 text-[11px] font-sans font-medium text-pink-200 uppercase tracking-widest">
                  Akad Nikah
                </span>
                <span className="text-xs text-pink-300/70 font-sans">
                  Keluarga &amp; Kerabat
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-5">
                Upacara Ijab Kabul
              </h3>

              <div className="space-y-3.5 mb-6 text-sm font-sans text-pink-100/90">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Sabtu, 14 November 2026</p>
                    <p className="text-xs text-pink-300/70">Sesi Pagi</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">08.00 - 10.00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Sasana Kriya - Carani Hall</p>
                    <p className="text-xs text-pink-200/80">Taman Mini Indonesia Indah (TMII), Jakarta Timur</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-pink-300/70 font-sans">
              Dress Code: Busana Muslim / Formal Pastel
            </div>
          </div>

          {/* Resepsi Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#160f22]/90 backdrop-blur-md border border-[#ff2d87]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#ff2d87]/15 border border-[#ff2d87]/40 text-[11px] font-sans font-medium text-pink-200 uppercase tracking-widest">
                  Resepsi Pernikahan
                </span>
                <span className="text-xs text-pink-300/70 font-sans">
                  Sesi Tamu Undangan
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-5">
                Walimatul 'Ursy &amp; Jamuan
              </h3>

              <div className="space-y-3.5 mb-6 text-sm font-sans text-pink-100/90">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Sabtu, 14 November 2026</p>
                    <p className="text-xs text-pink-300/70">Sesi Siang</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">11.00 - 14.00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Grand Sasana Kriya - Mandira Hall</p>
                    <p className="text-xs text-pink-200/80">Taman Mini Indonesia Indah (TMII), Jakarta Timur</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-pink-300/70 font-sans">
              Dress Code: Batik / Gaun Formal Elegan
            </div>
          </div>
        </div>

        {/* Action Strip: Maps & Calendar (Never overflows container) */}
        <div className="p-5 sm:p-6 rounded-3xl bg-[#160f22]/90 backdrop-blur-md border border-[#ff2d87]/25 shadow-lg flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-base sm:text-lg font-serif font-bold text-white mb-1">
              Lokasi &amp; Pengingat Kalender
            </h4>
            <p className="text-xs font-sans text-pink-200/80 leading-relaxed max-w-sm mx-auto">
              Grand Sasana Kriya Ballroom, TMII, Cipayung, Jakarta Timur
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
            <a
              href="https://maps.google.com/?q=Sasana+Kriya+Ballroom+TMII+Jakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-[#20122e] hover:bg-[#ff2d87] text-white text-xs font-sans font-medium transition-all border border-[#ff2d87]/40 shadow-sm active:scale-95"
            >
              <MapPin className="w-3.5 h-3.5 text-[#ff2d87]" />
              <span>Buka Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <button
              onClick={handleDownloadIcs}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-gradient-to-r from-[#ff2d87] to-[#e60067] text-white text-xs font-sans font-medium transition-all shadow-[0_0_15px_rgba(255,45,135,0.5)] cursor-pointer active:scale-95"
            >
              {calendarSaved ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Jadwal Tersimpan!</span>
                </>
              ) : (
                <>
                  <CalendarPlus className="w-3.5 h-3.5 text-white" />
                  <span>Simpan ke Kalender (.ics)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
