import React, { useState } from 'react';
import { Download, Sparkles } from 'lucide-react';
import { DOWNLOAD_URL, APP_VERSION } from '../constants.ts';

export const FloatingDownloadButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Direct APK Download"
      className="fixed bottom-6 right-6 z-40 flex items-center"
    >
      <a
        id="floating-apk-download-btn"
        href={DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-500 text-white font-tech font-bold uppercase tracking-wider text-xs shadow-[0_8px_25px_rgba(229,9,20,0.5)] border border-red-400/40 hover:scale-105 active:scale-95 transition-all duration-300"
        title={`Download ATV Sports APK (${APP_VERSION})`}
      >
        {/* Animated pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-red-600/30 animate-ping pointer-events-none" />

        <div className="relative flex items-center justify-center">
          <Download className="w-4 h-4 animate-bounce" />
        </div>

        <span className="relative flex items-center gap-1.5 whitespace-nowrap">
          <span>Download APK</span>
          <span className="hidden sm:inline text-[10px] px-1.5 py-0.5 rounded bg-black/30 font-mono text-red-100">
            {APP_VERSION}
          </span>
        </span>

        {/* Sparkle visual hint */}
        <Sparkles className="w-3.5 h-3.5 text-yellow-300 opacity-90 hidden sm:inline" />
      </a>
    </aside>
  );
};
