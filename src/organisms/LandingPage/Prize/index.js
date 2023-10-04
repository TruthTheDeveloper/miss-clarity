import { Inter } from "next/font/google";
import Prizes from "@/molecules/Prizes";
const luxurios = Inter({ weight: "700", subsets: ["latin"] });

const Prize = () => {
  return (
    <div id="prize">
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

      <div className="md:flex md:justify-evenly">
        <Prizes
          position={"First Place Winner"}
          positionImage={"/1ST.png"}
          awardImage={"/Winner-Badge-01.svg"}
          cash={"120,000"}
          modeling={"Modeling Contract with our sponsors"}
          vacation={"Free modeling training by experts"}
          ticket={"$2000 Scholarship "}
        />

        <Prizes
          position={"Second Place Winner"}
          positionImage={"/2ND.png"}
          awardImage={"/Winner-Badge-02.svg"}
          cash={"80,000"}
          modeling={"Free gift fashion accessories from our sponsors "}
          vacation={"All expense paid Luxury Vacation to Paris"}
          ticket={"Personal Styling Session"}
        />
        <Prizes
          position={"Third Place Winner"}
          positionImage={"/3RD.png"}
          awardImage={"/Winner-Badge-03.svg"}
          cash={"40,000"}
          modeling={"Professional photoshot"}
          vacation={"Gift cards from our sponors fashion boutiques"}
          ticket={"$500 Scholarship "}
        />
      </div>
    </div>
  );
};

export default Prize;
