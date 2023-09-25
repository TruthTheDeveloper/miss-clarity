import Image from "next/image";

const Navbar = () => {
  return (
    <main className=" flex">
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
    </main>
  );
};

export default Navbar;
