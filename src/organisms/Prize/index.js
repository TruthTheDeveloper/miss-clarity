import { Inter } from "next/font/google";
import Prizes from "@/molecules/Prizes";
const luxurios = Inter({ weight: "700", subsets: ["latin"] });

const Prize = () => {
  return (
    <div >
      <div className="flex justify-between mt-4">
        <div className=" border-t-[0.75px] w-[32.52px]   mt-4 "></div>
        <div className="text-[18px] text-center">
        <h1 className={luxurios.className}>
          {" "}
          PRIZES FOR THIS ROUNDS CANDIDATE
        </h1>
        </div>
        <div className=" border-t-[0.75px] w-[32.52px] mt-4"></div>
      </div>

      <Prizes
        position={"First Place Winner"}
        positionImage={"/1ST.png"}
        awardImage={"/Winner-Badge-01.svg"}
        cash={"25,000"}
        modeling={"Modeling Contract"}
        vacation={"Luxury Vacation"}
        ticket={"Wardrobe "}
      />

<Prizes
        position={"Second Place Winner"}
        positionImage={"/2ND.png"}
        awardImage={"/Winner-Badge-02.svg"}
        cash={"25,000"}
        modeling={"Modeling Contract"}
        vacation={"Luxury Vacation"}
        ticket={"Wardrobe "}
      />
      <Prizes
        position={"Third Place Winner"}
        positionImage={"/3RD.png"}
        awardImage={"/Winner-Badge-03.svg"}
        cash={"25,000"}
        modeling={"Modeling Contract"}
        vacation={"Luxury Vacation"}
        ticket={"Wardrobe "}
      />
    </div>
  );
};

export default Prize;
