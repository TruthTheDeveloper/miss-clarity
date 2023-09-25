"use client";
import Image from "next/image";
import Button from "../Button";
import React, { Component } from 'react'



const CardSlider = ({image, badge, cash, prize}) => {
  return (
    <div className="relative w-[225px] h-[320px] mx-8  shadow-md rounded-[10px]">
      <div className="absolute top-0 right-0 w-[50px] ">
        <Image
          src={badge}
          width={50}
          height={50}
          objectFit="cover"
          alt="Picture of the author"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="w-[225px]">
      <div className="w-[180px] mx-auto">
        <Image
          src={image}
          width={50}
          height={50}
          objectFit="cover"
          alt="Picture of the author"
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      <div className="  text-center">
        <h2>Sarah Thompson</h2>
        <div>
          <p>
            <span className="px-2 text-green font-semibold ">{cash}</span>{prize}
          </p>
        </div>
        <div className="w-[137.06px] h-[29.06px] mx-auto mt-3  ">
          <Button label={"View Story"} borderRadius={'rounded-[10px]'} color={'bg-pink text-text-white'}/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardSlider;
