import React, { useState } from 'react';
import {
  Send,
  MessageCircle,
  Users,
  Bot,
  Globe,
  Facebook,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Copy,
  Radio,
  ArrowRight,
  Code2,
  Terminal,
  Share2,
} from 'lucide-react';
import { CONTACT_INFO, DEVELOPER_INFO, DOWNLOAD_URL, APP_VERSION } from '../constants.ts';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(label);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-screen text-white font-tech">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>Community &amp; Support Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Contact &amp; <span className="text-red-500">Official Channels</span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base font-bengali leading-relaxed">
            লাইভ ম্যাচ স্ট্রিমিং আপডেট, নতুন সার্ভার লিংক এবং তাৎক্ষণিক সহায়তার জন্য আমাদের অফিসিয়াল চ্যানেল ও গ্রুপে যুক্ত থাকুন। এছাড়াও প্ল্যাটফর্মের যেকোনো প্রযুক্তিগত অনুসন্ধানে ডেভেলপারের সাথে সরাসরি যোগাযোগ করতে পারেন।
          </p>

          <p className="text-xs text-zinc-500 font-tech">
            Real-time match alerts • Multi-server backup streams • Community discussion • Developer contact
          </p>
        </div>

        {/* Developer Spotlight Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#121220] via-[#0c0c16] to-[#07070b] border border-red-500/30 p-6 sm:p-8 shadow-2xl shadow-red-950/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Developer Identity */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-red-600 to-red-400 p-0.5 shadow-xl shadow-red-600/30 flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-[#0a0a12] rounded-[14px] flex flex-col items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-200">
                      AE
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
                      DEV
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 p-1 rounded-full bg-black border border-green-500/40 shadow-sm" title="Online Developer Status">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                    {DEVELOPER_INFO.name}
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-red-400" />
                    Verified Developer
                  </span>
                </div>

                <p className="text-sm text-zinc-300 font-tech font-semibold flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-red-500" />
                  <span>Platform Architect &amp; Lead Android/Web Developer</span>
                </p>

                <p className="text-xs text-zinc-400 font-bengali leading-relaxed max-w-xl">
                  ATV Sports প্ল্যাটফর্মের ডিজাইন, সার্ভার ম্যানেজমেন্ট ও অ্যাপ্লিকেশন ডেভেলপমেন্টের দায়িত্বে নিয়োজিত। প্রজেক্টের যেকোনো পরামর্শ বা টেকনিক্যাল সহায়তার জন্য সরাসরি যোগাযোগ করতে পারেন।
                </p>
              </div>
            </div>

            {/* Developer Contact CTA Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap lg:flex-col gap-3 shrink-0">
              <a
                id="dev-telegram-contact-btn"
                href={DEVELOPER_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-sky-600/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Message on Telegram</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                id="dev-portfolio-btn"
                href={DEVELOPER_INFO.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-red-500/40 text-zinc-200 hover:text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Globe className="w-4 h-4 text-red-500" />
                <span>Portfolio Website</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                id="dev-facebook-btn"
                href={DEVELOPER_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2] text-blue-300 hover:text-white border border-[#1877F2]/40 text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Official Channels Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide flex items-center gap-2.5">
                <Users className="w-5 h-5 text-red-500" />
                <span>Official ATV Sports Channels &amp; Groups</span>
              </h3>
              <p className="text-xs text-zinc-400 font-tech mt-1">
                Always verify official links to stay safe from unauthorized clones.
              </p>
            </div>

            <button
              onClick={() => handleCopy(window.location.href, 'page')}
              className="flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs text-zinc-300 hover:text-white transition-all"
            >
              {copiedLink === 'page' ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Page Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Share Channels Hub</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* 1. WhatsApp Channel */}
            <div className="group rounded-2xl bg-[#0c0c14] border border-white/10 hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-emerald-950/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Instant Alerts
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold uppercase text-white group-hover:text-emerald-400 transition-colors">
                    WhatsApp Channel
                  </h4>
                  <p className="text-xs text-zinc-400 font-bengali mt-1 leading-relaxed">
                    লাইভ ম্যাচ শুরু হওয়ার নোটিফিকেশন এবং নতুন স্ট্রিমিং সার্ভারের ডিরেক্ট লিংক সরাসরি আপনার হোয়াটসঅ্যাপে পেতে যুক্ত হোন।
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleCopy(CONTACT_INFO.whatsappChannel, 'whatsapp')}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  title="Copy link"
                >
                  {copiedLink === 'whatsapp' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  id="whatsapp-channel-btn"
                  href={CONTACT_INFO.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-emerald-600/30 transition-all"
                >
                  <span>Join WhatsApp Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 2. Primary Telegram Channel */}
            <div className="group rounded-2xl bg-[#0c0c14] border border-white/10 hover:border-sky-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-sky-950/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <Send className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    Main Broadcast
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold uppercase text-white group-hover:text-sky-400 transition-colors">
                      Telegram Channel
                    </h4>
                    <span className="text-xs text-sky-400 font-mono">@Atvsports</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-bengali mt-1 leading-relaxed">
                    অফিসিয়াল প্রধান টেলিগ্রাম চ্যানেল। ক্রিকেট ও ফুটবলের সব ম্যাচ শিডিউল, এইচডি লিংক এবং জরুরী আপডেট এখানে শেয়ার করা হয়।
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleCopy(CONTACT_INFO.telegramChannel, 'tg-channel')}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  title="Copy link"
                >
                  {copiedLink === 'tg-channel' ? (
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  id="telegram-channel-btn"
                  href={CONTACT_INFO.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-sky-600/30 transition-all"
                >
                  <span>Join Main Telegram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 3. Telegram Discussion Group */}
            <div className="group rounded-2xl bg-[#0c0c14] border border-white/10 hover:border-blue-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-950/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Community Chat
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold uppercase text-white group-hover:text-blue-400 transition-colors">
                      Telegram Group
                    </h4>
                    <span className="text-xs text-blue-400 font-mono">@atvsportsgroup</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-bengali mt-1 leading-relaxed">
                    সদস্যদের সাথে লাইভ খেলার আলোচনা, প্রবলেম সলভিং এবং লাইভ স্ট্রিমিং নিয়ে মতামত শেয়ার করার সক্রিয় কমিউনিটি গ্রুপ।
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleCopy(CONTACT_INFO.telegramGroup, 'tg-group')}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  title="Copy link"
                >
                  {copiedLink === 'tg-group' ? (
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  id="telegram-group-btn"
                  href={CONTACT_INFO.telegramGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-600/30 transition-all"
                >
                  <span>Join Discussion Group</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 4. Backup Telegram Channel */}
            <div className="group rounded-2xl bg-[#0c0c14] border border-white/10 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-amber-950/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Emergency Backup
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold uppercase text-white group-hover:text-amber-400 transition-colors">
                      Backup Channel
                    </h4>
                    <span className="text-xs text-amber-400 font-mono">@atvsportsapp</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-bengali mt-1 leading-relaxed">
                    জরুরী বিকল্প ব্যাকআপ চ্যানেল। প্রধান চ্যানেলে কোনো ট্রাফিক বা নেটওয়ার্ক জটিলতা তৈরি হলে এই চ্যানেল থেকে নতুন লিংক পাওয়া যাবে।
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleCopy(CONTACT_INFO.backupTelegramChannel, 'tg-backup')}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  title="Copy link"
                >
                  {copiedLink === 'tg-backup' ? (
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  id="telegram-backup-btn"
                  href={CONTACT_INFO.backupTelegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-amber-600/30 transition-all"
                >
                  <span>Join Backup Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 5. Telegram Bot */}
            <div className="group rounded-2xl bg-[#0c0c14] border border-white/10 hover:border-purple-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-purple-950/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    24/7 Automated
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold uppercase text-white group-hover:text-purple-400 transition-colors">
                      Telegram Bot
                    </h4>
                    <span className="text-xs text-purple-400 font-mono">@atvsports_bot</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-bengali mt-1 leading-relaxed">
                    অটোমেটেড হেল্পার বট। যেকোনো সময় কমান্ড পাঠিয়ে লেটেস্ট APK ডাউনলোড লিংক, ম্যাচ সার্ভার স্ট্যাটাস ও তথ্য সংগ্রহ করুন।
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleCopy(CONTACT_INFO.telegramBot, 'tg-bot')}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  title="Copy link"
                >
                  {copiedLink === 'tg-bot' ? (
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  id="telegram-bot-btn"
                  href={CONTACT_INFO.telegramBot}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-purple-600/30 transition-all"
                >
                  <span>Start Telegram Bot</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 6. Facebook Community Group */}
            <div className="group rounded-2xl bg-[#0c0c14] border border-white/10 hover:border-indigo-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-indigo-950/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    FB Community
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold uppercase text-white group-hover:text-indigo-400 transition-colors">
                    Facebook Group
                  </h4>
                  <p className="text-xs text-zinc-400 font-bengali mt-1 leading-relaxed">
                    অফিসিয়াল ফেসবুক গ্রুপ। ক্রীড়াপ্রেমীদের সাথে ম্যাচ মতামত, ফটো, হাইলাইটস এবং অ্যাপ সংক্রান্ত রিভিউ শেয়ার করার উন্মুক্ত প্ল্যাটফর্ম।
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleCopy(CONTACT_INFO.facebookGroup, 'fb-group')}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  title="Copy link"
                >
                  {copiedLink === 'fb-group' ? (
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  id="facebook-group-btn"
                  href={CONTACT_INFO.facebookGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-indigo-600/30 transition-all"
                >
                  <span>Join Facebook Group</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 7. Facebook Official Page */}
            <div className="group rounded-2xl bg-[#0c0c14] border border-white/10 hover:border-red-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-red-950/20 md:col-span-2 lg:col-span-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform shrink-0">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-bold uppercase text-white group-hover:text-red-400 transition-colors">
                        Facebook Official Page
                      </h4>
                      <span className="text-xs text-red-400 font-mono">@atvsportss</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20">
                        Official Page
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-bengali mt-1 leading-relaxed max-w-3xl">
                      ATV Sports-এর অফিসিয়াল ফেসবুক পেজ। প্রতিটি টুর্নামেন্টের শিডিউল, গুরুত্বপূর্ণ ম্যাচ ঘোষণা এবং অ্যাপ আপডেট নোটিশ সরাসরি ফেসবুক ফিডে পেতে ফলো করুন।
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleCopy(CONTACT_INFO.facebookPage, 'fb-page')}
                    className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    title="Copy link"
                  >
                    {copiedLink === 'fb-page' ? (
                      <CheckCircle2 className="w-4 h-4 text-red-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    id="facebook-page-btn"
                    href={CONTACT_INFO.facebookPage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all"
                  >
                    <span>Follow Official Page</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Help & Direct Download Assistance */}
        <div className="rounded-2xl bg-gradient-to-r from-red-950/40 via-zinc-900/60 to-black/80 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-black uppercase text-white">
              Looking for the latest ATV Sports APK ({APP_VERSION})?
            </h3>
            <p className="text-xs text-zinc-400 font-bengali leading-relaxed max-w-xl">
              আপনি যদি সরাসরি অ্যাপ্লিকেশন ফাইল ডাউনলোড করতে চান অথবা ইনস্টলেশন গাইড পড়তে চান, তাহলে আমাদের ডেডিকেটেড ডাউনলোড পেজে প্রবেশ করুন।
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('/download')}
              className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/10"
            >
              Installation Guide
            </button>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all"
            >
              Direct Download APK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
