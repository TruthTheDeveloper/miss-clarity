import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/atoms/Input";
import Button from "@/atoms/Button";

const inter = Inter({ weight: "700", subsets: ["latin"] });

const VoteCard = () => {
  return (
    <main className="relative">
      <div className="relative w-full h-[1370px] lg:h-[780px] ">
        <Image
          src={"/bg.png"}
          fill={true}
          // width={113}
          // height={139}
          objectFit="cover"
          alt="Picture of the author"
        />
      </div>
      <div
        className=" w-[380px] absolute bg-white md:w-[880px]    rounded-lg  "
        style={{
          transform: `translate(${-50}%, ${-50}%)`,
          top: "50%",
          left: "50%",
        }}
      >
        <div className="m-4">
          <h1 className={`text-center text-[24px] ${inter.className}`}>
            Cast Your Votes
          </h1>
          <p className="text-[16px] text-center py-2 ">
            For your favorite candidate
          </p>
        </div>
        <div className="md:flex">
          <div className="basis-1/2 md:my-2">
            <div className="w-[280px] md:w-[200px] mx-auto">
              <Image
                src={"/tridad.png"}
                width={280}
                height={180}
                objectFit="cover"
                alt="Picture of the author"
                style={{ weight: "100%", height: "100%" }}
              />
            </div>
            <p className="text-center text-[24px] my-12 md:my-6">Anni Marie</p>
          </div>

          <div className="basis-1/2 md:my-3">
            <div className=" mx-6">
              <label className="text-[14px] ">
                Full Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-md h-[40px]">
                <Input label={"Full Name"} />
              </div>
            </div>
            <div className="text-[14px] mx-6 mt-6 ">
              Votes<span className="ml-1 ">*</span>
            </div>


            <div className="   grid grid-rows-2 md:grid-rows-1 md:grid-cols-5 mr-2">

              <div className="flex w-[335px]  mx-auto md:w-full  col-span-2  border row-start-1 row-end-2 md:col-start-2 md:col-end-5 md:row-start-1 my-3 rounded-md md:ml-1">
                <div className=" rounded-md w-[50%]">
                  <Input label={"Full Name"} placeholder={"50"} />
                </div>
                <div className=" border-l-2 rounded-md w-[50%]">
                  <Input
                    label={"Full Name"}
                    placeholder={"$50"}
                    sty={"placeholder:text-right placeholder:pr-2"}
                  />
                </div>
              </div>

              <div className="w-[145px]  mx-auto md:w-[54px] my-3 md:col-start-1 md:row-start-1 md:col-end-2  row-start-2 row-end-2">

              <Button
                  label={"-"}
                  color={
                    "text-white bg-pink text-[24px]   py-1 cursor-pointer      rounded-md"
                  }
                  syl={"font-bold"}
                />
              </div>
              <div className=" w-[145px]  mx-auto md:w-[54px] my-3 md:col-start-5 md:row-start-1 md:col-end-6 md:ml-6 row-start-2 row-end-2">

                <Button
                  label={"+"}
                  color={
                    "text-white bg-pink text-[24px] font-semibold py-1 cursor-pointer    rounded-md"
                  }
                  syl={"font-bold"}
                />
              </div>
              {/* <div className="flex w-full my-3 ">
                
                
              </div> */}
            </div>
            <div className=" w-[90%] md:w-[93%] mx-auto">
              <div className="flex my-4">
                <Button
                  label={"Vote"}
                  color={
                    "text-white bg-pink text-[24px]   py-1 cursor-pointer    rounded-md"
                  }
                  syl={"font-bold"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VoteCard;
