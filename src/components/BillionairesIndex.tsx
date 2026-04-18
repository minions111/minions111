"use client";

import React from 'react';
import { TrendingDown, TrendingUp, User } from 'lucide-react';

export const BillionairesIndex = () => {
  const billionaires = [
    { rank: 1, name: "ELON MUSK", netWorth: "$210.4B", ytd: "+$35.2B", source: "TESLA/SPACEX" },
    { rank: 2, name: "JEFF BEZOS", netWorth: "$195.8B", ytd: "+$22.1B", source: "AMAZON" },
    { rank: 3, name: "BERNARD ARNAULT", netWorth: "$188.2B", ytd: "-$5.4B", source: "LVMH" },
    { rank: 4, name: "MARK ZUCKERBERG", netWorth: "$172.5B", ytd: "+$44.8B", source: "META" },
    { rank: 5, name: "BILL GATES", netWorth: "$148.1B", ytd: "+$6.7B", source: "MICROSOFT" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>RICH - BLOOMBERG BILLIONAIRES INDEX</span>
        <span>DAILY RANKING</span>
      </div>

      <div className="flex-1">
        <table className="w-full">
          <thead className="text-gray-500 uppercase text-[9px] border-b border-[#333]">
            <tr>
              <th className="p-2 text-left font-normal w-12">Rank</th>
              <th className="p-2 text-left font-normal">Name</th>
              <th className="p-2 text-right font-normal">Net Worth</th>
              <th className="p-2 text-right font-normal">YTD Change</th>
              <th className="p-2 text-left font-normal">Source</th>
            </tr>
          </thead>
          <tbody>
            {billionaires.map((b, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer group">
                <td className="p-2 text-[#ffb900] font-bold">{b.rank}</td>
                <td className="p-2 text-white font-bold uppercase">{b.name}</td>
                <td className="p-2 text-right text-white tabular-nums font-bold">{b.netWorth}</td>
                <td className={b.ytd.startsWith('+') ? "p-2 text-right text-[#00ff00] font-bold" : "p-2 text-right text-red-500 font-bold"}>
                  {b.ytd}
                </td>
                <td className="p-2 text-gray-400 uppercase text-[10px]">{b.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-[#111] border border-[#333]">
        <div className="text-gray-500 text-[9px] mb-2">INDEX SUMMARY</div>
        <div className="flex justify-between items-center">
          <div className="text-white">TOP 500 COMBINED NET WORTH</div>
          <div className="text-xl font-bold text-[#ffb900]">$14.2 TRILLION</div>
        </div>
      </div>
    </div>
  );
};
