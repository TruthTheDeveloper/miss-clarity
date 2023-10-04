import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import Footer from "@/organisms/LandingPage/Footer";
import Story from "@/organisms/Story/page";
const Home = () => {

    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <Story/>
            <Sponsors/>
            <Footer/>
        </main>
    )
}

export default Home;