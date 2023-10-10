import Image from 'next/image'
import Button from "@/atoms/Button";

import { Inter } from "next/font/google";
const inter = Inter({ weight: "700", subsets: ["latin"] });
const VerifiedEmail = () => {

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
          Email Sent
          </h1>
          <p className="text-[16px] text-center py-2 ">
          Reset Password email has been sent , please check your email
          </p>
        </div>
        {/* <div className="flex my-4 w-[90%] md:w-[93%] mx-auto">
                <Button
                  label={"PROCEED TO LOGIN"}
                  color={
                    "text-white bg-pink text-[18px]   py-2 cursor-pointer    rounded-md flex justify-center"
                  }
                  syl={"font-bold mx-2"}

                />
              </div> */}
      </div>
    </main>
    )
}

export default VerifiedEmail;