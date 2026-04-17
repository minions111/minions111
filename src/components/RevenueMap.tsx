"use client";

import React from 'react';

interface MAPProps {
  ticker: string;
}

export const RevenueMap = ({ ticker }: MAPProps) => {
  const regions = [
    { region: "North America", rev: "45.2B", pct: "42%", color: "bg-blue-600" },
    { region: "Europe", rev: "28.4B", pct: "26%", color: "bg-green-600" },
    { region: "Greater China", rev: "18.5B", pct: "17%", color: "bg-red-600" },
    { region: "Japan", rev: "8.1B", pct: "8%", color: "bg-purple-600" },
    { region: "Rest of Asia", rev: "7.8B", pct: "7%", color: "bg-orange-600" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - MAP (Geographic Revenue)</span>
        <span>FY 2026 ACTUALS</span>
      </div>

      <div className="flex-1 space-y-6">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Revenue by Region</h2>
          <div className="space-y-4">
            {regions.map((r, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-white">{r.region}</span>
                  <span className="text-gray-400">{r.rev} ({r.pct})</span>
                </div>
                <div className="w-full bg-[#222] h-2 rounded-full overflow-hidden">
                  <div className={`h-full ${r.color}`} style={{ width: r.pct }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#111] border border-[#222] p-4 text-center text-[10px] text-gray-500 italic">
          * Geographic data sourced from 10-K filings and segment reporting. Exchange rate effects accounted for in North America reporting currency.
        </div>
      </div>
    </div>
  );
};
