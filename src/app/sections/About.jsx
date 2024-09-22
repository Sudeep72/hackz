import React from "react";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { LinkPreview } from "@/components/ui/link-preview";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center mx-4 mb-48 pt-20">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-6">
        About
      </h2>
      <CardSpotlight className="h-auto w-full max-w-4xl p-6 bg-transparent relative z-20 mt-12">
        <p className="text-2xl font-bold relative z-20 mt-2 text-white text-center">
          What is HackZ’24?
        </p>
        <div className="text-neutral-200 mt-4 relative z-20 text-justify text-xl">
          <p>
            HackZ’24, an initiative by{" "}
            <LinkPreview url="https://cseaceg.org.in/" className="font-bold">
              CSEA
            </LinkPreview>{" "}
            is a dynamic 24-hour hackathon that brings together the brightest
            minds to solve real-world challenges through technology and
            innovation. Open to engineering students, the hackathon encourages
            collaboration and out-of-the-box thinking, fostering an environment
            of learning and innovation. Participants will work in teams to solve
            industry-relevant problems, with the chance to create impactful
            solutions that can be scaled and implemented in the real world.
          </p>
        </div>
      </CardSpotlight>
    </div>
  );
}
