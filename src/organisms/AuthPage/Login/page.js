"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/atoms/Input";
import Button from "@/atoms/Button";
import useSignIn from '../../../hooks/useSignIn'
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";

import { useState,  useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Link from "next/link";
const inter = Inter({ weight: "700", subsets: ["latin"] });

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [valiadationError, setValidationError] = useState("");
  const [signInSucess, setSignInSucess] = useState(false);
  const [alreadySignedUp, setAlreadySignedUpd] = useState(false);
  const id = localStorage.getItem("uid");
  
  const { _handleSignIn, _handleGoogleAuth, result } = useSignIn(
    email,
    password,
    setLoading,
    setSignInSucess,
    id
  );

  const router = useRouter();

  useEffect(() => {
    if(signInSucess){
      console.log('succesful')
      const resolved = async () => {
        const fire = await result()
  
        console.log(fire, 'fire')
  
        if(fire){
          console.log('fired')
          router.push("/dashboard");
        }else{
          console.log('not fired')

          router.push("/profile");
  
        }

      };
  
      resolved();

      
    }
  },[signInSucess])


  const submitHandler = () => {
    setLoading(true);
    setValidationError("");
    if (email.length < 1 || password < 1) {
      setValidationError("Please no field should be empty");
      setLoading(false);
      return;
    }

    if (email !== "" && password !== "") {
      _handleSignIn();
    } else {
      setLoading(false);
    }
  };

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

      <div
        className=" w-[380px] absolute bg-white    rounded-lg "
        style={{
          transform: `translate(${-50}%, ${-50}%)`,
          top: "50%",
          left: "50%",
        }}
      >
        <div className="m-4">
          <h1 className={`text-center text-[24px] ${inter.className}`}>
            Sign In
          </h1>
          <p className="text-[12px] text-center py-2">Login to your acccount</p>
          <p className="text-red text-sm text-center font-semibold">
            {valiadationError}
          </p>
        </div>
        <div className="m-5">
          <div className="my-2">
            <label className="text-[14px]">
              Email<span className="ml-1">*</span>
            </label>
            <div className="border rounded-[5px] py-1">
              <Input value={email} change={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="my-2">
            <label className="text-[14px]">
              Password<span className="ml-1">*</span>
            </label>
            <div className="border rounded-[5px] py-1">
              <Input
                type={"password"}
                value={password}
                change={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            {loading ? (
              <div
                className={`   w-full h-full "text-white bg-pink text-[14px] py-1 cursor-pointer my-2   rounded-md`}
              >
                <ClipLoader
                  color={"#E985A1"}
                  loading={loading}
                  cssOverride={override}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              <Button
                label={"Sign In"}
                color={
                  "text-white bg-pink text-[14px] py-1 cursor-pointer    rounded-md"
                }
                onSubmit={submitHandler}
              />
            )}
          </div>
          <div className="my-3 ">
            <Button
              label={"Login in with Google"}
              authButton
              authStyle={"flex justify-center"}
              color={
                "text-black text-[14px] py-1 cursor-pointer font-semibold border border-[#000] rounded-md "
              }
              onSubmit={_handleGoogleAuth}
            />
          </div>
          <Link
            className="text-[12px] underline"
            href={"/auth/forget-password"}
          >
            Forget Password?
          </Link>
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default Login;
