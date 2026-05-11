import { RefreshCw, Database, ShieldCheck } from 'lucide-react';
import { format } from 'date-fns';

interface HeroSectionProps {
  lastUpdated: string;
  sourceCount: number;
  totalCountries: number;
}

export default function HeroSection({ lastUpdated, sourceCount, totalCountries }: HeroSectionProps) {
  return (
    <section className="relative pt-12 pb-8 lg:pt-20 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          {/* Status Pill */}
          <div className="flex flex-wrap items-center gap-2 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-[11px] font-bold text-red-400 uppercase tracking-[0.15em]">
                Active Outbreak
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                MV Hondius · WHO DON 600
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="max-w-5xl animate-fade-in-up delay-100">
            <h1
              className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="gradient-text">Real-time</span>
              <br />
              <span className="text-white">global </span>
              <span className="gradient-text-danger">hantavirus</span>
              <br />
              <span className="text-white">intelligence.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed animate-fade-in-up delay-200">
            Aggregated data from{' '}
            <span className="text-white font-semibold">WHO, ECDC, CDC, UKHSA, NICD</span>{' '}
            and national health authorities. Live outbreak map, verified case counts, and updates
            from official surveillance networks.
          </p>

          {/* Meta info bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium leading-none">
                  Last Updated
                </p>
                <p className="text-[13px] text-slate-200 font-medium tabular-nums mt-0.5">
                  {format(new Date(lastUpdated), 'MMM d, yyyy · HH:mm')} UTC
                </p>
              </div>
            </div>

            <div className="h-8 w-px bg-white/[0.06]" />

            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium leading-none">
                  Data Sources
                </p>
                <p className="text-[13px] text-slate-200 font-medium tabular-nums mt-0.5">
                  {sourceCount} verified feeds
                </p>
              </div>
            </div>

            <div className="h-8 w-px bg-white/[0.06]" />

            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium leading-none">
                  Tracking
                </p>
                <p className="text-[13px] text-slate-200 font-medium tabular-nums mt-0.5">
                  {totalCountries} countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
