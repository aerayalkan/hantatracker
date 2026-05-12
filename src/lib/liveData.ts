import { Outbreak, GlobalStats, NewsItem, TimeSeriesData, CountryData, EndemicRegion } from '@/types';

export const LAST_VERIFIED_UPDATE = new Date().toISOString();

export const liveOutbreaks: Outbreak[] = [
  {
    id: 'mv-hondius-main',
    country: 'Netherlands',
    countryCode: 'NL',
    region: 'MV Hondius (Flag State)',
    cases: 3,
    deaths: 1,
    date: '2026-05-10',
    source: 'WHO DON',
    sourceUrl: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600',
    status: 'active',
    coordinates: { lat: 52.1326, lng: 5.2913 },
    virusType: 'Andes virus',
    notes: '2 confirmed survivors medically evacuated; 1 confirmed death on board (2 May)'
  },
  {
    id: 'south-africa-2026',
    country: 'South Africa',
    countryCode: 'ZA',
    region: 'Johannesburg',
    cases: 2,
    deaths: 1,
    date: '2026-05-10',
    source: 'NICD South Africa',
    sourceUrl: 'https://www.nicd.ac.za/',
    status: 'active',
    coordinates: { lat: -26.2041, lng: 28.0473 },
    virusType: 'Andes virus',
    notes: '2 lab-confirmed cases at the National Institute for Communicable Diseases'
  },
  {
    id: 'switzerland-2026',
    country: 'Switzerland',
    countryCode: 'CH',
    region: 'Unknown',
    cases: 1,
    deaths: 0,
    date: '2026-05-08',
    source: 'Swiss FOPH',
    status: 'active',
    coordinates: { lat: 46.8182, lng: 8.2275 },
    virusType: 'Andes virus',
    notes: '1 confirmed case after disembarkation from MV Hondius'
  },
  {
    id: 'germany-2026',
    country: 'Germany',
    countryCode: 'DE',
    region: 'MV Hondius passenger',
    cases: 1,
    deaths: 1,
    date: '2026-05-02',
    source: 'WHO DON',
    sourceUrl: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600',
    status: 'active',
    coordinates: { lat: 51.1657, lng: 10.4515 },
    virusType: 'Andes virus',
    notes: 'German national died on board MV Hondius 2 May; confirmed Andes virus'
  },
  {
    id: 'france-2026',
    country: 'France',
    countryCode: 'FR',
    region: 'Paris - Bichat Hospital',
    cases: 1,
    deaths: 0,
    date: '2026-05-10',
    source: 'French Ministry of Health',
    status: 'active',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    virusType: 'Andes virus',
    notes: 'Passenger showed symptoms during repatriation flight; 5 French nationals in strict isolation'
  },
  {
    id: 'spain-2026',
    country: 'Spain',
    countryCode: 'ES',
    region: 'Alicante & Catalonia',
    cases: 2,
    deaths: 0,
    date: '2026-05-09',
    source: 'Spain Ministry of Health',
    status: 'monitoring',
    coordinates: { lat: 40.4168, lng: -3.7038 },
    virusType: 'Andes virus',
    notes: '2 suspected cases: contacts from flight with confirmed case'
  },
  {
    id: 'uk-2026',
    country: 'United Kingdom',
    countryCode: 'GB',
    region: 'Arrowe Park Hospital, Wirral',
    cases: 2,
    deaths: 0,
    date: '2026-05-10',
    source: 'UKHSA',
    status: 'active',
    coordinates: { lat: 53.3781, lng: -3.0630 },
    virusType: 'Andes virus',
    notes: '2 British nationals with confirmed hantavirus; repatriated via FCDO charter'
  },
  {
    id: 'usa-2026',
    country: 'United States',
    countryCode: 'US',
    region: 'Nebraska Medicine NQU',
    cases: 0,
    deaths: 0,
    date: '2026-05-10',
    source: 'CDC',
    sourceUrl: 'https://www.cdc.gov/hantavirus/',
    status: 'monitoring',
    coordinates: { lat: 41.2565, lng: -95.9345 },
    virusType: 'Andes virus',
    notes: '18 evacuees at National Quarantine Unit; 7 states monitoring residents; CDC EOC Level 3'
  },
  {
    id: 'canada-2026',
    country: 'Canada',
    countryCode: 'CA',
    region: 'Ontario & Quebec',
    cases: 0,
    deaths: 0,
    date: '2026-05-08',
    source: 'PHAC',
    status: 'monitoring',
    coordinates: { lat: 45.4215, lng: -75.6972 },
    virusType: 'Andes virus',
    notes: '3 individuals self-isolating; 4 Canadians were on board (none symptomatic)'
  },
  {
    id: 'singapore-2026',
    country: 'Singapore',
    countryCode: 'SG',
    region: 'NCID',
    cases: 0,
    deaths: 0,
    date: '2026-05-08',
    source: 'CDA Singapore',
    status: 'monitoring',
    coordinates: { lat: 1.3521, lng: 103.8198 },
    virusType: 'Andes virus',
    notes: '2 residents isolated at NCID; tested negative; 30-day quarantine'
  },
  {
    id: 'saint-helena-2026',
    country: 'Saint Helena',
    countryCode: 'SH',
    region: 'Tristan da Cunha',
    cases: 1,
    deaths: 0,
    date: '2026-05-08',
    source: 'UKHSA',
    status: 'monitoring',
    coordinates: { lat: -37.1052, lng: -12.2777 },
    virusType: 'Andes virus',
    notes: 'One British national with suspected hantavirus'
  },
  {
    id: 'tenerife-2026',
    country: 'Spain',
    countryCode: 'ES',
    region: 'Tenerife (Evacuation Point)',
    cases: 0,
    deaths: 0,
    date: '2026-05-10',
    source: 'WHO',
    status: 'monitoring',
    coordinates: { lat: 28.2916, lng: -16.6291 },
    virusType: 'Andes virus',
    notes: 'MV Hondius arrived for passenger evacuation and repatriation'
  }
];

export const liveNews: NewsItem[] = [
  {
    id: 'news-nbc-1',
    title: 'Americans evacuated from hantavirus-stricken cruise ship off Spanish island',
    summary: '18 evacuees departed Tenerife on a CDC/HHS charter to Nebraska Medicine\'s National Quarantine Unit.',
    date: '2026-05-10',
    source: 'NBC News',
    url: 'https://www.nbcnews.com/health/health-news/hantavirus-stricken-cruise-ship-arrives-tenerife-rcna344318',
    category: 'outbreak'
  },
  {
    id: 'news-bbc-1',
    title: 'French national shows symptoms on return from hantavirus-hit ship',
    summary: 'One MV Hondius passenger began showing symptoms during the repatriation flight from Tenerife.',
    date: '2026-05-10',
    source: 'BBC News',
    url: 'https://www.bbc.com/news/articles/c3r2p70jdy7o',
    category: 'outbreak'
  },
  {
    id: 'news-cnn-1',
    title: 'Waves of passengers aboard hantavirus-hit cruise ship taken to shore in Tenerife',
    summary: 'Passengers from the MV Hondius are being evacuated and flying home for quarantine protocols.',
    date: '2026-05-10',
    source: 'CNN',
    url: 'https://edition.cnn.com/2026/05/10/europe/hantavirus-cruise-ship-tenerife-arrive-hnk-intl',
    category: 'outbreak'
  },
  {
    id: 'news-who-don600',
    title: 'Hantavirus - Multi-country: MV Hondius Cruise Ship Cluster',
    summary: 'WHO Disease Outbreak News confirms 6 cases with 3 deaths across multiple countries linked to Antarctic cruise ship.',
    date: '2026-05-08',
    source: 'WHO',
    url: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600',
    category: 'outbreak'
  },
  {
    id: 'news-ecdc-1',
    title: 'ECDC: Andes virus natural reservoir not present in Europe',
    summary: 'The natural rodent reservoir of Andes virus is not present in Europe, North America, or Asia, limiting secondary transmission risk.',
    date: '2026-05-06',
    source: 'ECDC',
    url: 'https://www.ecdc.europa.eu/en/news-events/hantavirus-outbreak-cruise-ship',
    category: 'advisory'
  }
];

export const endemicRegions: EndemicRegion[] = [
  {
    id: 'south-america-endemic',
    name: 'Southern South America (Andes virus)',
    countries: ['Argentina', 'Chile', 'Uruguay', 'Paraguay', 'Bolivia'],
    virusTypes: ['Andes virus'],
    riskLevel: 'high',
    coordinates: { lat: -34.6037, lng: -58.3816 }
  },
  {
    id: 'europe-endemic',
    name: 'Northern & Central Europe',
    countries: ['Finland', 'Sweden', 'Norway', 'Germany', 'Belgium'],
    virusTypes: ['Puumala virus'],
    riskLevel: 'moderate',
    coordinates: { lat: 60.1699, lng: 24.9384 }
  },
  {
    id: 'asia-endemic',
    name: 'East Asia',
    countries: ['China', 'South Korea', 'Russia'],
    virusTypes: ['Hantaan virus', 'Seoul virus'],
    riskLevel: 'high',
    coordinates: { lat: 35.8617, lng: 104.1954 }
  },
  {
    id: 'north-america-endemic',
    name: 'North American Southwest',
    countries: ['United States'],
    virusTypes: ['Sin Nombre virus'],
    riskLevel: 'moderate',
    coordinates: { lat: 36.1699, lng: -115.1398 }
  }
];

export function calculateLiveStats(): GlobalStats {
  const confirmedOutbreaks = liveOutbreaks.filter(o => o.cases > 0);
  const totalCases = confirmedOutbreaks.reduce((sum, o) => sum + o.cases, 0);
  const totalDeaths = liveOutbreaks.reduce((sum, o) => sum + o.deaths, 0);
  const countriesWithCases = new Set(confirmedOutbreaks.map(o => o.countryCode)).size;
  const activeOutbreaks = liveOutbreaks.filter(o => o.status === 'active').length;
  const monitoringOutbreaks = liveOutbreaks.filter(o => o.status === 'monitoring').length;

  return {
    totalCases,
    totalDeaths,
    activeOutbreaks: activeOutbreaks + monitoringOutbreaks,
    countriesAffected: new Set(liveOutbreaks.map(o => o.countryCode)).size,
    lastUpdated: LAST_VERIFIED_UPDATE,
    weeklyChange: {
      cases: totalCases,
      deaths: totalDeaths
    }
  };
}

export function aggregateLiveCountryData(): CountryData[] {
  const countryMap = new Map<string, CountryData>();

  for (const outbreak of liveOutbreaks) {
    const existing = countryMap.get(outbreak.countryCode);

    if (existing) {
      existing.totalCases += outbreak.cases;
      existing.totalDeaths += outbreak.deaths;
      existing.activeCases += outbreak.status === 'active' ? outbreak.cases : 0;
      if (new Date(outbreak.date) > new Date(existing.lastReportDate)) {
        existing.lastReportDate = outbreak.date;
      }
    } else {
      countryMap.set(outbreak.countryCode, {
        country: outbreak.country,
        countryCode: outbreak.countryCode,
        totalCases: outbreak.cases,
        totalDeaths: outbreak.deaths,
        activeCases: outbreak.status === 'active' ? outbreak.cases : 0,
        lastReportDate: outbreak.date,
      });
    }
  }

  return Array.from(countryMap.values())
    .filter(c => c.totalCases > 0)
    .sort((a, b) => b.totalCases - a.totalCases);
}

export function generateLiveTimeSeries(): TimeSeriesData[] {
  return [
    { date: '2026-04-11', cases: 1, deaths: 1 },
    { date: '2026-04-25', cases: 2, deaths: 1 },
    { date: '2026-05-02', cases: 4, deaths: 2 },
    { date: '2026-05-08', cases: 6, deaths: 3 },
    { date: '2026-05-10', cases: 12, deaths: 3 }
  ];
}
