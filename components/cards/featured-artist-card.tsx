'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedArtistCard = () => {
  const artists = [
    {
      name: 'BLANCO',
      image: '/images/imgblanco.png',
      isNew: true,
      href: 'https://trax.so/blanco'
    },
    {
      name: 'GOLDLINK',
      image: '/images/imggoldlink.png',
      isNew: false,
      href: 'https://trax.so/goldlink'
    },
    {
      name: 'WHITE LIES',
      image: '/images/imgwhitelies.jpg',
      isNew: true,
      href: 'https://trax.so/whitelies'
    },
    {
      name: 'ALIEN BLAZE',
      image: '/images/imgalienblaze.png',
      isNew: false,
      href: 'https://trax.so/alienblaze'
    },
    {
      name: 'COULTS',
      image: '/images/imgcoults.png',
      isNew: true,
      href: 'https://trax.so/coults'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent link navigation when clicking navigation buttons
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? artists.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent link navigation when clicking navigation buttons
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length);
  };

  return (
    <Link 
      href={artists[currentIndex].href}
      className="relative bg-zinc-900 rounded-3xl overflow-hidden min-h-[550px] w-full group block"
    >
      {/* Navigation Buttons */}
      <button 
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-black/70"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-black/70"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={artists[currentIndex].image}
          alt={artists[currentIndex].name}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500"
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* NEW Badge */}
      {artists[currentIndex].isNew && (
        <div className="absolute top-2 left-2 h2 bg-neutral-700/80 text-white text-lg px-4 py-1 rounded-2xl font-medium">
          NEW
        </div>
      )}

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-4">
        <h2 className="text-white text-6xl h2 uppercase font-bold tracking-tighter">
          {artists[currentIndex].name}
        </h2>
        <div className="text-white text-md font-medium mt-1 flex items-center gap-1">
          WATCH NOW
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute top-4 right-4 flex gap-1">
        {artists.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-3' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </Link>
  );
};

export default FeaturedArtistCard;