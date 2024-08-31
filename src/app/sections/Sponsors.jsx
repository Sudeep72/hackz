import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sponsorsData } from '@/data/sponsorsData';

const SponsorImages = ({ category, color, images }) => (
  <div className="w-full mb-12">
    <h3 className={`text-2xl md:text-3xl font-semibold ${color} mb-6 text-center`}>
      {category}
    </h3>
    <div className="flex flex-wrap justify-center gap-6">
      {images.map(({ src, link }, index) => (
        <Link key={index} href={link} target="_blank" className="block w-full max-w-xs">
          <div className="bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300 p-2 flex items-center my-8 justify-center h-40 md:h-48 transform hover:scale-105">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={src}
                alt={`${category} Logo`}
                width={140}
                height={140}
                objectFit="contain"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const Sponsors = () => {
  return (
    <div className="container mx-auto px-4 mb-24 mt-36">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-12">
        Sponsors
      </h2>
      <div className="space-y-12">
        {sponsorsData.map(({ category, color, images }) => (
          <SponsorImages key={category} category={category} color={color} images={images} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
