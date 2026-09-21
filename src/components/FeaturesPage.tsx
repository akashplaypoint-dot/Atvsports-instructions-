import React, { useEffect } from 'react';
import {
  Tv,
  Activity,
  Wifi,
  Server,
  Smartphone,
  Shield,
  Zap,
  ArrowRight,
  Globe,
  Sliders,
  CheckCircle2,
  Sparkles,
  Download,
} from 'lucide-react';
import { updatePageSeo } from '../utils/seo.ts';
import { DOWNLOAD_URL, APP_VERSION } from '../constants.ts';

interface FeaturesPageProps {
  onNavigate: (path: string) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    const cleanup = updatePageSeo({
      title: 'ATV Sports Features – Live Football, Cricket & Sports TV Streaming',
      description:
        'Explore ATV Sports features: live cricket and football streaming, multi-server sports TV channels, adaptive low data mode, and full Android device support.',
      canonicalPath: '/features',
      keywords: [
        'ATV Sports features',
        'live sports streaming',
        'live football streaming',
        'live cricket streaming',
        'sports TV app',
        'live sports channels',
        'watch football live',
        'watch cricket live',
        'sports streaming app Android',
        'low data sports streaming',
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'ATV Sports Features and Sports Coverage',
        url: 'https://atvsports.com/features',
        description:
          'Detailed overview of ATV Sports features including live football matches, cricket leagues, multi-server broadcasting, and low-data mobile streaming.',
      },
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return cleanup;
  }, []);

  return (
    <div id="features-page" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-zinc-400 font-tech">
        <button onClick={() => onNavigate('/')} className="hover:text-red-400 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-white">Features &amp; Sports</span>
      </nav>

      {/* Main Header */}
      <header className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-tech font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h1
          id="features-h1"
          className="font-tech text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white"
        >
          ATV Sports <span className="text-red-500">Features</span> &amp; Coverage
        </h1>
        <p className="mt-4 text-zinc-300 text-sm sm:text-base md:text-lg font-bengali leading-relaxed">
          লাইভ ক্রিকেট, ফুটবল ম্যাচ এবং স্পোর্টস চ্যানেল নির্বিঘ্নে উপভোগ করার জন্য উন্নত প্রযুক্তি এবং সার্ভার আর্কিটেকচার।
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            id="features-header-download-btn"
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-tech font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            title={`Download ATV Sports APK (${APP_VERSION})`}
          >
            <Download className="w-3.5 h-3.5 animate-bounce" />
            <span>Direct Download APK ({APP_VERSION})</span>
          </a>
        </div>
      </header>

      {/* Major Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* Feature 1: Live Football */}
        <div className="bg-[#0d0d16]/90 border border-white/10 hover:border-red-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚽</span>
            </div>
            <h2 className="font-tech text-xl font-bold text-white mb-2">
              Live Football Streaming
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-bengali leading-relaxed">
              ইংলিশ প্রিমিয়ার লিগ (EPL), লা লিগা, উয়েফা চ্যাম্পিয়ন্স লিগ, কোপা আমেরিকা এবং আন্তর্জাতিক প্রীতি ম্যাচের লাইভ কভারেজ ও হাইলাইটস।
            </p>

            <ul className="mt-4 space-y-1.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                <span>ম্যাচ শিডিউল এবং টিম লাইনআপ ট্র্যাকিং</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                <span>HD ও SD ভিডিও রেজোলিউশন সুইচিং</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onNavigate('/posts/watch-sports-atv-sports')}
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-tech font-bold text-red-400 hover:text-red-300 transition-colors"
          >
            <span>ফুটবল লাইভ দেখার নিয়ম পড়ুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Feature 2: Live Cricket */}
        <div className="bg-[#0d0d16]/90 border border-white/10 hover:border-red-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🏏</span>
            </div>
            <h2 className="font-tech text-xl font-bold text-white mb-2">
              Live Cricket Tournaments
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-bengali leading-relaxed">
              ICC ওয়ানডে ও টি-টোয়েন্টি বিশ্বকাপ, আইপিএল (IPL), বিপিএল (BPL), এশিয়া কাপ এবং দ্বিপাক্ষিক টেস্ট সিরিজের লাইভ সম্প্রচার।
            </p>

            <ul className="mt-4 space-y-1.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                <span>রিয়েল-টাইম লাইভ স্কোর ও বল-বাই-বল বিবরণ</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                <span>অটো রি-কানেক্ট ও নিরবচ্ছিন্ন স্ট্রিমিং</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onNavigate('/posts/watch-sports-atv-sports')}
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-tech font-bold text-red-400 hover:text-red-300 transition-colors"
          >
            <span>ক্রিকেট স্ট্রিমিং গাইড দেখুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Feature 3: Live Sports TV Channels */}
        <div className="bg-[#0d0d16]/90 border border-white/10 hover:border-red-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Tv className="w-6 h-6" />
            </div>
            <h2 className="font-tech text-xl font-bold text-white mb-2">
              Sports TV Channels
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-bengali leading-relaxed">
              বিশ্বখ্যাত স্পোর্টস টেলিভিশন চ্যানেলসমূহ ব্রাউজ করে সরাসরি যেকোনো লাইভ ম্যাচ ও বিশেষ ক্রীড়া শো উপভোগের সুবিধা।
            </p>

            <ul className="mt-4 space-y-1.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                <span>ক্যাটাগরি ভিত্তিক চ্যানেল বাছাই</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                <span>ফুল স্ক্রিন ল্যান্ডস্কেপ ও অডিও প্লেব্যাক</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onNavigate('/download')}
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-tech font-bold text-red-400 hover:text-red-300 transition-colors"
          >
            <span>অফিশিয়াল APK ডাউনলোড করুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Advanced Technical Infrastructure Section */}
      <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-10 mb-16">
        <h2 className="font-tech text-2xl sm:text-3xl font-bold text-white mb-8 text-center uppercase">
          Technical <span className="text-red-500">Advantages</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-[#090910] border border-white/5">
            <Server className="w-6 h-6 text-red-500 mb-3" />
            <strong className="text-white block text-sm font-tech font-bold mb-1">
              Multi-Server Architecture
            </strong>
            <p className="text-xs text-zinc-400 font-bengali leading-relaxed">
              একটি সার্ভারে ট্রাফিক বেশি হলে তৎক্ষণাৎ বিকল্প ব্যাকআপ সার্ভারে স্যুইচ করার স্মার্ট রিডানড্যান্সি সিস্টেম।
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#090910] border border-white/5">
            <Wifi className="w-6 h-6 text-red-500 mb-3" />
            <strong className="text-white block text-sm font-tech font-bold mb-1">
              Low-Data Optimization
            </strong>
            <p className="text-xs text-zinc-400 font-bengali leading-relaxed">
              3G বা 4G সীমিত মোবাইল ডেটা ব্যবহারকারীদের জন্য কম মেগাবাইট খরচে নিরবচ্ছিন্ন স্ট্রিমিং মোড।
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#090910] border border-white/5">
            <Smartphone className="w-6 h-6 text-red-500 mb-3" />
            <strong className="text-white block text-sm font-tech font-bold mb-1">
              Universal Android Support
            </strong>
            <p className="text-xs text-zinc-400 font-bengali leading-relaxed">
              অ্যান্ড্রয়েড স্মার্টফোন, ট্যাবলেট এবং অ্যান্ড্রয়েড টিভি বক্সে সহজ ও মসৃণ ইউজার ইন্টারফেস।
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#090910] border border-white/5">
            <Zap className="w-6 h-6 text-red-500 mb-3" />
            <strong className="text-white block text-sm font-tech font-bold mb-1">
              Fast Buffering Engine
            </strong>
            <p className="text-xs text-zinc-400 font-bengali leading-relaxed">
              এইচএলএস (HLS) এডাপ্টিভ বিটরেট প্রযুক্তির মাধ্যমে বাফারিং সমস্যা দূর করে মসৃণ ভিডিও ফ্রেম নিশ্চিতকরণ।
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <div className="bg-gradient-to-r from-red-600/20 via-[#14121a] to-red-600/20 border border-red-500/30 rounded-2xl p-8 text-center max-w-3xl mx-auto shadow-2xl">
        <h2 className="font-tech text-2xl sm:text-3xl font-bold text-white mb-2">
          Ready to Experience ATV Sports?
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 font-bengali mb-6">
          সরাসরি অফিশিয়াল সোর্স থেকে ভেরিফাইড APK v4.8.2 ডাউনলোড করুন এবং যেকোনো লাইভ খেলা উপভোগ করুন।
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            id="features-bottom-download-btn"
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-tech font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
            title={`Download ATV Sports APK (${APP_VERSION})`}
          >
            <Download className="w-4 h-4 animate-bounce" />
            <span>Direct APK Download ({APP_VERSION})</span>
          </a>
          <button
            onClick={() => onNavigate('/download')}
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-tech font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            <span>Install Guide</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('/faq')}
            className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-tech font-bold text-sm uppercase tracking-wider transition-colors"
          >
            FAQ
          </button>
        </div>
      </div>
    </div>
  );
};
