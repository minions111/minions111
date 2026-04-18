"use client";

import React from 'react';

interface ENRGProps {
  ticker: string;
}

export const EnergyMetrics = ({ ticker }: ENRGProps) => {
  const reserves = [
    { name: "Total Proved Reserves (boe)", val: "15,240M", yoy: "+2.5%" },
    { name: "Daily Production (kboe/d)", val: "4,150", yoy: "+1.8%" },
    { name: "Lifting Costs ($/boe)", val: "$12.45", yoy: "-3.2%" },
    { name: "Reserve Life (Years)", val: "14.2", yoy: "+0.5Y" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - ENRG (Energy Operating Data)</span>
        <span>FY 2026 ACTUALS</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {reserves.map((r, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-3 text-center">
            <div className="text-gray-500 text-[8px] uppercase mb-1 leading-tight">{r.name}</div>
            <div className="text-white text-lg font-bold">{r.val}</div>
            <div className={`text-[8px] uppercase mt-1 ${r.yoy.startsWith('+') ? 'text-[#00ff00]' : 'text-red-500'}`}>{r.yoy}</div>
          </div>
        ))}
      </div>

      <section>
        <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Geographic Production Mix</h2>
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-white uppercase">Permian Basin (US)</span>
              <span className="text-gray-500">42%</span>
            </div>
            <div className="w-full bg-[#222] h-2 rounded-sm overflow-hidden">
              <div className="h-full bg-blue-600" style={{ width: '42%' }}></div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-white uppercase">Offshore Brazil</span>
              <span className="text-gray-500">28%</span>
            </div>
            <div className="w-full bg-[#222] h-2 rounded-sm overflow-hidden">
              <div className="h-full bg-green-600" style={{ width: '28%' }}></div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-white uppercase">West Africa</span>
              <span className="text-gray-500">18%</span>
            </div>
            <div className="w-full bg-[#222] h-2 rounded-sm overflow-hidden">
              <div className="h-full bg-orange-600" style={{ width: '18%' }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
