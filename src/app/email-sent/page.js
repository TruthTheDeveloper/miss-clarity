import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import Footer from "@/organisms/LandingPage/Footer";
import SentEmail from "@/organisms/LandingPage/SentEmail";

const Home = () => {
  return (
    <main className="min-h-screen bg-[white] text-text-black w-full ">
      <Navbar />

      <SentEmail />

      <Sponsors />
      <Footer />
    </main>
  );
};

export default Home;
