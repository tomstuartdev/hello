'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Image1 from '../public/images/imgrambow.png'
import Image2 from '../public/images/imgcoults.png'
import Image3 from '../public/images/imgimani.png'
import Image4 from '../public/images/imgcoults.jpg'
import Image5 from '../public/images/img5.jpg'
import Image6 from '../public/images/imgalienblaze.png'
import Image7 from '../public/images/imgblanco.png'
import Image8 from '../public/images/img5.jpg'
import Image9 from '../public/images/imgkenny.png'
import { motion } from 'framer-motion';
import { ArrowDownRightIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PlayCircleFilled } from '@ant-design/icons';
import { ArrowDownRight, SearchCheck, SearchIcon } from 'lucide-react';

const HeroWithGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: Image1, title: "RAMBOW", subtitle: "WATCH", isComingSoon: false },
    { src: Image2, title: "COULTS", subtitle: "WATCH", isComingSoon: true },
    { src: Image3, title: "IMANI", subtitle: "WATCH", isComingSoon: false },
    { src: Image4, title: "LEWIS KNAGGS", subtitle: "WATCH", isComingSoon: false },
    { src: Image5, title: "WHITE LIES", subtitle: "WATCH", isComingSoon: true },
    { src: Image6, title: "ALIEN BLAZE", subtitle: "WATCH", isComingSoon: false },
    { src: Image7, title: "BLANCO", subtitle: "WATCH", isComingSoon: false },
    { src: Image8, title: "GOLDLINK", subtitle: "WATCH", isComingSoon: true },
    { src: Image9, title: "KENNY ALLSTAR", subtitle: "WATCH", isComingSoon: false },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="bg-clear">
        
        <div className="container mx-auto max-w-7xl px-4 mt-8 sm:mt-0 overflow-hidden">
        <h1 className='mb-8 text-3xl text-[#000] dark:text-[#A8FF00] font-semibold h2 uppercase flex'><ArrowDownRight className='inline-flex w-8 mr-1 h-8'/>FEATURED ARTISTS</h1>
        <motion.div 
              className="flex"
              animate={{ x: -currentIndex * 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {images.map((image, index) => (
                <motion.div 
                  key={index} 
                  className="flex-shrink-0 w-[400px] mr-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-clear rounded-xl shadow-lg overflow-hidden relative">
                    <Image 
                      src={image.src} 
                      alt={image.title} 
                      className="w-[400px] sm:w-[400px] h-[90%] sm:h-[500px] rounded-xl object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="absolute bottom-0 left-0 p-4 w-full">
                        <motion.h3 
                          className="text-left uppercase h2 font-semibold mb-0 text-white"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {image.title}
                        </motion.h3>
                        <motion.p 
                          className='text-left text-lg align-center flex text-white'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <ArrowDownRightIcon className='h-6 w-5 pr-1'/>{image.subtitle}
                        </motion.p>
                      </div>
                    </div>
                    {image.isComingSoon && (
                      <motion.div 
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="text-white text-2xl h2 uppercase font-bold">Coming Soon</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          <div className="overflow-hidden">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className='pt-12 sm:pt-12 text-center mx-auto'>
           {/*  <h1 className='h2 text-6xl sm:text-8xl uppercase dark:text-white text-black tracking-tighter'>WELCOME to tRAX</h1> */}
            {/* <h3 className='text-xl mx-8 mb-8 mt-4 max-w-3xl mx-auto dark:text-white text-black sm:text-2xl'>The ultimate platform for independent artists to share music, engage with fans, and build a sustainable career - all in one place.</h3> */}
            </motion.div>
            {/* <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25, delay: 1.25 }} className='pb-12 flex flex-col sm:flex-row sm:w-1/2 mx-auto gap-4'>
            
            <div className='flex px-4 py-4 bg-black dark:bg-[#A8FF00] w-full rounded-full mx-auto justify-center'>
            
            <PlayCircleFilled className="mr-2 w-auto text-2xl text-[#A8FF00] dark:text-[#000]"/>
            <a href="https://trax.so" className='h2 text-2xl uppercase w-auto text-[#FFF] dark:text-black'> GET STARTED</a>
            </div>
            <div className='flex px-4 py-4 bg-black dark:bg-[#FFFFFF20] w-full rounded-full mx-auto justify-center'>
            
            <SearchIcon className="mr-2 mt-1 w-auto text-2xl text-[#A8FF00] dark:text-[#FFF]"/>
            <a href="https://trax.so" className='h2 text-2xl uppercase w-auto text-[#FFF] dark:text-white'> BROWSE ARTISTS</a>
            </div>
            </motion.div> */}
            
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroWithGallery;