"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import faqData from '@/data/faqData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center bg-transparent p-4 my-20">
      <div className="max-w-5xl w-full bg-transparent">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-8">
          FAQs
        </h2>
        <div className="space-y-6">
          {faqData.map(({ id, question, answer }) => (
            <div
              key={id}
              className="border border-gray-600 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div
                className="p-4 flex justify-between items-center cursor-pointer bg-transparent"
                onClick={() => toggleOpen(id)}
              >
                <h3 className="text-xl font-semibold text-gray-100">{question}</h3>
                <div
                  className={`transition-transform duration-300 ${
                    openIndex === id ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  {openIndex === id ? <ChevronUp className="text-gray-100" /> : <ChevronDown className="text-gray-100" />}
                </div>
              </div>
              <div
                className={`transition-max-height duration-300 ease-in-out ${
                  openIndex === id ? 'max-h-96' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="p-4 text-base text-gray-400">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
