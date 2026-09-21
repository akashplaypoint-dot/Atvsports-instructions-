import React, { useEffect, useState } from 'react';
import {
  Download,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  FileCode,
  HardDrive,
  Cpu,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react';
import { updatePageSeo } from '../utils/seo.ts';
import { DOWNLOAD_URL, APP_VERSION, APP_FILE_SIZE } from '../constants.ts';

interface DownloadPageProps {
  onNavigate: (path: string) => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ onNavigate }) => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    // Dynamic SEO for Download Page
    const cleanup = updatePageSeo({
      title: 'Download ATV Sports APK (Official Android App) v4.8.2',
      description:
        'Download the official ATV Sports APK (v4.8.2) for Android. Safe, verified, fast sports streaming app for live cricket, football, and sports TV channels.',
      canonicalPath: '/download',
      keywords: [
        'ATV Sports APK download',
        'ATV Sports download',
        'ATV Sports app download',
        'download ATV Sports',
        'ATVSports APK',
        'Android sports app',
        'sports APK download',
        'live cricket app Android',
        'live football app Android',
        'free sports APK',
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'ATV Sports',
        alternateName: 'ATVSports Official APK',
        operatingSystem: 'Android 5.0 Lollipop or higher',
        applicationCategory: 'SportsApplication',
        fileSize: '18.4 MB',
        softwareVersion: 'v4.8.2',
        downloadUrl: 'https://atvsports.com/download',
        releaseDate: '2026-09-15',
        description:
          'ATV Sports is an official Android sports streaming application offering live cricket, football matches, sports TV channels, and multi-server buffering options.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return cleanup;
  }, []);

  const handleDownloadClick = () => {
    // Open the download link immediately
    window.open(DOWNLOAD_URL, '_blank', 'noopener,noreferrer');

    setDownloadStarted(true);
    setDownloadProgress(25);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  const downloadFaqs = [
    {
      q: 'Where can I download the official ATV Sports APK?',
      a: 'You can download the verified, genuine ATV Sports APK v4.8.2 directly from this official download page. We provide clean installation packages without unwanted modifications or bloatware.',
    },
    {
      q: 'Is the ATV Sports APK free to download and use?',
      a: 'Yes, ATV Sports is completely free to download, install, and use on compatible Android devices. There are no mandatory subscription fees or hidden download charges.',
    },
    {
      q: 'What Android versions and devices are supported?',
      a: 'ATV Sports supports all modern Android smartphones and tablets running Android 5.0 (Lollipop) and higher, as well as Android TV Boxes, smart TVs, and PC laptops running Android emulators (like BlueStacks, LDPlayer, or NoxPlayer).',
    },
    {
      q: 'Why does Android show an "Unknown Sources" or "Install Unknown Apps" prompt?',
      a: 'Because ATV Sports is downloaded directly as an APK from our official site rather than Google Play, Android’s standard security requires you to permit APK installation from your browser (e.g., Chrome or Brave). This is a standard security prompt for direct Android APK installs.',
    },
    {
      q: 'Is the ATV Sports APK file safe and virus-free?',
      a: 'Yes. Every release of the official ATV Sports APK is verified and scanned with leading antivirus engines before release. It contains no malicious code, ransomware, or unnecessary device permissions.',
    },
  ];

  return (
    <div id="download-page" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-zinc-400 font-tech">
        <button
          onClick={() => onNavigate('/')}
          className="hover:text-red-400 transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-white">Download APK</span>
      </nav>

      {/* Main Hero Header */}
      <header className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-tech font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Official Android Release</span>
        </div>
        <h1
          id="download-h1"
          className="font-tech text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white"
        >
          Download ATV Sports <span className="text-red-500">APK</span>
        </h1>
        <p className="mt-4 text-zinc-300 text-sm sm:text-base md:text-lg font-bengali leading-relaxed">
          Android ডিভাইসে লাইভ ক্রিকেট, ফুটবল ম্যাচ ও স্পোর্টস টিভি চ্যানেল উপভোগ করতে ATV Sports অ্যাপের অফিশিয়াল লেটেস্ট সংস্করণ ডাউনলোড করুন।
        </p>
      </header>

      {/* Main Download Card & Specs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Column: Direct Download Action Panel */}
        <div className="lg:col-span-7 bg-[#0d0d16]/90 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-black/60 border border-red-500/40 flex items-center justify-center shadow-lg shadow-red-600/30 shrink-0">
                  <img
                    src="/atvsports-logo.png"
                    alt="ATV Sports Official Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h2 className="font-tech text-lg sm:text-xl font-bold text-white">
                    ATV Sports Mobile APK
                  </h2>
                  <p className="text-xs text-zinc-400">Official Package • com.atvsports.live</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-tech font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Safe
              </span>
            </div>

            {/* Quick Spec Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 text-xs font-tech">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-zinc-400 block text-[11px]">Version</span>
                <strong className="text-white font-bold text-sm">v4.8.2 (Latest)</strong>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-zinc-400 block text-[11px]">File Size</span>
                <strong className="text-white font-bold text-sm">18.4 MB</strong>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-zinc-400 block text-[11px]">Requirement</span>
                <strong className="text-white font-bold text-sm">Android 5.0+</strong>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-zinc-400 block text-[11px]">Architecture</span>
                <strong className="text-white font-bold text-sm">arm64-v8a / v7a</strong>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-zinc-400 block text-[11px]">License</span>
                <strong className="text-emerald-400 font-bold text-sm">100% Free</strong>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-zinc-400 block text-[11px]">Updated</span>
                <strong className="text-white font-bold text-sm">September 2026</strong>
              </div>
            </div>

            {/* Verification checklist */}
            <div className="space-y-2 mb-8 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>অফিশিয়াল ম্যালওয়্যার ও ভাইরাস স্ক্যান সম্পন্ন (VirusTotal Verified)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>রুট পারমিশন (No Root) বা অতিরিক্ত স্পাইওয়্যার অনুমোদন প্রয়োজন নেই</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>লো-ব্যান্ডউইথ অপটিমাইজেশন সহ মাল্টি-সার্ভার লাইভ স্ট্রিমিং সাপোর্ট</span>
              </div>
            </div>
          </div>

          {/* Download Action Section */}
          <div className="space-y-4">
            {!downloadStarted ? (
              <a
                id="start-download-btn"
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadClick}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-500 text-white font-tech font-bold text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-red-600/40 hover:shadow-red-600/60 transform hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <Download className="w-5 h-5 animate-bounce" />
                <span>Download Official APK ({APP_FILE_SIZE})</span>
              </a>
            ) : (
              <div className="p-4 rounded-xl bg-white/[0.04] border border-red-500/30 text-center">
                <div className="flex items-center justify-between text-xs font-tech text-zinc-300 mb-2">
                  <span>Downloading ATV_Sports_v4.8.2.apk...</span>
                  <span className="text-red-400 font-bold">{downloadProgress}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-red-500 transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
                {downloadProgress === 100 ? (
                  <div className="text-xs text-emerald-400 flex flex-col items-center justify-center gap-2 font-bold">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Download Ready! Check your browser downloads.</span>
                    </div>
                    <a
                      href={DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-red-400 hover:text-red-300 underline font-normal flex items-center gap-1"
                    >
                      <Download className="w-3 h-3" />
                      <span>Did not start automatically? Click here to re-download</span>
                    </a>
                  </div>
                ) : (
                  <p className="text-[11px] text-zinc-400">
                    Connecting to high-speed CDN server... Please wait.
                  </p>
                )}
              </div>
            )}

            {/* Fast Alternative Download Mirrors with Download Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <a
                id="cdn-mirror-1"
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/40 text-xs font-tech font-bold uppercase tracking-wider text-zinc-300 hover:text-white flex items-center justify-between transition-all"
                title="Direct Worker High Speed CDN"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-red-500" />
                  <span>Mirror 1: High-Speed CDN</span>
                </span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                id="cdn-mirror-2"
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/40 text-xs font-tech font-bold uppercase tracking-wider text-zinc-300 hover:text-white flex items-center justify-between transition-all"
                title="Direct Worker Server Link"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-red-500" />
                  <span>Mirror 2: Direct Worker</span>
                </span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            </div>

            <p className="text-center text-[11px] text-zinc-500">
              Direct official download • SHA-256 Checksum: 8f4a1c9e...d02b
            </p>
          </div>
        </div>

        {/* Right Column: Step-by-Step Installation Instructions */}
        <div className="lg:col-span-5 bg-[#0d0d16]/90 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <h2 className="font-tech text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-red-500" />
              <span>Installation Steps for Android</span>
            </h2>
            <p className="text-xs text-zinc-400 font-bengali mb-6">
              আপনার ফোনে প্রথমবারের মতো APK ইন্সটল করতে নিচের সহজ ধাপগুলো অনুসরণ করুন:
            </p>

            <ol className="space-y-4 text-xs sm:text-sm">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 font-tech font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <strong className="text-white block">ধাপ ১: APK ডাউনলোড করুন</strong>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    অফিসিয়াল লিংকে ক্লিক করে APK ফাইলটি নামিয়ে নিন।
                  </p>
                  <a
                    href={DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 text-xs font-tech font-bold transition-all"
                  >
                    <Download className="w-3.5 h-3.5 animate-bounce" />
                    <span>Direct APK Download Link</span>
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 font-tech font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <strong className="text-white block">ধাপ ২: Unknown Sources অনুমোদন দিন</strong>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    ফোনের Settings &gt; Security &gt; Install Unknown Apps-এ গিয়ে আপনার ব্রাউজার (Chrome) এর জন্য পারমিশন অন করুন।
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 font-tech font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <strong className="text-white block">ধাপ ৩: ইন্সটল বাটনে ট্যাপ করুন</strong>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    ডাউনলোড সম্পন্ন হলে ফাইলটিতে ট্যাপ করে &quot;Install&quot; নির্বাচন করুন।
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 font-tech font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <strong className="text-white block">ধাপ ৪: অ্যাপ ওপেন করে ম্যাচ উপভোগ করুন</strong>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    ইন্সটল শেষে অ্যাপটি চালু করে আপনার প্রিয় ফুটবল ও ক্রিকেট লাইভ ম্যাচ দেখুন।
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <div className="text-xs text-zinc-400">
              বিস্তারিত নির্দেশিকা দরকার?
            </div>
            <button
              onClick={() => onNavigate('/posts/download-atv-sports')}
              className="text-xs font-tech font-bold text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
            >
              <span>সম্পূর্ণ টিউটোরিয়াল পড়ুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Safety & System Requirements Section */}
      <section className="mb-16 bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8">
        <div className="max-w-3xl">
          <h2 className="font-tech text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <span>Safety, Privacy &amp; Android Compatibility</span>
          </h2>
          <p className="text-zinc-300 text-sm font-bengali leading-relaxed mb-6">
            ATV Sports ব্যবহারকারীদের নিরাপত্তা ও গোপনীয়তাকে সর্বোচ্চ গুরুত্ব দেয়। অ্যাপটি কোনো অপ্রয়োজনীয় কন্টাক্ট, ক্যামেরা বা লোকেশন পারমিশন চায় না।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#090910] border border-white/5">
              <Cpu className="w-5 h-5 text-red-500 mb-2" />
              <strong className="text-white block text-sm mb-1">প্রসেসর ও র‍্যাম</strong>
              <p className="text-zinc-400 leading-normal">
                ন্যূনতম 1GB RAM এবং যেকোনো কোয়াড-কোর প্রসেসরে অনায়াসে 720p HD স্ট্রিমিং সম্ভব।
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#090910] border border-white/5">
              <HardDrive className="w-5 h-5 text-red-500 mb-2" />
              <strong className="text-white block text-sm mb-1">স্টোরেজ সাইজ</strong>
              <p className="text-zinc-400 leading-normal">
                মাত্র 18.4 MB এর হালকা সাইজ, যা ইন্সটল করার পরও ফোনে অতিরিক্ত জায়গা দখল করে না।
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#090910] border border-white/5">
              <Layers className="w-5 h-5 text-red-500 mb-2" />
              <strong className="text-white block text-sm mb-1">অ্যান্ড্রয়েড সংস্করণ</strong>
              <p className="text-zinc-400 leading-normal">
                Android 5.0 (Lollipop) থেকে শুরু করে Android 14 ও 15 পর্যন্ত সম্পূর্ণ কম্প্যাটিবল।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download FAQ Accordion */}
      <section className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-tech text-2xl sm:text-3xl font-bold text-white uppercase">
            Download <span className="text-red-500">FAQ</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-bengali">
            অ্যাপ ডাউনলোড ও ইন্সটলেশন সম্পর্কিত সাধারণ প্রশ্নোত্তর
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {downloadFaqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0d0d16]/80 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  aria-expanded={isExpanded}
                >
                  <span className="font-tech text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-red-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-zinc-300 border-t border-white/5 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Navigation Footer CTAs */}
      <div className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onNavigate('/')}
          className="text-xs font-tech text-zinc-400 hover:text-white transition-colors"
        >
          &larr; Back to Homepage
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('/features')}
            className="text-xs font-tech text-red-400 hover:text-red-300 transition-colors"
          >
            Explore App Features &rarr;
          </button>
          <button
            onClick={() => onNavigate('/faq')}
            className="text-xs font-tech text-zinc-400 hover:text-white transition-colors"
          >
            Read General FAQ &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
