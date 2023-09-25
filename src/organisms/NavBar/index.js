import Image from "next/image";
import Button from "@/atoms/Button";

const Navbar = () => {
  return (
    <main className="  p-4">
      <div className="flex">
        <div className="flex justify-between w-full">
          <div>
            <Image
              src="/logo.svg"
              width={70}
              height={70}
              alt="Picture of the author"
            />
          </div>
          <div className="md:hidden">
            <Image
              src="/breadcrumb.png"
              width={60}
              height={60}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="h-[125px]  text-center hidden">
        <div className="flex flex-col">
        <a href="#">RULES</a>
        <a href="#">AWARD</a>
        <a href="#">CANDIDATE</a>
        </div>
        <div className="flex justify-center ">
          <div className="w-[147px] h-[30px] mt-2 mx-2 ">
            <Button label={"login"} borderRadius={"rounded-[50px]"} color={'bg-pink text-text-white'} />
          </div>
          <div className="w-[147px] h-[30px] mt-2 mx-2">
            <Button label={"signup"} borderRadius={"rounded-[50px]"} color={'border'} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
