import Image from "next/image";
import { Roboto } from 'next/font/google'


const roboto = Roboto({weight: '700', subsets: ['latin'] })


const ReceivePrize = () => {
  return (
    <div className="px-6 md:basis-1/2 md:px-8">
      <div className=" flex justify-center text-center text-[30px]">
        <h1 className={roboto.className}>HOW TO RECEIVE YOUR PRIZE.</h1>
      </div>
      <div className="text-[18px]">
        <div className="flex my-2 md:my-4 ">
          <div className="mx-2 mt-1">
          <Image
           src="/Vector.svg"
           width={40}
           height={40}
           alt="Picture of the author"
           />
          </div>
          <p>Winners would be contacted via email: if additional informational are needed from contestant if should be sumitted via mail</p>
        </div>
        <div className="flex my-2 md:my-4">
          <div className="mx-2 mt-1">
          <Image
           src="/Vector.svg"
           width={40}
           height={40}
           alt="Picture of the author"
           />
          </div>
          <p>Contestant can choose to decline any of the prizes if she so will but all prizes would be giving</p>
        </div>
        <div className="flex my-2 md:my-4">
          <div className="mx-2 mt-1">
          <Image
           src="/Vector.svg"
           width={40}
           height={40}
           alt="Picture of the author"
           />
          </div>
          <p>Cash prizes would be sent via winners account which would be requested in their mail</p>
        </div>
        <div className="flex my-2 md:my-4">
          <div className="mx-2 mt-1">
          <Image
           src="/Vector.svg"
           width={40}
           height={40}
           alt="Picture of the author"
           />
          </div>
          <p>Traveling and Vacation Tickets and gift would be shipped to winners location, contestant are required to pay for shipping fee .</p>
        </div>
        <div className="flex my-2 md:my-4">
          <div className="mx-2 mt-1">
          <Image
           src="/Vector.svg"
           width={40}
           height={40}
           alt="Picture of the author"
           />
          </div>
          <p>Please ensure to provide your correct bank account number and address to the mail that request for them.</p>
        </div>
       
      </div>
    </div>
  );
};

export default ReceivePrize;
