"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
import Image from "next/image";

const Slider = ({ selectedItem, onChange, next, prev, childComponent }) => {
  return (
    <>
      <Carousel
        selectedItem={selectedItem}
        onChange={onChange}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        preventMovementUntilSwipeScrollTolerance={true} 
        swipeScrollTolerance={50}
      >
        <div className=" md:w-[600px] md:ml-auto ">
          <div className="relative w-full h-[400px] md:h-[560px]  ">
            <Image
              src={"/pic/charm-4.jpg"}
              fill
              // objectFit="cover"
              alt="Picture of the author"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="h-[200px] md:h-[180px]  bg-light-pink text-left p-8">
            <div>
              <div>
                <p>
                  Sponsored by the biggest fashion and comsestic brands in the continent
                </p>
              </div>
              {/* s */}
            </div>
            <div className="flex justify-between items-center  mt-4">
              <div className="flex justify-between pt-4 w-[40px] items-center">
                <div>
                  <Image
                    src={"/thick.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={"/Dot.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={"/Dot.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
              <div className="flex  justify-end">
                <div
                  className="h-[50.3px] w-[50.3px] rounded-[52.4px] border mx-4 text-center pt-3"
                  onClick={prev}
                >
                  <Image
                    src={"/left.svg"}
                    width={10}
                    height={10}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div
                  className="h-[50.3px] w-[50.3px] rounded-[52.4px] border text-center pt-3"
                  onClick={next}
                >
                  <Image
                    src={"/right.svg"}
                    width={10}
                    height={10}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:w-[600px] md:ml-auto ">
          <div className="relative w-full h-[400px] md:h-[560px]  ">
            <Image
              src={"/pic/misscharm-3.jpg"}

              fill
              // objectFit="cover"
              alt="Picture of the author"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="h-[200px] md:h-[180px]  bg-light-pink text-left p-8 pb-24">
            <div>
              <div>
              <p>
                  {" "}
                  Our pageants are open to people of all ages, genders, and
                  ethnicities. We celebrate and embrace the unique qualities
                  
                </p>
              </div>
              {/* s */}
            </div>
            <div className="flex justify-between items-center  mt-4">
              <div className="flex justify-between pt-4 w-[40px] items-center">
                <div>
                  <Image
                    src={"/thick.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={"/Dot.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={"/Dot.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
              <div className="flex  justify-end">
                <div
                  className="h-[50.3px] w-[50.3px] rounded-[52.4px] border mx-4 text-center pt-3"
                  onClick={prev}
                >
                  <Image
                    src={"/left.svg"}
                    width={10}
                    height={10}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div
                  className="h-[50.3px] w-[50.3px] rounded-[52.4px] border text-center pt-3"
                  onClick={next}
                >
                  <Image
                    src={"/right.svg"}
                    width={10}
                    height={10}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className=" md:w-[600px] md:ml-auto ">
          <div className="relative w-full h-[400px] md:h-[560px]  ">
            <Image
              src={"/pic/misscharm-1.jpg"}


              fill
              // objectFit="cover"
              alt="Picture of the author"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="h-[200px] md:h-[180px]  bg-light-pink text-left p-8">
            <div>
              <div>
              <p>
                  {" "}
                  Be part of the contest and stand a chance to win fabulous prizes and rewards to bring you closer to your dream
              
                </p>
              </div>
              {/* s */}
            </div>
            <div className="flex justify-between items-center  mt-4">
              <div className="flex justify-between pt-4 w-[40px] items-center">
                <div>
                  <Image
                    src={"/thick.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={"/Dot.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={"/Dot.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
              <div className="flex  justify-end">
                <div
                  className="h-[50.3px] w-[50.3px] rounded-[52.4px] border mx-4 text-center pt-3"
                  onClick={prev}
                >
                  <Image
                    src={"/left.svg"}
                    width={10}
                    height={10}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div
                  className="h-[50.3px] w-[50.3px] rounded-[52.4px] border text-center pt-3"
                  onClick={next}
                >
                  <Image
                    src={"/right.svg"}
                    width={10}
                    height={10}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
