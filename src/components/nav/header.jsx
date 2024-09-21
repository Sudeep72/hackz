import React, { useState, useEffect } from "react";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      className={`fixed top-0 left-0 w-full z-50`}
    >
      <div
        className={`mx-auto max-w-screen-xl transition-all pt-2 ${
          isScrolled ? "px-4" : ""
        }`}
      >
        <div
          className={`transition-all rounded-full  duration-300 ${
            isScrolled
              ? "backdrop-blur-3xl bg-teal-900/20 border-2 border-teal-950/40"
              : "border-2 border-transparent"
          }`}
        >
          <div className="h-16 flex items-center justify-between px-6 text-sm">
            {/* Desktop */}
            <MainNav isScrolled={isScrolled} />
            {/* Mobile */}
            <MobileNav isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
