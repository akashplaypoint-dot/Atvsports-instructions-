import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Clock,
  Layers,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Share2,
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Download,
} from 'lucide-react';
import { Article } from '../types.ts';
import { calculateReadingTime } from '../utils/readingTime.ts';
import { updatePageSeo } from '../utils/seo.ts';
import { DOWNLOAD_URL, APP_VERSION, APP_FILE_SIZE } from '../constants.ts';

interface ArticleViewProps {
  article: Article;
  allArticles: Article[];
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
  onNavigate?: (path: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  allArticles,
  onBack,
  onSelectArticle,
  onNavigate,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Update SEO metadata dynamically when viewing an article
  useEffect(() => {
    const pageTitle = `${article.title} – ATV Sports Guide`;
    const cleanup = updatePageSeo({
      title: pageTitle,
      description: article.seoDescription,
      canonicalPath: `/posts/${article.slug}`,
      ogType: 'article',
      keywords: article.keywords,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://atvsports.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Posts',
                item: 'https://atvsports.com/posts',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: article.title,
                item: `https://atvsports.com/posts/${article.slug}`,
              },
            ],
          },
          {
            '@type': 'TechArticle',
            headline: article.title,
            description: article.seoDescription,
            articleSection: article.category,
            keywords: article.keywords.join(', '),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://atvsports.com/posts/${article.slug}`,
            },
            publisher: {
              '@type': 'Organization',
              name: 'ATV Sports',
              url: 'https://atvsports.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://atvsports.com/og-image.svg',
              },
            },
            inLanguage: 'bn-BD',
          },
        ],
      },
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cleanup();
    };
  }, [article]);

  const otherArticles = allArticles.filter((a) => a.id !== article.id);
  const currentIndex = allArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
  const readTimeInfo = calculateReadingTime(article);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article
      id={`article-page-${article.slug}`}
      className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative bg-transparent"
    >
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-red-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Atmospheric Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-red-600/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Navigation Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <button
            id="back-to-posts-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0e0e17] hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white text-xs font-tech font-bold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-red-500" />
            <span>Back to All Guides</span>
          </button>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center text-xs font-tech text-zinc-400">
            <ol className="flex items-center gap-1.5">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onBack();
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              </li>
              <li>
                <a
                  href="/posts"
                  onClick={(e) => {
                    e.preventDefault();
                    onBack();
                  }}
                  className="hover:text-white transition-colors"
                >
                  Posts
                </a>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              </li>
              <li className="text-red-400 font-semibold truncate max-w-[200px]" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Right Action Controls: Direct Download + Share */}
          <div className="flex items-center gap-2">
            <a
              id="article-top-download-btn"
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-tech font-bold uppercase tracking-wider shadow-md shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
              title={`Download ATV Sports APK (${APP_VERSION})`}
            >
              <Download className="w-3.5 h-3.5 animate-bounce" />
              <span>Download APK</span>
            </a>

            <button
              id="share-article-btn"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-tech tracking-wider border border-white/5 transition-colors"
              title="Copy link to clipboard"
            >
              <Share2 className="w-3.5 h-3.5 text-red-500" />
              <span>{copied ? 'Link Copied!' : 'Share Guide'}</span>
            </button>
          </div>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-tech text-xs font-bold uppercase tracking-widest text-red-400 bg-red-600/10 px-3 py-1 rounded-full border border-red-500/20 flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-red-500" />
              {article.category}
            </span>

            {/* Dynamic Reading Time Indicator */}
            <span
              id={`article-read-time-indicator-${article.slug}`}
              className="font-tech text-xs font-bold text-zinc-200 bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm"
              title={`Calculated based on content length: ${readTimeInfo.wordCount} words (${readTimeInfo.minutes} min read)`}
            >
              <Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>{readTimeInfo.text}</span>
              <span className="text-zinc-400 text-[11px] hidden sm:inline">
                • {readTimeInfo.wordCount} words
              </span>
            </span>

            <span className="text-xs text-zinc-400 font-tech">
              • {article.lastUpdated}
            </span>
          </div>

          <h1
            id="article-title"
            className="font-bengali text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-6"
          >
            {article.title}
          </h1>

          <p className="font-bengali text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl border-l-2 border-red-500 pl-4 py-1">
            {article.excerpt}
          </p>
        </header>

        {/* Quick Highlights Card (UI element without photos) */}
        <div className="mb-12 p-6 rounded-2xl glass-panel border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
          <h2 className="font-tech text-xs font-bold uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-red-500" />
            KEY CHECKPOINTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {article.quickHighlights.map((hl, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-black/40 border border-white/5"
              >
                <span className="font-tech text-xs font-bold text-red-500 bg-red-500/10 w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="font-bengali text-xs text-zinc-200 leading-snug">
                  {hl}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Article Content Sections */}
        <div className="space-y-12 text-zinc-200 font-bengali text-base leading-relaxed">
          {article.sections.map((sec, secIdx) => (
            <section
              key={secIdx}
              id={`section-${secIdx}`}
              className="space-y-4 pt-2"
            >
              <h2 className="font-bengali text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="w-2 h-6 bg-red-600 rounded-full inline-block shrink-0" />
                <span>{sec.heading}</span>
              </h2>

              <p className="text-zinc-300 leading-relaxed">{sec.content}</p>

              {/* Callout box if present */}
              {sec.callout && (
                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 my-4 ${
                    sec.callout.type === 'warning'
                      ? 'bg-red-950/20 border-red-500/40 text-red-200'
                      : 'bg-[#0e0e17] border-white/10 text-zinc-300'
                  }`}
                >
                  {sec.callout.type === 'warning' ? (
                    <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  ) : (
                    <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm font-bengali leading-relaxed">
                    {sec.callout.text}
                  </p>
                </div>
              )}

              {/* Steps UI (if section has step-by-step instructions) */}
              {sec.steps && sec.steps.length > 0 && (
                <div className="space-y-4 my-6">
                  {sec.steps.map((st, stIdx) => (
                    <div
                      key={stIdx}
                      className="p-5 sm:p-6 rounded-2xl bg-[#0b0b12] border border-white/10 hover:border-white/20 transition-colors relative"
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                          <span className="font-tech text-xs font-black text-red-500 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                            STEP {stIdx + 1}
                          </span>
                          <span>{st.title}</span>
                        </h3>
                        {st.badge && (
                          <span className="font-tech text-[10px] uppercase font-bold tracking-widest text-zinc-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                            {st.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                        {st.description}
                      </p>

                      {st.tip && (
                        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs text-zinc-400">
                          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{st.tip}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet Points (if section has bulleted suggestions) */}
              {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                <ul className="space-y-2.5 my-4">
                  {sec.bulletPoints.map((bp, bpIdx) => (
                    <li
                      key={bpIdx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Official APK Download Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-600/15 via-[#0e0e18] to-red-600/15 border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/60 border border-red-500/40 shrink-0 shadow-md shadow-red-600/30 hidden sm:block">
              <img
                src="/atvsports-logo.png"
                alt="ATV Sports Official Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-tech font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30 inline-block mb-2">
                Official Android APK • {APP_VERSION}
              </span>
              <h3 className="font-tech text-lg sm:text-xl font-bold text-white">
                Download ATV Sports App ({APP_FILE_SIZE})
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-bengali mt-1 max-w-lg">
                কোনো জটিলতা ছাড়া নিরাপদ ও ভেরিফাইড অফিশিয়াল APK সরাসরি ডাউনলোড করে লাইভ ক্রিকেট ও ফুটবল ম্যাচ উপভোগ করুন।
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              id="article-bottom-download-btn"
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-tech font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 cursor-pointer"
              title={`Direct APK Download (${APP_VERSION})`}
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Direct APK Download</span>
            </a>
            {onNavigate && (
              <button
                onClick={() => onNavigate('/download')}
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-tech font-bold text-xs uppercase tracking-wider transition-colors border border-white/10"
              >
                <span>View Install Guide</span>
              </button>
            )}
          </div>
        </div>

        {/* Previous & Next Article Navigation */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <button
              onClick={() => onSelectArticle(prevArticle.slug)}
              className="p-4 rounded-xl glass-panel text-left hover:border-red-500/40 transition-colors group flex flex-col justify-between"
            >
              <span className="font-tech text-[11px] uppercase tracking-widest text-zinc-400 flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3.5 h-3.5 text-red-500 group-hover:-translate-x-1 transition-transform" />
                Previous Guide
              </span>
              <span className="font-bengali text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                {prevArticle.title}
              </span>
            </button>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <button
              onClick={() => onSelectArticle(nextArticle.slug)}
              className="p-4 rounded-xl glass-panel text-right hover:border-red-500/40 transition-colors group flex flex-col justify-between items-end sm:col-start-2"
            >
              <span className="font-tech text-[11px] uppercase tracking-widest text-zinc-400 flex items-center gap-1 mb-1">
                Next Guide
                <ArrowRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="font-bengali text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                {nextArticle.title}
              </span>
            </button>
          ) : (
            <div />
          )}
        </div>

        {/* Related Articles Navigation (Only among the 5 existing posts!) */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-tech text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Related Official Guides
            </h3>
            <span className="font-tech text-xs text-zinc-400">
              EXISTING GUIDES ONLY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherArticles.slice(0, 4).map((rel) => (
              <button
                key={rel.id}
                onClick={() => onSelectArticle(rel.slug)}
                className="p-4 rounded-xl bg-[#0b0b14] hover:bg-[#11111c] border border-white/5 hover:border-red-500/30 text-left transition-all group"
              >
                <div className="flex items-center gap-2 text-[11px] font-tech text-zinc-400 mb-1.5">
                  <span className="text-red-500 font-bold">{rel.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-zinc-300">
                    <Clock className="w-3 h-3 text-red-500" />
                    {calculateReadingTime(rel).text}
                  </span>
                </div>
                <h4 className="font-bengali text-sm font-bold text-zinc-100 group-hover:text-red-400 transition-colors line-clamp-2">
                  {rel.title}
                </h4>
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
