import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/atoms/Input";
import Button from "@/atoms/Button";
const inter = Inter({ weight: "700", subsets: ["latin"] });

const Login = () => {
  return (
    <main className="relative">
      <div className="relative w-full h-[590px] lg:h-[635px] ">
        <Image
          src={"/bg.png"}
          fill={true} 
          // width={113}
          // height={139}
          objectFit="cover"
          alt="Picture of the author"
        />
      </div>
     
      <div className=" w-[380px] absolute bg-white    rounded-lg " style={{transform: `translate(${-50}%, ${-50}%)`, top:"50%", left:"50%"}}>   
        <div className="m-4">
          <h1 className={`text-center text-[24px] ${inter.className}`}>
            Sign In
          </h1>
          <p className="text-[12px] text-center py-2">
            Login to your acccount
          </p>
        </div>
        <div className="m-5">
          <div className="my-2">
            <label className="text-[14px]">
              Email<span className="ml-1">*</span>
            </label>
            <div className="border">
              <Input />
            </div>
          </div>
          <div className="my-2">
            <label className="text-[14px]">
              Password<span className="ml-1">*</span>
            </label>
            <div className="border ">
              <Input />
            </div>
          </div>
          <div>
            <Button label={'Sign up'} color={'text-white bg-pink text-[14px] py-1 cursor-pointer    rounded-md'} />
          </div>
          <div className="my-3">
            <Button label={'Sign up'} color={'text-black text-[14px] py-1 cursor-pointer font-semibold border border-[#000] rounded-md '}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
