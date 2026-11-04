import React, { useState } from 'react';
import { X, Heart, Check, Users, Sparkles } from 'lucide-react';
import { GuestWish } from '../types/wedding';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitWish: (newWish: Omit<GuestWish, 'id' | 'timestamp'>) => void;
  onTriggerButterflyBurst: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({
  isOpen,
  onClose,
  onSubmitWish,
  onTriggerButterflyBurst,
}) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [attendeesCount, setAttendeesCount] = useState<number>(2);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    // Simulate brief smooth submission
    setTimeout(() => {
      onSubmitWish({
        name: name.trim(),
        status,
        attendeesCount: status === 'hadir' ? attendeesCount : 0,
        message: message.trim() || 'Selamat berbahagia untuk Fauzan & Ifa!',
      });

      setIsSubmitting(false);
      setSuccess(true);
      onTriggerButterflyBurst();

      setTimeout(() => {
        setSuccess(false);
        onClose();
        setName('');
        setMessage('');
      }, 1800);
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#170e24] border border-[#ff2d87]/40 shadow-[0_0_50px_rgba(255,45,135,0.35)] my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#ff2d87] to-[#ff007f] flex items-center justify-center mb-4 shadow-[0_0_30px_#ff2d87] animate-bounce">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Terima Kasih Banyak!
            </h3>
            <p className="text-sm font-sans text-pink-200/80 max-w-xs leading-relaxed">
              Konfirmasi kehadiran dan untaian doa restu Anda telah tersimpan di Buku Tamu.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-pink-300 font-sans mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#ff2d87]" />
                <span>Konfirmasi Kehadiran</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                RSVP &amp; Doa Restu
              </h3>
              <p className="text-xs sm:text-sm font-sans text-pink-200/70 mt-1">
                Mohon konfirmasikan kehadiran Anda pada pernikahan Fauzan &amp; Ifa
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nama Tamu */}
              <div>
                <label className="block text-xs font-sans font-medium text-pink-200 uppercase tracking-wider mb-1.5">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Bpk. Hendra &amp; Keluarga"
                  className="w-full px-4 py-3 rounded-xl bg-[#201431] border border-white/15 focus:border-[#ff2d87] focus:ring-1 focus:ring-[#ff2d87] text-white text-sm outline-none transition-all placeholder:text-pink-300/40"
                />
              </div>

              {/* Status Kehadiran Radio Group */}
              <div>
                <label className="block text-xs font-sans font-medium text-pink-200 uppercase tracking-wider mb-2">
                  Konfirmasi Kehadiran *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setStatus('hadir')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-sans font-medium transition-all flex flex-col items-center justify-center gap-1 border cursor-pointer ${
                      status === 'hadir'
                        ? 'bg-gradient-to-r from-[#ff2d87] to-[#e60067] border-white/40 text-white shadow-[0_0_15px_rgba(255,45,135,0.6)]'
                        : 'bg-[#201431] border-white/10 text-pink-200/70 hover:border-white/30'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>Hadir</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStatus('ragu')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-sans font-medium transition-all flex flex-col items-center justify-center gap-1 border cursor-pointer ${
                      status === 'ragu'
                        ? 'bg-[#ff70a6]/30 border-[#ff70a6] text-white shadow-[0_0_15px_rgba(255,112,166,0.4)]'
                        : 'bg-[#201431] border-white/10 text-pink-200/70 hover:border-white/30'
                    }`}
                  >
                    <span>Masih Ragu</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStatus('tidak_hadir')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-sans font-medium transition-all flex flex-col items-center justify-center gap-1 border cursor-pointer ${
                      status === 'tidak_hadir'
                        ? 'bg-slate-700/60 border-slate-500 text-white'
                        : 'bg-[#201431] border-white/10 text-pink-200/70 hover:border-white/30'
                    }`}
                  >
                    <span>Tidak Hadir</span>
                  </button>
                </div>
              </div>

              {/* Jumlah Orang (Jika Hadir) */}
              {status === 'hadir' && (
                <div>
                  <label className="block text-xs font-sans font-medium text-pink-200 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Jumlah Tamu yang Hadir</span>
                    <span className="text-pink-300 font-semibold">{attendeesCount} Orang</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#ff2d87]" />
                    <input
                      type="range"
                      min={1}
                      max={5}
                      value={attendeesCount}
                      onChange={(e) => setAttendeesCount(Number(e.target.value))}
                      className="w-full accent-[#ff2d87] cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Ucapan & Doa Restu */}
              <div>
                <label className="block text-xs font-sans font-medium text-pink-200 uppercase tracking-wider mb-1.5">
                  Untaian Doa &amp; Ucapan Selamat
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan ucapan selamat &amp; doa restu untuk kedua mempelai..."
                  className="w-full px-4 py-3 rounded-xl bg-[#201431] border border-white/15 focus:border-[#ff2d87] focus:ring-1 focus:ring-[#ff2d87] text-white text-sm outline-none transition-all placeholder:text-pink-300/40 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#ff2d87] via-[#ff1493] to-[#e60067] text-white font-sans font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(255,45,135,0.6)] hover:shadow-[0_0_40px_rgba(255,45,135,0.9)] hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>{isSubmitting ? 'Mengirim Konfirmasi...' : 'Kirim Konfirmasi & Doa Restu'}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
