"use client";

import React, { useState } from 'react';
import { Bell, ShieldCheck, AlertTriangle } from 'lucide-react';

export const AlertManager = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, ticker: "AAPL", type: "Price", condition: "> 190.00", status: "Active", severity: "low" },
    { id: 2, ticker: "NVDA", type: "Price", condition: "> 800.00", status: "Active", severity: "high" },
    { id: 3, ticker: "TSLA", type: "Volume", condition: "> 2x Avg", status: "Triggered", severity: "med" },
    { id: 4, ticker: "SPY", type: "News", condition: "Fed Rate Cut", status: "Active", severity: "high" },
  ]);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>ALRT - ALERT MANAGER</span>
        <button className="text-[10px] bg-blue-900 hover:bg-blue-800 text-white px-2 rounded">ADD NEW</button>
      </div>

      <div className="flex-1">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b border-[#333] uppercase text-[10px]">
              <th className="py-1">Security</th>
              <th>Type</th>
              <th>Condition</th>
              <th className="text-center">Severity</th>
              <th className="text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {alerts.map((a) => (
              <tr key={a.id} className="border-b border-[#111] hover:bg-[#111]">
                <td className="py-2 text-blue-400 font-bold">{a.ticker}</td>
                <td className="text-gray-400">{a.type}</td>
                <td className="font-bold">{a.condition}</td>
                <td className="text-center">
                  <div className={`mx-auto w-2 h-2 rounded-full ${
                    a.severity === 'high' ? 'bg-red-500 shadow-[0_0_5px_#ff0000]' :
                    a.severity === 'med' ? 'bg-[#ffb900]' : 'bg-blue-500'
                  }`} />
                </td>
                <td className={`text-right ${a.status === 'Triggered' ? 'text-red-500 blink font-bold' : 'text-gray-500'}`}>
                  {a.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-3 bg-blue-950/20 border border-blue-900 rounded text-[10px] text-blue-400 flex items-center gap-2">
        <ShieldCheck size={14} />
        <span>System Alert: Network connectivity optimal. Latency 14ms.</span>
      </div>

      <style jsx>{`
        .blink {
          animation: blink-animation 1s steps(5, start) infinite;
        }
        @keyframes blink-animation {
          to { visibility: hidden; }
        }
      `}</style>
    </div>
  );
};
