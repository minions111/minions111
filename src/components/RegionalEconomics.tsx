"use client";

import React from 'react';

export const RegionalEconomics = () => {
  const regions = [
    { name: "OECD Economies", gdp: "+1.2%", cpi: "3.4%", debt: "112%", population: "1.3B" },
    { name: "Emerging Markets", gdp: "+4.5%", cpi: "6.2%", debt: "65%", population: "4.5B" },
    { name: "Asia-Pacific", gdp: "+5.1%", cpi: "2.1%", debt: "82%", population: "3.2B" },
    { name: "Latin America", gdp: "+1.8%", cpi: "12.4%", debt: "58%", population: "0.6B" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>RECO - REGIONAL ECONOMIC MONITOR</span>
        <span>NY 21:58:12</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {regions.map((r, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-[#222] p-4 group hover:border-[#ffb900] transition-colors">
            <h2 className="text-white font-bold mb-4 uppercase text-base border-b border-[#333] pb-1">{r.name}</h2>
            <div className="grid grid-cols-2 gap-y-3 text-[10px]">
              <div className="flex justify-between pr-4">
                <span className="text-gray-500 uppercase">GDP Growth</span>
                <span className="text-[#00ff00] font-bold">{r.gdp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase">CPI (YoY)</span>
                <span className="text-[#ffb900] font-bold">{r.cpi}</span>
              </div>
              <div className="flex justify-between pr-4">
                <span className="text-gray-500 uppercase">Debt/GDP</span>
                <span className="text-white">{r.debt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase">Population</span>
                <span className="text-gray-400">{r.population}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
