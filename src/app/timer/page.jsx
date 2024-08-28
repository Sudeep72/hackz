"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';

const calculateTimeRemaining = (endDate) => {
  const now = new Date();
  const timeDifference = endDate - now;

  if (timeDifference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  const days = String(Math.floor(timeDifference / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');

  return { days, hours, minutes, seconds };
};

export default function Timer() {
  const endDate = new Date('2024-10-10T00:00:00');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h1 className="text-center text-2xl font-semibold">Hackathon starts in</h1>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-4xl font-medium tracking-wider text-transparent md:text-7xl"
        >
          {timeRemaining.days}:{timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}
        </motion.h1>
      </LampContainer>
    </div>
  );
}
