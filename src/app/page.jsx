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
import { ShootingStars } from "@/components/ui/shooting-stars";

const Timer = dynamic(
  () => import("./sections/Timer").then((mod) => mod.TimerComponent),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Nav />
      <div className="relative min-h-screen scroll-smooth cursor-default">
        <ParticlesBg />
        <ShootingStars trailColor="#0f766e" starColor="#ccfbf1" />
        <div className="mt-16">
          <div id="home">
            <HomePage />
          </div>
          <Timer />
          <div id="about">
            <About />
          </div>
          <div id="tracks">
            <Tracks />
          </div>
          <div id="sponsors">
            <Sponsors />
          </div>
          <div id="prizes">
            <Prize />
          </div>
          <div id="timeline">
            <TimeLine />
          </div>
          <div id="joinus">
            <JoinUs />
          </div>
          <div id="faqs">
            <Faq />
          </div>
          <div id="contact">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
