import React, { useEffect, useState } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Download,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { updatePageSeo } from '../utils/seo.ts';
import { DOWNLOAD_URL, APP_VERSION } from '../constants.ts';

interface FaqPageProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  category: string;
  q: string;
  a: string;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const allFaqs: FaqItem[] = [
    {
      category: 'General',
      q: 'What is ATV Sports (ATVSports)?',
      a: 'ATV Sports is a sports-focused platform and Android application designed to provide sports fans with access to live match schedules, cricket and football streaming links, sports TV channels, and multi-server viewing options.',
    },
    {
      category: 'General',
      q: 'Is ATV Sports free to use?',
      a: 'Yes, ATV Sports is 100% free to download, install, and use. There are no mandatory monthly subscriptions, hidden costs, or in-app charges required to view live matches.',
    },
    {
      category: 'Download',
      q: 'Where can I download the official ATV Sports APK?',
      a: 'You can download the verified, genuine ATV Sports APK v4.8.2 directly from the official website download page at https://atvsports.com/download. Downloading from this official source ensures the package is clean and free of unauthorized modifications.',
    },
    {
      category: 'Download',
      q: 'How do I install the ATV Sports APK on Android?',
      a: '1. Download the APK file from https://atvsports.com/download. 2. Enable "Install Unknown Apps" for your browser in Android Settings > Security. 3. Open your Downloads folder and tap the downloaded APK file. 4. Tap "Install" and open the app once installation finishes.',
    },
    {
      category: 'Download',
      q: 'Why does Android display an "Unknown Sources" warning?',
      a: 'Android displays this standard security verification whenever an app is downloaded as an APK from a web browser instead of Google Play. It is a default Android prompt; simply tap "Allow from this source" in your settings to proceed.',
    },
    {
      category: 'Download',
      q: 'Is the ATV Sports APK file safe and virus-free?',
      a: 'Yes. Every release of the official ATV Sports APK is verified and scanned with leading antivirus engines before release. It contains no malicious code or invasive spyware.',
    },
    {
      category: 'Sports & TV',
      q: 'What sports are available to watch on ATV Sports?',
      a: 'ATV Sports primarily focuses on live football (English Premier League, La Liga, UEFA Champions League, international tournaments) and live cricket (ICC World Cups, IPL, BPL, Test & ODI bilateral series), along with 24/7 sports television channels.',
    },
    {
      category: 'Sports & TV',
      q: 'How do I switch servers if a live stream is buffering?',
      a: 'In the ATV Sports video player, tap on the "Server" or "Link" selector icon located beneath or on the player interface. Select an alternate streaming server (e.g., Server 2 or Server 3) for faster loading and smoother playback.',
    },
    {
      category: 'Devices',
      q: 'Which Android versions are supported by ATV Sports?',
      a: 'ATV Sports supports Android 5.0 (Lollipop) and higher, including Android 10, 11, 12, 13, 14, and 15.',
    },
    {
      category: 'Devices',
      q: 'Can I use ATV Sports on a Windows PC or Mac Laptop?',
      a: 'Yes. You can run the ATV Sports Android APK on your PC or Mac using popular Android emulators such as BlueStacks, LDPlayer, or NoxPlayer. Follow our step-by-step PC emulator setup guide for detailed instructions.',
    },
    {
      category: 'Devices',
      q: 'Does ATV Sports work on Android TV Box or Smart TV?',
      a: 'Yes, ATV Sports can be sideloaded onto Android TV boxes, Fire TV sticks, and Android-based Smart TVs using a USB flash drive or wireless file-sharing apps like Send Files to TV.',
    },
    {
      category: 'Data & Speed',
      q: 'How much internet data does ATV Sports use when watching a match?',
      a: 'On 360p or 480p SD quality, ATV Sports consumes approximately 250MB to 400MB per hour. On 720p HD quality, it typically consumes around 800MB to 1.2GB per hour. You can manually adjust the video resolution to save mobile internet data.',
    },
    {
      category: 'Data & Speed',
      q: 'How do I update ATV Sports when a new version is released?',
      a: 'When an update is released, the app will notify you via an in-app banner. You can also visit https://atvsports.com/download at any time to download and install the latest APK over your existing installation without losing settings.',
    },
  ];

  const categories = ['All', 'General', 'Download', 'Sports & TV', 'Devices', 'Data & Speed'];

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesQuery =
      !searchQuery.trim() ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesQuery;
  });

  useEffect(() => {
    // Generate Schema.org FAQPage structured data
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: allFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    };

    const cleanup = updatePageSeo({
      title: 'ATV Sports FAQ – Frequently Asked Questions & Answers',
      description:
        'Find answers to all frequently asked questions about ATV Sports: official APK download, installation steps, live cricket/football streaming, PC emulator, and data optimization.',
      canonicalPath: '/faq',
      keywords: [
        'ATV Sports FAQ',
        'what is ATV Sports',
        'how to download ATV Sports',
        'how to install ATV Sports APK',
        'is ATV Sports free',
        'ATV Sports Android download',
        'ATV Sports features',
        'ATV Sports support',
      ],
      schema: faqSchema,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return cleanup;
  }, []);

  return (
    <div id="faq-page" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-zinc-400 font-tech">
        <button onClick={() => onNavigate('/')} className="hover:text-red-400 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-white">FAQ</span>
      </nav>

      {/* Header */}
      <header className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-tech font-bold uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Support &amp; Answers</span>
        </div>
        <h1
          id="faq-h1"
          className="font-tech text-3xl sm:text-5xl font-black uppercase tracking-tight text-white"
        >
          Frequently Asked <span className="text-red-500">Questions</span>
        </h1>
        <p className="mt-3 text-zinc-300 text-sm sm:text-base font-bengali leading-relaxed">
          ATV Sports অ্যাপ ডাউনলোড, ইন্সটলেশন, লাইভ স্পোর্টস স্ট্রিমিং ও সেটিংস সম্পর্কিত সকল প্রশ্নের সরাসরি উত্তর।
        </p>
      </header>

      {/* Search Input */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search question keywords (e.g., APK, cricket, PC, unknown sources, data)..."
          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0d0d16] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/60 transition-all font-tech"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg font-tech text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Questions Accordion List */}
      <div className="space-y-3 mb-16">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0d0d16]/80 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-tech font-bold uppercase bg-white/5 text-red-400 border border-red-500/20 shrink-0">
                      {item.category}
                    </span>
                    <span className="font-tech text-sm sm:text-base font-bold text-white">
                      {item.q}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-red-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-zinc-300 border-t border-white/5 pt-3 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center bg-[#0d0d16] rounded-xl border border-white/10 text-zinc-400">
            No questions found matching &quot;{searchQuery}&quot;. Try a different search term or view all questions.
          </div>
        )}
      </div>

      {/* Bottom Download Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-600/10 via-[#0e0e18] to-red-600/10 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="text-left">
          <h2 className="font-tech text-xl font-bold text-white">
            Looking to Download ATV Sports APK?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-bengali mt-1">
            অফিশিয়াল লেটেস্ট ভার্সন {APP_VERSION} এখনই আপনার ফোনে নামিয়ে নিন।
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            id="faq-direct-download-btn"
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-tech font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 cursor-pointer"
            title={`Download ATV Sports APK (${APP_VERSION})`}
          >
            <Download className="w-4 h-4 animate-bounce" />
            <span>Direct APK Download</span>
          </a>
          <button
            onClick={() => onNavigate('/download')}
            className="px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-tech font-bold text-xs uppercase tracking-wider transition-colors border border-white/10"
          >
            <span>Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
};
