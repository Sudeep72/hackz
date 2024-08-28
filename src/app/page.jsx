"use client";
import Link from "next/link";
import Nav from "@/components/header";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import Tracks from "@/components/track";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
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
        <BackgroundBeams className="absolute inset-0 z-0" />
        <Nav />
        <div className="relative z-10 mt-24">
          <Link href="/test1">Home</Link>
          <Link href="/test2">Timer</Link>
          <Link href="/test3">About</Link>
          <Link href="/test4">Tracks</Link>
          <Tracks />
        </div>
      </div>
    </>
  );
}
