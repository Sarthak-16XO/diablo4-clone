import React from 'react'
import { Activity } from 'lucide-react';
import Image from 'next/image';

import news1 from "../assets/news1.webp"
import news2 from "../assets/news2.webp"
import news3 from "../assets/news3.webp"
import news4 from "../assets/news4.webp"


const News = () => {
    return (
        <div className='bg-transparent w-[75%] overflow-y-hidden h-full'>
            <div className='flex flex-row gap-6 items-center mt-10'>
                <div className='rounded-md p-2 greybg'>
                    <Activity size={24} className='text-red-600' />
                </div>
                <div className=''>
                    <p className='text-white font-light text-2xl'>Featured News</p>
                </div>
            </div>

            <div className='flex flex-row gap-x-10 mt-6'>
                <div>
                    <div class="w-[37rem] greybg transition opacity-90 hover:opacity-100 cursor-pointer  h-full rounded-lg shadow hover:bg-gray-700">
                        <div>
                            <Image class="rounded-t-lg" src={news1} alt="" />
                        </div>
                        <div class="p-5">
                            <div>
                                <h5 class="mb-2 mt-4 text-3xl text-gray-900 dark:text-white">Significantly Reduced Cost for Bloodforged Sigils</h5>
                            </div>
                            <p class="mb-3 font-normal text-gray-200">Cost has been lowered by 5 to 7 times across all tiers</p>
                            <p class="mb-3 font-normal text-gray-400">yesterday, by Prowner</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-flow-row grid-cols-1 gap-y-4'>
                    <div class="flex flex-col items-start w-[32rem] greybg cursor-pointer  shadow md:flex-row md:max-w-xl h-[10rem] rounded-lg  transition opacity-90 hover:opacity-100 hover:bg-gray-700">
                        <Image class="object-cover w-full  rounded-t-lg  h-full md:w-48 md:rounded-none md:rounded-s-lg" src={news2} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-lg  tracking-tight text-gray-900 dark:text-white">Big Itemization Overhaul Coming to Season 4</h5>
                            <p class="mb-3 font-normal text-gray-400">1 week ago, by Prowner</p>
                        </div>
                    </div>

                    <div class="flex flex-col items-start w-[32rem] greybg cursor-pointer  shadow md:flex-row md:max-w-xl h-[10rem] rounded-lg transition-colors opacity-90 hover:opacity-100 hover:bg-gray-700">
                        <Image class="object-cover w-full  rounded-t-lg  h-full md:w-48 md:rounded-none md:rounded-s-lg" src={news3} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-lg  tracking-tight text-white">Midwinter Blight: All Details Explained (Now Live!)</h5>
                            <p class="mb-3 font-normal text-gray-400">2 weeks ago, by Prowner</p>
                        </div>
                    </div>
                    <div class="flex flex-col items-start w-[32rem] greybg cursor-pointer  shadow md:flex-row md:max-w-xl h-[10rem] rounded-lg transition-colors opacity-90 hover:opacity-100 hover:bg-gray-700">
                        <Image class="object-cover w-full  rounded-t-lg  h-full md:w-48 md:rounded-none md:rounded-s-lg" src={news4} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-lg  tracking-tight text-white">Major Change Coming to Helltides</h5>
                            <p class="mb-3 font-normal text-gray-400">2 weeks ago, by Prowner</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default News