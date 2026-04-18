"use client";

import React from 'react';

export const CorrelationClustering = () => {
  const clusters = [
    { name: "Mag 7 Tech", members: ["AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "TSLA"], corr: "0.88" },
    { name: "Energy/Infra", members: ["XOM", "CVX", "NEE", "DUK"], corr: "0.72" },
    { name: "Money Centers", members: ["JPM", "BAC", "GS", "MS"], corr: "0.91" },
    { name: "Defensives", members: ["PG", "KO", "PEP", "JNJ"], corr: "0.45" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-6 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CLUS - ASSET CORRELATION CLUSTERING</span>
        <span>PERIOD: 180D</span>
      </div>

      <div className="space-y-6">
        {clusters.map((c, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-4 hover:border-blue-900 transition-colors cursor-pointer group">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-white font-bold uppercase text-base group-hover:text-[#ffb900]">{c.name}</h2>
              <div className="text-right">
                <div className="text-gray-500 text-[8px] uppercase">Cluster Alpha</div>
                <div className="text-[#00ff00] font-bold text-lg">{c.corr}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {c.members.map(m => (
                <span key={m} className="bg-black border border-[#333] px-2 py-0.5 text-[#ffb900] font-bold text-[10px]">{m}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
