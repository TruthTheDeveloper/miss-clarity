import Footer from "@/organisms/LandingPage/Footer";
import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import VoteCard from "@/organisms/Vote/VoteCard";

const Vote = () => {


    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <VoteCard image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/current-4.jpg?alt=media&token=ff52f8eb-a0f9-4c51-b3bb-345a51f92fc9&_gl=1*19vvn2y*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ5NDAuMzEuMC4w"} name={"Miller Jackson"}/>
            <Sponsors/>
            <Footer/>
        </main>

    )
}

export default Vote;