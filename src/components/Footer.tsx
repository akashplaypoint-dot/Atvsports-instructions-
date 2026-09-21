import React from 'react';
import { Radio, ShieldCheck, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles.ts';
import { Article } from '../types.ts';
import { DOWNLOAD_URL, APP_VERSION } from '../constants.ts';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSearch }) => {
  return (
    <footer
      id="main-footer"
      className="border-t border-white/10 bg-[#06060c] text-zinc-400 font-tech py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand & Mission */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-black/50 border border-red-500/40 flex items-center justify-center shadow-md shadow-red-600/20 shrink-0">
              <img
                src="/atvsports-logo.png"
                alt="ATV Sports Official Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-tech text-xl font-black uppercase tracking-wider text-white">
              ATV <span className="text-red-500">SPORTS</span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-bengali leading-relaxed">
            লাইভ ফুটবল, ক্রিকেট ম্যাচ ও স্পোর্টস টিভি চ্যানেল উপভোগ করার আধুনিক অ্যান্ড্রয়েড অ্যাপ্লিকেশন ও টেকনিক্যাল গাইড প্ল্যাটফর্ম।
          </p>
          <div className="flex flex-col gap-2 pt-1">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
              <span>Verified Android Release ({APP_VERSION})</span>
            </div>
            <a
              id="footer-brand-direct-download"
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 text-xs font-tech font-bold uppercase transition-all"
              title={`Download ATV Sports APK (${APP_VERSION})`}
            >
              <Download className="w-3.5 h-3.5 animate-bounce" />
              <span>Direct Download APK</span>
            </a>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h3 className="font-tech text-sm font-bold uppercase tracking-wider text-white mb-4">
            Navigation &amp; Pages
          </h3>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/');
                }}
                className="hover:text-white transition-colors"
              >
                Home Page
              </a>
            </li>
            <li>
              <a
                id="footer-nav-direct-download"
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 font-bold transition-colors flex items-center gap-1.5"
                title="Direct Download APK File"
              >
                <Download className="w-3.5 h-3.5 animate-bounce" />
                <span>Direct Download APK ({APP_VERSION})</span>
              </a>
            </li>
            <li>
              <a
                href="/download"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/download');
                }}
                className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <ArrowRight className="w-3 h-3 text-red-500" />
                <span>Installation Guide &amp; Details</span>
              </a>
            </li>
            <li>
              <a
                href="/features"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/features');
                }}
                className="hover:text-white transition-colors"
              >
                App Features &amp; Channels
              </a>
            </li>
            <li>
              <a
                href="/posts"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/posts');
                }}
                className="hover:text-white transition-colors"
              >
                Setup &amp; Optimization Guides
              </a>
            </li>
            <li>
              <a
                href="/faq"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/faq');
                }}
                className="hover:text-white transition-colors"
              >
                FAQ &amp; Troubleshooting
              </a>
            </li>
            <li>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>XML Sitemap</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            </li>
          </ul>
        </div>

        {/* Guides Links for deep crawling */}
        <div className="lg:col-span-2">
          <h3 className="font-tech text-sm font-bold uppercase tracking-wider text-white mb-4">
            Featured Instructional Guides
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            {ARTICLES.map((art: Article) => (
              <li key={art.id}>
                <a
                  href={`/posts/${art.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/posts/${art.slug}`);
                  }}
                  className="text-zinc-400 hover:text-red-400 transition-colors flex items-start gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{art.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Safety Disclaimer */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} ATV SPORTS. All rights reserved.</p>
        <p className="max-w-xl text-[11px] leading-relaxed text-zinc-400">
          Disclaimer: ATV Sports provides sports scheduling and streaming connectivity guides. Users are encouraged to always obtain software through official verified channels and maintain standard device security.
        </p>
      </div>
    </footer>
  );
};
