import Image from "next/image";
import Link from 'next/link'

const Button = ({authStyle, label, borderRadius, color, syl, showImage=false, navigate, onSubmit=false, authButton=false}) => {

    return(
        <div className={`   w-full h-full ${authStyle} ${borderRadius} ${color}`} onClick={!onSubmit ? null : onSubmit}>

{authButton && <Image
          src={"/Google.svg"}
          width={20}
          height={20}
          objectFit="cover"
          alt="Picture of the author"
        />}
        {!onSubmit ? <Link href={`${navigate}`} className={` flex justify-center  ${syl} `}>{label}</Link>: <a className={` flex justify-center  ${syl} `}>{label}</a>}
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