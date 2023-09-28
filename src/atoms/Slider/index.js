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
      >
        <div>

          
          
          <div className=" md:w-[450px]  ">
          <Image
            src={"/background-1.svg"}
      
            width={10}
            height={10}
            objectFit="cover"
            alt="Picture of the author"
            style={{ width: "auto", height: "auto" }}

          />
          </div>
          <div className="h-[178px] md:h-[180px]  bg-light-pink text-left p-8">
            <div>
              <div>
                <h1 className={roboto.className}>Short heading goes here</h1>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
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
                    src={"/dot.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={"/dot.png"}
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

        <div>
          <Image
            src={"/background-1.svg"}

            width={330}
            height={139}
            objectFit="cover"
            alt="Picture of the author"
          />
          <div className="h-[251px] bg-light-pink text-left p-8">
            <div>
              <div>
                <h1 className={roboto.className}>Short heading goes here</h1>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex justify-between pt-4 w-[40px] items-center">
                <div>
                  <Image
                    src={"/dot.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
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
                    src={"/dot.png"}
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
        <div>
          <Image
            src={"/background-1.svg"}

            width={330}
            height={139}
            objectFit="cover"
            alt="Picture of the author"
          />
          <div className="h-[251px] bg-light-pink text-left p-8">
            <div>
              <div>
                <h1 className={roboto.className}>Short heading goes here</h1>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex justify-between pt-4 w-[40px] items-center">
                <div>
                  <Image
                    src={"/dot.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={"/dot.png"}
                    width={50}
                    height={50}
                    objectFit="cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div>
                  <Image
                    src={"/thick.png"}
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
