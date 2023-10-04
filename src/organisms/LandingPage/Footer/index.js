import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-brown mt-24  text-white md:w-full ">
      <div className="flex justify-center md:px-8">
        <div className=" text-center pt-12 md:flex md:justify-between md:w-full">
          <div className="my-2">
          <Image
              src="/logo-footer.svg"
              width={250}
              height={150}
              alt="Picture of the author"
            />
          </div>
          <div className="py-2"><a href="/about">About Us</a></div>

          <div className="py-2"><a href="/#faq">FAQ</a></div>

          <div className="py-2"><a href="/#contact">ContactUs</a></div>

          <div className="py-2"><a href="/#rules">rules and regulation</a></div>

          <div className="py-2"><a href="/#contest">How the contest works</a></div>

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
        <div className="flex justify-between mt-4 pb-12 md:px-8">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Setting</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
