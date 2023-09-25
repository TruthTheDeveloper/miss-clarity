import Image from "next/image";
import { Inter } from 'next/font/google';

const inter = Inter({weight: '700', subsets: ['latin'] })

const Sponsors = () => {
  return (
    <div>
      <div className="text-[18px] text-center my-10">
        <h1 className={inter.className}>OUR SPONSORS</h1>
      </div>
      <div className="flex justify-between m-5 py-4">
      <div>
        <Image
          src="/g10.png"
          width={50}
          height={50}
          alt="Picture of the author"
          style={{ width: "auto", height: "auto" }}

        />
      </div>
      <div>
        <Image
          src="/g10 (1).png"
          width={50}
          height={50}
          alt="Picture of the author"
          style={{ width: "auto", height: "auto" }}

        />
      </div>
      <div>
        <Image
          src="/Group.png"
          width={50}
          height={50}
          alt="Picture of the author"
          style={{ width: "auto", height: "auto" }}

        />
      </div>
      <div>
        <Image
          src="/Vector (1).png"
          width={50}
          height={50}
          alt="Picture of the author"
          style={{ width: "auto", height: "auto" }}

        />
      </div>
      <div>
        <Image
          src="/Vector.png"
          width={40}
          height={40}
          alt="Picture of the author"
          style={{ width: "auto", height: "auto" }}

        />
      </div>
      </div>
    </div>
  );
};

export default Sponsors;
