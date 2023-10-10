"use client";

import { Inter } from "next/font/google";

import Button from "@/atoms/Button";
import Input from "@/atoms/Input";
import { useState, useEffect } from "react";

const inter = Inter({ weight: "700", subsets: ["latin"] });

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

const MakePayment = () => {

  const [valiadationError, setValidationError] = useState("");
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [date, setDate] = useState('')
  const [Cvv, setCvv] = useState('')

  const submitHandler = () => {
    location.reload();
  };

  return (
    <main className="h-[590px] lg:h-[535px] bg-grey flex items-center justify-center">
      <div className="w-full mx-2 md:w-[630px]  bg-white    rounded-lg  lg:h-[300px] pt-6">
        <div className="m-4">
          <div className="md:flex justify-center my-2">
            <div>
              <p className="pl-2 py-1">Card Holder Name</p>
              <div className="border rounded-md mx-2 py-1">
                <Input value={name} change={(e) => setName(e.target.value)} placeholder={"John Doe"}/>
              </div>
            </div>
            <div>
              <p className="pl-2 py-1">Card Number</p>
              <div className="border rounded-md mx-2 py-1">
                <Input value={number} change={(e) => setNumber(e.target.value)} placeholder={"1234 5678 9012 3456"}/>
              </div>
            </div>
          </div>
          <div className="md:flex justify-center my-2">
            <div>
              <p className="pl-2 py-1">Expiring Date</p>
              <div className="border rounded-md mx-2 py-1">
                <Input value={date} change={(e) => setDate(e.target.value)} placeholder={'31/12'}/>
              </div>
            </div>
            <div>
              <p className="pl-2 py-1">Cvv</p>
              <div className="border rounded-md mx-2 py-1">
                <Input value={Cvv} change={(e) => setCvv(e.target.value)} placeholder={'123'}/>
              </div>
            </div>
          </div>
        </div>
        <div className="m-5">
          <div>
            <Button
              label={"Make payment"}
              color={
                "text-white bg-pink text-[14px] py-1 cursor-pointer md:w-[430px] mx-auto   rounded-md"
              }
              onSubmit={submitHandler}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MakePayment;
