"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RotateText({
  letters,
  interval = 3000,
  duration = 0.1,
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const int = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % letters.length);
    }, interval);

    return () => clearInterval(int);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration }}
        className=" font-mono lg:w-36 border-2 text-center border-dashed border-teal-200/[.12] px-.5 backdrop-blur-sm bg-stone-950/40"
      >
        {letters[index]}
      </motion.span>
    </AnimatePresence>
  );
}
