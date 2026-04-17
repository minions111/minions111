"use client";

import React from 'react';

export const MoneyMarketMonitor = () => {
  const rates = [
    { country: "US", desc: "FED FUNDS EFFECTIVE", rate: "5.33", change: "0.00", date: "04/16" },
    { country: "US", desc: "3M LIBOR (OFFSHORE)", rate: "5.58", change: "+0.01", date: "04/17" },
    { country: "US", desc: "SOFR", rate: "5.31", change: "-0.01", date: "04/17" },
    { country: "EU", desc: "ESTR", rate: "3.91", change: "0.00", date: "04/17" },
    { country: "GB", desc: "SONIA", rate: "5.20", change: "0.00", date: "04/17" },
    { country: "JP", desc: "TONAR", rate: "0.01", change: "0.00", date: "04/17" },
  ];

  const yields = [
    { country: "US", ten: "2Y", yield: "4.92", change: "+0.02" },
    { country: "US", ten: "10Y", yield: "4.58", change: "+0.04" },
    { country: "DE", ten: "10Y", yield: "2.42", change: "+0.01" },
    { country: "JP", ten: "10Y", yield: "0.85", change: "-0.01" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>BTMM - TREASURY & MONEY MARKET MONITOR</span>
        <span>NY 18:45:12</span>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">Short Term Interest Rates</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b border-[#222]">
                <th className="py-1">Country</th>
                <th>Description</th>
                <th className="text-right">Rate %</th>
                <th className="text-right">Change</th>
                <th className="text-right">Date</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {rates.map((r, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                  <td className="py-1 text-blue-400">{r.country}</td>
                  <td>{r.desc}</td>
                  <td className="text-right text-[#00ff00] font-bold">{r.rate}</td>
                  <td className={`text-right ${r.change.startsWith('+') ? 'text-[#00ff00]' : r.change.startsWith('-') ? 'text-[#ff0000]' : 'text-gray-400'}`}>
                    {r.change}
                  </td>
                  <td className="text-right text-gray-500">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">Government Bond Yields</h2>
          <div className="grid grid-cols-2 gap-4">
            {yields.map((y, i) => (
              <div key={i} className="flex justify-between border-b border-[#111] py-2 hover:bg-[#111] px-2">
                <div className="flex gap-2">
                  <span className="text-blue-400 font-bold">{y.country}</span>
                  <span className="text-white">{y.ten} TREASURY</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#00ff00] font-bold">{y.yield}%</span>
                  <span className={y.change.startsWith('+') ? 'text-[#00ff00]' : 'text-[#ff0000]'}>{y.change}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
