import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-16 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-5">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl blur-md opacity-50" />
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 via-red-600 to-orange-500 flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2L13.5 8L20 9L15 13.5L16.5 20L12 16.5L7.5 20L9 13.5L4 9L10.5 8L12 2Z" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-[18px] font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Hanta<span className="gradient-text-danger">Tracker</span>
                </h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-medium leading-none mt-0.5">
                  Global Outbreak Intelligence
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Real-time tracking of global hantavirus outbreaks. Data aggregated from WHO, CDC,
              ECDC, UKHSA, NICD, PAHO, and national health authorities worldwide.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="mailto:contact@hantatracker.com"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Resources */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-slate-300 hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link href="/prevention" className="text-sm text-slate-300 hover:text-red-400 transition-colors">Prevention Guide</Link></li>
              <li><Link href="/faq" className="text-sm text-slate-300 hover:text-red-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-300 hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/privacy" className="text-sm text-slate-300 hover:text-red-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-300 hover:text-red-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-slate-300 hover:text-red-400 transition-colors">Medical Disclaimer</Link></li>
              <li><a href="/api/outbreaks" className="text-sm text-slate-300 hover:text-red-400 transition-colors">API Access</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} HantaTracker. Data for informational purposes only.
            </p>
            <p className="text-[11px] text-slate-600 max-w-md md:text-right leading-relaxed">
              Not a substitute for professional medical advice. Consult health authorities for
              official guidance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
