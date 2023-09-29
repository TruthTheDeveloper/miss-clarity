import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ weight: "700", subsets: ["latin"] });
import Input from "@/atoms/Input";
import Button from "@/atoms/Button";
import VotingHistory from "@/molecules/VotingHistory";

const DashBoard = () => {
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
            Your DashBoard
          </h1>
          <p className="text-[16px] text-center py-2 ">
            For your favorite candidate
          </p>
        </div>
        <div className="md:flex md:justify-between">
          <div className="md:w-full md:basis-1/2 md:ml-12">
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
              <p className="text-center text-[24px] my-12 md:my-6">
                Anni Marie
              </p>
            </div>

            <div className=" w-[90%] md:w-[93%] mx-auto">
              <label className="text-[14px] ">
                Voting Link<span className="ml-1">*</span>
              </label>
              <div className="border rounded-md h-[55px]">
                <Input
                  label={"Full Name"}
                  placeholder={"Voting Link/ContestantName/Site.com"}
                  sty={"placeholder:mx-2"}
                />
              </div>
            </div>

            <div className=" w-[90%] md:w-[93%] mx-auto">
              <div className="flex my-4">
                <Button
                  label={"Copy Link"}
                  color={
                    "text-white bg-pink text-[18px]   py-2 cursor-pointer    rounded-md flex justify-center"
                  }
                  syl={"font-bold mx-2"}
                  showImage
                />
              </div>
            </div>
            </div>
            <div className="border border-grey w-[90%] mx-auto rounded-2xl mb-6 md:mb-12 md:mt-6 md:mx-12">
              <VotingHistory />
              <VotingHistory />

              <VotingHistory />

              <VotingHistory />

              <VotingHistory />
              <VotingHistory />

              <VotingHistory />
            </div>
          
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
