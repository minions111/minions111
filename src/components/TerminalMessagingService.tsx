"use client";

import React, { useState } from 'react';
import { Send, User, MessageCircle, MoreVertical, Paperclip } from 'lucide-react';

export const TerminalMessagingService = () => {
  const [msg, setMsg] = useState("");
  const [chats] = useState([
    { from: "MARKET_MAKER", text: "Providing liquidity on AAPL 180 calls.", time: "10:15" },
    { from: "QUANT_DESK", text: "RSI signal triggered on TSLA. Review TECH.", time: "10:18" },
    { from: "RESEARCH_DIRECTOR", text: "New report on EM debt published. See READ.", time: "10:22" },
  ]);

  return (
    <div className="bg-[#050505] h-full flex flex-col font-mono text-xs overflow-hidden">
      <div className="bg-[#1a1a1a] p-1 px-3 text-[#ffb900] font-bold border-b border-[#333] flex justify-between uppercase">
        <span>MSGS - BLOOMBERG MESSAGING SERVICE</span>
        <div className="flex gap-4">
           <span className="text-[#00ff00]">6 ONLINE</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        {/* Contact List */}
        <div className="col-span-3 border-r border-[#333] bg-[#0a0a0a] overflow-y-auto">
          {['MARKET_MAKER', 'QUANT_DESK', 'RESEARCH_DIRECTOR', 'PRIME_BROKER', 'TREASURY_OPS'].map(c => (
            <div key={c} className="p-3 border-b border-[#111] hover:bg-[#1a1a1a] cursor-pointer group flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-900/30 border border-blue-500 rounded-full flex items-center justify-center text-blue-500 font-bold">
                {c[0]}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="text-white font-bold truncate">{c}</div>
                <div className="text-gray-600 text-[9px] truncate">LAST SEEN 10:22</div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Area */}
        <div className="col-span-9 flex flex-col bg-black overflow-hidden">
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {chats.map((c, i) => (
              <div key={i} className="flex flex-col gap-1 max-w-[80%]">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold text-[9px]">{c.from}</span>
                  <span className="text-gray-600 text-[8px]">{c.time}</span>
                </div>
                <div className="bg-[#111] p-3 border border-[#222] text-white rounded-sm">
                  {c.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#111] border-t border-[#333]">
            <div className="flex gap-3 bg-black border border-[#444] p-1 items-center">
              <button className="p-2 text-gray-500 hover:text-white"><Paperclip size={14} /></button>
              <input
                type="text"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Type message to secure group..."
                className="flex-1 bg-transparent text-white outline-none p-2"
              />
              <button className="bg-[#ffb900] text-black px-4 py-2 font-bold flex items-center gap-2 hover:bg-white transition-colors">
                <Send size={14} /> SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
