"use client";

import React from 'react';

export const EconomicReleasesDetail = () => {
  const releases = [
    { date: "04/15/26", time: "08:30", event: "CPI MoM", survey: "0.3%", actual: "0.4%", prior: "0.4%", importance: "High" },
    { date: "04/15/26", time: "08:30", event: "CPI YoY", survey: "3.4%", actual: "3.5%", prior: "3.2%", importance: "High" },
    { date: "04/12/26", time: "08:30", event: "Initial Jobless Claims", survey: "215k", actual: "212k", prior: "221k", importance: "Med" },
    { date: "04/10/26", time: "10:00", event: "U. of Mich. Sentiment", survey: "79.0", actual: "77.9", prior: "79.4", importance: "Med" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>ECOD - ECONOMIC RELEASE DETAILS</span>
        <span>NY 22:25:44</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Date/Time</th>
            <th>Event</th>
            <th className="text-right">Survey</th>
            <th className="text-right">Actual</th>
            <th className="text-right">Prior</th>
            <th className="text-center">Imp</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {releases.map((r, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 text-gray-400">{r.date} {r.time}</td>
              <td className="font-bold text-blue-400">{r.event}</td>
              <td className="text-right">{r.survey}</td>
              <td className={`text-right font-bold ${parseFloat(r.actual) > parseFloat(r.survey) ? 'text-red-500' : 'text-[#00ff00]'}`}>{r.actual}</td>
              <td className="text-right text-gray-500">{r.prior}</td>
              <td className="text-center">
                <span className={`w-2 h-2 rounded-full inline-block ${r.importance === 'High' ? 'bg-red-500 shadow-[0_0_4px_red]' : 'bg-[#ffb900]'}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
