import Image from 'next/image'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className='w-screen'>
      <Navbar />
      <Footer />
    </div>
  )
}