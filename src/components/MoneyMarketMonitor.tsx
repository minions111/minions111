"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const MoneyMarketMonitor = () => {
  const rates = [
    { country: "US", indicator: "FED FUNDS TARGET", current: "5.50%", last: "5.50%", date: "03/20/24" },
    { country: "US", indicator: "UST 2Y YIELD", current: "4.62%", last: "4.64%", date: "LIVE" },
    { country: "EU", indicator: "ECB DEPOSIT RATE", current: "4.00%", last: "4.00%", date: "03/07/24" },
    { country: "UK", indicator: "BOE BASE RATE", current: "5.25%", last: "5.25%", date: "02/01/24" },
    { country: "JP", indicator: "BOJ TARGET RATE", current: "0.10%", last: "-0.10%", date: "03/19/24" },
  ];

  const sofrData = [
    { tenor: "ON", rate: "5.32%", vol: "$1.8T" },
    { tenor: "1M", rate: "5.33%", vol: "--" },
    { tenor: "3M", rate: "5.35%", vol: "--" },
    { tenor: "6M", rate: "5.38%", vol: "--" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>BTMM - TREASURY & MONEY MARKET MONITOR</span>
        <span>MARKET: CLOSED (S)</span>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-white font-bold bg-[#111] p-1 px-2 border-l-2 border-[#ffb900] mb-2 uppercase text-[9px]">Central Bank Rates</h2>
          <table className="w-full">
            <thead className="text-gray-500 uppercase text-[8px] border-b border-[#333]">
              <tr>
                <th className="p-2 text-left font-normal">Ctry</th>
                <th className="p-2 text-left font-normal">Indicator</th>
                <th className="p-2 text-right font-normal">Current</th>
                <th className="p-2 text-right font-normal">Last</th>
                <th className="p-2 text-right font-normal">Date</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((r, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
                  <td className="p-2 text-blue-400 font-bold">{r.country}</td>
                  <td className="p-2 text-white uppercase">{r.indicator}</td>
                  <td className="p-2 text-right text-[#ffb900] font-bold">{r.current}</td>
                  <td className="p-2 text-right text-gray-500">{r.last}</td>
                  <td className="p-2 text-right text-gray-600">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-white font-bold bg-[#111] p-1 px-2 border-l-2 border-[#ffb900] mb-2 uppercase text-[9px]">SOFR Term Structure</h2>
          <table className="w-full">
            <thead className="text-gray-500 uppercase text-[8px] border-b border-[#333]">
              <tr>
                <th className="p-2 text-left font-normal">Tenor</th>
                <th className="p-2 text-right font-normal">Rate</th>
                <th className="p-2 text-right font-normal">Volume</th>
              </tr>
            </thead>
            <tbody>
              {sofrData.map((s, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
                  <td className="p-2 text-white font-bold">{s.tenor}</td>
                  <td className="p-2 text-right text-[#00ff00] font-bold">{s.rate}</td>
                  <td className="p-2 text-right text-gray-500">{s.vol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};
