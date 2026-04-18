"use client";

import React from 'react';
import { Calendar, Globe, Clock } from 'lucide-react';

export const CentralBankCalendar = () => {
  const events = [
    { ctry: "US", bank: "FEDERAL RESERVE", date: "MAR 20", time: "14:00", event: "FOMC RATE DECISION", forecast: "5.50%", prior: "5.50%" },
    { ctry: "EU", bank: "ECB", date: "APR 11", time: "08:15", event: "MONETARY POLICY MEETING", forecast: "4.00%", prior: "4.00%" },
    { ctry: "UK", bank: "BOE", date: "MAR 21", time: "07:00", event: "MPC RATE ANNOUNCEMENT", forecast: "5.25%", prior: "5.25%" },
    { ctry: "JP", bank: "BOJ", date: "APR 26", time: "23:00", event: "POLOICY RATE BALANCE", forecast: "0.10%", prior: "0.10%" },
    { ctry: "CH", bank: "SNB", date: "MAR 21", time: "03:30", event: "ASSESSMENT DECISION", forecast: "1.75%", prior: "1.75%" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CenB - GLOBAL CENTRAL BANK CALENDAR</span>
        <span>PERIOD: MAR-APR 2024</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-900/20 border border-blue-500 p-4 flex flex-col items-center">
          <Calendar size={24} className="text-blue-400 mb-2" />
          <div className="text-white font-bold">NEXT FOMC</div>
          <div className="text-[#ffb900] text-lg font-bold">IN 2 DAYS</div>
        </div>
        <div className="bg-green-900/20 border border-green-500 p-4 flex flex-col items-center">
          <Globe size={24} className="text-green-400 mb-2" />
          <div className="text-white font-bold">ACTIVE REGIONS</div>
          <div className="text-[#ffb900] text-lg font-bold">12 BANKS</div>
        </div>
        <div className="bg-orange-900/20 border border-orange-500 p-4 flex flex-col items-center">
          <Clock size={24} className="text-orange-400 mb-2" />
          <div className="text-white font-bold">UPCOMING SPEECHES</div>
          <div className="text-[#ffb900] text-lg font-bold">4 TODAY</div>
        </div>
      </div>

      <table className="w-full">
        <thead className="text-gray-500 uppercase text-[9px] border-b border-[#333]">
          <tr>
            <th className="p-2 text-left font-normal">Ctry</th>
            <th className="p-2 text-left font-normal">Central Bank</th>
            <th className="p-2 text-left font-normal">Date / Time</th>
            <th className="p-2 text-left font-normal">Event</th>
            <th className="p-2 text-right font-normal">Forecast</th>
            <th className="p-2 text-right font-normal">Prior</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="p-2 text-blue-400 font-bold">{e.ctry}</td>
              <td className="p-2 text-white font-bold uppercase">{e.bank}</td>
              <td className="p-2 text-gray-400">{e.date} {e.time}</td>
              <td className="p-2 text-[#ffb900] font-bold uppercase text-[10px]">{e.event}</td>
              <td className="p-2 text-right text-white tabular-nums font-bold">{e.forecast}</td>
              <td className="p-2 text-right text-gray-500 tabular-nums">{e.prior}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
