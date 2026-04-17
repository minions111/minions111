"use client";

import React from 'react';

interface ANRProps {
  ticker: string;
}

export const AnalystRecommendations = ({ ticker }: ANRProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between">
        <span>{ticker} US Equity - ANR (Analyst Recommendations)</span>
        <span>As of 2026-04-17</span>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-[#111] border border-[#222] p-4 text-center flex flex-col justify-center">
          <div className="text-gray-400 mb-1 uppercase">Consensus Rating</div>
          <div className="text-[#00ff00] text-3xl font-bold">4.2</div>
          <div className="text-white text-[10px] mt-1 uppercase">Strong Buy / Outperform</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-4 text-center">
          <div className="text-gray-400 mb-1 uppercase">12M Target Price</div>
          <div className="text-white text-3xl font-bold">215.50</div>
          <div className="text-[#00ff00] text-[10px] mt-1">+15.9% Potential</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-4 text-center">
          <div className="text-gray-400 mb-1 uppercase">Analyst Count</div>
          <div className="text-white text-3xl font-bold">52</div>
          <div className="text-gray-500 text-[10px] mt-1">42 BUYS | 8 HOLDS | 2 SELLS</div>
        </div>
      </div>

      <section>
        <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">Recent Ratings</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b border-[#222]">
              <th className="py-1">Firm</th>
              <th>Analyst</th>
              <th>Rating</th>
              <th className="text-right">Target</th>
              <th className="text-right">Date</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 text-blue-400">Goldman Sachs</td>
              <td>T. Delaney</td>
              <td><span className="bg-green-900/40 text-green-500 px-1">BUY</span></td>
              <td className="text-right">220.00</td>
              <td className="text-right">04/15/26</td>
            </tr>
            <tr className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 text-blue-400">Morgan Stanley</td>
              <td>E. Wood</td>
              <td><span className="bg-green-900/40 text-green-500 px-1">OVERWEIGHT</span></td>
              <td className="text-right">215.00</td>
              <td className="text-right">04/12/26</td>
            </tr>
            <tr className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 text-blue-400">JPMorgan</td>
              <td>S. Chatterjee</td>
              <td><span className="bg-green-900/40 text-green-500 px-1">OVERWEIGHT</span></td>
              <td className="text-right">225.00</td>
              <td className="text-right">04/10/26</td>
            </tr>
            <tr className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 text-blue-400">BofA Securities</td>
              <td>W. Mohan</td>
              <td><span className="bg-gray-800 text-gray-400 px-1">NEUTRAL</span></td>
              <td className="text-right">190.00</td>
              <td className="text-right">04/08/26</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
