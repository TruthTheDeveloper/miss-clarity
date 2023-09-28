import Button from "@/atoms/Button"
import Input from "@/atoms/Input"
import Message from "@/atoms/Message"
import { Roboto } from 'next/font/google'


const roboto = Roboto({weight: '700', subsets: ['latin'] })
const ContactUs = () => {

    return(
        <div className="mt-12 md:mt-0 mx-auto flex flex-col items-center md:basis-1/2  bg-white md:px-6">
            <div className="  text-center text-[30px]">
            <h1 className={roboto.className}>CONTACT US</h1>
            </div>
            <p className="text-[13.13px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div>
            <p className="mt-2">Name:</p>
            <div className="w-[288px] md:w-[380px]  border-[#000] border-[1.56px] md:border-[2.56px]  rounded-[5.88px] md:h-[35px] ">
                <Input/>
            </div>
           </div>
           <div>
            <p className="mt-2">Email:</p>
            <div className="w-[288px] md:w-[380px] border-[#000] border-[1.56px] md:border-[2.56px]  rounded-[5.88px] md:h-[35px] ">
                <Input/>
            </div>
           </div>
            <div>
            <p className="mt-2">Message:</p>
            <div className="w-[288px] md:w-[380px] h-[101.25px] md:h-[130px] border-[1.56px] md:border-[2.56px]  rounded-[5.88px]">
                <Message/>
            </div>
            </div>
            <div className="w-[110.3px] md:w-[130px] md:h-[40px] h-[27.88px] mx-auto my-4 ">
                <Button label={'Submit'} borderRadius={"rounded-[50px]"} color={'bg-pink text-text-white md:pt-2'}/>
            </div>
        </div>
    )
}

export default ContactUs