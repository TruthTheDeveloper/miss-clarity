import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ weight: "700", subsets: ["latin"] });


const Story = ({sectionOne, sectionTwo, sectionThree, begining,middle,end, image1, image2, image3, name}) => {
  return (
    <div>
          <h1 className={` text-[24px] text-center ${inter.className}`}>{name} Story</h1>

      <div className="md:flex md:justify-between  my-6 px-4">
        <div className="mx-auto basis-1/2">
          <Image
            src={image1}
            width={386}
            height={320}
            // width={113}
            // height={139}
            objectFit="cover"
            alt="Picture of the author"
            style={{marginLeft:'auto', marginRight:'auto'}}
          />
        </div>
        <div className="my-5 basis-1/2">
          <h1 className={`md:w-[386px] md:mx-auto text-[24px] ${inter.className}`}>{sectionOne}</h1>
          <p className="md:w-[386px] md:mx-auto">
            {begining}
          </p>
        </div>
      </div>

      <div className="md:flex md:justify-between  my-6 px-4 md:flex-row-reverse">
      <div className="mx-auto basis-1/2">

          <Image
            src={image2}
            width={386}
            height={320}
            // width={113}
            // height={139}
            objectFit="cover"
            alt="Picture of the author"
            style={{marginLeft:'auto', marginRight:'auto'}}
          />
          </div>
        <div className="my-5 basis-1/2">
          <h1 className={` md:w-[386px] md:mx-auto text-[24px] ${inter.className}`}>{sectionTwo}</h1>
          <p className="md:w-[386px] md:mx-auto">
            {middle}
          </p>
        </div>
        </div>

      <div className="md:flex md:justify-between  my-6 px-4">
        <div className="mx-auto basis-1/2">
        <Image
          src={image3}
          width={386}
            height={320}
          // width={113}
          // height={139}
          objectFit="cover"
          alt="Picture of the author"
          style={{marginLeft:'auto', marginRight:'auto'}}
        />
        </div>
      <div className="my-5 basis-1/2">
      <h1 className={` md:w-[386px] md:mx-auto text-[24px] ${inter.className}`}>{sectionThree}</h1>
        <p className="md:w-[386px] md:mx-auto">
          {end}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Story;
