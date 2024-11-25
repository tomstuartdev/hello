'use client'
import React from 'react';
import QuizCard from './cards/company/quiz-card';
import UploadMusicCard from './cards/company/upload-card';
import ArtistCarousel from './cards/featured-artist-card';
import FeaturedArtistCard from './cards/company/featured-artist-card';
import ClassOfCard from './cards/company/class-of-card';
import InfoCard from './cards/company/info-card';
import CTACard from './cards/company/cta-card';
import { motion } from 'framer-motion';

const BentoCompany = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1 // Adds 0.1s delay between each child animation
      }
    }
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div 
      className="grid gap-4 px-0 pb-4 bg-clear max-w-[1440px] sm:mx-auto sm:mx-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
        {/* Left Column */}
        <div className="flex flex-col sm:col-span-2 gap-4 order-2 lg:order-none">
          <motion.div variants={cardVariants}>
            <QuizCard/>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <InfoCard/>
          </motion.div>
        </div>

        {/* Center Column */}
        <div className="flex relative flex-col sm:col-span-4 gap-4 order-1 lg:order-none">
          <motion.div variants={cardVariants}>
            <FeaturedArtistCard/>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <CTACard/>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex relative flex-col sm:col-span-2 gap-4 order-3 lg:order-none">
          <motion.div variants={cardVariants}>
            <UploadMusicCard/>
          </motion.div>

          <motion.div className='relative' variants={cardVariants}>
            <ClassOfCard/>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BentoCompany;