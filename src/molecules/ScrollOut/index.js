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
        image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/current-1.jpg?alt=media&token=aa0d6055-ffb2-4371-9e7c-894886e5a5e3&_gl=1*1t7adlh*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ4NTEuNTMuMC4w"}
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
      image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/current-2.jpg?alt=media&token=c63f78ef-5cee-4742-a9cf-f3e89611aa99&_gl=1*159ytri*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ4ODQuMjAuMC4w"}
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
          image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/current-3.jpg?alt=media&token=2d840a5c-7bb2-4c27-89b7-2685565a4194&_gl=1*1bj9wum*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ5MTEuNjAuMC4w"}
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
        image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/current-4.jpg?alt=media&token=ff52f8eb-a0f9-4c51-b3bb-345a51f92fc9&_gl=1*19vvn2y*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ5NDAuMzEuMC4w"}
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
        image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/current-5.jpg?alt=media&token=1d8fb9dc-6599-46b9-bc06-4840fa8d32a8&_gl=1*12u7dh2*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ5NzguNjAuMC4w"}
        cash={"$20,000"}
        prize={"+ Modeling Contract XXXXX Company"}
      />
      </SwiperSlide>
    </Swiper>
    

    

    


  );
};

export default ScrollOut;
