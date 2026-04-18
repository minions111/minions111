"use client";

import React from 'react';

export const WorldInterestRateProbabilities = () => {
  const meetings = [
    { date: "May 01 26", hikeProb: "1.2%", cutProb: "0.0%", pauseProb: "98.8%", impliedRate: "5.33" },
    { date: "Jun 12 26", hikeProb: "0.0%", cutProb: "15.4%", pauseProb: "84.6%", impliedRate: "5.21" },
    { date: "Jul 31 26", hikeProb: "0.0%", cutProb: "42.1%", pauseProb: "57.9%", impliedRate: "5.08" },
    { date: "Sep 18 26", hikeProb: "0.0%", cutProb: "68.5%", pauseProb: "31.5%", impliedRate: "4.82" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>WIRP - WORLD INTEREST RATE PROBABILITIES</span>
        <span>INSTRUMENT: FED FUNDS FUTURES</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Meeting Date</th>
            <th className="text-right">Hike Prob</th>
            <th className="text-right">Cut Prob</th>
            <th className="text-right">Pause Prob</th>
            <th className="text-right">Implied Rate</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {meetings.map((m, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 text-blue-400 font-bold">{m.date}</td>
              <td className="text-right text-red-500">{m.hikeProb}</td>
              <td className="text-right text-[#00ff00]">{m.cutProb}</td>
              <td className="text-right text-white font-bold">{m.pauseProb}</td>
              <td className="text-right text-[#ffb900] font-bold tabular-nums">{m.impliedRate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 bg-blue-950/10 border border-blue-900/30 p-4 rounded text-blue-400 text-[10px]">
        <div className="font-bold mb-2 uppercase">WIRP Note:</div>
        Market pricing for September remains heavily skewed towards a first 25bps cut. Economic resilience in Q1 has reduced the probability of an early summer pivot from 45% to 15%.
      </div>
    </div>
  );
};
