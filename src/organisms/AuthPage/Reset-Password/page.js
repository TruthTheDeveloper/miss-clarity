"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/atoms/Input";
import Button from "@/atoms/Button";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

import { useState, CSSProperties, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import useResetPassword from "@/hooks/useResetPassword";
const inter = Inter({ weight: "700", subsets: ["latin"] });

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

const ResetPassword = () => {
  const id = localStorage.getItem("uid");


  const [loading, setLoading] = useState(false);
  const [valiadationError, setValidationError] = useState("");
  const [signInSucess, setSignInSucess] = useState(false);
  const [alreadySignedUp, setAlreadySignedUpd] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { _handleResetPassword, reAuthenticateUser } = useResetPassword(password)

  const router = useRouter();

  useEffect(() => {
    if (signInSucess && !alreadySignedUp) {
      router.push("/profile");
    } else if (signInSucess && alreadySignedUp) {
      router.push("/dashboard");
    }
  }, [signInSucess, alreadySignedUp]);

  const submitHandler = () => {
    setLoading(true);
    setValidationError("");
    if (password.length < 1) {
      setValidationError("Please no field should be empty");
      setLoading(false);
      return;
    }

    if (password !== "") {
        _handleResetPassword()
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
            Reset Password
          </h1>
          <p className="text-[12px] text-center py-2">Add new password</p>
          <p className="text-red text-sm text-center font-semibold">
            {valiadationError}
          </p>
        </div>
        <div className="m-5">
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
                label={"Reset Password"}
                color={
                  "text-white bg-pink text-[14px] py-1 cursor-pointer    rounded-md"
                }
                onSubmit={submitHandler}
              />
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default ResetPassword;
