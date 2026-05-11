import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'HantaTracker privacy policy - how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
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

        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-300 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-slate-300 mb-4">
              We collect information you provide directly to us, such as when you contact us. 
              We also automatically collect certain information when you use our Service.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Usage data (pages visited, time spent, interactions)</li>
              <li>Device information (browser type, operating system)</li>
              <li>IP address and approximate location</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">How We Use Information</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To improve and personalize user experience</li>
              <li>To analyze usage patterns and trends</li>
              <li>To display relevant advertisements</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Advertising</h2>
            <p className="text-slate-300 mb-4">
              We use Google AdSense to display advertisements on our website. Google may use 
              cookies to serve ads based on your prior visits to our website or other websites. 
              You can opt out of personalized advertising by visiting{' '}
              <a 
                href="https://www.google.com/settings/ads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300"
              >
                Google Ads Settings
              </a>.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Cookies</h2>
            <p className="text-slate-300 mb-4">
              We use cookies and similar tracking technologies to track activity on our Service 
              and hold certain information. You can instruct your browser to refuse all cookies 
              or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Data Retention</h2>
            <p className="text-slate-300">
              We retain collected information for as long as necessary to provide our services 
              and fulfill the purposes outlined in this policy, unless a longer retention period 
              is required by law.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-slate-300 mb-4">
              Depending on your location, you may have rights regarding your personal data, including:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>The right to access your data</li>
              <li>The right to correct inaccurate data</li>
              <li>The right to delete your data</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-slate-300">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a 
                href="mailto:privacy@hantatracker.com"
                className="text-red-400 hover:text-red-300"
              >
                privacy@hantatracker.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
