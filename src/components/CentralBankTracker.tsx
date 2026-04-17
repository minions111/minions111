"use client";

import React from 'react';

export const CentralBankTracker = () => {
  const banks = [
    { bank: "Federal Reserve", rate: "5.25-5.50%", lastChange: "- (Pause)", nextMeet: "May 01" },
    { bank: "ECB", rate: "4.50%", lastChange: "- (Pause)", nextMeet: "Jun 06" },
    { bank: "Bank of England", rate: "5.25%", lastChange: "- (Pause)", nextMeet: "May 09" },
    { bank: "Bank of Japan", rate: "0.10%", lastChange: "+0.10 (Mar)", nextMeet: "Apr 26" },
    { bank: "Reserve Bank of Australia", rate: "4.35%", lastChange: "- (Pause)", nextMeet: "May 07" },
    { bank: "Bank of Canada", rate: "5.00%", lastChange: "- (Pause)", nextMeet: "Jun 05" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>CBR - CENTRAL BANK RATE TRACKER</span>
        <span>WORLD VIEW</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[10px]">
            <th className="py-1">Central Bank</th>
            <th className="text-right">Policy Rate</th>
            <th className="text-right">Last Action</th>
            <th className="text-right">Next Meeting</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {banks.map((b, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{b.bank}</td>
              <td className="text-right font-bold text-[#ffb900]">{b.rate}</td>
              <td className="text-right text-gray-400">{b.lastChange}</td>
              <td className="text-right font-bold">{b.nextMeet}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 bg-blue-950/20 border border-blue-900 p-4 rounded text-blue-400 text-[10px]">
        <div className="font-bold mb-1 uppercase">Market Implied Probabilities (FED):</div>
        <div className="flex justify-between">
          <span>Pause (May): 98.2%</span>
          <span>Cut (Jun): 15.4%</span>
          <span>Cut (Sep): 68.1%</span>
        </div>
      </div>
    </div>
  );
};
