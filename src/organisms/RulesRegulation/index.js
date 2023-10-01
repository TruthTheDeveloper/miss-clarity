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
      <div className="md:w-[900px] w-[400px] h-[300px] md:h-[300px] mx-auto relative my-6 rounded-2xl">
        <Image
          src={"/crown.svg"}
          fill
          objectFit="cover"
          alt="Picture of the author"
          style={{ height: "100%", width: "100%", borderRadius: 50 }}
        />
      </div>
      <div className="md:w-[900px] md:mx-auto ">
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
        <p className="p-4">
          Age Restrictions: Failure to meet the specified age requirements for
          the contest. Incomplete Profile: Not filling out the contestant
          profile with the required information and photos.
        </p>
      </div>
    </div>
  );
};

export default RulesRegulation;
