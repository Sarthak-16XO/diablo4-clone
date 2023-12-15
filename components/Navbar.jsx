import React from 'react'
import { FaDiscord } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/logo.png"
import { CiSearch } from "react-icons/ci";
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="footer p-4 flex flex-col gap-y-6">
      <div className='flex items-center justify-between'>
        <div className="flex items-center">
          <Link href="/" className="flex flex-row gap-1 items-center" >
            <Image src={logo} alt="logo" className="h-[3rem] w-[10rem]" />
          </Link>
        </div>

        <div className="flex-grow mx-4">
          <div className="flex">

            <div className="relative w-[40rem] rounded-lg">
              <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-transparent rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder="Try searching for Temerity.." />
              <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white footer rounded-e-lg ">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-row items-center gap-6'>

          <div className='h-10 w-10 p-1 rounded-full bg-indigo-700'>
            <FaDiscord className='h-8 w-8' />
          </div>
          <p className='hover:underline cursor-pointer'>Login</p>
        </div>
      </div>

      <div className='grid grid-flow-col justify-start gap-10'>
        <div className='grid grid-flow-col items-center gap-10'>
          <p className='text-slate-200'>Trackers</p>
          <p className='text-slate-200'>Builds</p>
          <p className='text-slate-200'>Database</p>
          <p className='text-slate-200'>Tools</p>
          <p className='text-slate-200'>Guides</p>
          <p className='text-slate-200'>Tier Lists</p>
          <p className='text-slate-200'>Map</p>
        </div>
        <button className='p-2 bg-red-800 rounded-md hover:bg-red-500'>
          <p className='text-white'>Build Planner</p>
        </button>
      </div>

    </nav>
  )
}

export default Navbar