import React from 'react';
import { Flame, Radio, Tv, Monitor, ArrowRight, Gauge } from 'lucide-react';

interface SportsCategoriesSectionProps {
  onNavigate: (path: string) => void;
}

export const SportsCategoriesSection: React.FC<SportsCategoriesSectionProps> = ({
  onNavigate,
}) => {
  const sports = [
    {
      title: 'Live Football Streaming',
      bengaliSubtitle: 'ফুটবল ম্যাচ ও আন্তর্জাতিক টুর্নামেন্ট',
      description:
        'Stream European football leagues, continental championships, and FIFA world cup qualifiers with multi-server playback and real-time score indicators.',
      icon: Flame,
      tag: 'Football',
      guideSlug: 'watch-sports-atv-sports',
    },
    {
      title: 'Live Cricket Coverage',
      bengaliSubtitle: 'আন্তর্জাতিক ক্রিকেট ও টি-টোয়েন্টি টুর্নামেন্ট',
      description:
        'Follow international bilateral tours, ICC events, IPL, BPL, and T20 leagues with dedicated low-latency sports feeds and ball-by-ball stream switches.',
      icon: Radio,
      tag: 'Cricket',
      guideSlug: 'watch-sports-atv-sports',
    },
    {
      title: '24/7 Sports TV Channels',
      bengaliSubtitle: 'সার্বক্ষণিক স্পোর্টস ব্রডকাস্ট চ্যানেল',
      description:
        'Access live sports TV networks and sports news broadcasts directly inside the application, offering comprehensive match pre-shows and analysis.',
      icon: Tv,
      tag: 'TV Channels',
      guideSlug: 'watch-sports-atv-sports',
    },
    {
      title: 'Low-Data Mobile Streaming',
      bengaliSubtitle: 'কম মেগাবাইট খরচে দীর্ঘক্ষণ খেলা',
      description:
        'Optimized standard-definition (SD 360p / 480p) streaming allows users to conserve mobile data while maintaining sharp, legible game action.',
      icon: Gauge,
      tag: 'Data Saver',
      guideSlug: 'save-data-atv-sports',
    },
  ];

  return (
    <section
      id="sports-categories"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-tech font-bold uppercase tracking-widest mb-3">
            <span>Live Coverage</span>
          </div>
          <h2
            id="categories-heading"
            className="font-tech text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white"
          >
            Live Sports &amp; <span className="text-red-500">Content Channels</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-sm font-bengali max-w-2xl">
            ক্রিকেট, ফুটবল ও স্পোর্টস নেটওয়ার্কের জন্য ATV Sports-এর সার্বিক কন্টেন্ট বিন্যাস।
          </p>
        </div>

        <a
          href="/features"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/features');
          }}
          className="inline-flex items-center gap-2 text-xs font-tech font-bold uppercase text-red-400 hover:text-red-300 transition-colors"
        >
          <span>View Detailed Features</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sports.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0c0c14] border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-tech text-base font-bold text-white uppercase mb-1">
                  {item.title}
                </h3>
                <h4 className="font-bengali text-xs text-red-400/80 mb-3 font-medium">
                  {item.bengaliSubtitle}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-tech">
                  {item.description}
                </p>
              </div>

              <a
                href={`/posts/${item.guideSlug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/posts/${item.guideSlug}`);
                }}
                className="pt-3 border-t border-white/5 inline-flex items-center gap-1.5 text-xs font-tech font-bold uppercase text-zinc-300 hover:text-white transition-colors"
              >
                <span>Read Stream Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-500" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
