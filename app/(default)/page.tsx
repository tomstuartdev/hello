import React from 'react';
import ImageCloudTicker from '@/components/image-cloud-ticker';
import SubscribeForm from "@/components/subscribe-form";
import Image1 from '../../public/images/img1.jpg'
import Image2 from '../../public/images/img2.jpg'
import Image3 from '../../public/images/img3.jpg'
import Image4 from '../../public/images/img4.jpg'
import Image5 from '../../public/images/img5.jpg'
import Image6 from '../../public/images/img6.jpg'
import Image7 from '../../public/images/img7.jpg'

export const metadata = {
  title: "TRAX | New music starts here",
  description: "A new way for artists to release music, capture fan data and earn more from their art.",
};

export default function Home() {
  const images = [
    { src: Image1, alt: "Image 1", width: 300, height: 300 },
    { src: Image2, alt: "Image 2", width: 300, height: 300 },
    { src: Image3, alt: "Image 3", width: 300, height: 300 },
    { src: Image4, alt: "Image 4", width: 300, height: 300 },
    { src: Image5, alt: "Image 5", width: 300, height: 300 },
    { src: Image6, alt: "Image 6", width: 300, height: 300 },
    { src: Image7, alt: "Image 7", width: 300, height: 300 },
    { src: Image4, alt: "Image 8", width: 300, height: 300 },
  ];
  
  const tickerText = "NEW MU$IC $TART$ HERE NEW MU$IC $TART$ HERE NEW MU$IC $TART$ HERE NEW MU$IC $TART$ HERE ";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-10">
        <ImageCloudTicker images={images} tickerText={tickerText} />
      </div>
      <div className="relative z-20 pt-12 flex flex-col items-center justify-center h-full">
        
        <SubscribeForm />
      </div>
    </section>
  );
}