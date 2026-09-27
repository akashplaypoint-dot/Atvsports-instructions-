import React from 'react';
import {
  Send,
  MessageCircle,
  Users,
  Bot,
  Facebook,
  Globe,
  ExternalLink,
  ShieldCheck,
  Radio,
  ArrowRight,
} from 'lucide-react';
import { CONTACT_INFO, DEVELOPER_INFO } from '../constants.ts';

interface CommunityContactSectionProps {
  onNavigate: (path: string) => void;
}

export const CommunityContactSection: React.FC<CommunityContactSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="community-contact"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-tech font-bold uppercase tracking-widest">
              <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>Official Community &amp; Support</span>
            </div>

            <h2 className="font-tech text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Connect With <span className="text-red-500">ATV Sports</span>
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm font-bengali leading-relaxed max-w-2xl">
              লাইভ খেলার লিংক, সার্ভার আপডেট ও ম্যাচ নোটিফিকেশন পেতে আমাদের অফিশিয়াল হোয়াটসঅ্যাপ ও টেলিগ্রাম চ্যানেলে যোগ দিন। কোনো সমস্যা হলে সরাসরি কমিউনিটি বা ডেভেলপারের সাথে যোগাযোগ করুন।
            </p>
          </div>

          <button
            onClick={() => onNavigate('/contact')}
            className="flex items-center gap-2 text-xs font-tech font-bold uppercase tracking-wider text-red-400 hover:text-red-300 self-start md:self-auto group transition-colors"
          >
            <span>View All Channels &amp; Developer Info</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Quick Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* WhatsApp Channel */}
          <a
            id="home-whatsapp-channel"
            href={CONTACT_INFO.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[#0c0c14] border border-white/5 hover:border-emerald-500/40 hover:bg-[#0f1414] transition-all duration-200 flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-tech font-bold uppercase text-emerald-400 tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Instant
                </span>
              </div>
              <div>
                <h3 className="font-tech text-base font-bold text-white uppercase group-hover:text-emerald-400 transition-colors">
                  WhatsApp Channel
                </h3>
                <p className="text-xs text-zinc-400 font-bengali mt-1 leading-snug">
                  ম্যাচ শুরু হওয়ার সাথে সাথে সরাসরি লিঙ্ক ও অ্যালার্ট।
                </p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-xs font-tech font-bold uppercase text-emerald-400">
              <span>Join Channel</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Telegram Channel */}
          <a
            id="home-telegram-channel"
            href={CONTACT_INFO.telegramChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[#0c0c14] border border-white/5 hover:border-sky-500/40 hover:bg-[#0c1219] transition-all duration-200 flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Send className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-tech font-bold uppercase text-sky-400 tracking-wider bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                  Main
                </span>
              </div>
              <div>
                <h3 className="font-tech text-base font-bold text-white uppercase group-hover:text-sky-400 transition-colors">
                  Telegram Channel
                </h3>
                <p className="text-xs text-zinc-400 font-bengali mt-1 leading-snug">
                  অফিসিয়াল প্রধান চ্যানেল (@Atvsports) - সমস্ত লাইভ লিংক।
                </p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-xs font-tech font-bold uppercase text-sky-400">
              <span>Join Channel</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Telegram Group */}
          <a
            id="home-telegram-group"
            href={CONTACT_INFO.telegramGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[#0c0c14] border border-white/5 hover:border-blue-500/40 hover:bg-[#0c101c] transition-all duration-200 flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-tech font-bold uppercase text-blue-400 tracking-wider bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                  Chat
                </span>
              </div>
              <div>
                <h3 className="font-tech text-base font-bold text-white uppercase group-hover:text-blue-400 transition-colors">
                  Telegram Group
                </h3>
                <p className="text-xs text-zinc-400 font-bengali mt-1 leading-snug">
                  সদস্যদের সক্রিয় আলোচনা (@atvsportsgroup) ও হেল্প ডেস্ক।
                </p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-xs font-tech font-bold uppercase text-blue-400">
              <span>Join Group</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Facebook Official Page & Group */}
          <a
            id="home-facebook-page"
            href={CONTACT_INFO.facebookPage}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[#0c0c14] border border-white/5 hover:border-red-500/40 hover:bg-[#150a0a] transition-all duration-200 flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-tech font-bold uppercase text-red-400 tracking-wider bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                  Social
                </span>
              </div>
              <div>
                <h3 className="font-tech text-base font-bold text-white uppercase group-hover:text-red-400 transition-colors">
                  Facebook Page
                </h3>
                <p className="text-xs text-zinc-400 font-bengali mt-1 leading-snug">
                  অফিসিয়াল ফেসবুক পেজ ও আপডেট নোটিশ (@atvsportss)।
                </p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-xs font-tech font-bold uppercase text-red-400">
              <span>Follow Page</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* Developer Info Mini Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0c0c16] via-[#10101c] to-[#0c0c16] border border-white/10 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center font-tech font-black text-red-400 text-lg shadow-md shrink-0">
              AE
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="font-tech text-sm font-bold text-white uppercase tracking-wider">
                  Developer: {DEVELOPER_INFO.name}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-tech font-bold uppercase bg-green-500/10 text-green-400 border border-green-500/20">
                  Verified Creator
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-bengali mt-0.5">
                প্ল্যাটফর্ম টেকনিক্যাল সাপোর্ট, কাস্টমাইজেশন ও নতুন ফিচার সংক্রান্ত তথ্য পেতে যোগাযোগ করুন।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 flex-wrap justify-center">
            <a
              href={DEVELOPER_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-sky-600/20 hover:bg-sky-600 text-sky-400 hover:text-white border border-sky-500/30 text-xs font-tech font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram DM</span>
            </a>
            <a
              href={DEVELOPER_INFO.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-tech font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-red-500" />
              <span>Portfolio</span>
            </a>
            <a
              href={DEVELOPER_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 text-xs font-tech font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
