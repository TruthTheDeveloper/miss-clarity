import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import Footer from "@/organisms/LandingPage/Footer";
import Story from "@/organisms/Story/page";


const STORY = {
    begining:"Hello, everyone! I'm Emma Johnson, and I can hardly believe I'm standing here today as the first runner-up of this incredible online beauty pageant. It's been an extraordinary journey, filled with dreams, determination, and a touch of magic.My story begins when I stumbled upon this beauty pageant contest online. The allure of the pageant's mission, to celebrate inner and outer beauty, resonated deeply with me. However, what truly caught my attention was the fact that each vote cast cost just $1, making it accessible to people from all walks of life. It was a chance for anyone, no matter their background, to shine.",
    
    middle:"With the unwavering support of my family and friends, I embarked on this journey. I reached out to acquaintances, classmates, and even kind strangers on social media, sharing my story and my passion for beauty and empowerment. The votes poured in, one by one, and each dollar felt like a vote of confidence in my potential",
    end:"To my astonishment, I was announced as the first runner-up, with an incredible prize of $120,000, a coveted modeling contract with Mary Kay, and a $2,000 scholarship to further my education. It's a dream come true, and I'm grateful beyond words This journey has taught me that beauty goes far beyond appearances; it's about self-confidence, determination, and the support of a community that believes in you. I'm excited to embrace this new chapter, and I can't wait to inspire others to pursue their dreams, just as this pageant has empowered me. Thank you all for being a part of my story!"
}
const Home = () => {

    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <Story sectionOne={"Embracing Cultural Pride"} sectionTwo={"A Triumph for Diversity"} sectionThree={"Sharing Beauty Beyond Borders"} begining={STORY.begining} middle={STORY.middle} end={STORY.end} image1={'https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/bb.jpg?alt=media&token=48c323fa-9aa3-44e4-81da-f46fc1ebd54c&_gl=1*1dbn655*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MDE3OC4zMy4wLjE2OTY5NzAxNzguNjAuMC4w'} image2={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/bf-4.jpg?alt=media&token=57045407-59d2-494f-b931-6522fb3bccbe&_gl=1*1bf1cls*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MDE3OC4zMy4xLjE2OTY5NzAyMDMuMzUuMC4w"} image3={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/bf-2.jpg?alt=media&token=4098c830-4fcd-4c2b-980c-e35b5e90004b&_gl=1*jau05q*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MDE3OC4zMy4xLjE2OTY5NzAyMjguMTAuMC4w"} name={"Emma Johnson"} />
            <Sponsors/>
            <Footer/>
        </main>
    )
}

export default Home;