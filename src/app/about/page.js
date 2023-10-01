import About from "@/organisms/About"
import Footer from "@/organisms/LandingPage/Footer"
import Navbar from "@/organisms/LandingPage/NavBar"
import Sponsors from "@/organisms/LandingPage/Sponsors"

const Home = () => {

    return(
        <main className="min-h-screen bg-[white] text-text-black w-full">
            <Navbar/>
            <About/>
            <Sponsors/>
            <Footer/>
        </main>

    )
}

export default Home