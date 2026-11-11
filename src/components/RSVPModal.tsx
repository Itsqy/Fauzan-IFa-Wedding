import React, { useState } from 'react';
import { X, Heart, Check, Users } from 'lucide-react';
import { GuestWish } from '../types/wedding';
import { Gunungan, JavaneseCornerOrnament, BatikBorderStrip } from './JavaneseMotifs';

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
        message: message.trim() || 'Selamat menempuh hidup baru untuk Ifa & Fauzan! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.',
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
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-[#1d130b] border border-[#d4af37]/40 shadow-[0_0_50px_rgba(0,0,0,0.9)] my-8 overflow-hidden"
      >
        <BatikBorderStrip />

        <div className="relative p-6 sm:p-8">
          <div className="absolute top-2 left-2">
            <JavaneseCornerOrnament position="top-left" size={32} />
          </div>
          <div className="absolute top-2 right-2">
            <JavaneseCornerOrnament position="top-right" size={32} />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {success ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#7d441e] flex items-center justify-center mb-4 shadow-[0_0_30px_#d4af37] animate-bounce">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Terima Kasih Banyak!
              </h3>
              <p className="text-sm font-sans text-[#d6c5b3] max-w-xs leading-relaxed">
                Konfirmasi kehadiran dan doa restu Anda telah kami terima dengan baik.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="mb-1">
                  <Gunungan size={32} className="text-[#d4af37] mx-auto opacity-80" />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#d4a373] font-sans mb-1 font-medium">
                  KONFIRMASI KEHADIRAN
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  RSVP &amp; Doa Restu
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#d6c5b3] mt-1">
                  Mohon konfirmasi kehadiran Anda pada acara pernikahan Ifa &amp; Fauzan
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nama Tamu */}
                <div>
                  <label className="block text-xs font-sans font-medium text-[#f5ecd8] uppercase tracking-wider mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Bpk. Hendra &amp; Keluarga"
                    className="w-full px-4 py-3 rounded-xl bg-[#26190f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white text-sm outline-none transition-all placeholder:text-[#b39a82]"
                  />
                </div>

                {/* Status Kehadiran Radio Group */}
                <div>
                  <label className="block text-xs font-sans font-medium text-[#f5ecd8] uppercase tracking-wider mb-2">
                    Konfirmasi Kehadiran *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setStatus('hadir')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-sans font-medium transition-all flex flex-col items-center justify-center gap-1 border cursor-pointer ${
                        status === 'hadir'
                          ? 'bg-gradient-to-r from-[#d4af37] to-[#8c5326] border-white/40 text-white shadow-[0_0_15px_rgba(212,175,55,0.5)]'
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
                          ? 'bg-[#d4af37]/30 border-[#d4af37] text-white shadow-[0_0_15px_rgba(212,175,55,0.3)]'
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
                          ? 'bg-red-950/40 border-red-500/50 text-white'
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
                    <label className="block text-xs font-sans font-medium text-[#f5ecd8] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Jumlah Tamu Hadir</span>
                      <span className="text-[11px] text-[#d4af37] font-normal flex items-center gap-1">
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
                              ? 'bg-[#d4af37] border-[#d4af37] text-[#120c08] font-bold shadow-sm'
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
                  <label className="block text-xs font-sans font-medium text-[#f5ecd8] uppercase tracking-wider mb-1.5">
                    Doa &amp; Ucapan untuk Kedua Mempelai
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan doa restu Anda untuk Ifa &amp; Fauzan..."
                    className="w-full px-4 py-3 rounded-xl bg-[#26190f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white text-sm outline-none transition-all placeholder:text-[#b39a82] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#b88628] to-[#7d441e] text-white font-sans font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi & Doa Restu'}</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
