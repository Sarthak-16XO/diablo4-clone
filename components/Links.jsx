import React from 'react'

const Links = () => {
  return (
    <div className='bg-transparent w-[75%] overflow-y-hidden h-full'>
        <div className='mb-4 mt-10'>
            <p className='text-white font-light text-xl'>Quick Links</p>
        </div>
        <div className='grid grid-flow-col gap-x-10'>
            <div className='p-4 pt-6 cursor-pointer  h-20  hover:bg-slate-600 links-div  rounded-r-lg'>
                <p className='text-white font-medium text-center'>Helltide Chest</p>
            </div>
            <div className='p-4 pt-6 h-20 cursor-pointer  hover:bg-slate-600 links-div  rounded-r-lg'>
                <p className='text-white font-medium text-center'>Aspect Gambling</p>
            </div>
            <div className='p-4 pt-6 h-20 cursor-pointer  hover:bg-slate-600 links-div  rounded-r-lg'>
                <p className='text-white font-medium text-center'>Target Farming</p>
            </div>
            <div className='p-4 pt-6 h-20 cursor-pointer  hover:bg-slate-600 links-div  rounded-r-lg'>
                <p className='text-white font-medium text-center'>Tier Lists</p>
            </div>
        </div>
    </div>
  )
}

export default Links