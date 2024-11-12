'use client'
import Image from 'next/image'
import image from '../public/images/4.png'
import { DollarCircleFilled } from '@ant-design/icons'
import { ArrowDownRight } from 'lucide-react'

export default function CTARevenue() {
    return (
      <div className="bg-clear">
        <div className="mx-auto max-w-7xl pb-24 sm:px-6 sm:py-0 lg:px-0">
          <div className="relative isolate overflow-hidden bg-[#EA0000] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
              <h2 className="text-balance text-white h2 uppercase text-7xl tracking-tighter leading-[3.5rem] font-semibold sm:leading-[4.75rem] sm:tracking-tighter text-black sm:text-8xl">
                FAIR REVENUE
              </h2>
              <p className="mt-6 text-pretty leading-[1.25rem] tracking-tight font-semibold text-2xl/8 text-neutral-100">
              Keep 90% of your earnings. Set your own prices and subscription tiers.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="/earnings-calculator"
                  className="rounded-md h2 gap-x-1 flex uppercase bg-white px-4 py-4 text-xl font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <DollarCircleFilled className='mr-1'/>
                  CALCULATE EARNINGS
                </a>
                <a href="#" className="text-lg/6 flex font-regular text-white">
                  <ArrowDownRight className='mr-1'/> START EARNING
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                alt="App screenshot"
                src={image}
                width={1824}
                height={1080}
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  