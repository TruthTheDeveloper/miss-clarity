import Button from "@/atoms/Button";
import { Luxurious_Roman } from "next/font/google";

const luxurios = Luxurious_Roman({ weight: "400", subsets: ["latin"] });
const Rules = () => {
  return (
    <div className=" bg-shade-pink h-[700px] pt-6">
      <div className="bg-white w-[300px] h-[636.12px]  mx-auto rounded-[16.08px]  ">
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
        <div className="flex justify-between items-center mt-4">
          <div className=" border-t-[0.75px] w-[32.52px]  text-[19px] "></div>

          <div className="w-[147px] h-[30px] ">
            <Button label={"View More"} />
          </div>

          <div className=" border-t-[0.75px] w-[32.52px] "></div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
