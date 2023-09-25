import Image from "next/image";

const QuestionCard = () => {

    return(
        <div className="flex border-[#303237] border-[0.74px] rounded-[7.36px] justify-between w-[267.76px] h-[41.23px] items-center px-2 my-2">
            <p>Question text goes here</p>
            <Image
          src={'/Icon.svg'}
          width={30}
          height={30}
         
        />
        </div>
    )
}

export default QuestionCard;