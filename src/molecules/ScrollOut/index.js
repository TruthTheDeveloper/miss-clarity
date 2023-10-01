"use client";
import { useState,useEffect } from "react";
import CardSlider from "@/atoms/CardSlider/index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ScrollOut = () => {
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
        navigate={"vote/one"}
        name={"Charlotte Anderson"}

       voteLabel ={true}
      showBadge={false}
        badge={"/badge-1.svg"}
        image={"/pic/current-1.jpg"}
        cash={"$20,000"}
        prize={"+ Modeling Contract XXXXX Company"}
      />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
        navigate={"vote/two"}
        name={"Harper Lee"}

       voteLabel ={true}
      showBadge={false}
      badge={"/badge-2.svg"}
      image={"/pic/current-2.jpg"}
      cash={"$20,000"}
      prize={"+ Modeling Contract XXXXX Company"}
    />
      </SwiperSlide>
      <SwiperSlide>
        <CardSlider
        navigate={"vote/three"}
        name={"Evelyn Turner"}
         voteLabel ={true}
        showBadge={false}
          badge={"/badge-3.svg"}
          image={"/pic/current-3.jpg"}
          cash={"$20,000"}
          prize={"+ Modeling Contract XXXXX Company"}
        />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
        navigate={"vote/four"}
        name={"Miller Jackson"}

       voteLabel ={true}
      showBadge={false}
        badge={"/badge-1.svg"}
        image={"/pic/current-4.jpg"}
        cash={"$20,000"}
        prize={"+ Modeling Contract XXXXX Company"}
      />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
        navigate={"vote/five"}
        name={"Mitchell Hall"}
       voteLabel ={true}
      showBadge={false}
        badge={"/badge-2.svg"}
        image={"/pic/current-5.jpg"}
        cash={"$20,000"}
        prize={"+ Modeling Contract XXXXX Company"}
      />
      </SwiperSlide>
    </Swiper>
    

    

    


  );
};

export default ScrollOut;
