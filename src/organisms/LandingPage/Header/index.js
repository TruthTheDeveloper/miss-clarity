"use client";

import { Roboto } from "next/font/google";

import Button from "@/atoms/Button";
import Slider from "@/atoms/Slider";

import { useState } from "react";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const next = () => {
    if (currentSlide === 2) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prev) => prev + 1);
  };

  const prev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(2);
      return;
    }
    setCurrentSlide((prev) => prev - 1);
  };

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <section className=" pt-8 md:flex   md:justify-between  ">
      <div className="px-4 md:pl-10  md:py-24 md:basis-1/2 " >
        <p className={`${roboto.className} text-[28px] md:text-[45px] md:leading-12`}>
        Biggest Online Beauty Pageant Contest
        </p>
        <p className={`${roboto.className} text-[18px] md:text-[20px] md:leading-12`}>Join Over 95K+ Contestant</p>
        <p className="pt-6 md:text-[20px] md:leading-6 ">
         In Embarking on a glamorous journey of self-discovery, empowerment, and recognition and become the one to wear the crown of elegance
        </p>
        <div className="w-[147px] md:w-[170px]  h-[30px] md:h-[40px] mt-8 ">
          <Button label={"Apply Now"} borderRadius={"rounded-[50px]"} color={'bg-pink py-1 text-text-white md:text-[20px]'} navigate={'/auth'}/>
        </div>
      </div>
      <div className=" w-full basis-1/2 md:w-[600px] mt-12 md:mt-0 md:mb-12 ">
        <Slider
          selectedItem={currentSlide}
          next={next}
          prev={prev}
          onChange={updateCurrentSlide}
        />
      </div>
    </section>
  );
};

export default Header;
