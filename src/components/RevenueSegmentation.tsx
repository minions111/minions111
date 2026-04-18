"use client";

import React from 'react';

interface REVProps {
  ticker: string;
}

export const RevenueSegmentation = ({ ticker }: REVProps) => {
  const products = [
    { name: "Hardware (iPhone/Mac)", rev: "58.2B", pct: "52%", color: "bg-blue-600" },
    { name: "Services (iCloud/TV+)", rev: "28.5B", pct: "26%", color: "bg-purple-600" },
    { name: "Wearables", rev: "12.4B", pct: "11%", color: "bg-orange-600" },
    { name: "Other", rev: "11.4B", pct: "11%", color: "bg-gray-600" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - REV (Revenue Segmentation)</span>
        <span>PRODUCT MIX</span>
      </div>

      <div className="space-y-6 flex-1">
        {products.map((p, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-white font-bold">{p.name}</span>
              <span className="text-gray-500">{p.rev} ({p.pct})</span>
            </div>
            <div className="w-full bg-[#222] h-3 rounded-sm overflow-hidden">
              <div className={`h-full ${p.color}`} style={{ width: p.pct }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[#111] p-4 border border-[#222]">
        <div className="text-[#ffb900] font-bold mb-2 uppercase text-[9px]">Margin Mix Note</div>
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Services segment continues to expand as a percentage of total revenue mix. This structural shift is driving corporate gross margin towards 46%, supported by recurring ecosystem revenues.
        </p>
      </div>
    </div>
  );
};
