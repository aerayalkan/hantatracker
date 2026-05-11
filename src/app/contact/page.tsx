import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Mail, MessageSquare, AlertCircle, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact the HantaTracker team for inquiries, data corrections, or feedback about our hantavirus outbreak tracking platform.',
};

export default function ContactPage() {
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
          Contact Us
        </h1>
        <p className="text-lg text-slate-400 mb-12">
          Have questions, feedback, or data to share? We would love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/15">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-lg font-bold text-white">General Inquiries</h2>
            </div>
            <p className="text-slate-400 text-sm mb-3">
              Questions about our platform, data, or services.
            </p>
            <a href="mailto:info@hantatracker.com" className="text-blue-400 hover:text-blue-300 font-medium">
              info@hantatracker.com
            </a>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-red-500/15">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Data Corrections</h2>
            </div>
            <p className="text-slate-400 text-sm mb-3">
              Report inaccuracies or submit outbreak information.
            </p>
            <a href="mailto:data@hantatracker.com" className="text-red-400 hover:text-red-300 font-medium">
              data@hantatracker.com
            </a>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/15">
                <MessageSquare className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Press & Media</h2>
            </div>
            <p className="text-slate-400 text-sm mb-3">
              Media inquiries and interview requests.
            </p>
            <a href="mailto:press@hantatracker.com" className="text-purple-400 hover:text-purple-300 font-medium">
              press@hantatracker.com
            </a>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/15">
                <FileText className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-lg font-bold text-white">API Access</h2>
            </div>
            <p className="text-slate-400 text-sm mb-3">
              Integration and API partnership inquiries.
            </p>
            <a href="mailto:api@hantatracker.com" className="text-emerald-400 hover:text-emerald-300 font-medium">
              api@hantatracker.com
            </a>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Response Times</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            We aim to respond to all inquiries within 24-48 hours during business days. 
            For urgent data corrections or outbreak reports, please include &quot;URGENT&quot; 
            in your subject line.
          </p>
          <p className="text-slate-400 text-sm">
            Note: HantaTracker cannot provide medical advice. For health-related concerns, 
            please consult a healthcare professional or your local health authority.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
