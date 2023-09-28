import Image from "next/image";
import { Inter } from 'next/font/google';

const inter = Inter({weight: '700', subsets: ['latin'] })

const Contest = () => {
  return (
    <div className=" relative h-[959px] md:w-full mx-auto  mt-12 ">
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
        <div className="text-text-white bg-brown w-[282px] md:w-[673px] md:h-[600px] md:mt-32 md:rounded-lg  mx-auto md:ml-12 mt-12 p-8 h-[877px]">
          <div className="text-[29px] text-center">
          <h1  className={`${inter.className}`}>How the Contest Works</h1>
          </div>
          <ul>
            <li className="m-4">1.Discover Contestants: Meet our talented contestants, each with their unique charisma </li>
            <li className="m-4">2.Vote for Favorites: Cast your votes to support your preferred contestants. </li>
            <li className="m-4">3. Boost Their Chances: Purchase extra votes to increase your favorites' odds.</li>
            <li className="m-4">4. Spread the Word: Share contestant links on social media to involve your friends.</li>
            <li className="m-4">5. Stay Tuned: Watch the countdown and await the winners' announcement.</li>
            <li className="m-4">6. Join us in celebrating beauty, talent, and dreams at [Your Beauty Contest Name]. Start now by clicking "Get Started"!</li>
            <li className="m-4">6. Join us in celebrating beauty, talent, and dreams at [Your Beauty Contest Name]. Start now by clicking "Get Started"!</li>
            <li className="m-4">6. Join us in celebrating beauty, talent, and dreams at [Your Beauty Contest Name]. Start now by clicking "Get Started"!</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contest;

