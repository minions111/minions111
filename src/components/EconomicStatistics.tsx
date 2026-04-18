"use client";

import React from 'react';

export const EconomicStatistics = () => {
  const regions = [
    { country: "United States", gdp: "+2.5%", cpi: "3.2%", jobless: "3.9%", trade: "-68.9B" },
    { country: "Eurozone", gdp: "+0.1%", cpi: "2.4%", jobless: "6.5%", trade: "+23.4B" },
    { country: "Japan", gdp: "+0.4%", cpi: "2.6%", jobless: "2.6%", trade: "-1.2B" },
    { country: "China", gdp: "+5.3%", cpi: "0.1%", jobless: "5.2%", trade: "+58.4B" },
    { country: "UK", gdp: "-0.2%", cpi: "3.4%", jobless: "4.2%", trade: "-3.4B" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>ECST - WORLD ECONOMIC STATISTICS</span>
        <span>NY 21:15:33</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[10px]">
            <th className="py-2">Economy</th>
            <th className="text-right">GDP Growth</th>
            <th className="text-right">CPI (YoY)</th>
            <th className="text-right">Jobless Rate</th>
            <th className="text-right">Trade Bal</th>
          </tr>
        </thead>
        <tbody className="text-white text-[11px]">
          {regions.map((r, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{r.country}</td>
              <td className={`text-right ${r.gdp.startsWith('+') ? 'text-[#00ff00]' : 'text-red-500'}`}>{r.gdp}</td>
              <td className="text-right">{r.cpi}</td>
              <td className="text-right text-gray-400">{r.jobless}</td>
              <td className={`text-right font-bold ${r.trade.startsWith('+') ? 'text-[#00ff00]' : 'text-red-500'}`}>{r.trade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 bg-blue-950/10 border border-blue-900/30 p-4 rounded text-gray-400 leading-relaxed text-[10px]">
        <p className="font-bold text-[#ffb900] mb-2 uppercase">Global Macro Note:</p>
        Growth divergence between US and Eurozone persists. Federal Reserve focus remains on labor market tightness (3.9% jobless), while ECB signals concern regarding disinflation speed. China GDP beat in Q1 driven by manufacturing export push.
      </div>
    </div>
  );
};
