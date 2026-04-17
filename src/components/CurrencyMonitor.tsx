"use client";

import React from 'react';

export const CurrencyMonitor = () => {
  const majors = [
    { pair: "EUR/USD", last: "1.0645", change: "-0.0028", pct: "-0.26%", color: "red" },
    { pair: "USD/JPY", last: "154.55", change: "+0.12", pct: "+0.08%", color: "green" },
    { pair: "GBP/USD", last: "1.2435", change: "-0.0012", pct: "-0.10%", color: "red" },
    { pair: "USD/CHF", last: "0.9125", change: "+0.0045", pct: "+0.49%", color: "green" },
    { pair: "AUD/USD", last: "0.6412", change: "-0.0055", pct: "-0.85%", color: "red" },
    { pair: "USD/CAD", last: "1.3785", change: "+0.0015", pct: "+0.11%", color: "green" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>WFX - WORLD CURRENCY MONITOR</span>
        <span>NY 18:46:05</span>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">Major Crosses</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b border-[#222]">
                <th className="py-1">Pair</th>
                <th className="text-right">Price</th>
                <th className="text-right">Change</th>
                <th className="text-right">% Chg</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {majors.map((m, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                  <td className="py-2 text-blue-400 font-bold">{m.pair}</td>
                  <td className="text-right font-bold">{m.last}</td>
                  <td className={`text-right ${m.color === 'green' ? 'text-[#00ff00]' : 'text-[#ff0000]'}`}>
                    {m.change}
                  </td>
                  <td className={`text-right ${m.color === 'green' ? 'text-[#00ff00]' : 'text-[#ff0000]'}`}>
                    {m.pct}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">FX News Highlights</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-[#ffb900] pl-3 py-1 bg-[#111]">
              <div className="text-[#00ff00] text-[9px] mb-1">18:40 BN</div>
              <div className="text-white font-bold leading-tight uppercase">Dollar Index (DXY) Hits 5-Month High as Fed Pivot Hopes Fade</div>
            </div>
            <div className="border-l-2 border-gray-600 pl-3 py-1">
              <div className="text-[#00ff00] text-[9px] mb-1">18:15 REU</div>
              <div className="text-white font-bold leading-tight uppercase">Yen Weakness Continues; BOJ Intervention Watch at 155 Level</div>
            </div>
            <div className="border-l-2 border-gray-600 pl-3 py-1">
              <div className="text-[#00ff00] text-[9px] mb-1">17:50 BBG</div>
              <div className="text-white font-bold leading-tight uppercase">Euro Slides as ECB Signaling Points to June Rate Cut</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
