"use client";
import Image from "next/image";
import Button from "../Button";
import React, { Component } from 'react'
import Link from 'next/link'
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });



const CardSlider = ({name, image, badge, cash, prize, showBadge=true, voteLabel=false, navigate}) => {
  return (
    <div className="relative w-[345px]  h-[495px] mx-auto  shadow-md rounded-[10px] mb-16 ">
      {showBadge && <div className="absolute top-0 right-0 w-[50px] ">
        <Image
          src={badge}
          width={50}
          height={50}
          objectFit="cover"
          alt="Picture of the author"
          style={{ width: "auto", height: "auto" }}
        />
      </div>}
      <div className="w-[250px] mx-auto pt-12">
      <div className="w-[250px]  mx-auto bg-deep-pink">
        <Image
          src={image}
          width={250}
          height={350}
          objectFit="cover"
          alt="Picture of the author"
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      <div className="  text-center my-2">
        {voteLabel ? <><h2 className="font-semibold">{name}</h2>
        <div>
          <p className="font-light text-[15px]">
            Help her win the crown of elegance
          </p>
        </div></>:<><h2 className="font-semibold">{name}</h2>
        <div>
          <p>
            <span className="px-2 text-green font-semibold ">{cash}</span>{prize}
          </p>
        </div></>}
        {voteLabel ? <div className="w-[137.06px] h-[29.06px] mx-auto mt-3">
          <Button label={"Vote"} borderRadius={'rounded-[10px]'} color={'bg-pink text-text-white pt-1'} navigate={navigate}/>
        </div>: <div className="w-[137.06px] h-[29.06px] mx-auto mt-3">
          <Button label={"View Story"} borderRadius={'rounded-[10px]'} color={'bg-pink text-text-white pt-1'} navigate={navigate}/>
        </div>}
      </div>
      </div>
    </div>
  );
};

export default CardSlider;
