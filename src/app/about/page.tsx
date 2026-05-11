import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Users, Target, Shield, Database, Globe, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about HantaTracker - our mission to provide real-time global hantavirus outbreak monitoring and public health awareness.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          About HantaTracker
        </h1>
        <p className="text-lg text-slate-400 mb-12">
          Real-time global hantavirus outbreak monitoring for public health awareness.
        </p>

        <div className="space-y-12">
          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-red-500/15">
                <Target className="w-5 h-5 text-red-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              HantaTracker was created to provide the public with accurate, real-time information about 
              hantavirus outbreaks worldwide. We believe that transparent access to health data empowers 
              individuals, healthcare providers, and public health officials to make informed decisions 
              and take appropriate precautions.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/15">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-white">How We Work</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our platform aggregates data from multiple authoritative sources including:
            </p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span><strong className="text-white">WHO Disease Outbreak News</strong> - Official international health alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span><strong className="text-white">National Health Authorities</strong> - CDC, ECDC, UKHSA, NICD, PHAC</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span><strong className="text-white">ProMED-mail</strong> - Global disease surveillance network</span>
              </li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/15">
                <Clock className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Real-Time Updates</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Our system automatically fetches and processes data from official sources every hour. 
              When new outbreaks are reported or existing cases are updated, our platform reflects 
              these changes promptly. All data points include source attribution and links to 
              original reports for verification.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/15">
                <Shield className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Data Accuracy</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              We prioritize accuracy over speed. Each data point is cross-referenced with official 
              sources when possible. However, outbreak data is inherently dynamic, and numbers may 
              change as health authorities update their reports. We recommend consulting official 
              health authority websites for the most current information.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/15">
                <Globe className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Global Coverage</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              HantaTracker monitors hantavirus activity globally, covering all known endemic regions 
              and tracking emerging outbreaks in non-endemic areas. Our interactive map provides a 
              visual overview of current hotspots and historical data.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-slate-500/15">
                <Users className="w-5 h-5 text-slate-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Contact Us</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              We welcome feedback, corrections, and suggestions. If you have information about an 
              outbreak that is not yet reflected on our platform, or if you notice any inaccuracies, 
              please contact us:
            </p>
            <div className="space-y-2 text-slate-300">
              <p><strong className="text-white">General Inquiries:</strong> info@hantatracker.com</p>
              <p><strong className="text-white">Data Corrections:</strong> data@hantatracker.com</p>
              <p><strong className="text-white">Press:</strong> press@hantatracker.com</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
