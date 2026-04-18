"use client";

import React from 'react';

interface TMTProps {
  ticker: string;
}

export const TechMetrics = ({ ticker }: TMTProps) => {
  const metrics = [
    { name: "ARPU (Average Rev Per User)", val: "$12.45", yoy: "+8.2%", trend: "Up" },
    { name: "Subscriber Churn Rate", val: "1.12%", yoy: "-0.05%", trend: "Stable" },
    { name: "Cloud Revenue Growth", val: "34.5%", yoy: "+12.1%", trend: "Up" },
    { name: "R&D Intensity (% Rev)", val: "18.4%", yoy: "+2.4%", trend: "Up" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - TMT (Technology/Telecom Metrics)</span>
        <span>FY 2026 ACTUALS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Key Operating Data</h2>
          <div className="space-y-4">
            {metrics.map((m, i) => (
              <div key={i} className="flex justify-between border-b border-[#111] py-2">
                <div className="flex flex-col">
                  <span className="text-white font-bold">{m.name}</span>
                  <span className="text-gray-500 text-[8px] uppercase">{m.trend} TREND</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-lg tabular-nums">{m.val}</div>
                  <div className="text-[#00ff00] text-[9px] font-bold">{m.yoy} YoY</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#111] border border-[#222] p-4 flex flex-col justify-center text-center">
          <div className="text-gray-500 uppercase text-[9px] mb-2">Cloud Exposure Index</div>
          <div className="text-white text-4xl font-bold">8.4</div>
          <p className="text-gray-500 text-[10px] mt-4 leading-relaxed px-4">
            High software-as-a-service (SaaS) recurring revenue base provides significant margin stability through economic cycles. Cloud CAGR remains above 25% for the 3rd consecutive year.
          </p>
        </section>
      </div>
    </div>
  );
};
