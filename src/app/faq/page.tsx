import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about hantavirus, our tracking platform, data sources, and how to interpret outbreak information.',
};

const faqs = [
  {
    category: 'About Hantavirus',
    questions: [
      {
        q: 'What is hantavirus?',
        a: 'Hantaviruses are a family of viruses primarily spread by rodents. They can cause two serious illnesses in humans: Hantavirus Pulmonary Syndrome (HPS) and Hemorrhagic Fever with Renal Syndrome (HFRS). Different strains exist in different regions, including Andes virus (South America), Sin Nombre virus (North America), and Puumala virus (Europe).'
      },
      {
        q: 'How is hantavirus transmitted?',
        a: 'Hantavirus is primarily transmitted through inhalation of aerosolized virus particles from rodent urine, droppings, or saliva. Direct contact with rodents or their nesting materials can also lead to infection. Person-to-person transmission is rare but has been documented with the Andes virus strain.'
      },
      {
        q: 'What are the symptoms of hantavirus infection?',
        a: 'Early symptoms include fatigue, fever, and muscle aches, particularly in large muscle groups. HPS can progress to coughing and severe shortness of breath. HFRS may cause intense headaches, abdominal pain, and kidney problems. Symptoms typically appear 1-8 weeks after exposure.'
      },
      {
        q: 'Is there a vaccine for hantavirus?',
        a: 'Currently, there is no FDA-approved vaccine for hantavirus available in most Western countries. Some vaccines are used in China and Korea. Treatment focuses on supportive care, with early hospitalization significantly improving outcomes.'
      },
    ]
  },
  {
    category: 'About Our Data',
    questions: [
      {
        q: 'Where does HantaTracker get its data?',
        a: 'We aggregate data from official health authorities including WHO Disease Outbreak News, CDC, ECDC, UKHSA, NICD, PAHO, and national health ministries. We also monitor ProMED-mail for early outbreak signals.'
      },
      {
        q: 'How often is the data updated?',
        a: 'Our system automatically fetches data from official sources every hour. However, health authorities may have varying reporting schedules, so some data may reflect earlier timestamps from the original source.'
      },
      {
        q: 'Why might your numbers differ from official reports?',
        a: 'Differences can occur due to reporting delays, different case definitions, or timing of data aggregation. We always recommend checking official health authority websites for the most current official figures.'
      },
      {
        q: 'What does "monitoring" status mean?',
        a: 'Monitoring status indicates countries or regions where potential cases are under investigation, contacts are being traced, or quarantine protocols are in place, but confirmed cases have not yet been reported.'
      },
    ]
  },
  {
    category: 'Using HantaTracker',
    questions: [
      {
        q: 'Can I use your data for research or publications?',
        a: 'Yes, our data is available for non-commercial research purposes with proper attribution. For commercial use or integration, please contact us at api@hantatracker.com.'
      },
      {
        q: 'Do you have an API?',
        a: 'Yes, we provide a public JSON API at /api/outbreaks that returns current outbreak data, statistics, and country-level information. The API is rate-limited and intended for reasonable use.'
      },
      {
        q: 'How can I report an outbreak not shown on your map?',
        a: 'Please email data@hantatracker.com with details including location, source of information (preferably official health authority announcements), and any available case numbers. We verify all submissions before adding them.'
      },
    ]
  },
  {
    category: 'Prevention & Safety',
    questions: [
      {
        q: 'How can I protect myself from hantavirus?',
        a: 'Key prevention measures include sealing entry points to keep rodents out of homes, using wet cleaning methods (spray disinfectant before sweeping) when cleaning areas with rodent droppings, ventilating closed buildings before entering, and avoiding direct contact with rodents or their nests.'
      },
      {
        q: 'Should I be concerned about the current outbreak?',
        a: 'The current outbreak (MV Hondius cruise ship cluster) is linked to a specific exposure event. For most people, the risk remains low. However, those in endemic areas or with potential rodent exposure should follow prevention guidelines. Consult your local health authority for region-specific advice.'
      },
    ]
  },
];

export default function FAQPage() {
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
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-400 mb-12">
          Common questions about hantavirus and our tracking platform.
        </p>

        <div className="space-y-12">
          {faqs.map((section) => (
            <section key={section.category}>
              <h2 className="text-xl font-bold text-white mb-6 pb-2 border-b border-white/10">
                {section.category}
              </h2>
              <div className="space-y-6">
                {section.questions.map((item, idx) => (
                  <div key={idx} className="glass-card rounded-xl p-6">
                    <h3 className="text-base font-semibold text-white mb-3">
                      {item.q}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <h2 className="text-lg font-bold text-white mb-2">Still have questions?</h2>
          <p className="text-slate-400 mb-4">
            We are happy to help with any additional questions you may have.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg text-red-400 font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
