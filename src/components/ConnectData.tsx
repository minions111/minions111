"use client";

import React, { useState, useEffect } from 'react';
import { Database, ShieldCheck, Key, RefreshCcw, Save } from 'lucide-react';
import { useAlerts } from './AlertToast';

export const ConnectData = () => {
  const [finnhubKey, setFinnhubKey] = useState("");
  const [newsApiKey, setNewsApiKey] = useState("");
  const { showAlert } = useAlerts();

  useEffect(() => {
    setFinnhubKey(localStorage.getItem('user_finnhub_key') || "");
    setNewsApiKey(localStorage.getItem('user_newsapi_key') || "");
  }, []);

  const handleSave = () => {
    localStorage.setItem('user_finnhub_key', finnhubKey);
    localStorage.setItem('user_newsapi_key', newsApiKey);
    showAlert("API Credentials Saved. Restarting Data Engines...", "success");

    // Force a reload of engines after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-8 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-8 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>CONN - REAL-TIME DATA CONNECTIVITY CENTER</span>
        <span>STATUS: {finnhubKey ? 'CONFIGURED' : 'UNCONFIGURED'}</span>
      </div>

      <div className="max-w-2xl space-y-8">
        <section className="bg-[#111] border border-[#222] p-6 space-y-6">
           <div className="flex items-center gap-3 text-white font-bold mb-4">
              <Database size={20} className="text-[#ffb900]" />
              <h2 className="uppercase">Market Data Provider (Finnhub)</h2>
           </div>
           <p className="text-gray-500 uppercase text-[10px] leading-relaxed">
             Enter your Finnhub API Key to enable real-time WebSocket pricing for all Equities and Crypto modules.
             If left blank, the terminal will use high-fidelity stochastic simulation.
           </p>
           <div className="flex gap-4">
              <div className="flex-1 bg-black border border-[#444] flex items-center px-3 gap-3">
                 <Key size={14} className="text-gray-600" />
                 <input
                   type="password"
                   value={finnhubKey}
                   onChange={(e) => setFinnhubKey(e.target.value)}
                   placeholder="Finnhub API Key..."
                   className="flex-1 bg-transparent text-white p-3 outline-none"
                 />
              </div>
           </div>
        </section>

        <section className="bg-[#111] border border-[#222] p-6 space-y-6">
           <div className="flex items-center gap-3 text-white font-bold mb-4">
              <ShieldCheck size={20} className="text-blue-500" />
              <h2 className="uppercase">Institutional News Provider (NewsAPI)</h2>
           </div>
           <p className="text-gray-500 uppercase text-[10px] leading-relaxed">
             Enable global macro news streaming by connecting your NewsAPI credentials.
             This powers the TOP, AN, and MN modules with live headlines.
           </p>
           <div className="flex gap-4">
              <div className="flex-1 bg-black border border-[#444] flex items-center px-3 gap-3">
                 <Key size={14} className="text-gray-600" />
                 <input
                   type="password"
                   value={newsApiKey}
                   onChange={(e) => setNewsApiKey(e.target.value)}
                   placeholder="NewsAPI Key..."
                   className="flex-1 bg-transparent text-white p-3 outline-none"
                 />
              </div>
           </div>
        </section>

        <div className="flex gap-4">
           <button
             onClick={handleSave}
             className="flex-1 bg-[#ffb900] text-black font-bold p-4 flex items-center justify-center gap-2 hover:bg-white transition-colors uppercase"
           >
             <Save size={16} /> Save and Initialize Connections
           </button>
           <button
             onClick={() => window.location.reload()}
             className="bg-[#222] border border-[#333] text-gray-400 p-4 hover:bg-[#333] transition-colors"
           >
             <RefreshCcw size={16} />
           </button>
        </div>

        <div className="p-4 border-t border-[#333] text-gray-700 text-[10px] uppercase text-center italic">
          Credentials are stored locally in your browser's encrypted LocalStorage and never sent to our servers.
        </div>
      </div>
    </div>
  );
};
