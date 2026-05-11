'use client';

import React, { useState } from 'react';
import { Outbreak } from '@/types';
import { format } from 'date-fns';
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  AlertCircle,
  Eye,
  CheckCircle,
  Search,
} from 'lucide-react';
import clsx from 'clsx';

interface OutbreakTableProps {
  outbreaks: Outbreak[];
}

type SortField = 'country' | 'cases' | 'deaths' | 'date' | 'status';
type SortDirection = 'asc' | 'desc';

export default function OutbreakTable({ outbreaks }: OutbreakTableProps) {
  const [sortField, setSortField] = useState<SortField>('cases');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'monitoring'>('all');
  const [query, setQuery] = useState('');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const filtered = outbreaks
    .filter((o) => (statusFilter === 'all' ? true : o.status === statusFilter))
    .filter((o) => {
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        o.country.toLowerCase().includes(q) ||
        o.region?.toLowerCase().includes(q) ||
        o.virusType?.toLowerCase().includes(q)
      );
    });

  const sortedOutbreaks = [...filtered].sort((a, b) => {
    let comparison = 0;
    switch (sortField) {
      case 'country':
        comparison = a.country.localeCompare(b.country);
        break;
      case 'cases':
        comparison = a.cases - b.cases;
        break;
      case 'deaths':
        comparison = a.deaths - b.deaths;
        break;
      case 'date':
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
        break;
      case 'status':
        const statusOrder = { active: 0, monitoring: 1, resolved: 2 };
        comparison = statusOrder[a.status] - statusOrder[b.status];
        break;
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const SortHeader = ({ field, children, align = 'left' }: { field: SortField; children: React.ReactNode; align?: 'left' | 'right' }) => (
    <th
      className={clsx(
        'px-4 py-3.5 text-[10px] font-bold text-slate-500 uppercase tracking-[0.12em] cursor-pointer hover:text-slate-300 transition-colors select-none',
        align === 'right' ? 'text-right' : 'text-left'
      )}
      onClick={() => handleSort(field)}
    >
      <div className={clsx('inline-flex items-center gap-1', align === 'right' && 'flex-row-reverse')}>
        {children}
        <span className="text-slate-600">
          {sortField === field ? (
            sortDirection === 'asc' ? (
              <ChevronUp className="w-3 h-3 text-red-400" />
            ) : (
              <ChevronDown className="w-3 h-3 text-red-400" />
            )
          ) : (
            <ChevronDown className="w-3 h-3 opacity-30" />
          )}
        </span>
      </div>
    </th>
  );

  const StatusBadge = ({ status }: { status: Outbreak['status'] }) => {
    const config = {
      active: {
        icon: AlertCircle,
        className: 'bg-red-500/10 text-red-400 border-red-500/25',
        dotClass: 'bg-red-500',
        animate: true,
      },
      monitoring: {
        icon: Eye,
        className: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
        dotClass: 'bg-amber-500',
        animate: false,
      },
      resolved: {
        icon: CheckCircle,
        className: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
        dotClass: 'bg-emerald-500',
        animate: false,
      },
    };
    const { className, dotClass, animate } = config[status];

    return (
      <span
        className={clsx(
          'inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border',
          className
        )}
      >
        <span className={clsx('w-1.5 h-1.5 rounded-full', dotClass, animate && 'animate-pulse')} />
        {status}
      </span>
    );
  };

  const getFlagEmoji = (countryCode: string): string => {
    if (countryCode === 'AQ') return '🇦🇶';
    if (countryCode === 'XX' || !countryCode || countryCode.length !== 2) return '🌍';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2 flex-wrap">
          {(['all', 'active', 'monitoring'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={clsx(
                'px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all border',
                statusFilter === s
                  ? 'bg-white/[0.08] text-white border-white/[0.12]'
                  : 'bg-transparent text-slate-500 border-transparent hover:text-slate-300 hover:bg-white/[0.04]'
              )}
            >
              {s === 'all' ? 'All' : s}
              <span className="ml-1.5 text-[10px] text-slate-500">
                ({s === 'all' ? outbreaks.length : outbreaks.filter((o) => o.status === s).length})
              </span>
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search country, region…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-64 pl-9 pr-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-500/30 focus:bg-white/[0.05]"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-white/[0.06]">
              <SortHeader field="country">Location</SortHeader>
              <SortHeader field="cases" align="right">Cases</SortHeader>
              <SortHeader field="deaths" align="right">Deaths</SortHeader>
              <th className="px-4 py-3.5 text-left text-[10px] font-bold text-slate-500 uppercase tracking-[0.12em]">
                Virus
              </th>
              <SortHeader field="status">Status</SortHeader>
              <SortHeader field="date">Updated</SortHeader>
              <th className="px-4 py-3.5 text-left text-[10px] font-bold text-slate-500 uppercase tracking-[0.12em]">
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedOutbreaks.map((outbreak, i) => (
              <React.Fragment key={outbreak.id}>
                <tr
                  className={clsx(
                    'border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors cursor-pointer',
                    i % 2 === 1 && 'bg-white/[0.01]'
                  )}
                  onClick={() => setExpandedRow(expandedRow === outbreak.id ? null : outbreak.id)}
                >
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl leading-none">{getFlagEmoji(outbreak.countryCode)}</span>
                      <div>
                        <p className="font-semibold text-white text-sm leading-tight">{outbreak.country}</p>
                        {outbreak.region && (
                          <p className="text-[11px] text-slate-500 mt-0.5">{outbreak.region}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-right whitespace-nowrap">
                    <span className={clsx(
                      'text-lg font-bold tabular-nums',
                      outbreak.cases > 0 ? 'text-red-400' : 'text-slate-600'
                    )} style={{ fontFamily: 'var(--font-display)' }}>
                      {outbreak.cases}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right whitespace-nowrap">
                    <span
                      className={clsx(
                        'text-lg font-bold tabular-nums',
                        outbreak.deaths > 0 ? 'text-slate-200' : 'text-slate-600'
                      )}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {outbreak.deaths}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span className="text-xs text-slate-300 font-medium">
                      {outbreak.virusType || '—'}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <StatusBadge status={outbreak.status} />
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-xs text-slate-400 tabular-nums">
                    {format(new Date(outbreak.date), 'MMM d, yyyy')}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {outbreak.sourceUrl ? (
                      <a
                        href={outbreak.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-red-400 transition-colors font-medium"
                      >
                        {outbreak.source}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400">{outbreak.source}</span>
                    )}
                  </td>
                </tr>
                {expandedRow === outbreak.id && outbreak.notes && (
                  <tr className="bg-white/[0.02]">
                    <td colSpan={7} className="px-4 py-3 border-b border-white/[0.04]">
                      <div className="flex gap-3 pl-12">
                        <div className="w-1 bg-red-500/40 rounded-full" />
                        <p className="text-xs text-slate-400 italic leading-relaxed">
                          {outbreak.notes}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {sortedOutbreaks.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-sm text-slate-500">No outbreaks match your filters.</p>
        </div>
      )}
    </div>
  );
}
