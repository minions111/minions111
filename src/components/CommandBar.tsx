"use client";

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface CommandBarProps { onCommand: (cmd: string) => void; commands?: string[]; }

export const CommandBar = ({ onCommand, commands = [] }: CommandBarProps) => {
  const [command, setCommand] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [idx, setIdx] = useState(-1);

  useEffect(() => {
    const filtered = command ? commands.filter(c => c.startsWith(command.toUpperCase())).slice(0, 10) : [];
    setSuggestions(filtered);
    setShow(filtered.length > 0);
    setIdx(-1);
  }, [command, commands]);

  const handleSelect = (s: string) => { onCommand(s); setCommand(''); setShow(false); };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!show) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx(p => (p < suggestions.length - 1 ? p + 1 : 0)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx(p => (p > 0 ? p - 1 : suggestions.length - 1)); }
    else if (e.key === 'Escape') setShow(false);
    else if (e.key === 'Enter' && idx >= 0) { e.preventDefault(); handleSelect(suggestions[idx]); }
  };

  return (
    <div className="bg-[#222] border-b border-[#333] p-1 flex items-center gap-2 relative z-[1000]">
      <div className="bg-[#ffb900] text-black px-2 py-0.5 font-bold text-xs uppercase">Help</div>
      <div className="flex-1 relative">
        <form
          onSubmit={(e) => { e.preventDefault(); if (command.trim()) handleSelect(idx >= 0 ? suggestions[idx] : command.trim().toUpperCase()); }}
          className="flex items-center bg-black border border-[#444] px-2 py-0.5" role="combobox" aria-haspopup="listbox" aria-expanded={show}
        >
          <Search className="w-3 h-3 text-[#ffb900] mr-2" />
          <input
            type="text" value={command} onChange={(e) => setCommand(e.target.value.toUpperCase())}
            onFocus={() => setShow(suggestions.length > 0)} onKeyDown={handleKeyDown}
            className="bg-transparent text-[#ffb900] outline-none text-sm w-full font-mono" placeholder="Enter command or ticker..."
            aria-autocomplete="list" aria-controls="command-suggestions" aria-activedescendant={idx >= 0 ? `suggestion-${idx}` : undefined}
          />
        </form>
        {show && (
          <div id="command-suggestions" role="listbox" className="absolute top-full left-0 right-0 bg-black border border-[#444] shadow-2xl mt-1">
            {suggestions.map((s, i) => (
              <div
                key={i} id={`suggestion-${i}`} role="option" aria-selected={i === idx} onClick={() => handleSelect(s)}
                className={`p-2 text-[#ffb900] font-mono text-xs cursor-pointer border-b border-[#111] ${i === idx ? "bg-[#ffb900] text-black" : "hover:bg-[#ffb900]/10"}`}
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-2 px-2 text-[10px] font-mono text-gray-400">
        <span>F1 HELP</span><span>F2 GOV</span><span>F3 CORP</span><span>F4 MTGE</span><span>F5 M-MKT</span>
      </div>
    </div>
  );
};
