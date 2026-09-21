import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Radio, ShieldCheck, Sparkles } from 'lucide-react';
import { SportsStadiumAnimation } from './SportsStadiumAnimation.tsx';
import { DOWNLOAD_URL, APP_VERSION } from '../constants.ts';

interface HeroProps {
  onScrollToPosts: () => void;
  onNavigate?: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToPosts, onNavigate }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-0 overflow-hidden bg-transparent"
    >
      {/* Cinematic Background Lighting & Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none -z-10" />

      {/* Grid line pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Main Hero Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE: Exact 3D Typography */}
          <div
            className="lg:col-span-6 flex flex-col justify-center transition-transform duration-300 ease-out z-10"
            style={{
              transform: `perspective(1000px) rotateX(${-mousePos.y * 0.3}deg) rotateY(${
                mousePos.x * 0.3
              }deg)`,
            }}
          >
            {/* Official App Emblem Badge with Logo */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-xs font-tech font-bold uppercase tracking-wider text-red-400 mb-5 w-fit shadow-lg shadow-red-600/10 backdrop-blur-md">
              <div className="w-5 h-5 rounded-md overflow-hidden bg-black/50 border border-red-500/40 shrink-0">
                <img
                  src="/atvsports-logo.png"
                  alt="ATV Sports Official Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span>Official Android App Platform</span>
            </div>

            {/* 3D Animated Hero Typography */}
            <div className="relative metallic-sweep">
              <h1
                id="hero-headline"
                className="typography-hero-3d text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] leading-[1.08] tracking-tight text-left select-none"
              >
                <span className="text-white block font-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  ATVSPORTS;
                </span>
                <span className="block mt-2 font-bold text-zinc-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  the most popular app for watching live sports and TV channel
                </span>
              </h1>

              {/* 3D Extrusion Layer behind */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] leading-[1.08] tracking-tight font-tech font-extrabold uppercase text-transparent select-none pointer-events-none opacity-40 translate-x-[2px] translate-y-[3px]"
                style={{
                  WebkitTextStroke: '2px rgba(229, 9, 20, 0.6)',
                  filter: 'blur(2px)',
                }}
              >
                <span className="block">ATVSPORTS;</span>
                <span className="block mt-2">
                  the most popular app for watching live sports and TV channel
                </span>
              </div>
            </div>

            {/* Subtle red sports-tech indicator bar */}
            <div className="mt-6 flex items-center gap-3">
              <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full shadow-[0_0_12px_rgba(229,9,20,0.8)]" />
              <div className="w-2 h-1 bg-white/40 rounded-full" />
              <div className="w-2 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Quick Hero CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                id="hero-direct-download-btn"
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-500 text-white font-tech font-bold uppercase text-xs sm:text-sm tracking-wider flex items-center gap-2.5 shadow-xl shadow-red-600/40 hover:shadow-red-600/60 hover:scale-[1.03] active:scale-[0.98] transition-all"
                aria-label="Download Official ATV Sports APK for Android"
                title={`Download ATV Sports APK (${APP_VERSION})`}
              >
                <Download className="w-4 h-4 animate-bounce" />
                <span>Download APK ({APP_VERSION})</span>
              </a>

              <a
                href="/download"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('/download');
                  }
                }}
                className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-tech font-bold uppercase text-xs sm:text-sm tracking-wider flex items-center gap-2 transition-all"
                aria-label="View Installation Guide and Details"
              >
                <span>Install Guide</span>
                <ArrowRight className="w-4 h-4 text-red-500" />
              </a>

              <a
                href="/features"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('/features');
                  }
                }}
                className="px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white font-tech font-bold uppercase text-xs sm:text-sm tracking-wider flex items-center gap-2 transition-all"
                aria-label="Explore ATV Sports Features and Supported Sports"
              >
                <Radio className="w-4 h-4 text-red-500" />
                <span>Features</span>
              </a>
            </div>

            {/* Verified Trust Indicator + Direct Link Hint */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-tech text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                <span>Official Android APK • Free &amp; Malware Scanned</span>
              </div>
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-red-400 hover:text-red-300 transition-colors bg-red-600/10 hover:bg-red-600/20 px-2 py-0.5 rounded border border-red-500/20"
                title="Direct APK Download Link"
              >
                <Download className="w-3 h-3" />
                <span>Fast Direct Link</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Football/Sports Animation */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <SportsStadiumAnimation />
          </div>
        </div>
      </div>

      {/* HOMEPAGE READ MORE BAR: Full width premium bar at the very bottom of hero */}
      <div className="w-full mt-auto">
        <button
          id="hero-read-more-bar"
          onClick={onScrollToPosts}
          className="group relative w-full py-4 sm:py-5 px-6 flex items-center justify-center gap-3 bg-gradient-to-r from-[#0c0c14]/90 via-[#161622]/90 to-[#0c0c14]/90 backdrop-blur-xl border-t border-b border-white/10 hover:border-red-500/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          aria-label="Read more and explore the existing posts"
        >
          {/* Subtle moving metallic highlight across the bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

          {/* Left & right red accent lines */}
          <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-red-500/30" />

          <span className="font-tech text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-white group-hover:text-red-400 flex items-center gap-3 transition-colors duration-200">
            <span>READ MORE</span>
            <ArrowRight className="w-4 h-4 text-red-500 transform group-hover:translate-x-2 transition-transform duration-200 ease-out" />
          </span>

          <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/10 to-red-500/30" />

          {/* Bottom subtle red glow hairline */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </section>
  );
};
