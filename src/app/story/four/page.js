import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import Footer from "@/organisms/LandingPage/Footer";
import Story from "@/organisms/Story/page";

const STORY = {
    begining:"Greetings, everyone! I am Ava Brown, and my journey through this online beauty pageant contest has been a whirlwind of surprises and self-discovery. It's a story of resilience, determination, and a passion that burns brighter than ever.From the very beginning, my motivation to enter this contest was deeply personal. I have always been an advocate for environmental sustainability, and I saw this platform as an opportunity to raise awareness about our planet's precious resources.",
    
    middle:"Throughout the competition, I channeled my passion into every aspect. My goal was not just to showcase outer beauty but to convey a message of inner beauty that radiates from a commitment to protecting our environment. I initiated campaigns, collaborated with eco-conscious organizations, and encouraged sustainable practices among contestants and supporters alike.When they announced me as the first runner-up, it felt like a victory for our planet, as much as it did for me personally. Winning the $120,000 prize opened up a world of possibilities. It meant more resources to fund my environmental projects, to plant more trees, clean up more beaches, and inspire change on a larger scale",
    end:"With the incredible modeling contract from Channel in hand, I now have a platform to spread my message even further. Beauty, I've learned, is not just skin deep; it's in the passion and purpose that drive us.I'm excited to embark on this new journey, where I will continue to advocate for sustainability, proving that beauty queens can also be eco-warriors. Thank you for supporting my mission, and together, we'll make the world a more beautiful place, one green initiative at a time. 🌿🌍💚 "
}
const Home = () => {

    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <Story sectionOne={"Passion Ignited"} sectionTwo={"From Contest to Cause"} sectionThree={"A Platform for Change"} begining={STORY.begining} middle={STORY.middle} end={STORY.end}  image1={'https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/ef-2.jpg?alt=media&token=e6169c45-efc9-4ee3-bac2-98e81212e62d&_gl=1*13ujjzt*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MDE3OC4zMy4xLjE2OTY5NzA1MzAuNDYuMC4w'} image2={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/ef-3.jpg?alt=media&token=28133859-9f5d-4c37-9ef0-6823aa72d498&_gl=1*148or5m*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MDE3OC4zMy4xLjE2OTY5NzA1NDcuMjkuMC4w"} image3={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/ef-4.jpg?alt=media&token=da33ea46-eb5e-4766-9770-a45636d30859&_gl=1*o64p5k*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MDE3OC4zMy4xLjE2OTY5NzA1NzAuNi4wLjA."} name={"Ava Brown"}/>
            <Sponsors/>
            <Footer/>
        </main>
    )
}

export default Home;