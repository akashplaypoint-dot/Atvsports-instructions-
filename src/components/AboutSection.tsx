import React from 'react';
import {
  Smartphone,
  Tv,
  Monitor,
  ShieldCheck,
  Zap,
  Download,
  ArrowRight,
} from 'lucide-react';
import { DOWNLOAD_URL, APP_VERSION } from '../constants.ts';

interface AboutSectionProps {
  onNavigate: (path: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="about-atv-sports"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: About ATV Sports copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-tech font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>Platform Overview</span>
          </div>

          <h2
            id="about-heading"
            className="font-tech text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight"
          >
            What is <span className="text-red-500">ATV Sports</span>?
          </h2>

          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-bengali">
            <p>
              <strong className="text-white font-tech">ATV Sports</strong> (বা <strong>ATVSports</strong>) হলো লাইভ স্পোর্টস ও আন্তর্জাতিক টিভি চ্যানেল দেখার একটি বিশেষায়িত অ্যান্ড্রয়েড অ্যাপ্লিকেশন। এটি বিশ্বব্যাপী ক্রিকেট ভক্ত এবং ফুটবলপ্রেমীদের জন্য একাধিক হাই-স্পিড স্ট্রিমিং সার্ভার, লাইভ ম্যাচ শিডিউল এবং স্পোর্টস নেটওয়ার্ক একত্রিত করে।
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm font-tech leading-relaxed">
              Designed specifically for mobile devices and smart displays, ATV Sports eliminates complicated setup procedures. Users can access live football tournaments, international bilateral cricket series, and dedicated sports TV broadcasts with low-latency streaming and adaptive resolution technology.
            </p>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#0c0c14] border border-white/5">
              <span className="text-xs font-tech font-bold text-red-400 uppercase block mb-1">
                Multi-Server
              </span>
              <p className="text-[11px] text-zinc-400 font-tech">
                Redundant streaming links prevent buffering during high-traffic matches.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#0c0c14] border border-white/5">
              <span className="text-xs font-tech font-bold text-red-400 uppercase block mb-1">
                Data Saver
              </span>
              <p className="text-[11px] text-zinc-400 font-tech">
                SD 360p/480p streams save up to 60% bandwidth on mobile networks.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#0c0c14] border border-white/5">
              <span className="text-xs font-tech font-bold text-red-400 uppercase block mb-1">
                Universal APK
              </span>
              <p className="text-[11px] text-zinc-400 font-tech">
                Compatible with all modern Android phones, TV boxes, and PC emulators.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              id="about-direct-download-btn"
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-tech text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 cursor-pointer"
              title={`Download ATV Sports APK (${APP_VERSION})`}
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Download APK ({APP_VERSION})</span>
            </a>
            <a
              href="/download"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/download');
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-tech text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Install Steps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/features"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/features');
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white font-tech text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Features</span>
            </a>
          </div>
        </div>

        {/* Right: Supported Devices Card */}
        <div className="lg:col-span-5 bg-[#0d0d16] border border-white/10 rounded-2xl p-6 sm:p-8 relative">
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/10">
            <ShieldCheck className="w-5 h-5 text-red-500" />
            <h3 className="font-tech text-base font-bold uppercase text-white tracking-wider">
              Supported Devices &amp; Environments
            </h3>
          </div>

          <div className="space-y-4">
            {/* Device 1 */}
            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-black/40 border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-tech text-sm font-bold text-white uppercase">
                  Android Phones &amp; Tablets
                </h4>
                <p className="text-xs text-zinc-400 font-tech mt-0.5">
                  Samsung, Xiaomi, Vivo, Oppo, Realme, OnePlus, Tecno, Infinix (Android 5.0 to Android 15+).
                </p>
              </div>
            </div>

            {/* Device 2 */}
            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-black/40 border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-tech text-sm font-bold text-white uppercase">
                  Smart TVs &amp; TV Boxes
                </h4>
                <p className="text-xs text-zinc-400 font-tech mt-0.5">
                  Android TV, Google TV, Fire TV Stick, Xiaomi Mi Box, and generic Android set-top boxes.
                </p>
              </div>
            </div>

            {/* Device 3 */}
            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-black/40 border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-tech text-sm font-bold text-white uppercase">
                  Windows PC &amp; Mac (via Emulator)
                </h4>
                <p className="text-xs text-zinc-400 font-tech mt-0.5">
                  LDPlayer, BlueStacks, NoxPlayer with 60 FPS FHD fullscreen monitor playback.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-zinc-500 font-tech text-center">
            SAFE • NO ROOT REQUIRED • CLEAN AND VERIFIED RELEASE
          </div>
        </div>
      </div>
    </section>
  );
};
