import { useState, useEffect } from 'react';
import { ARTICLES } from './data/articles.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { PostsSection } from './components/PostsSection.tsx';
import { ArticleView } from './components/ArticleView.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { Footer } from './components/Footer.tsx';
import { NotFound } from './components/NotFound.tsx';
import { DownloadPage } from './components/DownloadPage.tsx';
import { FeaturesPage } from './components/FeaturesPage.tsx';
import { FaqPage } from './components/FaqPage.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { SportsCategoriesSection } from './components/SportsCategoriesSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { GlobalBackgroundAnimation } from './components/GlobalBackgroundAnimation.tsx';
import { FloatingDownloadButton } from './components/FloatingDownloadButton.tsx';
import { updatePageSeo } from './utils/seo.ts';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined' && window.location.search.startsWith('?/')) {
      const redirected = '/' + window.location.search.slice(2).split('&')[0].replace(/~and~/g, '&');
      try {
        window.history.replaceState(null, '', redirected + window.location.hash);
      } catch {
        // ignore if iframe security prevents replaceState
      }
      return redirected;
    }
    return typeof window !== 'undefined' ? window.location.pathname || '/' : '/';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sync state with browser navigation (Back/Forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic SEO for home or posts directory
  useEffect(() => {
    if (currentPath === '/') {
      const cleanup = updatePageSeo({
        title: 'ATV Sports – Watch Live Sports & TV Channels | Official App',
        description:
          'ATV Sports is the premier sports viewing platform for live cricket, football matches, sports TV channels, and verified official Android APK downloads.',
        canonicalPath: '/',
        keywords: [
          'ATV Sports',
          'ATVSports',
          'ATV Sports APK',
          'watch live sports',
          'live cricket streaming',
          'live football streaming',
          'sports TV app Android',
          'ATV Sports download',
          'live sports app',
        ],
        schema: [
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'ATV Sports',
            alternateName: 'ATVSports',
            url: 'https://atvsports.com',
            description:
              'ATV Sports is an Android sports platform for watching live football, cricket, and sports television channels.',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://atvsports.com/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'ATV Sports',
            alternateName: 'ATVSports Official App',
            operatingSystem: 'Android 5.0 and above',
            applicationCategory: 'SportsApplication',
            fileSize: '18.4 MB',
            softwareVersion: 'v4.8.2',
            downloadUrl: 'https://atvsports.com/download',
            description:
              'ATV Sports offers live sports broadcasts, cricket match coverage, football leagues, and multi-server video streaming.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          },
        ],
      });
      return cleanup;
    } else if (currentPath === '/posts') {
      const cleanup = updatePageSeo({
        title: 'ATV Sports Guides & Knowledge Base – Tutorials & Setup',
        description:
          'Comprehensive guides, tutorials, and setup instructions for ATV Sports: APK download, live sports viewing, PC emulator setup, data optimization, and version updates.',
        canonicalPath: '/posts',
        keywords: [
          'ATV Sports guides',
          'ATV Sports tutorials',
          'how to use ATV Sports',
          'ATV Sports setup',
          'ATV Sports articles',
        ],
      });
      return cleanup;
    }
  }, [currentPath]);

  // Navigate handler with HTML5 pushState
  const navigate = (path: string, scrollToTarget = true) => {
    setIsLoading(true);
    setTimeout(() => {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      setIsLoading(false);
      if (scrollToTarget) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);
  };

  const handleScrollToPosts = () => {
    if (currentPath !== '/') {
      navigate('/', false);
      setTimeout(() => {
        const postsElem = document.getElementById('posts');
        postsElem?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const postsElem = document.getElementById('posts');
      postsElem?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine current active view
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
          <div className="w-10 h-10 border-2 border-red-600/20 border-t-red-600 rounded-full animate-spin" />
          <span className="font-tech text-xs font-bold uppercase tracking-widest text-zinc-500">
            LOADING ATV SPORTS
          </span>
        </div>
      );
    }

    const cleanPath =
      currentPath === '/' ? '/' : currentPath.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';

    // Article detail route: /posts/:slug
    if (cleanPath.startsWith('/posts/')) {
      const slug = cleanPath.replace('/posts/', '').replace(/\/$/, '');
      const matchedArticle = ARTICLES.find((a) => a.slug === slug);

      if (matchedArticle) {
        return (
          <ArticleView
            article={matchedArticle}
            allArticles={ARTICLES}
            onBack={() => navigate('/posts')}
            onSelectArticle={(newSlug) => navigate(`/posts/${newSlug}`)}
            onNavigate={(p) => navigate(p)}
          />
        );
      } else {
        return (
          <NotFound
            message="Article not found."
            onNavigate={(p) => navigate(p)}
          />
        );
      }
    }

    // Posts overview route: /posts
    if (cleanPath === '/posts') {
      return (
        <main className="pt-24 pb-16 min-h-screen">
          <PostsSection
            articles={ARTICLES}
            onSelectArticle={(slug) => navigate(`/posts/${slug}`)}
            onOpenSearchModal={() => setIsSearchOpen(true)}
          />
        </main>
      );
    }

    // Official APK Download Route: /download
    if (cleanPath === '/download') {
      return (
        <main>
          <DownloadPage onNavigate={(p) => navigate(p)} />
        </main>
      );
    }

    // Features & Sports Coverage Route: /features
    if (cleanPath === '/features') {
      return (
        <main>
          <FeaturesPage onNavigate={(p) => navigate(p)} />
        </main>
      );
    }

    // FAQ Route: /faq
    if (cleanPath === '/faq') {
      return (
        <main>
          <FaqPage onNavigate={(p) => navigate(p)} />
        </main>
      );
    }

    // Home route: /
    if (cleanPath === '/') {
      return (
        <main>
          {/* Full Screen 100vh Hero with exact 3D text and sports animation */}
          <Hero
            onScrollToPosts={handleScrollToPosts}
            onNavigate={(p) => navigate(p)}
          />

          {/* Posts Section with the 5 existing posts & guides */}
          <PostsSection
            articles={ARTICLES}
            onSelectArticle={(slug) => navigate(`/posts/${slug}`)}
            onOpenSearchModal={() => setIsSearchOpen(true)}
          />

          {/* Platform Overview & Device Compatibility */}
          <AboutSection onNavigate={(p) => navigate(p)} />

          {/* Live Sports & Content Categories */}
          <SportsCategoriesSection onNavigate={(p) => navigate(p)} />

          {/* Frequently Asked Questions Preview */}
          <FaqSection
            maxItems={4}
            showAllLink={true}
            onNavigate={(p) => navigate(p)}
          />
        </main>
      );
    }

    // Search trigger route: /search
    if (cleanPath === '/search') {
      return (
        <main className="pt-28 pb-16 min-h-screen">
          <div className="max-w-4xl mx-auto px-4">
            <PostsSection
              articles={ARTICLES}
              onSelectArticle={(slug) => navigate(`/posts/${slug}`)}
              onOpenSearchModal={() => setIsSearchOpen(true)}
            />
          </div>
        </main>
      );
    }

    // 404 for any other path
    return (
      <NotFound
        message="Page not found."
        onNavigate={(p) => navigate(p)}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070709] text-white selection:bg-red-600 selection:text-white relative">
      {/* Full Website Video & Sports Broadcast Background Animation */}
      <GlobalBackgroundAnimation />

      {/* Top Sticky Navigation */}
      <div className="relative z-30">
        <Navbar
          currentPath={currentPath}
          onNavigate={(p) => navigate(p)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      </div>

      {/* Main Page Content */}
      <div className="flex-1 relative z-10">{renderContent()}</div>

      {/* Minimalist Footer */}
      <div className="relative z-20">
        <Footer
          onNavigate={(p) => navigate(p)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      </div>

      {/* Persistent Floating APK Download Action Button */}
      <FloatingDownloadButton />

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES}
        onSelectArticle={(slug) => navigate(`/posts/${slug}`)}
      />
    </div>
  );
}
