"use client";
import { useEffect, useState } from "react";
import QuestionCard from "@/molecules/QuestionCard";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const Frequently = () => {
  
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);


  return (
    <div id="faq" className="px-6 md: mt-12 md:flex md:justify-between w-full">
      <div className="md:basis-1/2 md:px-8">
        <div className="text-[35.34px] leading-[42.41px] ">
          <h1 className={roboto.className}>Frequently asked questions</h1>
        </div>
        <div className="mt-6">
          <p>Frequently asked questions ordered by popularity.</p>
        </div>
      </div>
      <div className="mt-6 md:mt-0 w-full md:basis-1/2 md:ml-16">
        <QuestionCard
          question={" How do I enter the online beauty pageant contest?"}
          answers={
            'Its Simple Apply by Signing Up either by clicking the "Apply" button at the top of the website or click on the signUp on the navbar button'
          }
          open={openModal1}
          changeOpenState={() => setOpenModal1((prev) => !prev)}
        />
        <QuestionCard
          question={"What are the eligibility requirements?"}
          answers={
            'You just have to be 15 years old or more'
          }
          open={openModal2}
          changeOpenState={() => setOpenModal2((prev) => !prev)}
        />

        <QuestionCard
          question={"What are the judging criteria?"}
          answers={
            'We gather all the vote gotten by each contestant and use their vote to decide if the fall into first, secoond or third runner up'
          }
          open={openModal3}
          changeOpenState={() => setOpenModal3((prev) => !prev)}
        />

        <QuestionCard
          question={"Are there specific outfits required for different rounds?"}
          open={openModal4}
          answers={
            'No there are none, just a pretty looking outfit would do'
          }
          changeOpenState={() => setOpenModal4((prev) => !prev)}
        />
        <QuestionCard
          question={"Am i required to submit a video"}
          answers={
            'Submitting a video is optional and not required'
          }
          open={openModal5}
          changeOpenState={() => setOpenModal5((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default Frequently;
