import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'HantaTracker terms of service - rules and guidelines for using our service.',
};

export default function TermsPage() {
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

        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-300 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-slate-300">
              By accessing and using HantaTracker (&quot;the Service&quot;), you accept and agree to be bound 
              by these Terms of Service. If you do not agree to these terms, please do not use 
              our Service.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Description of Service</h2>
            <p className="text-slate-300">
              HantaTracker provides information about hantavirus outbreaks worldwide. The data 
              is aggregated from various public health sources and is provided for informational 
              purposes only. This service is not intended to provide medical advice.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Use of Service</h2>
            <p className="text-slate-300 mb-4">You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Use the Service in any way that violates applicable laws</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Interfere with the proper working of the Service</li>
              <li>Use automated systems to access the Service without permission</li>
              <li>Reproduce, duplicate, or copy material from the Service for commercial purposes</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Intellectual Property</h2>
            <p className="text-slate-300">
              The Service and its original content, features, and functionality are owned by 
              HantaTracker and are protected by international copyright, trademark, and other 
              intellectual property laws. Outbreak data is sourced from public health authorities 
              and attributed accordingly.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Disclaimer of Warranties</h2>
            <p className="text-slate-300">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND. 
              WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY 
              SECURE. DATA ACCURACY IS NOT GUARANTEED.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p className="text-slate-300">
              IN NO EVENT SHALL HANTATRACKER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE OR 
              RELIANCE ON ANY INFORMATION PROVIDED.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Changes to Terms</h2>
            <p className="text-slate-300">
              We reserve the right to modify these terms at any time. We will provide notice of 
              significant changes by updating the &quot;Last updated&quot; date. Continued use of the Service 
              after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <p className="text-slate-300">
              For questions about these Terms, contact us at{' '}
              <a 
                href="mailto:legal@hantatracker.com"
                className="text-red-400 hover:text-red-300"
              >
                legal@hantatracker.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
