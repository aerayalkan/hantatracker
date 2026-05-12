import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AlertTriangle, Clock, Thermometer, Activity, Heart, Brain, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hantavirus Symptoms - Early Signs, Progression & When to Seek Help',
  description: 'Comprehensive guide to hantavirus symptoms including HPS (Hantavirus Pulmonary Syndrome) and HFRS (Hemorrhagic Fever with Renal Syndrome). Learn early warning signs, symptom progression, and when to seek emergency medical care.',
  keywords: ['hantavirus symptoms', 'HPS symptoms', 'HFRS symptoms', 'hantavirus early signs', 'hantavirus fever', 'hantavirus breathing problems', 'hantavirus warning signs', 'hantavirus diagnosis'],
  openGraph: {
    title: 'Hantavirus Symptoms Guide - Early Signs & Warning Signs',
    description: 'Learn to recognize hantavirus symptoms early. Complete guide to HPS and HFRS symptoms, progression timeline, and when to seek emergency help.',
  },
};

export default function SymptomsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">
              <AlertTriangle className="w-4 h-4" />
              Medical Information
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Hantavirus Symptoms</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Recognizing symptoms early can save lives. Learn the warning signs of 
              Hantavirus Pulmonary Syndrome (HPS) and Hemorrhagic Fever with Renal Syndrome (HFRS).
            </p>
          </div>

          {/* Warning Banner */}
          <div className="glass-card border-red-500/30 p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-red-400 mb-2">Medical Emergency Warning</h2>
                <p className="text-slate-300">
                  If you have been exposed to rodents or their droppings and develop sudden difficulty breathing, 
                  seek emergency medical care immediately. HPS can progress rapidly and has a mortality rate of 30-40%.
                </p>
              </div>
            </div>
          </div>

          {/* HPS Symptoms */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Activity className="w-7 h-7 text-cyan-400" />
              Hantavirus Pulmonary Syndrome (HPS) Symptoms
            </h2>
            
            <div className="glass-card p-6 mb-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Early Phase (1-5 days)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Thermometer, symptom: 'Fever (101-104°F / 38-40°C)', desc: 'Often the first symptom to appear' },
                  { icon: Activity, symptom: 'Fatigue & Exhaustion', desc: 'Severe tiredness beyond normal illness' },
                  { icon: Brain, symptom: 'Muscle Aches (Myalgia)', desc: 'Especially in thighs, hips, back, shoulders' },
                  { icon: Brain, symptom: 'Headaches', desc: 'Can be severe and persistent' },
                  { icon: Droplets, symptom: 'Dizziness', desc: 'Lightheadedness and vertigo' },
                  { icon: Activity, symptom: 'Chills', desc: 'Often accompanying fever' },
                  { icon: Heart, symptom: 'Abdominal Pain', desc: 'Nausea, vomiting, diarrhea possible' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50">
                    <item.icon className="w-5 h-5 text-cyan-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-200">{item.symptom}</p>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Late Phase - EMERGENCY (4-10 days after exposure)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { symptom: 'Coughing', desc: 'Produces secretions, worsens rapidly', critical: true },
                  { symptom: 'Shortness of Breath', desc: 'Difficulty breathing, feels like drowning', critical: true },
                  { symptom: 'Fluid in Lungs', desc: 'Lungs fill with fluid (pulmonary edema)', critical: true },
                  { symptom: 'Low Blood Pressure', desc: 'Can lead to shock', critical: true },
                  { symptom: 'Rapid Heart Rate', desc: 'Heart compensating for low oxygen', critical: false },
                  { symptom: 'Organ Failure', desc: 'Multiple organs may begin to fail', critical: true },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${item.critical ? 'bg-red-500/10 border border-red-500/20' : 'bg-slate-800/50'}`}>
                    <AlertTriangle className={`w-5 h-5 ${item.critical ? 'text-red-400' : 'text-yellow-400'} mt-0.5`} />
                    <div>
                      <p className="font-medium text-slate-200">{item.symptom}</p>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HFRS Symptoms */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Heart className="w-7 h-7 text-purple-400" />
              Hemorrhagic Fever with Renal Syndrome (HFRS) Symptoms
            </h2>
            
            <div className="glass-card p-6">
              <p className="text-slate-300 mb-6">
                HFRS primarily affects the kidneys and blood vessels. It progresses through five phases:
              </p>
              
              <div className="space-y-4">
                {[
                  { phase: 'Febrile Phase', duration: '3-7 days', symptoms: 'High fever, chills, headache, blurred vision, back pain, abdominal pain, facial flushing' },
                  { phase: 'Hypotensive Phase', duration: '2 days', symptoms: 'Blood pressure drops, tachycardia, shock possible, nausea/vomiting intensify' },
                  { phase: 'Oliguric Phase', duration: '3-7 days', symptoms: 'Decreased urine output, hemorrhaging (petechiae, bleeding), severe kidney stress' },
                  { phase: 'Diuretic Phase', duration: '2-3 weeks', symptoms: 'Increased urination (3-6 liters/day), electrolyte imbalances' },
                  { phase: 'Convalescent Phase', duration: 'weeks-months', symptoms: 'Gradual recovery, weakness may persist for extended period' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-slate-800/50 border-l-4 border-purple-500/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-purple-400">{item.phase}</h4>
                      <span className="text-sm text-slate-500">{item.duration}</span>
                    </div>
                    <p className="text-sm text-slate-300">{item.symptoms}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* When to Seek Help */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">When to Seek Medical Help</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 border-yellow-500/30">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">See a Doctor If:</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    You've had recent rodent exposure
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    Unexplained fever and muscle aches
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    Flu-like symptoms after cleaning dusty areas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    Live or work in rodent-prone areas
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 border-red-500/30">
                <h3 className="text-lg font-semibold text-red-400 mb-4">Call Emergency (911) If:</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    Sudden difficulty breathing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    Feeling like you're suffocating
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    Coughing with pink/frothy sputum
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    Rapid heartbeat with weakness
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Incubation Period */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <Clock className="w-6 h-6 text-cyan-400" />
              Incubation Period
            </h2>
            <p className="text-slate-300 mb-4">
              Symptoms typically appear <strong className="text-white">1-8 weeks</strong> after exposure to infected rodents or their droppings, 
              with most cases showing symptoms within <strong className="text-white">2-4 weeks</strong>.
            </p>
            <p className="text-sm text-slate-400">
              If you believe you've been exposed to rodents and develop any symptoms, inform your healthcare provider 
              about your potential exposure immediately, even if significant time has passed.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
