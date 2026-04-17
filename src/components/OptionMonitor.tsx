"use client";

import React from 'react';

interface OMONProps {
  ticker: string;
}

export const OptionMonitor = ({ ticker }: OMONProps) => {
  const options = [
    { strike: "180.00", callBid: "6.45", callAsk: "6.55", callVol: "1,240", putBid: "0.85", putAsk: "0.90", putVol: "4,200" },
    { strike: "182.50", callBid: "4.20", callAsk: "4.30", callVol: "2,100", putBid: "1.45", putAsk: "1.55", putVol: "3,100" },
    { strike: "185.00", callBid: "2.45", callAsk: "2.55", callVol: "5,400", putBid: "2.75", putAsk: "2.85", putVol: "2,400" },
    { strike: "187.50", callBid: "1.15", callAsk: "1.25", callVol: "3,200", putBid: "4.85", putAsk: "4.95", putVol: "1,100" },
    { strike: "190.00", callBid: "0.45", callAsk: "0.55", callVol: "1,100", putBid: "7.65", putAsk: "7.75", putVol: "450" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-[10px] p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - OMON (Option Monitor)</span>
        <span>EXP: 22 MAY 26 (35 DAYS)</span>
      </div>

      <div className="flex-1">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-[#111] text-gray-400 border-b border-[#333]">
              <th colSpan={3} className="py-1 border-r border-[#222]">CALLS</th>
              <th className="px-4">STRIKE</th>
              <th colSpan={3} className="border-l border-[#222]">PUTS</th>
            </tr>
            <tr className="text-gray-500 border-b border-[#222]">
              <th>BID</th>
              <th>ASK</th>
              <th className="border-r border-[#222]">VOL</th>
              <th className="text-[#ffb900]">PRICE</th>
              <th className="border-l border-[#222]">BID</th>
              <th>ASK</th>
              <th>VOL</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {options.map((opt, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                <td className="py-2 text-blue-400">{opt.callBid}</td>
                <td className="text-blue-400">{opt.callAsk}</td>
                <td className="text-gray-400 border-r border-[#222]">{opt.callVol}</td>
                <td className="font-bold bg-[#0a0a0a]">{opt.strike}</td>
                <td className="text-blue-400 border-l border-[#222]">{opt.putBid}</td>
                <td className="text-blue-400">{opt.putAsk}</td>
                <td className="text-gray-400">{opt.putVol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="bg-[#111] p-2 border border-[#222]">
          <span className="text-gray-500 uppercase">Implied Vol</span>
          <div className="text-white font-bold text-sm">24.5%</div>
        </div>
        <div className="bg-[#111] p-2 border border-[#222]">
          <span className="text-gray-500 uppercase">Put/Call Ratio</span>
          <div className="text-white font-bold text-sm">0.84</div>
        </div>
        <div className="bg-[#111] p-2 border border-[#222]">
          <span className="text-gray-500 uppercase">Total Volume</span>
          <div className="text-white font-bold text-sm">24.2K</div>
        </div>
      </div>
    </div>
  );
};
