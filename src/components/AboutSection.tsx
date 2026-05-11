import {
  Bug,
  Thermometer,
  Stethoscope,
  Shield,
  AlertTriangle,
  Home,
  Droplets,
  Wind,
} from 'lucide-react';

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
      {children}
    </span>
  </div>
);

const InfoCard = ({
  icon: Icon,
  iconColor,
  title,
  children,
}: {
  icon: React.ElementType;
  iconColor: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-2.5 rounded-xl ${iconColor}`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3
        className="text-lg font-bold text-white"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="text-center mb-12">
        <div className="flex justify-center">
          <SectionLabel>Knowledge Base</SectionLabel>
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Understanding Hantavirus
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Essential information about hantavirus infections, transmission, symptoms,
          and prevention from medical authorities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <InfoCard icon={Bug} iconColor="bg-red-500/15 text-red-400" title="What is Hantavirus?">
          <p className="text-slate-300 text-[13px] leading-relaxed">
            Hantaviruses are a family of viruses spread mainly by rodents. They can cause varied
            disease syndromes worldwide. Each hantavirus is associated with specific rodent host
            species. Infection occurs through inhalation of aerosolized virus from rodent urine,
            droppings, or saliva.
          </p>
          <div className="mt-4 p-3 bg-amber-500/[0.08] rounded-xl border border-amber-500/20">
            <p className="text-[11px] text-amber-300 leading-relaxed">
              <strong className="font-bold">Note:</strong> Person-to-person transmission is rare but
              has been documented with <span className="font-semibold">Andes virus</span> in South
              America — the strain associated with the current MV Hondius outbreak.
            </p>
          </div>
        </InfoCard>

        <InfoCard icon={Thermometer} iconColor="bg-orange-500/15 text-orange-400" title="Symptoms">
          <div className="space-y-4">
            <div>
              <h4 className="text-[12px] font-bold text-white mb-2 uppercase tracking-wider">
                Hantavirus Pulmonary Syndrome (HPS)
              </h4>
              <ul className="text-[12px] text-slate-400 space-y-1.5">
                <li className="flex gap-2"><span className="text-red-400 mt-1">▸</span>Fatigue, fever, muscle aches (large muscle groups)</li>
                <li className="flex gap-2"><span className="text-red-400 mt-1">▸</span>Later: coughing, shortness of breath</li>
                <li className="flex gap-2"><span className="text-red-400 mt-1">▸</span>Incubation: 1–8 weeks</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-white mb-2 uppercase tracking-wider">
                Hemorrhagic Fever w/ Renal Syndrome (HFRS)
              </h4>
              <ul className="text-[12px] text-slate-400 space-y-1.5">
                <li className="flex gap-2"><span className="text-orange-400 mt-1">▸</span>Intense headaches, abdominal pain</li>
                <li className="flex gap-2"><span className="text-orange-400 mt-1">▸</span>Fever, chills, nausea, blurred vision</li>
                <li className="flex gap-2"><span className="text-orange-400 mt-1">▸</span>Potential acute renal failure</li>
              </ul>
            </div>
          </div>
        </InfoCard>

        <InfoCard icon={Shield} iconColor="bg-emerald-500/15 text-emerald-400" title="Prevention">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <Home className="w-4 h-4 text-emerald-400 mb-2" />
              <p className="text-[12px] font-semibold text-white">Seal Entry Points</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Close gaps in buildings</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <Droplets className="w-4 h-4 text-emerald-400 mb-2" />
              <p className="text-[12px] font-semibold text-white">Wet Cleaning</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Spray with disinfectant</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <Wind className="w-4 h-4 text-emerald-400 mb-2" />
              <p className="text-[12px] font-semibold text-white">Ventilation</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Air out closed spaces</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <AlertTriangle className="w-4 h-4 text-emerald-400 mb-2" />
              <p className="text-[12px] font-semibold text-white">Avoid Contact</p>
              <p className="text-[11px] text-slate-400 mt-0.5">No rodent nests</p>
            </div>
          </div>
        </InfoCard>

        <InfoCard icon={Stethoscope} iconColor="bg-blue-500/15 text-blue-400" title="Treatment">
          <p className="text-slate-300 text-[13px] leading-relaxed mb-4">
            There is no specific antiviral treatment or vaccine. Early recognition and intensive
            care significantly improve outcomes.
          </p>
          <div className="space-y-2">
            {[
              'Immediate intensive care for HPS patients',
              'Oxygen therapy & mechanical ventilation',
              'Dialysis for severe HFRS cases',
              'Ribavirin may reduce severity (HFRS, early)',
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-[12px]">
                <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                <span className="text-slate-300">{t}</span>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
    </section>
  );
}
