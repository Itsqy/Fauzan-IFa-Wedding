import React from 'react';
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
            ? 'bg-[#25180f]/90 border-[#c59b6d] text-white shadow-[0_0_20px_rgba(197,155,109,0.7)]'
            : 'bg-[#18100a]/85 border-white/20 text-[#b39a82] hover:text-white hover:border-[#c59b6d]'
        }`}
        title={isPlaying ? 'Jeda Lagu' : 'Putar Lagu (JKT48 - Rapsodi Saxophone Cover)'}
        aria-label={isPlaying ? 'Jeda Lagu' : 'Putar Lagu'}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-[#c59b6d] animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#c59b6d] animate-ping" />
          </div>
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>

      {/* Track Title Indicator */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#20150d]/90 backdrop-blur-md border border-[#c59b6d]/30 text-[11px] font-sans text-[#f5efe6] shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <Music className="w-3.5 h-3.5 text-[#c59b6d] animate-spin" style={{ animationDuration: '6s' }} />
        <span>JKT48 · Rapsodi (Saxophone Cover)</span>
      </div>
    </div>
  );
};