import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle2, Download } from 'lucide-react';
import { DOWNLOAD_URL, APP_VERSION } from '../constants.ts';

export interface FaqItem {
  question: string;
  bengaliQuestion: string;
  answer: string;
  bengaliAnswer: string;
  category: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'What is ATV Sports and what does the app do?',
    bengaliQuestion: 'ATV Sports কী এবং এই অ্যাপটির মূল সুবিধাগুলো কী?',
    answer:
      'ATV Sports is a specialized Android sports application designed for watching live sports, cricket tournaments, football league matches, and sports TV channels with multi-server playback redundancy and data-saving options.',
    bengaliAnswer:
      'ATV Sports হলো একটি অ্যান্ড্রয়েড অ্যাপ্লিকেশন যার মাধ্যমে সরাসরি লাইভ ক্রিকেট, ফুটবল এবং বিভিন্ন স্পোর্টস টিভি চ্যানেল উপভোগ করা যায়। এতে একাধিক ব্যাকআপ সার্ভার ও ডাটা সাশ্রয়ী মোড রয়েছে।',
    category: 'General',
  },
  {
    question: 'How can I download the official ATV Sports APK for Android?',
    bengaliQuestion: 'কীভাবে অ্যান্ড্রয়েডে অফিসিয়াল ATV Sports APK ডাউনলোড করবেন?',
    answer:
      'You can download the latest verified APK directly from our official /download page. After downloading, allow "Install Unknown Apps" in your Android Settings, tap the downloaded APK, and complete the installation.',
    bengaliAnswer:
      'আমাদের অফিসিয়াল /download পেজ থেকে নিরাপদ APK ফাইলটি নামিয়ে নিন। ফোনের সেটিংসে Unknown Apps অনুমোদন দিয়ে ফাইলটিতে ট্যাপ করলেই ইনস্টলেশন সম্পন্ন হবে।',
    category: 'Installation',
  },
  {
    question: 'Is ATV Sports free to download and use?',
    bengaliQuestion: 'ATV Sports অ্যাপটি কি সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায়?',
    answer:
      'Yes. The ATV Sports application is completely free to download and use on supported Android smartphones, tablets, and smart TVs without any hidden subscriptions.',
    bengaliAnswer:
      'হ্যাঁ, এটি সম্পূর্ণ ফ্রি একটি অ্যাপ্লিকেশন। অ্যান্ড্রয়েড ফোন বা ট্যাবলেটে কোনো সাবস্ক্রিপশন ফি ছাড়াই এটি ব্যবহার করা যায়।',
    category: 'General',
  },
  {
    question: 'How do I watch live cricket and football matches without buffering?',
    bengaliQuestion: 'বাফারিং ছাড়া কীভাবে লাইভ ক্রিকেট ও ফুটবল ম্যাচ দেখবেন?',
    answer:
      'Select the active live match from the app home screen and test the alternate streaming servers (Server 1, Server 2, or HD). Ensure a stable mobile or Wi-Fi connection of at least 3–5 Mbps.',
    bengaliAnswer:
      'ম্যাচ শুরু হলে হোমস্ক্রিন থেকে ইভেন্টটি সিলেক্ট করুন এবং অল্টারনেট সার্ভারগুলোর (Server 1, Server 2) মধ্যে যেটি দ্রুত সেটি বাছাই করুন। অন্তত ৩-৫ Mbps ইন্টারনেট গতি থাকলে বাফারিং ছাড়াই খেলা দেখা যায়।',
    category: 'Streaming',
  },
  {
    question: 'Can I use ATV Sports on a Windows PC or Laptop?',
    bengaliQuestion: 'কম্পিউটার বা ল্যাপটপে কি ATV Sports ব্যবহার করা সম্ভব?',
    answer:
      'Yes. You can run ATV Sports on Windows or Mac computers using lightweight Android emulators such as LDPlayer, BlueStacks, or NoxPlayer. Simply drag and drop the APK into the emulator window.',
    bengaliAnswer:
      'হ্যাঁ, LDPlayer বা BlueStacks-এর মতো অ্যান্ড্রয়েড এমুলেটর ইনস্টল করে আপনি কম্পিউটারের বড় মনিটরে ফুল এইচডি রেজোলিউশনে খেলা উপভোগ করতে পারবেন।',
    category: 'Devices',
  },
  {
    question: 'How can I save mobile data while watching sports on ATV Sports?',
    bengaliQuestion: 'মোবাইল ডাটা সাশ্রয় করে কীভাবে দীর্ঘক্ষণ খেলা দেখবেন?',
    answer:
      'Switch the video stream resolution to standard definition (360p or 480p SD), enable your smartphone built-in "Data Saver" setting, and avoid continuous server-switching which reloads video buffers.',
    bengaliAnswer:
      'প্লেয়ারে 360p বা 480p SD রেজোলিউশন সিলেক্ট করুন এবং ফোনের ডেটা সেভার অন রাখুন। এতে প্রতি ঘণ্টায় মাত্র ৩০০-৪৫০ মেগাবাইট খরচে খেলা দেখা সম্ভব।',
    category: 'Data Optimization',
  },
  {
    question: 'Why does Android warn "File might be harmful" when downloading?',
    bengaliQuestion: 'ডাউনলোডের সময় "File might be harmful" সতর্কবার্তা কেন দেখায়?',
    answer:
      'Android displays this standard security notice whenever downloading any APK outside the Google Play Store. The official APK from atvsports.com is clean, malware-free, and requires no device root.',
    bengaliAnswer:
      'প্লে স্টোরের বাইরে যেকোনো APK ডাউনলোড করার সময় অ্যান্ড্রয়েড এই সাধারণ নোটিশ দেখায়। আমাদের অফিসিয়াল ওয়েবসাইট থেকে ডাউনলোডকৃত ফাইলটি নিরাপদ ও ভাইরাস মুক্ত।',
    category: 'Security',
  },
  {
    question: 'How do I update ATV Sports to the latest version?',
    bengaliQuestion: 'অ্যাপটির সর্বশেষ আপডেট কীভাবে গ্রহণ করবেন?',
    answer:
      'Simply download the newest APK build from the website and tap Install. The update will safely overwrite the existing version without deleting your channel favorites or configuration.',
    bengaliAnswer:
      'অফিসিয়াল ওয়েবসাইট থেকে নতুন APK ফাইল নামিয়ে সরাসরি ইনস্টল করুন। পুরোনো অ্যাপটি আনইনস্টল করার প্রয়োজন নেই, সেটিংস স্বয়ংক্রিয়ভাবে বজায় থাকবে।',
    category: 'Maintenance',
  },
];

interface FaqSectionProps {
  maxItems?: number;
  showAllLink?: boolean;
  onNavigate?: (path: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  maxItems,
  showAllLink = false,
  onNavigate,
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const items = maxItems ? FAQ_DATA.slice(0, maxItems) : FAQ_DATA;

  return (
    <section id="faq-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-tech font-bold uppercase tracking-widest mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge &amp; Support</span>
        </div>
        <h2
          id="faq-heading"
          className="font-tech text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white"
        >
          Frequently Asked <span className="text-red-500">Questions</span>
        </h2>
        <p className="mt-2 text-zinc-400 text-sm font-bengali">
          ATV Sports অ্যাপ ডাউনলোড, ইন্সটলেশন, লাইভ ম্যাচ স্ট্রিমিং ও নিরাপত্তা সম্পর্কিত প্রশ্নোত্তর।
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#0c0c14] overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-white/[0.02] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
                aria-expanded={isOpen}
              >
                <div>
                  <h3 className="font-tech text-sm sm:text-base font-bold text-white tracking-wide">
                    {item.question}
                  </h3>
                  <p className="font-bengali text-xs text-red-400/80 mt-1">
                    {item.bengaliQuestion}
                  </p>
                </div>
                <div
                  className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-red-600/20 border-red-500/40 text-red-400' : 'text-zinc-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-zinc-300 font-tech leading-relaxed border-t border-white/5">
                  <p className="mb-2">{item.answer}</p>
                  <p className="font-bengali text-xs text-zinc-400 leading-normal mb-3">
                    {item.bengaliAnswer}
                  </p>
                  {item.category === 'Installation' && (
                    <a
                      href={DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-tech font-bold uppercase transition-all shadow-md shadow-red-600/30"
                    >
                      <Download className="w-3.5 h-3.5 animate-bounce" />
                      <span>Direct Download APK ({APP_VERSION})</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
        <a
          id="faq-section-direct-download-btn"
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-tech text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95"
          title={`Download ATV Sports APK (${APP_VERSION})`}
        >
          <Download className="w-3.5 h-3.5 animate-bounce" />
          <span>Direct APK Download</span>
        </a>

        {showAllLink && onNavigate && (
          <a
            href="/faq"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/faq');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-tech text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>View All FAQ</span>
          </a>
        )}
      </div>
    </section>
  );
};
