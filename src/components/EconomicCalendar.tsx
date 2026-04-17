"use client";

import React from 'react';

const MOCK_EVENTS = [
  { time: "08:30", country: "US", event: "CPI MoM", forecast: "0.3%", actual: "0.4%", impact: "High" },
  { time: "08:30", country: "US", event: "Real Average Weekly Earnings", forecast: "--", actual: "0.1%", impact: "Med" },
  { time: "10:00", country: "US", event: "U. of Mich. Sentiment", forecast: "79.0", actual: "79.6", impact: "High" },
  { time: "13:00", country: "US", event: "Baker Hughes Total Rig Count", forecast: "--", actual: "621", impact: "Low" },
];

export const EconomicCalendar = () => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs">
      <div className="bg-[#1a1a1a] p-2 border-b border-[#333] flex justify-between items-center">
        <span className="text-[#ffb900] font-bold text-base">ECO - ECONOMIC CALENDAR</span>
        <span className="text-gray-400">TODAY, 17 APR 2026</span>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#111] text-gray-500 sticky top-0">
            <tr>
              <th className="p-2 border-b border-[#333]">TIME</th>
              <th className="p-2 border-b border-[#333]">CUR</th>
              <th className="p-2 border-b border-[#333]">EVENT</th>
              <th className="p-2 border-b border-[#333] text-right">FORECAST</th>
              <th className="p-2 border-b border-[#333] text-right">ACTUAL</th>
              <th className="p-2 border-b border-[#333]">IMPACT</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_EVENTS.map((e, i) => (
              <tr key={i} className="border-b border-[#222] hover:bg-[#111]">
                <td className="p-2 text-white">{e.time}</td>
                <td className="p-2 text-white">{e.country}</td>
                <td className="p-2 text-[#ffb900]">{e.event}</td>
                <td className="p-2 text-right text-gray-400">{e.forecast}</td>
                <td className="p-2 text-right text-[#00ff00] font-bold">{e.actual}</td>
                <td className="p-2">
                  <span className={
                    e.impact === 'High' ? 'text-[#ff0000]' :
                    e.impact === 'Med' ? 'text-[#ffb900]' : 'text-gray-500'
                  }>● {e.impact}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
