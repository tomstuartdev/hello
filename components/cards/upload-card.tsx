'use client'
import React from 'react';
import Image from 'next/image';
import background from '../../public/images/background.png'
import logo from '../../public/images/logo3d.png'
import { motion } from 'framer-motion';
import Link from 'next/link';

const UploadMusicCard = () => {
  return (
    <div className="rounded-3xl pb-8 flex flex-col items-center justify-between relative overflow-hidden min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={background}
          alt="Card Background"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-between w-full h-full">
      
        {/* X Logo Container */}
        <div className="relative w-full h-full">
      <motion.div
        className="relative w-full h-full"
        animate={{
          y: [0, -10, 0],
          rotate: [-1, 1, -1], // Subtle rotation
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          rotateTransition: {
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        {/* Glow effect container */}
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute inset-0"
          style={{
            filter: 'blur(20px)',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
          }}
        />

        {/* Logo image */}
        <Image
          src={logo}
          alt="X Logo"
          fill
          priority
          className="object-contain relative z-10"
          sizes="400px 200px"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))'
          }}
        />
      </motion.div>
    </div>
        
       

        {/* Upload Button */}
        <Link href='https://trax.so'>
        <button 
          className="bg-gradient-to-b mb-12 sm:mb-4 from-[#EDFF00] to-[#A8FF00] h2 uppercase text-black font-bold text-2xl py-3 px-12 rounded-xl relative transform hover:scale-105 transition-transform"
          style={{
            boxShadow: '0 0 20px rgba(253, 224, 71, 0.3)',
            textShadow: '0 1px 0 rgba(0,0,0,0.1)'
          }}
        >
          UPLOAD MUSIC
        </button>
        </Link>
      </div>
    </div>
  );
};

export default UploadMusicCard;