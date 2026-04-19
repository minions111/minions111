"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, Clock, Trash2 } from 'lucide-react';

export const TerminalCommandPrompt = () => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('bloomberg_history');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('bloomberg_history');
  };

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CMD - TERMINAL COMMAND HISTORY</span>
        <button onClick={clearHistory} className="text-red-500 hover:text-white flex items-center gap-1">
           <Trash2 size={10} /> CLEAR
        </button>
      </div>

      <div className="space-y-2">
        {history.map((cmd, i) => (
          <div key={i} className="flex items-center gap-4 bg-[#111] p-3 border border-[#222] hover:border-[#ffb900] cursor-pointer group">
             <Terminal size={14} className="text-gray-600 group-hover:text-[#ffb900]" />
             <div className="flex-1">
                <div className="text-white font-bold">{cmd}</div>
                <div className="text-gray-500 text-[8px] uppercase">Session Command</div>
             </div>
             <div className="text-gray-700"><Clock size={12} /></div>
          </div>
        ))}
        {history.length === 0 && (
          <div className="p-8 text-center text-gray-600 uppercase">No recent commands in session.</div>
        )}
      </div>

      <div className="mt-8 bg-blue-900/10 border border-blue-900/30 p-4 text-[10px] text-blue-400">
         TIP: Use the &lt;UP&gt; arrow in the command bar to cycle through your last 10 commands.
      </div>
    </div>
  );
};
