'use client';

import { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBanner({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    try {
      if (typeof window !== 'undefined' && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        initialized.current = true;
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3356425558601409"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
      <div ref={adRef} />
    </div>
  );
}

export function AdPlaceholder({
  height = '90px',
  className = '',
  label = 'Advertisement',
}: {
  height?: string;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.015] flex items-center justify-center overflow-hidden ${className}`}
      style={{ height }}
    >
      <div className="absolute inset-0 opacity-30 shimmer-line" />
      <div className="flex items-center gap-2 relative z-10">
        <span className="w-1 h-1 rounded-full bg-slate-600" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-semibold">
          {label}
        </span>
        <span className="w-1 h-1 rounded-full bg-slate-600" />
      </div>
    </div>
  );
}
