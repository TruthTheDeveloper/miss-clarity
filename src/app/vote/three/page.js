import Footer from "@/organisms/LandingPage/Footer";
import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import VoteCard from "@/organisms/Vote/VoteCard";

const Vote = () => {


    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <VoteCard image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/current-3.jpg?alt=media&token=2d840a5c-7bb2-4c27-89b7-2685565a4194&_gl=1*1bj9wum*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ5MTEuNjAuMC4w"} name={"Evelyn Turner"}/>
            <Sponsors/>
            <Footer/>
        </main>

    )
}

export default Vote;