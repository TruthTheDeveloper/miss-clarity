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
        badge={"/badge-1.svg"}
        image={"/contestant-1.svg"}
        cash={"$20,000"}
        prize={"+ Modeling Contract XXXXX Company"}
      />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
      badge={"/badge-2.svg"}
      image={"/contestant-2.svg"}
      cash={"$20,000"}
      prize={"+ Modeling Contract XXXXX Company"}
    />
      </SwiperSlide>
      <SwiperSlide>
        <CardSlider
          badge={"/badge-3.svg"}
          image={"/contestant-3.svg"}
          cash={"$20,000"}
          prize={"+ Modeling Contract XXXXX Company"}
        />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
        badge={"/badge-1.svg"}
        image={"/contestant-1.svg"}
        cash={"$20,000"}
        prize={"+ Modeling Contract XXXXX Company"}
      />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
        badge={"/badge-2.svg"}
        image={"/contestant-2.svg"}
        cash={"$20,000"}
        prize={"+ Modeling Contract XXXXX Company"}
      />
      </SwiperSlide>
    </Swiper>
    

    

    


  );
};

export default DragScroll;
