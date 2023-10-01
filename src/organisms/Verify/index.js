import Image from 'next/image'
import Button from "@/atoms/Button";

import { Inter } from "next/font/google";
const inter = Inter({ weight: "700", subsets: ["latin"] });
const Verify = () => {

    return(
        <main className="relative">
      <div className="relative w-full h-[500px] lg:h-[780px] ">
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
          <h1 className={`text-center text-[30px] font-semibold ${inter.className}`}>
          Almost done!
          </h1>
          <p className="text-[16px] text-center py-2 ">
          Check your Email for verification to confirm your registration
          </p>
        </div>
      </div>
    </main>
    )
}

export default Verify;