"use client";

import React, { useState } from 'react';
import { Table, Calculator, Save, Download } from 'lucide-react';

export const FinancialModelBuilder = () => {
  const [grid] = useState([
    ["Revenue", "1,200", "1,450", "1,680", "1,920"],
    ["COGS", "(450)", "(520)", "(610)", "(680)"],
    ["Gross Profit", "750", "930", "1,070", "1,240"],
    ["OpEx", "(320)", "(350)", "(390)", "(410)"],
    ["EBITDA", "430", "580", "680", "830"],
  ]);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs overflow-hidden">
      <div className="bg-[#1a1a1a] p-1 px-3 border-b border-[#333] flex justify-between items-center text-[#ffb900] font-bold uppercase">
        <span>MODL - FINANCIAL MODEL BUILDER</span>
        <div className="flex gap-4">
           <button className="hover:text-white flex items-center gap-1"><Calculator size={10} /> SOLVE</button>
           <button className="hover:text-white flex items-center gap-1"><Save size={10} /> SAVE</button>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-[#050505]">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 border border-[#222] bg-[#111] w-48">Label</th>
              <th className="p-2 border border-[#222] bg-[#111]">2024 (E)</th>
              <th className="p-2 border border-[#222] bg-[#111]">2025 (E)</th>
              <th className="p-2 border border-[#222] bg-[#111]">2026 (E)</th>
              <th className="p-2 border border-[#222] bg-[#111]">2027 (E)</th>
            </tr>
          </thead>
          <tbody>
            {grid.map((row, i) => (
              <tr key={i}>
                <td className="p-2 border border-[#222] bg-[#0a0a0a] font-bold text-gray-400">{row[0]}</td>
                {row.slice(1).map((cell, j) => (
                  <td key={j} className="p-2 border border-[#222] text-white text-right tabular-nums group relative">
                    <input
                      defaultValue={cell}
                      className="w-full bg-transparent text-right outline-none focus:bg-[#ffb900] focus:text-black"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-[#111] p-2 border-t border-[#333] flex justify-between items-center">
         <span className="text-gray-500 uppercase text-[9px]">Circular Reference: OFF</span>
         <div className="flex gap-2">
            <span className="text-blue-500 font-bold bg-blue-900/10 px-2 border border-blue-900/30">BDP LINK ACTIVE</span>
            <span className="text-[#00ff00] font-bold bg-green-900/10 px-2 border border-green-900/30">LOCKED</span>
         </div>
      </div>
    </div>
  );
};
