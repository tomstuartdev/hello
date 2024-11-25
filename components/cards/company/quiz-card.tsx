'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const QuizCard = () => {
  const [paidOut, setPaidOut] = useState(0);
  const [artists, setArtists] = useState(0);
  const [fans, setFans] = useState(0);

  const animateValue = (start: number, end: number, duration: number, setValue: { (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (arg0: number): void; }) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    // Start animations when component mounts
    animateValue(0, 120, 2000, setPaidOut); // Animate to 120 over 2 seconds
    animateValue(0, 550, 2000, setArtists); // Animate to 1 over 2 seconds
    animateValue(0, 5000, 2000, setFans); // Animate to 20 over 2 seconds
  }, []);

  return (
    <div className="bg-zinc-900/90 rounded-3xl px-12 py-4 flex flex-col items-center justify-between relative overflow-hidden min-h-[400px] backdrop-blur-sm border border-white/5">
      {/* Subtle Grid Background with fade */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(102, 102, 102, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(102, 102, 102, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px',
          mask: 'radial-gradient(circle at center, black, transparent)'
        }}
      />

      <h3 className="text-[#A8FF00] h2 uppercase text-5xl/6 mt-12 font-medium text-center mb-0 relative">
        ${paidOut}k+
      </h3>
      <p className="text-white text-xl/6 mt-2 font-medium text-center mb-8 relative">
       paid out to artists
      </p>
      <h3 className="text-[#ED0000] h2 uppercase text-5xl/6 mt-2 font-medium text-center mb-0 relative">
        {artists}+
      </h3>
      <p className="text-white text-xl/6 font-medium mt-2 text-center mb-8 relative">
       artists onboard
      </p>
      <h3 className="text-[#EDFF00] h2 uppercase text-5xl/6 mt-2 font-medium text-center mb-0 relative">
       {fans}+
      </h3>
      <p className="text-white text-xl/6 mt-2 font-medium text-center mb-8 relative">
       superfans onboard
      </p>
    </div>
  );
};

export default QuizCard;