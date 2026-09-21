import { Article } from '../types.ts';

export interface ReadingTimeResult {
  minutes: number;
  text: string;
  wordCount: number;
  charCount: number;
}

/**
 * Calculates a dynamic reading time based on total content length
 * (title, excerpt, quick highlights, headings, paragraphs, bullet points,
 * technical callouts, and step-by-step instructions).
 *
 * For technical instructional content in mixed Bengali & English:
 * - Average attentive reading rate: ~75 words per minute
 * - Technical cognitive allowance: ~9 seconds (0.15 min) per detailed action step
 * - Minimum 1 minute
 */
export function calculateReadingTime(article: Article): ReadingTimeResult {
  if (!article) {
    return { minutes: 1, text: '1 min read', wordCount: 0, charCount: 0 };
  }

  let combinedText = [
    article.title || '',
    article.excerpt || '',
    ...(article.quickHighlights || []),
  ].join(' ');

  let stepCount = 0;

  article.sections?.forEach((section) => {
    if (section.heading) combinedText += ` ${section.heading}`;
    if (section.content) combinedText += ` ${section.content}`;
    if (section.bulletPoints) combinedText += ` ${section.bulletPoints.join(' ')}`;
    if (section.callout?.text) combinedText += ` ${section.callout.text}`;

    if (section.steps) {
      stepCount += section.steps.length;
      section.steps.forEach((step) => {
        if (step.title) combinedText += ` ${step.title}`;
        if (step.description) combinedText += ` ${step.description}`;
        if (step.tip) combinedText += ` ${step.tip}`;
        if (step.badge) combinedText += ` ${step.badge}`;
        if (step.details) combinedText += ` ${step.details.join(' ')}`;
      });
    }
  });

  const words = combinedText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const charCount = combinedText.length;

  const rawMinutes = wordCount / 75 + stepCount * 0.15;
  const minutes = Math.max(1, Math.round(rawMinutes));
  const text = `${minutes} min read`;

  return {
    minutes,
    text,
    wordCount,
    charCount,
  };
}
