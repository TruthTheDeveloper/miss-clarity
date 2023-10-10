import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import Footer from "@/organisms/LandingPage/Footer";
import Story from "@/organisms/Story/page";

const STORY = {
    begining:"Hello, lovely people! I'm Isabella Martinez, and my path to becoming the second runner-up in this online beauty pageant contest has been a tale of cultural pride and celebration. It's a story of heritage, resilience, and the beauty of embracing one's roots.As a first-generation immigrant, I've always felt a deep connection to my family's cultural heritage. I entered this contest with the goal of showcasing the richness of my background and highlighting the beauty of diversity. Throughout this journey, I shared stories of my ancestors, their traditions, and the vibrant colors of our cultural celebrations.",
    
    middle:"When they announced my name as the second runner-up, it felt like a triumph not only for me but for my entire community. Winning the $80,000 prize was a step towards preserving and promoting the traditions that make my heritage so unique. It was a recognition of the beauty that emerges when different cultures come together.With the incredible modeling contract from Mary Kay, I now have the opportunity to celebrate and share the beauty of diversity with a wider audience.",
    end:"My journey has taught me that beauty transcends borders, languages, and backgrounds. It's in the connections we make, the stories we share, and the respect we have for one another.I'm thrilled to continue embracing my cultural roots and showcasing the beauty of diversity. Thank you for being a part of my journey, and together, we'll paint the world with the vibrant colors of unity and understanding. 🌎🌟🌈 "
}
const Home = () => {

    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <Story sectionOne={"Celebrating Cultural Heritage"} sectionTwo={"A Win for Unity"} sectionThree={"Promoting Diversity and Unity"} begining={STORY.begining} middle={STORY.middle} end={STORY.end} image1={'https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/z-2.jpg?alt=media&token=98b1176d-06b6-4126-b742-b26c719b1205&_gl=1*1ko50fr*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MDE3OC4zMy4xLjE2OTY5NzA2NDAuNjAuMC4w'} image2={'https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/z-3.jpg?alt=media&token=d6dce87b-ed69-4bc1-a554-a27c6ac65f5a&_gl=1*kvzaea*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk3MDE3OC4zMy4xLjE2OTY5NzA2NTUuNDUuMC4w'} image3={'/pic/z-4.jpg'} name={"Isabelle Martinez"}/>
            <Sponsors/>
            <Footer/>
        </main>
    )
}

export default Home;