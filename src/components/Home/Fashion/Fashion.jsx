import React from 'react'

import { Link } from 'react-router-dom';

import static_boy from './images/static-boy.jpg';

export function Fashion() {
    return (
        <div className='grid w-full  min-h-screen grid-cols-4'>
            <div className=' col-span-1 relative '>
                <img src={static_boy} alt="Static iamge" className='min-w-full max-w-full min-h-full object-cover shadow-inner shadow-black scale-90 filter contrast-75' />
                <div className='absolute top-[40%] w-full flex justify-center items-center text-center'>
                    <div className='flex w-full justify-center items-center gap-4 flex-col'>
                        <p className='font-semibold text-neutral-100 tracking-wider text-6xl'>Fashion</p>
                        <Link to={"/category/fashion"} className='text-white pb-2  text-2xl border-b-2 border-b-white'>Discover More</Link>
                    </div>
                </div>
            </div>
            <div className='col-span-3'>
            </div>
        </div>
    )
}
