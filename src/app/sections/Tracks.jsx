"use client";

import React, { useRef } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { tracks } from "@/data/tracks";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";
import WomenEmpowerment from "@/assets/tracks/womenempowerment.png";
import { Gem } from "lucide-react";

export default function Tracks() {
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
    <div
      className="relative flex flex-col justify-center items-center pt-20 mb-24"
      id="tracks"
    >
      <div className="relative z-10">
        <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold bg-gradient-to-t bg-clip-text leading-none text-transparent from-teal-200 to-teal-800/90 mb-12">
          Tracks
        </h2>
      </div>
      <Card title="Women Empowerment" icon={<AnimatedGem />}>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2}
        />
      </Card>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={tracks} />
      </div>
    </div>
    </motion.div>
  );
}

const AnimatedGem = () => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Gem size={30} color="#3acef2" />
    </motion.div>
  );
};

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-[16rem] mx-auto p-4 relative h-auto rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-300 ease-in-out">
          <h2 className="mb-4 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-cyan-500 transition-transform duration-300 ease-in-out group-hover/canvas-card:scale-110">
            Special Prize
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="transition-transform duration-300 ease-in-out group-hover/canvas-card:scale-110">
              {icon}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 transition duration-300 ease-in-out">
          <Image
            src={WomenEmpowerment}
            alt="WomenEmpowerment"
            width={90}
            height={90}
            className="mb-4 transition-transform duration-300 ease-in-out group-hover/canvas-card:scale-110"
          />
          <h2 className="dark:text-white text-xl text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition-transform duration-300 ease-in-out mt-8">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
