import React from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react';
import { MoveLeft } from 'lucide-react';
import lnews1 from "../assets/lnews1.webp"
import lnews2 from "../assets/lnews2.webp"
import lnews3 from "../assets/lnews3.webp"
import lnews4 from "../assets/lnews4.webp"



const News = () => {
    return (
        <div className='bg-transparent w-[75%] overflow-y-hidden h-[27rem]'>
            <div className='flex flex-row justify-end'>
                <div className='mb-4 flex flex-row items-center gap-x-6 mt-10'>
                    <p className='text-white font-light text-xl'>Diablo 4 Latest News</p>
                    <div className='flex flex-row items-center gap-x-1 hover:gap-x-4 transition-all duration-300 ease-in-out'>
                        <p className='text-sm text-gray-400 hover:underline cursor-pointer'>View all news</p>
                        <MoveRight size={10} className='text-gray-400' />
                    </div>
                </div>
                <div className='mb-4 flex flex-row items-center gap-x-3 mt-10 ml-auto'>
                    <p className='text-slate-400 font-light text-sm'>1/6</p>
                    <div className='p-2 rounded-lg cursor-pointer greybg hover:bg-slate-600'>
                        <MoveLeft size={14} className='text-gray-100' />
                    </div>
                    <div className='p-2 rounded-lg cursor-pointer greybg hover:bg-slate-600'>
                        <MoveRight size={14} className='text-gray-100' />
                    </div>
                </div>
            </div>

            <div className='grid grid-flow-col '>
                <div class="w-[17rem] bg-transparent transition opacity-90 hover:opacity-100 cursor-pointer  h-full ">
                    <div>
                        <Image class="rounded-lg" src={lnews1} alt="" />
                    </div>
                    <div className='absolute -mt-7 ml-2 bg-slate-600 p-1 rounded-md'>
                        <p className='text-[0.65rem]'>Endgame</p>
                    </div>
                    <div class="pt-4">
                        <div >
                            <h5 class="mb-2 text-md text-left text-white">How to find the secret Cow level</h5>
                        </div>
                        <p class="mb-1 font-normal text-sm text-gray-400">1 week ago, by Prowner</p>
                        <p class="mb-3 font-normal text-sm text-gray-400">Updated 1 week ago</p>
                    </div>
                </div>
                <div class="w-[17rem] bg-transparent transition opacity-90 hover:opacity-100 cursor-pointer  h-full ">
                    <div>
                        <Image class="rounded-lg" src={lnews2} alt="" />
                    </div>
                    <div className='absolute -mt-7 ml-2 bg-slate-600 p-1 rounded-md'>
                        <p className='text-[0.65rem]'>Endgame</p>
                    </div>
                    <div class="pt-4">
                        <div >
                            <h5 class="mb-2 text-md text-left text-white">Midwinter Blight: All Details Explained (Now Live!)</h5>
                        </div>
                        <p class="mb-1 font-normal text-sm text-gray-400">2 weeks ago, by Prowner</p>
                        <p class="mb-3 font-normal text-sm text-gray-400">Updated 1 week ago</p>
                    </div>
                </div>
                <div class="w-[17rem] bg-transparent transition opacity-90 hover:opacity-100 cursor-pointer  h-full ">
                    <div>
                        <Image class="rounded-lg" src={lnews3} alt="" />
                    </div>
                    <div className='absolute -mt-7 ml-2 bg-slate-600 p-1 rounded-md'>
                        <p className='text-[0.65rem]'>Endgame</p>
                    </div>
                    <div class="pt-4">
                        <div >
                            <h5 class="mb-2 text-md text-left text-white">Diablo 4 Gambling Tool Guide: Maximize Your Legendary Aspect Odds</h5>
                        </div>
                        <p class="mb-1 font-normal text-sm text-gray-400">2 weeks ago, by Prowner</p>
                    </div>
                </div>
                <div class="w-[17rem] bg-transparent transition opacity-90 hover:opacity-100 cursor-pointer  h-full ">
                    <div>
                        <Image class="rounded-lg" src={lnews4} alt="" />
                    </div>
                    <div className='absolute -mt-7 ml-2 bg-slate-600 p-1 rounded-md'>
                        <p className='text-[0.65rem]'>Event</p>
                    </div>
                    <div className='absolute -mt-7 ml-12 bg-slate-600 p-1 rounded-md'>
                        <p className='text-[0.65rem]'>Endgame</p>
                    </div>
                    <div class="pt-4">
                        <div >
                            <h5 class="mb-2 text-md text-left text-white">Diablo 4 Gambling Tool Guide: Maximize Your Legendary Aspect Odds</h5>
                        </div>
                        <p class="mb-1 font-normal text-sm text-gray-400">2 weeks ago, by Prowner</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;