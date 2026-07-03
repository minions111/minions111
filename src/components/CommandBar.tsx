"use client";

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export const CommandBar = ({ onCommand, commands = [] }: { onCommand: (c: string) => void, commands?: string[] }) => {
  const [command, setCommand] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [idx, setIdx] = useState(-1);

  useEffect(() => {
    const f = command ? commands.filter(c => c.startsWith(command.toUpperCase())).slice(0, 10) : [];
    setSuggestions(f); setShow(f.length > 0); setIdx(-1);
  }, [command, commands]);

  const sub = (c: string) => { onCommand(c); setCommand(''); setShow(false); setIdx(-1); };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!show) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx(p => (p + 1) % suggestions.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx(p => (p <= 0 ? suggestions.length - 1 : p - 1)); }
    else if (e.key === 'Escape') { setShow(false); setIdx(-1); }
  };

  return (
    <div className="bg-[#222] border-b border-[#333] p-1 flex items-center gap-2 relative z-[1000]">
      <div className="bg-[#ffb900] text-black px-2 py-0.5 font-bold text-xs">HELP</div>
      <div className="flex-1 relative">
        <form onSubmit={e => { e.preventDefault(); const c = (idx >= 0 ? suggestions[idx] : command.trim().toUpperCase()); if (c) sub(c); }} className="flex items-center bg-black border border-[#444] px-2 py-0.5">
          <Search className="w-3 h-3 text-[#ffb900] mr-2" />
          <input
            type="text" role="combobox" aria-autocomplete="list" aria-expanded={show} aria-controls="cmd-list" aria-label="Terminal command"
            aria-activedescendant={idx >= 0 ? `s-${idx}` : undefined} value={command}
            onChange={e => setCommand(e.target.value.toUpperCase())} onFocus={() => setShow(suggestions.length > 0)} onKeyDown={handleKeyDown}
            className="bg-transparent text-[#ffb900] outline-none text-sm w-full font-mono" placeholder="Enter command or ticker..."
          />
        </form>
        {show && (
          <div id="cmd-list" role="listbox" className="absolute top-full left-0 right-0 bg-black border border-[#444] shadow-2xl mt-1">
            {suggestions.map((s, i) => (
              <div key={i} id={`s-${i}`} role="option" aria-selected={idx === i} onClick={() => sub(s)}
                className={`p-2 font-mono text-xs cursor-pointer border-b border-[#111] ${idx === i ? "bg-[#ffb900] text-black" : "text-[#ffb900] hover:bg-[#ffb900] hover:text-black"}`}
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
