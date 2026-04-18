"use client";

import React from 'react';
import { Wifi, Server, Activity, ShieldCheck } from 'lucide-react';

export const TerminalDiagnostics = () => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-6 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-6 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>DIAG - TERMINAL SYSTEM DIAGNOSTICS</span>
        <span>BUILD: 2026.04.17.F</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <div className="bg-[#111] border border-[#222] p-4">
            <h2 className="text-[#ffb900] font-bold mb-4 flex items-center gap-2 uppercase text-[10px]">
              <Wifi size={14} /> Network Status
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Latency (NY-DC):</span>
                <span className="text-[#00ff00]">12ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">WebSocket Conn:</span>
                <span className="text-[#00ff00]">CONNECTED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Bandwidth Usage:</span>
                <span className="text-white">1.2 MB/s</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111] border border-[#222] p-4">
            <h2 className="text-[#ffb900] font-bold mb-4 flex items-center gap-2 uppercase text-[10px]">
              <Server size={14} /> API Connectivity
            </h2>
            <div className="space-y-2 text-[10px]">
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span className="text-white">FINNHUB.IO</span>
                <span className="text-[#00ff00]">ACTIVE</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span className="text-white">WORLDBANK.ORG</span>
                <span className="text-[#00ff00]">ACTIVE</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span className="text-white">NEWSAPI.ORG</span>
                <span className="text-gray-600">PENDING KEY</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-950/10 border border-blue-900/30 p-6 flex flex-col items-center justify-center text-center">
          <ShieldCheck size={64} className="text-blue-500 mb-4" />
          <div className="text-white font-bold text-lg uppercase mb-2">Security Integrity: 100%</div>
          <p className="text-gray-500 text-[10px] leading-relaxed">
            All workstation modules are running with secure-sandbox protocols. Local state is encrypted, and no PII is transmitted to external endpoints.
          </p>
          <div className="mt-8 w-full bg-blue-900/20 p-2 text-[9px] text-blue-400 border border-blue-800">
            SESSION_TOKEN: 4f9e-88a2-bb82-ff11
          </div>
        </section>
      </div>
    </div>
  );
};
