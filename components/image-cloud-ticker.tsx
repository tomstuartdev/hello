'use client'
import Image, {StaticImageData} from 'next/image';
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
  speedX: number;
  speedY: number;
  speedZ: number;
  directionX: 1 | -1;
  directionY: 1 | -1;
  directionZ: 1 | -1;
  scale: number;
  blur: number;
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
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const { width, height } = windowSize;
    const isMobile = width <= 768;
    const speedFactor = isMobile ? 0.2 : 0.25;
    const zSpeedFactor = isMobile ? 3 : 5;

    const initialPositions = images.map(() => ({
      x: (Math.random() - 0.5) * width,  // Spread across full width
      y: (Math.random() - 0.5) * height, // Spread across full height
      z: Math.random() * 1000,
      speedX: (0.5 + Math.random()) * speedFactor,
      speedY: (0.5 + Math.random()) * speedFactor,
      speedZ: zSpeedFactor + Math.random() * zSpeedFactor,
      directionX: Math.random() < 0.5 ? 1 : -1 as 1 | -1,
      directionY: Math.random() < 0.5 ? 1 : -1 as 1 | -1,
      directionZ: Math.random() < 0.5 ? 1 : -1 as 1 | -1,
      scale: 0,
      blur: 0,
    }));
    setPositions(initialPositions);
  }, [images, windowSize]);

  const updatePositions = () => {
    setPositions(prevPositions =>
      prevPositions.map(pos => {
        const { width, height } = windowSize;
        const isMobile = width <= 768;
        
        let newX = pos.x + pos.speedX * pos.directionX;
        let newY = pos.y + pos.speedY * pos.directionY;
        let newZ = pos.z + pos.speedZ * pos.directionZ;
        let newDirectionX = pos.directionX;
        let newDirectionY = pos.directionY;
        let newDirectionZ = pos.directionZ;

        const maxX = width / 2;
        const maxY = height / 2;

        if (Math.abs(newX) >= maxX) {
          newDirectionX = -newDirectionX as 1 | -1;
        }
        if (Math.abs(newY) >= maxY) {
          newDirectionY = -newDirectionY as 1 | -1;
        }
        if (newZ <= 0 || newZ >= 1000) {
          newDirectionZ = -newDirectionZ as 1 | -1;
        }

        newX = Math.max(-maxX, Math.min(maxX, newX));
        newY = Math.max(-maxY, Math.min(maxY, newY));
        newZ = Math.max(0, Math.min(1000, newZ));

        const depthFactor = 1 - Math.abs(newY) / maxY;
        const targetScale = isMobile ? (0.15 + depthFactor * 0.35) : (0.25 + depthFactor * 0.75);
        const targetBlur = (1 - depthFactor) * (isMobile ? 3 : 5);

        const newScale = pos.scale + (targetScale - pos.scale) * 0.1;
        const newBlur = pos.blur + (targetBlur - pos.blur) * 0.1;

        return {
          ...pos,
          x: newX,
          y: newY,
          z: newZ,
          directionX: newDirectionX,
          directionY: newDirectionY,
          directionZ: newDirectionZ,
          scale: newScale,
          blur: newBlur,
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

  const tickerZIndex = 500;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {positions.map((pos, index) => (
        <span 
          key={index} 
          className="tagcloud--item absolute"
          style={{
            willChange: 'transform, filter',
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: Math.floor(pos.z),
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
            filter: `blur(${pos.blur}px)`,
            transition: 'transform 0.2s ease-out, filter 0.2s ease-out',
          }}
        >
          <Image 
            src={images[index].src} 
            alt={images[index].alt} 
            width={images[index].width}
            height={images[index].height}
            className="max-w-none w-auto h-auto"
            loading="lazy"
          />
        </span>
      ))}
      <div className="title absolute top-1/4 left-0 w-full overflow-hidden transform -translate-y-1/2" style={{ zIndex: tickerZIndex }}>
        <div className="ticker-bar whitespace-nowrap animate-continuous-ticker py-4">
          <div className="ticker-item inline-block">
            <span className="text-white text-[clamp(4rem,16vw,24rem)] h2 uppercase tracking-tighter font-bold mix-blend-difference">
              {tickerText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCloudTicker;