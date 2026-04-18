"use client";

import React from 'react';

export const MergerArbitrage = () => {
  const deals = [
    { target: "Activision Blizzard", acquirer: "Microsoft", offer: "95.00", current: "92.12", spread: "3.1%", status: "Pending" },
    { target: "iRobot Corp", acquirer: "Amazon", offer: "51.75", current: "48.50", spread: "6.7%", status: "Reg-Review" },
    { target: "Capri Holdings", acquirer: "Tapestry", offer: "57.00", current: "54.20", spread: "5.1%", status: "Pending" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>MARB - MERGER ARBITRAGE MONITOR</span>
        <span>ALL CASH DEALS</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Target</th>
            <th>Acquirer</th>
            <th className="text-right">Offer Price</th>
            <th className="text-right">Current</th>
            <th className="text-right">Spread (%)</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {deals.map((d, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 font-bold text-[#ffb900]">{d.target}</td>
              <td className="text-blue-400">{d.acquirer}</td>
              <td className="text-right font-bold">{d.offer}</td>
              <td className="text-right">{d.current}</td>
              <td className="text-right font-bold text-[#00ff00] tabular-nums">{d.spread}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
