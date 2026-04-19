"use client";

import React from 'react';
import { History, Calendar, AlertTriangle } from 'lucide-react';

export const HistoricalEvents = () => {
  const events = [
    { date: "MAR 10, 2023", title: "SVB COLLAPSE", impact: "MACRO", desc: "Regional banking crisis triggers flight to quality in Treasuries." },
    { date: "OCT 28, 2021", title: "FACEBOOK REBRANDS TO META", impact: "SECTOR", desc: "Pivot to Metaverse triggers massive tech investment cycle." },
    { date: "MAR 12, 2020", title: "COVID-19 LOCKDOWNS", impact: "CRITICAL", desc: "Global markets freeze; Fed intervenes with $1.5T liquidity." },
    { date: "SEP 15, 2008", title: "LEHMAN BROTHERS BANKRUPTCY", impact: "SYSTEMIC", desc: "Height of Global Financial Crisis; G7 coordinated response." },
    { date: "MAR 10, 2000", title: "DOT-COM PEAK", impact: "SECTOR", desc: "NASDAQ touches record 5,048 before 78% correction." },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>HEV - HISTORICAL MARKET EVENTS</span>
        <span>DATABASE: ARCHIVE_LIVE</span>
      </div>

      <div className="space-y-4">
        {events.map((e, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-4 hover:border-[#ffb900] cursor-pointer group">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-[#ffb900]" />
                <span className="text-white font-bold">{e.date}</span>
              </div>
              <span className={`px-2 py-0.5 font-bold text-[8px] border ${
                e.impact === 'CRITICAL' || e.impact === 'SYSTEMIC' ? 'border-red-500 text-red-500' : 'border-blue-500 text-blue-500'
              }`}>
                {e.impact}
              </span>
            </div>
            <h2 className="text-white font-bold text-sm uppercase mb-1 group-hover:text-[#ffb900]">{e.title}</h2>
            <p className="text-gray-500 text-[10px] leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 border-t border-[#333] flex items-center gap-2 text-gray-600 text-[9px] uppercase">
         <AlertTriangle size={12} /> Data provided for contextual backtesting analysis.
      </div>
    </div>
  );
};
