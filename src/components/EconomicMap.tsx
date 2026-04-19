"use client";

import React from 'react';
import { Globe, Map, Layers } from 'lucide-react';

export const EconomicMap = () => {
  const regions = [
    { name: "NORTH AMERICA", gdp: "+2.4%", inflation: "3.1%", status: "STABLE" },
    { name: "EUROZONE", gdp: "+0.2%", inflation: "2.8%", status: "STAGNANT" },
    { name: "CHINA", gdp: "+4.5%", inflation: "-0.2%", status: "DEFLATIONARY" },
    { name: "EMERGING ASIA", gdp: "+5.2%", inflation: "4.5%", status: "EXPANDING" },
    { name: "LATIN AMERICA", gdp: "+1.5%", inflation: "12.4%", status: "VOLATILE" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>EMAP - GLOBAL ECONOMIC HEATMAP</span>
        <span>INDICATOR: GDP REAL GROWTH</span>
      </div>

      <div className="flex-1 bg-gradient-to-br from-[#050505] to-[#111] border border-[#222] relative flex items-center justify-center min-h-[300px] mb-6 overflow-hidden">
        <Map size={120} className="text-gray-800 opacity-20 absolute" />
        <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
           {regions.map((r, i) => (
             <div key={i} className="bg-black/60 backdrop-blur-sm border border-[#333] p-3 hover:border-[#ffb900] transition-colors group">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-[#ffb900] font-bold uppercase">{r.name}</span>
                   <Layers size={10} className="text-gray-600" />
                </div>
                <div className="space-y-1">
                   <div className="flex justify-between">
                      <span className="text-gray-500 uppercase text-[9px]">GDP GROWTH</span>
                      <span className="text-white font-bold">{r.gdp}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-gray-500 uppercase text-[9px]">INFLATION (CPI)</span>
                      <span className="text-white font-bold">{r.inflation}</span>
                   </div>
                </div>
                <div className="mt-3 text-center border-t border-[#222] pt-2">
                   <span className="text-[8px] font-bold text-[#00ff00] uppercase tracking-widest">{r.status}</span>
                </div>
             </div>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
         {['GDP', 'CPI', 'PMI', 'UNEMP'].map(ind => (
           <div key={ind} className={`p-2 border text-center font-bold cursor-pointer transition-colors ${ind === 'GDP' ? 'bg-[#ffb900] text-black border-[#ffb900]' : 'bg-black text-gray-500 border-[#333] hover:text-white'}`}>
             {ind}
           </div>
         ))}
      </div>
    </div>
  );
};
