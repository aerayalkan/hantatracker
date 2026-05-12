import { NextResponse } from 'next/server';
import { fetchAllHantavirusData } from '@/lib/data';

export const revalidate = 300;

export async function GET() {
  try {
    const data = await fetchAllHantavirusData();
    
    return NextResponse.json({
      success: true,
      data: {
        outbreaks: data.outbreaks,
        stats: data.stats,
        countries: data.countryData,
        timeSeries: data.timeSeriesData,
      },
      meta: {
        lastUpdated: data.lastFetched,
        sources: data.sources,
        outbreakCount: data.outbreaks.length,
        note: 'Data is aggregated from WHO, ECDC, and ProMED. Updates every hour.',
      },
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch outbreak data',
      message: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
