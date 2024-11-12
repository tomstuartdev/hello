'use client'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import image from '../public/images/2.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

const benefits = [
  'Convert fans to followers',
  'Create a fan club',
  'Limited edition releases',
  'Scale your mailing list',
  'Access to distribution services',
  'Access to community hub',
]

export default function CTA() {
  return (
    <>
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="bg py-0 sm:py-12">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-0">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-[#7E2CDD25] dark:bg-[#7E2CDD20] sm:px-6 sm:py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              alt=""
              src={image}
              className=" sm:-ml-20 w-full flex-none rounded-lg sm:rounded-none sm:rounded-r-xl object-contain shadow-xl lg:h-max-h lg:max-w-sm"
            />
            <div className="w-full px-6 pb-16 flex-auto">
              <h2 className="text-pretty h2 uppercase text-7xl font-semibold sm:tracking-tighter text-[#000] dark:text-[#F2F2F2] sm:text-8xl">
                GO DIRECT TO FAN
              </h2>
              <p className="mt-6 text-pretty font-semibold text-2xl leading-[1.25rem] tracking-tight text-black dark:text-neutral-100">
              Create exclusive content and engage with your most dedicated supporters.
              </p>
              <ul role="list" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-lg text-white sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-7 flex-none" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
              <a href="#" className="text-xl/6 flex gap-x-2 h2 uppercase px-4 py-3 bg-white rounded-lg font-semibold text-[#000]">
                <ArrowDownRight/>CREATE YOUR CHANNEL <span aria-hidden="true"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </motion.div>
    </>
  )
}
