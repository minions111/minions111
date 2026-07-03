"use client";

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface CommandBarProps {
  onCommand: (cmd: string) => void;
  commands?: string[];
}

export const CommandBar = ({ onCommand, commands = [] }: CommandBarProps) => {
  const [command, setCommand] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    setSelectedIndex(-1);
    const filtered = command ? commands.filter(c => c.startsWith(command.toUpperCase())).slice(0, 10) : [];
    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [command, commands]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') setSelectedIndex(p => (suggestions.length ? (p + 1) % suggestions.length : -1));
    if (e.key === 'ArrowUp') setSelectedIndex(p => (suggestions.length ? (p <= 0 ? suggestions.length - 1 : p - 1) : -1));
    if (e.key === 'Escape') setShowSuggestions(false);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const final = selectedIndex >= 0 ? suggestions[selectedIndex] : command.trim();
    if (final) {
      onCommand(final.toUpperCase());
      setCommand('');
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (s: string) => {
    onCommand(s);
    setCommand('');
    setShowSuggestions(false);
  };

  return (
    <div className="bg-[#222] border-b border-[#333] p-1 flex items-center gap-2 relative z-[1000]">
      <div className="bg-[#ffb900] text-black px-2 py-0.5 font-bold text-xs">HELP</div>
      <div className="flex-1 relative">
        <form onSubmit={handleSubmit} className="flex items-center bg-black border border-[#444] px-2 py-0.5" role="combobox" aria-expanded={showSuggestions} aria-haspopup="listbox" aria-controls="cmd-list">
          <Search className="w-3 h-3 text-[#ffb900] mr-2" />
          <input
            id="command-input" type="text" value={command} aria-label="Terminal command" aria-autocomplete="list"
            aria-activedescendant={selectedIndex >= 0 ? `opt-${selectedIndex}` : undefined}
            onChange={(e) => setCommand(e.target.value.toUpperCase())} onKeyDown={handleKeyDown}
            onFocus={() => setShowSuggestions(suggestions.length > 0)}
            className="bg-transparent text-[#ffb900] outline-none text-sm w-full font-mono"
            placeholder="Enter command or ticker..."
          />
        </form>
        {showSuggestions && (
          <div id="cmd-list" role="listbox" className="absolute top-full left-0 right-0 bg-black border border-[#444] shadow-2xl mt-1">
            {suggestions.map((s, i) => (
              <div
                key={i} id={`opt-${i}`} role="option" aria-selected={selectedIndex === i}
                onClick={() => handleSelectSuggestion(s)}
                className={`p-2 font-mono text-xs cursor-pointer border-b border-[#111] ${selectedIndex === i ? "bg-[#ffb900] text-black" : "text-[#ffb900] hover:bg-[#ffb900] hover:text-black"}`}
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-2 px-2 text-[10px] font-mono text-gray-400">
        <span>F1 HELP</span>
        <span>F2 GOV</span>
        <span>F3 CORP</span>
        <span>F4 MTGE</span>
        <span>F5 M-MKT</span>
      </div>
    </div>
  );
};
