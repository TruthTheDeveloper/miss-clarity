"use client";
import { useState,useEffect } from "react";
import CardSlider from "@/atoms/CardSlider/index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const DragScroll = () => {
  const [isGreaterThan425x, setIsGreaterThan425px] = useState(1);

  // adding logic to web responsivness
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 500) {
        setIsGreaterThan425px(1);
      } else if(window.innerWidth < 1000){
        setIsGreaterThan425px(2);
      } else if(window.innerWidth > 1000){
        setIsGreaterThan425px(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={isGreaterThan425x}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
      <CardSlider
      name={"Emma Johnson"}
        navigate={"story/one"}
        badge={"/badge-1.svg"}
        image={"/pic/bf1.jpg"}
        cash={"$120,000"}
        prize={"+ Modeling Contract with Mary Kay + Scholarship"}
      />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
      name={"Olivia Smith"}
      navigate={"story/two"}
      badge={"/badge-2.svg"}
      image={"/pic/cf-1.jpg"}
      cash={"$80,000"}
      prize={"+ Free ticket and all expense paid vacation to huwaii"}
    />
      </SwiperSlide>
      <SwiperSlide>
        <CardSlider
        name={"Sophia Williams"}
      navigate={"story/three"}
          badge={"/badge-3.svg"}
          image={"/pic/df-1.jpg"}
          cash={"$40,000"}
          prize={"+ Professional Photoshoot + Gift Certificate"}
        />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
      navigate={"story/four"}
      name={"Ava Brown"}

        badge={"/badge-1.svg"}
        image={"/pic/ef-1.jpg"}
        cash={"$120,000"}
        prize={"+ Modeling Contract with Channel + Scholarship"}
      />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
      navigate={"story/five"}
        name={"Isabella Martinez"}
        badge={"/badge-2.svg"}
        image={"/pic/z-1.jpg"}
        cash={"$80,000"}
      prize={"+ Free ticket and all expense paid vacation to huwaii"}
      />
      </SwiperSlide>
    </Swiper>
    

    

    


  );
};

export default DragScroll;
