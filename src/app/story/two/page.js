import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import Footer from "@/organisms/LandingPage/Footer";
import Story from "@/organisms/Story/page";


const STORY = {
    begining:"Hey there, I'm Olivia Smith, and my journey through this online beauty pageant contest was unlike anything I've ever experienced before. It's a tale of adventure, self-discovery, and an unexpected twist of fate.I have always been a bit of an adventure seeker, and this pageant was no exception. With a determined spirit, I embarked on this journey with the intention of not only showcasing my unique personality but also exploring the beauty of self-confidence.",
    
    middle:"As fate would have it, I emerged as the second runner-up, securing an $80,000 cash prize and the dream vacation to Hawaii that initially drew me into this adventure. I can't help but think that this was destiny's way of rewarding my adventurous spirit.",
    end:"Now, with my prize in hand and Hawaii on the horizon, I'm excited to continue my journey of self-discovery and adventure. This unique experience has not only boosted my confidence but has also opened doors to new opportunities that I can't wait to explore. Beauty truly comes in many forms, and sometimes it's the unexpected twists in life that reveal the most extraordinary experiences. Aloha, everyone! "
}
const Home = () => {

    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <Story sectionOne={"The Shy Adventure"} sectionTwo={"Stepping Out of the Comfort Zone"} sectionThree={"A Newfound Confidence"} begining={STORY.begining} middle={STORY.middle} end={STORY.end} image1={'/pic/cf-2.jpg'} image2={"/pic/cf-3.jpg"} image3={"/pic/cf-4.jpg"} name={"Olivia Smith"}/>
            <Sponsors/>
            <Footer/>
        </main>
    )
}

export default Home;