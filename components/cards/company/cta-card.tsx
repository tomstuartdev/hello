'use client'
import React, { useEffect, useState } from 'react';

const ScrollingBanner = () => {
  const [position, setPosition] = useState(0);
  
  // Array of placeholder images (replace with your actual image imports)
  const logos = [
    {
      src: "/images/musicbusinessworldwide.png",
      alt: "Music Business Worldwide"
    },
    {
      src: "/images/musiccrowns.png",
      alt: "Music Business Worldwide"
    },
    {
      src: "/images/linkup.png",
      alt: "Music Business Worldwide"
    },
    {
      src: "/images/wonderland.png",
      alt: "Music Business Worldwide"
    },
    {
      src: "/images/musicweek.png",
      alt: "Music Business Worldwide"
    }
  ];

  // Duplicate logos to create seamless loop
  const allLogos = [...logos, ...logos];

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        // Reset position when all original logos have scrolled
        if (prev <= -logos.length * 200) { // Adjusted for image width + margin
          return 0;
        }
        return prev - 0.5;
      });
    };

    const intervalId = setInterval(animate, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-full rounded-2xl bg-neutral-900 py-4 sm:py-12">
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(102, 102, 102, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(102, 102, 102, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px',
          mask: 'radial-gradient(circle at center, black, transparent)'
        }}
      />
      <div className="max-w-6xl mx-auto">
       
        <div className="relative overflow-hidden ">
          <div 
            className="flex items-center "
            style={{
              transform: `translateX(${position}px)`,
              transition: 'transform 0.02s linear'
            }}
          >
            {allLogos.map((logo, index) => (
              <div key={index} className="mx-6 flex-shrink-0">
                <img 
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-40 object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;