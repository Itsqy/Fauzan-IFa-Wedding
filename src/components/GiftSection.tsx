import React, { useState } from 'react';
import { Copy, Check, Gift, CreditCard, Sparkles, Send, MapPin } from 'lucide-react';
import { BankAccount } from '../types/wedding';

const BANK_ACCOUNTS: BankAccount[] = [
  {
    bank: 'Bank Central Asia (BCA)',
    accountNumber: '8691823719',
    accountHolder: 'Fauzan Mahfuzh',
    logoText: 'BCA',
    color: 'from-blue-900/40 to-[#1b1028]',
  },
  {
    bank: 'Bank Mandiri',
    accountNumber: '1570008273618',
    accountHolder: 'Isma Hifaf',
    logoText: 'MANDIRI',
    color: 'from-amber-900/40 to-[#1b1028]',
  },
  {
    bank: 'Bank Syariah Indonesia (BSI)',
    accountNumber: '7182938475',
    accountHolder: 'Fauzan Mahfuzh',
    logoText: 'BSI',
    color: 'from-teal-900/40 to-[#1b1028]',
  },
];

export const GiftSection: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => {
      setCopiedAccount(null);
    }, 2500);
  };

  const giftAddress =
    'Jl. Cendrawasih No. 18, RT 04 / RW 02, Kebayoran Baru, Jakarta Selatan 12150 (Penerima: Fauzan & Ifa / 0812-9876-5432)';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(giftAddress);
    setCopiedAddress(true);
    setTimeout(() => {
      setCopiedAddress(false);
    }, 2500);
  };

  return (
    <section id="hadiah" className="relative py-20 md:py-28 px-5 bg-[#0b0811] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff2d87]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-pink-300 mb-2">
            <Gift className="w-4 h-4 text-[#ff2d87]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-pink-200">
              Tanda Kasih
            </span>
            <Gift className="w-4 h-4 text-[#ff2d87]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Amplop Digital &amp; Kado Pernikahan
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#ff2d87] to-transparent mx-auto mt-4" />
          <p className="text-sm font-sans text-pink-200/70 max-w-xl mx-auto mt-4 leading-relaxed">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda bermaksud memberikan tanda kasih berupa hadiah, kami menyediakan amplop digital di bawah ini:
          </p>
        </div>

        {/* Bank Cards Stack */}
        <div className="grid grid-cols-1 gap-5 mb-10">
          {BANK_ACCOUNTS.map((account) => {
            const isCopied = copiedAccount === account.accountNumber;
            return (
              <div
                key={account.accountNumber}
                className="relative p-6 rounded-3xl bg-[#160f22]/90 backdrop-blur-md border border-[#ff2d87]/25 shadow-xl flex flex-col justify-between hover:border-[#ff2d87] transition-all hover:scale-[1.02]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-white tracking-wider font-sans">
                      {account.logoText}
                    </span>
                    <CreditCard className="w-5 h-5 text-[#ff2d87]" />
                  </div>

                  <p className="text-xs font-sans text-pink-300/80 mb-1">
                    {account.bank}
                  </p>
                  <p className="text-xl font-mono font-bold text-white tracking-wider tabular-nums mb-2 select-all">
                    {account.accountNumber}
                  </p>
                  <p className="text-xs font-sans text-pink-200/70">
                    a.n. <span className="font-semibold text-white">{account.accountHolder}</span>
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleCopy(account.accountNumber, account.accountNumber)}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#ff2d87]/20 to-[#ff2d87]/40 hover:from-[#ff2d87] hover:to-[#e60067] border border-[#ff2d87]/50 text-white text-xs font-sans font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(255,45,135,0.6)]"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Nomor Rekening Disalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#ff70a6]" />
                        <span>Salin Nomor Rekening</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Physical Gift Delivery Address & WhatsApp Confirmation Box */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#170f24]/90 backdrop-blur-md border border-[#ff2d87]/30 flex flex-col gap-5 shadow-xl text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#ff2d87]/20 border border-[#ff2d87]/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,45,135,0.3)]">
              <MapPin className="w-6 h-6 text-[#ff2d87]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white mb-1.5">
                Kirim Kado Fisik / Parsel
              </h4>
              <p className="text-xs sm:text-sm font-sans text-pink-100/80 leading-relaxed max-w-sm mx-auto">
                {giftAddress}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-full">
            <button
              onClick={handleCopyAddress}
              className="w-full py-2.5 px-4 rounded-full bg-[#241334] hover:bg-[#ff2d87] border border-[#ff2d87]/40 text-white text-xs font-sans font-medium transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-sm"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Alamat Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-pink-300" />
                  <span>Salin Alamat Kirim</span>
                </>
              )}
            </button>

            <a
              href="https://wa.me/6281298765432?text=Assalamu%27alaikum%20Fauzan%20%26%20Ifa%2C%20alhamdulillah%20kami%20telah%20mengirimkan%20tanda%20kasih%2Fkado%20pernikahan.%20Semoga%20berkah%20dan%20menjadi%20keluarga%20sakinah."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-sans font-medium transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Konfirmasi via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
