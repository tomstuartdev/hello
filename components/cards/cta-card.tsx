'use client'
import React from 'react';
import Image from 'next/image';

const CTACard = () => {
  return (
    <div className="relative w-full h-full bg-zinc-900 rounded-2xl overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-zinc-900" />
      
      {/* Grid Background with fade */}
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

      {/* Animated holographic grain effect */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          animation: 'grain 8s steps(10) infinite'
        }}
      />
      
      {/* Content container */}
      <div className="relative h-full flex justify-between">
        {/* Left text section */}
        <div className="p-12 space-y-3">
          <h2 className="text-6xl sm:text-7xl tracking-tighter h2 uppercase font-bold relative group"
            style={{
              background: `linear-gradient(
                45deg,
                #A8FF00 0%,
                #EDFF00 25%,
                #A8FF00 50%,
                #EDFF00 75%,
                #A8FF00 100%
              )`,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shine 3s linear infinite'
            }}>
            Earn 90%
            {/* Holographic glow effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(
                  45deg,
                  #A8FF0020 0%,
                #EDFF0010 25%,
                #A8FF0010 50%,
                #EDFF0010 75%,
                #A8FF0010 100%
                )`,
                filter: 'blur(10px)',
                transform: 'translateY(2px)'
              }}
            />
          </h2>
          <p className="text-gray-200 text-2xl/6 max-w-[280px]">
            The best rates for creators on the market
          </p>
        </div>

        {/* Right image section - edge to edge */}
        <div className="relative w-2/5 h-full">
          <Image
            src="/images/2.png"
            alt="Prism feature"
            layout="fill"
            objectFit="cover"
            className="object-center"
            priority
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 to-transparent" />
          
          {/* PRISM text overlay */}
          <div className="absolute bottom-4 right-4 text-white font-medium text-sm bg-white/10 px-2 py-1 rounded backdrop-blur-sm">
            PRISM
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0) }
          10% { transform: translate(-2%, -2%) }
          20% { transform: translate(2%, 2%) }
          30% { transform: translate(-1%, 1%) }
          40% { transform: translate(1%, -1%) }
          50% { transform: translate(-2%, 2%) }
          60% { transform: translate(2%, -2%) }
          70% { transform: translate(-1%, -1%) }
          80% { transform: translate(1%, 1%) }
          90% { transform: translate(-2%, -2%) }
        }
      `}</style>
    </div>
  );
};

export default CTACard;