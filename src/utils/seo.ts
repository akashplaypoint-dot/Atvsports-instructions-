/**
 * Comprehensive SEO and Structured Data Utility for ATV Sports
 * Follows Google Search Essentials and Schema.org recommendations.
 */

export interface SeoConfig {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  keywords?: string[];
  noindex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_DOMAIN = 'https://atvsports.com';

export function getFullUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${DEFAULT_DOMAIN}${cleanPath}`;
}

export function updatePageSeo(config: SeoConfig): () => void {
  const fullUrl = getFullUrl(config.canonicalPath);
  const ogImageUrl = config.ogImage ? getFullUrl(config.ogImage) : getFullUrl('/og-image.svg');

  // 1. Page Title
  document.title = config.title;

  // 2. Helper to set or create meta tag
  const setMeta = (name: string, content: string, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 3. Meta Description & Robots
  setMeta('description', config.description);
  setMeta('robots', config.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  if (config.keywords && config.keywords.length > 0) {
    setMeta('keywords', config.keywords.join(', '));
  }

  // 4. Canonical Tag
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', fullUrl);

  // 5. OpenGraph Tags
  setMeta('og:title', config.title, true);
  setMeta('og:description', config.description, true);
  setMeta('og:url', fullUrl, true);
  setMeta('og:site_name', 'ATV Sports', true);
  setMeta('og:type', config.ogType || 'website', true);
  setMeta('og:image', ogImageUrl, true);
  setMeta('og:image:alt', `${config.title} - ATV Sports Official Platform`, true);

  // 6. Twitter / X Cards
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', config.title);
  setMeta('twitter:description', config.description);
  setMeta('twitter:image', ogImageUrl);
  setMeta('twitter:image:alt', `${config.title} - ATV Sports Official Platform`);

  // 7. Schema.org JSON-LD Structured Data
  const scriptId = 'dynamic-page-schema';
  let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (config.schema) {
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(config.schema);
  } else if (scriptEl) {
    scriptEl.remove();
  }

  // Return cleanup function
  return () => {
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
  };
}
