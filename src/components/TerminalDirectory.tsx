"use client";

import React from 'react';
import { Search, Info, Grid } from 'lucide-react';

export const TerminalDirectory = () => {
  const sections = [
    {
      title: "EQUITY ANALYSIS",
      items: ["FA (Financial Analysis)", "DES (Description)", "ANR (Analyst Recs)", "EE (Estimates)", "HDS (Holdings)", "DVD (Dividends)", "MAP (Rev Map)", "ESG (ESG Score)"]
    },
    {
      title: "FIXED INCOME & MACRO",
      items: ["BTMM (Money Markets)", "YC (Yield Curve)", "FICM (Fixed Income)", "YAS (Yield/Spread)", "IECO (Inflation)", "CBR (Central Bank Rates)", "GDP (Global GDP)", "WIRP (Interest Rate Prob)"]
    },
    {
      title: "INTELLIGENCE & AI",
      items: ["GPT (BloombergGPT)", "BI (Intelligence)", "NEWS (News Search)", "TOP (Top Stories)", "AN (Analyst News)", "MN (Macro News)", "READ (Market Stories)"]
    },
    {
      title: "WORKSTATION & LIFESTYLE",
      items: ["HELP (User Manual)", "DIR (Directory)", "USER (Preferences)", "LOCK (Security)", "MSG (Messaging)", "DIN (Dining)", "POSH (Luxury)", "RICH (Billionaires)"]
    },
    {
      title: "SOVEREIGN & MACRO",
      items: ["CenB (CB Calendar)", "EVTS (Earnings Srch)", "SHTM (Wide Heatmap)", "FXIP (Curr Matrix)", "BCYC (Cycle)", "PEOP (People)", "BPS (Portfolio Svcs)", "JOIN (Onboarding)"]
    },
    {
      title: "ZENITH ANALYTICS",
      items: ["EQS (Equity Screen)", "CPG (Commodity Grid)", "ESGD (ESG Deep Dive)", "GCUR (Global Curves)", "BVAL (Bond Val)", "SURF (Volatility)", "MCS (Monte Carlo)", "FACT (Factors)", "SHIP (Vessel Track)"]
    },
    {
      title: "MASTERY & STRUCTURE",
      items: ["MATW (Maturity Wall)", "CAST (Cap Structure)", "FLOW (Capital Flows)", "EMAP (Economic Map)", "OA (Option Analytics)", "HEV (Hist Events)", "CMD (Cmd History)", "PROMPT (Terminal)"]
    }
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-6 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-8 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>DIR - BLOOMBERG TERMINAL DIRECTORY</span>
        <span>FUNCTIONS: 220+</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((sec, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-[#ffb900] font-bold border-b border-[#222] pb-1 uppercase text-[10px]">{sec.title}</h2>
            <div className="flex flex-col gap-2">
              {sec.items.map((item, j) => (
                <div key={j} className="text-white hover:text-[#ffb900] cursor-pointer transition-colors flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-[#ffb900] group-hover:bg-white" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#111] p-6 border border-[#333] text-center">
        <div className="text-gray-500 uppercase text-[9px] mb-2">Can't find a function?</div>
        <div className="text-white font-bold mb-4 uppercase">Search the Terminal manual or use &lt;HELP&gt; for live assistance.</div>
        <div className="flex justify-center gap-4">
          <div className="bg-black border border-[#ffb900] px-4 py-2 text-[#ffb900] font-bold cursor-pointer hover:bg-[#ffb900] hover:text-black">
            TERMINAL SEARCH
          </div>
          <div className="bg-black border border-[#444] px-4 py-2 text-white font-bold cursor-pointer hover:bg-white hover:text-black">
            OPEN USER GUIDE
          </div>
        </div>
      </div>
    </div>
  );
};
