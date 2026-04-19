"use client";

import React from 'react';
import { Target, FileText, CheckCircle, Info } from 'lucide-react';

interface BICOProps {
  ticker: string;
}

export const CompanyPrimer = ({ ticker }: BICOProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - BICO (Bloomberg Intelligence Primer)</span>
        <span>LAST UPDATE: 12-MAR-2024</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <section>
             <h2 className="text-[#ffb900] font-bold border-b border-[#222] mb-3 uppercase text-[10px]">Investment Thesis</h2>
             <p className="text-gray-400 leading-relaxed text-[11px]">
               {ticker} is positioned to capitalize on the next phase of generative AI infrastructure expansion.
               We anticipate multi-year margin expansion as high-value software services begin to contribute
               disproportionately to the top line. Competitive moats remain intact despite rising regulatory pressure
               in the EU and China.
             </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-[#111] border border-[#222] p-4">
                <h3 className="text-white font-bold mb-2 uppercase text-[9px]">Strengths</h3>
                <ul className="space-y-2 text-gray-500">
                   <li className="flex items-start gap-2"><CheckCircle size={10} className="text-[#00ff00] mt-0.5" /> Dominant market share in core segments.</li>
                   <li className="flex items-start gap-2"><CheckCircle size={10} className="text-[#00ff00] mt-0.5" /> High free cash flow generation.</li>
                   <li className="flex items-start gap-2"><CheckCircle size={10} className="text-[#00ff00] mt-0.5" /> Strong R&D pipeline for AI/ML.</li>
                </ul>
             </div>
             <div className="bg-[#111] border border-[#222] p-4">
                <h3 className="text-white font-bold mb-2 uppercase text-[9px]">Risks</h3>
                <ul className="space-y-2 text-gray-500">
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1" /> Increasing antitrust scrutiny globally.</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1" /> Supply chain dependency on East Asia.</li>
                   <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1" /> High valuation vs historical norms.</li>
                </ul>
             </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-4">
           <div className="bg-blue-900/10 border border-blue-900/40 p-4">
              <h3 className="text-blue-400 font-bold mb-2 uppercase text-[9px]">BI Intelligence View</h3>
              <div className="text-2xl font-bold text-white mb-1">BULLISH</div>
              <div className="text-gray-500 text-[9px]">Confidence: HIGH</div>
           </div>
           <div className="bg-[#111] border border-[#222] p-4">
              <h3 className="text-gray-500 font-bold mb-2 uppercase text-[9px]">Price Target</h3>
              <div className="text-xl font-bold text-[#ffb900]">$210.00</div>
              <div className="text-[#00ff00] font-bold text-[9px]">+14.2% Upside</div>
           </div>
        </div>
      </div>
    </div>
  );
};
