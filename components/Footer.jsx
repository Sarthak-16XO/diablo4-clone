import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <>
      <footer className=" footer border-t-2 ">
        <div className="mx-auto w-[110%] md:w-[100%] max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex flex-row gap-1 items-center" >
                <Image src={logo} alt="logo" className="h-[6rem] w-[14rem]" />
              </Link>
              <p className="text-lg text-white mt-4 ml-4">Diablo4.life is not affiliated with or endorsed by Activision Blizzard, Inc.</p>
              <Link href="mailto:contact@diablo4.life" className="text-lg text-slate-400 mt-4 ml-4 hover:underline">contact@diablo4.life</Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className="md:mr-8 mb-8 md:mb-0">
                <h2 className="text-lg mb-8 font-bold text-gray-100 ">Links</h2>
                <ul className="text-gray-400 space-y-4">
                  <li>
                    <p href="/" className='hover:underline cursor-pointer'>Contact</p>
                  </li>
                  <li>
                    <p className='hover:underline cursor-pointer'>Privacy Policy</p>
                  </li>
                  <li>
                    <p className='hover:underline cursor-pointer'>Tools</p>
                  </li>
                  <li>
                    <p className='hover:underline cursor-pointer'>Content Creators</p>
                  </li>
                  <li>
                    <p className='hover:underline cursor-pointer'>Build Planner</p>
                  </li>
                </ul>
              </div>
              <div className="md:mr-8 mb-8 md:mb-0">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Official</h2>
                <ul className="text-gray-400 space-y-4">
                  <li>
                    <p href="/" className='hover:underline cursor-pointer'>Discord</p>
                  </li>
                  <li>
                    <p className='hover:underline cursor-pointer'>Reddit</p>
                  </li>
                  <li>
                    <p className='hover:underline cursor-pointer'>Blizzard Forum</p>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-200 sm:text-center">© December 2023 <Link href="https://diablo4.life/" className="hover:underline">AnswerWise.ai</Link> Diablo4Life. All rights reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;