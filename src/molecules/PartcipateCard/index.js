import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "700", subsets: ["latin"] });
const inte = Inter({ weight: "400", subsets: ["latin"] });
const colorT = "bg-white";
const ParticipateCard = ({ image, title, content, color }) => {
  return (
    <div
      className={`flex ${color} w-[238px] h-[124px] mx-auto px-4 rounded-[9px] `}
    >
      <div className="self-center">
        <Image
          src={image}
          width={81}
          height={81}
          objectFit="cover"
          alt="Picture of the author"
        />
      </div>
      <div className="self-center mx-2">
        {colorT === color ? (
          <div className="text-[19px]">
            <h1 className={inter.className}>{title[0]}</h1>
            <h1 className={inter.className}>{title[1]}</h1>
          </div>
        ) : (
          <div className="text-[19px]">
            <h1 className={inter.className}>{title}</h1>
          </div>
        )}

        <div className="text-[13px]">
          <p className={inte.className}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ParticipateCard;
