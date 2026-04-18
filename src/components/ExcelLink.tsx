"use client";

import React, { useState } from 'react';
import { Table, Download, RefreshCcw, FileSpreadsheet } from 'lucide-react';

export const ExcelLink = () => {
  const [status, setStatus] = useState('Idle');

  const simulateExport = () => {
    setStatus('Exporting...');
    setTimeout(() => setStatus('Success: data.xlsx'), 1500);
  };

  return (
    <div className="bg-[#050505] h-full flex flex-col font-mono text-xs p-6 overflow-y-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-[#107c41] p-3 text-white">
          <FileSpreadsheet size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white uppercase">Bloomberg Excel Link</h1>
          <p className="text-gray-500 uppercase text-[10px]">API & Spreadsheet Integration</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div className="bg-[#111] border border-[#222] p-4">
            <h2 className="text-white font-bold mb-4 uppercase text-[10px]">Connection Status</h2>
            <div className="flex justify-between items-center bg-black border border-[#333] p-3">
              <span className="text-gray-400">Add-in State:</span>
              <span className="text-[#00ff00] font-bold">CONNECTED (V5.4)</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-500">Last Data Pull:</span>
              <span className="text-white">NY 22:04:15</span>
            </div>
          </div>

          <div className="bg-[#111] border border-[#222] p-4">
            <h2 className="text-white font-bold mb-4 uppercase text-[10px]">Rapid Actions</h2>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={simulateExport} className="bg-black border border-[#444] p-2 hover:bg-[#ffb900] hover:text-black transition-colors flex items-center justify-center gap-2">
                <Download size={12} /> EXPORT WORKSPACE
              </button>
              <button className="bg-black border border-[#444] p-2 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                <RefreshCcw size={12} /> REFRESH FORMULAS
              </button>
            </div>
            {status !== 'Idle' && <div className="mt-3 text-center text-[#ffb900] font-bold">{status}</div>}
          </div>
        </section>

        <section className="bg-blue-950/10 border border-blue-900/30 p-6 flex flex-col justify-center">
          <h2 className="text-[#ffb900] font-bold mb-4 uppercase text-center">BDP Formula Generator</h2>
          <div className="bg-black p-4 border border-[#333] text-gray-400 text-[11px] font-bold select-all">
            =BDP("AAPL US Equity", "PX_LAST")
          </div>
          <p className="text-[9px] text-gray-500 mt-4 text-center">
            Paste the formula above into any Microsoft Excel cell to retrieve real-time Bloomberg data. Use the 'API Data' tab in the ribbons for bulk requests.
          </p>
        </section>
      </div>
    </div>
  );
};
