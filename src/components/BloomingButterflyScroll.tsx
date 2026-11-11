import React from 'react';
import { Sparkles } from 'lucide-react';

interface BloomingButterflyScrollProps {
  progress?: number;
  onExploreClick?: () => void;
}

export const BloomingButterflyScroll: React.FC<BloomingButterflyScrollProps> = ({
  onExploreClick,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center py-6 select-none">
      <button
        onClick={onExploreClick}
        className="mb-2 px-3 py-1 bg-[#1f140c]/90 backdrop-blur-md border border-[#c59b6d]/40 rounded-full shadow-lg text-[11px] font-sans text-[#e2c299] tracking-wider uppercase flex items-center gap-1.5 cursor-pointer hover:border-[#c59b6d] transition-all hover:scale-105"
      >
        <Sparkles className="w-3 h-3 text-[#c59b6d] animate-spin" style={{ animationDuration: '6s' }} />
        <span>Sentuh Kupu-kupu Cokelat</span>
      </button>
    </div>
  );
};