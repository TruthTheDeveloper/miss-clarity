import Image from "next/image";
import { Inter } from "next/font/google";
import ParticipateCard from "@/molecules/PartcipateCard";

const inter = Inter({ weight: "700", subsets: ["latin"] });
const Participate = () => {
  return (
    <div className=" relative w-full h-[959px] md:h-[650px] mx-auto ">
      <div>
        <Image
          src={"/background.jpg"}
          fill={true}
          // width={113}
          // height={139}
          objectFit="cover"
          alt="Picture of the author"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className=" my-6">
          <div className="text-text-white text-[30.76px] w-[238px] md:w-[300px] md:text-center h-[124px] mx-auto border-dashed border-4 border-pink rounded-[10px]">
            <div className="flex justify-center pt-4">
              <h1 className={inter.className}>
                How To <br/> Participate
              </h1>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-evenly">
          <div className="md:mb-12">
          <ParticipateCard
            image={"/Task.svg"}
            title={"Sign Up"}
            content={'Register by clicking "Sign Up" and verify your email.'}
            color={"bg-light-pink"}
          />
          <div className="border-deep-pink w-[100px] h-[15px] ml-[88px] border-0 border-r-4 md:hidden"></div>
          <div className="bg-deep-pink w-[49.11px] h-[49.11px] border-r-2 mx-auto text-center  rounded-full md:hidden">
            <p className="py-3 text-white">1</p>
          </div>
          </div>
          <div>
          <ParticipateCard
            image={"/Client-Management.svg"}
            title={["Complete", "Profile:"]}
            content={"Upload photos and share your story."}
            color={"bg-white"}
          />
          <div className="border-deep-pink w-[100px] h-[15px] ml-[88px] border-0 border-r-4 md:hidden"></div>
          <div className="bg-deep-pink w-[49.11px] h-[49.11px] border-r-2 mx-auto text-center  rounded-full md:hidden">
            <p className="py-3 text-white">2</p>
          </div>
          </div>
        </div>
        <div className="md:flex md:justify-evenly">
          <div>
          <ParticipateCard
            image={"/Approval.svg"}
            title={"Collect Votes"}
            content={"Encourage friends to vote or buy extra votes."}
            color={"bg-light-pink"}
          />
          <div className="border-deep-pink w-[100px] h-[15px] ml-[88px] border-0 border-r-4 md:hidden"></div>
          <div className="bg-deep-pink w-[49.11px] h-[49.11px] border-r-2 mx-auto text-center md:hidden rounded-full">
            <p className="py-3 text-white">3</p>
          </div>
          </div>
          <div>
          <ParticipateCard
            image={"/Delivery-Time.svg"}
            title={["Wait for", "Results"]}
            content={"Keep an eye on for the winners announcement."}
            color={"bg-white"}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participate;
