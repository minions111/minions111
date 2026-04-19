"use client";

import React from 'react';
import { Search, Info, Grid } from 'lucide-react';

export const TerminalDirectory = () => {
  const sections = [
    {
      title: "EQUITY ANALYSIS",
      items: ["FA (Financial Analysis)", "DES (Description)", "ANR (Analyst Recs)", "EE (Estimates)", "HDS (Holdings)", "DVD (Dividends)", "MAP (Rev Map)", "ESG (ESG Score)", "ESGD (ESG Deep Dive)"]
    },
    {
      title: "FIXED INCOME & MACRO",
      items: ["BTMM (Money Markets)", "YC (Yield Curve)", "FICM (Fixed Income)", "YAS (Yield/Spread)", "IECO (Inflation)", "CBR (Central Bank Rates)", "GDP (Global GDP)", "WIRP (Interest Rate Prob)", "GCUR (Global Curves)"]
    },
    {
      title: "INTELLIGENCE & MEDIA",
      items: ["GPT (BloombergGPT)", "BI (Intelligence)", "NEWS (News Search)", "TOP (Top Stories)", "TV (Bloomberg TV)", "AN (Analyst News)", "MN (Macro News)", "READ (Market Stories)", "HEV (Hist Events)"]
    },
    {
      title: "DERIVATIVES & QUANT",
      items: ["OMON (Monitor)", "OVME (Option Val)", "OA (Analytics)", "SKEW (Vol Skew)", "SURF (IV Surface)", "VCA (Vol Analysis)", "CDSS (CDS Surface)", "MCS (Monte Carlo)", "FACT (Factors)"]
    },
    {
      title: "SOVEREIGN & FLOWS",
      items: ["CenB (CB Calendar)", "EVTS (Earnings Srch)", "SHTM (Wide Heatmap)", "FXIP (Curr Matrix)", "BCYC (Cycle)", "FLOW (Capital Flows)", "EMAP (Economic Map)", "SHIP (Vessel Track)", "WX (Weather)"]
    },
    {
      title: "VALUATION & CREDIT",
      items: ["DCF (DCF Model)", "WACC (WACC Calc)", "EV (Ent Value)", "RV (Relative Val)", "BVAL (Bond Val)", "MATW (Maturity Wall)", "CAST (Cap Structure)", "SCDS (Sovereign CDS)", "CRPR (Credit Ratings)"]
    },
    {
      title: "WORKSTATION & SYSTEM",
      items: ["HELP (Manual)", "DIR (Directory)", "JOIN (Onboarding)", "USER (Prefs)", "CONN (Connect API)", "LOCK (Security)", "MSG (Messenger)", "TICK (Tick Logger)", "CMD (Command History)", "DIAG (Diagnostics)"]
    },
    {
      title: "SCREENING & LIFESTYLE",
      items: ["EQS (Equity Screen)", "SCRN (Screener)", "CPG (Commodity Grid)", "COMM (Commodity Mon)", "PEOP (People Directory)", "DIN (Dining Guide)", "POSH (Luxury Index)", "RICH (Billionaires)"]
    },
    {
      title: "APEX ANALYTICS",
      items: ["OAS (Opt Adj Spread)", "VAR (Value at Risk)", "MODL (Model Builder)", "BICO (Company Primer)", "APPS (App Store)", "TIC (Tick Chart)", "SKEW (Volatility)", "SHTM (Wide Heatmap)"]
    },
    {
      title: "ELITE STRATEGIES",
      items: ["ECDR (Macro Impact)", "IDEA (Trade Ideas)", "13F (Filing Mon)", "GSENT (Social Map)", "CDSS (CDS Surface)", "WCAP (Mkt Cap)", "BPS (Portfolio)", "G (Graphics)"]
    },
    {
      title: "PROFESSIONAL TIER",
      items: ["EMSX (Execution)", "FLDS (Field Finder)", "WAPI (Developer API)", "MAP (Supply Chain)", "BBA (Remote Access)", "PORT (Advanced Port)"]
    }
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-6 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-8 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>DIR - BLOOMBERG TERMINAL DIRECTORY</span>
        <span>FUNCTIONS: 300+</span>
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
