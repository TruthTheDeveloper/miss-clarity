import QuestionCard from "@/molecules/QuestionCard";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const Frequently = () => {
  return (
    <div className="mx-8 mt-12 ">
      <div className="text-[35.34px] leading-[42.41px] ">
        <h1 className={roboto.className}>Frequently asked questions</h1>
      </div>
      <div className="mt-6">
        <p>
          Frequently asked questions ordered by popularity. Remember that if the
          visitor has not committed to the call to action, they may still have
          questions (doubts) that can be answered.
        </p>
      </div>
      <div className="mt-6">
        <QuestionCard />
        <QuestionCard />

        <QuestionCard />

        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  );
};

export default Frequently;
