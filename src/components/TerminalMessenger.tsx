"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, User, Shield, Send } from 'lucide-react';

export const TerminalMessenger = () => {
  const [msg, setMsg] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [chat, setChat] = useState([
    { from: "TRDR_NY_82", text: "Watching the UST 10Y move here. Any flows in the long end?", time: "14:15" },
    { from: "SYS_MSG", text: "Your connection to 'INTERBANK_FX' has been established.", time: "14:12" },
    { from: "RSCH_LDN", text: "Just updated the European energy outlook in module BI. Significant supply shift expected.", time: "13:45" },
  ]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;
    setChat([...chat, { from: "YOU", text: msg.trim(), time: "Now" }]);
    setMsg('');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div className="bg-[#050505] h-full flex flex-col font-mono text-xs overflow-hidden">
      <div className="bg-[#1a1a1a] p-2 px-4 border-b border-[#333] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare size={14} className="text-[#ffb900]" />
          <span className="font-bold text-[#ffb900]">MSG - TERMINAL MESSENGER</span>
        </div>
        <div className="flex items-center gap-4 text-[9px] text-gray-500">
          <span className="text-[#00ff00]">SECURE</span>
          <span>CHANNELS: 12</span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {chat.map((m, i) => (
          <div key={i} className="flex flex-col gap-1 border-l border-[#333] pl-3 py-1">
            <div className="flex justify-between items-center text-[9px]">
              <span className={m.from === 'YOU' ? 'text-blue-400 font-bold' : 'text-[#ffb900] font-bold'}>{m.from}</span>
              <span className="text-gray-600">{m.time}</span>
            </div>
            <p className="text-white leading-relaxed">{m.text}</p>
          </div>
        ))}
      </div>

      <div className="p-4 bg-[#0a0a0a] border-t border-[#333]">
        <form onSubmit={send} className="flex gap-2 bg-black border border-[#444] p-1">
          <input
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Type message to workstation group..."
            aria-label="Message text"
            className="flex-1 bg-transparent text-white p-2 outline-none"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="text-[#ffb900] p-2 hover:text-white transition-colors"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};
