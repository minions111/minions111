"use client";

import React from 'react';

interface TECHProps {
  ticker: string;
}

export const TechnicalIndicators = ({ ticker }: TECHProps) => {
  const indicators = [
    { name: "Relative Strength Index (14)", val: "62.45", signal: "NEUTRAL", color: "gray" },
    { name: "MACD (12, 26, 9)", val: "2.14", signal: "BULLISH", color: "green" },
    { name: "Stochastic %K (14, 3)", val: "84.20", signal: "OVERBOUGHT", color: "red" },
    { name: "Moving Average (50-Day)", val: "178.45", signal: "BULLISH", color: "green" },
    { name: "Moving Average (200-Day)", val: "165.12", signal: "BULLISH", color: "green" },
    { name: "Bollinger Band (Upper)", val: "192.40", signal: "NEUTRAL", color: "gray" },
    { name: "Bollinger Band (Lower)", val: "174.20", signal: "NEUTRAL", color: "gray" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - TECH (Technical Summary)</span>
        <span>DAILY DATA</span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <section>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b border-[#222] text-[10px]">
                <th className="py-1">Indicator</th>
                <th className="text-right">Value</th>
                <th className="text-center">Signal</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {indicators.map((ind, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                  <td className="py-2 text-blue-400">{ind.name}</td>
                  <td className="text-right font-bold">{ind.val}</td>
                  <td className="text-center">
                    <span className={`px-2 py-0.5 rounded-sm font-bold text-[9px] ${
                      ind.color === 'green' ? 'bg-green-900/40 text-green-500' :
                      ind.color === 'red' ? 'bg-red-900/40 text-red-500' : 'bg-gray-800 text-gray-400'
                    }`}>
                      {ind.signal}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <div className="mt-8 bg-[#111] border border-[#222] p-4 text-center">
        <div className="text-[#ffb900] font-bold mb-1">OVERALL TECHNICAL SENTIMENT</div>
        <div className="text-3xl font-bold text-[#00ff00]">BULLISH</div>
        <div className="text-gray-500 text-[10px] mt-1">5 SIGNALS POSITIVE | 2 NEUTRAL | 0 NEGATIVE</div>
      </div>
    </div>
  );
};
