import React from 'react';
import { ArrowUpRight, Clock, BookOpen, Layers, Download } from 'lucide-react';
import { Article } from '../types.ts';
import { calculateReadingTime } from '../utils/readingTime.ts';
import { DOWNLOAD_URL } from '../constants.ts';

interface PostCardProps {
  article: Article;
  index: number;
  onSelect: (slug: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({ article, index, onSelect }) => {
  const indexFormatted = String(index + 1).padStart(2, '0');
  const readTimeInfo = calculateReadingTime(article);

  return (
    <article
      id={`post-card-${article.slug}`}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(229,9,20,0.3)]"
    >
      {/* Top Card Bar: Number Badge & Category */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-tech text-xs font-black tracking-widest text-red-500 bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/20">
              GUIDE {indexFormatted}
            </span>
            <span className="text-xs font-tech text-zinc-400 flex items-center gap-1">
              <Layers className="w-3 h-3 text-zinc-500" />
              {article.category}
            </span>
          </div>

          {/* Dynamic Reading Time Indicator */}
          <div
            id={`read-time-indicator-${article.slug}`}
            className="flex items-center gap-1.5 text-xs text-zinc-200 font-tech font-bold bg-white/[0.06] border border-white/10 group-hover:border-red-500/30 group-hover:bg-red-500/10 group-hover:text-white px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 translate-y-0.5 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-sm shrink-0"
            title={`Calculated based on content length: ${readTimeInfo.wordCount} words (${readTimeInfo.minutes} min read)`}
          >
            <Clock className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform shrink-0" />
            <span className="tracking-wide">{readTimeInfo.text}</span>
          </div>
        </div>

        {/* Article Title as crawlable Link */}
        <h3 className="font-bengali text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-200 leading-snug mb-3">
          <a
            href={`/posts/${article.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onSelect(article.slug);
            }}
            className="focus:outline-none focus-visible:underline"
          >
            {article.title}
          </a>
        </h3>

        {/* Excerpt */}
        <p className="font-bengali text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-6">
          {article.excerpt}
        </p>
      </div>

      {/* Card Footer: Action & Visual Detail with Crawlable Link */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
        <a
          href={`/posts/${article.slug}`}
          onClick={(e) => {
            e.preventDefault();
            onSelect(article.slug);
          }}
          className="font-tech text-xs font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none"
          aria-label={`Read guide: ${article.title}`}
        >
          <BookOpen className="w-3.5 h-3.5 text-red-500" />
          <span>Read Guide</span>
        </a>

        <div className="flex items-center gap-2">
          {/* Direct Download Icon Button */}
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 rounded-full bg-red-600/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/20 flex items-center justify-center transition-all shadow-sm group/dl"
            title="Direct Download APK"
          >
            <Download className="w-3.5 h-3.5 group-hover/dl:animate-bounce" />
          </a>

          {/* Guide Link Button */}
          <a
            href={`/posts/${article.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onSelect(article.slug);
            }}
            className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-red-600 flex items-center justify-center text-zinc-300 group-hover:text-white border border-white/10 group-hover:border-red-500 transition-all duration-200 shadow-sm"
            aria-label={`Open guide: ${article.title}`}
          >
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Decorative Red Accent Line along Bottom on Hover */}
      <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full pointer-events-none" />
    </article>
  );
};
