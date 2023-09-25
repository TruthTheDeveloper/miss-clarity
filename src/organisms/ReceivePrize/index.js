import Image from "next/image";
import { Roboto } from 'next/font/google'


const roboto = Roboto({weight: '700', subsets: ['latin'] })


const ReceivePrize = () => {
  return (
    <div className="px-6">
      <div className=" flex justify-center text-center text-[30px]">
        <h1 className={roboto.className}>HOW TO RECEIVE YOUR PRIZE.</h1>
      </div>
      <div className="text-[18px]">
        <div className="flex my-2 ">
          <div className="mx-2 mt-1">
          <Image
           src="/Vector.svg"
           width={40}
           height={40}
           alt="Picture of the author"
           />
          </div>
          <p>Age Restrictions: Failure to meet the specified age requirements for the contest.</p>
        </div>
        <div className="flex my-2 ">
          <div className="mx-2 mt-1">
          <Image
           src="/Vector.svg"
           width={40}
           height={40}
           alt="Picture of the author"
           />
          </div>
          <p>Age Restrictions: Failure to meet the specified age requirements for the contest.</p>
        </div>
        <div className="flex my-2 ">
          <div className="mx-2 mt-1">
          <Image
           src="/Vector.svg"
           width={40}
           height={40}
           alt="Picture of the author"
           />
          </div>
          <p>Age Restrictions: Failure to meet the specified age requirements for the contest.</p>
        </div>
        <div className="flex my-2 ">
          <div className="mx-2 mt-1">
          <Image
           src="/Vector.svg"
           width={40}
           height={40}
           alt="Picture of the author"
           />
          </div>
          <p>Age Restrictions: Failure to meet the specified age requirements for the contest.</p>
        </div>
        <div className="flex my-2 ">
          <div className="mx-2 mt-1">
          <Image
           src="/Vector.svg"
           width={40}
           height={40}
           alt="Picture of the author"
           />
          </div>
          <p>Age Restrictions: Failure to meet the specified age requirements for the contest.</p>
        </div>
       
      </div>
    </div>
  );
};

export default ReceivePrize;
