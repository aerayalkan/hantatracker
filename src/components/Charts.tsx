'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  Legend,
} from 'recharts';
import { TimeSeriesData, CountryData } from '@/types';
import { TrendingUp, BarChart3, PieChart as PieIcon } from 'lucide-react';

interface TrendChartProps {
  data: TimeSeriesData[];
}

const tooltipStyle = {
  backgroundColor: 'rgba(5, 8, 22, 0.95)',
  border: '1px solid rgba(148, 163, 184, 0.15)',
  borderRadius: '10px',
  color: '#f1f5f9',
  fontSize: '12px',
  padding: '10px 12px',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
};

const ChartHeader = ({ icon: Icon, title, subtitle, accent }: { icon: React.ElementType; title: string; subtitle?: string; accent: string }) => (
  <div className="flex items-start justify-between mb-5">
    <div>
      <h3 className="text-[15px] font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h3>
      {subtitle && <p className="text-[11px] text-slate-500 mt-0.5">{subtitle}</p>}
    </div>
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${accent}`}>
      <Icon className="w-4 h-4" />
    </div>
  </div>
);

export function TrendChart({ data }: TrendChartProps) {
  return (
    <div className="glass-card rounded-2xl p-5">
      <ChartHeader
        icon={TrendingUp}
        title="Outbreak Timeline"
        subtitle="Cumulative cases & deaths · 2026"
        accent="bg-red-500/10 text-red-400"
      />
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="casesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="deathsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.06)" vertical={false} />
            <XAxis
              dataKey="date"
              stroke="#64748b"
              tick={{ fill: '#64748b', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: string) => v.substring(5)}
            />
            <YAxis
              stroke="#64748b"
              tick={{ fill: '#64748b', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: 'rgba(239, 68, 68, 0.3)', strokeWidth: 1 }} />
            <Area
              type="monotone"
              dataKey="cases"
              stroke="#ef4444"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#casesGradient)"
              name="Cases"
              dot={{ fill: '#ef4444', r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: '#ef4444', stroke: '#fff', strokeWidth: 2 }}
            />
            <Area
              type="monotone"
              dataKey="deaths"
              stroke="#94a3b8"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#deathsGradient)"
              name="Deaths"
              dot={{ fill: '#94a3b8', r: 2.5, strokeWidth: 0 }}
              activeDot={{ r: 4.5, fill: '#94a3b8', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/[0.04]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="text-[11px] text-slate-400">Cases</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
          <span className="text-[11px] text-slate-400">Deaths</span>
        </div>
      </div>
    </div>
  );
}

interface CountryBarChartProps {
  data: CountryData[];
}

export function CountryBarChart({ data }: CountryBarChartProps) {
  const colors = ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16'];
  const topData = data.slice(0, 6);

  return (
    <div className="glass-card rounded-2xl p-5">
      <ChartHeader
        icon={BarChart3}
        title="Top Affected Countries"
        subtitle="Ranked by confirmed cases"
        accent="bg-orange-500/10 text-orange-400"
      />
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.06)" horizontal={true} vertical={false} />
            <XAxis
              type="number"
              stroke="#64748b"
              tick={{ fill: '#64748b', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="country"
              stroke="#64748b"
              tick={{ fill: '#cbd5e1', fontSize: 11, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
              width={90}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              cursor={{ fill: 'rgba(239, 68, 68, 0.05)' }}
              formatter={(value) => [value as number, 'Cases']}
            />
            <Bar dataKey="totalCases" radius={[0, 6, 6, 0]}>
              {topData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

interface VirusDistributionProps {
  outbreaks: { virusType?: string; cases: number }[];
}

export function VirusDistribution({ outbreaks }: VirusDistributionProps) {
  const distribution = outbreaks.reduce((acc, outbreak) => {
    const virus = outbreak.virusType || 'Unknown';
    acc[virus] = (acc[virus] || 0) + outbreak.cases;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(distribution)
    .filter(([, v]) => v > 0)
    .map(([name, value]) => ({ name, value }));

  const colors = ['#ef4444', '#f97316', '#f59e0b', '#22c55e', '#3b82f6', '#8b5cf6'];

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="glass-card rounded-2xl p-5">
      <ChartHeader
        icon={PieIcon}
        title="Cases by Virus Strain"
        subtitle="Distribution across active outbreaks"
        accent="bg-purple-500/10 text-purple-400"
      />
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={3}
              dataKey="value"
              stroke="#050816"
              strokeWidth={2}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} />
            <Legend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              iconType="circle"
              iconSize={8}
              formatter={(value: string) => (
                <span style={{ color: '#cbd5e1', fontSize: '11px', marginLeft: '4px' }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
