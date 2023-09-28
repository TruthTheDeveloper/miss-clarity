import Button from "@/atoms/Button";
import { Luxurious_Roman } from "next/font/google";
import Image from "next/image";

const luxurios = Luxurious_Roman({ weight: "400", subsets: ["latin"] });
const Rules = () => {
  return (
    <div className=" bg-shade-pink h-[800px] md:h-[700px] pt-6 mb-12">
      <div className="bg-white w-[300px] md:w-[800px] h-[760.12px] md:h-[630px]  mx-auto rounded-[16.08px] md:flex md:justify-between ">
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
                Age Restrictions: Failure to meet the specified age requirements
                for the contest.
              </li>
              <li className="py-2">
                Age Restrictions: Failure to meet the specified age requirements
                for the contest.
              </li>

              <li className="py-2">
                Age Restrictions: Failure to meet the specified age requirements
                for the contest.
              </li>

              <li className="py-2">
                Age Restrictions: Failure to meet the specified age requirements
                for the contest.
              </li>

              <li className="py-2">
                Age Restrictions: Failure to meet the specified age requirements
                for the contest.
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center mt-4 ">
            <div className=" border-t-[0.75px] w-[32.52px]  text-[19px] "></div>

            <div className="w-[147px] h-[30px] md:h-[35px] ">
              <Button
                label={"View More"}
                borderRadius={"rounded-[50px]"}
                color={"bg-pink  text-text-white md:text-[20px]"}
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
