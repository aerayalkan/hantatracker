import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wind, Droplets, Hand, Users, Home, AlertTriangle, MousePointer, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Hantavirus Spreads - Transmission Routes & Risk Factors',
  description: 'Learn how hantavirus is transmitted from rodents to humans. Understand airborne transmission, direct contact risks, and rare human-to-human spread of Andes virus. Essential knowledge for prevention.',
  keywords: ['hantavirus transmission', 'how does hantavirus spread', 'hantavirus airborne', 'rodent virus transmission', 'hantavirus risk factors', 'hantavirus exposure', 'Andes virus human transmission'],
  openGraph: {
    title: 'How Hantavirus Spreads - Transmission & Risk Factors',
    description: 'Complete guide to hantavirus transmission routes. Learn how the virus spreads from rodents and how to minimize your risk.',
  },
};

export default function TransmissionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">How Hantavirus Spreads</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Understanding transmission routes is key to prevention. Learn how hantavirus 
              passes from rodents to humans and the rare cases of person-to-person spread.
            </p>
          </div>

          {/* Primary Transmission */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Primary Transmission Routes</h2>
            
            <div className="grid gap-6">
              {/* Airborne */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Wind className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Airborne Transmission (Most Common)</h3>
                    <p className="text-slate-300 mb-4">
                      The primary route of infection. Hantavirus becomes airborne when dried rodent urine, 
                      droppings, or nesting materials are disturbed, creating infected dust particles that 
                      can be inhaled.
                    </p>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <h4 className="font-medium text-slate-200 mb-2">High-Risk Activities:</h4>
                      <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-400">
                        <li>• Sweeping or vacuuming rodent droppings</li>
                        <li>• Opening closed buildings (cabins, sheds)</li>
                        <li>• Cleaning attics, basements, garages</li>
                        <li>• Disturbing rodent nests</li>
                        <li>• Handling stored hay or firewood</li>
                        <li>• Working in barns or outbuildings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Hand className="w-7 h-7 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Direct Contact</h3>
                    <p className="text-slate-300 mb-4">
                      Touching rodents (alive or dead), their urine, droppings, or nesting materials, 
                      then touching your eyes, nose, or mouth can cause infection.
                    </p>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <h4 className="font-medium text-slate-200 mb-2">Risk Scenarios:</h4>
                      <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-400">
                        <li>• Handling dead rodents without gloves</li>
                        <li>• Touching contaminated surfaces</li>
                        <li>• Cleaning up rodent infestations</li>
                        <li>• Pet rodents (rare, but documented)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rodent Bites */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <MousePointer className="w-7 h-7 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3">Rodent Bites (Rare)</h3>
                    <p className="text-slate-300">
                      While uncommon, bites from infected rodents can transmit hantavirus directly 
                      into the bloodstream. This is more likely with handling wild rodents or 
                      infested areas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contaminated Food */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-orange-400 mb-3">Contaminated Food or Water</h3>
                    <p className="text-slate-300">
                      Consuming food or water contaminated with rodent urine or droppings can 
                      potentially cause infection, though this is less common than airborne transmission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Human-to-Human */}
          <section className="mb-16">
            <div className="glass-card p-6 border-red-500/30">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-400 mb-3">Human-to-Human Transmission</h3>
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400">Documented with Andes Virus Only</span>
                  </div>
                  <p className="text-slate-300 mb-4">
                    Unlike most hantaviruses, the <strong className="text-white">Andes virus</strong> (found in Argentina and Chile) 
                    can spread person-to-person through close contact with infected individuals during the 
                    symptomatic phase.
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="font-medium text-slate-200 mb-2">Documented Transmission:</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li>• Healthcare workers caring for patients</li>
                      <li>• Close household contacts</li>
                      <li>• The 2026 MV Hondius cruise ship outbreak involved possible person-to-person spread</li>
                    </ul>
                  </div>
                  <p className="text-sm text-slate-400 mt-4">
                    <strong>Note:</strong> Other hantavirus strains (Sin Nombre, Puumala, Hantaan, Seoul) 
                    are NOT known to spread between humans.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Carrier Rodents */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MousePointer className="w-7 h-7 text-cyan-400" />
              Carrier Rodents by Virus Type
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full glass-card">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="px-6 py-4 text-left text-cyan-400 font-semibold">Virus</th>
                    <th className="px-6 py-4 text-left text-cyan-400 font-semibold">Primary Rodent Host</th>
                    <th className="px-6 py-4 text-left text-cyan-400 font-semibold">Region</th>
                    <th className="px-6 py-4 text-left text-cyan-400 font-semibold">Disease</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="px-6 py-4 font-medium">Sin Nombre</td>
                    <td className="px-6 py-4">Deer Mouse</td>
                    <td className="px-6 py-4">North America</td>
                    <td className="px-6 py-4">HPS</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-6 py-4 font-medium">Andes</td>
                    <td className="px-6 py-4">Long-tailed Rice Rat</td>
                    <td className="px-6 py-4">South America</td>
                    <td className="px-6 py-4">HPS</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-6 py-4 font-medium">Hantaan</td>
                    <td className="px-6 py-4">Striped Field Mouse</td>
                    <td className="px-6 py-4">Asia</td>
                    <td className="px-6 py-4">HFRS</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-6 py-4 font-medium">Seoul</td>
                    <td className="px-6 py-4">Norway Rat, Brown Rat</td>
                    <td className="px-6 py-4">Worldwide</td>
                    <td className="px-6 py-4">HFRS</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="px-6 py-4 font-medium">Puumala</td>
                    <td className="px-6 py-4">Bank Vole</td>
                    <td className="px-6 py-4">Europe</td>
                    <td className="px-6 py-4">HFRS (mild)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Dobrava</td>
                    <td className="px-6 py-4">Yellow-necked Mouse</td>
                    <td className="px-6 py-4">Europe</td>
                    <td className="px-6 py-4">HFRS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Risk Factors */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Risk Factors</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold">Living/Working Conditions</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li>• Rural or semi-rural areas</li>
                  <li>• Poorly sealed buildings</li>
                  <li>• Cabins opened after winter</li>
                  <li>• Barns and farm buildings</li>
                  <li>• Construction in forested areas</li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-semibold">High-Risk Occupations</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li>• Farmers and agricultural workers</li>
                  <li>• Pest control professionals</li>
                  <li>• Construction workers</li>
                  <li>• Military personnel (field exercises)</li>
                  <li>• Researchers and wildlife workers</li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-lg font-semibold">Recreational Activities</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li>• Camping in wilderness areas</li>
                  <li>• Hiking in endemic regions</li>
                  <li>• Using rustic shelters/cabins</li>
                  <li>• Adventure tourism</li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <h3 className="text-lg font-semibold">Seasonal Factors</h3>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li>• Spring cleaning after winter</li>
                  <li>• Autumn rodent migration indoors</li>
                  <li>• Mast years (abundant acorns = more rodents)</li>
                  <li>• Post-flood cleanup</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Not Transmitted By */}
          <section className="glass-card p-6">
            <h2 className="text-xl font-bold mb-4 text-green-400">Hantavirus is NOT Spread By:</h2>
            <div className="grid md:grid-cols-3 gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Insects (mosquitoes, ticks)
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Cats or dogs
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Farm animals (cattle, pigs)
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Casual contact (except Andes virus)
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Sexual transmission
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Blood transfusions
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function Activity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  );
}
