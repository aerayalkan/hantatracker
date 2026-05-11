export interface Outbreak {
  id: string;
  country: string;
  countryCode: string;
  region?: string;
  cases: number;
  deaths: number;
  date: string;
  source: string;
  sourceUrl?: string;
  status: 'active' | 'monitoring' | 'resolved';
  coordinates: {
    lat: number;
    lng: number;
  };
  virusType?: string;
  notes?: string;
}

export interface GlobalStats {
  totalCases: number;
  totalDeaths: number;
  activeOutbreaks: number;
  countriesAffected: number;
  lastUpdated: string;
  weeklyChange: {
    cases: number;
    deaths: number;
  };
}

export interface EndemicRegion {
  id: string;
  name: string;
  countries: string[];
  virusTypes: string[];
  riskLevel: 'high' | 'moderate' | 'low';
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  url: string;
  category: 'outbreak' | 'research' | 'policy' | 'advisory';
}

export interface TimeSeriesData {
  date: string;
  cases: number;
  deaths: number;
}

export interface CountryData {
  country: string;
  countryCode: string;
  totalCases: number;
  totalDeaths: number;
  activeCases: number;
  lastReportDate: string;
}
