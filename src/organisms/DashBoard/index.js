"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ weight: "700", subsets: ["latin"] });
import Input from "@/atoms/Input";
import Button from "@/atoms/Button";
import VotingHistory from "@/molecules/VotingHistory";
import { useEffect, useState } from "react";
import profileServices from "@/firebase/services/profile.services";
import ClipLoader from "react-spinners/ClipLoader";
import CopyToClipboard from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import voteServices from "@/firebase/services/vote.services";
import { useRouter } from 'next/navigation'


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "E985A1",
};
const DashBoard = () => {
  let id = null;

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    id = localStorage.getItem("uid")
  }

  const [data, setData] = useState();
  const [voteData, setVoteData] = useState()
  const [voteLoading, setVoteLoading] = useState(true)
  const [loading, setLoading] = useState(true);
  const [totalVoteCount, setTotalVoteCount] = useState(0)

  const [copied, setCopied] = useState(false);

  const [value, setValue] = useState("");
  
  const router = useRouter()

  useEffect(() => {
    // Calculate the total vote count when voteData changes
    if (voteData) {
      const totalVotes = voteData.reduce((total, item) => total + item.vote, 0);
      setTotalVoteCount(totalVotes);
    }
  }, [voteData]);



  useEffect(() => {
    if(!id){
      router.push('/auth/login')
    }
  },[id])

  useEffect(() => {
    if (data) {
      setValue(`https://miss-elegance.vercel.app/${data?.firstName.replace(/["']/g, '')} - ${data?.lastName.replace(/["']/g, '')}/${id.replace(/["']/g, '')}`);
    }
  }, [data]);

  useEffect(() => {
    const result = async () => {
      const profileDetails = await profileServices.getProfile(id);
      setData(profileDetails?.data()?.profileInfo);
      console.log(profileDetails?.data()?.profileInfo, "result");
    };
    if(id){
      result();
    }
  }, []);


  useEffect(() => {
    const result = async () => {
      const voteDetails = await voteServices.getAllUserVote(id)
      console.log(voteDetails?.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setVoteData(voteDetails?.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    result()
  },[])

  useEffect(() => {
    data && setLoading(false)
    voteData && setVoteLoading(false); 
  }, [data, loading, voteLoading, voteData]);

  const copyToClipboard = () => {
    console.log("clicked");
    setCopied(true);
    toast.success("copied to clipboard");
  };
  return (
    <main className="relative">
      <div className="relative w-full h-[1370px] lg:h-[780px] ">
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
          <h1 className={`text-center text-[24px] ${inter.className}`}>
            Your DashBoard
          </h1>
          <p className="text-[16px] text-center py-2 ">
            For your favorite candidate
          </p>
        </div>
        <div className="md:flex md:justify-between">
          <div className="md:w-full md:basis-1/2 md:ml-12">
            <div className="basis-1/2 md:my-2">
              <div className="w-[280px] md:w-[200px] mx-auto">
                {data?.imageURL ? (
                  <Image
                    src={data && data.imageURL}
                    width={280}
                    height={180}
                    objectFit="cover"
                    alt="Picture of the author"
                    style={{ weight: "100%", height: "100%" }}
                  />
                ) : (
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
                )}
              </div>
              <p className="text-center text-[24px] my-12 md:my-6">
                {data && `${data?.firstName} ${data?.lastName}`}
              </p>
            </div>
            <div className="flex justify-between border w-[240px] m-auto my-4 py-1 rounded-xl">
              <div className="border-r w-[50%]">
                <p className="text-lg ml-4">Total Votes</p>
              </div>
              <div className="border-l w-[50%]">
                <p className="text-pink font-bold text-2xl ml-4">{totalVoteCount}</p>
              </div>
            </div>
            <div className=" w-[90%] md:w-[93%] mx-auto">
              <label className="text-[14px] ">
                Voting Link<span className="ml-1">*</span>
              </label>
              <div className="border rounded-md h-[55px] py-1">
                <Input
                  label={"Full Name"}
                  placeholder={"site.com/contestantName/id"}
                  sty={"placeholder:mx-2"}
                />
              </div>
            </div>

            <div className=" w-[90%] md:w-[93%] mx-auto">
              <div className="flex my-4">
                <CopyToClipboard text={value} onCopy={() => copyToClipboard()}>
                  <button className="text-white bg-pink text-[18px]   py-2 cursor-pointer    rounded-md flex justify-center w-full h-full px-4">
                    Copy Link{" "}
                    <Image
                      src={"/copy.svg"}
                      width={25}
                      height={25}
                      objectFit="cover"
                      alt="Picture of the author"
                      style={{ weight: "100%", height: "100%", paddingLeft: 6 }}
                    />
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div className="border border-grey w-[90%] h-[500px] overflow-scroll  overflow-x-hidden mx-auto rounded-2xl mb-6 md:mb-12 md:mt-6 md:mx-12">
            {voteData ? voteData.map((item, index) => {
              return(
                  <VotingHistory key={item.id} name={item.fullname} time={item.time} voteCount={item.vote}/>
                
              )
            }): <ClipLoader
            color={"text-pink"}
            loading={voteLoading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />}
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default DashBoard;
