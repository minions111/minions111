"use client";

import React from 'react';

interface TXProps {
  ticker: string;
}

export const TranscriptViewer = ({ ticker }: TXProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - TX (Earnings Transcript)</span>
        <span>Q1 2026 EARNINGS CALL</span>
      </div>

      <div className="flex-1 space-y-6">
        <div className="bg-[#111] p-3 border-l-4 border-l-[#ffb900]">
          <div className="text-[#ffb900] font-bold uppercase text-[10px] mb-1">Speaker: Timothy Cook (CEO)</div>
          <p className="text-white leading-relaxed italic">
            "Our performance this quarter was driven by strong demand for our latest hardware lineup and record-breaking services revenue. We continue to see resilience in consumer spending across North America and Europe, while monitoring macro shifts in Asia..."
          </p>
        </div>

        <div className="bg-[#111] p-3 border-l-4 border-l-blue-500">
          <div className="text-blue-400 font-bold uppercase text-[10px] mb-1">Speaker: Luca Maestri (CFO)</div>
          <p className="text-white leading-relaxed italic">
            "Gross margin for the quarter was 45.2%, at the high end of our guidance range. We returned nearly $25 billion to shareholders through dividends and share repurchases, maintaining our commitment to a net cash neutral position over time."
          </p>
        </div>

        <div className="bg-[#111] p-3 border-l-4 border-l-gray-600">
          <div className="text-gray-400 font-bold uppercase text-[10px] mb-1">Analyst Question (Goldman Sachs)</div>
          <p className="text-white leading-relaxed italic">
            "Can you provide more detail on the AI integration timeline for your services suite, and how that might impact OpEx in the coming fiscal year?"
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-[#333] flex justify-between items-center text-[10px]">
        <div className="flex gap-4">
          <button className="text-[#00ff00] hover:underline">SENTIMENT ANALYSIS</button>
          <button className="text-[#00ff00] hover:underline">AUDIO REPLAY</button>
        </div>
        <span className="text-gray-500">TRANSCRIPT SECURE HUB</span>
      </div>
    </div>
  );
};
