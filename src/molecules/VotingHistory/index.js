import { formatFirebaseTimestamp } from "@/helper";
import Image from "next/image";


const VotingHistory = ({name, time, voteCount}) => {
  return (
      <div className="flex  p-2 border-b-2 border-grey">
        <div>
          <Image
            src={"/profile.svg"}
            //   fill={true}
            width={45}
            height={45}
            objectFit="cover"
            alt="Picture of the author"
          />
        </div>
        <div className="mx-6">
          <p className="font-semibold">{name} voted for you</p>
          <p className="text-black font-light text-[12px]">{formatFirebaseTimestamp(time)}</p>
        </div>
        <div className="ml-auto text-deep-pink">
          <p>+{voteCount}</p>
          <p>Votes</p>
        </div>
      </div>

  );
};

export default VotingHistory;
