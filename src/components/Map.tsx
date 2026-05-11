'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import { Outbreak } from '@/types';
import { format } from 'date-fns';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  outbreaks: Outbreak[];
  onSelectOutbreak?: (outbreak: Outbreak) => void;
}

function MapController() {
  const map = useMap();
  
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  
  return null;
}

export default function Map({ outbreaks, onSelectOutbreak }: MapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-[#050816] rounded-xl flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-slate-400">Loading map…</span>
        </div>
      </div>
    );
  }

  const getMarkerColor = (status: string, cases: number, deaths: number) => {
    if (deaths > 0) return '#dc2626';
    if (status === 'resolved') return '#10b981';
    if (status === 'monitoring') return '#f59e0b';
    if (cases > 0) return '#ef4444';
    return '#f59e0b';
  };

  const getMarkerRadius = (cases: number, deaths: number) => {
    const total = cases + deaths * 2;
    if (total >= 5) return 14;
    if (total >= 3) return 11;
    if (total >= 1) return 9;
    return 7;
  };

  return (
    <MapContainer
      center={[25, 10]}
      zoom={2}
      minZoom={2}
      maxZoom={10}
      className="w-full h-full"
      style={{ background: '#050816' }}
      worldCopyJump={true}
      attributionControl={true}
      zoomControl={true}
    >
      <MapController />
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
      />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png"
      />

      {outbreaks.map((outbreak) => {
        const color = getMarkerColor(outbreak.status, outbreak.cases, outbreak.deaths);
        const radius = getMarkerRadius(outbreak.cases, outbreak.deaths);

        return (
          <div key={outbreak.id}>
            <CircleMarker
              center={[outbreak.coordinates.lat, outbreak.coordinates.lng]}
              radius={radius + 6}
              fillColor={color}
              color={color}
              weight={0}
              opacity={0}
              fillOpacity={0.15}
            />
            <CircleMarker
              center={[outbreak.coordinates.lat, outbreak.coordinates.lng]}
              radius={radius}
              fillColor={color}
              color={color}
              weight={2}
              opacity={1}
              fillOpacity={0.6}
              eventHandlers={{
                click: () => onSelectOutbreak?.(outbreak),
              }}
            >
              <Popup>
                <div className="min-w-[240px]">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-700/50 mb-3">
                    <span className="text-2xl">{getFlagEmoji(outbreak.countryCode)}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-base leading-tight">
                        {outbreak.country}
                      </h3>
                      {outbreak.region && (
                        <p className="text-xs text-slate-400 mt-0.5">{outbreak.region}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="rounded-lg p-2.5" style={{ background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
                      <p className="text-[10px] uppercase tracking-wider text-red-300/80 font-semibold">Cases</p>
                      <p className="text-xl font-bold text-red-400 tabular-nums leading-tight mt-0.5">
                        {outbreak.cases}
                      </p>
                    </div>
                    <div className="rounded-lg p-2.5" style={{ background: 'rgba(148, 163, 184, 0.08)', border: '1px solid rgba(148, 163, 184, 0.15)' }}>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Deaths</p>
                      <p className="text-xl font-bold text-slate-200 tabular-nums leading-tight mt-0.5">
                        {outbreak.deaths}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    {outbreak.virusType && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Virus</span>
                        <span className="text-slate-200 font-medium">{outbreak.virusType}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Source</span>
                      <span className="text-slate-200 font-medium">{outbreak.source}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Updated</span>
                      <span className="text-slate-200 font-medium tabular-nums">
                        {format(new Date(outbreak.date), 'MMM d, yyyy')}
                      </span>
                    </div>
                  </div>

                  {outbreak.notes && (
                    <p className="mt-3 pt-3 border-t border-slate-700/50 text-xs text-slate-400 italic leading-relaxed">
                      {outbreak.notes}
                    </p>
                  )}

                  <div className="mt-3 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        outbreak.status === 'active'
                          ? 'bg-red-500/15 text-red-400 border border-red-500/30'
                          : outbreak.status === 'monitoring'
                          ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                          : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          outbreak.status === 'active'
                            ? 'bg-red-500'
                            : outbreak.status === 'monitoring'
                            ? 'bg-amber-500'
                            : 'bg-emerald-500'
                        }`}
                      />
                      {outbreak.status}
                    </span>
                    {outbreak.sourceUrl && (
                      <a
                        href={outbreak.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-semibold text-red-400 hover:text-red-300 uppercase tracking-wider"
                      >
                        View Source →
                      </a>
                    )}
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          </div>
        );
      })}
    </MapContainer>
  );
}

function getFlagEmoji(countryCode: string): string {
  if (countryCode === 'AQ') return '🇦🇶';
  if (countryCode === 'XX' || !countryCode || countryCode.length !== 2) return '🌍';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
