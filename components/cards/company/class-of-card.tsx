'use client'
import React from 'react';
import Image from 'next/image';
import traxLogo from '../../../public/images/logo3d.png'

const ClassOfCard = () => {
  return (
    <div className="relative rounded-xl min-h-[400px] sm:h-full w-full group">
      {/* Glassmorphic border container */}
      <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-b from-white/10 to-white/05">
        {/* Inner container with glass effect */}
        <div className="relative h-full w-full rounded-xl overflow-hidden  backdrop-blur-sm"
          style={{
            background: '#A8FF00',
          }}>
          {/* Background Image */}
          <div className="absolute h-full inset-0">
            <Image
              src={traxLogo} // Replace with your actual starfield background image path
              alt="Trax Logo"
              layout=""
              objectFit="cover"
              className="transition-transform duration-700 opacity-50 group-hover:scale-105 "
              priority
            />
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative h-full w-full flex flex-col items-center justify-center p-8">
            {/* Text Content */}
            <div className="text-center">
              <div className="text-white h2 uppercase text-3xl font-medium -mb-2 tracking-tighter">
                JOIN THE DAO
              </div>
              <div 
                className="text-[6rem]/[6rem] font-bold h2 mb-2 px-2 tracking-tighter"
                style={{
                  background: 'linear-gradient(180deg, #EDFF00 0%, #A8FF00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(74, 222, 128, 0.3))'
                }}
              >
                $TRAX
              </div>
            </div>

            {/* Button with glass effect */}
            <button 
              className="relative group px-8 py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.15)'
              }}
            >
              <span className="relative z-10 h2 uppercase text-white font-medium tracking-tighter text-2xl">
                GET $TRAX
              </span>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassOfCard;