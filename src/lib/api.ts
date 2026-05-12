import { Outbreak, GlobalStats, NewsItem, TimeSeriesData, CountryData } from '@/types';

const WHO_API_BASE = 'https://www.who.int/api/news/dons';
const PROMED_RSS = 'https://promedmail.org/feed/';

interface WHODonItem {
  Id: string;
  UrlName: string;
  Title: string;
  PublicationDate: string;
  LastModified: string;
  Summary: string;
  Overview?: string;
  Countries?: string[];
  DiseaseIds?: number[];
}

interface WHOApiResponse {
  value: WHODonItem[];
}

const countryCoordinates: Record<string, { lat: number; lng: number; code: string }> = {
  'argentina': { lat: -38.4161, lng: -63.6167, code: 'AR' },
  'chile': { lat: -35.6751, lng: -71.5430, code: 'CL' },
  'brazil': { lat: -14.2350, lng: -51.9253, code: 'BR' },
  'germany': { lat: 51.1657, lng: 10.4515, code: 'DE' },
  'finland': { lat: 61.9241, lng: 25.7482, code: 'FI' },
  'sweden': { lat: 60.1282, lng: 18.6435, code: 'SE' },
  'russia': { lat: 61.5240, lng: 105.3188, code: 'RU' },
  'russian federation': { lat: 61.5240, lng: 105.3188, code: 'RU' },
  'china': { lat: 35.8617, lng: 104.1954, code: 'CN' },
  'south korea': { lat: 35.9078, lng: 127.7669, code: 'KR' },
  'republic of korea': { lat: 35.9078, lng: 127.7669, code: 'KR' },
  'united states': { lat: 37.0902, lng: -95.7129, code: 'US' },
  'united states of america': { lat: 37.0902, lng: -95.7129, code: 'US' },
  'panama': { lat: 8.5380, lng: -80.7821, code: 'PA' },
  'belgium': { lat: 50.5039, lng: 4.4699, code: 'BE' },
  'france': { lat: 46.2276, lng: 2.2137, code: 'FR' },
  'norway': { lat: 60.4720, lng: 8.4689, code: 'NO' },
  'croatia': { lat: 45.1000, lng: 15.2000, code: 'HR' },
  'slovenia': { lat: 46.1512, lng: 14.9955, code: 'SI' },
  'austria': { lat: 47.5162, lng: 14.5501, code: 'AT' },
  'antarctica': { lat: -82.8628, lng: 135.0000, code: 'AQ' },
  'paraguay': { lat: -23.4425, lng: -58.4438, code: 'PY' },
  'bolivia': { lat: -16.2902, lng: -63.5887, code: 'BO' },
  'multi-country': { lat: -64.2667, lng: -62.9833, code: 'XX' },
};

export async function fetchWHOHantavirusData(): Promise<WHODonItem[]> {
  try {
    const response = await fetch(
      `${WHO_API_BASE}?$filter=contains(tolower(Title),'hantavirus') or contains(tolower(Title),'hanta')&$orderby=PublicationDate desc&$top=50`,
      {
        headers: {
          'Accept': 'application/json',
        },
        next: { revalidate: 300 }
      }
    );

    if (!response.ok) {
      throw new Error(`WHO API error: ${response.status}`);
    }

    const data: WHOApiResponse = await response.json();
    return data.value || [];
  } catch (error) {
    console.error('Error fetching WHO data:', error);
    return [];
  }
}

export async function fetchECDCData(): Promise<Outbreak[]> {
  try {
    const response = await fetch(
      'https://atlas.ecdc.europa.eu/api/data?Disease=Hantavirus%20infection&Year=2024,2025,2026&Format=json',
      {
        next: { revalidate: 300 }
      }
    );
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    return parseECDCData(data);
  } catch (error) {
    console.error('Error fetching ECDC data:', error);
    return [];
  }
}

function parseECDCData(data: unknown[]): Outbreak[] {
  if (!Array.isArray(data)) return [];
  
  return data.map((rawItem: unknown, index: number) => {
    const item = rawItem as Record<string, unknown>;
    const country = String(item.Country || item.RegionName || 'Unknown');
    const countryLower = country.toLowerCase();
    const coords = countryCoordinates[countryLower] || { lat: 50, lng: 10, code: 'EU' };
    
    return {
      id: `ecdc-${index}-${Date.now()}`,
      country: country,
      countryCode: coords.code,
      cases: Number(item.NumValue || item.Cases || 0),
      deaths: 0,
      date: String(item.Time || new Date().toISOString().split('T')[0]),
      source: 'ECDC',
      sourceUrl: 'https://atlas.ecdc.europa.eu/',
      status: 'active' as const,
      coordinates: { lat: coords.lat, lng: coords.lng },
      virusType: 'Puumala virus',
    };
  }).filter(o => o.cases > 0);
}

export async function fetchProMEDData(): Promise<NewsItem[]> {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://promedmail.org/feed/',
      { next: { revalidate: 300 } }
    );
    
    if (!response.ok) return [];
    
    const data = await response.json();
    
    if (data.status !== 'ok' || !data.items) return [];
    
    const hantaItems = data.items.filter((item: { title: string }) => 
      item.title.toLowerCase().includes('hantavirus') ||
      item.title.toLowerCase().includes('hanta') ||
      item.title.toLowerCase().includes('hemorrhagic fever with renal')
    );
    
    return hantaItems.slice(0, 10).map((item: { title: string; description: string; pubDate: string; link: string }, index: number) => ({
      id: `promed-${index}`,
      title: item.title,
      summary: item.description?.replace(/<[^>]*>/g, '').slice(0, 200) + '...',
      date: item.pubDate?.split(' ')[0] || new Date().toISOString().split('T')[0],
      source: 'ProMED',
      url: item.link,
      category: 'outbreak' as const,
    }));
  } catch (error) {
    console.error('Error fetching ProMED data:', error);
    return [];
  }
}

export function parseWHOToOutbreaks(whoData: WHODonItem[]): Outbreak[] {
  return whoData.map((item, index) => {
    const titleLower = item.Title.toLowerCase();
    const summaryLower = (item.Summary || '').toLowerCase();
    const fullText = titleLower + ' ' + summaryLower;
    
    let country = 'Unknown';
    let countryCode = 'XX';
    let lat = 0;
    let lng = 0;
    
    for (const [name, coords] of Object.entries(countryCoordinates)) {
      if (fullText.includes(name)) {
        country = name.charAt(0).toUpperCase() + name.slice(1);
        countryCode = coords.code;
        lat = coords.lat;
        lng = coords.lng;
        break;
      }
    }
    
    if (fullText.includes('cruise') || fullText.includes('ship') || fullText.includes('hondius')) {
      country = 'Multi-country (Cruise Ship)';
      countryCode = 'AQ';
      lat = -64.2667;
      lng = -62.9833;
    }
    
    const casesMatch = fullText.match(/(\d+)\s*(confirmed|cases|infections)/);
    const deathsMatch = fullText.match(/(\d+)\s*(deaths?|fatal|died)/);
    
    let virusType = 'Hantavirus';
    if (fullText.includes('andes')) virusType = 'Andes virus';
    else if (fullText.includes('puumala')) virusType = 'Puumala virus';
    else if (fullText.includes('sin nombre')) virusType = 'Sin Nombre virus';
    else if (fullText.includes('hantaan')) virusType = 'Hantaan virus';
    else if (fullText.includes('seoul')) virusType = 'Seoul virus';
    
    return {
      id: item.Id || `who-${index}`,
      country,
      countryCode,
      cases: casesMatch ? parseInt(casesMatch[1]) : 1,
      deaths: deathsMatch ? parseInt(deathsMatch[1]) : 0,
      date: item.PublicationDate?.split('T')[0] || new Date().toISOString().split('T')[0],
      source: 'WHO DON',
      sourceUrl: `https://www.who.int/emergencies/disease-outbreak-news/item/${item.UrlName}`,
      status: 'active' as const,
      coordinates: { lat, lng },
      virusType,
      notes: item.Summary?.slice(0, 150),
    };
  });
}

export function parseWHOToNews(whoData: WHODonItem[]): NewsItem[] {
  return whoData.slice(0, 5).map((item, index) => ({
    id: `who-news-${index}`,
    title: item.Title,
    summary: item.Summary?.slice(0, 200) || '',
    date: item.PublicationDate?.split('T')[0] || new Date().toISOString().split('T')[0],
    source: 'WHO',
    url: `https://www.who.int/emergencies/disease-outbreak-news/item/${item.UrlName}`,
    category: 'outbreak' as const,
  }));
}

export function calculateStats(outbreaks: Outbreak[]): GlobalStats {
  const totalCases = outbreaks.reduce((sum, o) => sum + o.cases, 0);
  const totalDeaths = outbreaks.reduce((sum, o) => sum + o.deaths, 0);
  const uniqueCountries = new Set(outbreaks.map(o => o.countryCode)).size;
  const activeOutbreaks = outbreaks.filter(o => o.status === 'active').length;
  
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  const recentOutbreaks = outbreaks.filter(o => new Date(o.date) >= oneWeekAgo);
  const weeklyNewCases = recentOutbreaks.reduce((sum, o) => sum + o.cases, 0);
  const weeklyNewDeaths = recentOutbreaks.reduce((sum, o) => sum + o.deaths, 0);
  
  return {
    totalCases,
    totalDeaths,
    activeOutbreaks,
    countriesAffected: uniqueCountries,
    lastUpdated: new Date().toISOString(),
    weeklyChange: {
      cases: weeklyNewCases,
      deaths: weeklyNewDeaths,
    },
  };
}

export function aggregateByCountry(outbreaks: Outbreak[]): CountryData[] {
  const countryMap = new Map<string, CountryData>();
  
  for (const outbreak of outbreaks) {
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
    .sort((a, b) => b.totalCases - a.totalCases);
}

export function generateTimeSeriesData(outbreaks: Outbreak[]): TimeSeriesData[] {
  const monthlyData = new Map<string, { cases: number; deaths: number }>();
  
  for (const outbreak of outbreaks) {
    const month = outbreak.date.substring(0, 7);
    const existing = monthlyData.get(month) || { cases: 0, deaths: 0 };
    existing.cases += outbreak.cases;
    existing.deaths += outbreak.deaths;
    monthlyData.set(month, existing);
  }
  
  return Array.from(monthlyData.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-12)
    .map(([date, data]) => ({
      date,
      cases: data.cases,
      deaths: data.deaths,
    }));
}
