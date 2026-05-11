import { ExternalLink, Database, Globe, Building, ShieldCheck } from 'lucide-react';

const sources = [
  {
    name: 'World Health Organization',
    short: 'WHO',
    description: 'Disease Outbreak News (DONs) and global surveillance',
    url: 'https://www.who.int/emergencies/disease-outbreak-news',
    type: 'International',
  },
  {
    name: 'NICD South Africa',
    short: 'NICD',
    description: 'National Institute for Communicable Diseases',
    url: 'https://www.nicd.ac.za/',
    type: 'National',
  },
  {
    name: 'UK Health Security Agency',
    short: 'UKHSA',
    description: 'UK national surveillance and travel advisories',
    url: 'https://www.gov.uk/government/organisations/uk-health-security-agency',
    type: 'National',
  },
  {
    name: 'CDC United States',
    short: 'CDC',
    description: 'U.S. hantavirus surveillance & quarantine units',
    url: 'https://www.cdc.gov/hantavirus/',
    type: 'National',
  },
  {
    name: 'European Centre for Disease Prevention',
    short: 'ECDC',
    description: 'European surveillance and risk assessments',
    url: 'https://www.ecdc.europa.eu/',
    type: 'Regional',
  },
  {
    name: 'Pan American Health Organization',
    short: 'PAHO',
    description: 'Americas region disease monitoring',
    url: 'https://www.paho.org/',
    type: 'Regional',
  },
  {
    name: 'ProMED-mail',
    short: 'ProMED',
    description: 'Program for Monitoring Emerging Diseases',
    url: 'https://promedmail.org/',
    type: 'Surveillance',
  },
  {
    name: 'Public Health Agency Canada',
    short: 'PHAC',
    description: 'Canadian federal surveillance and isolation protocols',
    url: 'https://www.canada.ca/en/public-health.html',
    type: 'National',
  },
];

const typeMeta: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  International: { icon: Globe, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  Regional: { icon: Database, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  National: { icon: Building, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  Surveillance: { icon: ShieldCheck, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
};

export default function SourcesSection() {
  return (
    <section id="sources" className="py-16">
      <div className="text-center mb-12">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
              Verified Sources
            </span>
          </div>
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Data Sources
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Outbreak data is aggregated from official health authorities and verified surveillance
          networks worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sources.map((source) => {
          const meta = typeMeta[source.type];
          const Icon = meta.icon;
          return (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card rounded-2xl p-5 group transition-all hover:translate-y-[-2px]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg border ${meta.bg}`}>
                  <Icon className={`w-4 h-4 ${meta.color}`} />
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-300 transition-colors" />
              </div>

              <p
                className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.12em] mb-1"
              >
                {source.short}
              </p>

              <h3
                className="font-bold text-white text-[14px] mb-1.5 group-hover:text-red-400 transition-colors leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {source.name}
              </h3>

              <p className="text-[12px] text-slate-400 leading-relaxed line-clamp-2 mb-3">
                {source.description}
              </p>

              <span
                className={`inline-flex px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.12em] border ${meta.bg} ${meta.color}`}
              >
                {source.type}
              </span>
            </a>
          );
        })}
      </div>

      <div className="mt-10 glass-card rounded-2xl p-5 text-center">
        <p className="text-sm text-slate-400 leading-relaxed">
          <span className="text-white font-semibold">Update frequency:</span> Data is aggregated
          and refreshed every <span className="text-emerald-400 font-semibold">10–60 minutes</span>{' '}
          from these sources. Numbers shown represent cumulative reported cases and may differ from
          official totals due to reporting delays.
        </p>
      </div>
    </section>
  );
}
