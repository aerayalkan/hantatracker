import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Stethoscope, Pill, AlertTriangle, Clock, Activity, Shield, FlaskConical } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hantavirus Treatment - Medical Care, Supportive Therapy & Recovery',
  description: 'Learn about hantavirus treatment options including intensive care, oxygen therapy, and experimental treatments. Understand why early medical intervention is critical for survival.',
  keywords: ['hantavirus treatment', 'HPS treatment', 'HFRS treatment', 'hantavirus cure', 'hantavirus medication', 'hantavirus recovery', 'hantavirus intensive care', 'hantavirus ECMO'],
  openGraph: {
    title: 'Hantavirus Treatment - Medical Care & Recovery Guide',
    description: 'Comprehensive guide to hantavirus treatment options, intensive care protocols, and recovery expectations.',
  },
};

export default function TreatmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">
              <AlertTriangle className="w-4 h-4" />
              Medical Information - Consult Healthcare Providers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Hantavirus Treatment</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              There is no specific cure or vaccine for hantavirus. Treatment focuses on 
              intensive supportive care to manage symptoms and prevent complications.
            </p>
          </div>

          {/* Critical Info */}
          <div className="glass-card border-red-500/30 p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-red-400 mb-2">Early Treatment is Critical</h2>
                <p className="text-slate-300">
                  Patients who receive intensive care within 48-72 hours of respiratory symptoms have 
                  significantly better outcomes. If you suspect hantavirus infection, seek emergency 
                  medical care immediately. Do not wait for symptoms to worsen.
                </p>
              </div>
            </div>
          </div>

          {/* No Cure Notice */}
          <section className="mb-16">
            <div className="glass-card p-6 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border-yellow-500/20">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Pill className="w-6 h-6 text-yellow-400" />
                Current Medical Reality
              </h2>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">×</span>
                  <span><strong className="text-white">No antiviral drugs</strong> are approved specifically for hantavirus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">×</span>
                  <span><strong className="text-white">No vaccine</strong> is available for prevention (though some are in development)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">×</span>
                  <span><strong className="text-white">Antibiotics don't work</strong> - hantavirus is a virus, not bacteria</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span><strong className="text-white">Supportive care</strong> in intensive care units saves lives</span>
                </li>
              </ul>
            </div>
          </section>

          {/* HPS Treatment */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Heart className="w-7 h-7 text-cyan-400" />
              Treatment for HPS (Hantavirus Pulmonary Syndrome)
            </h2>
            
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Intensive Care Unit (ICU) Support</h3>
                <p className="text-slate-300 mb-4">
                  Patients with HPS typically require ICU admission for close monitoring and 
                  aggressive supportive care. The goal is to support organ function while the 
                  immune system fights the virus.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'Oxygen Therapy', desc: 'Supplemental oxygen via mask or nasal cannula for mild cases' },
                    { title: 'Mechanical Ventilation', desc: 'Breathing machine for severe respiratory distress' },
                    { title: 'ECMO', desc: 'Extracorporeal membrane oxygenation for critical cases - acts as external heart/lung' },
                    { title: 'IV Fluids', desc: 'Careful fluid management - too much can worsen lung edema' },
                    { title: 'Vasopressors', desc: 'Medications to maintain blood pressure if shock develops' },
                    { title: 'Continuous Monitoring', desc: '24/7 vital sign monitoring and blood gas analysis' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-lg bg-slate-800/50">
                      <h4 className="font-medium text-slate-200 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 border-cyan-500/20">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  ECMO: The Life-Saving Option
                </h3>
                <p className="text-slate-300 mb-4">
                  <strong className="text-white">Extracorporeal Membrane Oxygenation (ECMO)</strong> has dramatically 
                  improved survival rates for severe HPS cases. This machine:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    Removes blood from the body and oxygenates it externally
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    Returns oxygenated blood while lungs recover
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    Can keep patients alive through the critical phase
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    Only available at specialized medical centers
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* HFRS Treatment */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Stethoscope className="w-7 h-7 text-purple-400" />
              Treatment for HFRS (Hemorrhagic Fever with Renal Syndrome)
            </h2>
            
            <div className="glass-card p-6">
              <p className="text-slate-300 mb-6">
                HFRS treatment focuses on maintaining kidney function and managing hemorrhagic complications:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Dialysis', desc: 'Temporary kidney replacement therapy if kidneys fail' },
                  { title: 'Fluid Balance', desc: 'Careful IV fluid management during different phases' },
                  { title: 'Blood Pressure Control', desc: 'Medications for hypotension during shock phase' },
                  { title: 'Blood Transfusions', desc: 'May be needed if significant bleeding occurs' },
                  { title: 'Pain Management', desc: 'Medications for severe back and abdominal pain' },
                  { title: 'Ribavirin (Experimental)', desc: 'Antiviral may reduce mortality if given early (used in some countries)' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-slate-800/50">
                    <h4 className="font-medium text-slate-200 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experimental Treatments */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FlaskConical className="w-7 h-7 text-yellow-400" />
              Research & Experimental Treatments
            </h2>
            
            <div className="space-y-4">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Ribavirin</h3>
                <p className="text-slate-300">
                  An antiviral drug used for some HFRS cases in Asia and Europe. Studies show potential 
                  benefit when given within first 4 days of illness. Not FDA-approved for hantavirus and 
                  less effective for HPS.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Convalescent Plasma</h3>
                <p className="text-slate-300">
                  Blood plasma from recovered patients containing antibodies. Has shown promise in 
                  limited studies for Andes virus infection. Research ongoing.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Vaccines in Development</h3>
                <p className="text-slate-300">
                  Several vaccine candidates are in clinical trials, including DNA vaccines and 
                  inactivated virus vaccines. No vaccine is currently approved for human use in 
                  Western countries (China and South Korea have licensed vaccines for HFRS).
                </p>
              </div>
            </div>
          </section>

          {/* Survival Rates */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Survival & Recovery</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-4">HPS Mortality</h3>
                <div className="text-4xl font-bold text-red-400 mb-2">30-40%</div>
                <p className="text-slate-400 text-sm mb-4">Overall mortality rate</p>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Early ICU care significantly improves odds</li>
                  <li>• ECMO can save critical cases</li>
                  <li>• Most deaths occur within 48 hours of respiratory failure</li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-4">HFRS Mortality</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">1-15%</div>
                <p className="text-slate-400 text-sm mb-4">Varies by virus strain</p>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Puumala (Europe): &lt;1% mortality</li>
                  <li>• Hantaan (Asia): 5-15% mortality</li>
                  <li>• Seoul (worldwide): 1-2% mortality</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Recovery */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-400" />
              Recovery Expectations
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Patients who survive the acute phase generally make a full recovery, though it can take weeks to months:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <strong className="text-white">Fatigue</strong> may persist for several weeks to months
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <strong className="text-white">Lung function</strong> typically returns to normal within 1-2 months
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <strong className="text-white">Kidney function</strong> (HFRS) usually recovers fully, though some patients have lasting impairment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <strong className="text-white">Immunity</strong> - survivors develop antibodies and are unlikely to be reinfected with the same strain
                </li>
              </ul>
              <p className="text-sm text-slate-400 mt-4">
                Follow-up care with pulmonology or nephrology specialists may be recommended for severe cases.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
