import Team from "./team";
import tom from '../public/images/team/tom.png'
import kristijan from '../public/images/team/kristijan.jpeg'
import ollie from '../public/images/team/ollie.jpeg'
import katja from '../public/images/team/katja.jpeg'
import hadi from '../public/images/team/hadi.png'
import ben from '../public/images/team/ben.jpeg'
import henry from '../public/images/team/henry.jpeg'
import Image from "next/image";
import image1 from '../public/images/company1.png'
import image2 from '../public/images/company2.png'
import image3 from '../public/images/company3.png'
import image4 from '../public/images/company4.png'
import dfinity from '../public/images/dfinity.png'

export default function Company() {
    return (
      <div className="overflow-hidden bg-clear pb-24 sm:pb-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-5xl">
            
            <h1 className="mt-2 text-pretty text-2xl text-center sm:text-left font-semibold h2 leading-[1rem] uppercase tracking-tighter dark:text-[#A8FF00] text-neutral-900 sm:leading-[1rem] sm:text-3xl">
            ABOUT US
            </h1>
            <p className="mt-6 font-semibold h2 uppercase text-balance text-center sm:text-left tracking-tighter sm:tracking-tighter text-7xl leading-[4rem] sm:text-9xl sm:leading-[6.25rem] dark:text-neutral-100 text-neutral-900">
            Unlocking the true value of music
            </p>
          </div>
          <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
            <div className="lg:pr-8">
             
              <p className="mt-4 text-xl/7 dark:text-white text-neutral-900">
              The digital streaming revolution has transformed music distribution, yet major platforms have created an anonymous landscape where artists lack meaningful fan connections and fair compensation. Today's creators deserve better tools to understand and monetize their audience.
              </p>
              <p className="mt-8 text-xl/7 dark:text-white text-neutral-900">
              TRAX bridges this gap with powerful superfan tools that put artists in control. Our platform enables creators to build transparent communities, gather audience insights, and create exciting releases - because music isn't just content to be streamed, it's art that deserves to be valued fairly.
              </p>
            </div>
            <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt=""
                    src={image1}
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                    alt=""
                    src={image2}
                    className="block size-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                    alt=""
                    src={image3}
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                    alt=""
                    src={image4}
                    className="block size-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              
              <hr className="mt-6 border-t dark:border-neutral-700 border-gray-200" />
              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <div className="flex flex-col gap-y-2 border-b border-dotted dark:border-neutral-700 border-gray-200 pb-4">
                  <dt className="text-md/6 uppercase dark:text-[#A8FF00] font-semibold text-neutral-500">FUNDING RAISED</dt>
                  <dd className="order-first text-7xl h2 uppercase font-semibold tracking-tight">
                    $<span>2</span>M+
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 border-b border-dotted dark:border-neutral-700 pb-4">
                  <dt className="text-md/6 uppercase dark:text-[#A8FF00] font-semibold text-neutral-500">ARTISTS</dt>
                  <dd className="order-first text-7xl h2 uppercase font-semibold tracking-tight">
                    <span>1</span>K
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted dark:border-neutral-700 max-sm:border-gray-200  max-sm:pb-4">
                  <dt className="text-md/6 dark:text-[#A8FF00] font-semibold text-neutral-500">PAID OUT TO ARTISTS</dt>
                  <dd className="order-first text-7xl h2 uppercase font-semibold tracking-tight">
                    $<span>120</span>k+
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2">
                  <dt className="text-md/6 dark:text-[#A8FF00] font-semibold text-neutral-500">FANS ONBOARD</dt>
                  <dd className="order-first text-7xl h2 uppercase font-semibold tracking-tight">
                    <span>10</span>k
                  </dd>
                </div>
              </dl>
            </div>
          </section>
          <div className="mt-32">
      <h1 className="h2 text-[16px] uppercase">Meet the team</h1>
      <h3  className="text-6xl tracking-tighter font-semibold mt-2">
        Founded by an all-star team.
      </h3>
      <p className="mt-6 text-xl/6 font-semibold max-w-3xl">
      Following a successful exit from fin-tech startup Lean App, Tom Stuart founded TRAX alongside Henry Wilson and Oliver Francis in London in 2022. TRAX now operates a global development team, A&R network, and advisory board under former MD of Believe Stephen King. 
      </p>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-xl/6 dark:text-neutral-100 text-gray-600">
          TRAX&apos;s product and artist teams are creating solutions at the cutting-edge of superfan tech that also speak to artists’ everyday needs. Our in-house team and advisory board have decades of combined experience in development and music distribution, allowing us to rapidly respond to artists’ needs with new solutions on the TRAX app. 
          </p>
          <p className="mt-8 text-xl/6 dark:text-neutral-100 text-gray-600">
          TRAX is shaping the next generation of music platforms with help from a global network of artists, managers, distribution companies, and music trade bodies; our history of successful partnerships - including with the Music Manager’s Forum, events and management company BEAM, and many more - have compounded our artist-first philosophy and enhanced our proposition to the creators who inspire us every day.
          </p>
          {/* <div className="mt-6">
            <a className="w-full sm:w-auto" href="#">
              Follow us
            </a>
          </div> */}
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <h3 className="mt-24 h2 uppercase">
        The team
      </h3>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <li className="flex items-center gap-4">
        <Image alt="" src={tom} className="size-16 object-cover rounded-lg" />
        <div className="text-md/6">
            <h3 className="font-semibold h2 text-2xl uppercase">Tom Stuart</h3>
            <p className="text-neutral-700 dark:text-[#A8FF00] uppercase text-sm font-semibold">Co-founder / CEO</p>
        </div>
         </li>
         <li className="flex items-center gap-4">
        <Image alt="" src={ollie} className="size-16 rounded-lg object-cover" />
        <div className="text-md/6">
            <h3 className="font-semibold h2 text-2xl uppercase">Ollie Francis</h3>
            <p className="text-neutral-700 dark:text-[#A8FF00] uppercase text-sm font-semibold">Co-founder / CTO</p>
        </div>
         </li>
         <li className="flex items-center gap-4">
        <Image alt="" src={henry} className="size-16 rounded-lg object-cover" />
        <div className="text-md/6">
            <h3 className="font-semibold h2 text-2xl uppercase">Henry Wilson</h3>
            <p className="text-neutral-700 dark:text-[#A8FF00] uppercase text-sm font-semibold">Co-founder / COO</p>
        </div>
         </li>
         <li className="flex items-center gap-4">
        <Image alt="" src={kristijan} className="size-16 object-cover rounded-lg" />
        <div className="text-md/6">
            <h3 className="font-semibold h2 text-2xl uppercase">Kristijan Zivcec</h3>
            <p className="text-neutral-700 dark:text-[#A8FF00] uppercase text-sm font-semibold">Lead Developer</p>
        </div>
         </li>
         <li className="flex items-center gap-4">
        <Image alt="" src={hadi} className="size-16 object-cover rounded-lg" />
        <div className="text-md/6">
            <h3 className="font-semibold h2 text-2xl uppercase">Hadi Usmani</h3>
            <p className="text-neutral-700 dark:text-[#A8FF00] uppercase text-sm font-semibold">CHIEF SNUS OFFICER</p>
        </div>
         </li>
         <li className="flex items-center gap-4">
        <Image alt="" src={katja} className="size-16 object-cover rounded-md" />
        <div className="text-md/6">
            <h3 className="font-semibold h2 text-2xl uppercase">Katja Petrovic</h3>
            <p className="text-neutral-700 dark:text-[#A8FF00] uppercase text-sm font-semibold">Front-end Developer</p>
        </div>
         </li>
         <li className="flex items-center gap-4">
        <Image alt="" src={ben} className="size-16 object-cover rounded-md" />
        <div className="text-md/6">
            <h3 className="font-semibold h2 text-2xl uppercase">Ben McDaid</h3>
            <p className="text-neutral-700 dark:text-[#A8FF00] uppercase text-sm font-semibold">Artist Liaison</p>
        </div>
         </li>
      </ul>
    </div>
    <div className="mt-32">
      <h1 className="h2 text-2xl dark:text-[#A8FF00] tracking-loose uppercase">Investors</h1>
      <h3  className="text-6xl font-semibold tracking-tighter mt-2">
        Funded by web3 industry-leaders.
      </h3>
      <h1 className="mt-6 max-w-3xl">
        We are fortunate to be backed by the best investors in the industry —
        both literal and metaphorical partners in crime.
      </h1>
      <h3 className="mt-24 h2 uppercase text-2xl dark:text-white">
        Venture Capital
      </h3>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <Image
            alt="Remington Schwartz"
            src={dfinity}
            className=" object-contain w-36"
          />
          <p className="mt-6 max-w-lg text-md/6 dark:text-neutral-300 text-gray-500">
          DFINITY is a blockchain platform and organization focused on building the "Internet Computer" - a decentralized cloud computing network. It aims to create a faster, more scalable blockchain infrastructure that can host web applications and smart contracts. The platform uses their ICP token and novel consensus mechanisms for governance and operations.
          </p>
        </li>
        <li>
          <img alt="Deccel" src="/investors/deccel.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Deccel has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of ‘plausible
            deniability’ and dedication to looking the other way have helped
            produce some of the world’s most controversial companies.
          </p>
        </li>
      </ul>
      <h3 className="mt-24 h2 uppercase text-2xl">
        Individual investors
      </h3>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
         <li className="flex items-center gap-4">
        <Image alt="" src={ben} className="size-16 rounded-md object-cover" />
        <div className="text-md/6">
            <h3 className="font-semibold h2 uppercase text-2xl">Adam Powell</h3>
            <p className="dark:text-[#A8FF00] uppercase text-md font-semibold text-gray-500">Dragginz, prev. Neopets</p>
        </div>
         </li>
        
      </ul>
    </div>
        </div>
      </div>
    )
  }
  