import React, { useState } from 'react';
import { X, Heart, Check, Users, Sparkles } from 'lucide-react';
import { GuestWish } from '../types/wedding';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitWish: (newWish: Omit<GuestWish, 'id' | 'timestamp'>) => void;
  onTriggerButterflyBurst: () => void;
  defaultGuestName?: string;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({
  isOpen,
  onClose,
  onSubmitWish,
  onTriggerButterflyBurst,
  defaultGuestName,
}) => {
  const [name, setName] = useState(() => (defaultGuestName && defaultGuestName !== 'Tamu Undangan' ? defaultGuestName : ''));
  const [status, setStatus] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [attendeesCount, setAttendeesCount] = useState<number>(2);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  React.useEffect(() => {
    if (defaultGuestName && defaultGuestName !== 'Tamu Undangan' && !name) {
      setName(defaultGuestName);
    }
  }, [defaultGuestName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      onSubmitWish({
        name: name.trim(),
        status,
        attendeesCount: status === 'hadir' ? attendeesCount : 0,
        message: message.trim() || 'Selamat berbahagia untuk Ifa & Fauzan!',
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
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#1d130b] border border-[#c59b6d]/40 shadow-[0_0_50px_rgba(0,0,0,0.85)] my-8"
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
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#c59b6d] to-[#8c5326] flex items-center justify-center mb-4 shadow-[0_0_30px_#c59b6d] animate-bounce">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Matur Nuwun!
            </h3>
            <p className="text-sm font-sans text-[#d6c5b3] max-w-xs leading-relaxed">
              Konfirmasi kehadiran dan untaian doa restu Anda telah tersimpan di Buku Tamu Ifa &amp; Fauzan.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#d4a373] font-sans mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#c59b6d]" />
                <span>Konfirmasi Kehadiran</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                RSVP &amp; Doa Restu
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#d6c5b3] mt-1">
                Mohon konfirmasikan kehadiran Anda pada pernikahan Ifa &amp; Fauzan
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nama Tamu */}
              <div>
                <label className="block text-xs font-sans font-medium text-[#e2c299] uppercase tracking-wider mb-1.5">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Bpk. Hendra &amp; Keluarga"
                  className="w-full px-4 py-3 rounded-xl bg-[#26190f] border border-white/15 focus:border-[#c59b6d] focus:ring-1 focus:ring-[#c59b6d] text-white text-sm outline-none transition-all placeholder:text-[#b39a82]"
                />
              </div>

              {/* Status Kehadiran Radio Group */}
              <div>
                <label className="block text-xs font-sans font-medium text-[#e2c299] uppercase tracking-wider mb-2">
                  Konfirmasi Kehadiran *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setStatus('hadir')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-sans font-medium transition-all flex flex-col items-center justify-center gap-1 border cursor-pointer ${
                      status === 'hadir'
                        ? 'bg-gradient-to-r from-[#c59b6d] to-[#8c5326] border-white/40 text-white shadow-[0_0_15px_rgba(197,155,109,0.5)]'
                        : 'bg-[#26190f] border-white/10 text-[#d6c5b3] hover:border-white/30'
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
                        ? 'bg-[#c59b6d]/30 border-[#c59b6d] text-white shadow-[0_0_15px_rgba(197,155,109,0.3)]'
                        : 'bg-[#26190f] border-white/10 text-[#d6c5b3] hover:border-white/30'
                    }`}
                  >
                    <span>Masih Ragu</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStatus('tidak_hadir')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-sans font-medium transition-all flex flex-col items-center justify-center gap-1 border cursor-pointer ${
                      status === 'tidak_hadir'
                        ? 'bg-red-900/30 border-red-500/50 text-white'
                        : 'bg-[#26190f] border-white/10 text-[#d6c5b3] hover:border-white/30'
                    }`}
                  >
                    <span>Tidak Hadir</span>
                  </button>
                </div>
              </div>

              {/* Jumlah Kehadiran (Hanya jika hadir) */}
              {status === 'hadir' && (
                <div>
                  <label className="block text-xs font-sans font-medium text-[#e2c299] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Jumlah Hadir</span>
                    <span className="text-[11px] text-[#c59b6d] font-normal flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {attendeesCount} Orang
                    </span>
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setAttendeesCount(count)}
                        className={`flex-1 py-2 rounded-xl text-xs font-sans font-medium transition-all border cursor-pointer ${
                          attendeesCount === count
                            ? 'bg-[#c59b6d] border-[#c59b6d] text-[#120c08] font-bold shadow-sm'
                            : 'bg-[#26190f] border-white/10 text-white hover:border-white/30'
                        }`}
                      >
                        {count} Orang
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Doa & Ucapan */}
              <div>
                <label className="block text-xs font-sans font-medium text-[#e2c299] uppercase tracking-wider mb-1.5">
                  Doa &amp; Ucapan untuk Kedua Mempelai
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan doa restu Anda untuk Ifa &amp; Fauzan..."
                  className="w-full px-4 py-3 rounded-xl bg-[#26190f] border border-white/15 focus:border-[#c59b6d] focus:ring-1 focus:ring-[#c59b6d] text-white text-sm outline-none transition-all placeholder:text-[#b39a82] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#c59b6d] via-[#b37a44] to-[#8c5326] text-white font-sans font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(197,155,109,0.5)] hover:shadow-[0_0_30px_rgba(197,155,109,0.8)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>{isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi & Doa Restu'}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};