import React from 'react';
import {
  BarChart3,
  TrendingUp,
  Users,
  GraduationCap,
  Award,
  Zap,
  Activity,
  Compass,
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
} from 'recharts';
import { BuildingPassport } from '../types';

interface AnalyticsViewProps {
  passport: BuildingPassport;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({ passport }) => {
  // Rankings historical data
  const rankingTrend = [
    { year: '2021', top200: 4, consolidated: 5 },
    { year: '2022', top200: 3, consolidated: 4 },
    { year: '2023', top200: 2, consolidated: 4 },
    { year: '2024', top200: 2, consolidated: 3 },
    { year: '2025', top200: 1, consolidated: 3 },
    { year: '2026', top200: 1, consolidated: 3 },
  ];

  // Institute breakdown data
  const instituteData = [
    { name: 'ІКНІ (CS & AI)', students: 6850 },
    { name: 'ІКТА (Automation & IoT)', students: 4920 },
    { name: 'ІАРХ (Architecture & Design)', students: 3840 },
    { name: 'ІНПП (Law & Psychology)', students: 4210 },
    { name: 'ІХХТ (Chemical Tech)', students: 3100 },
    { name: 'ІЕСК (Energy & Control)', students: 3450 },
    { name: 'ІТРЕ (Telecom & Radio)', students: 2890 },
    { name: 'Інші підрозділи', students: 3391 },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
      {/* Analytics Header */}
      <div className="glass-card rounded-2xl p-6 border border-[#8c947c]/20">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#ccff80]" />
            <h2 className="text-xl font-bold font-mono text-[#dae2fd] uppercase tracking-wide">
              UNIVERSITY ANALYTICS & TELEMETRY 2026
            </h2>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded bg-[#ccff80]/15 text-[#ccff80] border border-[#ccff80]/30">
            TOTAL: 32 651 STUDENTS
          </span>
        </div>
        <p className="text-sm text-[#c2cab0]">
          Динаміка національних рейтингів, розподіл студентів за інститутами та показники кампусної інфраструктури.
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card rounded-xl p-4 border border-[#8c947c]/20 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[#c2cab0] mb-2">
            <span className="text-[11px] font-mono uppercase">Топ-200 Україна</span>
            <Award className="w-4 h-4 text-[#ccff80]" />
          </div>
          <div className="text-3xl font-bold font-mono text-[#ccff80]">#1</div>
          <div className="text-[10px] text-[#c2cab0] mt-1 font-mono">
            Лідер серед ВНЗ України
          </div>
        </div>

        <div className="glass-card rounded-xl p-4 border border-[#8c947c]/20 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[#c2cab0] mb-2">
            <span className="text-[11px] font-mono uppercase">Консолідований</span>
            <TrendingUp className="w-4 h-4 text-[#ccff80]" />
          </div>
          <div className="text-3xl font-bold font-mono text-[#ccff80]">#3</div>
          <div className="text-[10px] text-[#c2cab0] mt-1 font-mono">
            Стабільний топ-3 рейтинг
          </div>
        </div>

        <div className="glass-card rounded-xl p-4 border border-[#8c947c]/20 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[#c2cab0] mb-2">
            <span className="text-[11px] font-mono uppercase">Студентська спільнота</span>
            <Users className="w-4 h-4 text-[#adc6ff]" />
          </div>
          <div className="text-3xl font-bold font-mono text-[#dae2fd]">32 651</div>
          <div className="text-[10px] text-[#c2cab0] mt-1 font-mono">
            Бакалаври, магістри, PhD
          </div>
        </div>

        <div className="glass-card rounded-xl p-4 border border-[#8c947c]/20 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[#c2cab0] mb-2">
            <span className="text-[11px] font-mono uppercase">Кампус</span>
            <Zap className="w-4 h-4 text-[#fcce19]" />
          </div>
          <div className="text-3xl font-bold font-mono text-[#dae2fd]">35+ / 15</div>
          <div className="text-[10px] text-[#c2cab0] mt-1 font-mono">
            Корпуси & Гуртожитки
          </div>
        </div>
      </div>

      {/* Chart 1: Ranking History */}
      <div className="glass-card rounded-2xl p-6 border border-[#8c947c]/20">
        <div className="text-[11px] font-mono font-bold text-[#c2cab0] mb-4 uppercase tracking-widest flex items-center justify-between border-b border-[#424936]/30 pb-2">
          <span>RANKING EVOLUTION (2021 - 2026)</span>
          <span className="text-[10px] text-[#ccff80] font-mono">LOWER IS BETTER (#1 IS TOP)</span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={rankingTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRank" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ccff80" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#ccff80" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d3449" vertical={false} />
              <XAxis dataKey="year" stroke="#c2cab0" tick={{ fill: '#c2cab0', fontSize: 11, fontFamily: 'JetBrains Mono' }} />
              <YAxis reversed domain={[1, 6]} stroke="#c2cab0" tick={{ fill: '#c2cab0', fontSize: 11, fontFamily: 'JetBrains Mono' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#131b2e',
                  borderColor: '#424936',
                  borderRadius: '8px',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '12px',
                  color: '#dae2fd',
                }}
              />
              <Area
                type="monotone"
                dataKey="top200"
                name="Топ-200 Україна (# позиція)"
                stroke="#ccff80"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRank)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Student Enrollment by Institute */}
      <div className="glass-card rounded-2xl p-6 border border-[#8c947c]/20">
        <div className="text-[11px] font-mono font-bold text-[#c2cab0] mb-4 uppercase tracking-widest flex items-center justify-between border-b border-[#424936]/30 pb-2">
          <span>STUDENT DISTRIBUTION BY INSTITUTES (2026)</span>
          <span className="text-[10px] text-[#adc6ff] font-mono">HEADCOUNT</span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={instituteData} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d3449" vertical={false} />
              <XAxis
                dataKey="name"
                stroke="#c2cab0"
                tick={{ fill: '#c2cab0', fontSize: 10, fontFamily: 'JetBrains Mono' }}
                interval={0}
                angle={-15}
                textAnchor="end"
              />
              <YAxis stroke="#c2cab0" tick={{ fill: '#c2cab0', fontSize: 11, fontFamily: 'JetBrains Mono' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#131b2e',
                  borderColor: '#424936',
                  borderRadius: '8px',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '12px',
                  color: '#dae2fd',
                }}
              />
              <Bar dataKey="students" name="Кількість студентів" fill="#adc6ff" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
