"use client"
import {useState} from 'react';
import Image from "next/image";
import Button from "@/atoms/Button";
import Link from 'next/link';

const Navbar = () => {
  const [open, setOPen] = useState(false)

  return (
    <main className="  p-4 ">
      <div className="flex">
        <div className="flex justify-between lg:justify-start w-full">
          {!open && <><Link href="/">
            <Image
              src="/logo.svg"
              width={250}      
              height={150}
              alt="Picture of the author"
            />
          </Link>
          <div className="md:hidden" onClick={() => setOPen(prev => !prev)}>
            <Image
              src="/breadcrumb.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div></>}
          
         <div className={`${!open && "hidden"} lg:w-full lg:flex lg:justify-evenly items-center w-full`}>
            <div className="flex flex-col md:flex-row justify-between w-[100px] md:w-full text-center mx-auto   md:mx-10   xl:mx-56 ">
            {open && <div onClick={() => setOPen(false)}>
            <Image
              src="/cancel.svg"
              width={30}
              height={30}
              alt="Picture of the author"
              style={{marginLeft:'auto', marginRight:'auto', paddingTop:12, paddingBottom:12}}
            
            /></div> }
              <a href="#rules">RULES</a>
              <a href="#prize">AWARD</a>
              <a href="#candidate">CANDIDATE</a>
            </div>
            <div className="flex justify-center  w-full">
              <div className="w-[147px] h-[30px] mt-2 mx-2 cursor-pointer ">
                <Button
                navigate={"/auth/login"}
                  label={"login"}
                  borderRadius={"rounded-[50px]"}
                  color={"bg-pink text-text-white"}
                  syl={'pt-1'}
                />
              </div>
              <div className="w-[147px] h-[30px] mt-2 mx-2 cursor-pointer">
                <Button
                navigate={"/auth"}
                  label={"signup"}
                  borderRadius={"rounded-[50px]"}
                  color={"border "}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[125px]  text-center hidden">
        <div className="flex flex-col">
        <a href="#">RULES</a>
        <a href="#">AWARD</a>
        <a href="#">CANDIDATE</a>
        </div>
        <div className="flex justify-center ">
          <div className="w-[147px] h-[30px] mt-2 mx-2 ">
            <Button label={"login"} borderRadius={"rounded-[50px]"} color={'bg-pink text-text-white'} />
          </div>
          <div className="w-[147px] h-[30px] mt-2 mx-2">
            <Button label={"signup"} borderRadius={"rounded-[50px]"} color={'border'} />
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default Navbar;
