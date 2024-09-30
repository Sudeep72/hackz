"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import RotateText from "@/components/effects/rotate-text";
import { LocateFixed, CalendarDays, Code } from "lucide-react";
import Spinner from "@/components/ui/spinner";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { LinkPreview } from "@/components/ui/link-preview";
import ShinyButton from "@/components/magicui/shiny-button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/utils";
import SparklesText from "@/components/magicui/sparkles-text";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Image from "next/image";
import temenos from "@/assets/sponsors/temenos'.png";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner size="large" />
      </div>
    ),
  }
);

export default function Home() {
  const [showGlobe, setShowGlobe] = useState(false);
  // const sparklesColors = { first: '#A7F3D0', second: '#6EE7B7' };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlobe(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const globeConfig = {
    pointSize: 4,
    globeColor: "#082f49",
    showAtmosphere: true,
    atmosphereColor: "#0369a1",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "#99f6e4",
    ambientLight: "#000",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.7,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.45,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="lg:my-[12vh] relative z-10 mx-auto max-w-8xl">
        <div className="flex flex-col lg:flex-row items-center justify-center text-center mt-12 md:mt-2009 px-4 md:px-12">
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="flex flex-col items-center text-center lg:items-start mb-6 mx-auto md:mb-0 gap-2"
          >
            {/* <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <Link href="https://cseaceg.org.in/" target="_blank">
                <ShinyButton className="rounded-full mb-4 bg-cyan-950/10">
                  <span className="text-xs sm:text-sm">
                    ✨{" "}
                    <span className="font-medium text-cyan-400 tracking-widest">
                      CSEA
                    </span>{" "}
                    presents
                  </span>
                </ShinyButton>
              </Link>
            </motion.div> */}

            <div className="flex gap-6 sm:gap-8">
              <a
                // href="https://www.temenos.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={temenos}
                  alt="Temenos Logo"
                  width={220}
                  height={100}
                />
              </a>
            </div>

            <motion.h1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="font-extrabold mb-4 flex text-7xl sm:text-8xl lg:text-9xl lg:w-[32rem] tracking-widest text-teal-100/80"
            >
              <RotateText letters={["H", "𝓗", "𝙷", "ℍ", "𝐇"]} interval={3400} />
              <RotateText
                letters={["𝕒", "𝓪", "ä", "ă", "𝖆", "a", "𝖺"]}
                interval={2300}
              />
              <RotateText letters={["𝓬", "𝙘", "ċ", "𝖈", "𝚌"]} interval={4200} />
              <RotateText
                letters={["𝗸", "𝔎", "𝓚", "K", "𝓴", "𝚔"]}
                interval={5100}
              />
              <RotateText letters={["𝐙", "𝗭", "𝓩", "Ź", "ℤ"]} interval={6500} />
            </motion.h1>
            <div className="mt-6 text-teal-100/80">
              {/* colors={sparklesColors} */}
              <SparklesText
                text="Zap. Zen. Zest. HackZ"
                className="text-3xl tracking-widest"
              />
            </div>
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex items-center text-base tracking-widest normal-case text-cyan-300/70 mx-0"
            >
              <span className="flex items-center">
                <Code color="#2AD3DF" />
                <span className="ml-2 mr-1.5 sm:mx-1">|</span>
              </span>
              24-Hour National Tech Marathon: Innovate, Create, Dominate!
            </motion.div>
            {/* <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-base tracking-widest normal-case text-cyan-300/70 mx-0"
            >
              November 9-10, 2024
            </motion.div> */}
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <Link href="https://cseaceg.org.in/" target="_blank">
                <ShinyButton className="rounded-full mt-3 p-3 bg-cyan-950/10">
                  <span className="text-xs sm:text-sm">
                    Proudly hosted by ✨{" "}
                    <span className="font-medium text-cyan-400 tracking-widest">
                      CSEA-CEG
                    </span>{" "}
                  </span>
                </ShinyButton>
              </Link>
            </motion.div>
            <div className="z-0 flex mt-4 mb-4 items-center justify-center">
              <AnimatedGradientText>
                <CalendarDays
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 pr-1"
                  size={16}
                  strokeWidth={2.5}
                />
                <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#d16ba5] via-[#86a8e7] to-[#5ffbf1] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  November 9-10, 2024
                </span>
                {/* <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
              </AnimatedGradientText>
            </div>
            {/* <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <AnimatedShinyText className="mx-0 mt-4 inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-emerald-600 hover:duration-300 hover:dark:text-emerald-400 border border-sky-400/10 rounded-[8px] backdrop-blur-sm ">
                <LocateFixed
                  className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  size={16}
                  strokeWidth={2.5}
                />
                <span className="text-xs ml-4 font-medium tracking-widest">
                  November 9-10, 2024
                </span>
              </AnimatedShinyText>
            </motion.div> */}
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <Link
                href="https://maps.app.goo.gl/JL1mG5KUfTrLS6Pg6"
                target="_blank"
              >
                <AnimatedShinyText className="mx-0 mt-4 inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-emerald-600 hover:duration-300 hover:dark:text-emerald-400 border border-sky-400/10 rounded-[8px] backdrop-blur-sm ">
                  <LocateFixed
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    size={16}
                    strokeWidth={2.5}
                  />
                  <span className="text-xs ml-4 font-medium tracking-widest">
                    CEG Campus, Anna University, Chennai
                  </span>
                </AnimatedShinyText>
              </Link>
            </motion.div>

            <div>
              <LinkPreview
                url="https://unstop.com/p/hackz24-computer-science-and-engineering-association-csea-ceg-anna-university-1171819"
                className="font-bold"
              >
                <ShimmerButton
                  shimmerColor="#ffffff"
                  shimmerSize="0.05em"
                  borderRadius="100px"
                  shimmerDuration="3s"
                  background="hsl(var(--background))"
                  className="shadow-2xl mt-6"
                >
                  <span className="whitespace-pre-wrap text-center text-base font-medium leading-none text-white dark:from-white dark:to-slate-900/10">
                    Register Now
                  </span>
                </ShimmerButton>
              </LinkPreview>
            </div>
          </motion.div>
          <div
            className={`w-full max-w-sm lg:w-1/2 h-96 lg:h-[520px] lg:max-w-none lg:ml-auto transition-opacity duration-1000 ease-in-out ${
              showGlobe ? "opacity-100" : "opacity-0"
            }`}
          >
            {showGlobe && <World data={sampleArcs} globeConfig={globeConfig} />}
          </div>
        </div>
      </div>
    </div>
  );
}
