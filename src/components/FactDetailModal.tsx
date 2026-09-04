import React from 'react';
import { X, BookOpen, Sparkles, Tag, Calendar } from 'lucide-react';
import { HistoryFact } from '../types';

interface FactDetailModalProps {
  fact: HistoryFact | null;
  onClose: () => void;
}

export const FactDetailModal: React.FC<FactDetailModalProps> = ({ fact, onClose }) => {
  if (!fact) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060e20]/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#131b2e] border border-[#ccff80]/40 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#c2cab0] hover:text-[#dae2fd] hover:bg-[#171f33] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#ccff80]/15 text-[#ccff80] border border-[#ccff80]/30">
            {fact.tag}
          </span>
          {fact.year && (
            <span className="text-[11px] font-mono text-[#c2cab0] flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {fact.year}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#dae2fd] mb-4 leading-tight">
          {fact.title}
        </h3>

        <div className="p-4 bg-[#060e20]/70 rounded-xl border border-[#424936]/40 text-[#dae2fd] text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {fact.fullText}
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#ccff80] text-[#213600] font-mono text-xs font-bold hover:bg-[#b2f746] transition-colors"
          >
            ЗАКРИТИ
          </button>
        </div>
      </div>
    </div>
  );
};
