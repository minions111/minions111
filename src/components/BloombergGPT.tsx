"use client";

import React, { useState } from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';

export const BloombergGPT = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'BloombergGPT online. Analyze market trends, cross-asset correlations, or institutional news flow. How can I assist your research?' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: query }]);
    setQuery('');

    // Mock AI Response
    setTimeout(() => {
      let response = `Analysis for "${query}": Institutional positioning remains focused on yield curve normalization. Cross-asset correlations (CORR) indicate risk-on sentiment in Tech, while WX modules show potential tailwinds for Ag-commodities. Consult FA and DCF for fundamental valuation support.`;

      if (query.toUpperCase().includes('AAPL') || query.toUpperCase().includes('APPLE')) {
        response = "AAPL Analysis: Current price support at $175 level. RSI indicators in TECH module suggest near-oversold conditions. Institutional ownership (OWN) has stabilized after recent buyback (BUYB) announcements. Projected 12M upside remains 15% based on services growth metrics in REV module.";
      } else if (query.toUpperCase().includes('FED') || query.toUpperCase().includes('RATES')) {
        response = "MACRO Insight: WIRP module implies a 65% probability of a rate cut in September. Central bank asset tracker (CBAS) shows continued balance sheet tapering. Fixed income monitors (FICM) are pricing in a pivot by Q4.";
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        text: response
      }]);
    }, 1000);
  };

  return (
    <div className="bg-[#050505] h-full flex flex-col font-mono text-xs overflow-hidden">
      <div className="bg-[#1a1a1a] p-2 px-4 border-b border-[#333] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot size={14} className="text-[#ffb900]" />
          <span className="font-bold text-[#ffb900]">BLOOMBERGGPT - AI ASSISTANT</span>
        </div>
        <div className="flex items-center gap-2 text-[9px] text-gray-500">
          <Sparkles size={10} />
          <span>REAL-TIME ANALYSIS ENGINE</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-sm ${
              m.role === 'user'
                ? 'bg-blue-900/30 border border-blue-800 text-white'
                : 'bg-[#111] border border-[#222] text-[#ffb900]'
            }`}>
              <div className="text-[9px] font-bold uppercase mb-1 opacity-50">
                {m.role === 'user' ? 'Terminal Query' : 'Intelligence Engine'}
              </div>
              <p className="leading-relaxed">{m.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-[#333] bg-[#0a0a0a]">
        <form onSubmit={handleSubmit} className="flex gap-2 bg-black border border-[#444] p-1 pr-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask BloombergGPT about market drivers, ticker analysis, or macro data..."
            className="flex-1 bg-transparent text-white p-2 outline-none"
          />
          <button type="submit" className="text-[#ffb900] hover:text-white transition-colors">
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};
