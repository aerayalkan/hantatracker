import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import clsx from 'clsx';

interface StatsCardProps {
  title: string;
  value: number | string;
  change?: number;
  changeLabel?: string;
  icon: LucideIcon;
  variant?: 'default' | 'danger' | 'warning' | 'success';
  subtitle?: string;
}

export default function StatsCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  variant = 'default',
  subtitle,
}: StatsCardProps) {
  const variantStyles = {
    default: {
      cardClass: 'glass-card',
      iconBg: 'bg-slate-700/50',
      iconColor: 'text-slate-300',
      glowClass: '',
      accentLine: 'from-slate-500/40 to-transparent',
    },
    danger: {
      cardClass: 'glass-card-danger',
      iconBg: 'bg-red-500/20',
      iconColor: 'text-red-400',
      glowClass: 'glow-red',
      accentLine: 'from-red-500/60 to-transparent',
    },
    warning: {
      cardClass: 'glass-card-warning',
      iconBg: 'bg-amber-500/20',
      iconColor: 'text-amber-400',
      glowClass: 'glow-amber',
      accentLine: 'from-amber-500/60 to-transparent',
    },
    success: {
      cardClass: 'glass-card-success',
      iconBg: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
      glowClass: '',
      accentLine: 'from-emerald-500/60 to-transparent',
    },
  };

  const styles = variantStyles[variant];

  const getTrendIcon = () => {
    if (change === undefined) return null;
    if (change > 0) return <TrendingUp className="w-3 h-3" />;
    if (change < 0) return <TrendingDown className="w-3 h-3" />;
    return <Minus className="w-3 h-3" />;
  };

  const getTrendColor = () => {
    if (change === undefined) return 'text-slate-400';
    if (variant === 'success') {
      return change > 0 ? 'text-emerald-400' : change < 0 ? 'text-red-400' : 'text-slate-400';
    }
    return change > 0 ? 'text-red-400' : change < 0 ? 'text-emerald-400' : 'text-slate-400';
  };

  return (
    <div className={clsx('relative rounded-2xl p-5 overflow-hidden group', styles.cardClass)}>
      <div className={clsx('absolute top-0 left-0 right-0 h-px bg-gradient-to-r', styles.accentLine)} />

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.12em]">
              {title}
            </p>
          </div>

          <p className="text-4xl font-bold text-white tracking-tight tabular-nums leading-none"
             style={{ fontFamily: 'var(--font-display)' }}>
            {typeof value === 'number' ? value.toLocaleString('en-US') : value}
          </p>

          {subtitle && (
            <p className="mt-2 text-xs text-slate-500">{subtitle}</p>
          )}

          {change !== undefined && (
            <div className="flex items-center gap-1.5 mt-3">
              <span className={clsx(
                'inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-semibold tabular-nums',
                getTrendColor(),
                variant === 'danger' && change > 0 && 'bg-red-500/10',
                variant === 'warning' && change > 0 && 'bg-amber-500/10',
              )}>
                {getTrendIcon()}
                {change > 0 ? '+' : ''}{change}
              </span>
              {changeLabel && (
                <span className="text-[11px] text-slate-500">{changeLabel}</span>
              )}
            </div>
          )}
        </div>

        <div className={clsx(
          'flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110',
          styles.iconBg
        )}>
          <Icon className={clsx('w-5 h-5', styles.iconColor)} strokeWidth={2} />
        </div>
      </div>

      <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl pointer-events-none"
           style={{
             background: variant === 'danger' ? '#ef4444' : variant === 'warning' ? '#f59e0b' : variant === 'success' ? '#10b981' : '#64748b'
           }}
      />
    </div>
  );
}
