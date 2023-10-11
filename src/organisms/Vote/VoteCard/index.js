"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/atoms/Input";
import Button from "@/atoms/Button";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import profileServices from "@/firebase/services/profile.services";
import useVote from "@/hooks/useVote";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "E985A1",
};
const inter = Inter({ weight: "700", subsets: ["latin"] });

const VoteCard = ({ image, name, params }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [voteLoading, setVoteLoading] = useState(false);
  const [countValue, setCountValue] = useState(1);
  const [priceValue, setPriceValue] = useState(1);
  const [fullname, setfullName] = useState("");
  const [voteSucess, setVoteSuccess] = useState(false);
  const [valiadationError, setValidationError] = useState("");

  const router = useRouter();
  let id = null;

  if (params) {
    id = decodeURIComponent(params.slug[1]);
    console.log(`"${id}"`)
  }

  const { _handleVote } = useVote(`"${id}"`, fullname, countValue, setVoteSuccess);

  useEffect(() => {
    const result = async () => {
      const profileDetails = await profileServices.getProfile(`"${id}"`);
      setData(profileDetails?.data()?.profileInfo);
      console.log(profileDetails?.data(), "result");
    };
    if (params) {
      result();
    }
  }, []);

  useEffect(() => {
    if (params) {
      data && setLoading(false);
    }
  }, [data, loading]);

  useEffect(() => {
    if (voteSucess && data) {
      toast.success(`you gave ${countValue} votes to ${data?.firstName}`);
      setVoteLoading(false);
      setVoteSuccess(false);
    } else {
      setVoteLoading(false);
      setVoteSuccess(false);
    }
  }, [voteSucess]);

  const inputValueHandler = (text) => {
    setValidationError("");
    const numberValue = parseFloat(text);

    if (typeof numberValue === "number" && !isNaN(numberValue)) {
      setCountValue(numberValue);

      setPriceValue(numberValue);
    } else {
      setCountValue(parseFloat(0));
      setPriceValue(parseFloat(0));
    }
  };

  const subtract = () => {
    if (countValue && priceValue >= 1) {
      setCountValue((prev) => prev - 1);
      setPriceValue((prev) => prev - 1);
    }
  };

  const add = () => {
    const newCountValue = parseFloat(countValue) + 1;
    const newPriceValue = parseFloat(priceValue) + 1;
    setCountValue(newCountValue);
    setPriceValue(newPriceValue);
  };

  const submitVote = () => {
    setVoteLoading(true);
    if (fullname === "") {
      setValidationError("Full name is required");
      setVoteLoading(false);
      return;
    } else if (countValue < 1 && priceValue < 1) {
      setValidationError("Vote is required");
      setVoteLoading(false);

      return;
    }

    // _handleVote();
    router.push("/make-payment");
  };

  const handleInput = (event) => {};

  const renderImage = () => {
    if (data?.imageURL && !image) {
      return (
        <Image
          src={data && data.imageURL}
          width={280}
          height={180}
          objectFit="cover"
          alt="Picture of the author"
          style={{ weight: "100%", height: "100%" }}
        />
      );
    } else if (image) {
      return (
        <Image
          src={image}
          width={280}
          height={180}
          objectFit="cover"
          alt="Picture of the author"
          style={{ weight: "100%", height: "100%" }}
        />
      );
    } else {
      return (
        <div className=" text-pink">
          <ClipLoader
            color={"text-pink"}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      );
    }
  };

  return (
    <main className="relative">
      <div className="relative w-full h-[1370px] lg:h-[780px] ">
        <Image
          src={"/bg.png"}
          fill={true}
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
          <h1 className={`text-center text-[24px] ${inter.className}`}>
            Cast Your Votes
          </h1>
          <p className="text-[16px] text-center py-2 ">
            For your favorite candidate
          </p>
          <p className="text-red text-sm text-center font-semibold">
            {valiadationError}
          </p>
        </div>
        <div className="md:flex">
          <div className="basis-1/2 md:my-2">
            <div className="w-[280px] md:w-[200px] mx-auto">
              {renderImage()}
            </div>
            <p className="text-center text-[24px] my-12 md:my-6">
              {" "}
              {image ? name : `${data ? data?.firstName: ''} ${data ? data?.lastName:''}`}
            </p>
          </div>

          <div className="basis-1/2 md:my-3">
            <div className=" mx-6">
              <label className="text-[14px] ">
                Full Name<span className="ml-1">*</span>
              </label>
              <div className="border rounded-md h-[40px]  py-1">
                <Input
                  label={"Full Name"}
                  change={(e) => setfullName(e.target.value)}
                  value={fullname}
                  onInput={handleInput}
                />
              </div>
            </div>
            <div className="text-[14px] mx-6 mt-6 ">
              Votes<span className="ml-1 ">*</span>
            </div>

            <div className="   grid grid-rows-2 md:grid-rows-1 md:grid-cols-5 ">
              <div className="flex w-[335px]  mx-auto md:w-full  col-span-2  border row-start-1 row-end-2 md:col-start-2 md:col-end-5 md:row-start-1 my-3 rounded-md md:ml-1">
                <div className=" rounded-md w-[50%] py-1">
                  <Input
                    label={"Full Name"}
                    placeholder={"50"}
                    value={priceValue}
                    change={(text) => inputValueHandler(text.target.value)}
                    min="1"
                  />
                </div>
                <div className=" border-l-2 rounded-md w-[50%] pr-1">
                  <Input
                    label={"Full Name"}
                    placeholder={"$50"}
                    value={`$ ${countValue}`}
                    change={(text) => inputValueHandler(text.target.value)}
                    min="1"
                  />
                </div>
              </div>

              <div className="w-[145px]  mx-auto md:w-[54px] my-3 md:col-start-1 md:row-start-1 md:col-end-2  row-start-2 row-end-2">
                <Button
                  label={"-"}
                  color={
                    "text-white bg-pink text-[24px]   py-1 cursor-pointer      rounded-md"
                  }
                  syl={"font-bold"}
                  onSubmit={() => subtract()}
                />
              </div>
              <div className=" w-[145px]  mx-auto md:w-[54px] my-3 md:col-start-5 md:row-start-1 md:col-end-6 md:ml-6 row-start-2 row-end-2">
                <Button
                  label={"+"}
                  color={
                    "text-white bg-pink text-[24px] font-semibold py-1 cursor-pointer    rounded-md"
                  }
                  syl={"font-bold"}
                  onSubmit={() => add()}
                />
              </div>
            </div>
            <div className=" w-[90%] md:w-[93%] mx-auto">
              <div className="flex my-4">
                {voteLoading ? (
                  <ClipLoader
                    color={"#E985A1"}
                    loading={voteLoading}
                    cssOverride={override}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  <Button
                    label={"Vote"}
                    color={
                      "text-white bg-pink text-[16px] md:text-[18px]   py-1 cursor-pointer    rounded-md"
                    }
                    onSubmit={submitVote}
                    syl={"font-bold"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default VoteCard;
