"use client";

import React, { useState } from 'react';
import { Smartphone, Monitor, ShieldCheck, Key, RefreshCcw, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BloombergAnywhere = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [token, setToken] = useState('');

  return (
    <div className="bg-black h-full flex items-center justify-center font-mono text-xs p-6">
      <div className="max-w-md w-full bg-[#111] border border-[#333] shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Auth Header */}
        <div className="bg-[#1a1a1a] p-4 border-b border-[#333] text-center">
          <div className="text-[#ffb900] text-xl font-bold tracking-tighter mb-1">BLOOMBERG ANYWHERE</div>
          <div className="text-gray-500 text-[9px] uppercase tracking-widest">Secure Remote Access Portal</div>
        </div>

        <div className="p-8 space-y-6">
          {!isAuthorized ? (
            <>
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Monitor size={48} className="text-gray-700" />
                  <Smartphone size={24} className="text-blue-500 absolute -bottom-2 -right-2 bg-[#111] p-0.5" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-gray-500 uppercase text-[9px]">B-Unit Serial / Username</label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="TRADER_PRO_01"
                      className="w-full bg-black border border-[#444] text-white p-2 pl-8 outline-none focus:border-blue-500"
                    />
                    <Key size={14} className="absolute left-2.5 top-2.5 text-gray-600" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-gray-500 uppercase text-[9px]">Validation Token</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter 6-digit B-Unit code"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      className="w-full bg-black border border-[#444] text-white p-2 pl-8 outline-none focus:border-[#ffb900] tracking-[0.5em] font-bold"
                    />
                    <ShieldCheck size={14} className="absolute left-2.5 top-2.5 text-gray-600" />
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsAuthorized(true)}
                disabled={token.length < 6}
                className={cn(
                  "w-full py-3 font-bold uppercase transition-colors",
                  token.length >= 6 ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-[#222] text-gray-600 cursor-not-allowed"
                )}
              >
                Authorize Session
              </button>

              <div className="text-center">
                <a href="#" className="text-blue-500 text-[9px] hover:underline uppercase">Forgot Serial or PIN?</a>
              </div>
            </>
          ) : (
            <div className="text-center py-4 animate-in fade-in duration-500">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-900/20 border border-green-500 rounded-full flex items-center justify-center">
                  <ShieldCheck size={32} className="text-green-500" />
                </div>
              </div>
              <h2 className="text-white font-bold text-lg mb-2 uppercase">Identity Verified</h2>
              <p className="text-gray-500 text-[10px] mb-6 uppercase">Syncing workstation settings from terminal...</p>

              <div className="bg-black p-4 border border-[#222] rounded space-y-3 mb-6">
                <div className="flex justify-between text-[9px]">
                  <span className="text-gray-500">IP ADDRESS</span>
                  <span className="text-white">192.168.1.105 (Remote)</span>
                </div>
                <div className="flex justify-between text-[9px]">
                  <span className="text-gray-500">ENCRYPTION</span>
                  <span className="text-[#00ff00]">AES-256-GCM OK</span>
                </div>
              </div>

              <button
                onClick={() => setIsAuthorized(false)}
                className="flex items-center gap-2 mx-auto text-gray-500 hover:text-white transition-colors uppercase text-[9px]"
              >
                <RefreshCcw size={12} /> Reset Session
              </button>
            </div>
          )}
        </div>

        {/* Info Footer */}
        <div className="bg-[#1a1a1a] p-3 text-center border-t border-[#333]">
           <div className="flex items-center justify-center gap-2 text-gray-600 text-[8px] uppercase">
             <Lock size={10} />
             <span>Secured by Bloomberg Bio-Metric Logic</span>
           </div>
        </div>
      </div>
    </div>
  );
};
