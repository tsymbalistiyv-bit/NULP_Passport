import React, { useState } from 'react';
import { Compass, Layers, Ruler, MapPin, CheckCircle, Shield, FileText, Download } from 'lucide-react';
import { BuildingPassport } from '../types';

interface SpecificationsViewProps {
  passport: BuildingPassport;
}

export const SpecificationsView: React.FC<SpecificationsViewProps> = ({ passport }) => {
  const [activeFloor, setActiveFloor] = useState<'ground' | 'first' | 'second' | 'roof'>('first');

  const floorPlans = {
    ground: {
      title: 'Цокольний поверх & Вестибюль',
      description: 'Центральний хол з гардеробами, фундаментальні пілони з тесаного пісковику, доступ до внутрішнього подвір’я.',
      area: '6 800 м²',
      keyRooms: ['Головний вестибюль', 'Кафедра нарисної геометрії', 'Архівні фонди'],
    },
    first: {
      title: '1-й Поверх — Актова зала & Ректорат',
      description: 'Головна парадна зона з Актовою залою та 11 алегоріями Яна Матейка, зала засідань Вченої ради, кабінет ректора.',
      area: '8 400 м²',
      keyRooms: ['Актова зала Матейка', 'Зала Захаревича', 'Кабінети ректорату'],
    },
    second: {
      title: '2-й Поверх — Професорські аудиторії',
      description: 'Великі лекційні амфітеатри, наукові лабораторії та кафедральні бібліотеки.',
      area: '7 900 м²',
      keyRooms: ['Аудиторія 214', 'Аудиторія 226', 'Лабораторія наноматеріалів'],
    },
    roof: {
      title: 'Мансарда & Світловий ліхтар',
      description: 'Історичні засклені світлові ліхтарі, що освітлюють центральні сходи та атріум природним світлом.',
      area: '5 350 м²',
      keyRooms: ['Купольний світловий атріум', 'Технічні ферми перекриття'],
    },
  };

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
      {/* Header Banner */}
      <div className="glass-card rounded-2xl p-6 border border-[#8c947c]/20">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#ccff80]" />
            <h2 className="text-xl font-bold font-mono text-[#dae2fd] uppercase tracking-wide">
              SPECIFICATIONS & ARCHITECTURAL CAD
            </h2>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded bg-[#ccff80]/15 text-[#ccff80] border border-[#ccff80]/30">
            CAD REF: LP-ARCH-1877
          </span>
        </div>
        <p className="text-sm text-[#c2cab0]">
          Повні просторові, інженерні та матеріалознавчі характеристики головного корпусу Національного університету «Львівська політехніка».
        </p>
      </div>

      {/* Technical Spec Grids */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {passport.technicalSpecs.map((spec, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-5 border border-[#8c947c]/20 flex flex-col justify-between"
          >
            <div>
              <div className="text-[11px] font-mono text-[#ccff80] font-bold uppercase tracking-wider mb-4 border-b border-[#424936]/30 pb-2">
                {spec.category}
              </div>
              <div className="space-y-3">
                {spec.items.map((item, i) => (
                  <div key={i} className="text-xs">
                    <span className="text-[#c2cab0] font-mono block text-[10px] uppercase">
                      {item.key}
                    </span>
                    <span className="text-[#dae2fd] font-medium leading-tight">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Floor Plan Selector */}
      <div className="glass-card rounded-2xl p-6 border border-[#8c947c]/20">
        <div className="text-[11px] font-mono font-bold text-[#c2cab0] mb-4 uppercase tracking-widest flex items-center justify-between border-b border-[#424936]/30 pb-2">
          <span>SPATIAL LEVELS & FLOOR PLAN BLUEPRINT</span>
          <span className="text-[10px] text-[#ccff80] font-mono">BIM LEVEL 4</span>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {(['ground', 'first', 'second', 'roof'] as const).map((floor) => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                activeFloor === floor
                  ? 'bg-[#ccff80] text-[#213600] font-bold shadow-[0_0_15px_rgba(204,255,128,0.3)]'
                  : 'bg-[#171f33]/80 text-[#c2cab0] border border-[#424936]/40 hover:text-[#dae2fd]'
              }`}
            >
              {floor === 'ground' && '0. Цоколь & Хол'}
              {floor === 'first' && '1. Актова Зала (Матейко)'}
              {floor === 'second' && '2. Аудиторний рівень'}
              {floor === 'roof' && '3. Мансарда & Купол'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 p-6 bg-[#060e20] rounded-xl border border-[#424936]/40 relative min-h-[220px] flex flex-col justify-center">
            {/* Visual CAD Blueprint Schematic */}
            <div className="absolute inset-0 opacity-20 pointer-events-none grid grid-cols-6 grid-rows-4 gap-1 p-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-[#ccff80]/40 rounded-sm" />
              ))}
            </div>

            <div className="relative z-10">
              <div className="text-xs font-mono text-[#ccff80] mb-1">
                LEVEL: {activeFloor.toUpperCase()}
              </div>
              <h3 className="text-lg font-bold text-[#dae2fd] mb-2">
                {floorPlans[activeFloor].title}
              </h3>
              <p className="text-sm text-[#c2cab0] leading-relaxed mb-4">
                {floorPlans[activeFloor].description}
              </p>

              <div className="flex flex-wrap gap-2">
                {floorPlans[activeFloor].keyRooms.map((room, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-[#171f33] border border-[#ccff80]/30 text-[11px] font-mono text-[#ccff80]"
                  >
                    ● {room}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="p-4 bg-[#171f33]/60 rounded-xl border border-[#424936]/30">
              <span className="text-[10px] font-mono text-[#c2cab0] uppercase">Корисна площа ярусу</span>
              <div className="text-2xl font-bold font-mono text-[#ccff80]">
                {floorPlans[activeFloor].area}
              </div>
            </div>
            <div className="p-4 bg-[#171f33]/60 rounded-xl border border-[#424936]/30">
              <span className="text-[10px] font-mono text-[#c2cab0] uppercase">Статус збереженості</span>
              <div className="text-sm font-semibold text-[#dae2fd] flex items-center gap-1.5 mt-1">
                <CheckCircle className="w-4 h-4 text-[#ccff80]" />
                Автентична реставрація 100%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geolocation & Coordinates */}
      <div className="glass-card rounded-2xl p-6 border border-[#8c947c]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono text-[#ccff80] uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Географічна локація
          </div>
          <div className="text-base font-semibold text-[#dae2fd]">
            {passport.coordinates.address}
          </div>
          <div className="text-xs font-mono text-[#c2cab0] mt-0.5">
            GPS: {passport.coordinates.lat}° N, {passport.coordinates.lng}° E
          </div>
        </div>

        <a
          href={`https://www.google.com/maps?q=${passport.coordinates.lat},${passport.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-[#171f33] border border-[#424936] text-xs font-mono text-[#ccff80] hover:bg-[#ccff80]/15 hover:border-[#ccff80]/50 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <MapPin className="w-4 h-4" />
          Відкрити на мапі
        </a>
      </div>
    </div>
  );
};
