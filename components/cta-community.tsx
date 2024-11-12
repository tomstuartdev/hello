import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import image from "../public/images/3.png"
import { ArrowDownRight } from 'lucide-react'
const benefits = [
  'Convert fans to followers',
  'Paid subscribers',
  'Scale your mailing list',
  'Notify your fans when you release',
  'Community chat',
  
]

export default function CTACommunity() {
  return (
    <div className="bg py-0 sm:py-12">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-0">
          <div className="mx-auto flex max-w-2xl flex-col shadow-xl gap-16 bg-[#EDFF00] sm:px-6 sm:py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              alt=""
              src={image}
              className="h-96 sm:-ml-20 w-full flex-none rounded-lg sm:rounded-none sm:rounded-r-lg object-cover shadow-xl lg:h-max-h lg:max-w-sm"
            />
            <div className="w-full flex-auto px-6 sm:px-0 sm:py-16 pb-16">
              <h2 className="text-pretty h2 tracking-tighter leading-[3.5rem] sm:leading-[4.5rem] uppercase text-7xl font-semibold sm:tracking-tighter text-black sm:text-8xl">
                OWN YOUR COMMUNITY
              </h2>
              <p className="mt-6 text-pretty text-xl font-semibold text-neutral-900">
              Create exclusive content and engage with your most dedicated supporters.
              </p>
              <ul role="list" className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 font-medium text-lg/7 text-black sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-8 flex-none" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <a href="#" className="text-xl/6 h2 flex uppercase px-4 py-4 bg-black rounded-lg font-semibold text-[#EDFF00]">
                <span className='mr-1' aria-hidden="true"><ArrowDownRight/></span>   TRY IT OUT
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
    </div>
  )
}
