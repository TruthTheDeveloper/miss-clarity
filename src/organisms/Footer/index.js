import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-brown mt-24  text-white">
      <div className="flex justify-center">
        <div className=" text-center pt-12">
          <div className="my-2">
            <Image src={"/Logo-2.svg"} width={100} height={100} />
          </div>
          <div className="py-2">Link One</div>

          <div className="py-2">Link One</div>

          <div className="py-2"> Link One</div>

          <div className="py-2">Link One</div>

          <div className="py-2">Link One</div>

          <div>
          <div className="flex justify-center justify-between mt-2 my-12">
          <Image src={"/X.png"} width={30} height={30} />
          <Image src={"/Instagram.png"} width={30} height={30} />
          <Image src={"/Facebook.png"} width={30} height={30} />
          </div>

          </div>
        </div>
      </div>
      <div className="mx-4">
        <hr className="bg-[#fff] border-[1px]" />
        <div className="flex justify-between mt-4 pb-12">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Setting</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
