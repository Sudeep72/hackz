"use client";

import React, { useState, useRef } from "react";
import { TransitionPanel } from "@/components/effects/transition-panel";
import faqData from "@/data/faqData";
import { motion, useInView } from "framer-motion";

export default function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = faqData;

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={isInView ? "show" : "hidden"}
    variants={{
      hidden: { opacity: 0, y: 100 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
    className="flex flex-col justify-center items-center mx-4 mb-48 pt-20"
  >
    <div className="max-w-6xl mx-auto py-20 relative px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-t bg-clip-text leading-none text-transparent from-teal-200 to-teal-800/90 mb-12">
        FAQs
      </h2>
      <div className="mb-4 flex space-x-2">
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer rounded-md px-3 py-1 text-sm font-medium ${
              activeIndex === index
                ? "bg-sky-950/30 text-sky-400"
                : "bg-sky-950/20 text-teal-100"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="overflow-hidden">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
          }}
          className={"backdrop-blur-sm"}
        >
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className="py-2 rounded-3xl bg-teal-950/20 border-2 border-dashed border-teal-950/40"
            >
              {item.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`px-6 py-4 ${
                    index === item.faqs.length - 1
                      ? ""
                      : "border-b-2 border-dashed border-teal-950/40"
                  }`}
                >
                  <h3 className="font-semibold bg-gradient-to-t bg-clip-text leading-none text-transparent from-sky-200 to-sky-800/90 text-lg sm:text-xl">
                    {faq.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-300">
                    {faq.content}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  </motion.div>
  );
}
