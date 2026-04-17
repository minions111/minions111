"use client";

import React from 'react';
import { BarChart3, TrendingUp, ShieldAlert } from 'lucide-react';

export const BloombergIntelligence = () => {
  const industries = [
    { name: "Tech / Software", outlook: "Positive", analyst: "Anurag Rana" },
    { name: "Global Financials", outlook: "Neutral", analyst: "Alison Williams" },
    { name: "Energy & Utilities", outlook: "Cautious", analyst: "Talibi Adebiyi" },
    { name: "Consumer Staples", outlook: "Negative", analyst: "Diana Rosero" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>BI - BLOOMBERG INTELLIGENCE (Research)</span>
        <span>Premium Access</span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-3 uppercase flex items-center gap-2 pb-1">
            <BarChart3 size={14} /> Sector Dashboards
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="bg-[#111] border border-[#222] p-3 hover:border-[#ffb900] cursor-pointer">
                <div className="text-white font-bold mb-1">{ind.name}</div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className={ind.outlook === 'Positive' ? 'text-[#00ff00]' : ind.outlook === 'Negative' ? 'text-[#ff0000]' : 'text-gray-400'}>
                    {ind.outlook}
                  </span>
                  <span className="text-gray-500">{ind.analyst}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-8">
          <section>
            <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-3 uppercase flex items-center gap-2 pb-1">
              <TrendingUp size={14} /> Top Industry Analysis
            </h2>
            <div className="space-y-4">
              <div className="group cursor-pointer">
                <div className="text-white font-bold group-hover:text-[#ffb900] uppercase">Software: Cloud AI spend to outpace legacy SaaS</div>
                <p className="text-gray-500 mt-1 leading-relaxed">Hyperscalers are prioritizing Gen-AI infrastructure over application seats in 2026. Microsoft and Amazon lead the pack in margin protection.</p>
              </div>
              <div className="group cursor-pointer">
                <div className="text-white font-bold group-hover:text-[#ffb900] uppercase">Banking: Higher for longer boosts NIM targets</div>
                <p className="text-gray-500 mt-1 leading-relaxed">Regional banks are finally seeing deposit beta stabilization as Fed keeps rates above 5% through Q4.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-3 uppercase flex items-center gap-2 pb-1">
              <ShieldAlert size={14} /> Risk Monitor
            </h2>
            <div className="bg-[#1a0f0f] border border-[#301010] p-4">
              <div className="text-[#ff0000] font-bold mb-2 uppercase flex items-center gap-2">
                Critical Alert: APAC Logistics
              </div>
              <p className="text-gray-300 leading-relaxed">
                South China Sea shipping congestion has reached 14-month highs.
                Supply chain risk scores for Global Automotive and Consumer Electronics have been upgraded to "Elevated".
              </p>
              <button className="mt-3 text-[10px] bg-[#301010] text-[#ff0000] px-2 py-1 border border-[#601010] hover:bg-[#501010]">
                VIEW FULL REPORT &gt;
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
