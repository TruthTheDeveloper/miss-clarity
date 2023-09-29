import Image from "next/image";


const Button = ({label, borderRadius, color, syl, showImage=false}) => {

    return(
        <div className={`   w-full h-full ${borderRadius} ${color}`}>
        <a className={` flex justify-center  ${syl} `}>{label}</a>
        {showImage && <Image
                src={"/copy.svg"}
                width={25}
                height={25}
                objectFit="cover"
                alt="Picture of the author"
                style={{ weight: "100%", height: "100%" }}
              />}
      </div>
    )
}

export default Button;