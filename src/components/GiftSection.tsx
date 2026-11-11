import React, { useState } from 'react';
import { Copy, Check, Gift, CreditCard, Sparkles, MapPin, Smartphone } from 'lucide-react';
import { BankAccount } from '../types/wedding';

const BANK_ACCOUNTS: BankAccount[] = [
  {
    bank: 'Bank Mandiri',
    accountNumber: '1350021146954',
    accountHolder: 'Ismah Ifaf Agasinta',
    logoText: 'MANDIRI',
    color: 'from-[#2e2015] to-[#1d130b]',
  },
  {
    bank: 'Bank Central Asia (BCA)',
    accountNumber: '0662668034',
    accountHolder: 'Fauzan Mahfuzh',
    logoText: 'BCA',
    color: 'from-[#2e2015] to-[#1d130b]',
  },
  {
    bank: 'DANA (Dompet Digital)',
    accountNumber: '081223686858',
    accountHolder: 'Fauzan Mahfuzh',
    logoText: 'DANA',
    color: 'from-[#2e2015] to-[#1d130b]',
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
    'Jalan Sumbawa No. 69B, RT.1/RW.5, Kp. Cilalung, Kelurahan Jombang, Kec. Ciputat, Kota Tangerang Selatan, Banten, 15414 (Penerima: Ifa dan Fauzan / 081223686858)';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(giftAddress);
    setCopiedAddress(true);
    setTimeout(() => {
      setCopiedAddress(false);
    }, 2500);
  };

  return (
    <section id="hadiah" className="relative py-20 md:py-28 px-5 bg-[#120c08] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c59b6d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#d4a373] mb-2">
            <Gift className="w-4 h-4 text-[#c59b6d]" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#e2c299]">
              Tanda Kasih
            </span>
            <Gift className="w-4 h-4 text-[#c59b6d]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Amplop Digital &amp; Kado Pernikahan
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c59b6d] to-transparent mx-auto mt-4" />
          <p className="text-sm font-sans text-[#d6c5b3] max-w-xl mx-auto mt-4 leading-relaxed">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda bermaksud memberikan tanda kasih berupa hadiah, kami menyediakan amplop digital di bawah ini:
          </p>
        </div>

        {/* Bank & Wallet Cards Stack */}
        <div className="grid grid-cols-1 gap-5 mb-10">
          {BANK_ACCOUNTS.map((account) => {
            const isCopied = copiedAccount === account.accountNumber;
            const isDana = account.logoText === 'DANA';

            return (
              <div
                key={account.accountNumber}
                className="relative p-6 rounded-3xl bg-[#1d130b]/90 backdrop-blur-md border border-[#c59b6d]/30 shadow-xl flex flex-col justify-between hover:border-[#c59b6d]/60 transition-all hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-[#e2c299] tracking-wider font-sans border border-[#c59b6d]/30">
                      {account.logoText}
                    </span>
                    {isDana ? (
                      <Smartphone className="w-5 h-5 text-[#c59b6d]" />
                    ) : (
                      <CreditCard className="w-5 h-5 text-[#c59b6d]" />
                    )}
                  </div>

                  <p className="text-xs font-sans text-[#d4a373] mb-1">
                    {account.bank}
                  </p>
                  <p className="text-xl font-mono font-bold text-white tracking-wider tabular-nums mb-2 select-all">
                    {account.accountNumber}
                  </p>
                  <p className="text-xs font-sans text-[#d6c5b3]">
                    a.n. <span className="font-semibold text-white">{account.accountHolder}</span>
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleCopy(account.accountNumber, account.accountNumber)}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#c59b6d]/20 to-[#c59b6d]/40 hover:from-[#c59b6d] hover:to-[#8c5326] border border-[#c59b6d]/50 text-white text-xs font-sans font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(197,155,109,0.5)]"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Nomor Rekening Disalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#e2c299]" />
                        <span>Salin {isDana ? 'Nomor DANA' : 'Nomor Rekening'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Physical Gift Delivery Address Box (Brief: Kirim Hadiah) */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#1d130b]/90 backdrop-blur-md border border-[#c59b6d]/30 flex flex-col gap-5 shadow-xl text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#c59b6d]/20 border border-[#c59b6d]/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(197,155,109,0.3)]">
              <MapPin className="w-6 h-6 text-[#c59b6d]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-white mb-1.5">
                Kirim Kado Fisik
              </h4>
              <p className="text-xs sm:text-sm font-sans text-[#f5efe6] leading-relaxed max-w-md mx-auto">
                Jalan Sumbawa No. 69B, RT.1/RW.5, Kp. Cilalung, Kelurahan Jombang, Kec. Ciputat, Kota Tangerang Selatan, Banten, 15414
              </p>
              <p className="text-xs font-sans text-[#c59b6d] mt-2 font-medium">
                Penerima: Ifa dan Fauzan (081223686858)
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-full">
            <button
              onClick={handleCopyAddress}
              className="w-full py-2.5 px-4 rounded-full bg-[#2a1c12] hover:bg-[#c59b6d] hover:text-[#120c08] border border-[#c59b6d]/40 text-white text-xs font-sans font-medium transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-sm"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Alamat Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#e2c299]" />
                  <span>Salin Alamat Lengkap</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};