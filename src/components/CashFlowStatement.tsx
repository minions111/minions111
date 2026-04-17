"use client";

import React from 'react';

interface CASHProps {
  ticker: string;
}

export const CashFlowStatement = ({ ticker }: CASHProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - CASH (Cash Flow Statement)</span>
        <span>PERIOD: ANNUAL (USD M)</span>
      </div>

      <table className="w-full text-right">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-1 text-left">Line Item</th>
            <th>2025</th>
            <th>2024</th>
            <th>2023</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          <tr className="bg-[#111] font-bold border-b border-[#222]">
            <td className="py-2 text-left text-[#ffb900] uppercase">Cash from Operations</td>
            <td>110,543</td>
            <td>110,543</td>
            <td>108,727</td>
          </tr>
          <tr className="border-b border-[#111]">
            <td className="py-1.5 text-left text-gray-400 pl-4">Net Income</td>
            <td>96,995</td>
            <td>96,995</td>
            <td>99,803</td>
          </tr>
          <tr className="border-b border-[#111]">
            <td className="py-1.5 text-left text-gray-400 pl-4">Depreciation & Amort</td>
            <td>11,522</td>
            <td>11,522</td>
            <td>11,046</td>
          </tr>
          <tr className="bg-[#111] font-bold border-b border-[#222]">
            <td className="py-2 text-left text-[#ffb900] uppercase">Cash from Investing</td>
            <td>(2,450)</td>
            <td>(2,450)</td>
            <td>(3,705)</td>
          </tr>
          <tr className="border-b border-[#111]">
            <td className="py-1.5 text-left text-gray-400 pl-4">Capital Expenditures</td>
            <td>(10,959)</td>
            <td>(10,959)</td>
            <td>(10,708)</td>
          </tr>
          <tr className="bg-[#111] font-bold border-b border-[#222]">
            <td className="py-2 text-left text-[#ffb900] uppercase">Cash from Financing</td>
            <td>(108,488)</td>
            <td>(108,488)</td>
            <td>(108,488)</td>
          </tr>
          <tr className="border-b border-[#111]">
            <td className="py-1.5 text-left text-gray-400 pl-4">Dividends Paid</td>
            <td>(15,025)</td>
            <td>(15,025)</td>
            <td>(15,025)</td>
          </tr>
          <tr className="bg-[#111] font-bold border-b border-[#222] text-[#00ff00]">
            <td className="py-2 text-left uppercase">Free Cash Flow</td>
            <td>99,584</td>
            <td>99,584</td>
            <td>98,019</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
