"use client";

import React from 'react';

interface BNKProps {
  ticker: string;
}

export const BankMetrics = ({ ticker }: BNKProps) => {
  const capital = [
    { name: "CET1 Ratio (%)", val: "12.4%", target: "11.0%", status: "Well-Cap" },
    { name: "Net Interest Margin (NIM)", val: "2.85%", target: "2.75%", status: "Normal" },
    { name: "Non-Performing Loans", val: "0.42%", target: "0.50%", status: "Low" },
    { name: "Efficiency Ratio", val: "54.2%", target: "60.0%", status: "Optimal" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - BNK (Banking & Capital Metrics)</span>
        <span>NY 23:10:44</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {capital.map((c, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-3 text-center">
            <div className="text-gray-500 text-[8px] uppercase mb-1">{c.name}</div>
            <div className="text-white text-xl font-bold">{c.val}</div>
            <div className="text-[#00ff00] text-[8px] uppercase mt-1">{c.status}</div>
          </div>
        ))}
      </div>

      <section>
        <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Loan Mix & Diversification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-white">Commercial & Industrial</span>
                <span className="text-gray-500">42%</span>
              </div>
              <div className="w-full bg-[#222] h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '42%' }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-white">Residential Mortgage</span>
                <span className="text-gray-500">28%</span>
              </div>
              <div className="w-full bg-[#222] h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600" style={{ width: '28%' }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-white">Credit Card/Auto</span>
                <span className="text-gray-500">30%</span>
              </div>
              <div className="w-full bg-[#222] h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-orange-600" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
          <div className="bg-blue-900/10 border border-blue-900/30 p-4 rounded text-blue-400 text-[10px]">
            <p className="leading-relaxed">
              Provision for credit losses remains conservative at $1.2B. High-interest environment is supporting NIM expansion, but monitoring remains focused on commercial real estate (CRE) portfolio duration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
