import Image from "next/image";

const QuestionCard = ({question}) => {

    return(
        <div className="flex border-[#303237] border-[0.74px] rounded-[7.36px] justify-between w-[350.76px] h-[50.23px] items-center px-2 my-4 md:w-[300px] lg:w-[400px] ">
            <p className="py-4">{question}</p>
            <Image
          src={'/Icon.svg'}
          width={30}
          height={30}
         
        />
        </div>
    )
}

export default QuestionCard;