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
        image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/bf1.jpg?alt=media&token=8336fdb9-cabe-4293-8a77-f2f1082cad7e&_gl=1*1doxq11*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ1NDUuNjAuMC4w"}
        cash={"$120,000"}
        prize={"+ Modeling Contract with Mary Kay + Scholarship"}
      />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
      name={"Olivia Smith"}
      navigate={"story/two"}
      badge={"/badge-2.svg"}
      image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/cf-1.jpg?alt=media&token=372d9d51-b5aa-4bdc-93b0-fdcbdfe89336&_gl=1*s92wda*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ2MjUuNjAuMC4w"}
      cash={"$80,000"}
      prize={"+ Free ticket and all expense paid vacation to paris"}
    />
      </SwiperSlide>
      <SwiperSlide>
        <CardSlider
        name={"Sophia Williams"}
      navigate={"story/three"}
          badge={"/badge-3.svg"}
          image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/df-1.jpg?alt=media&token=f6eabe99-fb4f-4173-9201-8aa29e09d968&_gl=1*1f99d1a*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ2NjEuMjQuMC4w"}
          cash={"$40,000"}
          prize={"+ Professional Photoshoot + Gift Certificate"}
        />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
      navigate={"story/four"}
      name={"Ava Brown"}

        badge={"/badge-1.svg"}
        image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/ef-1.jpg?alt=media&token=ceed3c1f-c86b-486f-be5f-8267baae62ea&_gl=1*1coe4fg*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ3MTMuNTguMC4w"}
        cash={"$120,000"}
        prize={"+ Modeling Contract with Channel + Scholarship"}
      />
      </SwiperSlide>
      <SwiperSlide>
      <CardSlider
      navigate={"story/five"}
        name={"Isabella Martinez"}
        badge={"/badge-2.svg"}
        image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/z-1.jpg?alt=media&token=eb291bac-b09d-4576-b79c-385a14981524&_gl=1*1554a51*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ3NTQuMTcuMC4w"}
        cash={"$80,000"}
      prize={"+ Free ticket and all expense paid vacation to huwaii"}
      />
      </SwiperSlide>
    </Swiper>
    

    

    


  );
};

export default DragScroll;
