"use client";

import React from 'react';
import { Anchor, Navigation, Wind, Info } from 'lucide-react';

export const ShipTracking = () => {
  const vessels = [
    { name: "EVER GIVEN", type: "CONTAINER", status: "UNDERWAY", destination: "ROTTERDAM", load: "92%", speed: "18.4 kn" },
    { name: "TI EUROPE", type: "ULCC OIL", status: "ANCHORED", destination: "SINGAPORE", load: "100%", speed: "0.0 kn" },
    { name: "VALEMAX ORE", type: "BULK CARRIER", status: "LOADING", destination: "SAO LUIS", load: "15%", speed: "0.0 kn" },
    { name: "GASLOG SINGAPORE", type: "LNG", status: "UNDERWAY", destination: "TOKYO", load: "88%", speed: "19.2 kn" },
    { name: "MSC AMALFI", type: "CONTAINER", status: "UNDERWAY", destination: "NEWARK", load: "74%", speed: "21.0 kn" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>SHIP - GLOBAL VESSEL TRACKER</span>
        <span>COMMODITY FLOWS: LIVE MAP</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-950/20 border border-blue-900/40 p-4 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden">
           <Navigation size={48} className="text-blue-500 mb-2 rotate-45" />
           <div className="text-white font-bold">SUITE CANAL TRAFFIC</div>
           <div className="text-[#00ff00] text-lg font-bold">NORMAL FLOW</div>
           <div className="absolute inset-0 border-[20px] border-blue-900/10 rounded-full scale-150 animate-pulse" />
        </div>
        <div className="bg-[#111] border border-[#222] p-4">
          <div className="text-gray-500 uppercase text-[9px] mb-4">Congestion Index</div>
          <div className="space-y-3">
             <div>
               <div className="flex justify-between text-[8px] mb-1"><span>SHANGHAI</span> <span className="text-red-500">HIGH</span></div>
               <div className="h-1 w-full bg-[#333] rounded-full"><div className="h-full bg-red-500 w-[85%]" /></div>
             </div>
             <div>
               <div className="flex justify-between text-[8px] mb-1"><span>SINGAPORE</span> <span className="text-[#ffb900]">MEDIUM</span></div>
               <div className="h-1 w-full bg-[#333] rounded-full"><div className="h-full bg-[#ffb900] w-[45%]" /></div>
             </div>
             <div>
               <div className="flex justify-between text-[8px] mb-1"><span>ROTTERDAM</span> <span className="text-[#00ff00]">LOW</span></div>
               <div className="h-1 w-full bg-[#333] rounded-full"><div className="h-full bg-[#00ff00] w-[15%]" /></div>
             </div>
          </div>
        </div>
      </div>

      <table className="w-full">
        <thead className="text-gray-500 uppercase text-[9px] border-b border-[#333]">
          <tr>
            <th className="p-2 text-left font-normal">Vessel Name</th>
            <th className="p-2 text-left font-normal">Type</th>
            <th className="p-2 text-left font-normal">Status</th>
            <th className="p-2 text-left font-normal">Dest</th>
            <th className="p-2 text-right font-normal">Speed</th>
          </tr>
        </thead>
        <tbody>
          {vessels.map((v, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer group">
              <td className="p-2 flex items-center gap-2">
                <Anchor size={10} className="text-gray-500" />
                <span className="text-white font-bold uppercase">{v.name}</span>
              </td>
              <td className="p-2 text-blue-400 font-bold">{v.type}</td>
              <td className={v.status === 'UNDERWAY' ? "p-2 text-[#00ff00]" : "p-2 text-gray-500"}>{v.status}</td>
              <td className="p-2 text-white uppercase">{v.destination}</td>
              <td className="p-2 text-right text-gray-400 tabular-nums">{v.speed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
