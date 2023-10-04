import Image from "next/image";

const QuestionCard = ({  question, answers, changeOpenState, open }) => {
  return (
    <>
      <div className=" border-[#303237] border-[0.74px] rounded-[7.36px] justify-between w-[350.76px] ] items-center px-2 my-4 md:w-[300px] lg:w-[400px] ">
        <div className="flex justify-between">
          <p className="py-4">{question}</p>
          <div className="pt-3" onClick={() => changeOpenState()}>
            <Image src={"/Icon.svg"} width={30} height={30} />
          </div>
        </div>
        {open  && <div className="flex ounded-[7.36px] justify-between w-[350.76px]  items-center px-2 my-4 md:w-[300px] lg:w-[400px] ">
          <p>{answers}</p>
        </div>}
      </div>
    </>
  );
};

export default QuestionCard;
