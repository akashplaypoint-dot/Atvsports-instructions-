import React, { useState } from 'react';
import { Search, Compass, ShieldCheck, Download } from 'lucide-react';
import { Article } from '../types.ts';
import { PostCard } from './PostCard.tsx';
import { DOWNLOAD_URL, APP_VERSION } from '../constants.ts';

interface PostsSectionProps {
  articles: Article[];
  onSelectArticle: (slug: string) => void;
  onOpenSearchModal: () => void;
}

export const PostsSection: React.FC<PostsSectionProps> = ({
  articles,
  onSelectArticle,
  onOpenSearchModal,
}) => {
  const [inlineFilter, setInlineFilter] = useState('');

  const filteredArticles = articles.filter((art) => {
    if (!inlineFilter.trim()) return true;
    const query = inlineFilter.toLowerCase().trim();
    return (
      art.title.toLowerCase().includes(query) ||
      art.excerpt.toLowerCase().includes(query) ||
      art.slug.toLowerCase().includes(query) ||
      art.category.toLowerCase().includes(query) ||
      art.keywords.some((kw) => kw.toLowerCase().includes(query))
    );
  });

  return (
    <section id="posts" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow accents */}
      <div className="absolute top-12 left-1/3 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-tech font-bold uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Official Knowledge Base</span>
          </div>
          <h2
            id="posts-heading"
            className="font-tech text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white"
          >
            ATV SPORTS <span className="text-red-500">POSTS &amp; GUIDES</span>
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base font-bengali max-w-2xl">
            অ্যাপ ডাউনলোড, লাইভ স্ট্রিমিং, পিসি এমুলেটর সেটআপ এবং ডাটা সাশ্রয়ী নির্দেশিকাসমূহ।
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              id="posts-filter-input"
              type="text"
              value={inlineFilter}
              onChange={(e) => setInlineFilter(e.target.value)}
              placeholder="Search in 5 guides..."
              className="w-full bg-[#0d0d14] border border-white/10 focus:border-red-500/60 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
            />
            {inlineFilter && (
              <button
                onClick={() => setInlineFilter('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid of the 5 Existing Posts */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, idx) => (
            <PostCard
              key={article.id}
              article={article}
              index={idx}
              onSelect={onSelectArticle}
            />
          ))}
        </div>
      ) : (
        /* Empty Search State */
        <div
          id="posts-empty-state"
          className="p-12 text-center rounded-2xl glass-panel border border-white/10 max-w-lg mx-auto"
        >
          <div className="w-12 h-12 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-tech text-lg font-bold text-white uppercase tracking-wider mb-2">
            No matching articles found.
          </h3>
          <p className="text-zinc-400 text-xs font-bengali mb-6">
            অনুগ্রহ করে অন্য কোনো শব্দ দিয়ে অনুসন্ধান করুন। শুধুমাত্র বিদ্যমান ৫টি পোস্টের মধ্যে তথ্য অনুসন্ধান করা যাবে।
          </p>
          <button
            onClick={() => setInlineFilter('')}
            className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-tech font-bold uppercase tracking-wider transition-colors"
          >
            Reset Search
          </button>
        </div>
      )}

      {/* Trust & Official Note with Direct APK Download */}
      <div className="mt-14 p-5 rounded-2xl bg-[#0a0a10] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-red-500 shrink-0" />
          <p className="text-xs text-zinc-400 font-tech">
            VERIFIED INSTRUCTIONAL GUIDES • PRECISE STEP-BY-STEP TROUBLESHOOTING
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            id="posts-section-direct-download"
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 text-xs font-tech font-bold uppercase tracking-wider transition-all"
            title={`Download ATV Sports APK (${APP_VERSION})`}
          >
            <Download className="w-3.5 h-3.5 animate-bounce" />
            <span>Download APK</span>
          </a>
          <div className="text-xs font-tech text-zinc-400">
            TOTAL GUIDES: <span className="text-white font-bold">05</span>
          </div>
        </div>
      </div>
    </section>
  );
};
