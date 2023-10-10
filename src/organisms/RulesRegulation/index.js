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
          Ensure all rules and neccesary guidelines are followed throughly.{" "}
        </p>
      </div>
      <div className="md:w-[900px] w-[350px] h-[300px] md:h-[300px] mx-auto relative my-6 rounded-2xl">
        <Image
          src={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/crown.svg?alt=media&token=5dd0dc37-a56b-4a5c-aa41-e9bbffa90c27&_gl=1*stmbo2*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MzcwNC4zNC4xLjE2OTY5NzM3NDguMTYuMC4w"}
          fill
          objectFit="cover"
          alt="Picture of the author"
          style={{ height: "100%", width: "100%", borderRadius: 50 }}
        />
      </div>
      <ul className="md:w-[900px] md:mx-auto list-disc">
        <li className="p-4">
          Every vote made to each contestant is recorded by our system, if for any reason a contestant needs to verify her result contact us and we would resolve any doubt she have 
        </li>
        <li className="p-4">
          We do not refund funds to user and request for refund might prevent you from either continuing or entering the next round of the competition
        </li>
        <li className="p-4">
          Using multiple account to aquire vote is prohibited you are allowed to vote for urself as much as possible
        </li>
        <li className="p-4">
          Threatening other contestant in any form is also prohibited, if discover would lead to quick eviction from the contest
        </li>
        <li className="p-4">
          Overly sexually explict photo or one that deplict violence is prohibited and can lead to diqualification from the contest
        </li>

       
      </ul>
    </div>
  );
};

export default RulesRegulation;
