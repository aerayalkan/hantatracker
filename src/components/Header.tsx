'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Activity, BarChart3, BookOpen, Database, AlertTriangle, Shield, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigation = [
    { name: 'Live Map', href: '#map', icon: Activity },
    { name: 'Outbreaks', href: '#outbreaks', icon: BarChart3 },
  ];

  const learnMenu = [
    { name: 'Symptoms', href: '/symptoms', desc: 'Early warning signs' },
    { name: 'Transmission', href: '/transmission', desc: 'How it spreads' },
    { name: 'Prevention', href: '/prevention', desc: 'Protect yourself' },
    { name: 'Treatment', href: '/treatment', desc: 'Medical care' },
    { name: 'FAQ', href: '/faq', desc: 'Common questions' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-[#050816]/80 backdrop-blur-2xl backdrop-saturate-150'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 via-red-600 to-orange-500 flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L13.5 8L20 9L15 13.5L16.5 20L12 16.5L7.5 20L9 13.5L4 9L10.5 8L12 2Z" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-[17px] font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
                Hanta<span className="gradient-text-danger">Tracker</span>
              </h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-medium leading-none mt-0.5">
                Global Outbreak Intelligence
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all"
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.name}
              </Link>
            ))}
            
            {/* Learn Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                className="flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Learn
                <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 py-2 glass-card rounded-xl shadow-2xl border border-white/10">
                  {learnMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex flex-col px-4 py-2.5 hover:bg-white/5 transition-colors"
                    >
                      <span className="text-sm font-medium text-white">{item.name}</span>
                      <span className="text-xs text-slate-500">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="#sources"
              className="flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all"
            >
              <Database className="w-3.5 h-3.5" />
              Sources
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold text-emerald-400 tracking-wide uppercase">Live</span>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-white/[0.06]">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-white/[0.06] my-2 pt-2">
                <p className="px-3 py-1 text-xs text-slate-500 uppercase tracking-wider">Learn About Hantavirus</p>
                {learnMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col px-3 py-2.5 hover:bg-white/[0.04] rounded-lg"
                  >
                    <span className="text-sm font-medium text-slate-300">{item.name}</span>
                    <span className="text-xs text-slate-500">{item.desc}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="#sources"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg"
              >
                <Database className="w-4 h-4" />
                Sources
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
