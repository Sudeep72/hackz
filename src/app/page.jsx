"use client";

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
import ParticlesBg from "@/components/effects/particles-bg";

const Timer = dynamic(
  () => import("./sections/Timer").then((mod) => mod.TimerComponent),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="relative min-h-screen scroll-smooth cursor-default">
      <ParticlesBg />
      <Nav />
      <div className="mt-16">
        <div id="home" className="relative z-30">
          <HomePage />
        </div>
        <div className="relative z-10">
          <Timer />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="tracks" className="relative z-30">
          <Tracks />
        </div>
        <div id="sponsors" className="relative z-30">
          <Sponsors />
        </div>
        <div id="prizes" className="relative z-30">
          <Prize />
        </div>
        <div id="timeline" className="relative z-30">
          <TimeLine />
        </div>
        <div id="joinus" className="relative z-30">
          <JoinUs />
        </div>
        <div id="faqs" className="relative z-30">
          <Faq />
        </div>
        <div id="contact" className="relative z-30">
          <Footer />
        </div>
      </div>
    </div>
  );
}
