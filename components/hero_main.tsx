'use client'
import Image from "next/image";
import image from '../public/images/1.png'
import { ArrowDownRight } from "lucide-react";
import { motion } from 'framer-motion';

export default function HeroMain() {
    return (
      <div className="bg-clear sm:pb-24">
        <motion.div initial={{ opacity: 0, scale: 0.8, y: 100 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="mx-auto max-w-7xl py-0 sm:px-6 sm:py-0 lg:px-0">
          <div className="relative isolate overflow-hidden bg-gradient-to-tl from-[#A8FF0040] to-[#A8FF00] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#A8FF00" />
                  <stop offset={1} stopColor="#A8FF00" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-balance h2 text-black uppercase text-8xl leading-[4.75rem] tracking-tighter font-semibold sm:leading-[4.75rem] sm:tracking-tighter text-black sm:text-8xl">
                NEW MUSIC STARTS HERE
              </h2>
              <p className="mt-6 font-semibold text-2xl tracking-tighter leading-[1.25rem] text-neutral-900">
              A new way for artists to release music, capture fan data and earn more from their art.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-black h2 uppercase px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a href="#" className="text-lg/6 flex font-semibold text-black">
                <ArrowDownRight/>EXPLORE <span aria-hidden="true"></span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                alt="App screenshot"
                src={image}
                width={1824}
                height={1080}
                className="absolute left-0 top-0 w-[57rem] object-contain max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    )
  }
  