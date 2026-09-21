import React from 'react';
import { AlertTriangle, Home, BookOpen } from 'lucide-react';

interface NotFoundProps {
  onNavigate: (path: string) => void;
  message?: string;
}

export const NotFound: React.FC<NotFoundProps> = ({
  onNavigate,
  message = 'Article not found.',
}) => {
  return (
    <div
      id="not-found-view"
      className="min-h-[75vh] flex items-center justify-center px-4 py-24 text-center bg-transparent"
    >
      <div className="max-w-md p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <span className="font-tech text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 inline-block mb-3">
          404 ERROR
        </span>

        <h1 className="font-tech text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2">
          {message}
        </h1>

        <p className="text-xs text-zinc-400 font-bengali leading-relaxed mb-8">
          আপনি যে পেজ বা নির্দেশিকাটি খুঁজছেন তা পাওয়া যায়নি। হোমপেজে ফিরে গিয়ে বিদ্যমান ৫টি অফিসিয়াল গাইড ব্রাউজ করুন।
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-tech font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </button>

          <button
            onClick={() => onNavigate('/posts')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-tech font-bold uppercase tracking-wider border border-white/10 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>View All Guides</span>
          </button>
        </div>
      </div>
    </div>
  );
};
