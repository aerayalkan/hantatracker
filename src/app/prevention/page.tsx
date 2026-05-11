import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Home, Droplets, Wind, Trash2, MousePointer2, AlertTriangle, ShieldCheck, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prevention Guide',
  description: 'Comprehensive guide to preventing hantavirus infection. Learn how to protect yourself, your family, and your home from rodent-borne diseases.',
};

export default function PreventionPage() {
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

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.15em]">
              Safety Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Hantavirus Prevention Guide
          </h1>
          <p className="text-lg text-slate-400">
            Practical steps to protect yourself and your family from hantavirus infection.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 mb-8 border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-white mb-1">Important Note</h2>
              <p className="text-sm text-slate-300">
                This guide provides general prevention information based on CDC and WHO recommendations. 
                For specific situations or if you believe you have been exposed, consult a healthcare 
                professional immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-500/15">
                <Home className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Rodent-Proof Your Home</h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <h3 className="font-semibold text-white">Seal entry points</h3>
                  <p className="text-sm text-slate-400 mt-1">Close gaps and holes larger than 6mm in walls, foundations, and around pipes using steel wool, caulk, or metal sheeting.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <h3 className="font-semibold text-white">Install door sweeps</h3>
                  <p className="text-sm text-slate-400 mt-1">Ensure all exterior doors have tight-fitting sweeps and weatherstripping.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <h3 className="font-semibold text-white">Secure screens</h3>
                  <p className="text-sm text-slate-400 mt-1">Repair damaged window and vent screens. Use metal mesh for crawl space vents.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/15">
                <Trash2 className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Eliminate Food Sources</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                Store food (including pet food) in thick plastic or metal containers with tight lids
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                Clean up spilled food immediately and wash dishes promptly
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                Use garbage cans with tight-fitting lids
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                Keep outdoor areas clean - remove fallen fruit, bird seed, and debris
              </li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-purple-500/15">
                <Droplets className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Safe Cleaning Procedures</h2>
            </div>
            <p className="text-slate-300 mb-4">
              <strong className="text-white">Never sweep or vacuum</strong> rodent droppings, urine, or nesting materials. 
              This can release virus particles into the air.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <h3 className="font-semibold text-white">Ventilate the area</h3>
                  <p className="text-sm text-slate-400 mt-1">Open doors and windows for at least 30 minutes before cleaning. Leave during ventilation.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <h3 className="font-semibold text-white">Wear protective gear</h3>
                  <p className="text-sm text-slate-400 mt-1">Use rubber or latex gloves. In heavily contaminated areas, wear an N95 respirator mask.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <h3 className="font-semibold text-white">Spray with disinfectant</h3>
                  <p className="text-sm text-slate-400 mt-1">Thoroughly soak droppings and nesting materials with a bleach solution (1 part bleach to 10 parts water) or commercial disinfectant. Let sit for 5 minutes.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <div>
                  <h3 className="font-semibold text-white">Wipe up with paper towels</h3>
                  <p className="text-sm text-slate-400 mt-1">Use damp paper towels to pick up materials. Double-bag waste in plastic bags and dispose in sealed outdoor trash.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                <div>
                  <h3 className="font-semibold text-white">Disinfect and wash</h3>
                  <p className="text-sm text-slate-400 mt-1">Mop floors and wipe surfaces with disinfectant. Remove gloves and wash hands thoroughly with soap and water.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-500/15">
                <Wind className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Entering Closed Buildings</h2>
            </div>
            <p className="text-slate-300 mb-4">
              Cabins, sheds, or buildings that have been closed for a period may harbor rodents. 
              Take these precautions:
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                Open all doors and windows to air out the building for at least 30 minutes before entering
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                Do not enter while airing out - wait outside
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                When entering, wear an N95 mask if heavy rodent infestation is suspected
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                Follow safe cleaning procedures before using the building
              </li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-red-500/15">
                <MousePointer2 className="w-5 h-5 text-red-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Handling Dead Rodents</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Always wear rubber or latex gloves
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Spray the rodent and surrounding area with disinfectant before handling
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Place in a double plastic bag, seal, and dispose in outdoor trash
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Wash hands thoroughly after removing gloves
              </li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-pink-500/15">
                <Heart className="w-5 h-5 text-pink-400" />
              </div>
              <h2 className="text-xl font-bold text-white">When to Seek Medical Care</h2>
            </div>
            <p className="text-slate-300 mb-4">
              Seek medical attention immediately if you develop the following symptoms, especially 
              if you have been in contact with rodents or their droppings:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Fever and chills', 'Muscle aches (especially large muscles)', 'Headaches', 'Fatigue', 'Nausea or vomiting', 'Difficulty breathing', 'Coughing', 'Abdominal pain'].map((symptom) => (
                <div key={symptom} className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span className="text-sm text-slate-300">{symptom}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Early treatment significantly improves outcomes. Tell your healthcare provider about 
              any potential rodent exposure.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Prevention guidelines based on CDC and WHO recommendations. 
            <br />
            For more information, visit{' '}
            <a href="https://www.cdc.gov/hantavirus/prevention/index.html" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
              CDC Hantavirus Prevention
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
