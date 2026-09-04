import React, { useState } from 'react';
import { History, Calendar, Award, Sparkles, Filter, BookOpen } from 'lucide-react';
import { BuildingPassport, HistoryFact } from '../types';

interface HistoryTimelineViewProps {
  passport: BuildingPassport;
  onSelectFact: (fact: HistoryFact) => void;
}

export const HistoryTimelineView: React.FC<HistoryTimelineViewProps> = ({
  passport,
  onSelectFact,
}) => {
  const [filter, setFilter] = useState<'all' | 'architecture' | 'art' | 'status'>('all');

  const timelineEvents = [
    {
      year: '1816',
      title: 'Заснування Цісарсько-королівської реальної школи',
      category: 'status',
      description: 'Початок інженерно-технічної вищої освіти у Львові. Перші курси креслення, механіки та математики.',
      badge: 'ВИТОКИ',
    },
    {
      year: '1844',
      title: 'Створення Технічної академії',
      category: 'status',
      description: 'Реорганізація навчального закладу в повноцінну Академію технічних наук з окремими факультетами.',
      badge: 'АКАДЕМІЯ',
    },
    {
      year: '1872',
      title: 'Юліан Захаревич призначений головним зодчим',
      category: 'architecture',
      description: 'Видатний архітектор та професор розробляє амбітний неоренесансний ансамбль для нового академічного кампусу.',
      badge: 'АРХІТЕКТОР',
    },
    {
      year: '1877',
      title: 'Урочисте відкриття Головного корпусу',
      category: 'architecture',
      description: 'Будівництво завершено. Величний 6-колонний портик, скульптури Марконі та Шредля стають символом інженерної столиці Галичини.',
      badge: 'ШЕДЕВР',
    },
    {
      year: '1880-1888',
      title: 'Цикл картин Яна Матейка «Тріумф прогресу»',
      category: 'art',
      description: '11 монументальних алегоричних полотен встановлено в Актовій залі, що збереглися у первозданному вигляді дотепер.',
      badge: 'МИСТЕЦТВО',
    },
    {
      year: '1930',
      title: 'Розбудова модерністського кампусу',
      category: 'architecture',
      description: 'Професор Тадеуш Обмінський зводить спеціалізоване залізобетонне сховище Науково-технічної бібліотеки.',
      badge: 'МОДЕРНІЗМ',
    },
    {
      year: 'Листопад 2024',
      title: 'Національний статус пам\'ятки України',
      category: 'status',
      description: 'Офіційне урядове рішення про надання Головному корпусу статусу пам\'ятки архітектури та монументального мистецтва національного значення.',
      badge: 'ДЕРЖАВНА ОХОРОНА',
    },
    {
      year: '2026',
      title: '№1 у рейтингу Топ-200 Україна & Цифровий Твін',
      category: 'status',
      description: '32 651 студент, лідерство в наукових грантах та створення криптографічного цифрового паспорта Chronos Protocol.',
      badge: 'СЬОГОДЕННЯ',
    },
  ];

  const filteredEvents = timelineEvents.filter(
    (ev) => filter === 'all' || ev.category === filter
  );

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="glass-card rounded-2xl p-6 border border-[#8c947c]/20">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-[#ccff80]" />
            <h2 className="text-xl font-bold font-mono text-[#dae2fd] uppercase tracking-wide">
              CHRONOLOGY & HISTORICAL ARCHIVE
            </h2>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded bg-[#ccff80]/15 text-[#ccff80] border border-[#ccff80]/30">
            1816 — 2026
          </span>
        </div>
        <p className="text-sm text-[#c2cab0]">
          Повний часопис розвитку найстарішого технічного університету України та його головної архітектурної перлини.
        </p>

        {/* Filter chips */}
        <div className="flex gap-2 mt-4 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              filter === 'all'
                ? 'bg-[#ccff80] text-[#213600] font-bold'
                : 'bg-[#171f33] text-[#c2cab0] hover:text-[#dae2fd]'
            }`}
          >
            Усі віхи ({timelineEvents.length})
          </button>
          <button
            onClick={() => setFilter('architecture')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              filter === 'architecture'
                ? 'bg-[#ccff80] text-[#213600] font-bold'
                : 'bg-[#171f33] text-[#c2cab0] hover:text-[#dae2fd]'
            }`}
          >
            Архітектура & Будівництво
          </button>
          <button
            onClick={() => setFilter('art')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              filter === 'art'
                ? 'bg-[#ccff80] text-[#213600] font-bold'
                : 'bg-[#171f33] text-[#c2cab0] hover:text-[#dae2fd]'
            }`}
          >
            Мистецтво (Матейко, Марконі)
          </button>
          <button
            onClick={() => setFilter('status')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              filter === 'status'
                ? 'bg-[#ccff80] text-[#213600] font-bold'
                : 'bg-[#171f33] text-[#c2cab0] hover:text-[#dae2fd]'
            }`}
          >
            Академічний & Правовий статус
          </button>
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#424936]/50 space-y-8 my-2">
        {filteredEvents.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#131b2e] border-2 border-[#ccff80] group-hover:scale-125 group-hover:bg-[#ccff80] transition-all shadow-[0_0_10px_rgba(204,255,128,0.5)]" />

            <div className="glass-card rounded-xl p-5 border border-[#8c947c]/20 hover:border-[#ccff80]/40 transition-all">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base sm:text-lg font-bold text-[#ccff80]">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171f33] text-[#c2cab0] border border-[#424936]/40">
                    {item.badge}
                  </span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-[#dae2fd] mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-[#c2cab0] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
