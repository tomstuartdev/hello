'use client'
import Image from 'next/image'
import Wonderland from '../public/images/wonderland.png'
import MusicCrowns from '../public/images/musiccrowns.png'
import MusicBusinessWorldwide from '../public/images/musicbusinessworldwide.png'
import LinkupTV from '../public/images/linkup.png'
import { Music } from 'lucide-react'
import { motion } from 'framer-motion';

export default function FeaturedIn() {
    return (
      <div className="bg-black dark:bg-clear py-24 dark:sm:py-12">
        <motion.div initial={{ opacity: 0, scale: 0.8, y: 100 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center h2 uppercase text-3xl/8 font-semibold text-neutral-100 dark:text-gray-100">
            AS FEATURED IN
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-auto sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-5xl lg:grid-cols-5">
            <Image
              alt="Wonderland"
              src={Wonderland}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="MusicCrowns"
              src={MusicCrowns}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="MusicBusinessWorldwide"
              src={MusicBusinessWorldwide}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="LinkUpTV"
              src={LinkupTV}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <Image
              alt="LinkUpTV"
              src={LinkupTV}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            
          </div>
        </motion.div>
      </div>
    )
  }
  