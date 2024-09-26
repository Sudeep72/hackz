import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import temenos from "@/assets/sponsors/temenos.png";
import unstop from "@/assets/sponsors/unstop.png";

export default function Sponsors() {
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
      id="sponsors"
    >
      <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold bg-gradient-to-t bg-clip-text leading-none text-transparent from-teal-200 to-teal-800/90 mb-12">
        Sponsors
      </h2>
      <div className="sm:mt-4">
        <div className="w-full">
          <h3 className="text-center text-emerald-500 text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-wide mb-4 sm:mb-6 xl:mb-8">
            Exclusive Sponsor
          </h3>
          <div className="flex justify-center items-center gap-6 sm:gap-8">
            <a
              href="https://www.temenos.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={temenos}
                alt="Temenos Logo"
                width={320}
                height={200}
                className="py-3 px-6 rounded-md backdrop-blur-sm border-2 transition-all transform hover:scale-105 hover:shadow-lg duration-300"
              />
            </a>
          </div>
        </div>
        <div className="mt-8 sm:mt-14 w-full">
          <h3 className="text-center text-violet-500 text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-wide mb-4 sm:mb-6 xl:mb-8">
            Powered By
          </h3>
          <div className="flex justify-center items-center gap-6 sm:gap-8">
            <a
              href="https://unstop.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={unstop}
                alt="Unstop Logo"
                width={280}
                height={200}
                className="py-4 px-6 rounded-md backdrop-blur-sm border-2 transition-all transform hover:scale-105 hover:shadow-lg duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};
