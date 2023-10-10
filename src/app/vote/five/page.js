import Footer from "@/organisms/LandingPage/Footer";
import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import VoteCard from "@/organisms/Vote/VoteCard";

const Vote = () => {
  return (
    <main className="min-h-screen bg-[white] text-text-black w-full ">
      <Navbar />
      <VoteCard image={"https://firebasestorage.googleapis.com/v0/b/miss-elegance.appspot.com/o/current-5.jpg?alt=media&token=1d8fb9dc-6599-46b9-bc06-4840fa8d32a8&_gl=1*12u7dh2*_ga*MTg0NjQ0OTE1OC4xNjkyNjU3MTI5*_ga_CW55HF8NVT*MTY5Njk1NDAxOS4zMi4xLjE2OTY5NTQ5NzguNjAuMC4w"} name={"Mitchell Hall"} />
      <Sponsors />
      <Footer />
    </main>
  );
};

export default Vote;
