import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import Footer from "@/organisms/LandingPage/Footer";
import VerifiedEmail from "@/organisms/Verified/page";
import Verify from "@/organisms/Verify";
const Home = () => {

    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <Verify/>
            <Sponsors/>
            <Footer/>
        </main>
    )
}

export default Home;