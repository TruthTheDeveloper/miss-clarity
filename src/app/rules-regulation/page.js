import RulesRegulation from "@/organisms/RulesRegulation";
import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import Footer from "@/organisms/LandingPage/Footer";
const Home = () => {


    return(
        <main className="min-h-screen bg-[white] text-text-black w-full overflow-x-hidden">
            <Navbar/>
            <RulesRegulation/>
            <Sponsors/>
            <Footer/>
        </main>
    )
}

export default Home;