import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Radio, Download } from 'lucide-react';
import { DOWNLOAD_URL, APP_VERSION } from '../constants.ts';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50 py-3'
          : 'bg-gradient-to-b from-[#070709]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <a
            id="brand-logo"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md"
            aria-label="ATV Sports Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-black/50 border border-red-500/40 shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <img
                src="/atvsports-logo.png"
                alt="ATV Sports Official Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-red-500/50 transition-all pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className="font-tech text-xl sm:text-2xl font-black tracking-wider uppercase text-white leading-none flex items-center gap-1">
                ATV <span className="text-red-500">SPORTS</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-semibold font-tech mt-0.5">
                Live Sports &amp; TV
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center gap-1 bg-[#0e0e17]/80 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner"
            aria-label="Main Navigation"
          >
            <a
              id="nav-link-home"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider transition-all duration-200 ${
                currentPath === '/'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/40'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </a>

            <a
              id="nav-link-download"
              href="/download"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/download');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                currentPath === '/download'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/40'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>Download APK</span>
            </a>

            <a
              id="nav-link-features"
              href="/features"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/features');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider transition-all duration-200 ${
                currentPath === '/features'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/40'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Features
            </a>

            <a
              id="nav-link-posts"
              href="/posts"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/posts');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider transition-all duration-200 ${
                currentPath.startsWith('/posts')
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/40'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Guides
            </a>

            <a
              id="nav-link-faq"
              href="/faq"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/faq');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider transition-all duration-200 ${
                currentPath === '/faq'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/40'
                  : 'text-zinc-300 hover:text-white hover:bg-white/5'
              }`}
            >
              FAQ
            </a>

            <button
              id="nav-link-search"
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-tech font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200 group"
              aria-label="Search articles"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-red-400 transition-colors" />
              <span>Search</span>
            </button>
          </nav>

          {/* Right Action on Desktop: Direct Download APK + Quick Search Trigger */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="desktop-direct-download-btn"
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-500 text-white text-xs font-tech font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all duration-200"
              title={`Download ATV Sports APK (${APP_VERSION})`}
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Download APK</span>
            </a>

            <button
              id="quick-search-btn"
              onClick={onOpenSearch}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-red-500/40 text-zinc-300 hover:text-white text-xs font-tech uppercase tracking-wider transition-all duration-200 shadow-md group"
              title="Search articles"
            >
              <Search className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
              <span>Find</span>
              <kbd className="hidden lg:inline-block ml-1 px-1.5 py-0.5 text-[10px] bg-black/60 border border-white/10 rounded text-zinc-400">
                /
              </kbd>
            </button>
          </div>

          {/* Mobile Controls: Quick Download Icon + Search + Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="mobile-direct-download-btn"
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-600/30 flex items-center justify-center active:scale-95 transition-all"
              aria-label="Download ATV Sports APK"
              title="Download ATV Sports APK"
            >
              <Download className="w-4 h-4 animate-bounce" />
            </a>

            <button
              id="mobile-search-btn"
              onClick={onOpenSearch}
              className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white active:bg-zinc-800"
              aria-label="Search articles"
            >
              <Search className="w-4 h-4 text-red-500" />
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white active:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#0a0a10]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          {/* Direct Download APK button in mobile menu */}
          <a
            id="mobile-drawer-direct-download"
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white text-sm font-tech font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 active:scale-98 transition-all"
          >
            <span className="flex items-center gap-2.5">
              <Download className="w-4 h-4 animate-bounce" />
              <span>Direct Download APK</span>
            </span>
            <span className="text-xs bg-black/30 px-2 py-0.5 rounded font-mono">18.4 MB</span>
          </a>

          <a
            id="mobile-nav-home"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-tech font-bold uppercase tracking-wider text-left transition-colors ${
              currentPath === '/'
                ? 'bg-red-600/20 text-red-400 border border-red-500/30'
                : 'text-zinc-300 hover:bg-white/5'
            }`}
          >
            <span>Home</span>
            <span className="text-xs text-zinc-500">01</span>
          </a>

          <a
            id="mobile-nav-download"
            href="/download"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/download');
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-tech font-bold uppercase tracking-wider text-left transition-colors ${
              currentPath === '/download'
                ? 'bg-red-600/20 text-red-400 border border-red-500/30'
                : 'text-zinc-300 hover:bg-white/5'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Download APK</span>
            </span>
            <span className="text-xs text-red-400 font-bold">v4.8.2</span>
          </a>

          <a
            id="mobile-nav-features"
            href="/features"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/features');
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-tech font-bold uppercase tracking-wider text-left transition-colors ${
              currentPath === '/features'
                ? 'bg-red-600/20 text-red-400 border border-red-500/30'
                : 'text-zinc-300 hover:bg-white/5'
            }`}
          >
            <span>Features &amp; Sports</span>
            <span className="text-xs text-zinc-500">02</span>
          </a>

          <a
            id="mobile-nav-posts"
            href="/posts"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/posts');
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-tech font-bold uppercase tracking-wider text-left transition-colors ${
              currentPath.startsWith('/posts')
                ? 'bg-red-600/20 text-red-400 border border-red-500/30'
                : 'text-zinc-300 hover:bg-white/5'
            }`}
          >
            <span>Guides (5 Articles)</span>
            <span className="text-xs text-zinc-500">03</span>
          </a>

          <a
            id="mobile-nav-faq"
            href="/faq"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/faq');
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-tech font-bold uppercase tracking-wider text-left transition-colors ${
              currentPath === '/faq'
                ? 'bg-red-600/20 text-red-400 border border-red-500/30'
                : 'text-zinc-300 hover:bg-white/5'
            }`}
          >
            <span>FAQ &amp; Answers</span>
            <span className="text-xs text-zinc-500">04</span>
          </a>

          <button
            id="mobile-nav-search"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-tech font-bold uppercase tracking-wider text-left text-zinc-300 hover:bg-white/5 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-red-500" />
              <span>Search Guides</span>
            </span>
            <span className="text-xs text-zinc-500">03</span>
          </button>
        </div>
      )}
    </header>
  );
};
