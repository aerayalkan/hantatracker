import {
  Activity,
  Skull,
  AlertTriangle,
  Globe,
  Newspaper,
  ArrowRight,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsCard from '@/components/StatsCard';
import OutbreakTable from '@/components/OutbreakTable';
import NewsFeed from '@/components/NewsFeed';
import AboutSection from '@/components/AboutSection';
import SourcesSection from '@/components/SourcesSection';
import { TrendChart, CountryBarChart, VirusDistribution } from '@/components/Charts';
import { AdPlaceholder } from '@/components/AdBanner';
import MapWrapper from '@/components/MapWrapper';
import { fetchAllHantavirusData } from '@/lib/data';

export const revalidate = 300;

export default async function Home() {
  const data = await fetchAllHantavirusData();

  const {
    outbreaks,
    stats,
    news,
    timeSeriesData,
    countryData,
    sources,
    lastFetched,
  } = data;

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroSection
          lastUpdated={lastFetched}
          sourceCount={sources.length}
          totalCountries={stats.countriesAffected}
        />

        {/* Stats Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="animate-fade-in-up delay-100">
              <StatsCard
                title="Confirmed Cases"
                value={stats.totalCases}
                change={stats.weeklyChange.cases}
                changeLabel="this week"
                icon={Activity}
                variant="danger"
              />
            </div>
            <div className="animate-fade-in-up delay-200">
              <StatsCard
                title="Deaths"
                value={stats.totalDeaths}
                change={stats.weeklyChange.deaths}
                changeLabel="this week"
                icon={Skull}
              />
            </div>
            <div className="animate-fade-in-up delay-300">
              <StatsCard
                title="Active Events"
                value={stats.activeOutbreaks}
                icon={AlertTriangle}
                variant="warning"
                subtitle="Active + monitoring"
              />
            </div>
            <div className="animate-fade-in-up delay-400">
              <StatsCard
                title="Countries Tracked"
                value={stats.countriesAffected}
                icon={Globe}
                subtitle="Cases + monitoring"
              />
            </div>
          </div>

          <div className="mt-6 animate-fade-in-up delay-500">
            <AdPlaceholder height="90px" />
          </div>
        </section>

        {/* Map + News Section */}
        <section id="map" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 space-y-5">
              {/* Map */}
              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <div>
                    <h2
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Live Outbreak Map
                    </h2>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Click pins for case details and source links
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                      <span className="text-slate-400">Active</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                      <span className="text-slate-400">Monitoring</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-slate-400">Resolved</span>
                    </span>
                  </div>
                </div>
                <div className="h-[460px] rounded-xl overflow-hidden ring-1 ring-white/[0.06]">
                  <MapWrapper outbreaks={outbreaks} />
                </div>
              </div>

              {/* Charts */}
              {timeSeriesData.length > 0 && countryData.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <TrendChart data={timeSeriesData} />
                  <CountryBarChart data={countryData} />
                </div>
              )}

              {outbreaks.length > 0 && <VirusDistribution outbreaks={outbreaks} />}
            </div>

            {/* News Sidebar */}
            <div className="lg:col-span-1 space-y-5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Newspaper className="w-4 h-4 text-slate-400" />
                    <h2
                      className="text-base font-bold text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Latest Updates
                    </h2>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                    Live feed
                  </span>
                </div>
                <NewsFeed news={news} />
              </div>

              <AdPlaceholder height="250px" />
            </div>
          </div>
        </section>

        {/* Outbreak Table */}
        <section id="outbreaks" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                  Current Events
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Active Outbreaks & Monitoring
              </h2>
              <p className="text-sm text-slate-400 mt-1.5">
                Showing {outbreaks.length} events across {stats.countriesAffected} countries
              </p>
            </div>
            <a
              href="/api/outbreaks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] rounded-lg transition-all"
            >
              JSON API
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          {outbreaks.length > 0 ? (
            <OutbreakTable outbreaks={outbreaks} />
          ) : (
            <div className="glass-card rounded-2xl p-12 text-center">
              <AlertTriangle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">
                Unable to fetch outbreak data. Please try again later.
              </p>
            </div>
          )}
        </section>

        {/* Ad slot */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdPlaceholder height="90px" className="mb-8" />
        </div>

        {/* About */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AboutSection />
        </div>

        {/* Ad slot */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdPlaceholder height="90px" className="my-8" />
        </div>

        {/* Sources */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SourcesSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
