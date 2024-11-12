import Image from "next/image";
import image1 from '../public/images/company1.png'
import image2 from '../public/images/company2.png'
import image3 from '../public/images/company3.png'
import image4 from '../public/images/company4.png'
import { ArrowDownRight } from "lucide-react";

export default function Story() {
    return (
      <div className="overflow-hidden bg-clear sm:pt-24 pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-8xl h2 uppercase font-semibold tracking-tight text-black dark:text-white sm:text-8xl">Our STORY</h2>
              <p className="mt-6 text-2xl/6 font-semibold text-neutral-900 dark:text-neutral-200">
                We believe that artists deserve a platform that empowers them as creators and enhances their relationship with their closest fans.
              </p>
              <p className="mt-6 text-2xl/6 font-semibold text-neutral-900 dark:text-neutral-200">
                Founded in 2022, in London, we're bringing new technologies and revenue streams to artists across the globe.
              </p>
              <div className="mt-10 flex">
                <a
                  href="contact"
                  className="rounded-md h2 uppercase bg-[#A8FF00] flex px-3.5 py-2.5 text-xl font-semibold text-black shadow-sm hover:bg-[#FFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 <ArrowDownRight className="mr-1"/> LEARN MORE
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  alt=""
                  src={image1}
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <Image
                    alt=""
                    src={image3}
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    alt=""
                    src={image2}
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                    alt=""
                    src={image4}
                    className="aspect-[7/5] w-[28rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  