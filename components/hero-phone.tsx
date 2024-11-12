'use client'
import image from '../public/images/mobile3.png'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AppleIcon, Play } from 'lucide-react'
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroPhone() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-clear">
      

      <div className="relative isolate pt-0">
       
        <div className="mx-auto max-w-7xl px-6 py-0 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-0">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative mx-auto sm:mx-0 flex items-center gap-x-4 rounded-full bg-[#A8FF00] px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold h2 uppercase text-xl text-black">New Update</span>
                <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                <a href="#" className="flex text-black text-md font-semibold items-center gap-x-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Editions are now LIVE!
                  <ChevronRightIcon aria-hidden="true" className="-mr-2 h-5 w-5 text-neutral-900" />
                </a>
              </div>
            </div>
            <motion.h1 initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="mt-10 text-pretty text-[5.5rem] leading-[4.25rem] text-center sm:text-left h2 font-semibold sm:leading-[7.75rem] tracking-tighter text-neutral-100 sm:text-[10rem]">
              NEW MUSIC STARTS HERE
            </motion.h1>
            <p className="mt-8 mb-8 sm:mb-0 text-pretty text-center sm:text-left text-2xl/5 tracking-tight font-semibold sm:tracking-tighter dark:text-neutral-100 sm:text-3xl/8">
            A new way for artists to release music, capture fan data and earn more from their art.
            </p>
            
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl mx-auto p-0 py-4">
                <a
                    href="#"
                    className="rounded-xl w-full sm:w-64 h-16 bg-black dark:bg-white h2 uppercase px-8 py-3.5 text-2xl text-center font-semibold text-white dark:text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    Get started
                </a>
                    {/* App Store Button */}
                <button 
                onClick={() => window.open('your-ios-app-link', '_blank')}
                className="w-full sm:w-64 h-16 bg-neutral-900 hover:bg-gray-800 text-white rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                        <AppleIcon size={28} />
                        <div className="flex flex-col items-start">
                        <span className="text-xs leading-none">Download on the</span>
                        <span className="text-xl font-semibold leading-tight">App Store</span>
                        </div>
                </button>

                    {/* Google Play Button */}
                    <button 
                        onClick={() => window.open('your-android-app-link', '_blank')}
                        className="w-full sm:w-64 h-16 bg-neutral-900 hover:bg-gray-800 text-white rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <Play size={28} fill="currentColor" />
                        <div className="flex flex-col items-start">
                        <span className="text-xs leading-none">GET IT ON</span>
                        <span className="text-xl font-semibold leading-tight">Google Play</span>
                        </div>
                    </button>
                </div>
            
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect rx={36} width={316} height={684} />
                </clipPath>
              </defs>
              <path
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                fill="#1e1e1e"
              />
              <path
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                fill="#1e1e1e"
              />
              <foreignObject
                width={316}
                height={684}
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                transform="translate(24 24)"
              >
                <Image alt="TRAX phone mockup" src={image}/>
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
