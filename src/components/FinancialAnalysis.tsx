"use client";

import React from 'react';

interface FAProps {
  ticker: string;
}

export const FinancialAnalysis = ({ ticker }: FAProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between">
        <span>{ticker} US Equity - FA (Financial Analysis)</span>
        <span>Data in USD</span>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">Income Statement</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b border-[#222]">
                <th className="py-1">Line Item</th>
                <th className="text-right">2025 (E)</th>
                <th className="text-right">2024 (A)</th>
                <th className="text-right">2023 (A)</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr className="border-b border-[#111] hover:bg-[#111]">
                <td className="py-1">Total Revenue</td>
                <td className="text-right">412.5B</td>
                <td className="text-right">383.2B</td>
                <td className="text-right">394.3B</td>
              </tr>
              <tr className="border-b border-[#111] hover:bg-[#111]">
                <td className="py-1">Gross Profit</td>
                <td className="text-right">185.6B</td>
                <td className="text-right">172.4B</td>
                <td className="text-right">178.1B</td>
              </tr>
              <tr className="border-b border-[#111] hover:bg-[#111]">
                <td className="py-1">Operating Income</td>
                <td className="text-right">124.2B</td>
                <td className="text-right">114.3B</td>
                <td className="text-right">119.4B</td>
              </tr>
              <tr className="border-b border-[#111] hover:bg-[#111] font-bold">
                <td className="py-1">Net Income</td>
                <td className="text-right text-[#00ff00]">105.8B</td>
                <td className="text-right text-[#00ff00]">96.9B</td>
                <td className="text-right text-[#00ff00]">99.8B</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">Key Ratios</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <div className="flex justify-between border-b border-[#111] py-1">
                <span className="text-gray-400">P/E Ratio</span>
                <span className="text-white">28.4x</span>
              </div>
              <div className="flex justify-between border-b border-[#111] py-1">
                <span className="text-gray-400">Debt/Equity</span>
                <span className="text-white">1.2x</span>
              </div>
              <div className="flex justify-between border-b border-[#111] py-1">
                <span className="text-gray-400">Current Ratio</span>
                <span className="text-white">1.1x</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between border-b border-[#111] py-1">
                <span className="text-gray-400">Return on Assets (ROA)</span>
                <span className="text-white">28.4%</span>
              </div>
              <div className="flex justify-between border-b border-[#111] py-1">
                <span className="text-gray-400">Return on Equity (ROE)</span>
                <span className="text-white">154.2%</span>
              </div>
              <div className="flex justify-between border-b border-[#111] py-1">
                <span className="text-gray-400">Free Cash Flow Yield</span>
                <span className="text-white">3.8%</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
