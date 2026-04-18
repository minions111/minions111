"use client";

import React from 'react';

export const MergersAcquisitions = () => {
  const deals = [
    { date: "04/12/26", target: "Nvidia Corp", acquirer: "TBD", value: "2.4T", status: "Rumor" },
    { date: "03/28/26", target: "Substack Inc", acquirer: "X Corp", value: "1.2B", status: "Pending" },
    { date: "03/15/26", target: "Discovery Ltd", acquirer: "Warner Bros", value: "42.5B", status: "Completed" },
    { date: "02/10/26", target: "Arm Holdings", acquirer: "SoftBank", value: "65.0B", status: "Effective" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>MA - MERGERS & ACQUISITIONS MONITOR</span>
        <span>GLOBAL DEALS</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Announced</th>
            <th>Target</th>
            <th>Acquirer</th>
            <th className="text-right">Value</th>
            <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {deals.map((d, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 text-gray-500">{d.date}</td>
              <td className="text-[#ffb900] font-bold">{d.target}</td>
              <td className="text-blue-400">{d.acquirer}</td>
              <td className="text-right font-bold tabular-nums">{d.value}</td>
              <td className="text-center">
                <span className={`px-2 py-0.5 rounded-sm text-[8px] border ${
                  d.status === 'Rumor' ? 'border-purple-900 text-purple-400' :
                  d.status === 'Completed' ? 'border-green-900 text-green-400' : 'border-blue-900 text-blue-400'
                }`}>{d.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
