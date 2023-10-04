import Button from "@/atoms/Button";
import { Luxurious_Roman } from "next/font/google";
import Image from "next/image";

const luxurios = Luxurious_Roman({ weight: "400", subsets: ["latin"] });
const Rules = () => {
  return (
    <div id="rules" className=" bg-shade-pink h-[1200px] md:h-[800px] pt-6 mb-12">
      <div className="bg-white w-[300px] md:w-[800px] h-[1050.12px] md:h-[750px]  mx-auto rounded-[16.08px] md:flex md:justify-between ">
        <div className="md:w-[450px] md:basis-1/2">
          <div>
          <div className="flex justify-between pt-8">
            <div className=" border-t-[0.75px] w-[32.52px] mt-4 text-[19px] "></div>
            <h1 className={luxurios.className}>
              {" "}
              Contest rules and <br /> eligibility criteria
            </h1>
            <div className=" border-t-[0.75px] w-[32.52px] mt-4"></div>
          </div>
          <div className="mx-12 mt-8">
            <ul className="list-disc text-[16.62px]">
              <li className="py-2">
                This is a 1 week contest, each round is 1 week and no more, results are announce at the end of the week.
              </li>
              <li className="py-2">
                Your must be atleast 15 years of age to participate in this contest failure to meet with this requirement may leaad to disqualification
              </li>

              <li className="py-2">
                Peronal update and the status of your vote would be sent to your mail provided on the site
              </li>

              <li className="py-2">
               Winners of the vote would be invited for an online interview, note you are provided to participate in this interview failure to do so my lead to disqualification and lose of prize
              </li>

              <li className="py-2">
                Photo used in the your profile must be of good quality, poor quality profile will not be enlisted in the top contestant even though the 1000 vote requirement is reached 
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center mt-4 ">
            <div className=" border-t-[0.75px] w-[32.52px]  text-[19px] "></div>

            <div className="w-[147px] h-[30px] md:h-[35px] ">
              <Button
                label={"View More"}
                navigate={"/rules-regulation"}
                borderRadius={"rounded-[50px]"}
                color={"bg-pink  text-text-white md:text-[20px] py-1"}
              />
            </div>

            <div className=" border-t-[0.75px] w-[32.52px] "></div>
          </div>
          </div>
        </div>
        <div className="relative md:basis-1/2 hidden md:block">
            <Image
              src={"/miss.jpg"}
              fill
              // width={81}
              // height={81}
              objectFit="cover"
              alt="Picture of the author"
            />
          </div>
      </div>
    </div>
  );
};

export default Rules;
