"use client";

import React, { useState } from 'react';
import { Send, Hash, MessageSquare, MoreVertical, Lock, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export const InstantBloomberg = () => {
  const [activeChannel, setActiveChannel] = useState('GENERAL');
  const channels = [
    { id: 'GENERAL', label: 'GEN (GLOBAL_MKT)', type: 'public' },
    { id: 'EQUITY', label: 'EQ (TRADER_CHAT)', type: 'private' },
    { id: 'MACRO', label: 'ECO (STRAT_HUB)', type: 'public' },
    { id: 'CREDIT', label: 'CR (DISTRESSED)', type: 'private' },
  ];

  const messagesByChannel: Record<string, any[]> = {
    'GENERAL': [
      { user: 'B-SYS', text: 'WELCOME TO INSTANT BLOOMBERG. SECURE CONNECTION ESTABLISHED.', time: '08:00' },
      { user: 'RESEARCH_AI', text: 'LATEST ALPHA GENERATED FOR AAPL. CHECK FA FOR DETAILS.', time: '08:15' },
    ],
    'EQUITY': [
      { user: 'EQUITY_HEDGE', text: 'Bid appearing on the ARCA book for NVDA.', time: '10:42' },
      { user: 'MASTER_TRADER', text: 'Watching the spread on the 180 calls.', time: '10:45' },
    ],
    'MACRO': [
      { user: 'ECON_CHIEF', text: 'Initial jobless claims came in hotter than expected.', time: '08:31' },
    ],
    'CREDIT': [
      { user: 'CREDIT_DESK', text: 'Spreads tightening on the CDX index.', time: '09:12' },
    ]
  };

  const msgs = messagesByChannel[activeChannel] || [];

  return (
    <div className="bg-[#050505] h-full flex flex-col font-mono text-xs overflow-hidden">
      <div className="bg-[#1a1a1a] p-1 px-3 text-[#ffb900] font-bold border-b border-[#333] flex justify-between uppercase">
        <span>IB - INSTANT BLOOMBERG SERVICE</span>
        <div className="flex gap-4">
           <span className="text-[#00ff00]">ENCRYPTED_LINK_ACTIVE</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        {/* Channel List */}
        <div className="col-span-3 border-r border-[#333] bg-[#0a0a0a] overflow-y-auto">
          {channels.map((c) => (
            <div
              key={c.id}
              onClick={() => setActiveChannel(c.id)}
              className={cn(
                "p-3 border-b border-[#111] hover:bg-[#1a1a1a] cursor-pointer group flex items-center gap-3",
                activeChannel === c.id ? "bg-[#111] border-l-2 border-[#ffb900]" : ""
              )}
            >
              <div className="text-gray-600 group-hover:text-white">
                {c.type === 'private' ? <Lock size={12} /> : <Hash size={12} />}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className={cn("font-bold truncate uppercase", activeChannel === c.id ? "text-white" : "text-gray-500")}>
                  {c.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Area */}
        <div className="col-span-9 flex flex-col bg-black overflow-hidden">
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="text-center mb-8">
               <span className="bg-[#222] text-gray-500 px-3 py-1 rounded-full text-[8px] border border-[#333]">
                  CHATTING IN #{activeChannel} - SESSION RECORDED FOR COMPLIANCE
               </span>
            </div>
            {msgs.map((m, i) => (
              <div key={i} className="flex flex-col gap-1 max-w-[85%]">
                <div className="flex items-center gap-2">
                  <span className="text-[#ffb900] font-bold text-[9px] uppercase">{m.user}</span>
                  <span className="text-gray-600 text-[8px]">{m.time}</span>
                </div>
                <div className="bg-[#111] p-3 border border-[#222] text-white rounded-sm leading-relaxed">
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#111] border-t border-[#333]">
            <div className="flex gap-3 bg-black border border-[#444] p-1 items-center">
              <input
                type="text"
                placeholder={`Type message to ${activeChannel}...`}
                className="flex-1 bg-transparent text-white outline-none p-2"
              />
              <button className="bg-[#ffb900] text-black px-4 py-2 font-bold hover:bg-white transition-colors">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
