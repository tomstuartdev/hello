'use client'
import React from 'react';
import Image from 'next/image';
import backgroundImage from '../../../public/images/backgrounddots.png'

const InfoCard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage} // Replace with your background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
          priority
        />
      </div>

      {/* Dotted texture overlay */}
      

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/0 z-20" />

      {/* Background color (as fallback) */}
      

      {/* Content container */}
      <div className="relative z-30 h-full w-full p-6 flex flex-col items-center">
        {/* Text content */}
        <h3 className="text-white text-2xl/6 text-center mt-12 mb-0 font-medium max-w-[300px]">
          We are a proud member of the Internet Computer ecosystem.
        </h3>

        {/* Vinyl/CD Image Container */}
        <div className="relative w-[20rem] h-[10rem]">
          <Image
            src="/images/dfinity.png" // Replace with your vinyl/CD image path
            alt="Vinyl Record"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
            priority
          />
          
          
        </div>
      </div>
    </div>
  );
};

export default InfoCard;