import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, Check, Sparkles } from 'lucide-react';

export const EventSection: React.FC = () => {
  const [calendarSaved, setCalendarSaved] = useState(false);

  // Function to download .ics calendar file
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

  // Google Calendar URL generator
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Fauzan+%26+Ifa&dates=20261114T010000Z/20261114T070000Z&details=Undangan+Pernikahan+Fauzan+%26+Ifa.+Bertempat+di+Sasana+Kriya+Ballroom,+Jakarta.&location=Sasana+Kriya+Ballroom,+TMII,+Jakarta`;

  return (
    <section id="acara" className="relative py-20 md:py-28 px-5 bg-[#0b0810] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-radial from-[#1e1026]/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-pink-300 mb-2">
            <Sparkles className="w-4 h-4 text-[#ff2d87]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-pink-200">
              Rangkaian Acara
            </span>
            <Sparkles className="w-4 h-4 text-[#ff2d87]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Akad Nikah &amp; Resepsi
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#ff2d87] to-transparent mx-auto mt-4" />
          <p className="text-sm font-sans text-pink-200/70 max-w-lg mx-auto mt-4">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
        </div>

        {/* 2 Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Akad Nikah */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#150f20]/90 backdrop-blur-md border border-[#ff2d87]/30 shadow-xl flex flex-col justify-between hover:border-[#ff2d87]/60 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#ff2d87]/15 border border-[#ff2d87]/40 text-xs font-sans font-medium text-pink-200 uppercase tracking-widest">
                  Akad Nikah
                </span>
                <span className="text-xs text-pink-300/80 font-sans">
                  Khusus Keluarga &amp; Kerabat
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
                Upacara Akad Nikah
              </h3>

              <div className="space-y-4 mb-8 text-sm font-sans text-pink-100/90">
                <div className="flex items-start gap-3.5">
                  <Calendar className="w-5 h-5 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Sabtu, 14 November 2026</p>
                    <p className="text-xs text-pink-300/70">Pagi Hari</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">08.00 - 10.00 WIB</p>
                    <p className="text-xs text-pink-300/70">Diharapkan hadir 15 menit sebelum acara</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Sasana Kriya Ballroom - Carani Hall</p>
                    <p className="text-xs text-pink-200/80">Taman Mini Indonesia Indah (TMII), Jakarta Timur</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-pink-300/70">
              <span>Dress Code: Busana Muslim / Formal Pastel</span>
            </div>
          </div>

          {/* Card 2: Resepsi Pernikahan */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#150f20]/90 backdrop-blur-md border border-[#ff2d87]/30 shadow-xl flex flex-col justify-between hover:border-[#ff2d87]/60 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#ff2d87]/15 border border-[#ff2d87]/40 text-xs font-sans font-medium text-pink-200 uppercase tracking-widest">
                  Resepsi Pernikahan
                </span>
                <span className="text-xs text-pink-300/80 font-sans">
                  Sesi Terbuka Tamu Undangan
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
                Walimatul 'Ursy &amp; Jamuan
              </h3>

              <div className="space-y-4 mb-8 text-sm font-sans text-pink-100/90">
                <div className="flex items-start gap-3.5">
                  <Calendar className="w-5 h-5 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Sabtu, 14 November 2026</p>
                    <p className="text-xs text-pink-300/70">Siang Hari</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">11.00 - 14.00 WIB</p>
                    <p className="text-xs text-pink-300/70">Sesi ramah tamah dan foto bersama</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#ff2d87] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Grand Sasana Kriya Ballroom - Mandira Hall</p>
                    <p className="text-xs text-pink-200/80">Taman Mini Indonesia Indah (TMII), Jakarta Timur</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-pink-300/70">
              <span>Dress Code: Batik / Gaun Formal Elegan</span>
            </div>
          </div>
        </div>

        {/* Action Strip: Google Maps & Save to Calendar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#191026]/80 border border-[#ff2d87]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-1">
              Panduan Lokasi &amp; Pengingat Jadwal
            </h4>
            <p className="text-xs sm:text-sm font-sans text-pink-200/70">
              Grand Sasana Kriya Ballroom, Jl. Raya TMII, Ceger, Cipayung, Jakarta Timur 13820
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Google Maps Button */}
            <a
              href="https://maps.google.com/?q=Sasana+Kriya+Ballroom+TMII+Jakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#261536] hover:bg-[#ff2d87] text-white text-xs sm:text-sm font-sans font-medium transition-all duration-200 border border-[#ff2d87]/40 hover:shadow-[0_0_20px_rgba(255,45,135,0.7)]"
            >
              <MapPin className="w-4 h-4 text-[#ff2d87] group-hover:text-white" />
              <span>Buka Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* Google Calendar Direct Link */}
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#261536] hover:bg-[#ff2d87] text-white text-xs sm:text-sm font-sans font-medium transition-all duration-200 border border-[#ff2d87]/40 hover:shadow-[0_0_20px_rgba(255,45,135,0.7)]"
            >
              <CalendarPlus className="w-4 h-4 text-[#ff2d87]" />
              <span>Google Calendar</span>
            </a>

            {/* Download .ICS File */}
            <button
              onClick={handleDownloadIcs}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff2d87] to-[#e60067] hover:scale-105 active:scale-95 text-white text-xs sm:text-sm font-sans font-medium transition-all duration-200 shadow-[0_0_15px_rgba(255,45,135,0.5)] cursor-pointer"
            >
              {calendarSaved ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Jadwal Tersimpan!</span>
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Unduh Kalender (.ics)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
