"use client";

import React from 'react';

interface BIOProps {
  ticker: string;
}

export const ExecutiveBio = ({ ticker }: BIOProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - BIO (Executive Biography)</span>
        <span>NY 20:50:44</span>
      </div>

      <div className="flex gap-6 mb-8">
        <div className="w-32 h-32 bg-[#111] border border-[#333] flex items-center justify-center text-gray-500 italic">
          No Image
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-white uppercase">Timothy D. Cook</h1>
          <div className="text-[#ffb900] font-bold uppercase text-[10px] mb-4">Chief Executive Officer - Since 2011</div>
          <div className="space-y-4 text-gray-300 leading-relaxed text-[11px]">
            <p>
              Mr. Cook has served as Chief Executive Officer of the Company since August 2011 and was elected to the Board in 2011. He previously served as Chief Operating Officer.
            </p>
            <p>
              Before joining the Company, Mr. Cook was vice president of Corporate Materials for Compaq and was responsible for procuring and managing all of Compaq’s product inventory. He also spent 12 years with IBM.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Education</h2>
          <ul className="space-y-2 text-white">
            <li className="flex justify-between border-b border-[#111] pb-1">
              <span>MBA, Duke University</span>
              <span className="text-gray-500">1988</span>
            </li>
            <li className="flex justify-between border-b border-[#111] pb-1">
              <span>BS, Auburn University</span>
              <span className="text-gray-500">1982</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Board Affiliations</h2>
          <ul className="space-y-2 text-white">
            <li className="border-b border-[#111] pb-1">NIKE, INC. - Board Member</li>
            <li className="border-b border-[#111] pb-1">National Football Foundation - Director</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
