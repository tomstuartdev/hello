import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const QuizCard = () => {
  return (
    <div className="bg-zinc-900/90 rounded-3xl p-12 flex flex-col items-center justify-between relative overflow-hidden min-h-[400px] backdrop-blur-sm border border-white/5">
      {/* Subtle Grid Background with fade */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(102, 102, 102, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(102, 102, 102, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px',
          mask: 'radial-gradient(circle at center, black, transparent)'
        }}
      />

      <h3 className="text-white text-2xl/6 mt-8 font-medium text-center mb-8 relative">
        Unlock your<br />earnings potential
      </h3>
        
       <Link href='/earnings-calculator'>
      <button className="bg-white h2 uppercase text-black font-black text-2xl py-3 px-12 rounded-xl mb-16 relative hover:bg-gray-100 transition-colors">
        TAKE THE QUIZ
      </button>
      </Link> 

      <div className="flex relative ml-12 mb-4">
        {[
          '/images/icp.png',
          '/images/bitcoin.png',
          '/images/usd.png',
          '/images/traxcoin.png'
        ].map((src, index) => (
          <div 
            key={index} 
            className="relative" 
            style={{
              marginLeft: '-2rem',
              zIndex: index,
            }}
          >
            <div className="w-24 h-24 relative">
              <Image
                src={src}
                alt={`Circle ${index + 1}`}
                fill
                className="rounded-full"
                priority
              />
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: `0 25px 30px -5px ${
                    index === 0 ? 'rgba(251, 146, 60, 0.5)' :
                    index === 1 ? 'rgba(250, 204, 21, 0.5)' :
                    index === 2 ? 'rgba(56, 189, 248, 0.5)' :
                    'rgba(74, 222, 128, 0.5)'
                  }`
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Reflection/Blur Effect */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div 
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: 'linear-gradient(to top, rgb(24 24 27), transparent)',
            opacity: '0.98'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
            filter: 'blur(8px)',
            opacity: '0.5'
          }}
        />
      </div>
    </div>
  );
};

export default QuizCard;