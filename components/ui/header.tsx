'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoDark from '../../public/images/logo.png'
import logoLight from '../../public/images/logomark_light.png'
import Image from 'next/image'
import ThemeToggle from './theme-toggle'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ArrowDownRight } from 'lucide-react'

const navigation = [
  { name: 'Updates', href: '/updates' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Company', href: '/contact' },
  { name: '$TRAX', href: 'https://www.coingecko.com/en/coins/trax' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { resolvedTheme } = useTheme()
  const [logo, setLogo] = useState(logoLight)

  useEffect(() => {
    setLogo(resolvedTheme === 'dark' ? logoDark : logoLight)
  }, [resolvedTheme])

  return (

    
    <header className="bg-clear">
      <nav aria-label="Global" className="mx-auto flex max-w-none items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="" src={logo} className="h-12 w-auto" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-[16px] uppercase font-semibold tracking-tight leading-6 dark:text-neutral-300 text-neutral-800 hover:bg-black/20 hover:dark:text-white hover:rounded-md">
              {item.name}
            </a>
          ))}
          
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
        <ThemeToggle/>
         {/*  <a
            href="https://trax.so"
            className="rounded-full uppercase h2 dark:bg-[#A8FF00] bg-black px-6 py-2 text-lg font-semibold text-white dark:text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            SIGN UP, GET $5
          </a> */}
          <a href="https://trax.so" className="hidden lg:block uppercase flex inline-flex lg:text-lg lg:font-semibold lg:leading-6 dark:text-neutral-100 text-neutral-900">
             <span className='flex'> <ArrowDownRight className='inline-flex'/>Sign in</span>
          </a>
          
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="" src={logo} className="h-12 w-auto" />
            </a>
            <a
              href="#"
              className="ml-auto rounded-md h2 uppercase bg-[#A8FF00] px-3 py-2 text-lg font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-neutral-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-6 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block h2 uppercase rounded-lg px-3 py-2 text-6xl font-semibold leading-7 text-white "
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://trax.so"
                  className="-mx-3 block h2 uppercase rounded-lg px-3 py-2.5 text-6xl font-semibold leading-7 text-[#A8FF00] "
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
