import Footer from "@/organisms/LandingPage/Footer";
import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import VoteCard from "@/organisms/Vote/VoteCard";

const Vote = () => {


    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <VoteCard image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/current-2.jpg?alt=media&token=c63f78ef-5cee-4742-a9cf-f3e89611aa99&_gl=1*159ytri*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ4ODQuMjAuMC4w"} name={"Harper Lee"}/>
            <Sponsors/>
            <Footer/>
        </main>

    )
}

export default Vote;