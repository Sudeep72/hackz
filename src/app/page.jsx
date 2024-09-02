"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import dynamic from "next/dynamic";
import Nav from "@/components/nav/header";
import HomePage from "./sections/Home";
import About from "./sections/About";
import Tracks from "./sections/Tracks";
import TimeLine from "./sections/TimeLine";
import Sponsors from "./sections/Sponsors";
import Prize from "./sections/Prize";
import JoinUs from "./sections/Join_Us";
import Faq from "./sections/Faq";
import Footer from "@/components/Footer";
// import BackgroundBeams from "@/components/ui/background-beams";

const Timer = dynamic(
  () => import("./sections/Timer").then((mod) => mod.TimerComponent),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="relative min-h-screen scroll-smooth cursor-default">
      {/* <BackgroundBeams className="absolute inset-0 z-0" /> */}
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
      <div className="mt-16">
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
        <Sponsors />
        <Prize />
        <TimeLine />
        <JoinUs />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
