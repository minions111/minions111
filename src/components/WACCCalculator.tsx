"use client";

import React from 'react';

interface WACCProps {
  ticker: string;
}

export const WACCCalculator = ({ ticker }: WACCProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - WACC (Cost of Capital)</span>
        <span>NY 20:34:11</span>
      </div>

      <div className="flex-1 space-y-8">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-3 uppercase text-[10px]">Weighted Average Cost of Capital</h2>
          <div className="bg-[#111] p-6 border border-[#222] text-center">
            <div className="text-gray-500 text-[11px] uppercase mb-2">Calculated WACC</div>
            <div className="text-white text-5xl font-bold">8.42%</div>
            <div className="mt-4 text-[10px] text-gray-500">Industry Median: 9.15%</div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-8">
          <section>
            <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Cost of Equity</h2>
            <table className="w-full">
              <tbody className="text-white text-[10px]">
                <tr className="border-b border-[#111]">
                  <td className="py-1.5 text-gray-500">Risk-Free Rate</td>
                  <td className="text-right">4.62%</td>
                </tr>
                <tr className="border-b border-[#111]">
                  <td className="py-1.5 text-gray-500">Beta (5Y Monthly)</td>
                  <td className="text-right">1.28</td>
                </tr>
                <tr className="border-b border-[#111]">
                  <td className="py-1.5 text-gray-500">Equity Risk Premium</td>
                  <td className="text-right">5.50%</td>
                </tr>
                <tr className="border-b border-[#111] font-bold">
                  <td className="py-1.5 text-[#ffb900]">CAPM Cost of Equity</td>
                  <td className="text-right text-[#ffb900]">11.66%</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Cost of Debt</h2>
            <table className="w-full">
              <tbody className="text-white text-[10px]">
                <tr className="border-b border-[#111]">
                  <td className="py-1.5 text-gray-500">Pre-tax Cost of Debt</td>
                  <td className="text-right">5.25%</td>
                </tr>
                <tr className="border-b border-[#111]">
                  <td className="py-1.5 text-gray-500">Marginal Tax Rate</td>
                  <td className="text-right">21.0%</td>
                </tr>
                <tr className="border-b border-[#111] font-bold">
                  <td className="py-1.5 text-[#ffb900]">After-tax Cost of Debt</td>
                  <td className="text-right text-[#ffb900]">4.15%</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Capital Structure</h2>
          <div className="flex h-6 w-full rounded-sm overflow-hidden text-[9px] font-bold">
            <div className="bg-blue-600 flex items-center justify-center text-white" style={{ width: '85%' }}>EQUITY (85%)</div>
            <div className="bg-gray-600 flex items-center justify-center text-white" style={{ width: '15%' }}>DEBT (15%)</div>
          </div>
        </section>
      </div>
    </div>
  );
};
