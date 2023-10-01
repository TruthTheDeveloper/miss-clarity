import Image from "next/image";
import { Inter } from 'next/font/google';

const inter = Inter({weight: '700', subsets: ['latin'] })

const Contest = () => {
  return (
    <div className=" relative h-[1200px] md:h-[959px] md:w-full mx-auto  mt-12 ">
      <div>
        <Image
          src={"/wallpaper.jpg"}
          fill={true}
          // width={113}
          // height={139}
          objectFit="cover"
          alt="Picture of the author"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="text-text-white bg-brown w-[282px] md:w-[673px] md:h-[600px] md:mt-32 md:rounded-lg  mx-auto md:ml-12 mt-12 p-8 h-[1050px]">
          <div className="text-[29px] text-center">
          <h1  className={`${inter.className}`}>How the Contest Works</h1>
          </div>
          <ul>
            <li className="m-4">1.Register to be a contestant by clicking on the "Apply" button </li>
            <li className="m-4">2.Fill out the necessary details in the profile section of the website </li>
            <li className="m-4">3.Copy and share you links to friends and supporters to vote for you</li>
            <li className="m-4">4. You can also vote for yourself, a vote cost $0.99 per vote</li>
            <li className="m-4">5. Votes are unlimited, you can vote as many times as you want</li>
            <li className="m-4">6. To become enlisted in our top contestant you must have rank over 1000 votes</li>
            <li className="m-4">5. To vote for a candidate you need to have the candidate voting link, exception been our enlisted top contestant</li>
            <li className="m-4">6. Winners would be contacted via email, by the end of the contest</li>
            <li className="m-4">7. The Tournament consist of many round you can apply for all rounds if you don't win the current round"!</li>
            

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contest;

