'use client'
import React from 'react';
import QuizCard from './cards/quiz-card';
import UploadMusicCard from './cards/upload-card';
import ArtistCarousel from './cards/featured-artist-card';
import FeaturedArtistCard from './cards/featured-artist-card';
import ClassOfCard from './cards/class-of-card';
import InfoCard from './cards/info-card';
import CTACard from './cards/cta-card';
import { motion } from 'framer-motion';

const BentoGrid = () => {
  return (
    <div className="grid gap-4 px-4 pb-4 bg-clear max-w-[1440px] sm:mx-auto sm:mx-0">
      <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
        {/* Left Column */}
        <div className="flex flex-col sm:col-span-2 gap-4 order-2 lg:order-none">
          
          <QuizCard/>

          <InfoCard/>
        </div>

        {/* Center Column */}
        <div className="flex flex-col sm:col-span-4 gap-4 order-1 lg:order-none">
        <FeaturedArtistCard/>
         

          <CTACard/>
        </div>

        {/* Right Column */}
        <motion.div className="flex flex-col sm:col-span-2 gap-4 order-3 lg:order-none">
        <UploadMusicCard/>

          <ClassOfCard/>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoGrid;