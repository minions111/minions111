"use client";

import React, { useState } from 'react';
import { Search, Copy, Info, Check } from 'lucide-react';

const FIELDS = [
  { mnemonic: "PX_LAST", name: "Last Price", category: "Pricing", desc: "The last price at which the security traded." },
  { mnemonic: "PX_BID", name: "Bid Price", category: "Pricing", desc: "The highest price a buyer is willing to pay." },
  { mnemonic: "PX_ASK", name: "Ask Price", category: "Pricing", desc: "The lowest price a seller is willing to accept." },
  { mnemonic: "DVD_YLD_IND", name: "Dividend Yield", category: "Income", desc: "Indicated annual dividend yield." },
  { mnemonic: "PE_RATIO", name: "P/E Ratio", category: "Valuation", desc: "Price to Earnings ratio." },
  { mnemonic: "MARKET_CAP", name: "Market Cap", category: "Summary", desc: "Total market value of shares outstanding." },
  { mnemonic: "TOT_REV_LAST_YR", name: "Total Revenue", category: "Fundamental", desc: "Total revenue for the last fiscal year." },
  { mnemonic: "CUR_MKT_CAP", name: "Current Market Cap", category: "Summary", desc: "Live market capitalization." },
  { mnemonic: "PX_VOLUME", name: "Volume", category: "Volume", desc: "Total shares traded during the session." },
  { mnemonic: "CHG_PCT_1D", name: "1D % Change", category: "Returns", desc: "Percentage change from previous close." },
  { mnemonic: "WACC", name: "WACC", category: "Analytics", desc: "Weighted Average Cost of Capital." },
  { mnemonic: "ESG_DISCLOSURE_SCORE", name: "ESG Score", category: "ESG", desc: "Overall ESG disclosure score." },
  { mnemonic: "SHORT_INT", name: "Short Interest", category: "Technical", desc: "Total number of shares sold short." },
  { mnemonic: "EQY_BETA", name: "Beta", category: "Risk", desc: "Measures security volatility relative to market." },
  { mnemonic: "NET_INCOME", name: "Net Income", category: "Fundamental", desc: "Net income after all expenses." },
];

export const DataFieldFinder = () => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = FIELDS.filter(f =>
    f.mnemonic.toLowerCase().includes(query.toLowerCase()) ||
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.category.toLowerCase().includes(query.toLowerCase())
  );

  const copyToClipboard = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopied(txt);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-6 overflow-hidden">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-6 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>FLDS - DATA FIELD FINDER</span>
        <span>TOTAL FIELDS: 45,200+</span>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search by mnemonic, name, or description (e.g. Price, Dividend, ESG)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-[#111] border border-[#444] text-white p-3 pl-10 outline-none focus:border-[#ffb900] placeholder:text-gray-600"
        />
        <Search size={16} className="absolute left-3 top-3.5 text-gray-500" />
      </div>

      <div className="flex-1 overflow-auto border border-[#222]">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-[#0a0a0a] text-gray-500 text-[9px] uppercase border-b border-[#333]">
            <tr>
              <th className="p-3 font-normal">Mnemonic</th>
              <th className="p-3 font-normal">Name</th>
              <th className="p-3 font-normal">Category</th>
              <th className="p-3 font-normal">Description</th>
              <th className="p-3 font-normal w-12 text-center">Copy</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((f, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-blue-900/10 group transition-colors">
                <td className="p-3 text-white font-bold">{f.mnemonic}</td>
                <td className="p-3 text-[#ffb900]">{f.name}</td>
                <td className="p-3 text-gray-400">
                  <span className="px-1.5 py-0.5 border border-[#333] text-[9px] uppercase">
                    {f.category}
                  </span>
                </td>
                <td className="p-3 text-gray-500 max-w-xs truncate">{f.desc}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => copyToClipboard(f.mnemonic)}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {copied === f.mnemonic ? <Check size={14} className="text-[#00ff00]" /> : <Copy size={14} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-[#111] p-4 border border-[#333]">
        <div className="flex items-start gap-3">
          <Info size={16} className="text-blue-500 mt-1 shrink-0" />
          <div className="space-y-1">
            <p className="text-white uppercase font-bold text-[10px]">Developer Usage</p>
            <p className="text-gray-500 leading-relaxed text-[10px]">
              Use these mnemonics in the <span className="text-[#ffb900]">WAPI</span> or <span className="text-[#ffb900]">XL</span> Bloomberg Excel Add-in
              to pull real-time or historical data. Example: <code className="bg-black px-1 text-blue-400">=BDP("AAPL US Equity", "PX_LAST")</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
