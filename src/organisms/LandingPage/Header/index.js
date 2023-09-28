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
    <section className=" pt-8 md:flex  md:justify-between">
      <div className="px-4 md:pl-10 md:basis-1/2  md:py-24  ">
        <p className={`${roboto.className} text-[28px] md:text-[45px] md:leading-12`}>
          Medium length hero <br /> headline goes here
        </p>
        <p className="pt-6 md:text-[20px] md:leading-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="w-[147px] md:w-[170px]  h-[30px] md:h-[40px] mt-8 ">
          <Button label={"Apply Now"} borderRadius={"rounded-[50px]"} color={'bg-pink text-text-white md:text-[20px]'}/>
        </div>
      </div>
      <div className=" w-full md:h-[560px] md:w-[200px]   mt-12 md:mt-0 md:mb-12 md:basis-1/2 ">
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
