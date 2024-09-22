"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";

const ParticlesBg = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="fixed h-screen w-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-[-10] fixed top-2.3 right-0  h-4/5 w-2/3 bg-blue-800/20 blur-[150px] md:blur-[240px] min-[1800px]:blur-[400px] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-[-10] fixed h-2/3 w-1/3 top-3/4 left-1/5 bg-teal-500/20 blur-[150px] md:blur-[240px] min-[1800px]:blur-[400px] rounded-full"
      ></motion.div>
      <Particles
        className="absolute inset-0"
        quantity={250}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticlesBg;
