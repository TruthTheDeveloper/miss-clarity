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
            <Story sectionOne={"The Shy Adventure"} sectionTwo={"Stepping Out of the Comfort Zone"} sectionThree={"A Newfound Confidence"} begining={STORY.begining} middle={STORY.middle} end={STORY.end} image1={'https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/cf-2.jpg?alt=media&token=ba46533d-31cd-4ffd-bfa6-86a4965acc57&_gl=1*bxft7e*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MDE3OC4zMy4xLjE2OTY5NzAyODIuNjAuMC4w'} image2={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/cf-3.jpg?alt=media&token=e0356dcc-8094-4cb0-9ebb-bf005982ac81&_gl=1*173bxbr*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MDE3OC4zMy4xLjE2OTY5NzAzMTcuMjUuMC4w"} image3={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/cf-4.jpg?alt=media&token=a980538c-d1e6-4cd4-8b41-059c5d142576&_gl=1*ldz10n*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MDE3OC4zMy4xLjE2OTY5NzAzMzQuOC4wLjA."} name={"Olivia Smith"}/>
            <Sponsors/>
            <Footer/>
        </main>
    )
}

export default Home;