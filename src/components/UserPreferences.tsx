"use client";

import React from 'react';
import { User, Settings, Shield, Bell, Terminal } from 'lucide-react';

export const UserPreferences = () => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-6 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-6 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>USER - TERMINAL SETTINGS & PROFILE</span>
        <span>ID: BBG-7824-9912</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div className="bg-[#111] border border-[#222] p-4">
            <h2 className="text-[#ffb900] font-bold mb-4 flex items-center gap-2 uppercase">
              <User size={14} /> Account Profile
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span className="text-gray-500">Name:</span>
                <span className="text-white">Professional Trader</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span className="text-gray-500">Firm:</span>
                <span className="text-white">Institutional Asset Mgmt</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span className="text-gray-500">Location:</span>
                <span className="text-white">New York, NY</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111] border border-[#222] p-4">
            <h2 className="text-[#ffb900] font-bold mb-4 flex items-center gap-2 uppercase">
              <Terminal size={14} /> Display Options
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Theme:</span>
                <span className="bg-black border border-[#ffb900] text-[#ffb900] px-2 py-0.5 text-[9px]">CLASSIC AMBER</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Font Density:</span>
                <span className="text-white">HIGH</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Refresh Rate:</span>
                <span className="text-[#00ff00]">REAL-TIME</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-[#111] border border-[#222] p-4">
            <h2 className="text-[#ffb900] font-bold mb-4 flex items-center gap-2 uppercase">
              <Shield size={14} /> Security & Permissions
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span className="text-gray-500">Market Data:</span>
                <span className="text-[#00ff00]">LEVEL II ACCESS</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span className="text-gray-500">Trading Authorization:</span>
                <span className="text-[#00ff00]">ENABLED</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span className="text-gray-500">API Access:</span>
                <span className="text-white">REST / FIX / PYTHON</span>
              </div>
            </div>
          </div>

          <button className="w-full py-2 bg-red-900/20 border border-red-900 text-red-500 font-bold uppercase hover:bg-red-900/40 transition-colors">
            LOG OUT OF TERMINAL
          </button>
        </section>
      </div>
    </div>
  );
};
