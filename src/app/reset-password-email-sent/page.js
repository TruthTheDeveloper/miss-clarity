import ProfileCard from "@/organisms/Profile/ProfileCard";
import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import Footer from "@/organisms/LandingPage/Footer";
import VerifiedEmail from "@/organisms/Verified/page";

const Profile = () => {

    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <VerifiedEmail/>
            <Sponsors/>
            <Footer/>
        </main>
    )
}
export default Profile;