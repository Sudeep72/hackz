"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

const endDate = new Date("2024-10-10T00:00:00");

const calculateTimeRemaining = (endDate) => {
  const now = new Date();
  const timeDifference = endDate - now;

  if (timeDifference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const days = String(
    Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  ).padStart(2, "0");
  const hours = String(
    Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(
    Math.floor((timeDifference % (1000 * 60)) / 1000)
  ).padStart(2, "0");

  return { days, hours, minutes, seconds };
};

export function TimerComponent() {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(endDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(endDate));
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
      <motion.div className="h-24 sm:h-44 max-w-3xl mx-auto grid place-content-center rounded-lg">
        <div className="flex anta-regular text-center text-teal-100/80 text-2xl font-bold tracking-widest sm:text-5xl md:text-7xl gap-2">
          <div className="flex flex-col">
            <span>{timeRemaining.days}</span>
            <span className="font-medium text-xs sm:text-sm lg:text-xl">
              Days
            </span>
          </div>{" "}
          :
          <div className="flex flex-col">
            <span>{timeRemaining.hours}</span>
            <span className="font-medium text-xs sm:text-sm lg:text-xl">
              Hours
            </span>
          </div>{" "}
          :
          <div className="flex flex-col">
            <span>{timeRemaining.minutes}</span>
            <span className="font-medium text-xs sm:text-sm lg:text-xl">
              Minutes
            </span>
          </div>{" "}
          :
          <div className="flex flex-col">
            <span>{timeRemaining.seconds}</span>
            <span className="font-medium text-xs sm:text-sm lg:text-xl">
              Seconds
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
