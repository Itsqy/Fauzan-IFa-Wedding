import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, Check, Sparkles, Video } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [calendarSaved, setCalendarSaved] = useState(false);

  useEffect(() => {
    // Target: Sabtu, 12 Desember 2026 pukul 09:00 WIB
    const targetDate = new Date('2026-12-12T09:00:00+07:00').getTime();

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

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Ifa+%26+Fauzan&dates=20261212T020000Z/20261212T070000Z&details=Undangan+Pernikahan+Ifa+%26+Fauzan.+Bertempat+di+Gedung+Ramayana+(Alva+Edison+Hall)+PLN+UPDL+Semarang.&location=Gedung+Ramayana+PLN+UPDL+Semarang,+Jl.+Kedungmundu,+Semarang`;

  return (
    <section id="acara" className="relative py-16 md:py-24 px-5 bg-[#120c08] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#c59b6d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#d4a373] mb-2">
            <Sparkles className="w-4 h-4 text-[#c59b6d]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#e2c299]">
              Waktu &amp; Tempat
            </span>
            <Sparkles className="w-4 h-4 text-[#c59b6d]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Jadwal Rangkaian Acara
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#c59b6d] to-transparent mx-auto mt-4" />
        </div>

        {/* Live Countdown Clock */}
        <div className="mb-10 max-w-lg mx-auto">
          <p className="text-xs font-sans tracking-[0.25em] uppercase text-[#d6ab7b]/90 mb-3 text-center">
            Menghitung Hari Menuju Akad &amp; Resepsi
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <div className="px-2 sm:px-3 py-2.5 sm:py-3 rounded-2xl bg-[#1d130b]/90 border border-[#c59b6d]/30 text-center shadow-lg">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums text-[#e2c299]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-[#c59b6d]">
                Hari
              </span>
            </div>
            <div className="px-2 sm:px-3 py-2.5 sm:py-3 rounded-2xl bg-[#1d130b]/90 border border-[#c59b6d]/30 text-center shadow-lg">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums text-[#e2c299]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-[#c59b6d]">
                Jam
              </span>
            </div>
            <div className="px-2 sm:px-3 py-2.5 sm:py-3 rounded-2xl bg-[#1d130b]/90 border border-[#c59b6d]/30 text-center shadow-lg">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums text-[#e2c299]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-[#c59b6d]">
                Menit
              </span>
            </div>
            <div className="px-2 sm:px-3 py-2.5 sm:py-3 rounded-2xl bg-[#1d130b]/90 border border-[#c59b6d]/30 text-center shadow-lg">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums text-[#e2c299]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-sans tracking-wider uppercase text-[#c59b6d]">
                Detik
              </span>
            </div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Akad Nikah Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#1d130b]/90 backdrop-blur-md border border-[#c59b6d]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#c59b6d]/20 border border-[#c59b6d]/40 text-[11px] font-sans font-medium text-[#e2c299] uppercase tracking-widest">
                  Akad Nikah
                </span>
                <span className="text-xs text-[#d4a373] font-sans italic">
                  (hanya keluarga dan kerabat dekat)
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-5">
                Upacara Ijab Kabul
              </h3>

              <div className="space-y-3.5 mb-6 text-sm font-sans text-[#f5efe6]">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Sabtu, 12 Desember 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">09.00 WIB - Selesai</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Gedung Ramayana (Alva Edison Hall)</p>
                    <p className="text-xs text-[#d6c5b3] mt-0.5">
                      PLN UPDL Semarang (Jl. Kedungmundu, Sambiroto, Kec. Tembalang, Kota Semarang)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-[#c59b6d] font-sans">
              Khusus untuk keluarga dan kerabat dekat
            </div>
          </div>

          {/* Resepsi Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#1d130b]/90 backdrop-blur-md border border-[#c59b6d]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#c59b6d]/20 border border-[#c59b6d]/40 text-[11px] font-sans font-medium text-[#e2c299] uppercase tracking-widest">
                  Resepsi Pernikahan
                </span>
                <span className="text-xs text-[#d4a373] font-sans">
                  Sesi Tamu Undangan
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-5">
                Walimatul 'Ursy &amp; Jamuan
              </h3>

              <div className="space-y-3.5 mb-6 text-sm font-sans text-[#f5efe6]">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Sabtu, 12 Desember 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">12.00 - 13.00 WIB atau 13.00 - 14.00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Gedung Ramayana (Alva Edison Hall)</p>
                    <p className="text-xs text-[#d6c5b3] mt-0.5">
                      PLN UPDL Semarang (Jl. Kedungmundu, Sambiroto, Kec. Tembalang, Kota Semarang)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-[#c59b6d] font-sans">
              Dress Code: Batik / Busana Adat Jawa / Formal Elegan
            </div>
          </div>

          {/* Live Streaming Card (From Brief) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#21160e] to-[#1a110a] border border-[#c59b6d]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <Video className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-white">
                  Live Streaming YouTube
                </h4>
                <p className="text-xs font-sans text-[#d6c5b3] mt-0.5">
                  Bagi kerabat &amp; sahabat yang berhalangan hadir secara langsung
                </p>
              </div>
            </div>

            <a
              href="https://s.id/StreamingWeddingIfaFauzan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-sans font-medium transition-all shadow-md active:scale-95 shrink-0"
            >
              <span>Tonton Live Streaming</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Action Strip: Maps & Calendar */}
        <div className="p-5 sm:p-6 rounded-3xl bg-[#1d130b]/90 backdrop-blur-md border border-[#c59b6d]/30 shadow-lg flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-base sm:text-lg font-serif font-bold text-white mb-1">
              Petunjuk Lokasi &amp; Simpan Jadwal
            </h4>
            <p className="text-xs font-sans text-[#d6c5b3] leading-relaxed max-w-sm mx-auto">
              Gedung Ramayana PLN UPDL Semarang, Sambiroto, Kec. Tembalang, Kota Semarang
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
            <a
              href="https://maps.app.goo.gl/Wn3JFxsAn1JPGviQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-[#2a1c12] hover:bg-[#c59b6d] hover:text-[#120c08] text-white text-xs font-sans font-medium transition-all border border-[#c59b6d]/40 shadow-sm active:scale-95"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c59b6d]" />
              <span>Buka Google Maps</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <button
              onClick={handleDownloadIcs}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-gradient-to-r from-[#c59b6d] to-[#8c5326] text-white text-xs font-sans font-medium transition-all shadow-[0_0_15px_rgba(197,155,109,0.4)] cursor-pointer active:scale-95"
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