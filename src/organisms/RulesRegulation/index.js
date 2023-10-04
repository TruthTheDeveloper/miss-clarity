import Image from "next/image";

import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const RulesRegulation = () => {
  return (
    <div className="my-4 md:mx-12 mx-2">
      <div className="text-center">
        <h1 className={`${roboto.className} text-[24px] py-2`}>
          Contest rules and Eligibility creteria
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.{" "}
        </p>
      </div>
      <div className="md:w-[900px] w-[350px] h-[300px] md:h-[300px] mx-auto relative my-6 rounded-2xl">
        <Image
          src={"/crown.svg"}
          fill
          objectFit="cover"
          alt="Picture of the author"
          style={{ height: "100%", width: "100%", borderRadius: 50 }}
        />
      </div>
      <ul className="md:w-[900px] md:mx-auto list-disc">
        <li className="p-4">
          Every voted made to each contestant recorded by our system, if for any reason a contestant needs to verify her result contact us and we would resolve any doubt she have 
        </li>
        <li className="p-4">
          We do not refund funds to user and request for refund might prevent you from either continuing or entering the next round of the competition
        </li>
        <li className="p-4">
          Using ultiple account to aquire vote is prohibited you are allowed to vote for urself as much as possible
        </li>
        <li className="p-4">
          Threatenig other contestant in any form is also prohibited, if discover can lead to quick eviction from the contest
        </li>
        <li className="p-4">
          Overly sexually explict photo or one that deplict are prohibited and can lead to diqualification from the contest
        </li>
       
      </ul>
    </div>
  );
};

export default RulesRegulation;
