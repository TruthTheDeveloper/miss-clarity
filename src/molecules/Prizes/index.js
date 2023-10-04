"use client"

import Image from "next/image";
import { Inter } from 'next/font/google';
const inter = Inter({weight: '700', subsets: ['latin'] })
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


const Prizes = ({ position, awardImage,positionImage,  cash, modeling, vacation, ticket }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="mt-12" data-aos="zoom-in">
      <div className="relative mx-auto h-[139px] w-[139px]">
        
        <Image
          src={awardImage}
          fill={true}
          // width={113}
          // height={139}
          objectFit="cover"
          alt="Picture of the author"
        />
        <Image
          src={positionImage}
          width={33}
          height={30}
          alt="Picture of the author"
          style={{margin:'auto', paddingTop:40}}
        />
      </div>
      <div className="flex justify-center mt-4 text-[20px]">
      <h1 className={`${inter.className}`}>{position}</h1>
      </div>
    
      <ul className="list-disc text-[14px] w-[170px] mx-auto md:ml-4">
        <li>Cash Prize <span className="">${cash}</span></li>
        <li>{modeling}</li>
        <li>{vacation}</li>
        <li>{ticket}</li>
      </ul>
  
    </div>
  );
};

export default Prizes;
