'use client'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import { CloudLightning, DollarSignIcon } from 'lucide-react'
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Direct distribution',
    description:
      'Share your music directly with fans. No middlemen, no gatekeepers.',
    href: '#',
    icon: CloudLightning,
  },
  {
    name: 'Community building',
    description:
      'Create exclusive content and engage with your most dedicated supporters.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Fair revenue',
    description:
      'Keep 90% of your earnings. Set your own prices and subscription tiers.',
    href: '#',
    icon: DollarSignIcon,
  },
]

export default function Features() {
  return (
    <>
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.75 }} className="dark:bg-black bg-[#A8FF00] mb-24 mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="text-pretty h2 text-6xl uppercase font-semibold tracking-tighter text-black dark:text-white sm:text-9xl">
            HOW DOES IT WORK?
          </h2>
          <p className="mt-6 text-2xl max-w-4xl leading-8 text-black dark:text-white ">
          The ultimate platform for independent artists to share music, engage with fans, and build a sustainable career - all in one place.
          </p>
        </div> */}
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-3xl font-semibold h2 uppercase leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#A8FF00]">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-black" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neurtal-100">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-black dark:text-[#A8FF00]">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </motion.div>
    </>
  )
}
