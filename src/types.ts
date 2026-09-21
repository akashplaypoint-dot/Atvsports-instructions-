export interface ArticleStep {
  title: string;
  description: string;
  details?: string[];
  tip?: string;
  badge?: string;
}

export interface ArticleSection {
  heading: string;
  content?: string;
  steps?: ArticleStep[];
  bulletPoints?: string[];
  callout?: {
    type: 'tip' | 'note' | 'warning';
    text: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  sections: ArticleSection[];
  quickHighlights: string[];
  seoDescription: string;
  keywords: string[];
}
