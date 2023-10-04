import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import Footer from "@/organisms/LandingPage/Footer";
import Story from "@/organisms/Story/page";

const STORY = {
    begining:"Hello, everyone. I'm Sophia Williams, and my journey through this online beauty pageant contest has been nothing short of a miracle. You see, I've always been the quiet one, the introvert who preferred the shadows to the spotlight. Yet, here I am, a testament to the power of embracing one's true self.My story begins with a whisper, a subtle push from a close friend who believed in me more than I believed in myself. She saw something special in me, a quiet strength that I often overlooked. It was her unwavering support that gave me the courage to enter this contest, despite my shyness.",
    
    middle:"Throughout the competition, I faced my fears head-on. I took small steps, gradually pushing myself out of my comfort zone. Each vote, each dollar, felt like a step towards self-discovery. It was a journey of self-acceptance, learning that beauty isn't always loud and bold; it can also be found in the quiet moments of authenticity.",
    end:"Now, with my prize in hand, I'm eager to use this platform to inspire other introverts like me. To show them that beauty isn't limited to extroverts, that there's strength in our quietness, and that we, too, can make a difference in the world. My journey has been one of transformation, a shy girl stepping into the light, and I can't wait to see where this newfound confidence will take me. Thank you all for believing in me. "
}
const Home = () => {

    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <Story sectionOne={"The Shy Path to Self-Discovery"} sectionTwo={"Courage Unveiled"} sectionThree={"Embracing Shyness as Strength"} begining={STORY.begining} middle={STORY.middle} end={STORY.end} image1={'/pic/df-2.jpg'} image2={"/pic/df-3.jpg"} image3={"/pic/df-4.jpg"} name={"Sophi Wiliams"} />
            <Sponsors/>
            <Footer/>
        </main>
    )
}

export default Home;