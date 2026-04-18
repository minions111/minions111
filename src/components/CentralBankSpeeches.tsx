"use client";

import React from 'react';

export const CentralBankSpeeches = () => {
  const speeches = [
    { date: "04/17/26", time: "11:30", speaker: "Williams (NY Fed)", topic: "Economic Outlook", tone: "Hawkish" },
    { date: "04/16/26", time: "14:00", speaker: "Lagarde (ECB)", topic: "Monetary Policy", tone: "Neutral" },
    { date: "04/15/26", time: "09:15", speaker: "Powell (Fed)", topic: "Global Macro Risks", tone: "Hawkish" },
    { date: "04/12/26", time: "10:30", speaker: "Ueda (BoJ)", topic: "Yield Curve Control", tone: "Dovish" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>SPEE - CENTRAL BANK SPEECHES & EVENTS</span>
        <span>ALL BANKS</span>
      </div>

      <div className="space-y-4">
        {speeches.map((s, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-3 hover:border-blue-900 cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-blue-400 font-bold">{s.speaker}</span>
                <span className="ml-2 text-gray-500 text-[9px]">{s.date} {s.time}</span>
              </div>
              <span className={`text-[8px] px-2 rounded-sm border ${
                s.tone === 'Hawkish' ? 'border-red-900 text-red-500' :
                s.tone === 'Dovish' ? 'border-green-900 text-green-500' : 'border-gray-700 text-gray-500'
              }`}>{s.tone}</span>
            </div>
            <div className="text-white font-bold uppercase text-[10px] group-hover:text-[#ffb900]">{s.topic}</div>
            <div className="mt-2 text-gray-600 text-[9px]">Summary: Speaker highlighted persistent inflation in services sector. Market pricing for June cut reduced to 15%.</div>
          </div>
        ))}
      </div>
    </div>
  );
};
