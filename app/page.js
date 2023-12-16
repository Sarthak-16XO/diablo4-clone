import Image from 'next/image'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Links from '@/components/Links'
import News from '@/components/News'
import Guides from '@/components/Guides'
import LatestNews from "../components/latestNews"

export default function Home() {
  return (
    <div className='w-screen'>
      <Navbar />
      <div className='mainbg'>
        <div className='flex  justify-center'>
          <News />
        </div>
        <div className='flex  justify-center'>
          <Links />
        </div>
        <div className='flex  justify-center'>
          <Guides />
        </div>
        <div className='flex  justify-center'>
          <LatestNews />
        </div>
      </div>
      <Footer />
    </div>
  )
}
