import React from "react";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { LinkPreview } from "@/components/ui/link-preview";

export default function About() {
  return (
    <div className="flex justify-center items-center mx-4 mb-48 ">
      {/* <BackgroundBeams className="absolute inset-0 z-0" />  */}
      <CardSpotlight className="h-auto w-full max-w-3xl p-6 bg-transparent relative z-20">
        <p className="text-2xl font-bold relative z-20 mt-2 text-white text-center">
          What is K! Hacks?
        </p>
        <div className="text-neutral-200 mt-4 relative z-20 text-justify text-lg">
          <p>
            K! Hacks is a National-level Hackathon organized by the CEG Tech Forum. It invites participants to solve real-world challenges in domains like AI, Logistics, IoT, Space Tech, Web3, and AR/VR. The hackathon has two rounds: an online phase for innovative solutions and an offline phase for hands-on problem-solving. The top teams win prizes and showcase their projects at Kurukshetra 2024. Its a chance to network with industry leaders and gain tech insights.<LinkPreview url="https://www.abacus.org.in/" className="font-bold">
          CSEA
        </LinkPreview>
          </p>
        </div>
      </CardSpotlight>
    </div>
  );
}
