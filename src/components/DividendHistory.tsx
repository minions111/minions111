"use client";

import React from 'react';

interface DVDProps {
  ticker: string;
}

export const DividendHistory = ({ ticker }: DVDProps) => {
  const dividends = [
    { exDate: "05/09/2026", payDate: "05/15/2026", amt: "0.25", type: "Regular", freq: "Quarter" },
    { exDate: "02/08/2026", payDate: "02/14/2026", amt: "0.24", type: "Regular", freq: "Quarter" },
    { exDate: "11/07/2025", payDate: "11/13/2025", amt: "0.24", type: "Regular", freq: "Quarter" },
    { exDate: "08/08/2025", payDate: "08/14/2025", amt: "0.24", type: "Regular", freq: "Quarter" },
    { exDate: "05/09/2025", payDate: "05/15/2025", amt: "0.23", type: "Regular", freq: "Quarter" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - DVD (Dividend History)</span>
        <span>YIELD: 0.54%</span>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-[#111] border border-[#222] p-3">
          <div className="text-gray-400 text-[9px] uppercase">Div Ind Yield</div>
          <div className="text-white font-bold">0.54%</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-3">
          <div className="text-gray-400 text-[9px] uppercase">Annual Dividend</div>
          <div className="text-white font-bold">1.00 USD</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-3">
          <div className="text-gray-400 text-[9px] uppercase">Payout Ratio</div>
          <div className="text-white font-bold">14.8%</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-3">
          <div className="text-gray-400 text-[9px] uppercase">5Y Growth Rate</div>
          <div className="text-white font-bold">+8.2%</div>
        </div>
      </div>

      <section>
        <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">Dividend Payments</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b border-[#222] text-[10px]">
              <th className="py-1">Ex-Dividend Date</th>
              <th>Pay Date</th>
              <th className="text-right">Amount</th>
              <th>Type</th>
              <th>Freq</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {dividends.map((d, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                <td className="py-2">{d.exDate}</td>
                <td>{d.payDate}</td>
                <td className="text-right font-bold">{d.amt}</td>
                <td>{d.type}</td>
                <td>{d.freq}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
