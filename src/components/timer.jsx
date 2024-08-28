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
  const [timeRemaining, setTimeRemaining] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining(endDate));

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-4xl font-medium tracking-wider text-transparent md:text-5xl"
      >
        <p className="bg-gradient-to-r from-yellow-500 via-red-500 to-cyan-500 bg-clip-text text-transparent font-semibold uppercase tracking-tight text-6xl">
          Hackathon starts in <br /> <br />
        </p>
        <span className="font-medium">{timeRemaining.days} <span className="font-medium text-xl">Days</span></span> : 
        <span className="font-medium">{timeRemaining.hours} <span className="font-medium text-xl">Hours</span></span> : 
        <span className="font-medium">{timeRemaining.minutes} <span className="font-medium text-xl">Minutes</span></span> : 
        <span className="font-medium">{timeRemaining.seconds} <span className="font-medium text-xl">Seconds</span></span>
      </motion.h1>
    </LampContainer>
  );
}
