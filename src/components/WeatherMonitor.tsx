"use client";

import React from 'react';
import { Cloud, Sun, Droplets, Wind, Thermometer } from 'lucide-react';
import { cn } from '@/lib/utils';

export const WeatherMonitor = () => {
  const regions = [
    { name: "US MIDWEST", crop: "CORN/SOY", temp: "72°F", condition: "PARTLY CLOUDY", impact: "NEUTRAL" },
    { name: "BRAZIL MATO GROSSO", crop: "SOYBEANS", temp: "84°F", condition: "HEAVY RAIN", impact: "NEGATIVE" },
    { name: "RUSSIA VOLGA", crop: "WHEAT", temp: "62°F", condition: "DRY/SUNNY", impact: "POSITIVE" },
    { name: "WEST AFRICA", crop: "COCOA", temp: "88°F", condition: "HUMID", impact: "NEUTRAL" },
    { name: "GULF OF MEXICO", crop: "OIL/GAS", temp: "78°F", condition: "TROPICAL STORM WARNING", impact: "CRITICAL" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>WX - GLOBAL WEATHER & COMMODITY IMPACT</span>
        <span>REAL-TIME SATELLITE FEED</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#111] border border-[#333] p-4 flex flex-col items-center justify-center min-h-[150px]">
          <Cloud size={48} className="text-gray-400 mb-2" />
          <div className="text-2xl font-bold text-white">LOW PRESSURE SYSTEM</div>
          <div className="text-gray-500 uppercase">APPROACHING US GULF COAST</div>
        </div>
        <div className="bg-[#111] border border-[#333] p-4">
          <div className="text-gray-500 uppercase text-[9px] mb-4">IMPACT SUMMARY</div>
          <div className="space-y-2">
            <div className="flex justify-between border-b border-[#222] pb-1">
              <span>ENERGY</span> <span className="text-red-500 font-bold">DISRUPTED</span>
            </div>
            <div className="flex justify-between border-b border-[#222] pb-1">
              <span>GRAINS</span> <span className="text-[#00ff00] font-bold">FAVORABLE</span>
            </div>
            <div className="flex justify-between border-b border-[#222] pb-1">
              <span>SOFT COMS</span> <span className="text-[#ffb900] font-bold">WATCH</span>
            </div>
          </div>
        </div>
      </div>

      <table className="w-full">
        <thead className="text-gray-500 uppercase text-[9px] border-b border-[#333]">
          <tr>
            <th className="p-2 text-left font-normal">Region</th>
            <th className="p-2 text-left font-normal">Primary Crop/Asset</th>
            <th className="p-2 text-right font-normal">Temp</th>
            <th className="p-2 text-left font-normal">Condition</th>
            <th className="p-2 text-right font-normal">Impact</th>
          </tr>
        </thead>
        <tbody>
          {regions.map((r, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer group">
              <td className="p-2 text-white font-bold">{r.name}</td>
              <td className="p-2 text-gray-400">{r.crop}</td>
              <td className="p-2 text-right text-white font-bold">{r.temp}</td>
              <td className="p-2 text-gray-400 uppercase text-[9px]">{r.condition}</td>
              <td className={cn(
                "p-2 text-right font-bold",
                r.impact === 'NEGATIVE' || r.impact === 'CRITICAL' ? 'text-red-500' :
                r.impact === 'POSITIVE' ? 'text-[#00ff00]' : 'text-[#ffb900]'
              )}>{r.impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
