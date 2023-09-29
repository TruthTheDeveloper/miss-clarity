import DashBoard from '@/organisms/DashBoard'
import Footer from '@/organisms/LandingPage/Footer'
import Navbar from '@/organisms/LandingPage/NavBar'
import Sponsors from '@/organisms/LandingPage/Sponsors'


export default function Home() {
  return (
    <main className="min-h-screen bg-[white] text-text-black w-full">
      <Navbar/>
     <DashBoard/>
     <Sponsors/>
     <Footer/>
    </main>
  )
}
