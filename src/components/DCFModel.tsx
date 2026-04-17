"use client";

import React from 'react';

interface DCFProps {
  ticker: string;
}

export const DCFModel = ({ ticker }: DCFProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - DCF (Discounted Cash Flow Model)</span>
        <span>CURRENCY: USD</span>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-6">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Projection Assumptions</h2>
          <table className="w-full">
            <tbody className="text-white">
              <tr className="border-b border-[#111]">
                <td className="py-1.5 text-gray-500">Revenue Growth (Y1-Y5)</td>
                <td className="text-right font-bold">12.5%</td>
              </tr>
              <tr className="border-b border-[#111]">
                <td className="py-1.5 text-gray-500">EBIT Margin (%)</td>
                <td className="text-right font-bold">28.4%</td>
              </tr>
              <tr className="border-b border-[#111]">
                <td className="py-1.5 text-gray-500">Tax Rate (%)</td>
                <td className="text-right font-bold">21.0%</td>
              </tr>
              <tr className="border-b border-[#111]">
                <td className="py-1.5 text-gray-500">Terminal Growth Rate</td>
                <td className="text-right font-bold">2.5%</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Model Output</h2>
          <div className="bg-[#111] p-4 border border-[#222] text-center">
            <div className="text-gray-500 text-[10px] uppercase mb-1">Implied Equity Value</div>
            <div className="text-white text-3xl font-bold">2,854.2B</div>
            <div className="mt-4 pt-4 border-t border-[#333] flex justify-between items-center px-4">
              <div className="text-left">
                <div className="text-gray-500 uppercase text-[9px]">Intrinsic Value</div>
                <div className="text-[#00ff00] text-lg font-bold">215.40</div>
              </div>
              <div className="text-right">
                <div className="text-gray-500 uppercase text-[9px]">Upside/Downside</div>
                <div className="text-[#00ff00] text-lg font-bold">+15.8%</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Free Cash Flow Projections</h2>
        <table className="w-full text-right">
          <thead>
            <tr className="text-gray-500 border-b border-[#222] text-[10px]">
              <th className="py-1 text-left">Line Item</th>
              <th>2026E</th>
              <th>2027E</th>
              <th>2028E</th>
              <th>2029E</th>
              <th>2030E</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr className="border-b border-[#111]">
              <td className="py-1.5 text-left text-gray-400 font-bold">Free Cash Flow</td>
              <td>98.5B</td>
              <td>110.4B</td>
              <td>124.2B</td>
              <td>139.5B</td>
              <td>156.8B</td>
            </tr>
            <tr className="border-b border-[#111]">
              <td className="py-1.5 text-left text-gray-400">Discount Factor</td>
              <td>0.92</td>
              <td>0.85</td>
              <td>0.79</td>
              <td>0.73</td>
              <td>0.67</td>
            </tr>
            <tr className="border-b border-[#111]">
              <td className="py-1.5 text-left text-[#ffb900] font-bold">PV of FCF</td>
              <td className="text-[#ffb900]">90.6B</td>
              <td className="text-[#ffb900]">93.8B</td>
              <td className="text-[#ffb900]">98.1B</td>
              <td className="text-[#ffb900]">101.8B</td>
              <td className="text-[#ffb900]">105.1B</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
