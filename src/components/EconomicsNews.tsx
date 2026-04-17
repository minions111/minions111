"use client";

import React, { useEffect, useState } from 'react';
import { Newspaper, Globe, Landmark } from 'lucide-react';
import { fetchEconomicIndicators } from '@/lib/news';

const INSTITUTIONAL_NEWS = [
  { id: 1, inst: "FED", title: "Minutes of the Federal Open Market Committee January 28-29, 2026", date: "2026-02-19" },
  { id: 2, inst: "ECB", title: "Economic Bulletin Issue 1, 2026", date: "2026-02-13" },
  { id: 3, inst: "IMF", title: "World Economic Outlook Update, January 2026", date: "2026-01-28" },
  { id: 4, inst: "BOJ", title: "Summary of Opinions at the Monetary Policy Meeting on January 23 and 24, 2026", date: "2026-01-30" },
  { id: 5, inst: "BIS", title: "BIS Quarterly Review - March 2026 pre-release", date: "2026-03-05" },
];

export const EconomicsNews = () => {
  const [gdpData, setGdpData] = useState<any>(null);

  useEffect(() => {
    fetchEconomicIndicators().then(data => {
      if (data) setGdpData(data);
    });
  }, []);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs">
      <div className="bg-[#1a1a1a] p-2 px-4 text-[#ffb900] font-bold border-b border-[#333] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Landmark size={14} />
          <span>ECONOMICS & CENTRAL BANK RELEASES</span>
        </div>
        <span className="text-[10px] text-gray-500">SOURCE: OFF_RELEASES</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Institutions Grid */}
        <div className="grid grid-cols-4 gap-4">
          {['IMF', 'WB', 'OECD', 'WTO'].map(inst => (
            <div key={inst} className="bg-[#111] border border-[#222] p-3 text-center hover:border-[#ffb900] cursor-pointer">
              <div className="text-[#ffb900] font-bold mb-1">{inst}</div>
              <div className="text-[10px] text-gray-400">Official Data</div>
            </div>
          ))}
        </div>

        {/* Latest Reports */}
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#222] mb-3 pb-1">LATEST OFFICIAL RELEASES</h2>
          <div className="space-y-3">
            {INSTITUTIONAL_NEWS.map(item => (
              <div key={item.id} className="group cursor-pointer">
                <div className="flex justify-between items-start">
                  <span className="text-white font-bold group-hover:text-[#ffb900] transition-colors">
                    [{item.inst}] {item.title}
                  </span>
                  <span className="text-gray-500 whitespace-nowrap ml-4">{item.date}</span>
                </div>
                <div className="flex gap-4 mt-1">
                  <button className="text-[10px] text-[#00ff00] hover:underline">PDF SUMMARY</button>
                  <button className="text-[10px] text-[#00ff00] hover:underline">DATA SET</button>
                  <button className="text-[10px] text-[#00ff00] hover:underline">WEB VIEW</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Macro Dashboard */}
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#222] mb-3 pb-1">GLOBAL MACRO INDICATORS</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-400">World GDP Growth ({gdpData?.date || '2023'})</span>
              <span className="text-[#00ff00] font-bold">{gdpData?.value?.toFixed(2) || '2.60'}%</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-400">Eurozone CPI</span>
              <span className="text-[#ff0000] font-bold">2.8%</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-400">China PMI</span>
              <span className="text-[#ff0000] font-bold">49.1</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-400">Gold (USD/oz)</span>
              <span className="text-[#00ff00] font-bold">2,145.20</span>
            </div>
          </div>
          {gdpData && (
            <div className="mt-2 text-[10px] text-gray-600 italic">
              * GDP data live from World Bank API
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
