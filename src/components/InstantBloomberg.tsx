"use client";

import React, { useState } from 'react';
import { Send, User, MessageSquare } from 'lucide-react';

export const InstantBloomberg = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "James (Goldman)", text: "Bid 1.0645 on EUR/USD in size?", time: "18:40" },
    { id: 2, user: "Sarah (JPM)", text: "Offer 1.0647 for 50", time: "18:41" },
    { id: 3, user: "You", text: "Watching the DXY level here", time: "18:42" },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, {
      id: Date.now(),
      user: "You",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
    }]);
    setInput('');
  };

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs overflow-hidden">
      <div className="bg-[#1a1a1a] p-2 px-4 text-[#ffb900] font-bold border-b border-[#333] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare size={14} />
          <span>IB - INSTANT BLOOMBERG (Chat)</span>
        </div>
        <div className="flex gap-4 text-[10px] text-gray-500">
          <span>ONLINE: 14,284</span>
          <span>COMPLIANCE ACTIVE</span>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Contacts Sidebar */}
        <div className="w-48 border-r border-[#222] bg-[#080808] flex flex-col">
          <div className="p-2 border-b border-[#222] text-gray-500 uppercase font-bold text-[9px]">Contacts</div>
          <div className="flex-1 overflow-y-auto">
            {["John (Citi)", "Elena (MS)", "David (HedgeFund)", "Macro Desk"].map((name, i) => (
              <div key={i} className="p-2 hover:bg-[#111] cursor-pointer flex items-center gap-2 border-b border-[#111]">
                <div className="w-1.5 h-1.5 bg-[#00ff00] rounded-full" />
                <span className="text-white truncate">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-black">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m) => (
              <div key={m.id} className="flex flex-col">
                <div className="flex justify-between items-baseline mb-1">
                  <span className={m.user === 'You' ? "text-[#ffb900] font-bold" : "text-blue-400 font-bold"}>
                    {m.user}
                  </span>
                  <span className="text-gray-500 text-[10px]">{m.time}</span>
                </div>
                <div className="text-white bg-[#111] p-2 rounded border border-[#222]">
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-[#333] bg-[#1a1a1a] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type message..."
              className="flex-1 bg-black border border-[#444] text-white px-3 py-1.5 outline-none focus:border-[#ffb900]"
            />
            <button type="submit" className="bg-[#ffb900] text-black px-4 font-bold hover:bg-[#e6a800]">
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
