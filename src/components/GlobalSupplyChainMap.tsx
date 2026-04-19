"use client";

import React, { useState } from 'react';
import { Globe, Users, ArrowRight, TrendingUp, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Supplier {
  name: string;
  revenue_dependency: number;
  country: string;
  risk_level: 'LOW' | 'MEDIUM' | 'HIGH';
  category: string;
}

export const GlobalSupplyChainMap = ({ ticker = "AAPL" }: { ticker?: string }) => {
  const [activeTab, setActiveTab] = useState('SUPPLIERS');

  const suppliers: Supplier[] = [
    { name: "Foxconn Technology", revenue_dependency: 45.2, country: "Taiwan", risk_level: "MEDIUM", category: "Assembly" },
    { name: "Samsung Electronics", revenue_dependency: 12.4, country: "S. Korea", risk_level: "LOW", category: "Displays" },
    { name: "TSMC", revenue_dependency: 28.1, country: "Taiwan", risk_level: "MEDIUM", category: "Semiconductors" },
    { name: "Qualcomm Inc", revenue_dependency: 8.5, country: "USA", risk_level: "LOW", category: "Cellular Modems" },
    { name: "LG Innotek", revenue_dependency: 5.2, country: "S. Korea", risk_level: "LOW", category: "Camera Modules" },
  ];

  const customers = [
    { name: "AT&T Inc", volume: "High", dependency: 12.0 },
    { name: "Verizon Communications", volume: "High", dependency: 10.5 },
    { name: "Best Buy Co", volume: "Medium", dependency: 5.2 },
    { name: "Amazon.com Inc", volume: "High", dependency: 8.4 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs overflow-hidden">
      <div className="bg-[#1a1a1a] p-1 px-3 border-b border-[#333] flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-[#ffb900] font-bold uppercase">MAP - SUPPLY CHAIN ANALYSIS: {ticker} US EQUITY</span>
          <div className="flex gap-1 border border-[#333]">
            {['SUPPLIERS', 'CUSTOMERS', 'GEO_RISK'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-3 py-1 text-[9px] uppercase transition-colors",
                  activeTab === tab ? "bg-blue-600 text-white" : "text-gray-500 hover:text-white"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-4 text-gray-400 text-[10px]">
          <span className="flex items-center gap-1"><TrendingUp size={12} /> SHP VOL: +4.2%</span>
          <span className="flex items-center gap-1 text-[#00ff00] font-bold">ALPHA: 0.85</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        {/* Connection Visualization (Simulated) */}
        <div className="col-span-8 relative bg-[#050505] p-6 border-r border-[#222]">
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
             <div className="w-full h-full bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="relative h-full flex items-center justify-center">
            {/* Center Node */}
            <div className="z-10 bg-blue-600 w-32 h-32 rounded-full flex flex-col items-center justify-center border-4 border-blue-900 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              <span className="text-white font-bold text-xl">{ticker}</span>
              <span className="text-blue-200 text-[8px] uppercase">Equity Master</span>
            </div>

            {/* Satellite Nodes (Suppliers) */}
            {activeTab === 'SUPPLIERS' && suppliers.slice(0, 4).map((s, i) => {
              const angles = [45, 135, 225, 315];
              const angle = angles[i];
              const x = Math.cos(angle * Math.PI / 180) * 180;
              const y = Math.sin(angle * Math.PI / 180) * 180;

              return (
                <div key={i} className="absolute flex flex-col items-center gap-2" style={{ transform: `translate(${x}px, ${y}px)` }}>
                  <div className="w-20 h-1 bg-[#222] absolute top-1/2 left-1/2 -z-10 origin-left" style={{ transform: `rotate(${angle + 180}deg) scaleX(2.5)` }} />
                  <div className={cn(
                    "p-2 border bg-black text-center min-w-[100px]",
                    s.risk_level === 'HIGH' ? "border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.2)]" : "border-[#333]"
                  )}>
                    <p className="text-white font-bold leading-none mb-1">{s.name}</p>
                    <p className="text-[8px] text-gray-500 uppercase">{s.category}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-4 left-4 flex gap-4 text-[9px]">
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-600 rounded-full" /> CORE EQUITY</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-[#333] border border-gray-500" /> TIER-1 SUPPLIER</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-red-600" /> HIGH RISK NODE</div>
          </div>
        </div>

        {/* List Details */}
        <div className="col-span-4 flex flex-col bg-[#0a0a0a]">
          <div className="p-3 border-b border-[#222] bg-[#111] text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-between">
            {activeTab === 'SUPPLIERS' ? 'Key Suppliers' : 'Key Customers'}
            <Users size={12} />
          </div>
          <div className="flex-1 overflow-auto">
            {activeTab === 'SUPPLIERS' ? (
              <div className="divide-y divide-[#111]">
                {suppliers.map((s, i) => (
                  <div key={i} className="p-3 hover:bg-[#151515] transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-white font-bold group-hover:text-blue-400">{s.name}</span>
                      <span className={cn(
                        "text-[8px] px-1 py-0.5 rounded font-bold",
                        s.risk_level === 'LOW' ? "text-green-500 bg-green-900/20" :
                        s.risk_level === 'MEDIUM' ? "text-orange-500 bg-orange-900/20" : "text-red-500 bg-red-900/20"
                      )}>
                        {s.risk_level} RISK
                      </span>
                    </div>
                    <div className="flex justify-between text-[9px]">
                      <span className="text-gray-500 uppercase">{s.country}</span>
                      <span className="text-blue-400 font-bold">{s.revenue_dependency}% DEP</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="divide-y divide-[#111]">
                {customers.map((c, i) => (
                  <div key={i} className="p-3 hover:bg-[#151515] transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-white font-bold">{c.name}</span>
                      <ArrowRight size={12} className="text-gray-600" />
                    </div>
                    <div className="flex justify-between text-[9px]">
                      <span className="text-gray-500 uppercase">VOL: {c.volume}</span>
                      <span className="text-[#ffb900] font-bold">{c.dependency}% DEP</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 bg-[#111] border-t border-[#333]">
             <div className="flex items-center gap-2 mb-2 text-orange-400">
               <AlertTriangle size={14} />
               <span className="font-bold text-[10px] uppercase">Concentration Alert</span>
             </div>
             <p className="text-[9px] text-gray-500 leading-tight">
               73.2% of total COGS concentrated in South East Asia. Regional geopolitical shifts may impact {ticker} bottom line by up to 12.5%.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
