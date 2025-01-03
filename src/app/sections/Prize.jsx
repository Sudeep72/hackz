import React, { useRef } from "react";
import ShineBorder from "@/components/magicui/shine-border";
import { motion, useInView } from "framer-motion";
import HyperText from "@/components/magicui/hyper-text";

export default function Prize() {
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
    >
      <div className="flex flex-col items-center p-6 cursor-default">
        <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold bg-gradient-to-t bg-clip-text leading-none text-transparent from-teal-200 to-teal-800/90 mb-12 pt-20">
          Prizes
        </h2>

        <div className="flex flex-col gap-8 w-full items-center">
          {/* Prize Pool */}
          <ShineBorder
            className="relative p-6 text-center w-full max-w-md bg-gray-800 rounded-xl border border-gray-600 shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            color={["#FFD700", "#00BFFF", "#FF8C00"]}
          >
            <h3 className="text-xl mb-2 text-yellow-400"> Prize Pool </h3>
            <HyperText
              className="text-5xl font-bold text-yellow-400"
              text="₹ 1,70,000"
            />
          </ShineBorder>

          {/* Prizes */}
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-full md:max-w-5xl">
            <ShineBorder
              className="relative p-6 text-center flex-1 w-full bg-gray-800 rounded-xl border border-gray-600 shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              color={["#FE8FB5", "#00FFFF", "#FF1493"]}
            >
              <h3 className="text-xl mb-2 text-red-400"> 1st Prize </h3>
              <HyperText
                className="text-4xl font-bold text-red-400 w-full"
                text="₹ 75,000"
              />
            </ShineBorder>

            <ShineBorder
              className="relative p-6 text-center flex-1 w-full bg-gray-800 rounded-xl border border-gray-600 shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              color={["#00FF00", "#FF4500", "#32CD32"]}
            >
              <h3 className="text-xl mb-2 text-lime-400"> 2nd Prize </h3>
              <HyperText
                className="text-4xl font-bold text-lime-400 w-full"
                text="₹ 50,000"
              />
            </ShineBorder>

            <ShineBorder
              className="relative p-6 text-center flex-1 w-full bg-gray-800 rounded-xl border border-gray-600 shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              color={["#4B0082", "#FFD700", "#9370DB"]}
            >
              <h3 className="text-xl mb-2 text-purple-400"> 3rd Prize </h3>
              <HyperText
                className="text-4xl font-bold text-purple-400 w-full"
                text="₹ 25,000"
              />
            </ShineBorder>
          </div>

          {/* Special Awards */}
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-md">
            <ShineBorder
              className="relative p-6 text-center flex-1 w-full bg-gray-800 rounded-xl border border-gray-600 shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              color={["#FF69B4", "#7FFF00", "#FF1493"]}
            >
              <h3 className="text-xl mb-2 text-pink-400">Empowering Women</h3>
              <p className="text-3xl font-bold text-pink-400">
                ♀ Leading Women&apos;s Team
              </p>
            </ShineBorder>
          </div>

          {/* Track Prize */}
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-full md:max-w-3xl">
            <ShineBorder
              className="relative p-6 text-center flex-1 w-full bg-gray-800 rounded-xl border border-gray-600 shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              color={["#1E90FF", "#FFD700", "#FF6347"]}
            >
              <h3 className="text-3xl font-bold text-blue-400">
                Special Track Prize
              </h3>
            </ShineBorder>

            <ShineBorder
              className="relative p-6 text-center flex-1 w-full bg-gray-800 rounded-xl border border-gray-600 shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              color={["#00BFFF", "#FF6347", "#32CD32"]}
            >
              <h3 className="text-3xl font-bold text-blue-400">Track Prize</h3>
            </ShineBorder>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
