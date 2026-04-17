"use client";

import React from 'react';

interface CNProps {
  ticker: string;
}

export const CompanyNews = ({ ticker }: CNProps) => {
  const news = [
    { time: "15:45", source: "BN", headline: `${ticker} Rallies as Analysts Boost Price Targets Following Earnings Beat` },
    { time: "14:20", source: "REU", headline: `Institutional Investors Increase Stake in ${ticker} During Q1` },
    { time: "11:05", source: "BBG", headline: `${ticker} CEO Discusses AI Integration and Future Growth Strategy` },
    { time: "09:30", source: "BN", headline: `MARKET OPEN: ${ticker} Starts Higher Amid Sector Optimism` },
    { time: "07:15", source: "PRN", headline: `${ticker} Announces Strategic Partnership for European Expansion` },
    { time: "Yesterday", source: "BN", headline: `${ticker} Reports Q2 Earnings: Rev $12.4B vs Est $11.8B` },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - CN (Company News)</span>
        <span>ALL SOURCES</span>
      </div>

      <div className="space-y-4">
        {news.map((n, i) => (
          <div key={i} className="group cursor-pointer border-b border-[#111] pb-2">
            <div className="flex gap-4">
              <span className="text-[#00ff00] font-bold whitespace-nowrap">{n.time}</span>
              <span className="text-gray-500 font-bold whitespace-nowrap">[{n.source}]</span>
              <span className="text-white group-hover:text-[#ffb900] transition-colors leading-tight uppercase font-bold">
                {n.headline}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
