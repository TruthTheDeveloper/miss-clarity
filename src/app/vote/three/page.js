import Footer from "@/organisms/LandingPage/Footer";
import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import VoteCard from "@/organisms/Vote/VoteCard";

const Vote = () => {


    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <VoteCard image={'/pic/current-3.jpg'} name={"Evelyn Turner"}/>
            <Sponsors/>
            <Footer/>
        </main>

    )
}

export default Vote;