"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

const AnimatedText = ({ children, delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="inline-block text-lg font-semibold animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  >
    {children}
  </motion.span>
);

export default function HackathonTimeline() {
  const data = [
    {
      title: "1 October",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-teal-400">
              Registration Opens
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide">
              Get ready to embark on an exciting journey! Registration for our
              hackathon begins today.
            </p>
          </AnimatedText>
        </div>
      ),
    },
    {
      title: "20 October",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-rose-400">
              Registration Closes & Round 1 Begins
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide">
              Last day to register! Online screening (Round 1) kicks off today.
            </p>
          </AnimatedText>
        </div>
      ),
    },
    {
      title: "24 October",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-sky-400">
              Round 1 Concludes
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide">
              The online screening phase comes to an end. Good luck to all
              participants!
            </p>
          </AnimatedText>
        </div>
      ),
    },
    {
      title: "26 October",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-teal-400">
              Finalists Announced
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide">
              The moment of truth! Finalists for Round 2 will be revealed today.
            </p>
          </AnimatedText>
        </div>
      ),
    },
    {
      title: "28 October",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-cyan-600">
              Problem Statements Released
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide">
              Finalists, get ready! Problem statements for Round 2 will be
              announced.
            </p>
          </AnimatedText>
        </div>
      ),
    },
    {
      title: "9 November",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-emerald-400">
              24-Hour Hackathon Begins
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide">
              The main event starts now! 24 hours of intense coding and
              creativity.
            </p>
          </AnimatedText>
        </div>
      ),
    },
    {
      title: "10 November",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-rose-400">
              Hackathon Concludes
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide">
              Times up! The 24-hour hackathon comes to an end. Congratulations
              to all participants!
            </p>
          </AnimatedText>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-xl shadow-lg pt-28">
      <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold bg-gradient-to-t bg-clip-text leading-none text-transparent from-teal-200 to-teal-800/90">
        Timeline
      </h2>
      <Timeline data={data} />
    </div>
  );
}
