'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import company1 from '../../../public/images/company1.png'
import company2 from '../../../public/images/company2.png'
import company3 from '../../../public/images/company3.png'
import company4 from '../../../public/images/company4.png'

const FeaturedArtistCard = () => {
  const artists = [
    {
      name: 'OUR STORY',
      image: company1,
      isNew: false,
      href: 'https://trax.so/blanco'
    },
    {
      name: 'OUR STORY',
      image: company2,
      isNew: false,
      href: 'https://trax.so/goldlink'
    },
    {
      name: 'OUR STORY',
      image: company3,
      isNew: false,
      href: 'https://trax.so/whitelies'
    },
    {
      name: 'OUR STORY',
      image: company4,
      isNew: false,
      href: 'https://trax.so/alienblaze'
    },
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
      className="relative bg-zinc-900 z-10 rounded-3xl overflow-hidden min-h-[550px] w-full group block"
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
      <div className="relative w-full min-h-[550px]">
        <Image
          src={artists[currentIndex].image}
          alt={artists[currentIndex].name}
          layout='fill'
          objectFit="cover"
          className="transition-opacity overflow-hidden duration-500"
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