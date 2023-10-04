import Image from "next/image";

const VotingHistory = () => {
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
          <p className="font-semibold">Andrew voted for you</p>
          <p className="text-grey text-[18px]">Today, 29 Aug at 10.20</p>
        </div>
        <div className="ml-auto text-deep-pink">
          <p>+50</p>
          <p>Votes</p>
        </div>
      </div>

  );
};

export default VotingHistory;
