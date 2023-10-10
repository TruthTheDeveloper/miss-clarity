"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/atoms/Input";
import Button from "@/atoms/Button";
import useSignUp from "@/hooks/useSignUp";
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';


import { useState, CSSProperties, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const inter = Inter({ weight: "700", subsets: ["latin"] });

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [valiadationError, setValidationError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signUpSucess, setSignUpSucess] = useState(false)

  const {_handleSignUp, _handleEmailVerification, _handleGoogleAuth} = useSignUp(name, email,password, setLoading, setSignUpSucess);
  const router = useRouter()

  useEffect(() => {
    if(signUpSucess){
      router.push('/verify-email')
      _handleEmailVerification(email)
    }
  },[signUpSucess])


  const submitHandler = () => {
    setLoading(true);
    setValidationError("");
    if (name.length < 1 || email.length <1 || password < 1) {
      setValidationError("Please no field should be empty");
      setLoading(false);
      return
    }
    if (password !== confirmPassword) {
      setValidationError("Password does not match");
      setLoading(false);
      return;
    }

    if (email !== "" && password !== "" && name) {
      _handleSignUp()
    }else {
      setLoading(false);
    }

    
  };

  return (
    <main className="relative">
      <div className="relative w-full h-[590px] lg:h-[630px] ">
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
            Sign Up
          </h1>
          <p className="text-[12px] text-center py-2">Create an account</p>

          <p className="text-red text-sm text-center font-semibold">
            {valiadationError}
          </p>
        </div>
        <div className="m-5">
          <div className="my-2 rounded-[10px]">
            <label className="text-[14px]">
              Full Name<span className="ml-1">*</span>
            </label>
            <div className="border rounded-[5px] py-1">
              <Input value={name} change={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className="my-2 rounded-[10px] ">
            <label className="text-[14px]">
              Email<span className="ml-1">*</span>
            </label>
            <div className="border rounded-[5px] py-1">
              <Input value={email} change={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="my-2 rounded-[10px]">
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
          <div className="my-2">
            <label className="text-[14px]">
              Confirm Password<span className="ml-1">*</span>
            </label>
            <div className="border rounded-[5px] py-1">
              <Input
                value={confirmPassword}
                type={"password"}
                change={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            {loading ? <div
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
            </div>:  <Button
              label={"Sign up"}
              
              color={
                "text-white bg-pink text-[14px] py-1 cursor-pointer    rounded-md"
              }
              onSubmit={submitHandler}
            />}
           

            
          </div>
          <div className="my-3">
            <Button
              label={"Sign up with Google"}
              authButton
              authStyle={'flex justify-center'}
              color={
                "text-black text-[14px] py-1 cursor-pointer font-semibold border border-[#000] rounded-md "
              }

              onSubmit={_handleGoogleAuth}
            />
          </div>
        </div>
      </div>
      <Toaster/>
    </main>
  );
};

export default SignUp;
