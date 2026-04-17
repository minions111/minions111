"use client";

import React from 'react';

interface PEERProps {
  ticker: string;
}

export const PeerAnalysis = ({ ticker }: PEERProps) => {
  const peers = [
    { name: "APPLE INC", ticker: "AAPL", mktCap: "2.8T", pe: "28.4x", yield: "0.5%", revG: "+8.2%" },
    { name: "MICROSOFT CORP", ticker: "MSFT", mktCap: "3.1T", pe: "34.2x", yield: "0.8%", revG: "+15.4%" },
    { name: "ALPHABET INC-A", ticker: "GOOGL", mktCap: "1.8T", pe: "22.5x", yield: "0.0%", revG: "+12.1%" },
    { name: "AMAZON.COM INC", ticker: "AMZN", mktCap: "1.9T", pe: "45.1x", yield: "0.0%", revG: "+11.8%" },
    { name: "META PLATFORMS", ticker: "META", mktCap: "1.2T", pe: "24.8x", yield: "0.4%", revG: "+25.1%" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - PEER (Relative Valuation)</span>
        <span>SECTOR: TECHNOLOGY</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[10px]">
            <th className="py-1">Company</th>
            <th className="text-right">Mkt Cap</th>
            <th className="text-right">P/E Ratio</th>
            <th className="text-right">Div Yield</th>
            <th className="text-right">Rev Growth</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {peers.map((p, i) => (
            <tr key={i} className={`border-b border-[#111] hover:bg-[#111] ${p.ticker === ticker ? 'bg-blue-900/20' : ''}`}>
              <td className="py-2">
                <span className="text-blue-400 font-bold">{p.ticker}</span>
                <span className="ml-2 text-[10px] text-gray-500">{p.name}</span>
              </td>
              <td className="text-right">{p.mktCap}</td>
              <td className="text-right font-bold">{p.pe}</td>
              <td className="text-right text-gray-400">{p.yield}</td>
              <td className="text-right text-[#00ff00]">{p.revG}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-[#111] p-3 border border-[#222]">
          <div className="text-[#ffb900] font-bold mb-2 uppercase">Valuation Summary</div>
          <div className="space-y-1 text-[10px]">
            <div className="flex justify-between">
              <span className="text-gray-500">Peer Median P/E:</span>
              <span className="text-white">26.5x</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Premium / Discount:</span>
              <span className="text-[#00ff00]">+7.2%</span>
            </div>
          </div>
        </div>
        <div className="bg-[#111] p-3 border border-[#222]">
          <div className="text-[#ffb900] font-bold mb-2 uppercase">Sector Outlook</div>
          <div className="text-[10px] text-gray-300 leading-tight">
            Technology sector continues to trade at a premium to the broader market, driven by AI hardware demand and software margins.
          </div>
        </div>
      </div>
    </div>
  );
};
