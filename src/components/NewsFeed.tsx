'use client';

import { NewsItem } from '@/types';
import { format, formatDistanceToNow } from 'date-fns';
import {
  AlertTriangle,
  FlaskConical,
  FileText,
  Shield,
  ArrowUpRight,
} from 'lucide-react';
import clsx from 'clsx';

interface NewsFeedProps {
  news: NewsItem[];
}

export default function NewsFeed({ news }: NewsFeedProps) {
  const getCategoryConfig = (category: NewsItem['category']) => {
    const configs = {
      outbreak: {
        icon: AlertTriangle,
        className: 'bg-red-500/10 text-red-400 border-red-500/20',
        accentDot: 'bg-red-500',
        label: 'Outbreak',
      },
      research: {
        icon: FlaskConical,
        className: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        accentDot: 'bg-blue-500',
        label: 'Research',
      },
      policy: {
        icon: FileText,
        className: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        accentDot: 'bg-purple-500',
        label: 'Policy',
      },
      advisory: {
        icon: Shield,
        className: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        accentDot: 'bg-amber-500',
        label: 'Advisory',
      },
    };
    return configs[category];
  };

  if (news.length === 0) {
    return (
      <div className="glass-card rounded-2xl p-8 text-center">
        <p className="text-sm text-slate-500">No recent updates available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      {news.map((item, idx) => {
        const config = getCategoryConfig(item.category);
        const Icon = config.icon;
        const isLatest = idx === 0;

        return (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block glass-card rounded-xl p-4 group transition-all hover:translate-y-[-1px]"
          >
            <div className="flex items-start gap-3">
              <div
                className={clsx(
                  'flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center border',
                  config.className
                )}
              >
                <Icon className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span
                    className={clsx(
                      'inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.1em] border',
                      config.className
                    )}
                  >
                    <span className={clsx('w-1 h-1 rounded-full', config.accentDot)} />
                    {config.label}
                  </span>
                  {isLatest && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.1em] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      New
                    </span>
                  )}
                  <span className="text-[10px] text-slate-500 tabular-nums ml-auto">
                    {formatDistanceToNow(new Date(item.date), { addSuffix: true })}
                  </span>
                </div>

                <h3 className="font-semibold text-white text-[13px] leading-snug group-hover:text-red-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-[12px] text-slate-400 line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>

                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                    {item.source} · {format(new Date(item.date), 'MMM d')}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-slate-500 group-hover:text-red-400 font-semibold uppercase tracking-wider transition-colors">
                    Read
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
