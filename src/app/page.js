import Navbar from '@/organisms/LandingPage/NavBar'
import Header from '@/organisms/LandingPage/Header'
import Prize from '@/organisms/LandingPage/Prize'
import Contest from '@/organisms/LandingPage/Contest'
import Participate from '@/organisms/LandingPage/Participate'
import Rules from '@/organisms/LandingPage/Rules'
import ReceivePrize from '@/organisms/LandingPage/ReceivePrize'
import ContactUs from '@/organisms/LandingPage/ContactUs'
import Frequently from '@/organisms/LandingPage/Frequently'
import Footer from '@/organisms/LandingPage/Footer'
import Sponsors from '@/organisms/LandingPage/Sponsors'
import PreviousWinner from '@/organisms/LandingPage/PreviousWinner'


export default function Home() {
  return (
    <main className="min-h-screen bg-[white] text-text-black w-full ">
      <Navbar/>
      <Header/>
      <Sponsors/>
      <PreviousWinner/>
      <Prize/>
      <Contest/>
      <Participate/>
      <Rules/>
      <div className='md:flex md:justify-between'>
      <ReceivePrize/>
      <ContactUs/>
      </div>
      <Frequently/>
      <Footer/>
    </main>
  )
}
