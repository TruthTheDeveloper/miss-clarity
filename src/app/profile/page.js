import ProfileCard from "@/organisms/Profile/ProfileCard";
import Navbar from "@/organisms/LandingPage/NavBar";
import Sponsors from "@/organisms/LandingPage/Sponsors";
import Footer from "@/organisms/LandingPage/Footer";

const Profile = () => {

    return(
        <main className="min-h-screen bg-[white] text-text-black w-full ">
            <Navbar/>
            <ProfileCard/>
            <Sponsors/>
            <Footer/>
        </main>
    )
}
export default Profile;