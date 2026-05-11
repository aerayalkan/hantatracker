import { 
  fetchWHOHantavirusData, 
  fetchProMEDData,
  parseWHOToOutbreaks,
  parseWHOToNews,
} from './api';
import {
  liveOutbreaks,
  liveNews,
  endemicRegions,
  calculateLiveStats,
  aggregateLiveCountryData,
  generateLiveTimeSeries,
  LAST_VERIFIED_UPDATE
} from './liveData';
import { Outbreak, GlobalStats, NewsItem, TimeSeriesData, CountryData, EndemicRegion } from '@/types';

export interface HantavirusData {
  outbreaks: Outbreak[];
  stats: GlobalStats;
  news: NewsItem[];
  timeSeriesData: TimeSeriesData[];
  countryData: CountryData[];
  endemicRegions: EndemicRegion[];
  lastFetched: string;
  sources: string[];
}

export async function fetchAllHantavirusData(): Promise<HantavirusData> {
  const sources: string[] = [
    'WHO Disease Outbreak News',
    'NICD South Africa',
    'UKHSA (UK)',
    'CDC (USA)',
    'ECDC',
    'PHAC (Canada)',
    'National Health Authorities'
  ];
  
  let allOutbreaks: Outbreak[] = [...liveOutbreaks];
  let allNews: NewsItem[] = [...liveNews];
  
  try {
    const whoData = await fetchWHOHantavirusData();
    if (whoData.length > 0) {
      const whoOutbreaks = parseWHOToOutbreaks(whoData);
      const whoNews = parseWHOToNews(whoData);
      
      for (const outbreak of whoOutbreaks) {
        if (!allOutbreaks.find(o => o.countryCode === outbreak.countryCode && o.date === outbreak.date)) {
          allOutbreaks.push(outbreak);
        }
      }
      
      for (const news of whoNews) {
        if (!allNews.find(n => n.title === news.title)) {
          allNews.push(news);
        }
      }
    }
  } catch (error) {
    console.error('WHO fetch failed:', error);
  }
  
  try {
    const promedNews = await fetchProMEDData();
    if (promedNews.length > 0) {
      for (const news of promedNews) {
        if (!allNews.find(n => n.title === news.title)) {
          allNews.push(news);
        }
      }
    }
  } catch (error) {
    console.error('ProMED fetch failed:', error);
  }
  
  const uniqueOutbreaks = deduplicateOutbreaks(allOutbreaks);
  const stats = calculateLiveStats();
  const countryData = aggregateLiveCountryData();
  const timeSeriesData = generateLiveTimeSeries();
  
  allNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return {
    outbreaks: uniqueOutbreaks,
    stats,
    news: allNews.slice(0, 10),
    timeSeriesData,
    countryData,
    endemicRegions,
    lastFetched: LAST_VERIFIED_UPDATE,
    sources,
  };
}

function deduplicateOutbreaks(outbreaks: Outbreak[]): Outbreak[] {
  const seen = new Map<string, Outbreak>();
  
  for (const outbreak of outbreaks) {
    const key = `${outbreak.countryCode}-${outbreak.region || 'main'}`;
    const existing = seen.get(key);
    
    if (!existing || new Date(outbreak.date) > new Date(existing.date)) {
      seen.set(key, outbreak);
    }
  }
  
  return Array.from(seen.values())
    .sort((a, b) => {
      if (a.cases !== b.cases) return b.cases - a.cases;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export async function fetchLatestOutbreakNews(): Promise<NewsItem[]> {
  const allNews: NewsItem[] = [...liveNews];
  
  try {
    const promedNews = await fetchProMEDData();
    allNews.push(...promedNews);
  } catch (e) {
    console.error('ProMED fetch failed:', e);
  }
  
  return allNews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);
}

export { endemicRegions };
