"use client";

import React from 'react';

export const CentralBankAssets = () => {
  const assets = [
    { bank: "Federal Reserve", balance: "7.45T", yoy: "-8.5%", trend: "QT" },
    { bank: "ECB", balance: "6.82T", yoy: "-12.4%", trend: "QT" },
    { bank: "Bank of Japan", balance: "5.32T", yoy: "+2.1%", trend: "QE/YCC" },
    { bank: "PBOC", balance: "6.10T", yoy: "+4.5%", trend: "Easing" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CBAS - CENTRAL BANK ASSETS MONITOR</span>
        <span>NY 22:48:12</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Central Bank</th>
            <th className="text-right">Balance Sheet</th>
            <th className="text-right">YoY Change</th>
            <th className="text-center">Policy Stance</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {assets.map((a, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 font-bold text-blue-400">{a.bank}</td>
              <td className="text-right font-bold tabular-nums">{a.balance}</td>
              <td className={`text-right font-bold ${a.yoy.startsWith('-') ? 'text-[#00ff00]' : 'text-red-500'}`}>{a.yoy}</td>
              <td className="text-center text-gray-500 uppercase text-[8px]">{a.trend}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 bg-[#111] border border-[#222] p-4">
        <h2 className="text-[#ffb900] font-bold mb-2 uppercase text-[10px]">Liquidity Outlook</h2>
        <p className="text-gray-500 text-[10px] leading-relaxed">
          The G10 central bank balance sheet contraction continues at a pace of $120B/month. While Japan remains the outlier with modest expansion, the global "liquidity drain" is putting upward pressure on term premiums in the back end of the curve.
        </p>
      </div>
    </div>
  );
};
