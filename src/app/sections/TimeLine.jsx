"use client";

import React, { useRef } from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion, useInView } from "framer-motion";

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

export default function HackathonTimeline(){
const ref = useRef(null);
const isInView = useInView(ref, { once: true });
  const data = [
    {
      title: "30 September ",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-teal-400">
              Registrations Open & Commencement of Round 1
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide text-justify">
              Registrations for HackZ&apos;24 officially begin, inviting
              participants to embark on an innovative journey. In Round 1,
              participants will submit their ideation solutions to any problem
              statement within the specified domains, allowing them to showcase
              their creativity and problem-solving approach.
            </p>
          </AnimatedText>
        </div>
      ),
    },
    {
      title: "31 October",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-rose-400">
              Conclusion of Round 1
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide text-justify">
              Round 1 submissions close as teams submit their ideation
              solutions. Judges will carefully evaluate each submission based on
              the clarity, innovation, and feasibility of the proposed ideas,
              setting the stage for the next phase.
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
            <h3 className="text-xl font-semibold text-teal-400">
              Release of Selected Finalists
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide text-justify">
              The list of finalists advancing to Round 2 will be announced.
              These teams have impressed the judges with their ideation and will
              proceed to tackle more complex challenges in the final round.
            </p>
          </AnimatedText>
        </div>
      ),
    },
    {
      title: "16 November",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-cyan-600">
              Release of Round 2 Problem Statements
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide text-justify">
              New and intricate problem statements will be released for the
              second round. The finalists will now be challenged to develop
              their ideas into tangible solutions, working on real-world
              problems across impactful domains.
            </p>
          </AnimatedText>
        </div>
      ),
    },
    {
      title: "23 November",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-emerald-400">
              Commencement of 24-Hour Hackathon (Round 2)
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide text-justify">
              The final round kicks off with the 24-hour hackathon. Finalist
              teams will work tirelessly to develop working prototypes, refining
              their solutions under time constraints while displaying teamwork
              and technical prowess.
            </p>
          </AnimatedText>
        </div>
      ),
    },
    {
      title: "24 November",
      content: (
        <div className="space-y-2 mb-9">
          <AnimatedText>
            <h3 className="text-xl font-semibold text-rose-400">
              Conclusion of Hackathon
            </h3>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <p className="text-base text-teal-100/80 tracking-wide text-justify">
              The hackathon concludes with the submission of final solutions.
              The judges will evaluate the projects, and the winners will be
              announced, celebrating innovative ideas and impactful
              contributions to society.
            </p>
          </AnimatedText>
        </div>
      ),
    },
  ];

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={isInView ? "show" : "hidden"}
    variants={{
      hidden: { opacity: 0, y: 100 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
  >
    <div className="w-full max-w-4xl mx-auto p-6 rounded-xl shadow-lg pt-28">
      <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold bg-gradient-to-t bg-clip-text leading-none text-transparent from-teal-200 to-teal-800/90">
        Timeline
      </h2>
      <Timeline data={data} />
    </div>
    </motion.div>
  );
}
