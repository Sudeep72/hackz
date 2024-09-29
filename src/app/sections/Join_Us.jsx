import React, { useRef } from "react";
import Ripple from "@/components/magicui/ripple";
import { motion, useInView } from "framer-motion";

export default function JoinUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 100 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="flex flex-col justify-center items-center mx-4 mb-48 pt-20"
    >
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent p-8 rounded-xl shadow-lg backdrop-blur-xl bg-gradient-to-b from-[#0d1117]/80 to-[#161b22]/60">
          <div className="relative overflow-hidden p-10 rounded-3xl border border-teal-700/50 backdrop-blur-lg bg-teal-900/10">
            <Ripple className="opacity-30" />
            <div className="text-center mb-10">
              <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-t bg-clip-text leading-none text-transparent from-emerald-300 to-teal-600">
                Become a Part of HackZ!
              </h2>
              <p className="text-lg md:text-xl font-medium tracking-wide text-gray-300">
                Help shape the future by mentoring or volunteering with{" "}
                <span className="text-teal-400">HackZ</span>. Your expertise can
                inspire the next generation of innovators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
              {/* Call for Mentors Button */}
              <a
                href="https://forms.gle/QaDpNALP7UzXy12L8"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-36 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0d9488_0%,#0891b2_50%,#0d9488_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Call for Mentors{" "}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </a>

              {/* Call for Volunteers Button */}
              <a
                href="https://forms.gle/t7aqN92m7XERujow9"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-36 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0d9488_0%,#0891b2_50%,#0d9488_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Call for Volunteers{" "}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
