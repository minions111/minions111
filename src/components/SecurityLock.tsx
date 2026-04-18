"use client";

import React, { useState } from 'react';
import { Lock, Unlock, Shield } from 'lucide-react';

export const SecurityLock = () => {
  const [locked, setLocked] = useState(true);
  const [pin, setPin] = useState('');

  if (locked) {
    return (
      <div className="bg-[#050505] h-full flex flex-col items-center justify-center font-mono">
        <div className="bg-[#111] border border-[#222] p-8 max-w-sm w-full text-center">
          <div className="bg-[#ffb900]/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Lock size={40} className="text-[#ffb900]" />
          </div>
          <h1 className="text-[#ffb900] font-bold text-xl mb-2 uppercase">Terminal Locked</h1>
          <p className="text-gray-500 text-xs mb-8">Enter your Terminal SEC-ID to resume your workstation session.</p>

          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full bg-black border border-[#444] text-white p-3 text-center text-xl tracking-widest outline-none focus:border-[#ffb900] mb-4"
            placeholder="••••"
          />

          <button
            onClick={() => setLocked(false)}
            className="w-full bg-[#ffb900] text-black font-bold py-3 uppercase hover:bg-white transition-colors text-sm"
          >
            Authenticate
          </button>
        </div>
        <div className="mt-8 text-gray-700 text-[10px] flex items-center gap-2">
          <Shield size={12} />
          <span>Bloomberg SecureAccess Encryption Active</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black h-full flex flex-col items-center justify-center font-mono text-xs">
      <div className="bg-[#111] border border-[#00ff00]/30 p-8 text-center max-w-sm">
        <Unlock size={48} className="text-[#00ff00] mx-auto mb-4" />
        <h2 className="text-white font-bold text-lg mb-2 uppercase">Session Authenticated</h2>
        <p className="text-gray-500 mb-6">Security protocols passed. Type any command to begin.</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-black border border-[#222] p-2 text-gray-500">ID: BBG-7824</div>
          <div className="bg-black border border-[#222] p-2 text-[#00ff00]">LEVEL: PRO</div>
        </div>
      </div>
    </div>
  );
};
