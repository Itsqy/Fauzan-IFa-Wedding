import React, { useState } from 'react';
import { Copy, Check, Gift, CreditCard, Smartphone } from 'lucide-react';
import { BankAccount } from '../types/wedding';
import {
  RumahJoglo,
  Gunungan,
  JavaneseCornerOrnament,
  JavaneseDivider,
  BatikKawungBackground,
  BatikBorderStrip,
} from './JavaneseMotifs';

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
      {/* Ambient background glow & Batik Kawung Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <BatikKawungBackground opacity={0.055} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="mb-2 flex justify-center animate-float-gentle">
            <RumahJoglo width={155} />
          </div>

          <div className="text-[11px] uppercase tracking-[0.3em] font-sans text-[#d4a373] font-medium mb-1">
            TANDA KASIH &amp; KADO PERNIKAHAN
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Amplop Digital &amp; Kado
          </h2>

          <JavaneseDivider className="my-3.5" />

          <p className="text-sm font-sans text-[#d6c5b3] max-w-xl mx-auto mt-2 leading-relaxed">
            Doa restu Bapak/Ibu/Saudara/i merupakan karunia yang sangat berarti bagi kami. Namun apabila memberi adalah ungkapan tanda kasih, Anda dapat memberikan kado secara cashless maupun pengiriman fisik melalui informasi di bawah ini:
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
                className="relative rounded-3xl bg-[#1d130b]/92 backdrop-blur-md border border-[#c59b6d]/35 shadow-xl flex flex-col justify-between hover:border-[#d4af37]/60 transition-all hover:scale-[1.01] overflow-hidden"
              >
                <BatikBorderStrip />

                {/* Subtle Gunungan Watermark */}
                <div className="absolute -bottom-3 -right-2 opacity-15 pointer-events-none">
                  <Gunungan size={80} glow={false} />
                </div>

                <div className="relative p-6">
                  <div className="absolute top-2 right-2">
                    <JavaneseCornerOrnament position="top-right" size={30} />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4 pr-6">
                      <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-[#f5ecd8] tracking-wider font-sans border border-[#d4af37]/35">
                        {account.logoText}
                      </span>
                      {isDana ? (
                        <Smartphone className="w-5 h-5 text-[#d4af37]" />
                      ) : (
                        <CreditCard className="w-5 h-5 text-[#d4af37]" />
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
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37]/25 to-[#c59b6d]/35 hover:from-[#d4af37] hover:to-[#8c5326] border border-[#d4af37]/50 text-white text-xs font-sans font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Nomor Berhasil Disalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#f5ecd8]" />
                          <span>Salin {isDana ? 'Nomor DANA' : 'Nomor Rekening'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Physical Gift Delivery Address Box */}
        <div className="relative rounded-3xl bg-[#1d130b]/92 backdrop-blur-md border border-[#c59b6d]/35 flex flex-col shadow-xl text-center overflow-hidden">
          <BatikBorderStrip />

          <div className="relative p-6 sm:p-7 flex flex-col gap-5">
            <div className="absolute top-2 left-2">
              <JavaneseCornerOrnament position="top-left" size={30} />
            </div>
            <div className="absolute top-2 right-2">
              <JavaneseCornerOrnament position="top-right" size={30} />
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/20 border border-[#d4af37]/45 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Gift className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-white mb-1.5">
                  Kirim Kado Fisik
                </h4>
                <p className="text-xs sm:text-sm font-sans text-[#f5efe6] leading-relaxed max-w-md mx-auto">
                  Jalan Sumbawa No. 69B, RT.1/RW.5, Kp. Cilalung, Kelurahan Jombang, Kec. Ciputat, Kota Tangerang Selatan, Banten, 15414
                </p>
                <p className="text-xs font-sans text-[#d4af37] mt-2 font-medium">
                  Penerima: Ifa dan Fauzan (081223686858)
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              <button
                onClick={handleCopyAddress}
                className="w-full py-2.5 px-4 rounded-full bg-[#2a1c12] hover:bg-[#d4af37] hover:text-[#120c08] border border-[#c59b6d]/40 text-white text-xs font-sans font-medium transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-sm"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Alamat Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#f5ecd8]" />
                    <span>Salin Alamat Lengkap</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
