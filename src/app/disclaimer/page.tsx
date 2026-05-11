import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical Disclaimer',
  description: 'HantaTracker medical disclaimer - important information about the use of health data.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-amber-500/20">
            <AlertTriangle className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-3xl font-bold text-white">Medical Disclaimer</h1>
        </div>
        
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-8">
          <p className="text-amber-200 font-medium">
            IMPORTANT: This website is for informational purposes only and is not intended as 
            medical advice. Always consult qualified healthcare professionals and official 
            health authorities for medical guidance.
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Not Medical Advice</h2>
            <p className="text-slate-300">
              The information provided on HantaTracker is for general informational and educational 
              purposes only. It is not intended to be, and should not be used as, a substitute for 
              professional medical advice, diagnosis, or treatment. Always seek the advice of your 
              physician or other qualified health provider with any questions you may have regarding 
              a medical condition.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Data Accuracy</h2>
            <p className="text-slate-300 mb-4">
              While we strive to provide accurate and up-to-date information, we cannot guarantee 
              the accuracy, completeness, or timeliness of the outbreak data presented. Our data 
              is aggregated from various sources and may:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Contain reporting delays from source authorities</li>
              <li>Include preliminary or unconfirmed case numbers</li>
              <li>Differ from official government statistics</li>
              <li>Be subject to revisions and corrections</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Emergency Situations</h2>
            <p className="text-slate-300">
              If you believe you may have been exposed to hantavirus or are experiencing symptoms 
              such as fever, muscle aches, and difficulty breathing, seek immediate medical attention. 
              Do not rely on this website for emergency medical decisions.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Official Resources</h2>
            <p className="text-slate-300 mb-4">
              For authoritative medical information about hantavirus, please consult:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>
                <a 
                  href="https://www.who.int/health-topics/hantavirus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300"
                >
                  World Health Organization (WHO)
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cdc.gov/hantavirus/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300"
                >
                  Centers for Disease Control and Prevention (CDC)
                </a>
              </li>
              <li>Your national or local health authority</li>
              <li>Your personal healthcare provider</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p className="text-slate-300">
              HantaTracker, its operators, and contributors shall not be liable for any damages or 
              injuries resulting from the use of information provided on this website. Use of this 
              website and reliance on any information is solely at your own risk.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <p className="text-slate-300">
              For questions about this disclaimer, contact us at{' '}
              <a 
                href="mailto:info@hantatracker.com"
                className="text-red-400 hover:text-red-300"
              >
                info@hantatracker.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
