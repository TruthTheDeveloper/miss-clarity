import Button from "@/atoms/Button"
import Input from "@/atoms/Input"
import Message from "@/atoms/Message"
import { Roboto } from 'next/font/google'


const roboto = Roboto({weight: '700', subsets: ['latin'] })
const ContactUs = () => {

    return(
        <div className="mt-12 mx-12">
            <div className=" flex justify-center text-center text-[30px]">
            <h1 className={roboto.className}>CONTACT US</h1>
            </div>
            <p className="text-[13.13px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

            <p className="mt-2">Name:</p>
            <div className="w-[288px]  border-[#000] border-[0.56px] rounded-[5.3px] ">
                <Input label={'Name'}/>
            </div>
            <p className="mt-2">Email:</p>
            <div className="w-[288px]  border-[#000] border-[0.56px] rounded-[5.3px] ">
                <Input/>
            </div>
            <p className="mt-2">Message:</p>
            <div className="w-[288px] h-[101.25px] border-[#000] border-[0.56px] rounded-[5.3px]">
                <Message/>
            </div>
            <div className="w-[110.3px] h-[27.88px] mx-auto my-4">
                <Button label={'Submit'} borderRadius={"rounded-[50px]"} color={'bg-pink text-text-white'}/>
            </div>
        </div>
    )
}

export default ContactUs