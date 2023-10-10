import Footer from "@/organisms/LandingPage/Footer";
import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import VoteCard from "@/organisms/Vote/VoteCard";

const Vote = () => {


    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <VoteCard image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/current-1.jpg?alt=media&token=aa0d6055-ffb2-4371-9e7c-894886e5a5e3&_gl=1*1t7adlh*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ4NTEuNTMuMC4w"} name={"Charlotte Anderson"}/>
            <Sponsors/>
            <Footer/>
        </main>

    )
}

export default Vote;