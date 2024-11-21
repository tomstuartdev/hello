'use client'
import Image from "next/image"
import classof24 from "../public/images/class-of-24-banner.png"
import slaps from "../public/images/rebrand.png"
import ckbtc from "../public/images/EditionsBanner.png"
import kenny from "../public/images/kenny.jpg"
import iffy from '../public/images/company3.png'
import dao from "../public/images/TRAXDAOBanner.png"
import bobby from "../public/images/bobby-banner.png"
import lbank from "../public/images/lbankbanner.png"
import sking from "../public/images/stephenking.png"
import Link from "next/link"
import { ArrowDownRight } from "lucide-react"


export default function UpdatesBento() {
    return (
        <>
      <div className="bg-clear py-0 sm:py-0 max-w-[1440px] mx-auto">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-none lg:px-8">
         
          <div className="mt-0 grid grid-cols-1 gap-4 sm:mt-0 lg:grid-cols-6 lg:grid-rows-2">
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px rounded-lg  lg:rounded-2xl" />
              <Link 
                href='https://x.com'
                className="group relative flex h-full min-h-[20rem] flex-col bg-neutral-800 border border-neutral-700 overflow-hidden rounded-2xl"
                >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 ">
                    <Image
                    alt="Feature background"
                    src={lbank}
                    layout="fill"
                    className="object-cover object-center transition-transform opacity-90 duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/90" />
                </div>

                {/* Content Container */}
                <div className="relative mt-auto flex flex-col bottom-0 mb-0 flex-end p-6 sm:p-10 text-white transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl/4 h2 flex uppercase font-semibold text-[#A8FF00]">
                    NOV 2024
                    </h3>
                    <p className="mt-2 text-4xl/8 flex h2 uppercase font-medium tracking-tight text-white">
                    $TRAX listed on LBank Exchange
                    </p>
                    {/* <p className="mt-2 max-w-lg text-xl/6 text-gray-200 ">
                    We're delighted to announce our debut centralised exchange listing on LBank Exchange - a top 20 global cryptocurrency exchange.
                    </p> */}

                    {/* Hover Button - Appears on hover */}
                    <div className="mt-6 flex hidden sm:block overflow-hidden">
                    <div className="translate-y-12 transition-transform duration-500 group-hover:translate-y-0">
                        <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                        Read more
                        <ArrowDownRight className="h-4 w-4" />
                        </button>
                    </div>
                    </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-black/20" />
                </Link>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow ring-1 ring-black/5 " />
            </div>
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px " />
              <Link 
                href='https://x.com'
                className="group relative flex min-h-[20rem] h-full flex-col bg-neutral-800 border border-neutral-700 overflow-hidden rounded-2xl"
                >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                    <Image
                    alt="Feature background"
                    src={kenny}
                    layout="fill"
                    className="object-cover object-center transition-transform duration-500 opacity-70 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/90" />
                </div>

                {/* Content Container */}
                <div className="relative mt-auto flex flex-col bottom-0 mb-0 flex-end p-6 sm:p-10 text-white transition-transform duration-500 group-hover:translate-y-[-8px]">
                <h3 className="text-xl/4 flex h2 uppercase font-semibold text-[#A8FF00]">
                    OCT 2024
                    </h3>
                    <p className="mt-2 flex text-4xl/8 h2 uppercase font-medium tracking-tight text-white">
                    TRAX teams up with Kenny Allstar & Champion for exclusive UK rap event
                    </p>
                    <p className="mt-2 max-w-lg text-xl/6 text-gray-200">
                    
                    </p>

                    {/* Hover Button - Appears on hover */}
                    <div className="mt-6 flex overflow-hidden hidden sm:block">
                    <div className="translate-y-12 transition-transform duration-500 group-hover:translate-y-0">
                        <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                        Read more
                        <ArrowDownRight className="h-4 w-4" />
                        </button>
                    </div>
                    </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-black/20" />
                </Link>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
            </div>
            <div className="relative lg:col-span-2">
            <div className="relative">
      {/* White border/background effect */}
      <div className="absolute inset-px rounded-lg bg-gradient-to-b from-black/80 to-black/50 lg:rounded-bl-[2rem]" />
      
      {/* Main card content */}
      <Link
        href='https://x.com'
        className="group relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]"
      >
        {/* Full background image with gradient overlay */}
        <div className="absolute inset-0">
          <Image
            alt="Speed feature"
            src={slaps}
            layout="fill"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay for text legibility */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 to-neutral-900 transition-opacity duration-500"
            
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content Container */}
        <div className="relative min-h-[400px] flex flex-col">
          {/* Main content */}
          <div className="relative  flex flex-col bottom-0 mb-0 flex-end p-6 sm:p-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
            <h3 className="text-xl/4 font-semibold h2 uppercase text-[#A8FF00] transition-colors duration-300 group-hover:text-[#A8FF00]">
              SEP 24
            </h3>
            <p className="mt-2 h2 uppercase text-4xl/8 font-medium tracking-tight text-gray-50">
              TRAX PARTNERS WITH SLAPS CREATIVE ON NEW IDENTITY
            </p>
            {/* <p className="mt-2 max-w-lg text-xl/6 text-gray-100">
              Sed congue eros non finibus molestie. Vestibulum euismod augue.
            </p> */}
          </div>

          {/* Hover button container */}
          <div className="relative p-10 hidden sm:block pt-0 mt-auto">
            <div className="transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <button className="inline-flex items-center gap-2 rounded-full bg-gray-900/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-gray-900">
                Learn more
                <ArrowDownRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Shine effect overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            backgroundSize: '200% 200%',
            animation: 'shine 1.5s ease-in-out infinite'
          }}
        />
      </Link>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
            </div>
            <div className="relative lg:col-span-2">
            <div className="relative">
      {/* White border/background effect */}
      <div className="absolute inset-px rounded-lg bg-gradient-to-b from-black/80 to-black/50 lg:rounded-bl-[2rem]" />
      
      {/* Main card content */}
      <Link
        href='https://x.com'
        className="group relative flex min-h-[20rem] h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]"
      >
        {/* Full background image with gradient overlay */}
        <div className="absolute min-h-full inset-0">
          <Image
            alt="Speed feature"
            src={ckbtc}
            layout="contain"
            className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay for text legibility */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 to-neutral-900 transition-opacity duration-500"
            
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content Container */}
        <div className="relative min-h-[400px] flex flex-col">
          {/* Main content */}
          <div className="relative flex flex-col bottom-0 mb-0 flex-end p-6 sm:p-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
            <h3 className="text-xl/4 font-semibold h2 uppercase text-[#A8FF00] transition-colors duration-300 group-hover:text-[#A8FF00]">
              AUG 24
            </h3>
            <p className="mt-2 h2 uppercase text-4xl/8 font-medium tracking-tight text-gray-50">
              CREATE LIMITED EDITION RELEASES WITH TRAX
            </p>
            {/* <p className="mt-2 max-w-lg text-xl/6 text-gray-100">
              Sed congue eros non finibus molestie. Vestibulum euismod augue.
            </p> */}
          </div>

          {/* Hover button container */}
          <div className="relative hidden sm:block p-10 pt-0 mt-auto">
            <div className="transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <button className="inline-flex items-center gap-2 rounded-full bg-gray-900/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-gray-900">
                Learn more
                <ArrowDownRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Shine effect overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            backgroundSize: '200% 200%',
            animation: 'shine 1.5s ease-in-out infinite'
          }}
        />
      </Link>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
            </div>
            <div className="relative lg:col-span-2">
            <div className="relative">
      {/* White border/background effect */}
      <div className="absolute inset-px rounded-lg bg-gradient-to-b from-neutral-700/80 to-neutral-700/50 lg:rounded-bl-[2rem]" />
      
      {/* Main card content */}
      <Link
        href='https://x.com'
        className="group relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]"
      >
        {/* Full background image with gradient overlay */}
        <div className="absolute h-full inset-0">
          <Image
            alt="Speed feature"
            src={iffy}
            layout="fill"
            className="object-cover object-left transition-transform opacity-90 duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay for text legibility */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 to-neutral-900 transition-opacity duration-500"
            
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content Container */}
        <div className="relative min-h-[400px] flex flex-col">
          {/* Main content */}
          <div className="relative flex flex-col bottom-0 mb-0 flex-end p-6 sm:p-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
            <h3 className="text-xl/4 font-semibold h2 uppercase text-[#A8FF00] transition-colors duration-300 group-hover:text-[#A8FF00]">
              JUL 24
            </h3>
            <p className="mt-2 h2 uppercase text-4xl/8 font-medium tracking-tight text-gray-50">
              TRAX TEAMS UP WITH GOLDLINK, IFFY FM FOR EXCLUSIVE SUPERFAN EVENT
            </p>
            {/* <p className="mt-2 max-w-lg text-xl/6 text-gray-100">
              Sed congue eros non finibus molestie. Vestibulum euismod augue.
            </p> */}
          </div>

          {/* Hover button container */}
          <div className="relative hidden sm:block p-10 pt-0 mt-auto">
            <div className="transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <button className="inline-flex items-center gap-2 rounded-full bg-gray-900/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-gray-900">
                Learn more
                <ArrowDownRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Shine effect overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            backgroundSize: '200% 200%',
            animation: 'shine 1.5s ease-in-out infinite'
          }}
        />
      </Link>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="bg-clear max-w-[1440px] mx-auto py-4 sm:py-4">
    <div className="mx-auto max-w-2xl px-6 lg:max-w-none lg:px-8">
     
      <div className="mt-0 grid grid-cols-1 gap-4 sm:mt-0 lg:grid-cols-6 lg:grid-rows-2">
        <div className="relative lg:col-span-3">
          <div className="absolute inset-px rounded-lg bg-neutral-800 lg:rounded-2xl" />
          <Link 
            href='https://x.com'
            className="group relative flex min-h-[20rem] h-full flex-col overflow-hidden rounded-2xl"
            >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
                <Image
                alt="Feature background"
                src={sking}
                layout="fill"
                className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/90" />
            </div>

            {/* Content Container */}
            <div className="relative flex flex-col bottom-0 mb-0 flex-end p-6 sm:p-10 text-white transition-transform duration-500 group-hover:translate-y-[-8px]">
                <h3 className="text-xl/4 h2 uppercase font-semibold text-[#A8FF00]">
                JUN 2024
                </h3>
                <p className="mt-2 text-4xl/8 h2 uppercase font-medium tracking-tight text-white">
                FORMER BELIEVE MANAGING DIRECTOR STEPHEN KING JOINS TRAX AS LEAD ADVISOR
                </p>
                {/* <p className="mt-2 max-w-lg text-xl/6 text-gray-200 ">
                We're delighted to announce our debut centralised exchange listing on LBank Exchange - a top 20 global cryptocurrency exchange.
                </p> */}

                {/* Hover Button - Appears on hover */}
                <div className="mt-6 overflow-hidden">
                <div className="translate-y-12 transition-transform duration-500 group-hover:translate-y-0">
                    <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                    Read more
                    <ArrowDownRight className="h-4 w-4" />
                    </button>
                </div>
                </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-black/20" />
            </Link>
          <div className="pointer-events-none absolute inset-px rounded-2xl shadow ring-1 ring-black/5 " />
        </div>
        <div className="relative lg:col-span-3">
          <div className="absolute inset-px " />
          <Link 
            href='https://x.com'
            className="group relative flex min-h-[20rem] h-full flex-col overflow-hidden rounded-2xl"
            >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
                <Image
                alt="Feature background"
                src={classof24}
                layout="fill"
                className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/90" />
            </div>

            {/* Content Container */}
            <div className="relative mt-auto p-10 text-white transition-transform duration-500 group-hover:translate-y-[-8px]">
            <h3 className="text-xl/4 h2 uppercase font-semibold text-[#A8FF00]">
                OCT 2024
                </h3>
                <p className="mt-2 text-4xl/8 h2 uppercase font-medium tracking-tight text-white">
                TRAX ANNOUNCES CLASS OF 24 WITH LONDON SHOWCASE EVENT
                </p>
                <p className="mt-2 max-w-lg text-xl/6 text-gray-200">
                
                </p>

                {/* Hover Button - Appears on hover */}
                <div className="mt-6 overflow-hidden">
                <div className="translate-y-12 transition-transform duration-500 group-hover:translate-y-0">
                    <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                    Read more
                    <ArrowDownRight className="h-4 w-4" />
                    </button>
                </div>
                </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-black/20" />
            </Link>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
        </div>
        <div className="relative lg:col-span-2">
        <div className="relative">
  {/* White border/background effect */}
  <div className="absolute inset-px rounded-lg bg-gradient-to-b from-black/80 to-black/50 lg:rounded-bl-[2rem]" />
  
  {/* Main card content */}
  <Link
    href='https://x.com'
    className="group relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]"
  >
    {/* Full background image with gradient overlay */}
    <div className="absolute h-full inset-0">
      <Image
        alt="Speed feature"
        src={bobby}
        layout="contain"
        className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay for text legibility */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 to-neutral-900 transition-opacity duration-500"
        
      />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>

    {/* Content Container */}
    <div className="relative min-h-[400px] flex flex-col">
      {/* Main content */}
      <div className="relative flex-grow p-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
        <h3 className="text-xl/4 font-semibold h2 uppercase text-[#A8FF00] transition-colors duration-300 group-hover:text-[#A8FF00]">
          FEB 24
        </h3>
        <p className="mt-2 h2 uppercase text-4xl/8 font-medium tracking-tight text-gray-50">
          TRAX LINKS UP WITH BOBBY SHMURDA FOR EXCLUSIVE SUPERFAN EVENT
        </p>
       {/*  <p className="mt-2 max-w-lg text-xl/6 text-gray-100">
          Sed congue eros non finibus molestie. Vestibulum euismod augue.
        </p> */}
      </div>

      {/* Hover button container */}
      <div className="relative p-10 pt-0 mt-auto">
        <div className="transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="inline-flex items-center gap-2 rounded-full bg-gray-900/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-gray-900">
            Learn more
            <ArrowDownRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>

    {/* Shine effect overlay */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
      style={{
        background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
        backgroundSize: '200% 200%',
        animation: 'shine 1.5s ease-in-out infinite'
      }}
    />
  </Link>

  {/* Animation keyframes */}
  <style jsx global>{`
    @keyframes shine {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  `}</style>
</div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
        </div>
        <div className="relative lg:col-span-2">
        <div className="relative">
  {/* White border/background effect */}
  <div className="absolute inset-px rounded-lg bg-gradient-to-b from-black/80 to-black/50 lg:rounded-bl-[2rem]" />
  
  {/* Main card content */}
  <Link
    href='https://x.com'
    className="group relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]"
  >
    {/* Full background image with gradient overlay */}
    <div className="absolute h-full inset-0">
      <Image
        alt="Speed feature"
        src={ckbtc}
        layout="contain"
        className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay for text legibility */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 to-neutral-900 transition-opacity duration-500"
        
      />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>

    {/* Content Container */}
    <div className="relative min-h-[400px] flex flex-col">
      {/* Main content */}
      <div className="relative flex-grow p-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
        <h3 className="text-xl/4 font-semibold mt-auto h2 uppercase text-[#A8FF00] transition-colors duration-300 group-hover:text-[#A8FF00]">
          FEB 24
        </h3>
        <p className="mt-2 h2 uppercase text-4xl/8 font-medium tracking-tight text-gray-50">
          Sell music, earn Bitcoin
        </p>
       {/*  <p className="mt-2 max-w-lg text-xl/6 text-gray-100">
          Artists can now sell music for Bitcoin, powered by ckBTC on the Internet Computer.
        </p> */}
      </div>

      {/* Hover button container */}
      <div className="relative p-10 pt-0 mt-auto">
        <div className="transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="inline-flex items-center gap-2 rounded-full bg-gray-900/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-gray-900">
            Learn more
            <ArrowDownRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>

    {/* Shine effect overlay */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
      style={{
        background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
        backgroundSize: '200% 200%',
        animation: 'shine 1.5s ease-in-out infinite'
      }}
    />
  </Link>

  {/* Animation keyframes */}
  <style jsx global>{`
    @keyframes shine {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  `}</style>
</div>
        </div>
        <div className="relative lg:col-span-2">
        <div className="relative">
  {/* White border/background effect */}
  <div className="absolute inset-px rounded-lg bg-gradient-to-b from-black/80 to-black/50 lg:rounded-bl-[2rem]" />
  
  {/* Main card content */}
  <Link
    href='https://x.com'
    className="group relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]"
  >
    {/* Full background image with gradient overlay */}
    <div className="absolute h-full inset-0">
      <Image
        alt="Speed feature"
        src={dao}
        layout="contain"
        className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay for text legibility */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 to-neutral-900 transition-opacity duration-500"
        
      />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>

    {/* Content Container */}
    <div className="relative min-h-[400px] flex flex-col">
      {/* Main content */}
      <div className="relative flex-grow p-10 transition-transform duration-500 group-hover:translate-y-[-8px]">
        <h3 className="text-xl/4 font-semibold h2 uppercase text-[#A8FF00] transition-colors duration-300 group-hover:text-[#A8FF00]">
          DEC 23
        </h3>
        <p className="mt-2 h2 uppercase text-4xl/8 font-medium tracking-tight text-gray-50">
          TRAX DAO RAISES $2.4M ON THE INTERNET COMPUTER
        </p>
       {/*  <p className="mt-2 max-w-lg text-xl/6 text-gray-100">
          We raised 300,000 ICP from the SNS - securing vital funding to continue the development of TRAX.
        </p> */}
      </div>

      {/* Hover button container */}
      <div className="relative p-10 pt-0 mt-auto">
        <div className="transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="inline-flex items-center gap-2 rounded-full bg-gray-900/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-gray-900">
            Learn more
            <ArrowDownRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>

    {/* Shine effect overlay */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
      style={{
        background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
        backgroundSize: '200% 200%',
        animation: 'shine 1.5s ease-in-out infinite'
      }}
    />
  </Link>

  {/* Animation keyframes */}
  <style jsx global>{`
    @keyframes shine {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  `}</style>
</div>
</div>
</div>
</div>
</div>
</>
    )
  }
  