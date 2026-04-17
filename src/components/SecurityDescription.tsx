"use client";

import React from 'react';

interface DESProps {
  ticker?: string;
}

export const SecurityDescription = ({ ticker = "AAPL" }: DESProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4">
      <div className="border-b border-[#333] pb-2 mb-4">
        <h1 className="text-[#ffb900] text-2xl font-bold">{ticker} US Equity</h1>
        <p className="text-gray-400">Security Description - Apple Inc.</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <section>
            <h2 className="text-[#ffb900] font-bold border-b border-[#222] mb-2 uppercase">Company Profile</h2>
            <p className="text-white leading-relaxed">
              Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.
              The company also offers a variety of services, including Apple Care, cloud services, and payment services.
            </p>
          </section>

          <section>
            <h2 className="text-[#ffb900] font-bold border-b border-[#222] mb-2 uppercase">Key Statistics</h2>
            <div className="grid grid-cols-2 gap-y-1">
              <span className="text-gray-500">Market Cap:</span> <span className="text-white text-right">2.84T</span>
              <span className="text-gray-500">P/E Ratio:</span> <span className="text-white text-right">28.42</span>
              <span className="text-gray-500">Div Yield:</span> <span className="text-white text-right">0.52%</span>
              <span className="text-gray-500">Beta (5Y):</span> <span className="text-white text-right">1.28</span>
              <span className="text-gray-500">EPS (TTM):</span> <span className="text-white text-right">6.42</span>
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <section>
            <h2 className="text-[#ffb900] font-bold border-b border-[#222] mb-2 uppercase">Financials (USD)</h2>
            <table className="w-full">
              <thead>
                <tr className="text-gray-500">
                  <th className="text-left font-normal">Metric</th>
                  <th className="text-right font-normal">2025</th>
                  <th className="text-right font-normal">2024</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr className="border-b border-[#111]">
                  <td>Revenue</td>
                  <td className="text-right">383.2B</td>
                  <td className="text-right">394.3B</td>
                </tr>
                <tr className="border-b border-[#111]">
                  <td>Net Income</td>
                  <td className="text-right">96.9B</td>
                  <td className="text-right">99.8B</td>
                </tr>
                <tr className="border-b border-[#111]">
                  <td>ROE %</td>
                  <td className="text-right">154.2</td>
                  <td className="text-right">175.4</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-[#ffb900] font-bold border-b border-[#222] mb-2 uppercase">Management</h2>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-white">Timothy D. Cook</span>
                <span className="text-gray-500">CEO</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Luca Maestri</span>
                <span className="text-gray-500">CFO</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Jeff Williams</span>
                <span className="text-gray-500">COO</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
