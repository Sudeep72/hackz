"use client";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import confetti from "canvas-confetti";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

const endDate = new Date("2024-11-24T06:32:00+05:30");

const calculateTimeRemaining = (endDate) => {
  const now = new Date();
  const timeDifference = endDate - now;

  if (timeDifference <= 0) {
    return null;
  }

  const positiveDiff = Math.max(0, timeDifference);

  const days = String(Math.floor(positiveDiff / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(
    Math.floor((positiveDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((positiveDiff % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(
    Math.floor((positiveDiff % (1000 * 60)) / 1000)
  ).padStart(2, "0");

  return { days, hours, minutes, seconds };
};

export function TimerComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(endDate)
  );
  const [isExpired, setIsExpired] = useState(false);

  const triggerConfetti = () => {
    const end = Date.now() + 60 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeRemaining(endDate);
      console.log("Timer update:", updatedTime); // Debug log

      if (!updatedTime) {
        setIsExpired(true);
        triggerConfetti(); // Trigger confetti on expiration
        clearInterval(timer); // Stop the timer if time has expired
      } else if (
        updatedTime.hours === "00" &&
        updatedTime.minutes === "00" &&
        updatedTime.seconds === "00"
      ) {
        setIsExpired(true);
        triggerConfetti(); // Trigger confetti on exact expiry
        clearInterval(timer); // Stop the timer
      } else {
        setTimeRemaining(updatedTime);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-teal-950/20 border-y-2 border-dashed border-teal-950/40 backdrop-blur-sm">
      <GridPattern
        width={16}
        height={16}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "block sm:hidden [mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
        )}
      />
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "hidden sm:block [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="h-24 sm:h-44 max-w-3xl mx-auto grid place-content-center rounded-lg">
        {isExpired ? (
          <div
            ref={ref}
            className={`flex anta-regular text-center bg-gradient-to-t from-teal-300 to-teal-300/80 bg-clip-text leading-none text-transparent dark:from-teal-200 dark:to-teal-600/60 text-2xl font-bold tracking-widest sm:text-5xl md:text-7xl gap-2
              ${
                isInView ? "opacity-1 blur-0" : "opacity-0 blur-md"
              } transition-all duration-500 ease-in-out`}
          >
            <div className="flex flex-col">
              <span>Time&apos;s Up!</span>
              <span className="font-medium text-xs sm:text-sm lg:text-2xl">
                Let your work shine—it&apos;s time to let go and let it speak!
              </span>
            </div>
          </div>
        ) : (
          <div
            ref={ref}
            className={`flex anta-regular text-center bg-gradient-to-t from-teal-300 to-teal-300/80 bg-clip-text leading-none text-transparent dark:from-teal-200 dark:to-teal-600/60 text-2xl font-bold tracking-widest sm:text-5xl md:text-7xl gap-2
              ${
                isInView ? "opacity-1 blur-0" : "opacity-0 blur-md"
              } transition-all duration-500 ease-in-out`}
          >
            <div className="flex flex-col">
              <span>{timeRemaining?.days}</span>
              <span className="font-medium text-xs sm:text-sm lg:text-xl">
                Days
              </span>
            </div>{" "}
            :
            <div className="flex flex-col">
              <span>{timeRemaining?.hours}</span>
              <span className="font-medium text-xs sm:text-sm lg:text-xl">
                Hours
              </span>
            </div>{" "}
            :
            <div className="flex flex-col">
              <span>{timeRemaining?.minutes}</span>
              <span className="font-medium text-xs sm:text-sm lg:text-xl">
                Minutes
              </span>
            </div>{" "}
            :
            <div className="flex flex-col">
              <span>{timeRemaining?.seconds}</span>
              <span className="font-medium text-xs sm:text-sm lg:text-xl">
                Seconds
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
