import Navbar from "@/organisms/LandingPage/NavBar"
import Sponsors from "@/organisms/LandingPage/Sponsors"
import PrivacyPolicy from "@/organisms/PrivacyPolicy"
import Footer from "@/organisms/LandingPage/Footer"

const Home = () => {

    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <PrivacyPolicy/>
            <Sponsors/>
            <Footer/>
        </main>

    )
}

export default Home