"use client";

import React, { useState } from 'react';
import { Terminal, Code, Database, Globe, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const WebAPIIntegration = () => {
  const [activeTab, setActiveTab] = useState('REST');

  const endpoints = [
    { method: 'GET', path: '/v1/market-data/prices', desc: 'Fetch latest prices for specified tickers' },
    { method: 'GET', path: '/v1/reference-data/descriptors', desc: 'Get security static data (Sector, Industry)' },
    { method: 'POST', path: '/v1/trading/orders', desc: 'Submit a new trade order to EMSX' },
    { method: 'WS', path: '/v1/stream', desc: 'Real-time WebSocket market data stream' },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs overflow-hidden">
      <div className="bg-[#1a1a1a] p-1 px-3 border-b border-[#333] flex justify-between items-center">
        <span className="text-[#ffb900] font-bold uppercase">WAPI - BLOOMBERG API & DEVELOPER PORTAL</span>
        <span className="text-gray-500 text-[10px]">API VERSION 2.4.0 (STABLE)</span>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-56 border-r border-[#222] bg-[#050505] p-4 flex flex-col gap-2">
          {['REST', 'WEBSOCKET', 'FIX', 'EXCEL'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex items-center gap-3 p-2 text-left transition-colors uppercase text-[10px] tracking-wider",
                activeTab === tab ? "bg-blue-900/40 text-blue-400 border border-blue-800" : "text-gray-500 hover:text-white"
              )}
            >
              {tab === 'REST' && <Globe size={14} />}
              {tab === 'WEBSOCKET' && <Database size={14} />}
              {tab === 'FIX' && <Terminal size={14} />}
              {tab === 'EXCEL' && <Code size={14} />}
              {tab}
            </button>
          ))}

          <div className="mt-auto border-t border-[#222] pt-4">
            <div className="bg-[#111] p-2 border border-orange-900/50 rounded text-orange-400">
              <p className="font-bold mb-1">PRO TIP</p>
              <p className="text-[9px] leading-tight">Use 127.0.0.1:8194 for local terminal BLPAPI connection.</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-3xl">
            <h1 className="text-xl font-bold text-white mb-2 uppercase">Integrated API Documentation</h1>
            <p className="text-gray-500 mb-8">Access real-time, reference, and trade execution data through our professional interfaces.</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-[#ffb900] font-bold border-b border-[#333] pb-1 mb-4 uppercase">Core Endpoints</h2>
                <div className="bg-[#0a0a0a] border border-[#222] rounded overflow-hidden">
                  {endpoints.map((ep, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 border-b border-[#111] last:border-0 hover:bg-[#111] transition-colors group">
                      <span className={cn(
                        "w-12 text-center py-0.5 rounded text-[9px] font-bold",
                        ep.method === 'GET' ? "bg-green-900 text-green-400" :
                        ep.method === 'POST' ? "bg-blue-900 text-blue-400" : "bg-purple-900 text-purple-400"
                      )}>
                        {ep.method}
                      </span>
                      <code className="text-gray-300 font-bold">{ep.path}</code>
                      <span className="text-gray-500 text-[10px] ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={14} />
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-[#ffb900] font-bold border-b border-[#333] pb-1 mb-4 uppercase">Authentication</h2>
                <div className="bg-[#111] p-4 border border-[#222] text-gray-300 font-mono text-[10px]">
                  <p className="text-[#00ff00] mb-2">// Authorize session via Bloomberg Terminal Token</p>
                  <p className="text-white">Authorization: Bearer {'<BBG_SESSION_TOKEN>'}</p>
                </div>
              </section>

              <section>
                <h2 className="text-[#ffb900] font-bold border-b border-[#333] pb-1 mb-4 uppercase">Live Code Sample (JavaScript)</h2>
                <div className="bg-black p-4 border border-[#333] rounded text-blue-300 font-mono overflow-x-auto">
<pre className="text-[10px]">{`async function getMarketData(ticker) {
  const response = await fetch('https://api.bloomberg.pro/v1/pricing/' + ticker, {
    headers: { 'Authorization': 'Bearer PRO_TOKEN_123' }
  });

  const data = await response.json();
  console.log('Price for ' + ticker + ': ' + data.price);
}

getMarketData('AAPL US Equity');`}</pre>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
