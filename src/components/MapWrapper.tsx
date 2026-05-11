'use client';

import dynamic from 'next/dynamic';
import { Outbreak } from '@/types';

const Map = dynamic(() => import('./Map'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-sm text-slate-400">Loading map...</span>
      </div>
    </div>
  )
});

interface MapWrapperProps {
  outbreaks: Outbreak[];
}

export default function MapWrapper({ outbreaks }: MapWrapperProps) {
  return <Map outbreaks={outbreaks} />;
}
