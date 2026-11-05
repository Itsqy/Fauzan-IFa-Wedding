import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onTogglePlay }) => {
  return (
    <div className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40 flex items-center gap-2.5 group">
      <button
        onClick={onTogglePlay}
        className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 shadow-xl cursor-pointer ${
          isPlaying
            ? 'bg-[#1e102b]/90 border-[#ff2d87] text-white shadow-[0_0_22px_rgba(255,45,135,0.8)]'
            : 'bg-[#130d1d]/85 border-white/20 text-pink-300/60 hover:text-white hover:border-[#ff2d87]'
        }`}
        title={isPlaying ? 'Jeda Lagu' : 'Putar Lagu (JKT48 - Rapsodi)'}
        aria-label={isPlaying ? 'Jeda Lagu' : 'Putar Lagu'}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-[#ff2d87] animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#ff2d87] animate-ping" />
          </div>
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>

      {/* Track Title Indicator */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#180f24]/90 backdrop-blur-md border border-[#ff2d87]/30 text-[11px] font-sans text-pink-100 shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <Music className="w-3.5 h-3.5 text-[#ff2d87] animate-spin" style={{ animationDuration: '6s' }} />
        <span>JKT48 · Rapsodi</span>
      </div>
    </div>
  );
};
