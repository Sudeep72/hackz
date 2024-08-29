"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import dynamic from "next/dynamic";
import Nav from "@/components/nav/header";
import HomePage from "./sections/Home";
import About from "./sections/About";
import Tracks from "./sections/Tracks";
import TimeLine from "./sections/TimeLine";

const Timer = dynamic(
  () => import("./sections/Timer").then((mod) => mod.TimerComponent),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-20">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Nav />
      <div className="mt-24">
        <div className="relative z-30">
          <HomePage />
        </div>
        <div className="relative z-10">
          <Timer />
        </div>
        <About />
      </div>
      <div className="relative z-30">
        <Tracks />
        <TimeLine />
      </div>
    </div>
  );
}
