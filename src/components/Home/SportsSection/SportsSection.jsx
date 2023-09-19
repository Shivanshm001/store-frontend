import React from 'react'
import { Link } from 'react-router-dom';

import basketball from './images/basketball.jpg';
import { Carousel } from '../Carousel/Carousel';

const fashionCardData = [
    {
        image: "https://picsum.photos/500/400",
        name: "Converse shoes",
        featured: true,
        price: 195
    },
    {
        image: "https://picsum.photos/500/400",
        name: "Jordan shoes",
        featured: true,
        price: 145
    },
    {
        image: "https://picsum.photos/500/400",
        name: "Puma shoes",
        featured: false,
        price: 175
    },
    {
        image: "https://picsum.photos/500/400",
        name: "Nike shoes",
        featured: true,
        price: 445
    },
]

export function SportsSection() {
    return (
        <div className='grid w-full  min-h-screen grid-cols-4'>
            <div className='col-span-3 grid place-items-center'>
                <Carousel data={fashionCardData} />
            </div>
            <div className=' col-span-1 relative '>
                <img src={basketball} alt="Static iamge" className='min-w-full max-w-full min-h-full object-cover shadow-inner shadow-black scale-90 filter contrast-75' />
                <div className='absolute top-[40%] w-full flex justify-center items-center text-center'>
                    <div className='flex w-full justify-center items-center gap-4 flex-col'>
                        <p className='font-semibold text-neutral-100 tracking-wider text-6xl'>Sports</p>
                        <Link to={"/category/sports"} className='text-white pb-2  text-2xl border-b-2 border-b-white hover:tracking-widest transition-all duration-150'>Discover More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
