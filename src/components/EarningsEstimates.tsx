"use client";

import React from 'react';

interface EEProps {
  ticker: string;
}

export const EarningsEstimates = ({ ticker }: EEProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - EE (Earnings Estimates)</span>
        <span>CURRENCY: USD</span>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-6">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">EPS Estimates</h2>
          <table className="w-full">
            <tbody className="text-white">
              <tr className="border-b border-[#111]">
                <td className="py-2 text-gray-400">Current Quarter (Q3 26)</td>
                <td className="text-right font-bold">1.54</td>
              </tr>
              <tr className="border-b border-[#111]">
                <td className="py-2 text-gray-400">Next Quarter (Q4 26)</td>
                <td className="text-right font-bold">1.68</td>
              </tr>
              <tr className="border-b border-[#111]">
                <td className="py-2 text-gray-400">Current Year (FY 2026)</td>
                <td className="text-right font-bold">6.50</td>
              </tr>
              <tr className="border-b border-[#111]">
                <td className="py-2 text-gray-400">Next Year (FY 2027)</td>
                <td className="text-right font-bold">7.25</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">Growth Estimates</h2>
          <table className="w-full">
            <tbody className="text-white">
              <tr className="border-b border-[#111]">
                <td className="py-2 text-gray-400">Current Qtr Growth</td>
                <td className="text-right text-[#00ff00]">+12.4%</td>
              </tr>
              <tr className="border-b border-[#111]">
                <td className="py-2 text-gray-400">Next Qtr Growth</td>
                <td className="text-right text-[#00ff00]">+9.1%</td>
              </tr>
              <tr className="border-b border-[#111]">
                <td className="py-2 text-gray-400">Current Year Growth</td>
                <td className="text-right text-[#00ff00]">+15.2%</td>
              </tr>
              <tr className="border-b border-[#111]">
                <td className="py-2 text-gray-400">Next 5 Years (p.a.)</td>
                <td className="text-right text-[#00ff00]">+10.5%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <section>
        <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">Earnings Surprise History</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b border-[#222]">
              <th className="py-1">Quarter</th>
              <th className="text-right">Estimate</th>
              <th className="text-right">Actual</th>
              <th className="text-right">Surprise</th>
              <th className="text-right">% Surprise</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr className="border-b border-[#111]">
              <td className="py-2">Q2 2026</td>
              <td className="text-right">1.42</td>
              <td className="text-right font-bold">1.48</td>
              <td className="text-right text-[#00ff00]">+0.06</td>
              <td className="text-right text-[#00ff00]">+4.23%</td>
            </tr>
            <tr className="border-b border-[#111]">
              <td className="py-2">Q1 2026</td>
              <td className="text-right">1.35</td>
              <td className="text-right font-bold">1.38</td>
              <td className="text-right text-[#00ff00]">+0.03</td>
              <td className="text-right text-[#00ff00]">+2.22%</td>
            </tr>
            <tr className="border-b border-[#111]">
              <td className="py-2">Q4 2025</td>
              <td className="text-right">1.60</td>
              <td className="text-right font-bold">1.58</td>
              <td className="text-right text-[#ff0000]">-0.02</td>
              <td className="text-right text-[#ff0000]">-1.25%</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
