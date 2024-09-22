import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
      <div className="relative h-auto w-full rounded-2xl max-w-4xl p-6 sm:p-8 z-20 mt-12 border-dashed bg-sky-950/20 border-2 border-sky-950/40 backdrop-blur-sm">
        <h3
          className={
            "text-2xl sm:text-4xl font-semibold mb-6 text-center bg-gradient-to-t bg-clip-text leading-none text-transparent from-sky-200 to-sky-800/90"
          }
        >
          What is HackZ’24?
        </h3>
        <p className="tracking-wider text-teal-100/80 sm:leading-8 text-justify sm:text-xl">
          HackZ’24, an initiative by{" "}
          <LinkPreview url="https://cseaceg.org.in/" className="font-bold">
            CSEA
          </LinkPreview>{" "}
          is a dynamic 24-hour hackathon that brings together the brightest
          minds to solve real-world challenges through technology and
          innovation. Open to engineering students, the hackathon encourages
          collaboration and out-of-the-box thinking, fostering an environment of
          learning and innovation. Participants will work in teams to solve
          industry-relevant problems, with the chance to create impactful
          solutions that can be scaled and implemented in the real world.
        </p>
      </div>
    </motion.div>
  );
}
