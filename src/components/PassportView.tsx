import React, { useState } from 'react';
import {
  Building2,
  Building,
  Volume2,
  VolumeX,
  ExternalLink,
  Share2,
  Check,
} from 'lucide-react';
import { BuildingPassport, HistoryFact } from '../types';

interface PassportViewProps {
  passport: BuildingPassport;
  onSelectFact: (fact: HistoryFact) => void;
  onOpenNfcModal: () => void;
  isVerified: boolean;
}

export const PassportView: React.FC<PassportViewProps> = ({
  passport,
  onSelectFact,
  onOpenNfcModal,
  isVerified,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedToken, setCopiedToken] = useState(false);

  // Speech synthesis audio guide
  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      window.speechSynthesis?.cancel();
      setIsPlayingAudio(false);
    } else {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const text = `${passport.title}. ${passport.description} Пам'ятка національного значення. Архітектор Юліан Захаревич.`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'uk-UA';
        utterance.rate = 0.95;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      }
    }
  };

  const handleCopyHash = () => {
    navigator.clipboard.writeText(passport.provenance.tokenHash);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4 max-w-5xl mx-auto w-full">
      {/* Hero Section */}
      <section className="relative w-full rounded-2xl overflow-hidden glass-card ambient-glow min-h-[58vh] sm:min-h-[62vh] flex flex-col justify-end p-5 sm:p-8 border border-[#8c947c]/30">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Lviv Polytechnic Main Building"
            className="w-full h-full object-cover object-center opacity-80 transition-transform duration-1000 ease-out hover:scale-105"
            src={passport.heroImage}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-[#0b1326]/60 to-transparent" />
        </div>

        {/* Hero Interactive Overlays / Tools Top Right */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={handleToggleAudio}
            className={`p-2.5 rounded-full backdrop-blur-md border transition-all ${
              isPlayingAudio
                ? 'bg-[#ccff80] text-[#213600] border-[#ccff80] animate-pulse shadow-[0_0_15px_rgba(204,255,128,0.4)]'
                : 'bg-[#171f33]/80 text-[#dae2fd] border-[#424936]/60 hover:text-[#ccff80]'
            }`}
            title="Аудіогід архітектури"
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            onClick={handleCopyHash}
            className="p-2.5 rounded-full bg-[#171f33]/80 border border-[#424936]/60 text-[#dae2fd] hover:text-[#ccff80] backdrop-blur-md transition-all"
            title="Скопіювати криптографічний хеш"
          >
            {copiedToken ? <Check className="w-4 h-4 text-[#ccff80]" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col gap-4 mt-auto">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <button
              onClick={onOpenNfcModal}
              className="px-3 py-1.5 bg-[#171f33]/90 backdrop-blur-md rounded-full text-[11px] font-mono font-bold border border-[#8c947c]/30 flex items-center gap-2 text-[#dae2fd] hover:border-[#ccff80]/60 transition-colors shadow-lg"
            >
              <span className={`w-2 h-2 rounded-full ${isVerified ? 'bg-[#ccff80] animate-pulse' : 'bg-[#fcce19]'}`} />
              <span className="tracking-wider">{passport.nfcStatus}</span>
            </button>

            <span className="text-xs font-mono font-semibold text-[#ccff80] px-3 py-1 rounded-full bg-[#171f33]/80 border border-[#424936]/50">
              {passport.edition}
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight uppercase text-[#dae2fd]">
              {passport.title}
            </h1>
            <p className="text-base sm:text-lg text-[#c2cab0] mt-2 max-w-3xl leading-relaxed">
              {passport.description}
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* University Metrics */}
        <section className="glass-card rounded-2xl p-6 md:col-span-2 border border-[#8c947c]/20 hover:border-[#ccff80]/30 transition-all">
          <div className="text-[11px] font-mono font-bold text-[#c2cab0] mb-6 uppercase tracking-widest border-b border-[#424936]/30 pb-2 flex items-center justify-between">
            <span>University Metrics</span>
            <span className="text-[10px] text-[#ccff80]">2026 OFFICIAL ARCHIVE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Rankings Cards */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between p-4 bg-[#171f33]/60 rounded-xl border border-[#424936]/30 hover:border-[#ccff80]/40 transition-colors">
                <span className="text-xs sm:text-sm font-mono text-[#c2cab0]">
                  Топ-200 Україна 2026
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-[#ccff80] font-mono">
                  {passport.metrics.topUkraineRank}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#171f33]/60 rounded-xl border border-[#424936]/30 hover:border-[#ccff80]/40 transition-colors">
                <span className="text-xs sm:text-sm font-mono text-[#c2cab0]">
                  Консолідований рейтинг 2026
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-[#ccff80] font-mono">
                  {passport.metrics.consolidatedRank}
                </span>
              </div>
            </div>

            {/* Students Metric Centerpiece */}
            <div className="flex flex-col items-center justify-center p-5 bg-[#171f33]/40 rounded-xl border border-[#424936]/30 text-center relative overflow-hidden">
              <div className="text-xs font-mono text-[#dae2fd] mb-2 uppercase tracking-widest opacity-70">
                Кількість студентів 2026
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#ccff80] font-mono tracking-tight text-glow-primary">
                  {passport.metrics.studentsCount}
                </span>
                <span className="text-xs font-mono text-[#c2cab0] uppercase tracking-wider">
                  {passport.metrics.studentsLabel}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Scale Metrics */}
        <section className="grid grid-cols-2 gap-4 md:col-span-2">
          <div className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-2 border border-[#8c947c]/20 hover:border-[#ccff80]/40 transition-all group">
            <div className="p-3 rounded-full bg-[#ccff80]/10 text-[#ccff80] group-hover:scale-110 transition-transform">
              <Building2 className="w-8 h-8" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-[#dae2fd] font-mono">
              {passport.scaleMetrics[0].value}
            </span>
            <span className="text-[11px] font-mono text-[#c2cab0] uppercase tracking-wide">
              {passport.scaleMetrics[0].label}
            </span>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-2 border border-[#8c947c]/20 hover:border-[#adc6ff]/40 transition-all group">
            <div className="p-3 rounded-full bg-[#adc6ff]/10 text-[#adc6ff] group-hover:scale-110 transition-transform">
              <Building className="w-8 h-8" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-[#dae2fd] font-mono">
              {passport.scaleMetrics[1].value}
            </span>
            <span className="text-[11px] font-mono text-[#c2cab0] uppercase tracking-wide">
              {passport.scaleMetrics[1].label}
            </span>
          </div>
        </section>
      </div>

      {/* History Facts Section */}
      <section className="glass-card rounded-2xl p-6 relative overflow-hidden border border-[#8c947c]/20">
        <div className="text-[11px] font-mono font-bold text-[#c2cab0] mb-6 uppercase tracking-widest border-b border-[#424936]/30 pb-2 flex items-center justify-between">
          <span>History Facts</span>
          <span className="text-[10px] text-[#ccff80] font-mono">CHRONICLE 1816–2026</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {passport.historyFacts.map((fact) => (
            <div
              key={fact.id}
              onClick={() => onSelectFact(fact)}
              className="p-5 bg-[#171f33]/60 border border-[#424936]/30 rounded-xl hover:border-[#ccff80]/40 hover:bg-[#171f33]/90 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ccff80]/10 text-[#ccff80] border border-[#ccff80]/20">
                  {fact.tag}
                </span>
                <span className="text-[11px] font-mono text-[#c2cab0] group-hover:text-[#ccff80] flex items-center gap-1">
                  <span>Докладніше</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
              <p className="text-sm sm:text-base font-normal text-[#dae2fd] leading-relaxed">
                {fact.fullText}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
