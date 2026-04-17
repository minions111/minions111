"use client";

import React from 'react';

interface INSProps {
  ticker: string;
}

export const InsiderTransactions = ({ ticker }: INSProps) => {
  const txs = [
    { date: "04/12/26", insider: "Maestri, Luca", title: "CFO", action: "Sell", shares: "12,500", price: "185.12", value: "2.3M" },
    { date: "03/28/26", insider: "Cook, Timothy D", title: "CEO", action: "Sell (Rule 10b5-1)", shares: "250,000", price: "182.45", value: "45.6M" },
    { date: "02/15/26", insider: "Adams, Katherine L", title: "SVP", action: "Sell", shares: "8,200", price: "188.10", value: "1.5M" },
    { date: "01/30/26", insider: "Williams, Jeffrey E", title: "COO", action: "Option Exercise", shares: "45,000", price: "72.45", value: "3.3M" },
    { date: "12/12/25", insider: "Levinson, Arthur D", title: "Chairman", action: "Sell", shares: "5,000", price: "192.10", value: "1.0M" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - INS (Insider Transactions)</span>
        <span>SEC FORM 4 DATA</span>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-[#111] border border-[#222] p-3 text-center">
          <div className="text-gray-400 text-[9px] uppercase">Net Activity (3M)</div>
          <div className="text-red-500 text-xl font-bold">-48.2M USD</div>
          <div className="text-gray-500 text-[8px]">100% SELLING</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-3 text-center">
          <div className="text-gray-400 text-[9px] uppercase">Total Insider Shares</div>
          <div className="text-white text-xl font-bold">12.8M</div>
          <div className="text-gray-500 text-[8px]">0.08% OF SHARES OUT</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-3 text-center">
          <div className="text-gray-400 text-[9px] uppercase">Active Insiders</div>
          <div className="text-white text-xl font-bold">14</div>
          <div className="text-gray-500 text-[8px]">FILING IN LAST 12M</div>
        </div>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-1">Date</th>
            <th>Insider</th>
            <th>Action</th>
            <th className="text-right">Shares</th>
            <th className="text-right">Price</th>
            <th className="text-right">Value</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {txs.map((t, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 text-gray-500">{t.date}</td>
              <td>
                <div className="text-blue-400 font-bold">{t.insider}</div>
                <div className="text-[8px] text-gray-500">{t.title}</div>
              </td>
              <td className={t.action.includes('Sell') ? 'text-red-500' : 'text-[#00ff00]'}>{t.action}</td>
              <td className="text-right">{t.shares}</td>
              <td className="text-right">{t.price}</td>
              <td className="text-right font-bold">{t.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
