"use client";

import React from 'react';

export const BondValuation = () => {
  const metrics = [
    { name: "Fair Value Price", val: "96.45", status: "Premium" },
    { name: "Modified Duration", val: "7.42", status: "High" },
    { name: "Convexity", val: "0.85", status: "Normal" },
    { name: "Yield to Maturity", val: "4.82%", status: "Attractive" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>BVAL - BLOOMBERG BOND VALUATION</span>
        <span>SYMBOL: AAPL 3.35 27</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {metrics.map((m, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-3 text-center">
            <div className="text-gray-500 text-[8px] uppercase mb-1">{m.name}</div>
            <div className="text-white text-xl font-bold">{m.val}</div>
            <div className="text-[#00ff00] text-[8px] uppercase mt-1">{m.status}</div>
          </div>
        ))}
      </div>

      <section className="flex-1">
        <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Risk Sensitivity (DV01)</h2>
        <div className="space-y-4">
          <div className="flex justify-between border-b border-[#111] py-2">
            <span className="text-gray-400">Price impact of +100bps move:</span>
            <span className="text-red-500 font-bold">-7.42%</span>
          </div>
          <div className="flex justify-between border-b border-[#111] py-2">
            <span className="text-gray-400">Yield impact of +1pt price move:</span>
            <span className="text-[#00ff00] font-bold">-14.2 bps</span>
          </div>
        </div>
      </section>
    </div>
  );
};
