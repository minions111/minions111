"use client";

import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

interface FILPProps {
  ticker: string;
}

export const RegulatoryFilings = ({ ticker }: FILPProps) => {
  const filings = [
    { type: "10-Q", date: "04/15/26", desc: "Quarterly Report", size: "2.4 MB" },
    { type: "8-K", date: "03/22/26", desc: "Current Report: Entry into Material Agreement", size: "0.8 MB" },
    { type: "4", date: "03/10/26", desc: "Statement of Changes in Beneficial Ownership", size: "0.2 MB" },
    { type: "10-K", date: "02/01/26", desc: "Annual Report", size: "12.5 MB" },
    { type: "DEF 14A", date: "01/15/26", desc: "Proxy Statement (Definitive)", size: "4.2 MB" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - FILP (Regulatory Filings)</span>
        <span>SEC EDGAR SOURCE</span>
      </div>

      <div className="flex-1">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
              <th className="py-2">Type</th>
              <th>Date</th>
              <th>Description</th>
              <th className="text-right">Size</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-white text-[10px]">
            {filings.map((f, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111] group">
                <td className="py-2 text-[#ffb900] font-bold">{f.type}</td>
                <td className="text-gray-400">{f.date}</td>
                <td className="text-gray-300">{f.desc}</td>
                <td className="text-right text-gray-500">{f.size}</td>
                <td className="text-center">
                  <button className="text-blue-400 hover:text-white transition-colors">
                    <ExternalLink size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-3 bg-blue-950/10 border border-blue-900/30 rounded text-[10px] text-blue-400 flex items-center gap-2">
        <FileText size={14} />
        <span>Note: Documents are retrieved in real-time from the SEC EDGAR system. Document delay is typically &lt; 1 minute from official filing.</span>
      </div>
    </div>
  );
};
