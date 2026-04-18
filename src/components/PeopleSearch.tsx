"use client";

import React, { useState } from 'react';
import { Search, User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

export const PeopleSearch = () => {
  const [query, setQuery] = useState("");
  const people = [
    { name: "MICHAEL BLOOMBERG", role: "FOUNDER", firm: "BLOOMBERG LP", location: "NEW YORK", status: "ACTIVE" },
    { name: "JANE DOE", role: "HEAD OF TRADING", firm: "GOLDMAN SACHS", location: "LONDON", status: "OFFLINE" },
    { name: "JOHN SMITH", role: "CHIEF ECONOMIST", firm: "JPMORGAN", location: "HONG KONG", status: "ACTIVE" },
    { name: "ALICE WONG", role: "PORTFOLIO MANAGER", firm: "BLACKROCK", location: "SINGAPORE", status: "ACTIVE" },
    { name: "BOB MILLER", role: "MACRO STRATEGIST", firm: "BRIDGEWATER", location: "WESTPORT", status: "OFFLINE" },
  ];

  const filtered = people.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.firm.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>PEOP - BLOOMBERG PROFESSIONAL DIRECTORY</span>
        <span>PEOPLE & BIOGRAPHIES</span>
      </div>

      <div className="mb-6 relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, firm, or role..."
          className="w-full bg-[#111] border border-[#444] text-white p-2 pl-10 outline-none focus:border-[#ffb900]"
        />
        <Search size={16} className="absolute left-3 top-2.5 text-gray-500" />
      </div>

      <div className="grid grid-cols-1 gap-2">
        {filtered.map((p, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-4 flex justify-between items-center hover:border-[#ffb900] cursor-pointer group">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-blue-900/30 border border-blue-500 rounded-full flex items-center justify-center text-blue-500 font-bold">
                {p.name[0]}
              </div>
              <div>
                <div className="text-white font-bold uppercase group-hover:text-[#ffb900]">{p.name}</div>
                <div className="text-gray-500 text-[10px] uppercase">{p.role} | {p.firm}</div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
               <span className={p.status === 'ACTIVE' ? "text-[#00ff00] text-[9px] font-bold" : "text-gray-600 text-[9px] font-bold"}>
                 {p.status}
               </span>
               <div className="flex gap-2 text-gray-500">
                 <Mail size={12} className="hover:text-white" />
                 <Phone size={12} className="hover:text-white" />
                 <MapPin size={12} className="hover:text-white" />
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
