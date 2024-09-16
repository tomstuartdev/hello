'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

interface ImageCloudItem {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}

interface ImagePosition {
  x: number;
  y: number;
  z: number;
  scale: number;
  blur: number;
  speed: number;
  angle: number;
}

interface ImageCloudTickerProps {
  images: ImageCloudItem[];
  tickerText: string;
}

const ImageCloudTicker: React.FC<ImageCloudTickerProps> = ({ images, tickerText }) => {
  const [positions, setPositions] = useState<ImagePosition[]>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ 
        width: window.innerWidth, 
        height: window.innerHeight 
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const { width, height } = windowSize;
    const isMobile = width <= 768;
    const imageCount = Math.min(images.length, isMobile ? 12 : 20); // Limit images on mobile

    const initialPositions = Array.from({ length: imageCount }, (_, index) => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.5; // Reduced radius for tighter grouping
      const x = Math.cos(angle) * radius * width / 2;
      const y = Math.sin(angle) * radius * height / 2;
      const z = Math.random() * 1000 - 500;
      const scale = isMobile ? 0.3 + Math.random() * 0.2 : 0.5 + Math.random() * 0.3;
      const blur = Math.random() * 10;
      const speed = (0.1 + Math.random() * 0.1) * (isMobile ? 0.5 : 1); // Slower on mobile

      return { x, y, z, scale, blur, speed, angle };
    });

    setPositions(initialPositions);
  }, [images, windowSize]);

  const updatePositions = () => {
    setPositions(prevPositions =>
      prevPositions.map(pos => {
        const { width, height } = windowSize;
        const isMobile = width <= 768;
        
        let newAngle = pos.angle + pos.speed * 0.02;
        if (newAngle > Math.PI * 2) newAngle -= Math.PI * 2;

        const radius = 0.3 + Math.sin(newAngle) * 0.2; // Reduced radius
        let newX = Math.cos(newAngle) * radius * width / 2;
        let newY = Math.sin(newAngle) * radius * height / 2;

        // Adjust for mobile
        if (isMobile) {
          newX *= 0.8;
          newY *= 0.8;
        }

        const newZ = (1 - radius) * 1000 - 500;
        const depthFactor = (newZ + 500) / 1000;
        const newScale = isMobile 
          ? (0.3 + depthFactor * 0.2)
          : (0.5 + depthFactor * 0.3);
        const newBlur = (1 - depthFactor) * 10;

        return {
          ...pos,
          x: newX,
          y: newY,
          z: newZ,
          scale: newScale,
          blur: newBlur,
          angle: newAngle
        };
      })
    );

    animationRef.current = requestAnimationFrame(updatePositions);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updatePositions);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [windowSize]);

  return (
    <div className="relative -mt-36 sm:-mt-28 w-full h-screen overflow-hidden">
      {positions.map((pos, index) => (
        <span 
          key={index} 
          className="absolute"
          style={{
            willChange: 'transform, filter, opacity',
            top: '50%',
            left: '50%',
            zIndex: Math.floor(pos.z + 500),
            transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
            filter: `blur(${pos.blur}px)`,
            opacity: (pos.z + 500) / 1000,
            transition: 'transform 0.3s ease-out, filter 0.3s ease-out, opacity 0.3s ease-out',
          }}
        >
          <Image 
            src={images[index % images.length].src}
            alt={images[index % images.length].alt}
            width={images[index % images.length].width}
            height={images[index % images.length].height}
            className="max-w-none w-auto h-auto"
            loading="lazy"
          />
        </span>
      ))}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden transform -translate-y-1/2" style={{ zIndex: 1000 }}>
        <div className="ticker-container whitespace-nowrap overflow-hidden">
          <div className="ticker-content inline-block animate-ticker">
            <span className="ticker-item text-black dark:text-white tracking-tighter text-[clamp(12rem,15vw,10rem)] h2 uppercase font-bold mix-blend-difference mr-8">
              {tickerText}
            </span>
            
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
        .ticker-container {
          width: 100%;
        }
        .ticker-content {
          display: inline-block;
          white-space: nowrap;
          padding-right: 100%;
        }
      `}</style>
    </div>
  );
};

export default ImageCloudTicker;