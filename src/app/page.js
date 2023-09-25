import Navbar from '@/organisms/NavBar'
import Header from '@/organisms/Header'
import Prize from '@/organisms/Prize'
import Contest from '@/organisms/Contest'
import Participate from '@/organisms/Participate'
import Rules from '@/organisms/Rules'
import ReceivePrize from '@/organisms/ReceivePrize'
import ContactUs from '@/organisms/ContactUs'
import Frequently from '@/organisms/Frequently'
import Footer from '@/organisms/Footer'


export default function Home() {
  return (
    <main className="min-h-screen bg-[white] text-text-black w-full ">
      <Navbar/>
      <Header/>
      <Prize/>
      <Contest/>
      <Participate/>
      <Rules/>
      <ReceivePrize/>
      <ContactUs/>
      <Frequently/>
      <Footer/>
    </main>
  )
}
