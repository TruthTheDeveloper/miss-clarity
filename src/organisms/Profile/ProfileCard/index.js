import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/atoms/Input";
import Button from "@/atoms/Button";

const inter = Inter({ weight: "700", subsets: ["latin"] });

const ProfileCard = () => {
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
              Profile
            </h1>
            <p className="text-[16px] text-center py-2 ">
              Complete your Profile
            </p>
          </div>
        <div className="md:flex">
        <div id="first div" className="md:basis-1/2  md:w-full">
          
          <div className="text-center my-2 text-[24px] md:text-[16px]">
            <h1>Add Image</h1>
          </div>
          <div className="bg-grey h-[160px] w-[160px] mb-12 mx-auto border rounded-md">
            <div className="flex relative items-center justify-center h-full">
              <div className=" ">
                <Image
                  src={"/add-image.svg"}
                  width={40}
                  height={40}
                  objectFit="cover"
                  alt="Picture of the author"
                />
              </div>
              <div className="absolute right-2 bottom-2">
                <Image
                  src={"/delete.svg"}
                  width={20}
                  height={20}
                  objectFit="cover"
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
          <div className="text-center my-2 text-[24px] md:text-[16px]">
            <h1>Add Video</h1>
          </div>
          <div className="bg-grey h-[160px] w-[160px] mb-12 mx-auto border rounded-md">
            <div className="flex relative items-center justify-center h-full">
              <div className=" ">
                <Image
                  src={"/add-image.svg"}
                  width={40}
                  height={40}
                  objectFit="cover"
                  alt="Picture of the author"
                />
              </div>
              <div className="absolute right-2 bottom-2">
                <Image
                  src={"/delete.svg"}
                  width={20}
                  height={20}
                  objectFit="cover"
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="second div" className="w-[320px] md:pr-12 mx-auto md:grid md:grid-cols-2  md:w-full md:gap-5 md:mt-8">
          <div id="row1" >
            <div className="my-2 rounded-[10px]">
              <label className="text-[14px]">
                Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-[5px]">
                <Input />
              </div>
            </div>
            <div className="my-2 rounded-[10px]">
              <label className="text-[14px]">
                Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-[5px]">
                <Input />
              </div>
            </div>
            <div className="my-2 rounded-[10px]">
              <label className="text-[14px]">
                Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-[5px]">
                <Input />
              </div>
            </div>
            <div className="my-2 rounded-[10px]">
              <label className="text-[14px]">
                Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-[5px]">
                <Input />
              </div>
            </div>
            <div className="my-2 rounded-[10px]">
              <label className="text-[14px]">
                Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-[5px]">
                <Input />
              </div>
            </div>
          </div>

          <div id="row2" className="">
            <div className="my-2 rounded-[10px]">
              <label className="text-[14px]">
                Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-[5px]">
                <Input />
              </div>
            </div>
            <div className="my-2 rounded-[10px]">
              <label className="text-[14px]">
                Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-[5px]">
                <Input />
              </div>
            </div>
            <div className="my-2 rounded-[10px]">
              <label className="text-[14px]">
                Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-[5px]">
                <Input />
              </div>
            </div>
            <div className="my-2 rounded-[10px]">
              <label className="text-[14px]">
                Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-[5px]">
                <Input />
              </div>
            </div>
            <div className="my-2 rounded-[10px]">
              <label className="text-[14px]">
                Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-[5px]">
                <Input />
              </div>
            </div>
            
          </div>
          <div className="my-6 md:my-0 col-span-2 md:h-[32px] ">
              <Button
                label={"Submit"}
                color={
                  "text-white bg-pink text-[14px] py-1 cursor-pointer    rounded-md"
                }
              />
            </div>
        </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileCard;
