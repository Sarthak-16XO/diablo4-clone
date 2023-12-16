"use client"

import React, { useState } from 'react';
import { FaDiscord } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/logo.png";

const DropdownContent = ({ content }) => {
  return (
    <div className="absolute z-30 mt-6 -ml-6 bg-slate-600 border border-gray-300 shadow-lg">
      <div className="p-2">
        <ul className="gap-4 w-[12rem]">
          {content.map((item, index) => (
            <li key={index} className="text-slate-200 p-4 cursor-pointer hover:text-white">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isTrackersDropdownVisible, setIsTrackersDropdownVisible] = useState(false);
  const [isBuildsDropdownVisible, setIsBuildsDropdownVisible] = useState(false);
  const [isDatabaseDropdownVisible, setIsDatabaseDropdownVisible] = useState(false);
  const [isToolsDropdownVisible, setIsToolsDropdownVisible] = useState(false);
  const [isGuidesDropdownVisible, setIsGuidesDropdownVisible] = useState(false);
  const [isTierListsDropdownVisible, setIsTierListsDropdownVisible] = useState(false);


  const handleTrackersMouseEnter = () => {
    setIsTrackersDropdownVisible(true);
  };

  const handleTrackersMouseLeave = () => {
    setIsTrackersDropdownVisible(false);
  };

  const handleBuildsMouseEnter = () => {
    setIsBuildsDropdownVisible(true);
  };

  const handleBuildsMouseLeave = () => {
    setIsBuildsDropdownVisible(false);
  };

  const handleDatabaseMouseEnter = () => {
    setIsDatabaseDropdownVisible(true);
  };

  const handleDatabaseMouseLeave = () => {
    setIsDatabaseDropdownVisible(false);
  };

  const handleToolsMouseEnter = () => {
    setIsToolsDropdownVisible(true);
  };

  const handleToolsMouseLeave = () => {
    setIsToolsDropdownVisible(false);
  };

  const handleGuidesMouseEnter = () => {
    setIsGuidesDropdownVisible(true);
  };

  const handleGuidesMouseLeave = () => {
    setIsGuidesDropdownVisible(false);
  };

  const handleTierListsMouseEnter = () => {
    setIsTierListsDropdownVisible(true);
  };

  const handleTierListsMouseLeave = () => {
    setIsTierListsDropdownVisible(false);
  };

  return (
    <nav className="greybg pt-4 flex flex-col w-full pl-10 pr-10 gap-y-6">
      <div className='flex items-center justify-between'>
        <div className="flex items-center">
          <Link href="/" className="flex flex-row gap-1 items-center" >
            <Image src={logo} alt="logo" className="h-[3rem] w-[10rem]" />
          </Link>
        </div>

        <div className="flex-grow mx-4">
          <div className="flex">

            <div className="relative w-[40rem] rounded-lg">
              <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm  bg-transparent rounded-e-lg border-s-gray-50  border  rounded-md border-gray-600 text-white " placeholder="Try searching for Temerity.." />
              <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white greybg rounded-e-lg border-gray-600 border">
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

      <div className='grid grid-flow-col items-center justify-start gap-10'>
        <div className='grid grid-flow-col items-center '>
          <div
            className="grid grid-flow-col items-center relative"
            onMouseEnter={handleTrackersMouseEnter}
            onMouseLeave={handleTrackersMouseLeave}
          >
            <div className="bg-transparent cursor-pointer p-6 hover:bg-slate-600">
              <p className="text-slate-200">Trackers</p>
              {isTrackersDropdownVisible && <DropdownContent content={['Helltide', 'Legion Events', 'World Bosses']} />}
            </div>
          </div>

          <div
            className="grid grid-flow-col items-center relative"
            onMouseEnter={handleBuildsMouseEnter}
            onMouseLeave={handleBuildsMouseLeave}
          >
            <div className="bg-transparent cursor-pointer p-6 hover:bg-slate-600">
              <p className="text-slate-200">Builds</p>
              {isBuildsDropdownVisible && <DropdownContent content={['Community Builds', 'Featured Builds', 'Build Planner']} />}
            </div>
          </div>
          <div
          className="grid grid-flow-col items-center relative"
          onMouseEnter={handleDatabaseMouseEnter}
          onMouseLeave={handleDatabaseMouseLeave}
        >
          <div className="bg-transparent cursor-pointer p-6 hover:bg-slate-600">
            <p className="text-slate-200">Database</p>
            {isDatabaseDropdownVisible && <DropdownContent content={['Unique Loot Tables', 'Vampriric Powers', 'Skills', 'Aspects', 'Uniques']} />}
          </div>
        </div>
          <div
            className="grid grid-flow-col items-center relative"
            onMouseEnter={handleToolsMouseEnter}
            onMouseLeave={handleToolsMouseLeave}
          >
            <div className="bg-transparent cursor-pointer p-6 hover:bg-slate-600">
              <p className="text-slate-200">Tools</p>
              {isToolsDropdownVisible && <DropdownContent content={['Gambling Aspects', 'Target Farming Uniques', 'Nightmare Dungeons']} />}
            </div>
          </div>

          <div
            className="grid grid-flow-col items-center relative"
            onMouseEnter={handleGuidesMouseEnter}
            onMouseLeave={handleGuidesMouseLeave}
          >
            <div className="bg-transparent cursor-pointer p-6 hover:bg-slate-600">
              <p className="text-slate-200">Guides</p>
              {isGuidesDropdownVisible && <DropdownContent content={['Abattoir of Zir', 'Midwinter Blight', 'Secret Cow Level']} />}
            </div>
          </div>

          <div
            className="grid grid-flow-col items-center relative"
            onMouseEnter={handleTierListsMouseEnter}
            onMouseLeave={handleTierListsMouseLeave}
          >
            <div className="bg-transparent cursor-pointer p-6 hover:bg-slate-600">
              <p className="text-slate-200">Tier Lists</p>
              {isTierListsDropdownVisible && <DropdownContent content={['Nightmare Dungeons', 'Unique Items', 'Vampiric Powers']} />}
            </div>
          </div>
          <div className='bg-transparent cursor-pointer p-6 hover:bg-slate-600'>
            <p className='text-slate-200'>Map</p>
          </div>
        </div>
        <button className=' h-8 py-1 px-4 text-sm bg-red-800 rounded-md hover:bg-red-500'>
          <p className='text-white'>Build Planner</p>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;