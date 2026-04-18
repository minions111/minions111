"use client";

import React, { useState } from 'react';
import { Search, Book, Bookmark } from 'lucide-react';

const ALL_COMMANDS = [
  { cmd: "MARKET", desc: "Main market monitor and charting hub" },
  { cmd: "FA", desc: "Financial analysis and summary statements" },
  { cmd: "ANR", desc: "Analyst recommendations and price targets" },
  { cmd: "DES", desc: "Security description and basic data" },
  { cmd: "BTMM", desc: "Treasury and money market monitor" },
  { cmd: "WFX", desc: "World currency monitor" },
  { cmd: "BI", desc: "Bloomberg Intelligence research portal" },
  { cmd: "WEI", desc: "World equity indices monitor" },
  { cmd: "EE", desc: "Earnings estimates and history" },
  { cmd: "HDS", desc: "Holdings and ownership data" },
  { cmd: "DVD", desc: "Dividend history and projections" },
  { cmd: "OMON", desc: "Option monitor and chains" },
  { cmd: "TECH", desc: "Technical indicators and studies" },
  { cmd: "HP", desc: "Historical prices and returns" },
  { cmd: "PEER", desc: "Peer group analysis and valuation" },
  { cmd: "ESG", desc: "Environmental, Social, and Governance scores" },
  { cmd: "YAS", desc: "Yield and spread analysis" },
  { cmd: "MAP", desc: "Revenue map and supply chain" },
  { cmd: "IECO", desc: "Global inflation monitor" },
  { cmd: "CBR", desc: "Central bank rates tracker" },
  { cmd: "COMM", desc: "Commodity market monitor" },
  { cmd: "DCF", desc: "Discounted Cash Flow valuation model" },
  { cmd: "WACC", desc: "Weighted Average Cost of Capital" },
  { cmd: "SENT", desc: "Social media sentiment analysis" },
  { cmd: "GPT", desc: "BloombergGPT AI market assistant" },
  { cmd: "RISK", desc: "Portfolio risk and VaR analysis" },
  { cmd: "YC", desc: "Treasury yield curve plotting" },
  { cmd: "FICM", desc: "Fixed income credit monitor" },
  { cmd: "OVME", desc: "Option valuation and Greeks" },
  { cmd: "GOVP", desc: "Government bond pricing" },
  { cmd: "G", desc: "Graphics and charting builder" },
  { cmd: "L2", desc: "Level II market depth / order book" },
  { cmd: "ALGO", desc: "Systematic strategy execution engine" },
  { cmd: "CDS", desc: "Credit default swap monitor" },
  { cmd: "ETF", desc: "Exchange Traded Fund monitor" },
  { cmd: "BLOT", desc: "Trade blotter and history" },
  { cmd: "MA", desc: "Mergers and acquisitions portal" },
  { cmd: "SI", desc: "Short interest and financing rates" },
  { cmd: "RV", desc: "Historical relative valuation" },
  { cmd: "WIRP", desc: "World Interest Rate Probabilities" },
  { cmd: "OWN", desc: "Detailed ownership summary" },
  { cmd: "REV", desc: "Revenue segmentation analysis" },
  { cmd: "GDP", desc: "Global GDP growth rankings" },
  { cmd: "SCRN", desc: "Equity and bond screening tool" },
  { cmd: "MCS", desc: "Monte Carlo probability simulation" },
  { cmd: "LIQ", desc: "Liquidity and volume analysis" },
  { cmd: "TMT", desc: "Technology & Media industry metrics" },
  { cmd: "BNK", desc: "Banking sector performance metrics" },
  { cmd: "ENRG", desc: "Energy and utility sector analytics" },
  { cmd: "FACT", desc: "Factor analysis and risk attribution" },
  { cmd: "SURF", desc: "Volatility surface and skew" },
  { cmd: "AN", desc: "Analyst News and ratings changes" },
  { cmd: "MN", desc: "Macro News and economic policy" },
];

export const HelpSystem = () => {
  const [query, setQuery] = useState('');

  const filtered = ALL_COMMANDS.filter(c =>
    c.cmd.toLowerCase().includes(query.toLowerCase()) ||
    c.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-6 overflow-y-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-[#ffb900] p-3 text-black">
          <Book size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white uppercase">Bloomberg Terminal Help</h1>
          <p className="text-gray-500 uppercase text-[10px]">Command Guide & User Manual (170+ Modules)</p>
        </div>
      </div>

      <div className="max-w-4xl">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for commands, functions, or topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#111] border border-[#444] text-white p-3 pl-10 outline-none focus:border-[#ffb900]"
          />
          <Search size={16} className="absolute left-3 top-3.5 text-gray-500" />
        </div>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase">Institutional Commands ({filtered.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {filtered.map((item, i) => (
              <div key={i} className="flex flex-col group cursor-pointer border-b border-[#111] pb-2">
                <span className="text-white font-bold group-hover:text-[#ffb900] transition-colors">{item.cmd}</span>
                <span className="text-gray-500 leading-tight text-[10px] uppercase">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase">Persistence & Workflow</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <span className="text-white font-bold mr-2">Auto-Save:</span>
              Your terminal layout and selected securities are automatically saved to <span className="text-blue-400">localStorage</span>.
            </p>
            <p>
              <span className="text-white font-bold mr-2">Multi-Task:</span>
              Type <span className="text-[#ffb900]">T1-T4</span> to manage independent analytical environments.
            </p>
            <p>
              <span className="text-white font-bold mr-2">Real-Time:</span>
              Data is streamed via <span className="text-[#00ff00]">WebSocket</span> (Finnhub) and News Streaming Service.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
