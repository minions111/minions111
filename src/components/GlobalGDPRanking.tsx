"use client";

import React, { useEffect, useState } from 'react';
import { fetchEconomicIndicators } from '@/lib/news';

export const GlobalGDPRanking = () => {
  const [worldGdp, setWorldGdp] = useState<any>(null);

  const topEconomies = [
    { rank: 1, country: "United States", gdp: "27.3T", growth: "+2.5%", pct: "25.2%" },
    { rank: 2, country: "China", gdp: "17.7T", growth: "+5.3%", pct: "16.4%" },
    { rank: 3, country: "Germany", gdp: "4.4T", growth: "+0.1%", pct: "4.1%" },
    { rank: 4, country: "Japan", gdp: "4.2T", growth: "+0.4%", pct: "3.9%" },
    { rank: 5, country: "India", gdp: "3.7T", growth: "+7.8%", pct: "3.4%" },
  ];

  useEffect(() => {
    fetchEconomicIndicators().then(data => {
      if (data) setWorldGdp(data);
    });
  }, []);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>GDP - GLOBAL ECONOMIC RANKING</span>
        <span>SOURCE: WORLD BANK / IMF</span>
      </div>

      <div className="bg-blue-900/20 border border-blue-900/50 p-4 mb-8 flex justify-between items-center">
        <div>
          <div className="text-blue-400 text-[9px] uppercase">World Real GDP Growth ({worldGdp?.date || '2023'})</div>
          <div className="text-white text-3xl font-bold">{worldGdp?.value?.toFixed(2) || '2.60'}%</div>
        </div>
        <div className="text-right text-gray-500 text-[10px] leading-tight">
          Total World GDP Est:<br/>
          <span className="text-white font-bold">$105.4 Trillion</span>
        </div>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Rank</th>
            <th>Economy</th>
            <th className="text-right">Nominal GDP</th>
            <th className="text-right">Real Growth</th>
            <th className="text-right">% of World</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {topEconomies.map((e, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 text-gray-500">{e.rank}</td>
              <td className="font-bold text-blue-400">{e.country}</td>
              <td className="text-right font-bold tabular-nums">{e.gdp}</td>
              <td className={`text-right ${e.growth.startsWith('+') ? 'text-[#00ff00]' : 'text-red-500'}`}>{e.growth}</td>
              <td className="text-right text-gray-500">{e.pct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
