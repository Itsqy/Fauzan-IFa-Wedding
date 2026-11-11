import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, Check, Sparkles } from 'lucide-react';

export const EventSection: React.FC = () => {
  const [calendarSaved, setCalendarSaved] = useState(false);

  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Wedding of Ifa and Fauzan//ID',
      'BEGIN:VEVENT',
      'SUMMARY:Pernikahan Ifa & Fauzan (Akad & Resepsi)',
      'DESCRIPTION:Undangan Pernikahan Ifa & Fauzan. Bertempat di Gedung Ramayana (Alva Edison Hall) PLN UPDL Semarang.',
      'LOCATION:Gedung Ramayana (Alva Edison Hall) PLN UPDL Semarang, Jl. Kedungmundu, Sambiroto, Kec. Tembalang, Kota Semarang',
      'DTSTART:20261212T020000Z',
      'DTEND:20261212T070000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Pernikahan_Ifa_dan_Fauzan.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCalendarSaved(true);
    setTimeout(() => setCalendarSaved(false), 3000);
  };

  return (
    <section id="acara" className="relative py-20 md:py-28 px-5 bg-[#120c08] overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#c59b6d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#d4a373] mb-2">
            <Sparkles className="w-4 h-4 text-[#c59b6d]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#e2c299]">
              Waktu &amp; Tempat
            </span>
            <Sparkles className="w-4 h-4 text-[#c59b6d]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Rangkaian Acara Bahagia
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c59b6d] to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Akad Nikah */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#1d130b]/90 backdrop-blur-md border border-[#c59b6d]/30 shadow-xl flex flex-col justify-between hover:border-[#c59b6d]/60 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#c59b6d]/20 border border-[#c59b6d]/40 text-xs font-sans font-medium text-[#e2c299] uppercase tracking-widest">
                  Akad Nikah
                </span>
                <span className="text-xs text-[#d4a373] font-sans italic">
                  (hanya keluarga dan kerabat dekat)
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
                Upacara Ijab Kabul
              </h3>

              <div className="space-y-4 mb-8 text-sm font-sans text-[#f5efe6]">
                <div className="flex items-start gap-3.5">
                  <Calendar className="w-5 h-5 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Sabtu, 12 Desember 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">09.00 WIB - Selesai</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Gedung Ramayana (Alva Edison Hall)</p>
                    <p className="text-xs text-[#d6c5b3] mt-0.5">
                      PLN UPDL Semarang, Sambiroto, Kec. Tembalang, Kota Semarang
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-[#c59b6d] font-sans">
              Khusus untuk keluarga dan kerabat dekat
            </div>
          </div>

          {/* Resepsi */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#1d130b]/90 backdrop-blur-md border border-[#c59b6d]/30 shadow-xl flex flex-col justify-between hover:border-[#c59b6d]/60 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#c59b6d]/20 border border-[#c59b6d]/40 text-xs font-sans font-medium text-[#e2c299] uppercase tracking-widest">
                  Resepsi Pernikahan
                </span>
                <span className="text-xs text-[#d4a373] font-sans">
                  Sesi Tamu Undangan
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
                Walimatul 'Ursy &amp; Jamuan
              </h3>

              <div className="space-y-4 mb-8 text-sm font-sans text-[#f5efe6]">
                <div className="flex items-start gap-3.5">
                  <Calendar className="w-5 h-5 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Sabtu, 12 Desember 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">12.00 - 13.00 WIB atau 13.00 - 14.00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Gedung Ramayana (Alva Edison Hall)</p>
                    <p className="text-xs text-[#d6c5b3] mt-0.5">
                      PLN UPDL Semarang, Sambiroto, Kec. Tembalang, Kota Semarang
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-[#c59b6d] font-sans">
              Dress Code: Batik / Busana Adat Jawa / Formal Elegan
            </div>
          </div>
        </div>

        {/* Venue Location Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1d130b]/80 border border-[#c59b6d]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-white mb-1">
              Petunjuk Lokasi &amp; Simpan Kalender
            </h4>
            <p className="text-xs sm:text-sm font-sans text-[#d6c5b3] max-w-xl">
              Gedung Ramayana (Alva Edison Hall) PLN UPDL Semarang, Sambiroto, Kec. Tembalang, Kota Semarang
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://maps.app.goo.gl/Wn3JFxsAn1JPGviQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2a1c12] hover:bg-[#c59b6d] hover:text-[#120c08] text-white text-xs sm:text-sm font-sans font-medium transition-all duration-200 border border-[#c59b6d]/40 shadow-sm"
            >
              <MapPin className="w-4 h-4 text-[#c59b6d]" />
              <span>Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            <button
              onClick={handleDownloadIcs}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#c59b6d] to-[#8c5326] hover:scale-105 active:scale-95 text-white text-xs sm:text-sm font-sans font-medium transition-all duration-200 shadow-[0_0_15px_rgba(197,155,109,0.4)] cursor-pointer"
            >
              <CalendarPlus className="w-4 h-4 text-white" />
              <span>{calendarSaved ? 'Tersimpan!' : 'Simpan Acara (.ics)'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};