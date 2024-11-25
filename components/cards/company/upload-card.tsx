'use client'
import React from 'react';
import Image from 'next/image';
import background from '../../public/images/background.png'
import logo from '../../public/images/logo3d.png'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LocateIcon, MailIcon, MapPin, PhoneCallIcon, PinIcon } from 'lucide-react';

const UploadMusicCard = () => {
  return (
    <>
    {/* Cards */}
    <div className="rounded-2xl bg-neutral-900 p-8">
      <h2 className='text-5xl h2 tracking-tighter text-left mb-5 uppercase'>GET IN TOUCH</h2>
    <div className="grid md:grid-rows-3 xl:gap-2 ">
      {/* Card */}
      <div className="flex flex-col rounded-lg ">
        
        <div className="flex bg-neutral-800 p-2 mx-auto w-full rounded-xl my-auto  space-x-2.5">
         <MailIcon className="p-2 bg-neutral-700 h-8 w-8  rounded-xl"/>
           
          <div className="text-lg text-neutral-800 font-regular my-auto dark:text-neutral-300">
            support@trax.so
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="flex flex-col rounded-lg">
        
        <div className="flex bg-neutral-800 p-2 mx-auto w-full rounded-xl my-auto  space-x-2.5">
          <PhoneCallIcon className="p-2 bg-neutral-700 h-8 w-8 rounded-xl"/>
          <div className="text-md text-neutral-900 font-semibold my-auto dark:text-neutral-100">
          020 4602 4058
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="flex flex-col rounded-lg ">
        
        <div className="flex bg-neutral-800 p-2 mx-auto w-full rounded-xl my-auto justify-center space-x-2.5">
          <MapPin className="p-2 bg-neutral-700 h-8 w-8 rounded-xl"/>
          <div className="text-md font-semibold text-neutral-900 my-auto dark:text-neutral-100">
            Brickfields, E2 8HD, London
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default UploadMusicCard;