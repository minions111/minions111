"use client";

import React from 'react';

export const BondSearch = () => {
  const bonds = [
    { issuer: "APPLE INC", coupon: "3.350", maturity: "02/09/27", price: "96.45", yield: "4.82", spread: "+42", rating: "Aa1" },
    { issuer: "MICROSOFT CORP", coupon: "2.400", maturity: "08/08/26", price: "95.12", yield: "4.95", spread: "+38", rating: "Aaa" },
    { issuer: "AMAZON.COM INC", coupon: "3.150", maturity: "08/22/27", price: "94.85", yield: "5.12", spread: "+65", rating: "A1" },
    { issuer: "ALPHABET INC", coupon: "0.450", maturity: "08/15/25", price: "93.20", yield: "5.45", spread: "+32", rating: "Aa2" },
    { issuer: "NVIDIA CORP", coupon: "2.850", maturity: "04/01/26", price: "97.40", yield: "5.02", spread: "+55", rating: "A1" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>SRCH - FIXED INCOME SEARCH</span>
        <span>SECTOR: US CORPORATE INVESTMENT GRADE</span>
      </div>

      <div className="mb-4 flex gap-4">
        <div className="flex-1 bg-black border border-[#444] px-3 py-1 text-gray-500 italic">
          Filter by Issuer, CUSIP, or Rating...
        </div>
        <button className="bg-blue-900 px-4 py-1 text-white font-bold uppercase text-[10px]">Search</button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-1">Issuer</th>
            <th>Coupon</th>
            <th>Maturity</th>
            <th className="text-right">Price</th>
            <th className="text-right">Yield</th>
            <th className="text-right">Spread</th>
            <th className="text-center">Rating</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {bonds.map((b, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 text-blue-400 font-bold">{b.issuer}</td>
              <td>{b.coupon}</td>
              <td className="text-gray-400">{b.maturity}</td>
              <td className="text-right font-bold">{b.price}</td>
              <td className="text-right text-[#00ff00]">{b.yield}</td>
              <td className="text-right text-gray-500">{b.spread}</td>
              <td className="text-center">
                <span className="bg-gray-800 px-1 border border-[#333] text-[9px]">{b.rating}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
