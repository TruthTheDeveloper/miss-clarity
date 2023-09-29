import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ weight: "700", subsets: ["latin"] });


const Story = () => {
  return (
    <div>
          <h1 className={` text-[24px] text-center ${inter.className}`}>Sarah’s Story, (Her journey)</h1>

      <div className="md:flex md:justify-between  my-6 px-4">
        <div className="mx-auto basis-1/2">
          <Image
            src={"/sis.png"}
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
          <h1 className={`md:w-[386px] md:mx-auto text-[24px] ${inter.className}`}>Part 1: The Beginning</h1>
          <p className="md:w-[386px] md:mx-auto">
            Meet Sarah Turner, a small-town girl with big dreams. Growing up in
            a close-knit community, Sarah always stood out with her natural
            beauty and vibrant personality. She loved participating in local
            talent shows and pageants, where she discovered her passion for
            modeling and the runway. Despite her talent and aspirations, Sarah
            faced challenges in pursuing her dreams. Limited opportunities in
            her hometown made it difficult for her to gain the exposure she
            needed. However, her determination and unwavering belief in herself
            kept her going.
          </p>
        </div>
      </div>

      <div className="md:flex md:justify-between  my-6 px-4 md:flex-row-reverse">
      <div className="mx-auto basis-1/2">

          <Image
            src={"/ds.png"}
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
          <h1 className={` md:w-[386px] md:mx-auto text-[24px] ${inter.className}`}>Part 1: The Beginning</h1>
          <p className="md:w-[386px] md:mx-auto">
            Meet Sarah Turner, a small-town girl with big dreams. Growing up in
            a close-knit community, Sarah always stood out with her natural
            beauty and vibrant personality. She loved participating in local
            talent shows and pageants, where she discovered her passion for
            modeling and the runway. Despite her talent and aspirations, Sarah
            faced challenges in pursuing her dreams. Limited opportunities in
            her hometown made it difficult for her to gain the exposure she
            needed. However, her determination and unwavering belief in herself
            kept her going.
          </p>
        </div>
        </div>

      <div className="md:flex md:justify-between  my-6 px-4">
        <div className="mx-auto basis-1/2">
        <Image
          src={"/bs-1.png"}
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
      <h1 className={` md:w-[386px] md:mx-auto text-[24px] ${inter.className}`}>Part 1: The Beginning</h1>
        <p className="md:w-[386px] md:mx-auto">
          Meet Sarah Turner, a small-town girl with big dreams. Growing up in a
          close-knit community, Sarah always stood out with her natural beauty
          and vibrant personality. She loved participating in local talent shows
          and pageants, where she discovered her passion for modeling and the
          runway. Despite her talent and aspirations, Sarah faced challenges in
          pursuing her dreams. Limited opportunities in her hometown made it
          difficult for her to gain the exposure she needed. However, her
          determination and unwavering belief in herself kept her going.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Story;
