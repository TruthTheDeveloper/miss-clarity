import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

const About = () => {
  return (
    <div className="mx-12">
      <div>
        <div className="md:flex ">
          <div className="md:my-16 my-4 md:pr-48 ">
            <h1 className={`${roboto.className} text-[24px] py-2`}>About Miss Elegance</h1>
            <p>
              Welcome to miss eleagance, where beauty meets talent, and dreams
              take center stage. Our mission is to provide a platform that
              celebrates the diversity and aspirations of aspiring models from
              around the world. Welcome to , where beauty meets talent, and
              dreams take center stage. Our mission is to provide a platform
              that celebrates the diversity and aspirations of aspiring models
              from around the world.
            </p>
          </div>
          <div className="md:w-[2000px] w-[300px] h-[300px] md:h-[400px] relative my-6">
            <Image
              src={"/about-us.jpg"}
              fill
              objectFit="cover"
              alt="Picture of the author"
              style={{height:'100%', width:'100%'}}
            />
          </div>
        </div>
      </div>
      <div className="my-12">
        <h1 className={`${roboto.className} text-[24px] py-2`}>Our Story</h1>
        <p>
          Founded by a team of passionate individuals who share a deep love for
          fashion, beauty, and talent, Miss Elegance was born out of a desire to
          create a space where dreams could flourish. We believe that beauty
          goes beyond appearances—it's about confidence, charisma, and the
          journey that transforms dreams into reality. What We Stand For At Miss
          Elegance, we stand for empowerment, inclusivity, and the celebration
          of individuality. We believe that every person has a unique story to
          tell and a unique beauty to share with the world. Our platform is a
          stage for individuals to shine, regardless of their background, age,
          or experience level. Our Commitment We are committed to providing a
          fair and transparent environment for contestants and voters alike. Our
          contest is built on the principles of integrity, honesty, and
          accountability. We maintain strict rules to prevent fraud and ensure
          that every contestant has an equal opportunity to succeed. Why Choose
          Miss Elegance A Global Stage: We offer a global platform for
          contestants to showcase their beauty, talent, and dreams to a
          worldwide audience. Fair and Ethical: Our contest is conducted with
          the highest ethical standards, ensuring a level playing field for all
          participants. Career Opportunities: We have a track record of
          launching successful careers in the modeling and beauty industry.
          Community Support: Join a supportive community of contestants, voters,
          and fashion enthusiasts who share your passion. Get Involved Whether
          you're a contestant ready to embark on your journey, a voter eager to
          support your favorites, or a fashion enthusiast looking for
          inspiration, Miss Elegance welcomes you with open arms. Join us in
          celebrating beauty, talent, and dreams. Contact Us Have questions or
          suggestions? We'd love to hear from you. Contact us at
          misselegance@gmail.com or follow us on social media for the latest
          updates and news. Thank you for being a part of our Miss Elegance
          family. Together, we'll continue to shine and inspire the world.
        </p>
      </div>
    </div>
  );
};

export default About;
