import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Layers, Clock } from 'lucide-react';
import { Article } from '../types.ts';
import { calculateReadingTime } from '../utils/readingTime.ts';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSearchTerm('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.key === '/' || (e.metaKey && e.key === 'k')) && !isOpen) {
        // Prevent default browser slash if user isn't in an input
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
          e.preventDefault();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sanitizedTerm = searchTerm.trim().toLowerCase();

  const results = articles.filter((art) => {
    if (!sanitizedTerm) return true; // show all 5 existing posts if empty
    return (
      art.title.toLowerCase().includes(sanitizedTerm) ||
      art.excerpt.toLowerCase().includes(sanitizedTerm) ||
      art.slug.toLowerCase().includes(sanitizedTerm) ||
      art.category.toLowerCase().includes(sanitizedTerm) ||
      art.keywords.some((k) => k.toLowerCase().includes(sanitizedTerm)) ||
      art.sections.some(
        (s) =>
          s.heading.toLowerCase().includes(sanitizedTerm) ||
          s.content?.toLowerCase().includes(sanitizedTerm) ||
          s.steps?.some(
            (st) =>
              st.title.toLowerCase().includes(sanitizedTerm) ||
              st.description.toLowerCase().includes(sanitizedTerm)
          )
      )
    );
  });

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="search-modal-container"
        className="w-full max-w-2xl bg-[#0d0d16] border border-white/10 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#07070b]">
          <Search className="w-5 h-5 text-red-500 shrink-0 mr-3" />
          <input
            ref={inputRef}
            id="search-articles-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search ATV Sports guides (e.g., download, PC, data)..."
            className="w-full bg-transparent text-white text-sm sm:text-base placeholder-zinc-500 focus:outline-none font-tech tracking-wide"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 rounded-md text-zinc-400 hover:text-white mr-2"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-tech font-bold uppercase tracking-wider text-zinc-400 hover:text-white bg-zinc-900 border border-white/10 rounded"
          >
            ESC
          </button>
        </div>

        {/* Results / List Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-tech uppercase tracking-widest text-zinc-400 border-b border-white/5">
            <span>
              {sanitizedTerm ? `Results (${results.length})` : 'All Official Guides (5)'}
            </span>
            <span>ATV SPORTS KNOWLEDGE</span>
          </div>

          {results.length > 0 ? (
            results.map((article) => (
              <button
                key={article.id}
                onClick={() => {
                  onSelectArticle(article.slug);
                  onClose();
                }}
                className="w-full group text-left p-3.5 sm:p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-red-500/40 transition-all duration-200 flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-tech text-zinc-400">
                    <Layers className="w-3 h-3 text-red-500" />
                    <span>{article.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-zinc-300">
                      <Clock className="w-3 h-3 text-red-500" />
                      {calculateReadingTime(article).text}
                    </span>
                  </div>
                  <h4 className="font-bengali text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    {article.title}
                  </h4>
                  <p className="font-bengali text-xs text-zinc-400 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-red-600 text-zinc-400 group-hover:text-white transition-colors shrink-0 mt-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))
          ) : (
            <div id="search-empty-state" className="py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <p className="font-tech text-sm font-bold text-white uppercase tracking-wider mb-1">
                No matching articles found.
              </p>
              <p className="text-zinc-400 text-xs font-bengali max-w-sm mx-auto">
                অনুগ্রহ করে &apos;ATV Sports&apos;, &apos;ডাউনলোড&apos;, &apos;খেলা&apos;, &apos;এমুলেটর&apos; বা সংশ্লিষ্ট বিষয় লিখে অনুসন্ধান করুন।
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
