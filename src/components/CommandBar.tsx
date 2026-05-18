"use client";

import React, { useState, useEffect, useRef } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (command.length > 0) {
      const filtered = commands
        .filter(c => c.startsWith(command.toUpperCase()))
        .slice(0, 10);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [command, commands]);

  // Reset selectedIndex when command changes, but don't depend on commands array
  // to avoid resets on every parent heartbeat.
  useEffect(() => {
    setSelectedIndex(-1);
  }, [command]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const finalCommand = selectedIndex >= 0 ? suggestions[selectedIndex] : command.trim().toUpperCase();
    if (finalCommand) {
      onCommand(finalCommand);
      setCommand('');
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  const handleSelectSuggestion = (s: string) => {
    onCommand(s);
    setCommand('');
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[selectedIndex]);
    }
  };

  return (
    <div className="bg-[#222] border-b border-[#333] p-1 flex items-center gap-2 relative z-[1000]">
      <div className="bg-[#ffb900] text-black px-2 py-0.5 font-bold text-xs">
        HELP
      </div>
      <div className="flex-1 relative">
        <form
          role="combobox"
          aria-haspopup="listbox"
          aria-owns="command-suggestions"
          aria-expanded={showSuggestions}
          onSubmit={handleSubmit}
          className="flex items-center bg-black border border-[#444] px-2 py-0.5"
        >
          <Search className="w-3 h-3 text-[#ffb900] mr-2" />
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value.toUpperCase())}
            onFocus={() => setShowSuggestions(suggestions.length > 0)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
            aria-autocomplete="list"
            aria-controls="command-suggestions"
            aria-activedescendant={selectedIndex >= 0 ? `suggestion-${selectedIndex}` : undefined}
            className="bg-transparent text-[#ffb900] outline-none text-sm w-full font-mono"
            placeholder="Enter command or ticker..."
          />
        </form>

        {showSuggestions && (
          <div
            id="command-suggestions"
            role="listbox"
            className="absolute top-full left-0 right-0 bg-black border border-[#444] shadow-2xl mt-1"
          >
            {suggestions.map((s, i) => (
              <div
                key={i}
                id={`suggestion-${i}`}
                role="option"
                aria-selected={i === selectedIndex}
                onClick={() => handleSelectSuggestion(s)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`p-2 font-mono text-xs cursor-pointer border-b border-[#111] transition-colors ${
                  i === selectedIndex ? 'bg-[#ffb900] text-black' : 'text-[#ffb900] hover:bg-[#ffb900] hover:text-black'
                }`}
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
